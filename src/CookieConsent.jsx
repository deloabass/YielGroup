import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  // Load preferences from localStorage on initial render
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      // If consent exists, don't show the banner
      setIsVisible(false);
    } else {
      // If no consent, show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (updatedPreferences) => {
    const consentToSave = {
      ...updatedPreferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentToSave));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    saveConsent(onlyNecessary);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key) => {
    // Necessary cookies cannot be toggled off
    if (key === 'necessary') return; 
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const cookieCategories = [
    {
      id: 'necessary',
      title: 'Cookies Nécessaires',
      description: 'Ces cookies sont essentiels au fonctionnement du site et à la sécurité de vos données RH.',
      required: true,
      examples: 'Authentification, session utilisateur, sécurité CSRF'
    },
    {
      id: 'analytics',
      title: 'Cookies d\'Analyse',
      description: 'Nous aident à comprendre l\'utilisation de nos outils RH pour améliorer l\'expérience utilisateur.',
      required: false,
      examples: 'Google Analytics, statistiques d\'utilisation des modules RH'
    },
    {
      id: 'functional',
      title: 'Cookies Fonctionnels',
      description: 'Permettent d\'améliorer les fonctionnalités et la personnalisation de votre espace RH.',
      required: false,
      examples: 'Préférences d\'affichage, langue, thème interface'
    },
    {
      id: 'marketing',
      title: 'Cookies Marketing',
      description: 'Utilisés pour personnaliser les communications et mesurer l\'efficacité de nos campagnes RH.',
      required: false,
      examples: 'Remarketing, publicités ciblées, tracking conversion'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Main message and details toggle */}
        <div className="flex-1 text-gray-700 text-sm w-full lg:w-auto">
          {!showDetails ? (
            <p className="text-center lg:text-left">
              Nous utilisons des cookies pour améliorer votre expérience sur notre plateforme SIRH. 
              En savoir plus sur notre{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">Politique de confidentialité</a>.
            </p>
          ) : (
            <div className="w-full">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center lg:text-left">Personnaliser les cookies</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar"> {/* Added custom-scrollbar for better UX */}
                {cookieCategories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-b-0">
                    <div className="flex-1 mr-4">
                      <h4 className="font-medium text-gray-800">{category.title}</h4>
                      <p className="text-xs text-gray-600">{category.description}</p>
                      {category.required && (
                        <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          Toujours actif
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => togglePreference(category.id)}
                      disabled={category.required}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        preferences[category.id] 
                          ? 'bg-gradient-to-r from-[#2f365b] to-[#ea532b]' // Using your gradient
                          : 'bg-gray-200'
                      } ${category.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          preferences[category.id] ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm mt-4 font-medium block mx-auto lg:mx-0"
              >
                ← Revenir au résumé
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {!showDetails ? (
            <>
              <button
                onClick={handleRejectAll}
                className="flex-1 px-6 py-3 text-nowrap border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                Refuser tout
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 text-nowrap bg-[#ea532b] text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm shadow-md"
              >
                Accepter tout
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 text-nowrap px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                Gérer mes préférences
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleRejectAll}
                className="flex-1 px-6 text-nowrap py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                Refuser tout
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 text-nowrap bg-[#131b41] text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm shadow-md"
              >
                Enregistrer les préférences
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 text-nowrap bg-[#ea532b] text-white rounded-lg hover:opacity-90 transition-colors font-medium text-sm shadow-md"
              >
                Accepter tout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;