import React from 'react';
import * as LucideIcons from 'lucide-react';

export const ActionButton = ({ type, url, label, baseUrl }) => {
  if (!url) return null;

  const isGoogle = type === 'google';
  
  const getIcon = () => {
    if (isGoogle) return <img src={`${baseUrl}assets/icons/google-maps.png`} alt="Google" style={{ width: '20px', height: '20px' }} />;
    
    switch (type) {
      case 'instagram': return <img src={`${baseUrl}assets/icons/instagram.svg`} alt="Instagram" style={{ width: '20px', height: '20px' }} />;
      case 'menu': return <LucideIcons.UtensilsCrossed size={18} />;
      case 'website': return <LucideIcons.Globe size={18} />;
      default: return <LucideIcons.ExternalLink size={18} />;
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn-app-primary"
      style={{ marginBottom: '8px' }}
    >
      {getIcon()}
      {label || (isGoogle ? "Abrir no Google Maps" : "Acessar")}
    </a>
  );
};
