import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  BarChart3, 
  FileText, 
  Clock, 
  Shield,
  Zap,
  Target,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const LoadingPage = ({ isVisible = true, loadingText = "Chargement en cours..." }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [dots, setDots] = useState('');

  // Étapes de chargement SIRH
  const loadingSteps = [
    { icon: <Shield size={24} />, text: "Sécurisation des données", color: "text-blue-500" },
    { icon: <Users size={24} />, text: "Chargement des profils", color: "text-green-500" },
    { icon: <Calendar size={24} />, text: "Synchronisation des plannings", color: "text-purple-500" },
    { icon: <BarChart3 size={24} />, text: "Génération des rapports", color: "text-orange-500" },
    { icon: <FileText size={24} />, text: "Préparation de l'interface", color: "text-indigo-500" }
  ];

  // Animation des points
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  // Animation de la progression
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  // Animation des étapes
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % loadingSteps.length);
    }, 1200);

    return () => clearInterval(stepInterval);
  }, [loadingSteps.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#2f365b] via-[#3a4272] to-[#2f365b] z-[9999] flex items-center justify-center overflow-hidden">
      {/* Éléments de fond animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/30 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-[#ea532b]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-28 h-28 bg-[#ea532b]/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grille de fond subtile */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div 
              key={i} 
              className="bg-white/10 rounded-sm animate-pulse"
              style={{ animationDelay: `${i * 50}ms` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo et titre */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-[#ea532b] to-[#d44620] rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-6 animate-bounce">
            <img
              src="/logo.webp"
              alt="YIEL Logo"
              className="w-16 h-16 object-contain rounded-xl"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            YIEL
          </h1>
          <p className="text-[#ea532b] font-semibold text-lg">
            Système d'Information RH
          </p>
        </div>

        {/* Spinner principal avec cercles concentriques */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Cercle extérieur */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            
            {/* Cercle de progression */}
            <div 
              className="absolute inset-0 border-4 border-transparent border-t-[#ea532b] border-r-[#ea532b] rounded-full animate-spin"
              style={{ animationDuration: '1s' }}
            ></div>
            
            {/* Cercle intérieur */}
            <div 
              className="absolute inset-4 border-2 border-transparent border-b-white border-l-white rounded-full animate-spin"
              style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
            ></div>
            
            {/* Centre avec icône */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#ea532b] rounded-full flex items-center justify-center animate-pulse">
                {loadingSteps[currentStep]?.icon}
              </div>
            </div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80 text-sm font-medium">Progression</span>
            <span className="text-[#ea532b] font-bold text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#ea532b] to-[#f66b47] rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Étape actuelle */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className={`mr-3 ${loadingSteps[currentStep]?.color || 'text-white'} animate-bounce`}>
              {loadingSteps[currentStep]?.icon}
            </div>
            <span className="text-white font-medium">
              {loadingSteps[currentStep]?.text}
            </span>
          </div>
          <p className="text-white/70 text-sm">
            {loadingText}{dots}
          </p>
        </div>

        {/* Indicateurs de fonctionnalités SIRH */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { icon: <Users size={16} />, label: "Gestion RH", active: currentStep >= 1 },
            { icon: <Calendar size={16} />, label: "Planning", active: currentStep >= 2 },
            { icon: <BarChart3 size={16} />, label: "Analytics", active: currentStep >= 3 },
            { icon: <FileText size={16} />, label: "Documents", active: currentStep >= 4 }
          ].map((item, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center p-3 rounded-lg border transition-all duration-500 ${
                item.active 
                  ? 'bg-[#ea532b]/20 border-[#ea532b]/50 text-[#ea532b]' 
                  : 'bg-white/10 border-white/20 text-white/60'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
              {item.active && (
                <CheckCircle size={14} className="ml-2 text-[#ea532b]" />
              )}
            </div>
          ))}
        </div>

        {/* Messages motivants */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Zap size={16} className="text-[#ea532b] mr-2 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Optimisation en cours
              </span>
            </div>
            <p className="text-white/70 text-xs">
              Préparation de votre espace de travail personnalisé
            </p>
          </div>
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#ea532b]/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Effet de vague en bas */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto opacity-20"
          preserveAspectRatio="none"
        >
          <path
            fill="#ea532b"
            fillOpacity="0.3"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z;
                      M0,96L80,85.3C160,75,320,53,480,58C640,64,800,96,960,106C1120,117,1280,107,1360,101.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z;
                      M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default LoadingPage;