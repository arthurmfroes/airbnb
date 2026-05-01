import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { guideConfig } from '../../data/guideConfig';
import * as LucideIcons from 'lucide-react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

// Fix for default marker icons in React-Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Category color mapping
const CATEGORY_STYLES = {
  turismo: { color: '#FF5A5F', icon: 'Camera' },
  utilitarios: { color: '#00A699', icon: 'ShoppingBag' },
  restaurantes: { color: '#FC642D', icon: 'Utensils' },
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
    if (active) {
      map.setView(center, map.getZoom());
    }
  }, [map, center, active]);
  return null;
}

const RoutingEngine = ({ from, to, mode }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!map || !from || !to) {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
        routingControlRef.current = null;
      }
      return;
    }

    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }

    const profile = mode === 'walk' ? 'foot' : 'driving';

    routingControlRef.current = L.Routing.control({
      waypoints: [
        L.latLng(from[0], from[1]),
        L.latLng(to[0], to[1])
      ],
      router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1',
        profile: profile
      }),
      lineOptions: {
        styles: [
          { color: '#484848', weight: 4, opacity: 0.3 }, // Base discreet gray
          { color: '#484848', weight: 1.5, opacity: 0.5 } // Thinner core for definition
        ]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      show: false,
      createMarker: () => null
    }).addTo(map);

    return () => {
      if (routingControlRef.current && map) {
        map.removeControl(routingControlRef.current);
        routingControlRef.current = null;
      }
    };
  }, [map, from, to, mode]);

  return null;
};

const MapComponent = ({ activeCategory, activeTag, mode, toId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const baseUrl = import.meta.env.BASE_URL;

  // Responsive zoom
  const initialZoom = window.innerWidth < 768 ? 16 : 17;
  
  const filteredPlaces = guideConfig.places.filter(place => {
    const categoryMatch = !activeCategory || place.category === activeCategory;
    const tagMatch = !activeTag || (place.tags && place.tags.includes(activeTag));
    return categoryMatch && tagMatch;
  });

  const selectedPlace = toId ? guideConfig.places.find(p => p.id === parseInt(toId)) : null;

  const handleMarkerClick = (placeId) => {
    const params = new URLSearchParams(searchParams);
    params.set('to', placeId);
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        center={guideConfig.property.coords} 
        zoom={initialZoom} 
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        <RoutingEngine 
          from={guideConfig.property.coords} 
          to={selectedPlace?.coords} 
          mode={mode} 
        />

        {/* Property Marker */}
        <Marker 
          position={guideConfig.property.coords} 
          icon={createCustomPin('property')}
          eventHandlers={{ 
            click: () => {
              const params = new URLSearchParams(searchParams);
              params.delete('to');
              navigate({ pathname: location.pathname, search: params.toString() });
            }
          }}
        >
          <Tooltip permanent direction="top" offset={[0, -10]} className="property-legend">
            Residencial Vivant
          </Tooltip>
          <Popup>
            <div className="popup-container">
              <img src={`${baseUrl}assets/property/vivant.png`} alt="Residencial Vivant" className="popup-image" />
              <div className="popup-content">
                <div className="popup-title">{guideConfig.property.name}</div>
                <div className="popup-description">{guideConfig.property.address}</div>
                <div className="text-xs font-bold text-red-500 uppercase tracking-wider">Seu Lugar</div>
              </div>
            </div>
          </Popup>
        </Marker>

        {/* Places Markers */}
        {filteredPlaces.map((place, index) => {
          const style = CATEGORY_STYLES[place.category] || CATEGORY_STYLES.utilitarios;
          const IconComponent = LucideIcons[style.icon];
          const isSelected = selectedPlace?.id === place.id;
          
          const direction = index % 2 === 0 ? 'top' : 'bottom';
          const offset = index % 2 === 0 ? [0, -10] : [0, 10];

          return (
            <Marker 
              key={place.id} 
              position={place.coords} 
              icon={createCustomPin(place.category)}
              eventHandlers={{ 
                click: () => handleMarkerClick(place.id)
              }}
            >
              <Tooltip 
                permanent 
                direction={direction} 
                offset={offset} 
                className={`category-label ${isSelected ? 'selected' : ''}`}
              >
                <div style={{ color: style.color, display: 'flex', alignItems: 'center' }}>
                   {IconComponent && <IconComponent size={14} />}
                </div>
                {place.name}
              </Tooltip>
              <Popup>
                <div className="popup-container">
                  {place.image && (
                    <img src={place.image} alt={place.name} className="popup-image" />
                  )}
                  <div className="popup-content">
                    <div className="popup-title">{place.name}</div>
                    <div className="popup-description">{place.description}</div>
                    <div className="popup-actions">
                      <div className="popup-actions-title">Abrir em</div>
                      <div className="popup-actions-grid">
                        <a 
                          href={place.links.google} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-app"
                        >
                          <img src={`${baseUrl}assets/icons/google-maps.png`} alt="Google Maps" />
                          Google
                        </a>
                        <a 
                          href={place.links.apple} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-app"
                        >
                          <img src={`${baseUrl}assets/icons/apple-maps.png`} alt="Apple Maps" />
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
