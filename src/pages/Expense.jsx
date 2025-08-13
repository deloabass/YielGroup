import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Receipt,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Shield,
  Users,
  Bell,
  TrendingUp,
  Eye,
  Settings,
  Download,
  Zap,
  Camera,
  Plus,
  Coffee,
  Car,
  Home,
  Briefcase,
  UserCheck,
  Euro,
  Percent,
  BarChart3
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";

function Expense() {
  const topRef = useRef(null);
  useScrollToTop(topRef);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [activeFeature, setActiveFeature] = useState("expenses");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("employee");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const features = useMemo(() => [
    {
      id: "expenses",
      title: "Notes de frais",
      icon: <Receipt size={24} />,
      description: "Dématérialisez vos notes de frais et gagnez du temps. Vos collaborateurs déclarent leurs dépenses en quelques clics, depuis leur mobile ou leur ordinateur.",
      benefits: [
        "Déclaration mobile instantanée",
        "Ajout de justificatifs photo",
        "Validation hiérarchique rapide",
        "Suivi temps réel des remboursements"
      ],
      mockup: "expenses",
      footerText: "👉 Terminé la paperasse ! Vos équipes déclarent, vous validez, c'est fait."
    },
    {
      id: "advance",
      title: "Demandes d'acompte",
      icon: <DollarSign size={24} />,
      description: "Facilitez les demandes d'acompte de vos salariés dans un cadre sécurisé et conforme. Processus automatisé avec respect de vos politiques internes.",
      benefits: [
        "Demande directe sans manager",
        "Plafonds configurables",
        "Validation automatique ou manuelle",
        "Traçabilité complète"
      ],
      mockup: "advance",
      footerText: "👉 Un droit encadré, pas un parcours du combattant."
    }
  ], []);
  useEffect(() => {
    if (id && features.some((mod) => mod.id === id)) {
      setActiveFeature(id);
    }
  }, [id, features]);

  const selectedModule = useMemo(() => {
    return features.find(mod => mod.id === activeFeature) || features[0];
  }, [activeFeature, features]);

  const expenseStats = [
    { label: "Frais en attente", value: "23", icon: <Clock size={20} />, color: "text-orange-500" },
    { label: "Validés ce mois", value: "187", icon: <CheckCircle size={20} />, color: "text-green-500" },
    { label: "Montant total", value: "47,250 €", icon: <Euro size={20} />, color: "text-blue-500" },
    { label: "Taux de conformité", value: "94%", icon: <Percent size={20} />, color: "text-purple-500" }
  ];

  // Mockup pour les notes de frais
  const ExpensesMockup = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-[#2f365b]">Mes notes de frais</h4>
        <button className="p-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
          <Plus size={16} />
        </button>
      </div>
      
      <div className="space-y-4">
        {[
          { type: "Repas", amount: "45,80 €", date: "Aujourd'hui", status: "pending", icon: <Coffee size={16} /> },
          { type: "Transport", amount: "28,50 €", date: "Hier", status: "approved", icon: <Car size={16} /> },
          { type: "Hôtel", amount: "120,00 €", date: "2 jours", status: "approved", icon: <Home size={16} /> },
          { type: "Mission", amount: "350,00 €", date: "3 jours", status: "reimbursed", icon: <Briefcase size={16} /> }
        ].map((expense, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#2f365b]/10 rounded-lg flex items-center justify-center mr-3">
                {expense.icon}
              </div>
              <div>
                <p className="font-medium text-sm text-[#2f365b]">{expense.type}</p>
                <p className="text-xs text-gray-500">{expense.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-[#2f365b]">{expense.amount}</p>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                expense.status === 'pending' ? 'bg-orange-100 text-orange-600' :
                expense.status === 'approved' ? 'bg-green-100 text-green-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {expense.status === 'pending' ? 'En attente' :
                 expense.status === 'approved' ? 'Validé' :
                 'Remboursé'}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-[#ea532b]/10 rounded-lg">
        <div className="flex items-center text-[#ea532b] mb-2">
          <Camera size={16} className="mr-2" />
          <span className="text-sm font-medium">Astuce</span>
        </div>
        <p className="text-xs text-gray-600">
          Prenez vos reçus en photo directement depuis l'app !
        </p>
      </div>
    </div>
  );

  // Mockup pour les acomptes
  const AdvanceMockup = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-[#2f365b]">Demandes d'acompte</h4>
        <div className="flex items-center text-sm text-gray-500">
          <Shield size={16} className="mr-1" />
          Sécurisé
        </div>
      </div>
      
      <div className="bg-[#2f365b]/5 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Montant disponible</span>
          <span className="font-semibold text-[#2f365b]">500,00 €</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-[#ea532b] h-2 rounded-full" style={{ width: '30%' }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">Limite mensuelle utilisée à 30%</p>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-[#2f365b]">Acompte demandé</span>
            <span className="text-orange-500 text-sm">En cours</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">150,00 €</span>
            <span className="text-xs text-gray-500">Il y a 2h</span>
          </div>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-[#2f365b]">Acompte précédent</span>
            <span className="text-green-500 text-sm">Versé</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">200,00 €</span>
            <span className="text-xs text-gray-500">15 déc 2024</span>
          </div>
        </div>
      </div>
      
      <button className="w-full mt-6 bg-[#ea532b] text-white py-3 rounded-full cursor-pointer font-medium hover:bg-[#d64a27] transition-colors">
        Nouvelle demande
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
      <Header />
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f365b]/0 to-[#3a4272]/90"></div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                Y'EXPENSE - GESTION DES FRAIS
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Vos dépenses professionnelles,{" "}
                <span className="text-[#ea532b]">simplement maîtrisées</span>
              </h1>
              <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                Gérez les frais de vos collaborateurs et les demandes d'acompte dans un cadre sécurisé, mobile et conforme à votre politique RH.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#ea532b] mr-3 flex-shrink-0" />
                  <span className="text-sm">Centralise et automatise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#ea532b] mr-3 flex-shrink-0" />
                  <span className="text-sm">Traçabilité complète</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#ea532b] mr-3 flex-shrink-0" />
                  <span className="text-sm">Interface mobile</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#ea532b] mr-3 flex-shrink-0" />
                  <span className="text-sm">Conforme aux politiques</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-7 py-3 bg-[#ea532b] hover:bg-[#d64a27] text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group">
                  Demander une démo
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white">Tableau de bord</h4>
                  <div className="flex items-center text-sm text-gray-200">
                    <Clock size={16} className="mr-1" />
                    {currentTime.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {expenseStats.map((stat, index) => (
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
                  Suivi en temps réel
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                <Receipt size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur text-white p-3 rounded-lg shadow-lg">
                <TrendingUp size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#ea532b" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
              FONCTIONNALITÉS PRINCIPALES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
              Deux modules <span className="text-[#ea532b]">complémentaires</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Y'Expense centralise vos dépenses professionnelles et demandes d'acompte pour une gestion optimale.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-col md:flex-row justify-center mb-12">
            <div className="flex bg-gray-100 rounded-full p-1 max-w-lg mx-auto">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  className={`px-6 py-3 rounded-full cursor-pointer whitespace-nowrap font-medium transition-all duration-300 flex items-center ${
                    activeFeature === feature.id
                      ? "bg-[#2f365b] text-white shadow-lg"
                      : "text-[#2f365b] hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  {feature.icon}
                  <span className="ml-2 hidden sm:inline">{feature.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Content */}
          {selectedModule && (
            <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ea532b]/10 text-[#ea532b] font-medium text-sm mb-6">
                    {selectedModule.icon}
                    <span className="ml-2">{selectedModule.title.toUpperCase()}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-4">
                    {selectedModule.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {selectedModule.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {selectedModule.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#ea532b]/10 flex items-center justify-center mr-3">
                          <CheckCircle size={16} className="text-[#ea532b]" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <p className="text-[#2f365b] font-semibold mb-4">
                      {selectedModule.footerText}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2f365b] to-[#3a4272] p-8 md:p-12 flex items-center justify-center">
                  {selectedModule.mockup === "expenses" ? <ExpensesMockup /> : <AdvanceMockup />}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Employee vs HR Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/10 text-[#ea532b] font-medium text-sm mb-6">
              ESPACES DÉDIÉS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
              Chaque utilisateur a <span className="text-[#ea532b]">son espace</span>
            </h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-full p-1 shadow-lg">
              <button
                className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 flex items-center ${
                  activeTab === "employee"
                    ? "bg-[#ea532b] text-white shadow-lg"
                    : "text-[#2f365b] hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("employee")}
              >
                <UserCheck size={20} className="mr-2" />
                Espace Collaborateur
              </button>
              <button
                className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 flex items-center ${
                  activeTab === "hr"
                    ? "bg-[#ea532b] text-white shadow-lg"
                    : "text-[#2f365b] hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("hr")}
              >
                <Users size={20} className="mr-2" />
                Espace RH & Manager
              </button>
            </div>
          </div>

          {activeTab === "employee" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#ea532b]/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone size={24} className="text-[#ea532b]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2f365b]">Déclaration mobile</h3>
                <p className="text-gray-600 mb-4">Déclarez vos frais depuis votre mobile ou PC en quelques clics.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Interface intuitive
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Disponible partout
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#ea532b]/10 rounded-lg flex items-center justify-center mb-4">
                  <Camera size={24} className="text-[#ea532b]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2f365b]">Justificatifs photo</h3>
                <p className="text-gray-600 mb-4">Prenez vos reçus en photo ou ajoutez des PDF directement.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Scan automatique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Qualité optimisée
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#ea532b]/10 rounded-lg flex items-center justify-center mb-4">
                  <Bell size={24} className="text-[#ea532b]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2f365b]">Suivi temps réel</h3>
                <p className="text-gray-600 mb-4">Suivez vos demandes en temps réel avec des notifications.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Notifications push
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Historique complet
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#ea532b]/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye size={24} className="text-[#ea532b]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2f365b]">Suivi centralisé</h3>
                <p className="text-gray-600 mb-4">Vue d'ensemble sur toutes les demandes par statut, collaborateur ou période.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Filtres avancés
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Tableaux de bord
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#ea532b]/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings size={24} className="text-[#ea532b]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2f365b]">Paramétrage avancé</h3>
                <p className="text-gray-600 mb-4">Configurez plafonds, circuits de validation et règles selon vos besoins.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Workflows personnalisés
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Gestion des droits
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#ea532b]/10 rounded-lg flex items-center justify-center mb-4">
                  <Download size={24} className="text-[#ea532b]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2f365b]">Export automatique</h3>
                <p className="text-gray-600 mb-4">Intégration fluide avec votre paie et comptabilité.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Formats multiples
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Planification automatique
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[#2f365b] to-[#3a4272] text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span contentEditable className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
              AVANTAGES CLÉS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi choisir <span className="text-[#ea532b]">Y'Expense</span> ?
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Une solution complète qui transforme la gestion des frais professionnels en entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[#ea532b]/20 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gain de temps</h3>
              <p className="text-gray-200">
                Réduisez de 80% le temps consacré au traitement des notes de frais grâce à l'automatisation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[#ea532b]/20 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conformité garantie</h3>
              <p className="text-gray-200">
                Respect des réglementations en vigueur avec traçabilité complète et archivage sécurisé.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-[#ea532b]/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contrôle budgétaire</h3>
              <p className="text-gray-200">
                Maîtrisez vos dépenses avec des tableaux de bord en temps réel et des alertes automatiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
              PRÊT À COMMENCER ?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
              Simplifiez la gestion de vos frais <span className="text-[#ea532b]">dès aujourd'hui</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Rejoignez les entreprises qui ont déjà digitalisé leur gestion des frais avec Y'Expense.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="cursor-pointer px-7 py-3 bg-[#ea532b] hover:bg-[#d64a27] text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group">
                Demander une démo
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />    
    </div>
  );
}

export default Expense;