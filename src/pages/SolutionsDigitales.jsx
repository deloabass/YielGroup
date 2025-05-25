import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Globe,
  Code,
  Palette,
  TrendingUp,
  Zap,
  Server,
  ArrowRight,
  Search,
  Monitor,
  ShoppingBag,
  RefreshCw,
  Layout,
  FileText,
  Smartphone,
  Database,
  Layers,
  Briefcase,
  Figma,
  Grid,
  PenTool,
  Image,
  Edit,
  BarChart2,
  Mail,
  Users,
  MessageCircle,
  CheckCircle,
  Clock,
  Shield,
  Clipboard,
  Calendar,
} from "lucide-react";
import FAQ from "../components/FAQ";
import { useNavigate } from "react-router-dom";

function SolutionsDigitales() {
  const navigate = useNavigate();
  // État pour les animations au défilement
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("sites");

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

  // Services digitaux
  const digitalServices = [
    {
      id: "sites",
      title: "Création de sites internet",
      icon: <Globe size={24} />,
      description:
        "Offrir une présence en ligne professionnelle et performante.",
      features: [
        {
          text: "Site vitrine (entreprises, professionnels, porteurs de projet)",
          icon: <Monitor size={20} />,
        },
        {
          text: "Site e-commerce (boutique en ligne avec paiement sécurisé)",
          icon: <ShoppingBag size={20} />,
        },
        { text: "Refonte de sites existants", icon: <RefreshCw size={20} /> },
        {
          text: "Landing pages optimisées (campagnes marketing)",
          icon: <Layout size={20} />,
        },
        { text: "Blog ou plateforme de contenu", icon: <FileText size={20} /> },
        {
          text: "SEO de base (référencement naturel)",
          icon: <Search size={20} />,
        },
      ],
      color: "bg-[#2f365b]",
      accent: "text-[#ea532b]",
      image: "./createSiteImage.avif",
    },
    {
      id: "applications",
      title: "Développement d'applications & outils métiers",
      icon: <Code size={24} />,
      description:
        "Créer des solutions digitales sur mesure adaptées à vos besoins internes ou externes.",
      features: [
        {
          text: "Applications web sur mesure (portail client, tableau de bord, outil métier)",
          icon: <Monitor size={20} />,
        },
        {
          text: "Applications mobiles (iOS/Android)",
          icon: <Smartphone size={20} />,
        },
        { text: "CRM / ERP personnalisés", icon: <Database size={20} /> },
        {
          text: "Intégration d'API et services tiers",
          icon: <Layers size={20} />,
        },
        {
          text: "Automatisation des tâches métiers",
          icon: <Briefcase size={20} />,
        },
      ],
      color: "bg-[#ea532b]",
      accent: "text-[#2f365b]",
      image: "./DevOutil.png",
    },
    {
      id: "design",
      title: "Identité visuelle & design UX/UI",
      icon: <Palette size={24} />,
      description:
        "Donner à votre marque une identité forte et cohérente dans l'environnement digital.",
      features: [
        {
          text: "Création de logo et charte graphique",
          icon: <PenTool size={20} />,
        },
        { text: "Webdesign (UX/UI)", icon: <Grid size={20} /> },
        {
          text: "Maquettes interactives (wireframes, prototypes)",
          icon: <Figma size={20} />,
        },
        {
          text: "Supports visuels pour les réseaux sociaux",
          icon: <Image size={20} />,
        },
        {
          text: "Templates marketing (newsletters, bannières, flyers...)",
          icon: <Edit size={20} />,
        },
      ],
      color: "bg-[#2f365b]",
      accent: "text-[#ea532b]",
      image: "./designUX-UI.avif",
    },
    {
      id: "marketing",
      title: "Marketing digital & communication",
      icon: <TrendingUp size={24} />,
      description:
        "Développer votre visibilité, attirer vos cibles et fidéliser votre communauté.",
      features: [
        { text: "Stratégie digitale", icon: <BarChart2 size={20} /> },
        {
          text: "Optimisation SEO & rédaction web",
          icon: <Search size={20} />,
        },
        {
          text: "Création de contenus (textes, visuels, vidéos)",
          icon: <Edit size={20} />,
        },
        { text: "Emailing, newsletters", icon: <Mail size={20} /> },
        { text: "Community management (en option)", icon: <Users size={20} /> },
      ],
      color: "bg-[#ea532b]",
      accent: "text-[#2f365b]",
      image: "./MarketingDigital.avif",
    },
    {
      id: "automatisation",
      title: "Automatisation & outils collaboratifs",
      icon: <Zap size={24} />,
      description:
        "Gagner en efficacité grâce à l'automatisation et des outils bien intégrés.",
      features: [
        {
          text: "Automatisation des processus (formulaires, alertes, workflows)",
          icon: <Zap size={20} />,
        },
        {
          text: "Intégration d'outils cloud (Google Workspace, Notion, Slack...)",
          icon: <Layers size={20} />,
        },
        {
          text: "Systèmes de reporting & dashboards interactifs",
          icon: <BarChart2 size={20} />,
        },
        {
          text: "Outils de gestion de projet & collaboration",
          icon: <Users size={20} />,
        },
      ],
      color: "bg-[#2f365b]",
      accent: "text-[#ea532b]",
      image: "./outilcollaboratifs.avif",
    },
    {
      id: "maintenance",
      title: "Hébergement, maintenance & support",
      icon: <Server size={24} />,
      description:
        "Vous assurer une solution fiable, sécurisée et toujours à jour.",
      features: [
        {
          text: "Hébergement web & nom de domaine",
          icon: <Server size={20} />,
        },
        {
          text: "Maintenance corrective et évolutive",
          icon: <RefreshCw size={20} />,
        },
        { text: "Sauvegardes régulières", icon: <Database size={20} /> },
        { text: "Monitoring de performance", icon: <BarChart2 size={20} /> },
        {
          text: "Support technique & accompagnement utilisateur",
          icon: <MessageCircle size={20} />,
        },
      ],
      color: "bg-[#ea532b]",
      accent: "text-[#2f365b]",
      image: "./maintenanceHébergement.avif",
    },
  ];

  // Approche méthodologique
  const methodologySteps = [
    {
      id: 1,
      title: "Audit & Conseils",
      description:
        "Nous analysons vos besoins pour construire la meilleure solution.",
      icon: <Search size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
    {
      id: 2,
      title: "Proposition",
      description: "Recommandations personnalisées et plan d'action détaillé.",
      icon: <Clipboard size={24} />,
      color: "bg-[#ea532b]/10",
      textColor: "text-[#ea532b]",
    },
    {
      id: 3,
      title: "Développement",
      description: "Livraison progressive avec validation à chaque étape.",
      icon: <Code size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
    {
      id: 4,
      title: "Déploiement",
      description: "Mise en production et formation des utilisateurs.",
      icon: <Zap size={24} />,
      color: "bg-[#ea532b]/10",
      textColor: "text-[#ea532b]",
    },
    {
      id: 5,
      title: "Maintenance",
      description: "Nos solutions sont conçues pour grandir avec vous.",
      icon: <RefreshCw size={24} />,
      color: "bg-[#2f365b]/10",
      textColor: "text-[#2f365b]",
    },
  ];

  // Avantages
  const advantages = [
    {
      icon: <CheckCircle size={24} />,
      title: "Solutions sur mesure",
      description:
        "Adaptées à votre entreprise, vos processus et votre culture",
      color: "text-[#ea532b]",
    },
    {
      icon: <Clock size={24} />,
      title: "Gain de temps",
      description: "Automation des processus RH routiniers et répétitifs",
      color: "text-[#2f365b]",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Amélioration continue",
      description: "Évolution de nos solutions selon vos besoins",
      color: "text-[#ea532b]",
    },
    {
      icon: <Shield size={24} />,
      title: "Sécurité des données",
      description: "Protection et confidentialité des informations sensibles",
      color: "text-[#2f365b]",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Combien coûte un projet digital avec YIEL ?",
      answer:
        "Chaque projet est unique et nécessite une approche personnalisée. Le coût dépend de nombreux facteurs comme la complexité, les fonctionnalités requises et les délais. Nous établissons un devis détaillé après une première consultation pour comprendre précisément vos besoins.",
    },
    {
      id: 2,
      question: "Quels sont les délais de réalisation ?",
      answer:
        "Les délais varient selon la nature et l'ampleur du projet. Un site vitrine simple peut être réalisé en 3 à 4 semaines, tandis qu'une application métier complexe peut nécessiter plusieurs mois. Nous définissons ensemble un calendrier réaliste avec des étapes claires.",
    },
    {
      id: 3,
      question: "Proposez-vous des formations pour utiliser les outils ?",
      answer:
        "Absolument ! Nous intégrons systématiquement des sessions de formation à nos prestations pour assurer une prise en main optimale de vos nouveaux outils. Des supports documentaires sont également fournis et un accompagnement post-lancement est disponible.",
    },
    {
      id: 4,
      question: "Comment se déroule la maintenance des solutions ?",
      answer:
        "Nous proposons différentes formules de maintenance technique et évolutive. Nos contrats incluent les mises à jour de sécurité, l'assistance technique, les sauvegardes régulières et la possibilité d'implémenter de nouvelles fonctionnalités selon vos besoins.",
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
            <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  YIEL SOLUTIONS DIGITALES
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Accélérez votre{" "}
                  <span className="text-[#ea532b]">
                    transformation numérique
                  </span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Nous vous accompagnons dans la conception, le développement et
                  l'optimisation de vos outils digitaux pour renforcer votre
                  image, améliorer votre performance et automatiser vos
                  processus.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => navigate("/demo")}
                    className="px-6 cursor-pointer py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center"
                  >
                    Demander une démo
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                  <a
                    href="#cta"
                    className="px-6 cursor-pointer py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2f365b] to-[#ea532b] rounded-lg transform rotate-6 opacity-20"></div>
                  <div className="relative bg-white p-2 rounded-lg shadow-2xl">
                    <img
                      src="./solution-Hero-image.avif"
                      alt="Solutions digitales"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                  <Code size={24} />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
                  <Zap size={24} />
                </div>
              </div>
            </div>
          </div>
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

        {/* Services Overview Section */}
        <section id="services-overview" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                NOS SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Des solutions digitales{" "}
                <span className="text-[#ea532b]">adaptées à vos besoins</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explorez notre gamme complète de services digitaux conçus pour
                optimiser vos processus RH et propulser votre entreprise vers
                l'avant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {digitalServices.map((service, index) => (
                <div
                  key={service.id}
                  id={`feature-service-${index}`}
                  className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                    isVisible[`feature-service-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center text-white mb-6`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {/* <div className="flex items-center text-[#ea532b] font-medium">
                    <span>En savoir plus</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section id="services-details" className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="flex overflow-x-auto pb-4 space-x-2 md:space-x-4 hide-scrollbar">
                {digitalServices.map((service) => (
                  <button
                    key={service.id}
                    className={`px-4 py-2 md:px-6 md:py-3 rounded-full whitespace-nowrap font-medium transition-all duration-300 ${
                      activeTab === service.id
                        ? "bg-[#2f365b] text-white"
                        : "bg-white text-[#2f365b] hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab(service.id)}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{service.icon}</span>
                      <span className="hidden md:inline">{service.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {digitalServices.map((service) => (
              <div
                key={service.id}
                className={`${activeTab === service.id ? "block" : "hidden"}`}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-12">
                      <span
                        className={`inline-block px-4 py-1 rounded-full ${service.color}/10 ${service.accent} font-medium text-sm mb-6`}
                      >
                        {service.title.toUpperCase()}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#2f365b] mb-6">
                        {service.description}
                      </h3>

                      <div className="space-y-4 mb-8">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div
                              className={`w-10 h-10 rounded-full ${service.color}/10 flex items-center justify-center ${service.accent} flex-shrink-0 mr-4`}
                            >
                              {feature.icon}
                            </div>
                            <div>
                              <p className="text-gray-700">{feature.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#cta"
                        className={`px-6 py-3 ${service.color} text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
                      >
                        Demander un devis
                        <ArrowRight size={18} className="ml-2" />
                      </a>
                    </div>
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 ${service.color}/60 flex items-center justify-center p-8`}
                      >
                        <div className="max-w-xs text-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-4">
                            {service.icon}
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">
                            {service.title}
                          </h4>
                          <p className="text-white/90">
                            Design responsive, sécurisé et optimisé pour la
                            performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                NOTRE APPROCHE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Une méthodologie{" "}
                <span className="text-[#ea532b]">éprouvée</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous suivons un processus rigoureux et itératif pour assurer la
                réussite de votre projet digital du début à la fin.
              </p>
            </div>

            <div className="relative">
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute top-24 left-0 right-0 w-full h-0.5 bg-gray-200"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {methodologySteps.map((step) => (
                  <div
                    key={step.id}
                    id={`feature-method-${step.id}`}
                    className={`relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 z-10 ${
                      isVisible[`feature-method-${step.id}`]
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                  AVANTAGES
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                  Pourquoi choisir nos{" "}
                  <span className="text-[#ea532b]">solutions digitales</span> ?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nos solutions digitales sont conçues pour vous offrir un
                  avantage compétitif tout en simplifiant vos processus
                  internes.
                </p>

                <div className="space-y-6">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${advantage.color} flex-shrink-0 mr-4`}
                      >
                        {advantage.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#2f365b] mb-1">
                          {advantage.title}
                        </h4>
                        <p className="text-gray-600">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt="Avantages solutions digitales"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2f365b]/60 to-transparent flex items-center px-8">
                  <p className="text-white text-xl font-semibold max-w-xs">
                    "Des solutions innovantes pour transformer vos défis en
                    opportunités digitales"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section id="cta" className="py-20 bg-[#2f365b]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#2f365b] to-[#3a4272] rounded-xl p-5 shadow-xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Prêt à transformer votre{" "}
                    <span className="text-[#ea532b]">présence digitale</span> ?
                  </h2>
                  <p className="text-lg text-gray-200 mb-8">
                    Contactez-nous dès aujourd'hui pour discuter de votre projet
                    et découvrir comment nos solutions peuvent vous aider à
                    atteindre vos objectifs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-[#ea532b]/20 p-3 rounded-lg mr-4">
                        <Calendar size={24} className="text-[#ea532b]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          Consultation gratuite
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Prenez rendez-vous pour un premier échange
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#ea532b]/20 p-3 rounded-lg mr-4">
                        <MessageCircle size={24} className="text-[#ea532b]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          Support dédié
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Une équipe à votre écoute
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#2f365b] mb-6">
                    Demandez votre devis personnalisé
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600 text-sm mb-1">
                          Nom <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Nom"
                          required
                          className="w-full placeholder-gray-400 px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm mb-1">
                          Prénom <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Prénom"
                          required
                          className="w-full placeholder-gray-400 px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm mb-1">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full placeholder-gray-400 px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm mb-1">
                        Téléphone <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Téléphone"
                        required
                        className="w-full px-4 placeholder-gray-400 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm mb-1">
                        Service qui vous intéresse{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <select
                        required
                        className="w-full placeholder-gray-400 px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                      >
                        <option value="">Choisissez un service</option>
                        <option value="sites">
                          Création de sites internet
                        </option>
                        <option value="applications">
                          Développement d'applications
                        </option>
                        <option value="design">
                          Identité visuelle & design
                        </option>
                        <option value="marketing">Marketing digital</option>
                        <option value="automatisation">Automatisation</option>
                        <option value="maintenance">
                          Hébergement & maintenance
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm mb-1">
                        Décrivez votre projet{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        placeholder="Décrivez brièvement votre projet"
                        rows={4}
                        required
                        className="w-full placeholder-gray-400 px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center"
                    >
                      Envoyer ma demande
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} />

        {/* Testimonials Section */}
       {/* <section id="testimonials" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                TÉMOIGNAGES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Ils nous font{" "}
                <span className="text-[#ea532b]">confiance</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez les retours d'expérience de nos clients et comment nos solutions 
                digitales les ont aidés à transformer leur entreprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-100"
                >
                  <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    "L'équipe de YIEL a complètement transformé notre présence digitale. 
                    Leur expertise nous a permis de mettre en place des solutions sur mesure 
                    qui répondent parfaitement à nos besoins."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {item === 1 ? "AC" : item === 2 ? "ML" : "PT"}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2f365b]">
                        {item === 1 ? "Alexandre Camara" : item === 2 ? "Marie Lefort" : "Paul Thibault"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item === 1 ? "Directeur, Agence Marketing" : item === 2 ? "DRH, Groupe industriel" : "CEO, Startup Tech"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}

export default SolutionsDigitales;
