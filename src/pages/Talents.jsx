import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  UserPlus,
  Target,
  BookOpen,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Calendar,
  BarChart3,
  Settings,
  Zap,
  Clock,
  Award,
  UserCheck,
  FileText,
  ArrowRight,
  ChevronRight,
  Star,
  Briefcase,
  Search,
  Filter,
  Download,
  Bell,
  Shield,
  Globe,
  Layers,
  RefreshCw,
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  X,
  Menu
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { useSearchParams } from "react-router-dom";





function Talents() {
  const [seachParams] = useSearchParams();
  const id = seachParams.get("id");



  const [activeTab, setActiveTab] = useState(id || modules[0].id);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (id && modules.some((mod) => mod.id === id)) {
      setActiveTab(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {}, // Callback vide puisque tu n'utilises plus isVisible
      { threshold: 0.15 }
    );

    document
      .querySelectorAll("section[id], div[id^='feature-']")
      .forEach((element) => {
        observer.observe(element);
      });

    return () => observer.disconnect();
  }, []);

  // Modules Y'Talent
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modules = [
    {
      id: "recrutement",
      title: "Recrutement",
      subtitle: "Attirez, sélectionnez et intégrez les meilleurs talents",
      icon: <UserPlus size={24} />,
      color: "bg-[#2f365b]",
      accent: "text-[#ea532b]",
      description: "Trouver le bon profil ne devrait jamais être une question de chance. Structurez vos processus de recrutement de manière fluide, transparente et collaborative.",
      features: [
        {
          title: "ATS Intelligent",
          description: "Notre système de suivi des candidats vous accompagne de l'offre à l'intégration",
          icon: <Search size={20} />
        },
        {
          title: "Processus Fluide",
          description: "Créez et diffusez vos offres sur plusieurs canaux simultanément",
          icon: <Zap size={20} />
        },
        {
          title: "Collaboration Renforcée",
          description: "Partagez les candidatures avec vos managers et évaluez ensemble",
          icon: <Users size={20} />
        },
        {
          title: "Expérience Candidat",
          description: "Interface mobile-friendly et communication professionnelle",
          icon: <Award size={20} />
        }
      ]
    },
    {
      id: "onboarding",
      title: "Onboarding & Offboarding",
      subtitle: "Une intégration simple, humaine et efficace",
      icon: <UserCheck size={24} />,
      color: "bg-[#ea532b]",
      accent: "text-[#2f365b]",
      description: "Accueillir un salarié, c'est déjà construire sa fidélité. Guidez chaque collaborateur dès son arrivée sans stress ni oubli.",
      features: [
        {
          title: "Onboarding Intelligent",
          description: "Création automatique du profil et checklists personnalisées",
          icon: <CheckCircle size={20} />
        },
        {
          title: "Suivi d'Intégration",
          description: "Parcours d'essai, formations et mentorat structurés",
          icon: <Target size={20} />
        },
        {
          title: "Offboarding Maîtrisé",
          description: "Checklists de sortie et archivage automatisé",
          icon: <FileText size={20} />
        },
        {
          title: "Traçabilité Complète",
          description: "Historisation de tous les parcours pour conformité",
          icon: <Shield size={20} />
        }
      ]
    },
    {
      id: "entretiens",
      title: "Entretiens",
      subtitle: "Structurez vos entretiens pour accompagner chaque collaborateur",
      icon: <MessageSquare size={24} />,
      color: "bg-[#2f365b]",
      accent: "text-[#ea532b]",
      description: "Les entretiens ne sont pas qu'une formalité : ce sont des temps d'écoute, d'évaluation et de projection.",
      features: [
        {
          title: "Campagnes Automatisées",
          description: "Lancement groupé avec rappels et modèles personnalisables",
          icon: <Calendar size={20} />
        },
        {
          title: "Interface Collaborative",
          description: "Accès salarié, manager, RH avec suivi temps réel",
          icon: <Users size={20} />
        },
        {
          title: "Analyse & Reporting",
          description: "Détection des signaux faibles et synthèses automatiques",
          icon: <BarChart3 size={20} />
        },
        {
          title: "Workflows Personnalisés",
          description: "Paramétrage selon le type d'entretien et organisation",
          icon: <Settings size={20} />
        }
      ]
    },
    {
      id: "formation",
      title: "Formation",
      subtitle: "Développez les compétences de vos équipes",
      icon: <BookOpen size={24} />,
      color: "bg-[#ea532b]",
      accent: "text-[#2f365b]",
      description: "La montée en compétences au cœur de la performance durable. Pilotez votre plan de formation de A à Z.",
      features: [
        {
          title: "Plan de Formation",
          description: "Recueil automatisé des besoins et construction budgétée",
          icon: <Target size={20} />
        },
        {
          title: "Catalogue Interactif",
          description: "Formations internes, externes et certifiantes",
          icon: <BookOpen size={20} />
        },
        {
          title: "Suivi Complet",
          description: "Inscriptions, évaluations et attestations automatisées",
          icon: <CheckCircle size={20} />
        },
        {
          title: "Pilotage RH",
          description: "Statistiques par population et alignement GPEC",
          icon: <BarChart3 size={20} />
        }
      ]
    },
    {
      id: "performance",
      title: "Performance & Objectifs",
      subtitle: "Donnez du sens aux objectifs, suivez les résultats",
      icon: <TrendingUp size={24} />,
      color: "bg-[#2f365b]",
      accent: "text-[#ea532b]",
      description: "Transformez vos ambitions en actions concrètes. Alignez les efforts individuels avec la stratégie globale.",
      features: [
        {
          title: "Objectifs Sur-Mesure",
          description: "Individuels, équipe ou collectifs avec pondération personnalisée",
          icon: <Target size={20} />
        },
        {
          title: "Suivi Dynamique",
          description: "Interface claire avec commentaires et feedbacks continus",
          icon: <Eye size={20} />
        },
        {
          title: "Évaluation Collaborative",
          description: "Autoévaluation et liens avec les campagnes d'entretiens",
          icon: <Users size={20} />
        },
        {
          title: "Pilotage Objectif",
          description: "Rapports analytiques pour primes, promotions et formations",
          icon: <Award size={20} />
        }
      ]
    }
  ];
  const selectedModule = useMemo(() => {
    return modules.find((mod) => mod.id === activeTab) || modules[0];
  }, [activeTab, modules]);

  useEffect(() => console.log(`Module sélectionné : ${selectedModule.title}`), [selectedModule])

  // Données d'exemple pour le dashboard
  const dashboardStats = [
    { label: "Collaborateurs Actifs", value: "247", icon: <Users size={20} />, color: "text-[#2f365b]" },
    { label: "Recrutements en Cours", value: "12", icon: <UserPlus size={20} />, color: "text-[#ea532b]" },
    { label: "Formations Planifiées", value: "35", icon: <BookOpen size={20} />, color: "text-[#2f365b]" },
    { label: "Entretiens ce Mois", value: "28", icon: <MessageSquare size={20} />, color: "text-[#ea532b]" }
  ];

  const employees = [
    { id: 1, name: "Sophie Martin", role: "Développeuse Frontend", department: "Tech", status: "Actif", avatar: "SM" },
    { id: 2, name: "Thomas Dubois", role: "Chef de Projet", department: "Marketing", status: "En Formation", avatar: "TD" },
    { id: 3, name: "Marie Leroy", role: "Designer UX/UI", department: "Design", status: "Actif", avatar: "ML" },
    { id: 4, name: "Alexandre Petit", role: "Développeur Backend", department: "Tech", status: "Entretien", avatar: "AP" }
  ];

  const faqs = [
    {
      id: 1,
      question: "MyYiel fonctionne-t-il même sans processus d'intégration en place ?",
      answer: "Oui, MyYiel s'adapte à toutes les structures. Vous pouvez utiliser nos parcours types prêts à l'emploi tout en les personnalisant à votre rythme."
    },
    {
      id: 2,
      question: "Que se passe-t-il une fois qu'un salarié est recruté ?",
      answer: "Un parcours d'intégration est automatiquement lancé : documents, matériel, personnes à prévenir... Tout est listé étape par étape avec des rappels."
    },
    {
      id: 3,
      question: "Peut-on suivre les étapes de l'intégration sur la plateforme ?",
      answer: "Chaque acteur (RH, manager, salarié) voit ses tâches dans un tableau de bord clair. Le salarié peut suivre son avancée pour renforcer son engagement."
    },
    {
      id: 4,
      question: "Comment gérer un départ de salarié ?",
      answer: "L'outil propose un parcours de sortie simplifié : checklist de restitution, clôture des accès, documents administratifs et entretien de départ."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header/>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden"
      >
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2f365b]/90 to-[#3a4272]/90"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
            </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                Y'TALENT - SOLUTION SIRH
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Gérer et développer vos{" "}
                <span className="text-[#ea532b]">talents</span>
              </h1>
              <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                Centralisez et pilotez toutes les étapes clés du parcours salarié : 
                du recrutement à l'offboarding, en passant par la formation et le suivi des performances.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#ea532b] mr-3 flex-shrink-0" />
                  <span className="text-sm">Automatisation des processus RH</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#ea532b] mr-3 flex-shrink-0" />
                  <span className="text-sm">Expérience collaborateur fluide</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#ea532b] mr-3 flex-shrink-0" />
                  <span className="text-sm">Pilotage par la data</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#ea532b] mr-3 flex-shrink-0" />
                  <span className="text-sm">Outils adaptés à vos réalités</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center"
                >
                  Découvrir la démo
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                  Demander un essai gratuit
                </button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {dashboardStats.map((stat, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                      <div className={`${stat.color} mb-2 flex justify-center`}>
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-white/80 text-sm">
                  Tableau de bord temps réel
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                <TrendingUp size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur text-white p-3 rounded-lg shadow-lg">
                <Users size={24} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 90"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#F9FAFB"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Navigation des modules */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 space-x-2 md:space-x-4 hide-scrollbar">
            {modules.map((module) => (
              <button
                key={module.id}
                className={`px-4 py-3 md:px-6 md:py-3 rounded-full whitespace-nowrap font-medium transition-all duration-300 flex items-center ${
                  activeTab === module.id
                    ? "bg-[#2f365b] text-white shadow-lg"
                    : "bg-gray-100 text-[#2f365b] hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(module.id)}
              >
                <span className="mr-2">{module.icon}</span>
                <span>{module.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu des modules */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`${selectedModule.id === module.id ? "block" : "hidden"}`}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Contenu textuel */}
                  <div className="p-8 md:p-12">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full ${module.color}/10 ${module.accent} font-medium text-sm mb-6`}>
                      {module.icon}
                      <span className="ml-2">{module.title.toUpperCase()}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-4">
                      {module.subtitle}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="space-y-6">
                      {module.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`w-12 h-12 rounded-xl ${module.color}/10 flex items-center justify-center ${module.accent} flex-shrink-0 mr-4`}>
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#2f365b] mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <button className={`px-6 py-3 ${module.color} text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 flex items-center`}>
                        Découvrir {module.title}
                        <ArrowRight size={18} className="ml-2" />
                      </button>
                    </div>
                  </div>

                  {/* Interface mockup */}
                  <div className={`${module.color} p-8 md:p-12 flex items-center justify-center`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-full max-w-md">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-semibold">{module.title}</h3>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          {module.icon}
                        </div>
                      </div>
                      
                      {module.id === "recrutement" && (
                        <div className="space-y-4">
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white text-sm">Candidatures</span>
                              <span className="text-[#ea532b] font-bold">24</span>
                            </div>
                            <div className="bg-white/30 h-2 rounded-full">
                              <div className="bg-[#ea532b] h-2 rounded-full w-3/4"></div>
                            </div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm mb-2">Entretiens cette semaine</div>
                            <div className="text-2xl font-bold text-white">8</div>
                          </div>
                        </div>
                      )}
                      
                      {module.id === "formation" && (
                        <div className="space-y-4">
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm mb-2">Formations en cours</div>
                            <div className="text-2xl font-bold text-white">12</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm mb-2">Taux de completion</div>
                            <div className="flex items-center">
                              <div className="text-2xl font-bold text-white mr-2">87%</div>
                              <TrendingUp size={16} className="text-[#ea532b]" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {(module.id === "onboarding" || module.id === "entretiens" || module.id === "performance") && (
                        <div className="space-y-4">
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm mb-2">Processus actifs</div>
                            <div className="text-2xl font-bold text-white">
                              {module.id === "onboarding" ? "5" : module.id === "entretiens" ? "28" : "156"}
                            </div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white text-sm mb-2">Taux de réalisation</div>
                            <div className="text-2xl font-bold text-white">94%</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Collaborateurs */}
      <section id="employees" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
              GESTION DES TALENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
              Une vue d'ensemble sur vos{" "}
              <span className="text-[#ea532b]">collaborateurs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Centralisez toutes les informations de vos talents et suivez leur évolution 
              au sein de votre organisation.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#2f365b] mb-4 md:mb-0">
                Équipe - {employees.length} collaborateurs
              </h3>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un collaborateur..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
                <button className="px-4 py-2 bg-[#2f365b] text-white rounded-lg hover:bg-[#3a4272] transition-colors flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filtrer
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {employees.map((employee) => (
                <div
                  key={employee.id}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedEmployee(employee)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {employee.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#2f365b]">{employee.name}</h4>
                      <p className="text-sm text-gray-500">{employee.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Département</span>
                      <span className="text-[#2f365b] font-medium">{employee.department}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Statut</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        employee.status === "Actif" 
                          ? "bg-green-100 text-green-800"
                          : employee.status === "En Formation"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-orange-100 text-orange-800"
                      }`}>
                        {employee.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-[#2f365b] to-[#3a4272] text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
              POURQUOI Y'TALENT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre entreprise mérite des collaborateurs{" "}
              <span className="text-[#ea532b]">engagés</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Vos collaborateurs méritent un accompagnement à la hauteur. 
              MyYiel, votre partenaire pour transformer votre gestion RH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ea532b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Gain de temps</h3>
              <p className="text-gray-300">
                Automatisez vos processus RH répétitifs et concentrez-vous sur l'humain
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ea532b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Conformité garantie</h3>
              <p className="text-gray-300">
                Respectez toutes les obligations légales avec nos processus certifiés
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ea532b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance mesurée</h3>
              <p className="text-gray-300">
                Pilotez votre stratégie RH avec des données concrètes et actionables
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-4">
            <FAQ  faqs={faqs}/>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre gestion RH ?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises qui ont choisi Y'Talent pour développer leurs équipes 
            et optimiser leur gestion des talents.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center"
            >
              Demander une démo
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300">
              Essai gratuit 30 jours
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f365b]">Demander une démo</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email professionnel
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  placeholder="votre.email@entreprise.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de collaborateurs
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent">
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>200+</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300"
              >
                Programmer la démo
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal détail collaborateur */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f365b]">Profil collaborateur</h3>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                {selectedEmployee.avatar}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#2f365b] mb-1">
                  {selectedEmployee.name}
                </h4>
                <p className="text-gray-600 mb-2">{selectedEmployee.role}</p>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedEmployee.status === "Actif" 
                    ? "bg-green-100 text-green-800"
                    : selectedEmployee.status === "En Formation"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-orange-100 text-orange-800"
                }`}>
                  {selectedEmployee.status}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-[#2f365b] mb-3">Informations générales</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Département</span>
                    <span className="font-medium">{selectedEmployee.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date d'arrivée</span>
                    <span className="font-medium">15/03/2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Manager</span>
                    <span className="font-medium">Julie Moreau</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-[#2f365b] mb-3">Suivi</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Objectifs</span>
                    <span className="text-green-600 font-medium">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Formations</span>
                    <span className="font-medium">3 complétées</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dernier entretien</span>
                    <span className="font-medium">12/01/2025</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <button className="flex-1 px-4 py-2 bg-[#2f365b] text-white rounded-lg hover:bg-[#3a4272] transition-colors flex items-center justify-center">
                <Edit size={18} className="mr-2" />
                Modifier
              </button>
              <button className="flex-1 px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors flex items-center justify-center">
                <Mail size={18} className="mr-2" />
                Contacter
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Talents;
       