import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoadingContext } from '../context/LoadingContext';

const LoadingLink = ({ 
  to, 
  children, 
  className = '', 
  loadingText = 'Chargement de la page...', 
  delay = 800,
  onClick,
  ...props 
}) => {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoadingContext();

  const handleClick = async (e) => {
    e.preventDefault();
    
    // Exécuter onClick personnalisé si fourni
    if (onClick) {
      onClick(e);
    }

    // Démarrer le loading
    startLoading(loadingText);

    // Simuler un délai de chargement
    setTimeout(() => {
      stopLoading();
      navigate(to);
    }, delay);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default LoadingLink;