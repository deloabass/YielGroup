import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Heart,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Award,
  Briefcase,
  UserPlus,
  MessageCircle,
  BarChart3,
  Shield,
  Clock,
  BookOpen,
  Lightbulb,
  Settings,
  ChevronRight,
  Play,
  Download,
  Mail,
  Phone,
  MapPin,
  PlusCircle,
  MinusCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ParcoursCollaborateur = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

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

    document
      .querySelectorAll("section[id], div[id^='feature-']")
      .forEach((element) => {
        observer.observe(element);
      });

    return () => observer.disconnect();
  }, []);

  // Étapes du parcours collaborateur
  const parcourSteps = [
    {
      id: 1,
      title: "Recrutement",
      description:
        "Premier contact avec l'entreprise - processus fluide et respectueux",
      icon: <UserPlus size={32} />,
      color: "from-[#2f365b] to-[#3a4272]",
      details: [
        "Processus de recrutement digitalisé",
        "Expérience candidat optimisée",
        "Communication transparente",
        "Feedback personnalisé",
      ],
    },
    {
      id: 2,
      title: "Onboarding",
      description:
        "Accueil et intégration - donner les moyens de bien commencer",
      icon: <Heart size={32} />,
      color: "from-[#ea532b] to-[#f66b47]",
      details: [
        "Parcours d'intégration structuré",
        "Accompagnement personnalisé",
        "Formation initiale adaptée",
        "Immersion culturelle",
      ],
    },
    {
      id: 3,
      title: "Vie au travail",
      description: "Suivi RH, objectifs, développement, feedbacks continus",
      icon: <Target size={32} />,
      color: "from-[#2f365b] to-[#3a4272]",
      details: [
        "Suivi des performances",
        "Développement des compétences",
        "Feedback régulier",
        "Équilibre vie pro/perso",
      ],
    },
    {
      id: 4,
      title: "Mobilité interne",
      description: "Évolution de poste, montée en compétence et développement",
      icon: <TrendingUp size={32} />,
      color: "from-[#ea532b] to-[#f66b47]",
      details: [
        "Opportunités d'évolution",
        "Formation continue",
        "Mobilité facilitée",
        "Reconnaissance des talents",
      ],
    },
    {
      id: 5,
      title: "Offboarding",
      description: "Départ bien géré = ambassadeur potentiel de la marque",
      icon: <Award size={32} />,
      color: "from-[#2f365b] to-[#3a4272]",
      details: [
        "Processus de départ structuré",
        "Feedback de sortie",
        "Maintien des relations",
        "Réseau d'alumni",
      ],
    },
  ];

  // Domaines d'intervention
  const domainesIntervention = [
    {
      id: 1,
      title: "Enrichir l'Expérience Collaborateur",
      icon: <Heart size={28} />,
      description: "Construire une relation de qualité avec vos talents",
      features: [
        "Écoute des besoins sur le terrain",
        "Alignement stratégie RH et culture",
        "Valorisation des moments-clés",
        "Amélioration continue",
      ],
      color: "bg-[#2f365b]",
    },
    {
      id: 2,
      title: "Repenser les environnements de travail",
      icon: <Settings size={28} />,
      description:
        "Concevoir des espaces qui favorisent bien-être et productivité",
      features: [
        "Modèles hybrides réalistes",
        "Cadres adaptés aux contraintes locales",
        "Ambiances propices à l'engagement",
        "Espaces collaboratifs modernes",
      ],
      color: "bg-[#ea532b]",
    },
    {
      id: 3,
      title: "Adapter les modes de travail",
      icon: <Zap size={28} />,
      description: "Transition vers des pratiques RH modernes et agiles",
      features: [
        "Pilotage par objectifs (OKR, KPI)",
        "Collaboration à distance",
        "Outils de communication avancés",
        "Processus RH adaptés",
      ],
      color: "bg-[#2f365b]",
    },
  ];

  // Avantages
  const avantages = [
    {
      icon: <UserPlus size={24} />,
      title: "Meilleure intégration",
      description: "Processus d'onboarding optimisé pour vos collaborateurs",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Motivation renforcée",
      description: "Engagement et fidélité accrue de vos équipes",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Modernisation progressive",
      description: "Évolution adaptée de vos pratiques RH",
    },
    {
      icon: <Target size={24} />,
      title: "Performance optimisée",
      description: "Environnements adaptés à l'autonomie et à la performance",
    },
  ];

  // FAQ
  const faqs = [
    {
      id: 1,
      question: "Qu'est-ce que l'expérience collaborateur ?",
      answer:
        "L'expérience collaborateur regroupe l'ensemble des ressentis, interactions et perceptions vécues par un salarié tout au long de son parcours dans l'entreprise – du recrutement à son départ. Ce concept, inspiré de l'expérience client, est devenu un levier de performance stratégique.",
    },
    {
      id: 2,
      question: "Pourquoi est-ce si important aujourd'hui en Afrique ?",
      answer:
        "Dans un contexte africain en pleine mutation, investir dans l'expérience collaborateur permet de limiter le turnover, renforcer l'engagement, développer la marque employeur et stimuler la performance globale. Les collaborateurs recherchent plus qu'un emploi : un cadre valorisant, des opportunités de développement et un équilibre vie pro/perso.",
    },
    {
      id: 3,
      question: "Comment YIEL Group vous accompagne ?",
      answer:
        "Nous proposons un SIRH adapté (MyYiel) pour digitaliser chaque étape du parcours collaborateur, un accompagnement conseil RH pour structurer votre stratégie d'expérience employé, et des solutions progressives adaptées à tous les niveaux de maturité RH en Afrique.",
    },
    {
      id: 4,
      question:
        "Quelles sont les grandes étapes de l'expérience collaborateur ?",
      answer:
        "Le parcours comprend 5 étapes essentielles : Recrutement (premier contact), Onboarding (accueil et intégration), Vie au travail (suivi RH et développement), Mobilité interne (évolution de poste), et Offboarding (départ bien géré).",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('./VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  PARCOURS COLLABORATEUR
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Pilotage du{" "}
                  <span className="text-[#ea532b]">Parcours Collaborateur</span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Accompagner les entreprises africaines dans la transformation
                  durable de l'expérience collaborateur avec une approche
                  adaptée aux réalités locales.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <button onClick={() => navigate("/demo")} className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] cursor-pointer transition-all duration-300 flex items-center justify-center">
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
                      src="./Heroparcourscollaborateur.avif"
                      alt="Parcours Collaborateur"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                  <Users size={24} />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
                  <Target size={24} />
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
                fill="#ea532b"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Étapes du Parcours Section */}
        <section id="parcours-steps" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                PARCOURS COLLABORATEUR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Les 5 étapes clés du{" "}
                <span className="text-[#ea532b]">parcours collaborateur</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                De l'attraction des talents à leur départ, chaque étape compte
                pour créer une expérience mémorable et engageante.
              </p>
            </div>

            {/* Timeline interactive */}
            <div className="relative mb-16">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <div className="hidden md:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#2f365b] to-[#ea532b] transform -translate-y-1/2 transition-all duration-1000"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {parcourSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`relative cursor-pointer transition-all duration-500 `}
                  >
                    <div
                      className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300`}
                    >
                      <div
                        className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white bg-gradient-to-r ${step.color}`}
                      >
                        {step.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#2f365b] text-white flex items-center justify-center font-bold mx-auto mb-4">
                        {step.id}
                      </div>
                      <h3 className="text-lg font-bold text-[#2f365b] mb-2 text-center">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-center mb-4">
                        {step.description}
                      </p>
                      <div className="space-y-2 border-t pt-4">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-xs text-gray-600"
                          >
                            <CheckCircle
                              size={12}
                              className="text-[#ea532b] mr-2 flex-shrink-0"
                            />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center space-x-2">
              {parcourSteps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Domaines d'intervention Section */}
        <section id="domaines" className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                NOS DOMAINES D'INTERVENTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Une approche{" "}
                <span className="text-[#ea532b]">centrée sur l'humain</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous croyons que l'évolution des modes de travail en Afrique
                doit être inclusive, progressive et alignée avec les enjeux
                sociaux et culturels locaux.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {domainesIntervention.map((domaine, index) => (
                <div
                  key={domaine.id}
                  id={`feature-domaine-${index}`}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible[`feature-domaine-${index}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className={`${domaine.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      {domaine.icon}
                      <h3 className="text-xl font-bold ml-3">
                        {domaine.title}
                      </h3>
                    </div>
                    <p className="text-white/90">{domaine.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3">
                      {domaine.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle
                            size={16}
                            className="text-[#ea532b] mr-3 mt-1 flex-shrink-0"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section id="avantages" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                  Transformez votre{" "}
                  <span className="text-[#ea532b]">
                    expérience collaborateur
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nos solutions répondent aux enjeux concrets des entreprises
                  africaines pour créer un environnement de travail moderne et
                  engageant.
                </p>

                <div className="space-y-6">
                  {avantages.map((avantage, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] flex-shrink-0 mr-4">
                        {avantage.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#2f365b] mb-1">
                          {avantage.title}
                        </h4>
                        <p className="text-gray-600">{avantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#2f365b] to-[#ea532b] rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Notre SIRH MyYiel</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield size={20} className="mr-3" />
                      <span>Sécurisé et conforme</span>
                    </div>
                    <div className="flex items-center">
                      <Globe size={20} className="mr-3" />
                      <span>Adapté aux réalités africaines</span>
                    </div>
                    <div className="flex items-center">
                      <Zap size={20} className="mr-3" />
                      <span>Interface intuitive</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 size={20} className="mr-3" />
                      <span>Analytics avancés</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#ea532b] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SIRH
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Questions <span className="text-[#ea532b]">fréquentes</span>
              </h2>
              <p className="text-lg text-gray-600">
                Vous avez une question ? Nous avons les réponses.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setOpenFaq(openFaq === faq.id ? null : faq.id)
                    }
                  >
                    <span className="text-lg font-semibold text-[#2f365b]">
                      {faq.question}
                    </span>
                    {openFaq === faq.id ? (
                      <MinusCircle size={20} className="text-[#ea532b]" />
                    ) : (
                      <PlusCircle size={20} className="text-[#ea532b]" />
                    )}
                  </button>

                  {openFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-[#2f365b]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#2f365b] to-[#3a4272] rounded-xl p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Vous souhaitez transformer votre{" "}
                    <span className="text-[#ea532b]">
                      expérience collaborateur
                    </span>{" "}
                    ?
                  </h2>
                  <p className="text-lg text-gray-200 mb-8">
                    Nos consultants vous accompagnent à chaque étape :
                    diagnostic, co-construction de votre stratégie RH et
                    déploiement opérationnel.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-gray-200">
                      <CheckCircle size={20} className="text-[#ea532b] mr-3" />
                      <span>Audit gratuit de 30 minutes</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <CheckCircle size={20} className="text-[#ea532b] mr-3" />
                      <span>Accompagnement personnalisé</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <CheckCircle size={20} className="text-[#ea532b] mr-3" />
                      <span>Solutions évolutives</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <CheckCircle size={20} className="text-[#ea532b] mr-3" />
                      <span>Support technique inclus</span>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-right">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="px-8 py-4 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center">
                      <Calendar size={20} className="mr-2" />
                      Réserver un appel
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                      <Mail size={20} className="mr-2" />
                      Nous contacter
                    </button>
                  </div>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea532b]/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ea532b]/10 rounded-full translate-y-24 -translate-x-24"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
                CONTACT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Parlons de votre <span className="text-[#ea532b]">projet</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Notre équipe d'experts est à votre disposition pour discuter de
                vos besoins et vous proposer des solutions adaptées.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Informations de contact */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#2f365b] flex items-center justify-center text-white mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2f365b]">
                        Téléphone
                      </h4>
                      <p className="text-[#ea532b] cursor-pointer hover:underline">
                        Bientôt disponible
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#ea532b] flex items-center justify-center text-white mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2f365b]">Email</h4>

                      <a
                        href="mailto:contact@yiel-group.com"
                        className="text-[#ea532b] hover:underline"
                      >
                        contact@yiel-group.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#2f365b] flex items-center justify-center text-white mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2f365b]">Adresse</h4>
                      <a
                        // href="https://www.google.com/maps?q=Yaoundé,+Cameroun"
                        href="https://www.google.com/maps?q=Yaoundé+Centre-ville,+Cameroun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ea532b] hover:underline"
                      >
                        Yaoundé, Cameroun
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="lg:col-span-2">
                <form className="bg-gray-50 rounded-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet{" "}
                        <span className="text-[#ea532b] text-md">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 placeholder-gray-400 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-[#ea532b] text-md">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 placeholder-gray-400 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 placeholder-gray-400 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 placeholder-gray-400 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        placeholder="+237 - - - - - - - - -"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet <span className="text-[#ea532b] text-md">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent">
                      <option value="">Sélectionnez un sujet</option>
                      <option value="demo">Demande de démonstration</option>
                      <option value="info">Informations sur MyYiel</option>
                      <option value="accompagnement">Accompagnement RH</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-[#ea532b] text-md">*</span>
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 placeholder-gray-400 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent resize-none"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail size={20} className="mr-2" />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParcoursCollaborateur;
