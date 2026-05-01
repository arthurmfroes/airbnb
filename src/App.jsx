import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';
import MapComponent from './features/map/MapComponent';
import { guideConfig } from './data/guideConfig';
import * as LucideIcons from 'lucide-react';
import './App.css';

function GuideContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const activeTag = searchParams.get('tag');
  const mode = searchParams.get('mode') || 'car';
  const toId = searchParams.get('to');

  const updateCategory = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (category === categoryId) {
      navigate({ pathname: '/map', search: params.toString() });
    } else {
      navigate({ pathname: `/map/${categoryId}`, search: params.toString() });
    }
  };

  const updateMode = (newMode) => {
    const params = new URLSearchParams(searchParams);
    params.set('mode', newMode);
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>{guideConfig.property.name}</h1>
        <div className="category-filters">
          {guideConfig.categories.map(cat => {
            const IconComponent = LucideIcons[cat.icon] || LucideIcons.MapPin;
            return (
              <button
                key={cat.id}
                onClick={() => updateCategory(cat.id)}
                className={`filter-btn ${category === cat.id ? 'active' : ''}`}
              >
                <IconComponent size={16} style={{ marginRight: '8px' }} />
                {cat.name}
              </button>
            );
          })}
          {(category || activeTag || toId) && (
            <button onClick={() => navigate('/map')} className="filter-btn clear">
              <LucideIcons.X size={16} />
            </button>
          )}
        </div>
      </header>

      <main className="map-wrapper">
        <MapComponent 
          activeCategory={category} 
          activeTag={activeTag} 
          mode={mode} 
          toId={toId}
        />
        
        {/* Color Legend */}
        <div className="map-legend">
          {guideConfig.categories.map(cat => (
            <div key={cat.id} className="legend-item">
              <span className={`legend-dot pin-${cat.id}`}></span>
              <span className="legend-text">{cat.name}</span>
            </div>
          ))}
          <div className="legend-item">
            <span className="legend-dot pin-property"></span>
            <span className="legend-text">Vivant</span>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/airbnb">
      <Routes>
        <Route path="/" element={<GuideContent />} />
        <Route path="/map" element={<GuideContent />} />
        <Route path="/map/:category" element={<GuideContent />} />
        {/* Redirect any other path to root */}
        <Route path="*" element={<GuideContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
