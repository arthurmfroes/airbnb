import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { guideConfig } from '../data/guideConfig';
import * as LucideIcons from 'lucide-react';
import { ActionButton } from '../components/ActionButton';

const CATEGORY_STYLES = {
  restaurantes: { color: '#FC642D', icon: 'Utensils' },
  utilitarios: { color: '#00A699', icon: 'ShoppingBag' },
  turismo: { color: '#FF5A5F', icon: 'Camera' },
  saude: { color: '#4A90E2', icon: 'Hospital' }
};

const ListView = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;

  const placesByCategory = useMemo(() => {
    return guideConfig.categories.map(cat => {
      const categoryPlaces = guideConfig.places.filter(p => 
        p.category === cat.id && 
        (p.display === 'both' || p.display === 'list')
      );

      const subcategories = Array.from(new Set(categoryPlaces.map(p => p.subcategory || 'Outros')));
      
      const groupedPlaces = subcategories.map(sub => ({
        name: sub,
        places: categoryPlaces.filter(p => (p.subcategory || 'Outros') === sub)
      }));

      return {
        ...cat,
        subcategories: groupedPlaces
      };
    }).filter(cat => cat.subcategories.length > 0 && cat.subcategories[0].places.length > 0);
  }, []);

  return (
    <div className="list-container">
      <header className="app-header">
        <div className="header-top-row">
          <h1 onClick={() => navigate('/hub')} style={{ cursor: 'pointer' }}>{guideConfig.property.name}</h1>
          <button onClick={() => navigate('/map')} className="list-map-btn">
            <LucideIcons.Map size={18} />
            Mapa
          </button>
        </div>
        <p className="list-subtitle">Dicas e recomendações em Santa Maria</p>
      </header>

      <div className="list-content">
        {placesByCategory.map(category => (
          <section key={category.id} className="list-section">
            <div className="list-category-header">
              {React.createElement(LucideIcons[category.icon] || LucideIcons.MapPin, { 
                size: 20, 
                style: { color: CATEGORY_STYLES[category.id]?.color } 
              })}
              <h2>{category.name}</h2>
            </div>

            {category.subcategories.map(sub => (
              <div key={sub.name} className="list-subcategory-group">
                <h3 className="list-subcategory-title">{sub.name}</h3>
                <div className="list-grid">
                  {sub.places.map(place => (
                    <div key={place.id} className="place-card">
                      {place.image && (
                        <div className="place-card-image">
                          <img src={place.image} alt={place.name} />
                        </div>
                      )}
                      <div className="place-card-content">
                        <h4 className="place-card-title">{place.name}</h4>
                        <p className="place-card-description">{place.description}</p>
                        
                        <div className="popup-actions" style={{ marginTop: '12px' }}>
                          <ActionButton 
                            type={place.links.type} 
                            url={place.links.url} 
                            label={place.links.label} 
                            baseUrl={baseUrl} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ListView;
