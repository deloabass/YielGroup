import React, { useState, useEffect } from 'react';
import { Users, Database, TrendingUp, Shield, Settings, CheckCircle } from 'lucide-react';

const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showIcon, setShowIcon] = useState(false);

  const loadingSteps = [
    { icon: Database, text: "Initialisation des données RH", delay: 1000 },
    { icon: Users, text: "Configuration des profils utilisateurs", delay: 1200 },
    { icon: Shield, text: "Vérification de sécurité", delay: 1000 },
    { icon: Settings, text: "Personnalisation de l'interface", delay: 1100 },
    { icon: TrendingUp, text: "Chargement des analytics", delay: 1000 },
    { icon: CheckCircle, text: "Finalisation", delay: 1000 }
  ];

  useEffect(() => {
    setShowIcon(true);
    
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 1000);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, loadingSteps[currentStep]?.delay || 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [currentStep]);

  const CurrentIcon = loadingSteps[currentStep]?.icon || Database;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f365b] to-[#232946] flex items-center justify-center relative overflow-hidden">
      {/* Éléments de fond animés */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/30 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#ea532b]/10 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-[#ea532b]/15 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Particules flottantes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#ea532b]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md w-full mx-auto px-6">
        {/* Logo/Brand */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${showIcon ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-[#ea532b] rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <span className="text-white font-bold text-2xl">Y</span>
              </div>
              {/* Cercles animés autour du logo */}
              <div className="absolute -inset-4 border-2 border-[#ea532b]/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-2 border border-[#ea532b]/50 rounded-full animate-spin-reverse"></div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">YIEL</h1>
            <p className="text-[#ea532b] font-medium">Solution SIRH Innovante</p>
          </div>
        </div>

        {/* Étape actuelle */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#ea532b] rounded-full p-3 animate-bounce">
                <CurrentIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-white font-medium text-lg mb-2">
              {loadingSteps[currentStep]?.text}
            </p>
            
            {/* Indicateur d'étapes */}
            <div className="flex justify-center space-x-2 mt-4">
              {loadingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index <= currentStep 
                      ? 'bg-[#ea532b] scale-125' 
                      : 'bg-white/30 scale-100'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white/70 mb-2">
            <span>Chargement...</span>
            <span>{Math.round(loadingProgress)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#ea532b] to-[#ff6b3d] rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(loadingProgress, 100)}%` }}
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Messages inspirants */}
        <div className="text-center">
          <div className="space-y-2 text-white/80">
            <p className="text-sm animate-pulse">
              "Transformez votre gestion RH de façon innovante"
            </p>
            <p className="text-xs">
              Expertise africaine • Solution personnalisable • Support 24/7
            </p>
          </div>
        </div>

        {/* Effet de vague en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg viewBox="0 0 400 100" className="w-full h-full">
            <path
              d="M0,50 Q100,20 200,50 T400,50 V100 H0 V50"
              fill="url(#waveGradient)"
              className="animate-wave"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ea532b" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ea532b" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ea532b" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-20px) rotate(270deg);
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;