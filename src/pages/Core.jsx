import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Users,
  UserCog,
  Clock,
  FileText,
  Database,
  Shield,
  ChevronRight,
  Check,
  ArrowRight,
  PlusCircle,
  Calendar,
  Briefcase,
} from "lucide-react";

function Core() {
  // État pour les animations au défilement
  const [isVisible, setIsVisible] = useState({});

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

    // Observer toutes les sections et les cartes de fonctionnalités
    document.querySelectorAll("section[id], div[id^='feature-']").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Fonctionnalités Core RH basées sur le document fourni
  const coreFeatures = [
    {
      id: "dossier-salarie",
      title: "Dossier salarié",
      description:
        "Centralisation de toutes les informations de vos collaborateurs",
      icon: <Users size={24} />,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      image: "https://www.docsvault.com/wordpress/wp-content/uploads/2024/03/human-resource-dms.jpg",
      details: [
        "Informations personnelles (nom, prénom, adresse, contact...)",
        "Données administratives (numéro de sécurité sociale, documents d'identité...)",
        "Situation familiale et coordonnées bancaires",
        "Processus à conserver en cas d'urgence",
      ],
    },
    {
      id: "organisation",
      title: "Organisation interne",
      description: "Structure claire et hiérarchique de votre entreprise",
      icon: <UserCog size={24} />,
      color: "bg-green-100",
      textColor: "text-green-600",
      image: "https://images.businessnewsdaily.com/app/uploads/2020/09/17124103/Hierarchical-Structure.png",
      details: [
        "Postes occupés",
        "Lien hiérarchique",
        "Départements et services",
        "Organigramme dynamique et interactif",
      ],
    },
    {
      id: "gestion-travail",
      title: "Gestion du travail",
      description: "Suivi précis et optimisation des temps de travail",
      icon: <Clock size={24} />,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      image: "https://tcpsoftware.com/wp-content/uploads/Blog-SettingWorkSchedules.webp",
      details: [
        "Horaires, quotité de travail",
        "Cycles de travail personnalisables",
        "Gestion des congés (RTT, CP, etc.)",
        "Suivi des absences et présences",
      ],
    },
    {
      id: "docs-rh",
      title: "Docs RH",
      description: "Gestion complète des documents administratifs",
      icon: <FileText size={24} />,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      image: "https://media.istockphoto.com/id/1659825850/photo/businesswoman-signing-an-official-document.jpg?s=612x612&w=0&k=20&c=2MDP8ddyEuQqes83arGh2AkZBWMvwkuaxgWhtUsjdZo=",
      details: [
        "Contrats types",
        "Fiche de poste",
        "Attestations diverses",
        "Archivage numérique sécurisé",
      ],
    },
    {
      id: "acces-workflow",
      title: "Accès & Workflow",
      description: "Automatisation des processus et gestion des accès",
      icon: <Shield size={24} />,
      color: "bg-red-100",
      textColor: "text-red-600",
      image: "https://www.cebex.in/wp-content/uploads/2023/05/access.jpg",
      details: [
        "Accès par profil salarié",
        "Rôles dans le système",
        "Circuit d'approbation (Workflow RH)",
        "Sécurité et traçabilité des actions",
      ],
    },
  ];

  // Benefits de la centralisation
  const centralizationBenefits = [
    {
      title: "Données unifiées",
      description: "Toutes vos données RH en un seul endroit sécurisé",
      icon: <Database size={24} />,
    },
    {
      title: "Processus simplifiés",
      description:
        "Workflows automatisés pour réduire les tâches administratives",
      icon: <ArrowRight size={24} />,
    },
    {
      title: "Décisions éclairées",
      description: "Analyses basées sur des données fiables et complètes",
      icon: <UserCog size={24} />,
    },
  ];

  // Cas d'usage pour CNPS et autres déclarations
  const useCases = [
    {
      title: "Déclaration CNPS",
      description: "Générez automatiquement vos déclarations obligatoires",
      icon: <Calendar size={24} />,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Fiches de poste",
      description: "Créez et mettez à jour vos fiches de poste en quelques clics",
      icon: <Briefcase size={24} />,
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "Circuit d'approbation",
      description: "Automatisez vos workflows RH avec validation multi-niveaux",
      icon: <UserCog size={24} />,
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
            <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  YIEL SIRH
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-[#ea532b]">Y'Core</span> : Le cœur
                  battant de votre SIRH
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Centralisez vos données de base et processus essentiels RH
                  dans un référentiel central unifié pour toutes les fonctions
                  RH de l'entreprise.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center">
                    Découvrir Y'Core
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                  <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-lg shadow-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                    Demander une démo
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2f365b] to-[#ea532b] rounded-lg transform rotate-6 opacity-20"></div>
                  <div className="relative bg-white p-2 rounded-lg shadow-2xl">
                    <img
                      src="/api/placeholder/600/400"
                      alt="Dashboard YIEL SIRH"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                  <Users size={24} />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
                  <Database size={24} />
                </div>
              </div>
            </div>
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
                Le référentiel <span className="text-[#ea532b]">central</span>{" "}
                de vos données RH
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Le Core RH regroupe toutes les données de base et les processus
                essentiels liés aux salariés. Il constitue le référentiel RH
                central, nécessaire à toutes les fonctions RH de l'entreprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {centralizationBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section
          id="features"
          className="py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
                FONCTIONNALITÉS
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Les composantes essentielles du{" "}
                <span className="text-orange-500">Core RH</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Découvrez les fonctionnalités clés qui font de Y'Core la colonne
                vertébrale de votre système RH intégré.
              </p>
            </div>

            {/* Features Cards - Optimized for proper display */}
            <div className="space-y-12">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.id}
                  id={`feature-${feature.id}`}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 ease-out transform ${
                    isVisible[`feature-${feature.id}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Part */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} ${feature.textColor} mb-6 shadow-md`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#2f365b] mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6">
                        {feature.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="group relative px-6 py-3 bg-orange-500 text-white font-bold rounded-xl overflow-hidden hover:bg-orange-600 transition-all duration-300 flex items-center">
                        En savoir plus
                        <ChevronRight
                          size={20}
                          className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </button>
                    </div>

                    {/* Right Part */}
                    <div className="relative h-64 lg:h-auto bg-gray-100 overflow-hidden group">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-6 right-6 bg-white text-[#2f365b] p-4 rounded-full shadow-lg transition-all duration-300 hover:rotate-6">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                CAS D'USAGE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Applications pratiques du <span className="text-[#ea532b]">Core RH</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez comment Y'Core facilite vos opérations quotidiennes et simplifie la gestion administrative de votre entreprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-full ${useCase.color} flex items-center justify-center ${useCase.textColor} mb-6`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                  <button className="mt-6 flex items-center text-[#ea532b] font-medium hover:text-[#d64a27] transition-colors">
                    Voir l'exemple
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo card - CNPS */}
        <section id="demo-cnps" className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  EXEMPLE PRATIQUE
                </span>
                <h2 className="text-3xl font-bold text-[#2f365b] mb-6">
                  Simplifiez vos déclarations administratives
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Y'Core centralise toutes les données nécessaires pour vos
                  déclarations obligatoires, comme la CNPS, en quelques clics
                  seulement.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Données employés toujours à jour
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Automatisation des processus déclaratifs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Conformité réglementaire garantie
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Interface intuitive pour la génération des déclarations
                    </span>
                  </li>
                </ul>

                <button className="px-6 py-3 bg-[#2f365b] text-white font-semibold rounded-lg shadow-md hover:bg-[#252d4d] transition-all duration-300 flex items-center">
                  Demander une démo
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2f365b] to-[#ea532b] rounded-lg transform rotate-3 opacity-20"></div>
                <div className="relative">
                  <img
                    src="https://ahoulafricaine.com/wp-content/uploads/2019/05/naslayd-1024x448-1.jpg"
                    alt="Interface déclaration CNPS"
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
                    <FileText size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section id="integration" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                ÉCOSYSTÈME
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Un Core RH <span className="text-[#ea532b]">intégré</span> à votre SIRH
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Y'Core s'intègre naturellement avec tous les modules de la suite YIEL SIRH
                pour une expérience utilisateur fluide et cohérente.
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#2f365b] mb-6">
                    Le cœur de votre système d'information RH
                  </h3>
                  <p className="text-gray-600 mb-6">
                    En tant que module central, Y'Core alimente tous les autres composants
                    de votre SIRH avec des données fiables et à jour.
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Synchronisation automatique avec tous les modules
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Mise à jour unique pour une propagation instantanée
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        APIs ouvertes pour connexion avec vos systèmes existants
                      </span>
                    </li>
                  </ul>

                  <button className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-md hover:bg-[#d64a27] transition-all duration-300 flex items-center">
                    Découvrir l'écosystème
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                        <Users size={20} />
                      </div>
                      <h4 className="font-semibold text-[#2f365b] mb-2">Recrutement</h4>
                      <p className="text-sm text-gray-600">Gestion des talents et acquisition</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                        <Clock size={20} />
                      </div>
                      <h4 className="font-semibold text-[#2f365b] mb-2">Temps & Activités</h4>
                      <p className="text-sm text-gray-600">Suivi des temps et présences</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                        <FileText size={20} />
                      </div>
                      <h4 className="font-semibold text-[#2f365b] mb-2">Paie</h4>
                      <p className="text-sm text-gray-600">Gestion des rémunérations</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-4">
                        <UserCog size={20} />
                      </div>
                      <h4 className="font-semibold text-[#2f365b] mb-2">Formation</h4>
                      <p className="text-sm text-gray-600">Développement des compétences</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-[#2f365b] flex items-center justify-center text-white shadow-lg">
                      <Database size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="py-16 bg-gradient-to-r from-[#ea532b] to-[#ef7853] text-white"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold mb-4">
                  Prêt à centraliser et optimiser votre gestion RH ?
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Découvrez comment Y'Core peut transformer la gestion de vos
                  données et processus RH.
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-[#ea532b] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Demander une démo
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="px-6 py-3 bg-[#ea532b]/30 text-white font-semibold rounded-lg shadow-lg hover:bg-[#ea532b]/40 transition-all duration-300 flex items-center justify-center">
                  Télécharger la brochure
                  <FileText size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}

export default Core;