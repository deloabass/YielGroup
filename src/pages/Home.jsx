import React, { useState, useEffect, useRef } from 'react';
import {
  Users,
  Calendar,
  PieChart,
  FileText,
  Award,
  Shield,
  CheckCircle,
  Star,
  ChevronRight,
  ArrowRight,
  Play,
  MessageCircle,
  Settings,
  Database,
  TrendingUp,
  Clock,
  Download,
  Zap,
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FAQ from '../components/FAQ';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Seo from '../components/Seo';

const Home = () => {
  const topRef = useRef(null);
  useScrollToTop(topRef);
  const navigate = useNavigate();
  // États pour les animations au défilement
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    steps: false,
    statistics: false,
    testimonials: false,
    clients: false,
    about: false,
  });

  // État pour la navigation entre témoignages
  // const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Références pour les animations au défilement
  const observerRefs = {
    hero: useRef(null),
    features: useRef(null),
    steps: useRef(null),
    statistics: useRef(null),
    testimonials: useRef(null),
    clients: useRef(null),
    about: useRef(null),
  };

  // Configuration de l'intersection observer pour les animations
  useEffect(() => {
    const observers = {};

    Object.keys(observerRefs).forEach((key) => {
      if (observerRefs[key].current) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 },
        );

        observers[key].observe(observerRefs[key].current);
      }
    });

    // Nettoyage des observers
    return () => {
      Object.values(observers).forEach((observer) => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rotation automatique des témoignages
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 8000);
  //   return () => clearInterval(interval);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // Rotation automatique des étapes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % deploymentSteps.length);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      { threshold: 0.15 },
    );

    // Observer toutes les sections
    document.querySelectorAll('section[id]').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Données des fonctionnalités principales
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#ea532b]" />,
      title: 'Gestion des talents',
      description:
        'Identifiez, développez et fidélisez vos meilleurs éléments avec des outils de suivi de performance et de développement de carrière adaptés.',
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#ea532b]" />,
      title: 'Planification des congés',
      description:
        'Automatisez la gestion des absences et congés avec un système intuitif de validation et de planification adapté à vos politiques internes.',
    },
    {
      icon: <PieChart className="w-8 h-8 text-[#ea532b]" />,
      title: 'Analyse RH',
      description:
        'Prenez des décisions éclairées grâce à des tableaux de bord analytiques personnalisables et des rapports détaillés sur tous vos indicateurs RH.',
    },
    {
      icon: <FileText className="w-8 h-8 text-[#ea532b]" />,
      title: 'Dossiers numériques',
      description:
        'Centralisez tous les documents RH de vos collaborateurs dans un espace numérique sécurisé et conforme aux réglementations locales.',
    },
    {
      icon: <Award className="w-8 h-8 text-[#ea532b]" />,
      title: 'Formation continue',
      description:
        'Développez les compétences de vos collaborateurs avec une plateforme de formation intégrée et personnalisable selon vos besoins.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ea532b]" />,
      title: 'Recrutement optimisé',
      description:
        'Attirez les meilleurs talents avec un processus de recrutement fluide et un suivi des candidatures en temps réel.',
    },
  ];

  // Données des avantages clés
  const keyBenefits = [
    {
      icon: <Settings className="w-6 h-6 text-[#ea532b]" />,
      title: 'Logiciel 100% personnalisable',
      description:
        "Solution modulable qui s'adapte parfaitement à la taille et aux besoins spécifiques de votre entreprise.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#ea532b]" />,
      title: 'Conformité légale',
      description:
        'Respect des réglementations locales et sécurité maximale pour vos données sensibles.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#ea532b]" />,
      title: 'Expertise RH adaptée',
      description:
        'Une approche technologique parfaitement alignée avec les défis RH spécifiques au marché africain.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#ea532b]" />,
      title: 'Support personnalisé',
      description:
        'Service client réactif et accompagnement sur mesure tout au long de votre parcours.',
    },
  ];

  // Étapes de déploiement
  const deploymentSteps = [
    {
      number: '01',
      title: 'Audit RH',
      description:
        'Analyse complète de vos processus RH actuels et identification des besoins spécifiques.',
    },
    {
      number: '02',
      title: 'Conception',
      description:
        'Conception de la solution RH en fonction des besoins identifiés et des contraintes techniques.',
    },
    {
      number: '03',
      title: 'Paramétrage',
      description:
        'Configuration personnalisée de la plateforme selon les spécifications définies.',
    },
    {
      number: '04',
      title: 'Tests',
      description:
        'Phase de tests rigoureux pour garantir le bon fonctionnement de toutes les fonctionnalités.',
    },
    {
      number: '05',
      title: 'Mise en production',
      description:
        'Déploiement progressif de la solution avec formation des utilisateurs clés.',
    },
    {
      number: '06',
      title: 'Suivi post-déploiement',
      description:
        "Accompagnement continu et ajustements selon les retours d'utilisation.",
    },
  ];

  const statistics = [
    {
      icon: <Users className="h-10 w-10 mb-4 mx-auto text-orange-400" />,
      title: 'Satisfaction client',
      description: 'Expérience utilisateur intuitive et support réactif',
    },
    {
      icon: <TrendingUp className="h-10 w-10 mb-4 mx-auto text-orange-400" />,
      title: 'Performance RH',
      description: 'Automatisation des tâches administratives quotidiennes',
    },
    {
      icon: <Shield className="h-10 w-10 mb-4 mx-auto text-orange-400" />,
      title: 'Fiabilité',
      description: 'Minimisation des erreurs dans les processus RH',
    },
    {
      icon: <Clock className="h-10 w-10 mb-4 mx-auto text-orange-400" />,
      title: 'Déploiement rapide',
      description: 'Mise en place efficace adaptée à vos besoins',
    },
  ];

  // Données des témoignages
  // const testimonials = [
  //   {
  //     name: "Emmanuelle Diop",
  //     position: "Expert RH | Secteur Banque",
  //     rating: 5,
  //     date: "21/03/2025",
  //     quote:
  //       "Depuis que nous utilisons YIEL, la gestion de nos talents est plus fluide et efficace. Un véritable gain de temps pour notre équipe RH !",
  //   },
  //   {
  //     name: "Stéphanie Kouamé",
  //     position: "SIRH | Secteur Télécommunications",
  //     rating: 5,
  //     date: "18/03/2025",
  //     quote:
  //       "Votre solution RH est vraiment une bonne chose pour nous les RH et nous permet d'être rapides sur notre travail tout en gérant efficacement le flux de demandes quotidiennes.",
  //   },
  //   {
  //     name: "Thomas Mensah",
  //     position: "DRH | Secteur Assurance",
  //     rating: 5,
  //     date: "15/03/2025",
  //     quote:
  //       "La transition vers YIEL a été remarquablement simple. L'équipe de support est réactive et les fonctionnalités correspondent parfaitement aux défis RH que nous rencontrons au quotidien.",
  //   },
  // ];

  // Logos des clients (placeholder)
  const clients = [
    { name: 'Client 1', logo: './logoCulture.png' },
    { name: 'Client 2', logo: './logobaobab.png' },
    { name: 'Client 3', logo: './Logoessai.webp' },
    { name: 'Client 4', logo: './logoTransporter.png' },
  ];
  const faqs = [
    {
      id: 1,
      question: 'Qu’est-ce qu’un logiciel RH ?',
      answer:
        "Un logiciel RH est une application qui permet de gérer les ressources humaines d'une entreprise en automatisant des tâches administratives comme la paie, la gestion des congés et le recrutement.",
    },
    {
      id: 2,
      question: 'Quelles sont les principales fonctionnalités ?',
      answer:
        'Les principales fonctionnalités incluent la gestion des congés, la paie, le suivi des performances, la formation des employés et le recrutement.',
    },
    {
      id: 3,
      question:
        'Comment se passe la mise en place du logiciel au sein de l’entreprise ?',
      answer:
        'La mise en place comprend généralement une phase d’analyse, d’installation, de formation des utilisateurs et d’assistance technique pour une bonne adaptation.',
    },
    {
      id: 4,
      question:
        'Comment savoir que ce logiciel est adapté pour mon entreprise ?',
      answer:
        'Pour savoir si un logiciel est adapté, il faut évaluer vos besoins, le nombre d’employés, les fonctionnalités essentielles et les intégrations possibles avec vos outils existants.',
    },
    {
      id: 5,
      question: 'Combien coûte ce logiciel ?',
      answer:
        'Le coût dépend du fournisseur, du nombre d’utilisateurs et des fonctionnalités incluses. Il peut s’agir d’un abonnement mensuel ou d’un achat unique.',
    },
    {
      id: 6,
      question:
        "Ce logiciel s'intègre-t-il aux outils utilisés dans mon entreprise ?",
      answer:
        'La plupart des logiciels RH modernes proposent des intégrations avec des outils courants comme les ERP, CRM et logiciels de comptabilité.',
    },
  ];
  const words = ['Rapide', 'Simple', 'Efficace'];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  });

  return (
    <>
    <Seo
  title="YielGroup - Solution SIRH pour l’Afrique"
  description="YielGroup propose une solution SIRH complète pour les entreprises africaines. Gérez vos talents, vos équipes et vos processus RH facilement."
  canonical="https://yielgroup.com/"
  image="https://yielgroup.com/default-image.jpg"
  schemaMarkup={{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'YielGroup',
    url: 'https://yielgroup.com/',
    keywords:
      'yielgroup, yiel, group, sirh, sirh afrique, solution afrique sirh, RH, gestion des talents, gestion des ressources humaines, logiciel RH, gestion des employés Afrique, suivi des performances RH, paie et administration du personnel, recrutement et intégration employés, logiciel de gestion RH pour entreprises africaines, transformation digitale RH, solution RH innovante, automatisation RH Afrique, RH Niger, RH Afrique francophone, entreprises africaines SIRH, gestion des ressources humaines Afrique',
  }}
/>


      <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
        {/* --- HEADER --- */}
        <Header />

        {/* --- MAIN CONTENT --- */}
        <main className="flex-grow">
          {/* Section Hero */}
          <section
            ref={observerRefs.hero}
            className={`relative bg-gradient-to-br from-[#2f365b] to-[#232946] overflow-hidden transition-opacity duration-1000 ease-out ${
              isVisible.hero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
            </div>
            {/* Éléments de fond */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-[#ea532b] blur-2xl sm:blur-3xl"></div>
              <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-20 w-32 sm:w-60 h-32 sm:h-60 rounded-full bg-blue-400 blur-2xl sm:blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-28 flex flex-col md:flex-row items-center">
              {/* image en arriere plant */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
              </div>

              {/* Contenu principal */}
              <div className="w-full md:w-1/2 z-10 px-2 py-5 sm:px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
                  <span className="block">Transformez votre </span>
                  <span className="relative flex h-12 sm:h-16 lg:h-20">
                    Gestion RH de façon
                    <span className="relative ml-2 text-[#ea532b] transition-opacity duration-700 ease-in-out opacity-100">
                      {words.map((word, i) => (
                        <span
                          key={i}
                          className={`absolute transition-all duration-1000 ease-in-out transform 
                          ${
                            i === index
                              ? 'opacity-100 translate-y-0 scale-100'
                              : 'opacity-0 translate-y-10 scale-90'
                          }
                          text-[#ea532b]`}
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-lg">
                  YIEL, une solution SIRH complète et innovante conçue pour les
                  entreprises en Afrique qui vous accompagne dans la gestion de
                  vos talents et vos équipes et fait grandir votre entreprise.
                </p>

                <div className="flex flex-col sm:flex-row text-nowrap gap-3 sm:gap-4">
                  <button
                    onClick={() => navigate('/demo')}
                    className="px-4 cursor-pointer text-nowrap sm:px-6 py-2.5 sm:py-3 bg-[#ea532b] hover:bg-[#d64a27] text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center sm:justify-start"
                  >
                    Demander une démo
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <a
                    href="#features"
                    className="px-4  sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-gray-100 text-[#2f365b] font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center sm:text-left"
                  >
                    Découvrir les fonctionnalités
                  </a>
                </div>

                {/* Indicateurs de confiance */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#ea532b]" />
                    <span>Conforme RGPD</span>
                  </div>
                  <span className="hidden sm:inline mx-1">•</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ea532b]" />
                    <span>Support 24/7</span>
                  </div>
                  <span className="hidden sm:inline mx-1">•</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#ea532b]" />
                    <span>Expertise africaine</span>
                  </div>
                </div>
              </div>

              {/* Espace réservé pour l'image (actuellement commentée dans le code original) */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Séparateur en vague */}
            {/* <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                fill="#F9FAFB"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div> */}
            <div
              ref={observerRefs.clients}
              className={`py-12 transition-all duration-1000 ease-out ${
                isVisible.hero ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="container mx-auto px-4">
                <h2 className="text-center text-lg font-medium text-[#ea532b] mb-3">
                  Rejoignez une communauté grandissante d'entreprises
                </h2>
                <p className="text-center text-white mb-8 p-1 rounded-full bg-[#A4A8B8]">
                  Ils nous ont fait confiance, nous vous invitons à faire de
                  même...
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-12"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Logos des clients */}
          {/* <section
          ref={observerRefs.clients}
          className={`py-12 bg-[#2f365b] transition-all duration-1000 ease-out ${
            isVisible.clients
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-center text-lg font-medium text-[#ea532b] mb-3">
              Rejoignez une communauté grandissante d'entreprises
            </h2>
            <p className="text-center text-white mb-8 p-1 rounded-full bg-[#A4A8B8]">
              Ils nous ont fait confiance, nous vous invitons à faire de même...
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <img src={client.logo} alt={client.name} className="h-12" />
                </div>
              ))}
            </div>
          </div>
        </section> */}

          {/* Pourquoi YIEL */}
          <section
            id="features"
            ref={observerRefs.features}
            className={`py-16 md:py-24 bg-gray-50 transition-all duration-1000 ease-out ${
              isVisible.features
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-4">
                  Pourquoi My YIEL?
                </h2>
                <p className="text-gray-600">
                  Une solution RH idéale conçue pour simplifier, optimiser et
                  transformer votre gestion des talents
                </p>
              </div>

              {/* Avantages clés */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {keyBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-t-2 border-[#ea532b]"
                  >
                    <div className="bg-[#2f365b]/5 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#2f365b] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Fonctionnalités */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#ea532b]"
                  >
                    <div className="bg-[#2f365b]/5 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#2f365b] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* <div className="mt-16 text-center">
              <a
                href="#demo"
                className="inline-flex items-center px-6 py-3 bg-[#2f365b] hover:bg-[#252a49] text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                N'hésitez plus
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </div> */}
            </div>
          </section>

          {/* Comment ça fonctionne */}
          <section
            id="process"
            ref={observerRefs.steps}
            className={`py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 transition-all duration-1000 ease-out ${
              isVisible.steps
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-4">
                  Découvrez comment fonctionne le logiciel
                </h2>
                <p className="text-gray-600">
                  Notre processus d'implémentation en 6 étapes garantit une
                  transition en douceur et une adaptation parfaite à vos besoins
                </p>
              </div>

              <div className="relative">
                {/* Timeline desktop */}
                <div className="hidden md:block relative mb-16">
                  <div className="absolute h-1 bg-gray-300 top-20 left-0 right-0 z-0"></div>
                  <div className="flex justify-between relative z-10">
                    {deploymentSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`w-1/6 px-2 transition-all duration-500 ${
                          index === activeStep
                            ? 'transform scale-110'
                            : 'opacity-70'
                        }`}
                      >
                        <div
                          className={`h-8 w-8  rounded-full  ${
                            index === activeStep
                              ? 'bg-[#ea532b]'
                              : 'bg-gray-400'
                          } text-white flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-md`}
                        >
                          {index + 1}
                        </div>
                        <div
                          className={`text-center ${
                            index === activeStep
                              ? 'font-semibold text-[#ea532b]'
                              : 'text-gray-600'
                          }`}
                        >
                          {step.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative max-w-6xl mx-auto">
                  <div className="absolute -top-4 -left-4 bg-[#ea532b] text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl shadow-lg">
                    {deploymentSteps[activeStep].number}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2f365b] mb-4">
                    {deploymentSteps[activeStep].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {deploymentSteps[activeStep].description}
                  </p>

                  {/* Progress indicator mobile */}
                  <div className="flex md:hidden justify-center mt-8 space-x-2">
                    {deploymentSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeStep
                            ? 'bg-[#ea532b] w-6'
                            : 'bg-gray-300'
                        }`}
                        aria-label={`Voir étape ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-center mt-8 space-x-4">
                  <button
                    onClick={() =>
                      setActiveStep(
                        (prev) =>
                          (prev - 1 + deploymentSteps.length) %
                          deploymentSteps.length,
                      )
                    }
                    className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-700 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setActiveStep(
                        (prev) => (prev + 1) % deploymentSteps.length,
                      )
                    }
                    className="p-2 rounded-full bg-[#ea532b] shadow-md hover:bg-[#d64a27] text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section À propos */}
          <section
            id="about"
            ref={observerRefs.about}
            className={`py-16 md:py-24 bg-white transition-all duration-1000 ease-out ${
              isVisible.about
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#2f365b]/5 rounded-xl transform rotate-3"></div>
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img
                      src="./equipeYIEL.png"
                      alt="Équipe YIEL"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2f365b]/40 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <p className="font-medium">Notre mission</p>
                        <h3 className="text-xl font-bold">
                          Transformer la gestion RH en Afrique
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                    L'histoire d'une vision : YIEL
                  </h2>
                  <p className="text-lg text-gray-700 font-medium mb-4">
                    Plus qu'un logiciel, une révolution pour les entreprises
                    africaines.
                  </p>
                  <p className="text-gray-600 mb-4">
                    YIEL est né d'une ambition: transformer la gestion des
                    ressources humaines en Afrique en proposant une solution
                    digitale intuitive, accessible et adaptée aux réalités du
                    terrain.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Son nom, inspiré d'Yves-Gabriel, le fils de la fondatrice,
                    porte en lui une symbolique forte : l'avenir, la
                    transmission et la volonté d'apporter des outils innovants
                    au service des entreprises et de leurs talents.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Pensé comme un véritable levier de transformation, YIEL
                    accompagne les organisations dans l'optimisation de leurs
                    processus RH, la gestion des talents et la simplification
                    des tâches administratives.
                  </p>

                  <button
                    onClick={() => navigate('/notre-Histoire')}
                    className="inline-flex cursor-pointer border py-3 px-7 rounded-full items-center text-[#ea532b] font-medium hover:text-[#d64a27] transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 md:py-24 bg-[#2f365b] text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Les avantages de notre SIRH
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {stat.icon}
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-white/80">{stat.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
                  Notre SIRH a été conçu pour répondre aux défis des entreprises
                  modernes en offrant une solution complète, flexible et
                  évolutive.
                </p>
                <button
                  onClick={() => navigate('/solutions-digitales-RH')}
                  className="inline-block cursor-pointer px-7 py-3 bg-[#ea532b] hover:bg-[#d64a27] rounded-full text-white font-medium transition-colors duration-300"
                >
                  Découvrir nos solution
                </button>
              </div>
            </div>
          </section>

          {/* Témoignages */}
          {/* <section
          id="testimonials"
          ref={observerRefs.testimonials}
          className={`py-16 md:py-24 bg-gray-50 transition-all duration-1000 ease-out ${
            isVisible.testimonials
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-4">
                Ils nous font confiance
              </h2>
              <p className="text-gray-600">
                Découvrez comment YIEL transforme la gestion RH de nos clients à
                travers l'Afrique
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === activeTestimonial
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <div className="bg-gray-200 w-12 h-12 rounded-full overflow-hidden">
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#2f365b]">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="flex items-center justify-end mb-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>

                    <blockquote className="text-lg md:text-xl text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                ))}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? "bg-[#ea532b] w-6"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Voir témoignage ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

          {/* CTA */}
          <section id="demo" className="py-16 md:py-24 bg-[#2f365b] text-white">
            <div className="container mx-auto px-4">
              <FAQ faqs={faqs} />

              {/* <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre gestion RH ?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Demandez une démonstration personnalisée et découvrez comment YIEL peut répondre à vos besoins spécifiques.
            </p>
            
            <div className="bg-white rounded-xl shadow-xl p-8 text-left">
              <h3 className="text-2xl font-bold text-[#2f365b] mb-6">Demandez votre démo</h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Votre nom" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent text-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email professionnel</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="votre@email.com" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent text-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Entreprise</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Nom de votre entreprise" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent text-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+225 XX XX XX XX" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent text-gray-800"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (optionnel)</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="Décrivez brièvement vos besoins..." 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent text-gray-800"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 text-center">
                  <button 
                    type="submit" 
                    className="bg-[#ea532b] hover:bg-[#d64a27] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Demander ma démo gratuite
                  </button>
                  <p className="text-xs text-gray-500 mt-4">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </div>
              </form>
            </div>
          </div> */}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
