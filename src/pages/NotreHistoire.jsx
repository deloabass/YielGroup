import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  User,
  Target,
  Award,
  Gift,
  Users,
  Quote,
  Calendar,
  ChevronRight,
  ArrowRight,
  Heart,
  Mail,
  BookOpen,
  Phone,
  UserPlus,
  Twitter,
  Dribbble,
  Github,
  Linkedin,
  Lightbulb,
  Briefcase,
  Code,
} from "lucide-react";

const NotreHistoire = () => {
  const [isVisible, setIsVisible] = useState({});

  // Fonction pour vérifier si un élément est visible dans la fenêtre
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
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Données de l'historique de l'entreprise
  const timeline = [
    {
      year: "2022",
      title: "Idée Fondatrice",
      description:
        "Stéphanie imagine YIEL, avec l’ambition de créer une solution RH sur mesure, adaptée aux réalités africaines.",
      icon: <Calendar size={24} />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      year: "2023",
      title: "Développement et structuration",
      description:
        "Les premiers modules sont développés. Une première équipe se forme pour bâtir un SIRH aligné avec les besoins du terrain.",
      icon: <Gift size={24} />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      year: "2024",
      title: "Naissance officielle de YIEL",
      description:
        "Le projet prend forme et YIEL est officiellement lancé. La vision est claire : offrir aux entreprises africaines une solution complète et intuitive pour la gestion RH.",
      icon: <Users size={24} />,
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      year: "2024",
      title: "Finalisation du produit",
      description:
        "Amélioration continue des fonctionnalités et tests avancés pour garantir une expérience utilisateur optimale.",
      icon: <Award size={24} />,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      year: "2025",
      title: "Lancement commercial",
      description:
        "YIEL est prêt à être déployé. La prospection s’intensifie, les démonstrations se multiplient, et les premiers retours d’intérêt des entreprises confirment la pertinence de notre approche.",
      icon: <Target size={24} />,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      year: "2025",
      title: "En route vers nos premiers partenaires",
      description:
        "Nous sommes en phase d’amorçage : nos premiers déploiements sont en préparation. L’objectif est clair : accompagner durablement les entreprises africaines dans leur transition digitale RH",
      icon: <Target size={24} />,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];

  // Données des valeurs
  const values = [
    {
      letter: "Y",
      title: "YOUTHFULNESS",
      description:
        "L'esprit de jeunesse et d'innovation guide chacune de nos actions et de nos solutions.",
      color: "bg-yellow-500",
      icon: <Target size={32} />,
    },
    {
      letter: "I",
      title: "INTEGRITY",
      description:
        "La transparence et l'éthique sont les piliers fondamentaux de notre entreprise.",
      color: "bg-indigo-500",
      icon: <BookOpen size={32} />,
    },
    {
      letter: "E",
      title: "EMPATHY",
      description:
        "Nous plaçons la compréhension des besoins humains au cœur de notre approche.",
      color: "bg-emerald-500",
      icon: <Heart size={32} />,
    },
    {
      letter: "L",
      title: "LEADERSHIP",
      description:
        "Nous aspirons à guider la transformation RH avec vision et courage.",
      color: "bg-[#ea532b]",
      icon: <Award size={32} />,
    },
  ];

  // Témoignages
  // const testimonials = [
  //   {
  //     name: "Mariam Diallo",
  //     position: "DRH, Tech Solutions Africa",
  //     text: "YIEL a transformé notre manière de gérer les talents. L'interface intuitive et les fonctionnalités adaptées à nos besoins ont considérablement amélioré notre efficacité.",
  //     image: "/api/placeholder/100/100",
  //   },
  //   {
  //     name: "Jean-Pierre Kouassi",
  //     position: "CEO, InnoGroup",
  //     text: "La vision de YIEL représente exactement ce dont les entreprises africaines ont besoin aujourd'hui. Une solution qui comprend nos défis spécifiques.",
  //     image: "/api/placeholder/100/100",
  //   },
  //   {
  //     name: "Fatima Mbeki",
  //     position: "Responsable Formation, EduTech",
  //     text: "L'équipe de YIEL fait toute la différence. Leur accompagnement personnalisé nous a permis d'adopter rapidement leur solution SIRH.",
  //     image: "/api/placeholder/100/100",
  //   },
  // ];

  // Données de l'équipe
  const team = [
    {
      name: "Stéphanie NKOMANE",
      role: "CEO & Fondatrice",
      description: `Diplomé d'un Master en Systémes d'informations et Ressources Humaines
                    (SIRH), elle est animé par une ambition claire: révolutionner la gestion
                    des talents en allant technologie,simplicité et performance. Forte de son
                    expertise en RH et de sa vision stratégique,elle a fondé YIEL pour
                    accompagner les entreprises, en particulier en Afrique, dans l'optimisation
                    processus tout en mettant l'humain au coeur des décisions
                    Convaincue que les talents sont le moteur de la performance, elle s'entoure
                    d'experts et de partenaires partageant cette meme vision. À travers YIEL,
                    elle ouvre à rendre la gestion RH plus intuitive, éfficace et accessible,
                    afin d'aider les entreprises à grandir tout en valorisant leurs capitales Humaines`,
      image: "./Stephanie.jpeg",
      social: {
        linkedin: "#",
        email: "stephanie@yiel.com",
      },
    },
    {
      name: "Chamir NM",
      role: "Développeur Back-end",
      description:
        "Expert en architecture logicielle qui construit le cœur technique de nos solutions SIRH.",
      image: "/ChamirNM.png",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Bella DIOP",
      role: "Designer UX/UI",
      description:
        "Créatrice d'expériences utilisateurs intuitives et esthétiques pour nos plateformes.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "Nadège SAMIROU",
      role: "Chargée de communication",
      description:
        "Spécialiste qui porte la voix de YIEL auprès de nos clients et partenaires.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "André DUPONT",
      role: "Responsable Ressources Humaines",
      description:
        "Expert RH qui comprend parfaitement les enjeux de nos clients.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "#",
        email: "andre@yiel.com",
      },
    },
    {
      name: "Davidson HOKE",
      role: "Expert comptable",
      description:
        "Spécialiste qui assure la rigueur financière et la croissance durable de YIEL.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "#",
        email: "davidson@yiel.com",
      },
    },
  ];

  // Statistiques
  const stats = [
    { value: "200+", label: "Clients", icon: <Users size={24} /> },
    { value: "5", label: "Pays africains", icon: <Target size={24} /> },
    { value: "25+", label: "Experts RH", icon: <User size={24} /> },
    { value: "98%", label: "Taux de satisfaction", icon: <Heart size={24} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative pt-28 pb-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Notre <span className="text-[#ea532b]">Histoire</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
                Découvrez comment YIEL est né pour révolutionner la gestion RH
                en Afrique et accompagner les entreprises vers l'excellence.
              </p>
            </div>
          </div>
          <div className="hidden lg:block absolute -bottom-1 right-0">
            <svg
              width="330"
              height="230"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0C17.9086 0 0 17.9086 0 40V160C0 182.091 17.9086 200 40 200H160C182.091 200 200 182.091 200 160V40C200 17.9086 182.091 0 160 0H40Z"
                fill="#ea532b"
                fillOpacity="0.1"
              />
            </svg>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="sticky top-0 z-30 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-3 px-4 md:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <nav className="text-sm mb-4 sm:mb-0">
                <ol className="list-none p-0 flex flex-wrap items-center">
                  <li className="flex items-center">
                    <a href="/" className="text-[#2f365b] hover:text-[#ea532b]">
                      Accueil
                    </a>
                    <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                  </li>
                  <li className="text-[#ea532b] font-medium">Notre Histoire</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* Notre Vision - Design Fluide */}
        <section
          id="notre-vision"
          className={`py-20 bg-white ${
            isVisible["notre-vision"] ? "animate-fadeIn" : ""
          } overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Formes fluides en arrière-plan */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10">
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#ea532b]"></div>
              <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#2f365b] transform translate-x-1/3"></div>
              <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#ea532b]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="order-2 md:order-1">
                <div className="relative inline-block">
                  <span className="inline-block bg-[#ea532b] bg-opacity-10 text-[#ffff] font-semibold px-4 py-2 rounded-full mb-4">
                    Notre Vision
                  </span>
                  <div className="absolute -left-3 -top-3 w-16 h-16 bg-[#2f365b] bg-opacity-5 rounded-full animate-pulse"></div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-[#2f365b] mb-6 relative">
                  Une vision née pour{" "}
                  <span className="relative inline-block">révolutionner</span>{" "}
                  la gestion RH
                </h2>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  YIEL est né d'un constat simple : les entreprises, en
                  particulier en Afrique, ont besoin d'outils modernes pour
                  gérer efficacement leurs talents et leurs équipes.
                </p>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Depuis nos débuts, notre mission est de simplifier la gestion
                  RH en alliant technologie et innovation. Fondé par des experts
                  passionnés, YIEL accompagne aujourd'hui des entreprises de
                  toutes tailles vers l'excellence, en mettant l'humain au cœur
                  de la performance.
                </p>

                {/* Statistiques clés - Design fluide */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2f365b] bg-opacity-10 mb-3 text-[#2f365b] group-hover:bg-[#ea532b] group-hover:text-white transition-colors duration-300">
                        {stat.icon}
                      </div>
                      {/* <h3 className="text-2xl font-bold text-[#2f365b]">
                        {stat.value}
                      </h3> */}
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 relative">
                  <button className="relative z-10 inline-flex items-center px-6 py-3 bg-[#ea532b] text-white font-medium rounded-lg transition hover:bg-[#d64a27] shadow-md hover:shadow-xl transform hover:-translate-y-1">
                    Découvrir nos solutions{" "}
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>

              <div className="relative order-1 md:order-2">
                {/* Image avec effet de fluidité */}
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl transform hover:rotate-1 transition duration-300 relative z-10">
                  <img
                    src="./VisionYiel.png"
                    alt="Vision YIEL"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Éléments décoratifs fluides */}
                <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-[#2f365b] flex items-center justify-center shadow-lg transform -rotate-6 transition-transform duration-500 hover:rotate-0 z-20">
                  {/* Image du logo / élément décoratif */}
                  <img
                    src="./logoMyiel.jpeg"
                    alt="Vision YIEL"
                    className="w-24 h-24 object-cover rounded-full transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-[#ea532b] rounded-full p-4 shadow-lg z-20 transform transition-transform duration-500 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                {/* Formes fluides autour de l'image */}
                <div className="absolute top-1/4 -right-12 w-24 h-24 rounded-full border-4 border-[#ea532b] border-opacity-20"></div>
                <div className="absolute -bottom-4 right-1/4 w-16 h-16 rounded-full bg-[#2f365b] bg-opacity-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id="parcours"
          className={`py-24 bg-gradient-to-b from-gray-50 to-gray-100 ${
            isVisible["parcours"] ? "animate-fadeIn" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#2f365b] bg-opacity-10 text-[#ffff] font-semibold px-6 py-2 rounded-full mb-6 transform transition-all duration-300 hover:scale-105">
                Notre Évolution
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2f365b] mb-6 relative">
                Notre Parcours
                <span className="block w-24 h-1 bg-[#ea532b] mx-auto mt-4"></span>
              </h2>
              <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                Découvrez comment YIEL s’est construit au fil des années, d’une
                idée à un outil RH innovant, pensé pour accompagner les
                entreprises africaines dans leur transformation digitale.
              </p>
            </div>

            <div className="relative mt-24">
              {/* Timeline center line - with gradient and animation */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-[#2f365b] via-[#ea532b] to-[#2f365b] opacity-30 rounded-full"></div>

              {/* Timeline events */}
              <div className="space-y-32">
                {timeline.map((event, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center`}
                  >
                    <div className="md:w-1/2 mb-8 md:mb-0 px-6">
                      <div
                        className={`${
                          index % 2 === 0
                            ? "text-right md:pr-16"
                            : "text-left md:pl-16"
                        } transform transition-all duration-700 hover:scale-105`}
                      >
                        <span className="inline-block bg-gradient-to-r from-[#ea532b] to-[#f07654] text-white font-bold px-5 py-1.5 rounded-full mb-4 shadow-md">
                          {event.year}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#2f365b] mb-4">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center md:w-12 z-10">
                      <div
                        className={`w-20 h-20 rounded-full ${event.bgColor} flex items-center justify-center shadow-xl transform transition-all duration-500 hover:scale-110 border-4 border-white overflow-hidden`}
                        style={{
                          boxShadow: "0 0 25px rgba(47, 54, 91, 0.3)",
                        }}
                      >
                        <div
                          className={`${event.iconColor} transform transition-all duration-500 hover:rotate-12`}
                        >
                          {event.icon}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 px-6"></div>
                  </div>
                ))}

                {/* Future point - with enhanced animation */}
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center z-10">
                    <div
                      className="w-24 h-24 rounded-full bg-gradient-to-r from-[#2f365b] to-[#3a4272] flex items-center justify-center shadow-xl border-4 border-white"
                      style={{ animation: "pulse-glow 3s infinite" }}
                    >
                      <div className="text-white transform transition-all duration-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-center mt-10 bg-gradient-to-r from-[#2f365b] to-[#3a4272] px-10 py-6 rounded-2xl shadow-2xl text-white max-w-xl mx-auto transform transition-all duration-500 hover:translate-y-[-5px]"
                    style={{
                      boxShadow: "0 10px 40px rgba(47, 54, 91, 0.4)",
                    }}
                  >
                    <h3 className="text-3xl font-bold mb-4">Et demain ?</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      YIEL continue son expansion avec de nouvelles
                      fonctionnalités innovantes et une présence renforcée à
                      travers l'Afrique. Nous restons fidèles à notre mission :
                      simplifier et optimiser la gestion RH pour toutes les
                      entreprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section
          id="valeurs"
          className={`py-24 bg-gradient-to-b from-white to-gray-50 ${
            isVisible["valeurs"] ? "animate-fadeIn" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-[#ea532b] to-[#f07654] text-white font-semibold px-6 py-2 rounded-full mb-6 shadow-md transform transition-all duration-300 hover:scale-105">
                Ce qui nous définit
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2f365b] mb-6 relative">
                Nos Valeurs
                <span className="block w-24 h-1 bg-[#ea532b] mx-auto mt-4"></span>
              </h2>
              <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                Les principes qui guident nos actions et nos décisions au
                quotidien, et qui font de YIEL une entreprise unique
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
                  style={{
                    boxShadow: "0 10px 30px rgba(47, 54, 91, 0.1)",
                  }}
                >
                  <div className={`h-3 ${value.color}`}></div>
                  <div className="p-8 relative">
                    {/* Fond décoratif avec opacité */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#2f365b] to-[#3a4272] opacity-5 -mt-10 -mr-10 transform transition-all duration-500 group-hover:scale-150"></div>

                    <div
                      className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#2f365b] to-[#3a4272] mb-8 mx-auto transform transition-all duration-500 group-hover:rotate-12 shadow-lg"
                      style={{
                        boxShadow: "0 5px 15px rgba(47, 54, 91, 0.3)",
                      }}
                    >
                      <span className="text-white font-bold text-2xl">
                        {value.letter}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#2f365b] text-center mb-4 relative z-10">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 text-center leading-relaxed relative z-10">
                      {value.description}
                    </p>

                    <div className="mt-8 text-center">
                      <div
                        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-[#2f365b] transform transition-all duration-500 group-hover:bg-[#ea532b] group-hover:text-white"
                        style={{
                          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {value.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Élément décoratif en bas de la section */}
            <div className="mt-20 flex justify-center">
              <div className="inline-flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-[#ea532b] opacity-70"
                    style={{
                      animation: `pulse-fade 1.5s infinite ${i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        {/* <section
          id="temoignages"
          className={`py-20 bg-gradient-to-b from-gray-50 to-white ${
            isVisible["temoignages"] ? "animate-fadeIn" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#2f365b] bg-opacity-10 text-[#fff] font-semibold px-6 py-2 rounded-full mb-4 transform hover:scale-105 transition-transform duration-300">
                Ils nous font confiance
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#2f365b] mb-6">
                Ce que disent nos clients
              </h2>
              <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
                Découvrez pourquoi les entreprises choisissent YIEL pour leurs
                besoins en gestion des ressources humaines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                >
                  <div className="absolute -top-2 -left-2">
                    <svg
                      className="w-10 h-10 text-[#ea532b]"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zm-11 9v7H7v-7h4zm12 0v7h-4v-7h4zm-1-13v4h-2V4h2zm-10 0v4H9V4h2z" />
                    </svg>
                  </div>
                  <div className="pt-6">
                    <p className="text-gray-600 mb-8 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#2f365b] shadow-md">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2f365b] text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#ea532b] font-medium">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
                    <svg
                      className="w-full h-full text-[#2f365b]"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M22 8v8h4v-8h-4zm-12 0v8h4v-8h-4zm11 9v7h4v-7h-4zm-12 0v7h4v-7h-4zm1-13v4h2V4h-2zm10 0v4h2V4h-2z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="bg-[#ea532b] hover:bg-[#2f365b] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                Voir plus de témoignages
              </button>
            </div>
          </div>
        </section> */}

        {/* Notre Équipe */}
        <section
          id="equipe"
          className={`py-20 bg-gradient-to-b from-[#2f365b] to-[#1e2340] text-white ${
            isVisible["equipe"] ? "animate-fadeIn" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#ea532b] text-white font-semibold px-6 py-2 rounded-full mb-4">
                Notre force
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                La Team YIELERS
              </h2>
              <p className="text-lg text-gray-100 mt-6 max-w-2xl mx-auto">
                Derrière YIEL se cache une équipe passionnée d'experts en
                technologie, ressources humaines et innovation, tous unis par la
                volonté de créer des solutions impactantes.
              </p>
            </div>

            {/* CEO Highlight */}
            <div className="bg-[#ffffff0d] rounded-2xl p-8 mb-16 shadow-lg border border-[#ffffff1a]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="md:col-span-1">
                  <div className="rounded-2xl overflow-hidden aspect-square border-4 border-[#ea532b]">
                    <img
                      src={team[0].image}
                      alt={team[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                    {team[0].name}
                  </h3>
                  <p className="text-lg font-medium text-[#ea532b] mb-5">
                    {team[0].role}
                  </p>
                  <p className="text-gray-100 mb-8 leading-relaxed">
                    {team[0].description}
                  </p>
                  <div className="flex space-x-5">
                    {Object.keys(team[0].social).map((platform, index) => (
                      <a
                        key={index}
                        href={team[0].social[platform]}
                        className="w-12 h-12 rounded-full bg-[#ea532b] flex items-center justify-center hover:bg-[#ff6b45] transition-all duration-300"
                        aria-label={platform}
                      >
                        {platform === "linkedin" && (
                          <Linkedin className="h-5 w-5" />
                        )}
                        {platform === "twitter" && (
                          <Twitter className="h-5 w-5" />
                        )}
                        {platform === "email" && <Mail className="h-5 w-5" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.slice(1).map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#2f365b] to-[#1a1e3a] text-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                >
                  {/* Badge d’icône */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#ea532b] shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#ea532b] text-white p-2 rounded-full shadow-lg">
                      {index % 3 === 0 && <Code className="h-4 w-4" />}
                      {index % 3 === 1 && <Briefcase className="h-4 w-4" />}
                      {index % 3 === 2 && <Lightbulb className="h-4 w-4" />}
                    </div>
                  </div>

                  {/* Infos */}
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#ea532b] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {member.description}
                  </p>

                  {/* Réseaux sociaux */}
                  <div className="flex justify-center gap-3 mt-auto">
                    {Object.keys(member.social).map((platform, idx) => (
                      <a
                        key={idx}
                        href={member.social[platform]}
                        className="w-10 h-10 rounded-full bg-[#ffffff1a] flex items-center justify-center hover:bg-[#ea532b] transition-all duration-300"
                        aria-label={platform}
                      >
                        {platform === "linkedin" && (
                          <Linkedin className="h-4 w-4" />
                        )}
                        {platform === "github" && (
                          <Github className="h-4 w-4" />
                        )}
                        {platform === "dribbble" && (
                          <Dribbble className="h-4 w-4" />
                        )}
                        {platform === "twitter" && (
                          <Twitter className="h-4 w-4" />
                        )}
                        {platform === "email" && <Mail className="h-4 w-4" />}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Rejoindre l'équipe */}

            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-[#2f365b] to-[#ea532b] p-0.5 rounded-2xl">
                <div className="bg-gradient-to-r from-[#2f365b] via-[#343e6a] to-[#3a4272] rounded-2xl p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Envie de rejoindre l'aventure ?
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Nous sommes constamment à la recherche de talents passionnés
                    pour continuer à développer nos solutions RH innovantes.
                  </p>
                  <button className="px-8 py-4 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    Voir nos offres d'emploi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#2f365b] to-[#3a4272] rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Prêt à transformer votre approche RH ?
                  </h2>
                  <p className="text-gray-200 mb-8">
                    Rejoignez nos entreprises qui font confiance à{" "}
                    <span className="text-[#ea532b]">YIEL GROUP</span> {""}
                    pour la gestion de leurs talents. Demandez une démo
                    personnalisée dès aujourd'hui.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow hover:bg-opacity-90 transition">
                      Demander une démo
                    </button>
                    <button className="px-6 py-3 bg-white text-[#2f365b] font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                      Nous contacter
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
};

export default NotreHistoire;
