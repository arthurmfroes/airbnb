import React from 'react';
import { useNavigate } from 'react-router-dom';
import { guideConfig } from '../data/guideConfig';
import { Map as MapIcon, List as ListIcon, ChevronRight } from 'lucide-react';

const Hub = () => {
  const navigate = useNavigate();

  return (
    <div className="hub-container">
      <div className="hub-header">
        <img src="/airbnb/assets/property/vivant.png" alt="Residencial Vivant" className="hub-hero" />
        <div className="hub-header-content">
          <h1>{guideConfig.property.name}</h1>
          <p>{guideConfig.property.address}</p>
        </div>
      </div>

      <div className="hub-options">
        <button onClick={() => navigate('/map')} className="hub-card">
          <div className="hub-card-icon map">
            <MapIcon size={24} />
          </div>
          <div className="hub-card-text">
            <h3>Explorar no Mapa</h3>
            <p>Veja todos os pontos e trace rotas em tempo real.</p>
          </div>
          <ChevronRight size={20} className="hub-arrow" />
        </button>

        <button onClick={() => navigate('/list')} className="hub-card">
          <div className="hub-card-icon list">
            <ListIcon size={24} />
          </div>
          <div className="hub-card-text">
            <h3>Guia em Lista</h3>
            <p>Dicas detalhadas organizadas por categoria.</p>
          </div>
          <ChevronRight size={20} className="hub-arrow" />
        </button>
      </div>

      <div className="hub-footer">
        <p>Bem-vindo a Santa Maria!</p>
      </div>
    </div>
  );
};

export default Hub;
