import React, { useEffect, useState, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import { guideConfig } from '../../data/guideConfig';
import * as LucideIcons from 'lucide-react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { ActionButton } from '../../components/ActionButton';

// Fix for default marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const CATEGORY_STYLES = {
  restaurantes: { color: '#FC642D', icon: 'Utensils' },
  utilitarios: { color: '#00A699', icon: 'ShoppingBag' },
  turismo: { color: '#FF5A5F', icon: 'Camera' },
  saude: { color: '#4A90E2', icon: 'Hospital' },
  property: { color: '#222222', icon: 'Home' }
};

const createCustomPin = (category) => {
  return L.divIcon({
    className: 'custom-pin-container',
    html: `<div class="custom-pin pin-${category}"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

function MapController({ selectedPlace, initialCoords, markersRef }) {
  const map = useMap();

  useEffect(() => {
    if (selectedPlace) {
      map.flyTo(selectedPlace.coords, map.getZoom(), {
        animate: true,
        duration: 0.8
      });

      const timeout = setTimeout(() => {
        const marker = markersRef.current[selectedPlace.id];
        if (marker) {
          marker.openPopup();
        }
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      map.setView(initialCoords, map.getZoom());
    }
  }, [selectedPlace, map, initialCoords, markersRef]);

  return null;
}

const RoutingEngine = ({ from, to, mode, onRouteInfo }) => {
  const map = useMap();
  const [routeCoords, setRouteCoords] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (!map || !from || !to) {
      setRouteCoords([]);
      onRouteInfo?.(null);
      return;
    }

    const serviceUrl = mode === 'walk' 
      ? 'https://routing.openstreetmap.de/routed-foot/route/v1'
      : 'https://routing.openstreetmap.de/routed-car/route/v1';

    const router = L.Routing.osrmv1({
      serviceUrl: serviceUrl,
      profile: mode === 'walk' ? 'foot' : 'driving'
    });

    const waypoints = [
      L.Routing.waypoint(L.latLng(from[0], from[1])),
      L.Routing.waypoint(L.latLng(to[0], to[1]))
    ];

    router.route(waypoints, (err, routes) => {
      if (!isMounted) return;
      if (!err && routes && routes[0]) {
        setRouteCoords(routes[0].coordinates);
        onRouteInfo?.({
          distance: routes[0].summary.totalDistance,
          time: routes[0].summary.totalTime
        });
      } else {
        setRouteCoords([]);
        onRouteInfo?.(null);
      }
    });

    return () => { isMounted = false; };
  }, [map, from, to, mode, onRouteInfo]);

  return routeCoords.length > 0 ? (
    <>
      <Polyline positions={routeCoords} pathOptions={{ color: '#484848', weight: 4, opacity: 0.3 }} />
      <Polyline positions={routeCoords} pathOptions={{ color: '#484848', weight: 1.5, opacity: 0.5 }} />
    </>
  ) : null;
};

const MapComponent = ({ activeCategory, activeTag, mode, toId, onRouteInfo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const baseUrl = import.meta.env.BASE_URL;
  const initialZoom = window.innerWidth < 768 ? 16 : 17;
  const markersRef = useRef({});
  
  const selectedPlace = useMemo(() => 
    toId ? guideConfig.places.find(p => p.id === parseInt(toId)) : null
  , [toId]);

  const placesToRender = useMemo(() => {
    let list = guideConfig.places.filter(place => {
      const categoryMatch = !activeCategory || place.category === activeCategory;
      const tagMatch = !activeTag || (place.tags && place.tags.includes(activeTag));
      const displayMatch = place.display === 'both' || place.display === 'map';
      return categoryMatch && tagMatch && displayMatch;
    });
    
    if (selectedPlace && !list.find(p => p.id === selectedPlace.id)) {
      list.push(selectedPlace);
    }
    return list;
  }, [activeCategory, activeTag, selectedPlace]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        center={guideConfig.property.coords} 
        zoom={initialZoom} 
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        
        <MapController selectedPlace={selectedPlace} initialCoords={guideConfig.property.coords} markersRef={markersRef} />

        <RoutingEngine 
          from={guideConfig.property.coords} 
          to={selectedPlace?.coords} 
          mode={mode} 
          onRouteInfo={onRouteInfo}
        />

        <Marker 
          position={guideConfig.property.coords} 
          icon={createCustomPin('property')}
          eventHandlers={{ 
            click: () => {
              const params = new URLSearchParams(searchParams);
              params.delete('to');
              navigate(`/map/${activeCategory || ''}?${params.toString()}`);
            }
          }}
        >
          <Tooltip permanent direction="top" offset={[0, -10]} className="property-legend" interactive={true}>
            Residencial Vivant
          </Tooltip>
          <Popup>
            <div className="popup-container">
              <img src={`${baseUrl}assets/property/vivant.png`} alt="Vivant" className="popup-image" />
              <div className="popup-content">
                <div className="popup-title">{guideConfig.property.name}</div>
                <div className="popup-description">{guideConfig.property.address}</div>
                <div className="text-xs font-bold text-red-500 uppercase">Seu Lugar</div>
              </div>
            </div>
          </Popup>
        </Marker>

        {placesToRender.map((place, index) => {
          const style = CATEGORY_STYLES[place.category] || CATEGORY_STYLES.utilitarios;
          const IconComponent = LucideIcons[style.icon];
          const isSelected = selectedPlace?.id === place.id;
          const direction = index % 2 === 0 ? 'top' : 'bottom';

          return (
            <Marker 
              key={place.id} 
              position={place.coords} 
              icon={createCustomPin(place.category)}
              ref={el => { if (el) markersRef.current[place.id] = el; }}
              eventHandlers={{ 
                click: () => {
                  const params = new URLSearchParams(searchParams);
                  params.set('to', place.id);
                  navigate(`/map/${activeCategory || ''}?${params.toString()}`);
                }
              }}
            >
              <Tooltip permanent direction={direction} offset={[0, direction === 'top' ? -10 : 10]} interactive={true} className={`category-label ${isSelected ? 'selected' : ''}`}
                eventHandlers={{
                  click: (e) => {
                    L.DomEvent.stopPropagation(e);
                    const params = new URLSearchParams(searchParams);
                    params.set('to', place.id);
                    navigate(`/map/${activeCategory || ''}?${params.toString()}`);
                  }
                }}
              >
                <div style={{ color: style.color, display: 'flex', alignItems: 'center' }}>
                   {IconComponent && <IconComponent size={14} />}
                </div>
                {place.name}
              </Tooltip>
              <Popup>
                <div className="popup-container">
                  {place.image && <img src={place.image} alt={place.name} className="popup-image" />}
                  <div className="popup-content">
                    <div className="popup-title">{place.name}</div>
                    <div className="popup-description">{place.description}</div>
                    <div className="popup-actions">
                      <ActionButton 
                        type={place.links.type} 
                        url={place.links.url} 
                        label={place.links.label} 
                        baseUrl={baseUrl} 
                      />
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
