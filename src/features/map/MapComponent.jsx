import React, { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import { guideConfig } from '../../data/guideConfig';
import * as LucideIcons from 'lucide-react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

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

function ChangeView({ center, active }) {
  const map = useMap();
  useEffect(() => {
    if (active && map) map.setView(center, map.getZoom());
  }, [map, center, active]);
  return null;
}

const MapComponent = ({ activeCategory, activeTag, mode, toId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const baseUrl = import.meta.env.BASE_URL;
  const initialZoom = window.innerWidth < 768 ? 16 : 17;
  
  const [routeCoords, setRouteCoords] = useState([]);

  const filteredPlaces = guideConfig.places.filter(place => {
    const categoryMatch = !activeCategory || place.category === activeCategory;
    const tagMatch = !activeTag || (place.tags && place.tags.includes(activeTag));
    return categoryMatch && tagMatch;
  });

  const selectedPlace = toId ? guideConfig.places.find(p => p.id === parseInt(toId)) : null;

  // Manual routing logic: Pure React state management
  useEffect(() => {
    if (!selectedPlace) {
      setRouteCoords([]);
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
      L.Routing.waypoint(L.latLng(guideConfig.property.coords[0], guideConfig.property.coords[1])),
      L.Routing.waypoint(L.latLng(selectedPlace.coords[0], selectedPlace.coords[1]))
    ];

    router.route(waypoints, (err, routes) => {
      if (!err && routes && routes[0]) {
        setRouteCoords(routes[0].coordinates);
        console.log(`[Routing] ${mode.toUpperCase()}: ${routes[0].summary.totalDistance.toFixed(1)}m em ${Math.round(routes[0].summary.totalTime/60)}min`);
      } else {
        console.error("Routing Error:", err);
      }
    });
  }, [selectedPlace, mode]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        center={guideConfig.property.coords} 
        zoom={initialZoom} 
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        
        {/* Render the route using a native React-Leaflet component */}
        {routeCoords.length > 0 && (
          <>
            <Polyline 
              positions={routeCoords} 
              pathOptions={{ color: '#484848', weight: 4, opacity: 0.3 }} 
            />
            <Polyline 
              positions={routeCoords} 
              pathOptions={{ color: '#484848', weight: 1.5, opacity: 0.5 }} 
            />
          </>
        )}

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

        {filteredPlaces.map((place, index) => {
          const style = CATEGORY_STYLES[place.category] || CATEGORY_STYLES.utilitarios;
          const IconComponent = LucideIcons[style.icon];
          const isSelected = selectedPlace?.id === place.id;
          const direction = index % 2 === 0 ? 'top' : 'bottom';

          return (
            <Marker 
              key={place.id} 
              position={place.coords} 
              icon={createCustomPin(place.category)}
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
                  click: () => {
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
                      <div className="popup-actions-title">Abrir em</div>
                      <div className="popup-actions-grid">
                        <a href={place.links.google} target="_blank" rel="noopener noreferrer" className="btn-app">
                          <img src={`${baseUrl}assets/icons/google-maps.png`} alt="Google" />
                          Google
                        </a>
                        <a href={place.links.apple} target="_blank" rel="noopener noreferrer" className="btn-app">
                          <img src={`${baseUrl}assets/icons/apple-maps.png`} alt="Apple" />
                          Apple
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
        {!selectedPlace && <ChangeView center={guideConfig.property.coords} active={!selectedPlace} />}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
