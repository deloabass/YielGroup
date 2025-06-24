import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  PieChart,
  TrendingUp,
  Users,
  Clock,
  AlertTriangle,
  Award,
  BarChart,
  Bell,
  Calendar,
  Briefcase,
  Database,
  ChevronRight,
  Check,
  ArrowRight,
  UserCheck,
  FileText,
  Activity,
  Target,
  RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HrAnalytics() {
  const navigate = useNavigate()
  // État pour les animations au défilement
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('general');

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.15 }
    );

    // Observer toutes les sections et les cartes
    document
      .querySelectorAll("section[id], div[id^='feature-']")
      .forEach((element) => {
        observer.observe(element);
      });

    return () => observer.disconnect();
  }, []);

  // Fonctionnalités clés
  const analyticsFeatures = [
    {
      id: "data-visualization",
      title: "Tableaux de bord interactifs",
      description: "Visualisation à 360° en temps réel de tous vos indicateurs RH",
      icon: <PieChart size={24} />,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      details: [
        "Effectifs et mouvements du personnel",
        "Absences, congés et présences",
        "Performance et objectifs",
        "Coûts RH et masse salariale",
      ],
    },
    {
      id: "predictive-analytics",
      title: "Analytique prédictive",
      description: "Anticipez les tendances RH avec nos modèles prédictifs",
      icon: <TrendingUp size={24} />,
      color: "bg-green-100",
      textColor: "text-green-600",
      details: [
        "Prévision de turnover et rétention",
        "Anticipation des besoins en recrutement",
        "Projection des coûts salariaux",
        "Modélisation des risques d'absence",
      ],
    },
    {
      id: "custom-reports",
      title: "Rapports personnalisés",
      description: "Créez et automatisez vos rapports RH en quelques clics",
      icon: <FileText size={24} />,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      details: [
        "Exports vers Excel, PDF et PowerPoint",
        "Planification d'envois automatiques",
        "Bibliothèque de modèles prêts à l'emploi",
        "Personnalisation des indicateurs suivis",
      ],
    },
    {
      id: "smart-alerts",
      title: "Alertes intelligentes",
      description: "Détectez les signaux faibles avant qu'ils ne deviennent des problèmes",
      icon: <Bell size={24} />,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      details: [
        "Alertes sur seuils personnalisables",
        "Notifications de tendances anormales",
        "Suivi des risques de désengagement",
        "Alertes de fin de période d'essai",
      ],
    }
  ];

  // Use cases by role
  const useCasesByRole = [
    {
      role: "Direction générale",
      icon: <Briefcase size={24} />,
      cases: [
        "Vision consolidée des KPIs RH stratégiques",
        "Suivi des coûts RH et de la productivité",
        "Projection des besoins futurs en main d'œuvre",
        "Analyse comparative par département"
      ]
    },
    {
      role: "Service RH",
      icon: <Users size={24} />,
      cases: [
        "Suivi détaillé des mouvements de personnel",
        "Pilotage des processus de recrutement",
        "Gestion proactive de l'absentéisme",
        "Optimisation des plans de formation"
      ]
    },
    {
      role: "Managers",
      icon: <UserCheck size={24} />,
      cases: [
        "Suivi des performances d'équipe",
        "Planification des besoins en ressources",
        "Détection des risques de turnover",
        "Pilotage des objectifs individuels"
      ]
    }
  ];

  // Benefices
  const benefits = [
    {
      title: "Optimisation des coûts RH",
      icon: <BarChart size={28} />,
      description: "Identifiez les postes de dépenses optimisables et justifiez vos investissements RH avec des données précises."
    },
    {
      title: "Décisions plus éclairées",
      icon: <AlertTriangle size={28} />,
      description: "Basez vos choix stratégiques sur des données concrètes plutôt que sur des impressions ou des intuitions."
    },
    {
      title: "Gain de temps considérable",
      icon: <Clock size={28} />,
      description: "Automatisez la production de rapports et concentrez-vous sur l'analyse et les actions à mener."
    },
    {
      title: "Amélioration de la performance",
      icon: <Award size={28} />,
      description: "Détectez les leviers d'amélioration et mesurez précisément l'impact de vos actions RH."
    }
  ];

  // Métriques pour les démonstrations
  const mockMetrics = {
    general: [
      { label: "Effectif total", value: "247", trend: "+5%", color: "text-green-500" },
      { label: "Turnover annuel", value: "4.8%", trend: "-1.2%", color: "text-green-500" },
      { label: "Taux d'absentéisme", value: "3.1%", trend: "+0.3%", color: "text-red-500" },
      { label: "Coût de recrutement moyen", value: "₣ 1,245,000", trend: "-3.5%", color: "text-green-500" }
    ],
    performance: [
      { label: "Objectifs atteints", value: "87%", trend: "+4%", color: "text-green-500" },
      { label: "Entretiens réalisés", value: "94%", trend: "+1%", color: "text-green-500" },
      { label: "Promotions internes", value: "18", trend: "+5", color: "text-green-500" },
      { label: "Écart salarial H/F", value: "4.1%", trend: "-0.7%", color: "text-green-500" }
    ],
    training: [
      { label: "Budget formation", value: "₣ 18.5M", trend: "+12%", color: "text-green-500" },
      { label: "Heures moyennes/employé", value: "31h", trend: "+4h", color: "text-green-500" },
      { label: "Taux de satisfaction", value: "8.7/10", trend: "+0.5", color: "text-green-500" },
      { label: "ROI formation", value: "184%", trend: "+23%", color: "text-green-500" }
    ]
  };

  // Predictive insights
  const predictiveInsights = [
    {
      title: "Risque de turnover",
      description: "5 employés à haut risque de départ dans les 3 prochains mois",
      icon: <RefreshCw size={24} />,
      color: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      title: "Pic d'absentéisme",
      description: "Prévision d'augmentation de 15% des absences en juillet",
      icon: <Calendar size={24} />,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      title: "Besoins en recrutement",
      description: "Besoin estimé de 7 développeurs au T3 2025",
      icon: <Users size={24} />,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Prévision budgétaire",
      description: "Masse salariale en hausse de 7.3% pour le T4 2025",
      icon: <Database size={24} />,
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('./VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  YIEL HR ANALYTICS
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Transformez vos données RH en{" "}
                  <span className="text-[#ea532b]">leviers de performance</span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Notre module d'analytique RH met la puissance des données au service de votre stratégie. 
                  Grâce à des tableaux de bord clairs, interactifs et prédictifs, vous obtenez une vision 
                  unifiée de l'ensemble des dynamiques RH de votre organisation.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button onClick={() => navigate("/demo")} className="px-6 cursor-pointer py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center">
                    Demander une démo
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2f365b] to-[#ea532b] rounded-lg transform rotate-6 opacity-20"></div>
                  <div className="relative bg-white p-2 rounded-lg shadow-2xl">
                    <img
                      src="https://www.datocms-assets.com/17507/1606814827-exempletableaudebordrhexcel1.gif"
                      alt="Dashboard HR Analytics"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                  <BarChart size={24} />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
                  <PieChart size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border-0 bottom-0 left-0 right-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                fill="#ea532b"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="intro" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                VUE D'ENSEMBLE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Une vision claire pour une <span className="text-[#ea532b]">action ciblée</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Prenez des décisions éclairées en vous appuyant sur des données fiables et pertinentes, 
                avec une interface intuitive adaptée à tous les profils : direction, RH et managers opérationnels.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="relative mx-auto max-w-7xl mb-16 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-[#2f365b] text-white p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 flex space-x-4 text-sm">
                  <button 
                    className={`py-1 px-3 rounded ${activeTab === 'general' ? 'bg-[#ea532b]' : 'hover:bg-gray-700'}`}
                    onClick={() => setActiveTab('general')}
                  >
                    Tableau général
                  </button>
                  <button 
                    className={`py-1 px-3 rounded ${activeTab === 'performance' ? 'bg-[#ea532b]' : 'hover:bg-gray-700'}`}
                    onClick={() => setActiveTab('performance')}
                  >
                    Performance
                  </button>
                  <button 
                    className={`py-1 px-3 rounded ${activeTab === 'training' ? 'bg-[#ea532b]' : 'hover:bg-gray-700'}`}
                    onClick={() => setActiveTab('training')}
                  >
                    Formation
                  </button>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mockMetrics[activeTab].map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-100">
                      <h3 className="text-sm text-gray-500 font-medium mb-1">{metric.label}</h3>
                      <div className="flex items-end justify-between">
                        <span className="text-3xl font-bold text-[#2f365b]">{metric.value}</span>
                        <span className={`text-sm font-medium flex items-center ${metric.color}`}>
                          {metric.trend}
                          {metric.trend.startsWith('+') ? 
                            <TrendingUp size={16} className="ml-1" /> : 
                            <TrendingUp size={16} className="ml-1 transform rotate-180" />
                          }
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Graphique simulé */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-[#2f365b]">Évolution sur 12 mois</h3>
                    <div className="flex space-x-2">
                      <button className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-600">Effectifs</button>
                      <button className="text-xs px-2 py-1 rounded bg-green-100 text-green-600">Turnover</button>
                      <button className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Coûts</button>
                    </div>
                  </div>
                  <div className="h-64 relative">
                    {/* Graph mockup */}
                    <div className="absolute bottom-0 left-0 w-full h-4/5 flex items-end">
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-3/5"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-2/3"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-3/4"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-4/5"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-2/3"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-3/4"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-4/5"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-5/6"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-full"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-5/6"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-9/10"></div>
                      </div>
                      <div className="flex-1 mx-1">
                        <div className="bg-blue-500 rounded-t h-full"></div>
                      </div>
                    </div>
                    {/* Green trend line */}
                    <div className="absolute bottom-0 left-0 w-full h-4/5 flex items-end pointer-events-none">
                      <svg className="absolute inset-0 w-full h-full">
                        <path 
                          d="M0,100 C50,80 100,90 150,70 C200,50 250,60 300,40 C350,30 400,20 450,10 L450,100 L0,100 Z" 
                          fill="none" 
                          stroke="#16a34a" 
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Fév</span>
                    <span>Mar</span>
                    <span>Avr</span>
                    <span>Mai</span>
                    <span>Juin</span>
                    <span>Juil</span>
                    <span>Août</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Déc</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#2f365b] mb-6 flex items-center">
                  <Activity size={24} className="text-[#ea532b] mr-3" />
                  Comprenez vos données
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Visualisation à 360° en temps réel des indicateurs RH : effectifs, mobilités, absences, objectifs, coûts...</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Projection des tendances à venir grâce à l'analyse prédictive</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Données consolidées depuis vos modules pour une lecture cohérente</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Interface intuitive pour tous les profils : direction, RH, managers</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#2f365b] mb-6 flex items-center">
                  <Target size={24} className="text-[#ea532b] mr-3" />
                  Pilotez avec précision
                </h3>
                <p className="text-gray-600 mb-4">
                  Grâce à des algorithmes intégrés, notre module identifie les signaux faibles pour vous alerter avant que les problèmes ne surgissent. Vous ne gérez plus l'après… vous pilotez l'avant.
                </p>
                <p className="text-gray-600">
                  De la direction générale aux managers de proximité, chacun accède aux données dont il a besoin pour piloter efficacement ses équipes et ses ressources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Predictive Insights Section */}
        <section id="predictive" className="py-16 bg-gray-100">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                INTELLIGENCE PRÉDICTIVE
              </span>
              <h2 className="text-3xl font-bold text-[#2f365b] mb-6">
                Anticipez pour mieux <span className="text-[#ea532b]">piloter</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Identifiez les tendances et anticipez les risques grâce à nos modèles prédictifs alimentés par l'intelligence artificielle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {predictiveInsights.map((insight, index) => (
                <div
                  key={index}
                  id={`insight-${index}`}
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform ${
                    isVisible[`insight-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-100 translate-y-6"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full ${insight.color} flex items-center justify-center ${insight.textColor} mb-4`}>
                    {insight.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2f365b] mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-[#2f365b] mb-4">
                    Du descriptif au prédictif
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Passez d'une vision statique à une analyse dynamique et prospective de vos données RH.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-center">
                      <div className="w-8 h-1 bg-gray-300 rounded mr-2">
                        <div className="w-2/3 h-full bg-[#ea532b] rounded"></div>
                      </div>
                      <span className="text-sm text-gray-500">Analyse descriptive</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-1 bg-gray-300 rounded mr-2">
                        <div className="w-5/6 h-full bg-[#ea532b] rounded"></div>
                      </div>
                      <span className="text-sm text-gray-500">Analyse diagnostique</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-1 bg-gray-300 rounded mr-2">
                        <div className="w-full h-full bg-[#ea532b] rounded"></div>
                      </div>
                      <span className="text-sm text-gray-500">Analyse prédictive</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-[#2f365b] mb-4">
                    Ce que nos algorithmes peuvent prédire pour vous :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-[#ea532b] mb-2">Risques de départ</h5>
                      <p className="text-sm text-gray-600">
                        Identifiez les profils à risque de départ et prenez des mesures proactives pour les retenir.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-[#ea532b] mb-2">Besoins en recrutement</h5>
                      <p className="text-sm text-gray-600">
                        Anticipez vos besoins en personnel et lancez vos campagnes au moment optimal.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-[#ea532b] mb-2">Gestion des absences</h5>
                      <p className="text-sm text-gray-600">
                        Prévoyez les pics d'absentéisme pour adapter vos ressources en conséquence.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-[#ea532b] mb-2">Évolution de la masse salariale</h5>
                      <p className="text-sm text-gray-600">
                        Simulez différents scénarios d'évolution pour optimiser votre budget RH.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                FONCTIONNALITÉS
              </span>
              <h2 className="text-3xl font-bold text-[#2f365b] mb-6">
                Des outils puissants pour une <span className="text-[#ea532b]">gestion RH optimale</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre module HR Analytics offre un ensemble complet de fonctionnalités pour transformer 
                vos données RH en leviers stratégiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {analyticsFeatures.map((feature) => (
                <div
                  key={feature.id}
                  id={`feature-${feature.id}`}
                  className={`transition-all duration-500 ${
                    isVisible[`feature-${feature.id}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center ${feature.textColor} mb-5`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-[#ea532b] mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-[#2f365b] text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-6">
                BÉNÉFICES
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Quels <span className="text-[#ea532b]">impacts concrets</span> pour votre entreprise ?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Découvrez comment notre module HR Analytics peut transformer votre approche RH et générer un retour sur investissement significatif.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  id={`benefit-${index}`}
                  className={`bg-[#3a4272] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isVisible[`benefit-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-100 translate-y-6"
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-[#ea532b]/20 flex items-center justify-center text-[#ea532b] mb-5">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-[#3a4272] rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Un ROI dès la première année
                  </h3>
                  <p className="text-gray-300 max-w-xl">
                    Nos clients constatent un retour sur investissement moyen de 320% dès la première année 
                    d'utilisation grâce à l'optimisation des processus RH et l'amélioration de la rétention des talents.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-[#4a5282] rounded-full p-4 w-28 h-28 flex items-center justify-center text-center">
                    <div>
                      <div className="text-3xl font-bold text-[#ea532b]">320%</div>
                      <div className="text-xs text-gray-300">ROI MOYEN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                CAS D'USAGE
              </span>
              <h2 className="text-3xl font-bold text-[#2f365b] mb-6">
                Une solution <span className="text-[#ea532b]">adaptée à chaque rôle</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre module s'adapte aux besoins spécifiques de chaque acteur de l'entreprise pour une utilisation optimale des données RH.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCasesByRole.map((useCase, index) => (
                <div
                  key={index}
                  id={`use-case-${index}`}
                  className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-500 ${
                    isVisible[`use-case-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-100 translate-y-8"
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-[#2f365b]/10 flex items-center justify-center text-[#2f365b] mb-5">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2f365b] mb-5">
                    Pour {useCase.role}
                  </h3>
                  <ul className="space-y-4">
                    {useCase.cases.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer vos <span className="text-[#ea532b]">données RH</span> en avantage stratégique ?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Demandez une démo personnalisée et découvrez comment notre module HR Analytics peut répondre à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button onClick={() => navigate("/demo")} className="px-8 py-4 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center">
                Demander une démo
                <ArrowRight size={18} className="ml-2" />
              </button>
              {/* <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
                Contacter un conseiller
              </button> */}
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}

export default HrAnalytics;