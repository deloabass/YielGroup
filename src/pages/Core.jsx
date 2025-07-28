import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Users,
  UserCog,
  Clock,
  FileText,
  Database,
  ChevronRight,
  Check,
  ArrowRight,
  Calendar,
  Briefcase,
  Clipboard,
  Shield,
  UserPlus,
  Award,
  FileSignature,
  FolderCog,
  BarChart
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";

function Core() {
  const topRef = useRef(null);
  useScrollToTop(topRef);
  // État pour les animations au défilement
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

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
    document
      .querySelectorAll("section[id], div[id^='feature-']")
      .forEach((element) => {
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
      image: "./dossiersalarie-Image.jpg",
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
      image:"./Organisation-Interne-image.png",
      details: [
        "Postes occupés et fiches de poste",
        "Liens hiérarchiques avec organigramme interactif",
        "Départements et services",
        "Trombinoscope dynamique pour faciliter les relations",
      ],
    },
    {
      id: "workflow-approbation",
      title: "Workflow RH",
      description: "Automatisation des processus d'approbation et validation",
      icon: <Clock size={24} />,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      image: "./workflow-approbation-image.webp",
      details: [
        "Circuits d'approbation personnalisables",
        "Validation multi-niveaux",
        "Alertes et notifications automatiques",
        "Suivi des délais de traitement",
      ],
    },
    {
      id: "docs-rh",
      title: "Documents RH",
      description: "Gestion complète des documents administratifs",
      icon: <FileText size={24} />,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      image: "./docs-rh-image.jpg",
      details: [
        "Contrats types adaptés aux réglementations locales",
        "Fiches de poste dynamiques",
        "Attestations et formulaires administratifs",
        "Archivage numérique sécurisé et conforme",
      ],
    },
  ];

  // Benefits de la centralisation
  const centralizationBenefits = [
    {
      title: "Automatisez l’onboarding",
      description: "Les recrues renseignent leurs infos, signent leur contrat et suivent leur parcours d'intégration.",
      icon: <FileSignature size={24} />,
    },
    {
      title: "Personnalisez le dossier RH",
      description: "Configurez le dossier idéal et suivez facilement les mises à jour.",
      icon: <FolderCog size={24} />,
    },
    {
      title: "Analysez et exportez vos données RH",
      description: "Générez vos rapports et exportez vos données à jour en quelques clics.",
      icon: <BarChart size={24} />,
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
      description:
        "Créez et mettez à jour vos fiches de poste en quelques clics",
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

  // Étapes d'intégration d'un nouveau collaborateur
  const onboardingSteps = [
    {
      title: "Saisie des informations",
      description: "Collecte des documents et informations du nouveau collaborateur",
      icon: <Clipboard size={24} />,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Génération du contrat",
      description: "Création automatique du contrat adapté au pays et type d'embauche",
      icon: <FileText size={24} />,
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "Déclarations sociales",
      description: "Formalités administratives locales (CNPS, etc.)",
      icon: <Shield size={24} />,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      title: "Organisation matérielle",
      description: "Préparation de l'accueil et des outils de travail",
      icon: <Briefcase size={24} />,
      color: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      title: "Communication interne",
      description: "Information du manager et désignation d'un parrain",
      icon: <UserPlus size={24} />,
      color: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      title: "Suivi de l'intégration",
      description: "Accompagnement pendant la période d'essai",
      icon: <Award size={24} />,
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
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
                  YIEL SIRH
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-[#ea532b]">Y'Core</span> : Le cœur
                  battant de votre SIRH
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Centralisez vos données RH dans un référentiel unifié et simplifiez 
                  votre gestion administrative pour vous concentrer sur l'essentiel : 
                  le développement humain.
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
                      src="./integration_des_talentsYCore.webp"
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
          <div className="absolute border-0 bottom-0 left-0 right-0 w-full overflow-hidden">
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

        {/* Introduction Section */}
        <section id="intro" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                VUE D'ENSEMBLE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Une gestion RH <span className="text-[#ea532b]">simple et précise</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une bonne organisation naît d'une gestion simple et précise - un principe fondamental qui donne vie à votre socle RH. 
                La gestion administrative doit être <strong>simple, rapide</strong> et <strong>fiable</strong> pour vous permettre de vous concentrer 
                sur l'essentiel : <strong>le développement humain</strong> et <strong>la performance</strong>.
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

            <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#2f365b] mb-6">
                Simplifiez votre gestion administrative
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    Avec un <strong>dossier RH centralisé</strong> et des <strong>données sécurisées</strong>, 
                    Y'Core simplifie la vie administrative de votre entreprise et adapté au contexte africain :
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Plus de perte de temps pour récupérer des documents</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Plus de ressaisies inutiles</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Plus de risques d'erreurs dans les données déclaratives</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-[#2f365b] mb-4">Y'Core facilite la gestion RH au quotidien</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Dossier salarié complet et sécurisé</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Organigramme interactif et trombinoscope dynamique</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Workflows RH personnalisables</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Déclarations sociales automatisées (CNPS, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Archivage numérique conforme aux réglementations locales</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                Les composantes essentielles du <span className="text-orange-500">Core RH</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Découvrez les fonctionnalités clés qui font de Y'Core la colonne
                vertébrale de votre système RH intégré, adapté aux entreprises africaines.
              </p>
            </div>
                    
            {/* Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.id}
                  id={`feature-${feature.id}`}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl ${
                    isVisible[`feature-${feature.id}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="relative h-96 bg-gray-100 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out hover:scale-110"
                      />
                    </div>
                
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} ${feature.textColor} shadow-md`}
                          >
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold text-[#2f365b]">
                            {feature.title}
                          </h3>
                        </div>
                
                        <p className="text-gray-600 text-base mb-6">
                          {feature.description}
                        </p>
                      </div>
                
                      <ul className="space-y-3">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-sm">
                            <Check className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Onboarding Process Section - NEW */}
        <section id="onboarding" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                INTÉGRATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Un processus d'intégration <span className="text-[#ea532b]">clair et adapté</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Le module d'intégration permet aux <strong>gestionnaires RH</strong> de 
                piloter facilement toutes les étapes nécessaires à l'accueil des nouveaux collaborateurs,
                en respectant les particularités du contexte africain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {onboardingSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center ${step.textColor} mb-6`}>
                    {step.icon}
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#2f365b] text-white flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-md mt-12">
              <div className="flex items-center justify-center mb-6">
                <Shield size={32} className="text-[#ea532b] mr-3" />
                <h3 className="text-2xl font-bold text-[#2f365b]">Avantages clés</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#2f365b] mb-3">Pour les RH</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gestion simplifiée des formalités administratives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Documents générés automatiquement et conformes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Suivi rigoureux de la période d'essai</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2f365b] mb-3">Pour les nouveaux collaborateurs</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Intégration structurée et bien organisée</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Accompagnement personnalisé (parrainage)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Accès rapide aux ressources et informations clés</span>
                    </li>
                  </ul>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Applications pratiques du{" "}
                <span className="text-[#ea532b]">Core RH</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez comment Y'Core facilite vos opérations quotidiennes et
                simplifie la gestion administrative de votre entreprise en Afrique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${useCase.color} flex items-center justify-center ${useCase.textColor} mb-6`}
                  >
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
        <section id="demo-cnps" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  EXEMPLE PRATIQUE
                </span>
                <h2 className="text-3xl font-bold text-[#2f365b] mb-6">
                  Simplifiez vos déclarations administratives
                </h2>
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
                  Grâce à Y'Core, générez automatiquement vos déclarations CNPS et autres documents administratifs obligatoires en quelques clics, sans ressaisie et sans risque d'erreur.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Extraction automatique des données salariales</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Formulaires pré-remplis conformes aux réglementations locales</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Archivage automatique des déclarations effectuées</span>
                  </li>
                </ul>
                <button onClick={() => navigate("/demo")} className="px-6 py-3 bg-[#2f365b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#22293f] transition-all duration-300 flex items-center justify-center">
                  En savoir plus
                  <ChevronRight size={18} className="ml-2" />
                </button>
              </div>
              <div className="relative">
                <div className="relative bg-white p-2 rounded-lg shadow-2xl">
                  <img
                    src="./DeclarationCNPS-Image.jpg"
                    alt="Déclaration CNPS"
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                  <FileText size={24} />
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
                <button onClick={() => navigate("/demo")} className="px-6 py-3 bg-white text-[#ea532b] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Demander une démo
                  <ArrowRight size={18} className="ml-2" />
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
