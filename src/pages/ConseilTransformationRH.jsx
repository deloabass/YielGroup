import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Lightbulb,
  Users,
  BarChart3,
  Clock,
  Sparkles,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Presentation,
  GraduationCap,
  User,
  Briefcase,
  Settings,
  FileText,
  MessagesSquare,
  Calendar,
  PlayCircle,
  BarChart2,
  Activity,
  Clock4,
  BarChartBig,
  BarChart,
  MessageCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import FAQ from "../components/FAQ";

function ConseilTransformationRH() {
  const navigate = useNavigate();
  // État pour les animations au défilement
  const [isVisible, setIsVisible] = useState({});

  // État pour gérer l'onglet actif des témoignages
  // const [activeTestimonial, setActiveTestimonial] = useState(0);

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
    document.querySelectorAll("section[id]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Services de transformation RH
  const transformationServices = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Audit & diagnostic RH",
      description:
        "Analyse complète de vos processus actuels et identification des axes d'amélioration prioritaires",
      benefits: [
        "Cartographie des processus RH",
        "Évaluation de la maturité digitale",
        "Mesure de l'expérience collaborateur",
      ],
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Stratégie RH",
      description:
        "Définition d'une feuille de route RH alignée avec les objectifs stratégiques de votre entreprise",
      benefits: [
        "Vision RH à 3-5 ans",
        "Plan de transformation digital",
        "Indicateurs de performance clés",
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Refonte des processus",
      description:
        "Optimisation et digitalisation de vos processus RH pour plus d'efficacité et de valeur ajoutée",
      benefits: [
        "Simplification des workflows",
        "Automatisation des tâches administratives",
        "Accélération des prises de décision",
      ],
    },
    {
      icon: <Clock4 className="h-8 w-8" />,
      title: "Change management",
      description:
        "Accompagnement de vos équipes dans l'adoption des nouvelles pratiques et outils RH",
      benefits: [
        "Communication du changement",
        "Formation des utilisateurs",
        "Support adapté aux résistances",
      ],
    },
  ];

  // Étapes de la méthodologie
  const methodologySteps = [
    {
      number: "01",
      title: "Analyse préliminaire",
      description:
        "Nous évaluons la maturité de vos processus RH actuels et identifions les principaux enjeux de transformation",
      icon: <BarChartBig className="h-10 w-10" />,
    },
    {
      number: "02",
      title: "Co-construction de la vision",
      description:
        "Nous définissons ensemble votre cible RH idéale en alignement avec la stratégie de l'entreprise",
      icon: <GraduationCap className="h-10 w-10" />,
    },
    {
      number: "03",
      title: "Élaboration du plan d'action",
      description:
        "Nous créons une feuille de route détaillée avec des objectifs concrets et mesurables",
      icon: <FileText className="h-10 w-10" />,
    },
    {
      number: "04",
      title: "Implémentation progressive",
      description:
        "Nous déployons les solutions par étapes pour assurer une adoption optimale",
      icon: <Settings className="h-10 w-10" />,
    },
    {
      number: "05",
      title: "Formation et accompagnement",
      description:
        "Nous formons vos équipes et les accompagnons dans la prise en main des nouveaux outils",
      icon: <User className="h-10 w-10" />,
    },
    {
      number: "06",
      title: "Suivi et optimisation",
      description:
        "Nous mesurons les résultats et ajustons la stratégie pour maximiser les bénéfices",
      icon: <Briefcase className="h-10 w-10" />,
    },
  ];

  // Les bénéfices de la transformation RH
  const benefits = [
    {
      title: "Productivité accrue",
      description:
        "Automatisation des tâches administratives libérant du temps pour les missions à valeur ajoutée",
      icon: <BarChart2 className="h-8 w-8" />,
    },
    {
      title: "Décisions éclairées",
      description:
        "Accès à des données fiables et des analytics pour piloter efficacement le capital humain",
      icon: <Lightbulb className="h-8 w-8" />,
    },
    {
      title: "Expérience collaborateur améliorée",
      description:
        "Parcours utilisateurs fluides et intuitifs favorisant l'engagement des équipes",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Agilité organisationnelle",
      description:
        "Capacité accrue à s'adapter rapidement aux évolutions du marché et aux nouveaux besoins",
      icon: <Activity className="h-8 w-8" />,
    },
  ];

  // Cases d'usage internationaux
  const caseStudies = [
    {
      image: "./DigitalisationRHImage.png",
      title: "Digitalisation RH pour un groupe bancaire",
      industry: "Finance",
      description:
        "Refonte complète des processus RH et implémentation d'un SIRH pour 3000 collaborateurs dans 7 pays africains",
      results: [
        "Réduction de 65% du temps de traitement administratif",
        "Amélioration de 40% de la satisfaction collaborateur",
        "Consolidation des données RH à l'échelle du groupe",
      ],
    },
    {
      image: "./TransformationdespratiquesImage.webp",
      title: "Transformation des pratiques managériales",
      industry: "Télécommunications",
      description:
        "Accompagnement au changement et digitalisation des entretiens de performance pour 1200 managers",
      results: [
        "Taux d'adoption de 92% dès la première année",
        "Réduction du turnover de 15%",
        "Augmentation significative de l'engagement des équipes",
      ],
    },
    {
      image: "./ModernisationdelagestionImage.webp",
      title: "Modernisation de la gestion des talents",
      industry: "Énergie",
      description:
        "Mise en place d'un programme intégré de développement des compétences et gestion des carrières",
      results: [
        "Cartographie des compétences pour 5000 collaborateurs",
        "Réduction de 30% des coûts de recrutement externe",
        "Mobilité interne accrue de 25%",
      ],
    },
  ];

  // FAQ items
  const faqs = [
    {
      id: 1,
      question: "Combien de temps dure un projet de transformation RH ?",
      answer:
        "La durée d'un projet de transformation RH varie considérablement selon l'envergure et la complexité des changements à implémenter. Typiquement, un projet complet peut s'étendre sur 6 à 18 mois. Nous privilégions une approche par phases qui permet d'obtenir des résultats tangibles à court terme tout en construisant une transformation durable à long terme.",
    },
    {
      id: 2,
      question:
        "Comment mesurer le retour sur investissement d'une transformation RH ?",
      answer:
        "Le ROI d'une transformation RH est mesurable à travers plusieurs indicateurs : réduction des coûts opérationnels, gain de productivité des équipes RH, amélioration de l'expérience collaborateur, réduction du turnover, accélération des processus de recrutement, etc. Nous définissons avec vous les KPIs pertinents dès le début du projet et mettons en place des tableaux de bord pour suivre ces indicateurs dans le temps.",
    },
    {
      id: 3,
      question:
        "Quelles sont les erreurs courantes dans les projets de transformation RH ?",
      answer:
        "Les erreurs les plus fréquentes incluent : se concentrer uniquement sur l'aspect technologique sans repenser les processus, sous-estimer l'importance du change management, ne pas impliquer suffisamment les utilisateurs finaux, vouloir tout transformer en même temps, ou encore ne pas aligner la transformation RH avec la stratégie globale de l'entreprise. Notre accompagnement vous permet d'éviter ces écueils grâce à une méthodologie éprouvée.",
    },
    {
      id: 4,
      question: "Quels profils sont impliqués dans vos équipes de conseil ?",
      answer:
        "Nos équipes sont composées de consultants expérimentés alliant expertise RH, compétences en gestion de projet et maîtrise des technologies SIRH. Selon les besoins de votre projet, nous mobilisons des profils variés : consultants en organisation, experts en conduite du changement, spécialistes SIRH, data analysts RH, etc. Chaque projet est supervisé par un directeur de mission qui assure la cohérence de l'accompagnement.",
    },
    {
      id: 5,
      question:
        "Comment adaptez-vous votre accompagnement au contexte africain ?",
      answer:
        "Notre accompagnement tient compte des spécificités du contexte africain : réglementations locales, enjeux RH propres au continent, niveau de maturité digitale, et particularités culturelles. Nos consultants ont une connaissance approfondie des problématiques RH en Afrique et adaptent les meilleures pratiques internationales aux réalités locales. Nous proposons des solutions pragmatiques et accessibles qui tiennent compte des contraintes technologiques et budgétaires.",
    },
  ];

  // Témoignages clients
  // const testimonials = [
  //   {
  //     name: "Aminata Diallo",
  //     position: "DRH, Groupe financier panafricain",
  //     quote:
  //       "L'accompagnement de YIEL nous a permis de structurer notre démarche de transformation RH et d'accélérer la digitalisation de nos processus. Nous avons gagné en efficacité et amélioré significativement l'expérience de nos collaborateurs.",
  //     image: "/api/placeholder/400/400",
  //   },
  //   {
  //     name: "Emmanuel Koné",
  //     position: "CEO, Entreprise de télécommunications",
  //     quote:
  //       "Grâce aux conseils stratégiques de YIEL, nous avons pu aligner notre vision RH avec nos objectifs de croissance. La méthodologie structurée et l'expertise des consultants ont fait toute la différence dans la réussite de notre projet.",
  //     image: "/api/placeholder/400/400",
  //   },
  //   {
  //     name: "Fatou Sow",
  //     position: "Responsable RH, Groupe industriel",
  //     quote:
  //       "YIEL a parfaitement compris nos enjeux locaux et nous a accompagnés dans l'implémentation de solutions adaptées à notre contexte. L'approche pragmatique et le suivi rigoureux ont permis une adoption rapide par les équipes.",
  //     image: "/api/placeholder/400/400",
  //   },
  // ];

  // const changeTestimonial = (index) => {
  //   setActiveTestimonial(index);
  // };
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section
          id="hero"
          className={`relative py-20 md:py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden ${
            isVisible["hero"] ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('./VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  CONSEIL & TRANSFORMATION
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Transformez votre fonction RH en
                  <span className="text-[#ea532b]">
                    {" "}
                    véritable partenaire stratégique
                  </span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Nos experts vous accompagnent dans la transformation de votre
                  fonction RH pour répondre aux défis du monde du travail en
                  Afrique et libérer tout le potentiel de vos équipes.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => navigate("/demo")}
                    className="px-6 cursor-pointer py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center"
                  >
                    Demander une démo
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                  <button
                    onClick={() => {
                      const servicesSection =
                        document.getElementById("services");
                      servicesSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 cursor-pointer py-3 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Découvrir nos services
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2f365b] to-[#ea532b] rounded-lg transform rotate-6 opacity-20"></div>
                  <div className="relative bg-white p-2 rounded-lg shadow-2xl">
                    <img
                      src="/conseil-photo.avif"
                      alt="Conseil en transformation RH"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
                  <BarChart className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats highlight */}
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-[#ea532b] mb-2">
                  87%
                </div>
                <p className="text-white/90">
                  des entreprises africaines considèrent la transformation RH
                  comme une priorité stratégique
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-[#ea532b] mb-2">3x</div>
                <p className="text-white/90">
                  plus d'engagement des collaborateurs dans les entreprises avec
                  une RH digitalisée
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold text-[#ea532b] mb-2">
                  60%
                </div>
                <p className="text-white/90">
                  des DRH manquent d'accompagnement stratégique dans leur
                  transformation
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full h-40"
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

        {/* Notre offre Section */}
        <section
          id="notre-offre"
          className={`py-16 md:py-20 bg-white ${
            isVisible["notre-offre"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                NOTRE OFFRE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Trois pôles pour{" "}
                <span className="text-[#ea532b]">repenser durablement</span>{" "}
                votre fonction RH
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous accompagnons les entreprises dans la transformation de
                leurs pratiques RH à travers une approche intégrée, adaptée à
                vos enjeux de croissance, de digitalisation et de performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pôle 1 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-1">
                  <div className="bg-white p-6 md:p-8">
                    <div className="w-16 h-16 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mb-6">
                      <BarChart2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-4">
                      Réingénierie des pratiques RH & digitalisation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Optimisez vos processus RH et facilitez la prise de
                      décision grâce à des outils digitaux adaptés aux réalités
                      de votre entreprise.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Audit et modernisation des processus RH
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Déploiement de SIRH modulaires
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Structuration des parcours collaborateurs
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Appui à la mise en conformité réglementaire
                        </span>
                      </div>
                    </div>
                    {/* <a
                      href="#"
                      className="inline-flex items-center text-[#ea532b] font-medium mt-6"
                    >
                      En savoir plus
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a> */}
                  </div>
                </div>
              </div>

              {/* Pôle 2 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-1">
                  <div className="bg-white p-6 md:p-8">
                    <div className="w-16 h-16 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mb-6">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-4">
                      Conduite du changement
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Engager les équipes, sécuriser les transformations et
                      ancrer les nouveaux usages pour garantir l'adoption des
                      évolutions.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Identification des zones sensibles
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Mobilisation des managers comme relais
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Communication, formation et soutien ciblés
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Installation de nouveaux comportements durables
                        </span>
                      </div>
                    </div>
                    {/* <a
                      href="#"
                      className="inline-flex items-center text-[#ea532b] font-medium mt-6"
                    >
                      En savoir plus
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a> */}
                  </div>
                </div>
              </div>

              {/* Pôle 3 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-1">
                  <div className="bg-white p-6 md:p-8">
                    <div className="w-16 h-16 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mb-6">
                      <Activity className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-4">
                      Agilité managériale & nouvelles méthodes de travail
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Adoptez une culture managériale plus agile, plus proche du
                      terrain et alignée avec les attentes des collaborateurs.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Sensibilisation à l'agilité managériale
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Structuration des rituels agiles
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Développement de la co-construction
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Évolution vers plus d'autonomie et de confiance
                        </span>
                      </div>
                    </div>
                    {/* <a
                      href="#"
                      className="inline-flex items-center text-[#ea532b] font-medium mt-6"
                    >
                      En savoir plus
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className={`py-16 md:py-20 bg-gray-50 ${
            isVisible["services"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                NOS SERVICES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Des solutions de transformation RH{" "}
                <span className="text-[#ea532b]">adaptées à vos enjeux</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous vous accompagnons à chaque étape de votre transformation RH
                avec des solutions sur mesure qui répondent précisément à vos
                défis actuels et futurs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformationServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 md:p-8"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2f365b] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section
          id="methodologie"
          className={`py-16 md:py-20 bg-white ${
            isVisible["methodologie"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                NOTRE APPROCHE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Une méthodologie{" "}
                <span className="text-[#ea532b]">éprouvée</span> pour réussir
                votre transformation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre démarche structurée en 6 étapes vous garantit un
                accompagnement progressif et sur mesure, depuis l'analyse
                initiale jusqu'au déploiement et à l'optimisation continue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methodologySteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 md:p-8 relative"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#ea532b] text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-4 text-[#2f365b]">{step.icon}</div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className={`py-16 md:py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white ${
            isVisible["benefits"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-6">
                BÉNÉFICES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transformez votre RH en{" "}
                <span className="text-[#ea532b]">
                  véritable levier de performance
                </span>
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                Une transformation RH réussie génère des bénéfices tangibles
                pour votre organisation, vos collaborateurs et votre département
                RH.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ea532b]/20 flex items-center justify-center text-[#ea532b] mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section
          id="case-studies"
          className={`py-16 md:py-20 bg-gray-50 ${
            isVisible["case-studies"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                RÉALISATIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Nos <span className="text-[#ea532b]">références</span> en
                transformation RH
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez comment nous avons accompagné des entreprises
                africaines dans l'évolution de leur fonction RH et les résultats
                concrets obtenus.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 relative">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#2f365b] text-white text-sm px-3 py-1 rounded-full">
                      {caseStudy.industry}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {caseStudy.description}
                    </p>
                    <div className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    {/* <a
                      href="#"
                      className="inline-flex items-center text-[#ea532b] font-medium mt-6"
                    >
                      Lire l'étude de cas
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section
          id="testimonials"
          className={`py-16 md:py-20 bg-gray-50 ${
            isVisible["testimonials"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                TÉMOIGNAGES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Ce que <span className="text-[#ea532b]">nos clients</span>{" "}
                disent de nous
              </h2>
            </div>

            <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea532b]/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2f365b]/5 rounded-full -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <div className="relative">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src={testimonials[activeTestimonial].image}
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#ea532b] text-white p-2 rounded-full shadow">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3 lg:pl-12">
                    <div className="text-4xl text-[#ea532b] mb-4">"</div>
                    <p className="text-xl text-gray-700 italic mb-6">
                      {testimonials[activeTestimonial].quote}
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-[#2f365b]">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-500">
                        {testimonials[activeTestimonial].position}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => changeTestimonial(index)}
                      className={`w-3 h-3 rounded-full ${
                        activeTestimonial === index
                          ? "bg-[#ea532b]"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Témoignage ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <FAQ faqs={faqs} />

        {/* CTA Section */}
        <section
          id="cta"
          className={`py-16 md:py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white ${
            isVisible["cta"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à transformer votre fonction RH en{" "}
                <span className="text-[#ea532b]">levier stratégique</span> ?
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
                Nos experts sont à votre disposition pour échanger sur vos
                enjeux et vous proposer un accompagnement sur mesure, adapté à
                votre contexte et à vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => navigate("/demo")}
                  className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center"
                >
                  Demander une démo
                  <Calendar className="h-5 w-5 ml-2" />
                </button>
                <button
                  onClick={() => navigate("/webinar")}
                  className="px-6 py-3 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  S'inscrire au prochain webinar
                  <PlayCircle className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-[#ea532b] mb-4" />
                <h3 className="text-xl font-bold mb-2">Diagnostic express</h3>
                <p className="text-gray-200">
                  Un premier échange de 45 minutes pour identifier vos enjeux et
                  évaluer votre maturité RH
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
                <FileText className="h-12 w-12 text-[#ea532b] mb-4" />
                <h3 className="text-xl font-bold mb-2">Livre blanc</h3>
                <p className="text-gray-200">
                  Téléchargez notre guide sur les meilleures pratiques de
                  transformation RH en Afrique
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center text-center">
                <GraduationCap className="h-12 w-12 text-[#ea532b] mb-4" />
                <h3 className="text-xl font-bold mb-2">Programme sur-mesure</h3>
                <p className="text-gray-200">
                  Une intervention personnalisée pour répondre précisément à vos
                  défis de transformation
                </p>
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

export default ConseilTransformationRH;
