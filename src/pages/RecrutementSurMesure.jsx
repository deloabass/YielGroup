import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Users,
  UserPlus,
  CheckCircle,
  Calendar,
  ChevronRight,
  ArrowRight,
  Target,
  UserCheck,
  ClipboardList,
  Briefcase,
  Award,
  Check,
  TrendingUp,
  HeartHandshake,
  Building,
  Gem,
  Monitor,
  Clock,
  Shield,
  DollarSign,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function RecrutementSurMesure() {
  const navigate = useNavigate();
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

    // Observer toutes les sections
    document
      .querySelectorAll("section[id], div[id^='feature-']")
      .forEach((element) => {
        observer.observe(element);
      });

    return () => observer.disconnect();
  }, []);

  // Processus de recrutement
  const recrutementSteps = [
    {
      id: 1,
      title: "Clarification des besoins",
      description:
        "Cadrage du poste, profil recherché, contexte managérial et enjeux business",
      icon: <Target size={24} />,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Sourcing & diffusion",
      description:
        "Publication des offres sur les bons canaux via notre ATS et premier filtrage",
      icon: <UserPlus size={24} />,
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: 3,
      title: "Évaluation sur mesure",
      description:
        "Entretiens personnalisés, tests et vérifications de références",
      icon: <ClipboardList size={24} />,
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      id: 4,
      title: "Sélection & suivi",
      description:
        "Présentation des profils qualifiés avec argumentation détaillée",
      icon: <UserCheck size={24} />,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
  ];

  // Étapes d'intégration
  const integrationSteps = [
    {
      id: 1,
      title: "Préparation",
      description: "Préparation administrative et matérielle avant l'arrivée",
      icon: <Briefcase size={24} />,
      color: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      id: 2,
      title: "Accueil personnalisé",
      description:
        "Programme d'accueil adapté au poste et à la culture d'entreprise",
      icon: <HeartHandshake size={24} />,
      color: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      id: 3,
      title: "Formation initiale",
      description:
        "Accompagnement et formation pour une prise de poste efficace",
      icon: <Award size={24} />,
      color: "bg-teal-100",
      textColor: "text-teal-600",
    },
    {
      id: 4,
      title: "Suivi d'intégration",
      description:
        "Évaluation régulière pendant les premières semaines dans l'entreprise",
      icon: <TrendingUp size={24} />,
      color: "bg-amber-100",
      textColor: "text-amber-600",
    },
  ];

  // Avantages de notre approche
  const advantagesList = [
    {
      title: "Gain de temps considérable",
      description:
        "Réduction du temps consacré au recrutement grâce à notre processus optimisé et notre ATS",
      icon: <Clock size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
    {
      title: "Qualité des recrutements",
      description:
        "Sélection rigoureuse basée sur vos critères spécifiques et votre culture d'entreprise",
      icon: <UserCheck size={24} />,
      color: "bg-[#ea532b]/10",
      textColor: "text-[#ea532b]",
    },
    {
      title: "Solution clé en main",
      description:
        "Combinaison d'expertise humaine et de technologie pour un recrutement fluide et efficace",
      icon: <CheckCircle size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
  ];

  // Témoignages clients
  // const testimonials = [
  //   {
  //     quote:
  //       "Le processus de recrutement sur mesure de YIEL nous a permis de trouver rapidement des talents parfaitement adaptés à nos besoins spécifiques en Côte d'Ivoire.",
  //     author: "Marie Koné",
  //     position: "DRH, Société de Télécommunications",
  //     company: "Orange CI",
  //     avatar: "/api/placeholder/100/100",
  //   },
  //   {
  //     quote:
  //       "L'accompagnement personnalisé lors de l'intégration a considérablement réduit notre turnover et amélioré la productivité de nos nouvelles recrues.",
  //     author: "Amadou Diallo",
  //     position: "Directeur Général",
  //     company: "Banque Atlantique",
  //     avatar: "/api/placeholder/100/100",
  //   },
  //   {
  //     quote:
  //       "Leur outil ATS nous a fait gagner un temps précieux dans le suivi des candidatures et la collaboration entre nos équipes RH et nos managers.",
  //     author: "Sarah Mensah",
  //     position: "Responsable RH",
  //     company: "MTN Group",
  //     avatar: "/api/placeholder/100/100",
  //   },
  // ];

  // Secteurs d'expertise
  const expertiseSectors = [
    {
      title: "Finance & Banque",
      icon: <Building size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
    {
      title: "Télécommunications",
      icon: <TrendingUp size={24} />,
      color: "bg-[#ea532b]/10",
      textColor: "text-[#ea532b]",
    },
    {
      title: "Énergie & Ressources",
      icon: <Gem size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
    {
      title: "Santé & Pharmaceutique",
      icon: <HeartHandshake size={24} />,
      color: "bg-[#ea532b]/10",
      textColor: "text-[#ea532b]",
    },
  ];

  // Nos engagements
  const engagements = [
    {
      title: "Réactivité et transparence",
      icon: <Clock size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
    {
      title: "Méthodologie rigoureuse",
      icon: <CheckCircle size={24} />,
      color: "bg-[#ea532b]/10",
      textColor: "text-[#ea532b]",
    },
    {
      title: "Garantie de remplacement",
      icon: <Shield size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
    {
      title: "Tarification sans surprise",
      icon: <DollarSign size={24} />,
      color: "bg-[#ea532b]/10",
      textColor: "text-[#ea532b]",
    },
  ];

  // Fonctionnalités de l'ATS
  const atsFeatures = [
    "Interface claire pour gérer toutes vos offres",
    "Vision globale des candidatures (tri, annotation, collaboration)",
    "Alertes automatiques et tableaux de bord",
    "Suivi post-recrutement intégré",
    "Traçabilité complète des décisions",
    "Planification entretien intégrée",
    "messagerie interne"
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
            <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  YIEL RECRUTEMENT
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-[#ea532b]">Recrutement sur mesure</span>{" "}
                  pour une intégration réussie
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Une solution clé en main pour accompagner les entreprises dans
                  la sélection, l’évaluation et l’intégration durable de leurs
                  talents.
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
                      src="./HeroRecrutementSurmesure.png"
                      alt="Recrutement sur mesure"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                  <Users size={24} />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
                  <UserPlus size={24} />
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
                fill="#ea532b"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Notre mission Section */}
        <section id="mission" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                NOTRE MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Vous faire{" "}
                <span className="text-[#ea532b]">gagner du temps</span> tout en
                assurant la qualité
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous intervenons comme une extension de votre équipe RH, pour
                sourcer, évaluer, sélectionner et intégrer les meilleurs
                profils, alignés avec vos objectifs stratégiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {advantagesList.map((advantage, index) => (
                <div
                  key={index}
                  id={`feature-advantage-${index}`}
                  className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                    isVisible[`feature-advantage-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-100 translate-y-6"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${advantage.color} flex items-center justify-center ${advantage.textColor} mb-6`}
                  >
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#2f365b] mb-6">
                    Pourquoi choisir notre approche sur mesure ?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Notre approche combine expertise humaine et puissance
                    technologique pour vous offrir un recrutement
                    personnalisable, fluide et efficace :
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Recrutement personnalisé adapté à votre culture
                        d'entreprise
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Outil digital (ATS) pour simplifier et structurer chaque
                        étape
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Accompagnement jusqu'à l'intégration complète des
                        recrues
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Présentation uniquement des profils qualifiés avec
                        argumentation
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img
                  src="./Heroparcourscollaborateur.avif"
                  // src="https://st2.depositphotos.com/4017441/11116/v/450/depositphotos_111165312-stock-illustration-round-table-talks-thirteen-persons.jpg"
                    // src="https://img.freepik.com/vecteurs-premium/dessin-reunion-equipe-au-bureau_1108271-130.jpg"
                    alt="Recrutement sur mesure"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2f365b]/60 to-transparent flex items-center px-8">
                    <p className="text-white text-xl font-semibold max-w-xs">
                      "Recrutez les bons profils, au bon moment, avec la bonne
                      méthode et les bons outils"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Process Section */}
        <section id="recruitment-process" className="py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                PROCESSUS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Notre solution{" "}
                <span className="text-[#ea532b]">clé en main</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une méthodologie éprouvée en 4 étapes pour identifier et attirer
                les talents qui correspondent parfaitement à vos besoins et à
                votre culture d'entreprise.
              </p>
            </div>

            <div className="relative">
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {recrutementSteps.map((step, index) => (
                  <div
                    key={step.id}
                    id={`feature-recrutement-${step.id}`}
                    className={`relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 z-10 ${
                      isVisible[`feature-recrutement-${step.id}`]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center ${step.textColor} mb-6`}
                      >
                        {step.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#2f365b] text-white flex items-center justify-center font-bold mb-4">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>

                    {/* Arrow for mobile */}
                    {index < recrutementSteps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-4">
                        <ChevronRight size={24} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notre ATS Section */}
        <section id="ats" className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                NOTRE TECHNOLOGIE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Application de{" "}
                <span className="text-[#ea532b]">Suivi des Talents</span> (ATS)
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre ATS intégrée simplifie et structure chaque étape du
                processus de recrutement, de la publication de l'offre à
                l'intégration du candidat.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
              <div className="lg:col-span-2 p-8 bg-gray-50 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-[#2f365b] mb-6">
                  Fonctionnalités de notre ATS
                </h3>
                <ul className="space-y-4">
                  {atsFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <p className="text-gray-700 font-medium mb-4">
                    Notre ATS est un vrai gain de temps pour vos équipes RH et
                    vos managers :
                  </p>
                  <div className="flex items-center text-[#ea532b] font-semibold">
                    <Clock size={20} className="mr-2" />
                    <span>
                      Fini les emails dispersés et les suivis manuels !
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 md:h-96">
                  <img
                    src="/analytics.jpeg"
                    // src="https://blog.candidatus.com/wp-content/uploads/2024/11/v2-m5bqi-f74zp.jpg"
                    // src="https://www.avature.net/wp-content/uploads/2021/02/07-ATS-Gain-Clarity-On-Your-Recruitment-Programs-FR.png"
                    alt="Notre Application de Suivi des Talents"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2f365b]/80 to-transparent flex items-center p-8">
                    <div className="max-w-md">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                        Une interface intuitive pour tous vos recrutements
                      </h3>
                      <p className="text-white/90">
                        Suivez en temps réel l'avancement de vos recrutements et
                        prenez des décisions éclairées grâce à une vision
                        globale et claire de toutes les candidatures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mb-3">
                        <Monitor size={20} />
                      </div>
                      <p className="text-gray-700 font-medium">
                        Interface claire et ergonomique
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-[#2f365b]/10 flex items-center justify-center text-[#2f365b] mb-3">
                        <Users size={20} />
                      </div>
                      <p className="text-gray-700 font-medium">
                        Collaboration en temps réel
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mb-3">
                        <CheckCircle size={20} />
                      </div>
                      <p className="text-gray-700 font-medium">
                        Suivi post-recrutement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Process Section */}
        <section id="integration-process" className="py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                INTÉGRATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Un parcours d'
                <span className="text-[#ea532b]">intégration</span> efficace
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous accompagnons vos nouveaux collaborateurs dès leur arrivée
                pour favoriser leur engagement et accélérer leur montée en
                compétence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationSteps.map((step) => (
                <div
                  key={step.id}
                  id={`feature-integration-${step.id}`}
                  className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                    isVisible[`feature-integration-${step.id}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center ${step.textColor} mb-4`}
                    >
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#2f365b] text-white flex items-center justify-center font-bold mb-4">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Statistiques */}
            <div className="mt-16 bg-[#2f365b] rounded-xl p-10 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ea532b] mb-2">
                    98%
                  </div>
                  <p className="text-gray-300">Taux de satisfaction client</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ea532b] mb-2">
                    350+
                  </div>
                  <p className="text-gray-300">Recrutements réussis</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ea532b] mb-2">
                    15
                  </div>
                  <p className="text-gray-300">Années d'expertise</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ea532b] mb-2">
                    92%
                  </div>
                  <p className="text-gray-300">Taux de rétention à 1 an</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                TÉMOIGNAGES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Ils nous font <span className="text-[#ea532b]">confiance</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez ce que nos clients disent de notre approche de
                recrutement sur mesure et de notre accompagnement à
                l'intégration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  id={`feature-testimonial-${index}`}
                  className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 ${
                    isVisible[`feature-testimonial-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  } transition-all duration-500`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="mt-auto flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-[#2f365b]">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.position}
                        </div>
                        <div className="text-sm text-[#ea532b]">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Secteurs d'expertise Section */}
        <section id="sectors" className="py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                EXPERTISE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Nos <span className="text-[#ea532b]">secteurs</span> d'expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous avons développé une expertise spécifique dans des secteurs
                clés où les enjeux de recrutement sont particulièrement
                stratégiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertiseSectors.map((sector, index) => (
                <div
                  key={index}
                  id={`feature-sector-${index}`}
                  className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 cursor-pointer ${
                    isVisible[`feature-sector-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${sector.color} flex items-center justify-center ${sector.textColor} mb-6`}
                    >
                      {sector.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-2">
                      {sector.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagements Section */}
        <section id="engagements" className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                ENGAGEMENTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Nos <span className="text-[#ea532b]">engagements</span> envers
                vous
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous nous engageons à respecter des standards élevés de qualité
                et d'éthique pour vous offrir un service de recrutement
                exemplaire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {engagements.map((engagement, index) => (
                <div
                  key={index}
                  id={`feature-engagement-${index}`}
                  className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                    isVisible[`feature-engagement-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-100 translate-y-6"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${engagement.color} flex items-center justify-center ${engagement.textColor} mb-6`}
                    >
                      {engagement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-2">
                      {engagement.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-[#2f365b]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#2f365b] to-[#3a4272] rounded-xl p-5 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                      DÉMARREZ MAINTENANT
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Prêt à transformer votre{" "}
                      <span className="text-[#ea532b]">
                        processus de recrutement
                      </span>{" "}
                      ?
                    </h2>
                    <p className="text-lg text-gray-200 mb-8">
                      Contactez-nous dès aujourd'hui pour un diagnostic gratuit
                      de vos besoins en recrutement et découvrez comment notre
                      approche sur mesure peut vous aider.
                    </p>
                  </div>

                  {/* Boutons déplacés ici */}
                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-4 sm:space-y-0 md:space-y-4 lg:space-y-0 lg:space-x-4">
                    <button className="px-6 text-nowrap py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center">
                      Prendre rendez-vous
                      <Calendar size={18} className="ml-2" />
                    </button>
                    <button className="px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                      Nous contacter
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
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

export default RecrutementSurMesure;
