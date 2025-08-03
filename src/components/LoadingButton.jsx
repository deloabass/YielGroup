import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoadingContext } from '../context/LoadingContext';

const LoadingButton = ({ 
  to, 
  children, 
  className = '', 
  loadingText = 'Chargement...', 
  delay = 800,
  onClick,
  disabled = false,
  ...props 
}) => {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoadingContext();

  const handleClick = async (e) => {
    e.preventDefault();
    
    if (disabled) return;

    // Exécuter onClick personnalisé si fourni
    if (onClick) {
      onClick(e);
    }

    // Si pas de destination, juste exécuter onClick
    if (!to) return;

    // Démarrer le loading
    startLoading(loadingText);

    // Simuler un délai de chargement
    setTimeout(() => {
      stopLoading();
      navigate(to);
    }, delay);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default LoadingButton;