import React, { useState, useEffect, useMemo } from "react";
import {
  Clock,
  Calendar,
  CheckCircle,
  BarChart3,
  Smartphone,
  ArrowRight,
  UserCheck,
  CalendarDays,
  Bell,
  TrendingUp,
  MapPin,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import { useNavigate, useSearchParams } from "react-router-dom";

function Temes() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // To pre-select a feature based on URL param
  const [activeFeature, setActiveFeature] = useState("absences"); // State for active tab in features section
  const [currentTime, setCurrentTime] = useState(new Date()); // State for current time in dashboard mockup

  // Update current time every second for the dashboard mockup
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Define and memoize features directly within useMemo
  const features = useMemo(() => [
    {
      id: "absences",
      title: "Absences & Congés",
      icon: <CalendarDays size={24} />,
      description:
        "Planifiez, validez et suivez toutes les absences (maladie, congés, permissions, jours fériés…). Y’Time vous alerte automatiquement, centralise toutes les demandes et met à jour les compteurs en temps réel. Vos collaborateurs gagnent en autonomie, vos RH gagnent du temps.",
      benefits: [
        "Demandes automatisées",
        "Validation hiérarchique",
        "Compteurs temps réel",
        "Alertes personnalisées",
      ],
      mockup: "calendar",
      footerText:
        "👉 Vos collaborateurs gagnent en autonomie, vos RH gagnent du temps.",
    },
    {
      id: "planning",
      title: "Planning & Présences",
      icon: <Clock size={24} />, // Changed icon for planning
      description:
        "Organisez les horaires de travail, les rotations, les pointages ou la présence effective. L’interface vous permet de visualiser les disponibilités, de gérer les imprévus et de garantir une meilleure couverture de service. Un outil léger, pratique, et adapté à tous les secteurs.",
      benefits: [
        "Horaires flexibles",
        "Pointage mobile",
        "Visualisation temps réel",
        "Gestion des imprévus",
      ],
      mockup: "schedule",
      footerText: "👉 Un outil léger, pratique, et adapté à tous les secteurs.",
    },
  ], []); // Empty dependency array as this data is static

  // Update active feature based on URL param
  useEffect(() => {
    if (id && features.some((mod) => mod.id === id)) {
      setActiveFeature(id);
    }
  }, [id, features]); // 'features' is a stable reference now due to useMemo

  // Memoize selected module for efficient rendering
  const selectedModule = useMemo(() => {
    return features.find((mod) => mod.id === activeFeature) || features[0];
  }, [activeFeature, features]);

  // Sample data for dashboard stats in Hero Section
  const dashboardStats = [
    {
      label: "Présents aujourd'hui",
      value: "187",
      icon: <UserCheck size={20} />,
      color: "text-green-400", // Adjusted for better contrast on dark background
      bgColor: "bg-green-50",
    },
    {
      label: "En congé",
      value: "23",
      icon: <Calendar size={20} />,
      color: "text-blue-400", // Adjusted
      bgColor: "bg-blue-50",
    },
    {
      label: "Demandes en attente",
      value: "8",
      icon: <Clock size={20} />,
      color: "text-orange-400 animate-spin", // Adjusted
      bgColor: "bg-orange-50",
    },
    {
      label: "Heures ce mois",
      value: "3,247",
      icon: <BarChart3 size={20} />,
      color: "text-indigo-400", // Adjusted
      bgColor: "bg-indigo-50",
    },
  ];
  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Est-ce que je peux utiliser Y'Time même si je n'ai jamais eu de système de pointage ou de gestion des congés ?",
      answer: "Oui, totalement. Y'Time a été conçu pour vous accompagner pas à pas, même si vous partez de zéro. L'outil est simple, clair, et vous pouvez commencer uniquement par la gestion des congés, puis activer les autres fonctionnalités à votre rythme.",
    },
    {
      id: 2,
      question: "Mes collaborateurs ne sont pas tous à l'aise avec le digital, comment ça se passe ?",
      answer: "Pas besoin d'être un expert. Chaque salarié reçoit un accès simple, avec des boutons clairs pour faire une demande d'absence ou consulter son planning. Et s'ils ne peuvent pas se connecter, le RH peut tout saisir pour eux manuellement.",
    },
    {
      id: 3,
      question: "Est-ce que je peux adapter le planning aux horaires irréguliers ?",
      answer: "Oui, Y'Time prend en compte les réalités du terrain : horaires décalés, roulements, absences imprévues, jours fériés locaux… Vous construisez votre propre grille, à votre façon.",
    },
    {
      id: 4,
      question: "Vais-je devoir tout gérer moi-même chaque jour ?",
      answer: "Non. L'outil vous envoie des rappels, affiche les alertes importantes et automatise les tâches répétitives (calcul des soldes de congés, mise à jour des plannings…). Vous gardez le contrôle, mais sans la charge mentale.",
    },
    {
      id: 5,
      question: "Est-ce que c'est sécurisé et conforme ?",
      answer: "Oui. Toutes les données sont protégées et stockées en toute sécurité. Vous gardez un historique complet des absences et présences, en cas de contrôle ou de litige.",
    },
  ];

  // --- Calendar Mockup Component ---
  const CalendarMockup = () => {
    // Current date for simulation in the mockup
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-indexed
    const currentYear = today.getFullYear();

    // Set the month for the mockup to January 2025 as per your initial mockup
    const mockupMonth = 0; // January
    const mockupYear = 2025;
    const daysInMonth = new Date(mockupYear, mockupMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(mockupYear, mockupMonth, 1).getDay(); // 0 for Sunday, 1 for Monday...

    // Adjust firstDayOfMonth to start week on Monday (1 for Mon, 0 for Sun)
    const startDayOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // If Sunday (0), map to 6 (end of week), else minus 1

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-[#2f365b]">Janvier 2025</h4>
          <div className="flex space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
            <div
              key={i}
              className="text-center text-xs font-medium text-gray-500 p-2"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: daysInMonth + startDayOffset }, (_, i) => {
            const day = i - startDayOffset + 1; // Actual day number
            const isTodayInMockup =
              day === today.getDate() && // Check if it's the 23rd
              mockupMonth === currentMonth && // Check if it's January
              mockupYear === currentYear; // Check if it's 2025
            const hasLeave = [8, 12, 19, 26].includes(day); // Specific days with leave
            const isWeekend = (i % 7 === 5 || i % 7 === 6); // Saturday and Sunday (0-indexed week from Monday)

            return (
              <div
                key={i}
                className={`
                  aspect-square flex items-center justify-center text-sm relative rounded-lg
                  ${
                    day > 0 && day <= daysInMonth
                      ? "hover:bg-gray-100 cursor-pointer"
                      : "text-gray-300"
                  }
                  ${isTodayInMockup ? "bg-[#ea532b] text-white font-semibold" : ""}
                  ${hasLeave && !isTodayInMockup ? "bg-blue-100 text-blue-700" : ""}
                  ${
                    isWeekend && day > 0 && day <= daysInMonth && !isTodayInMockup && !hasLeave
                      ? "text-gray-400"
                      : ""
                  }
                `}
              >
                {day > 0 && day <= daysInMonth ? day : ""}
                {hasLeave && !isTodayInMockup && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-xs">
            <div className="w-3 h-3 bg-[#ea532b] rounded-sm mr-2"></div>
            <span>Aujourd'hui</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-3 h-3 bg-blue-100 rounded-sm mr-2"></div>
            <span>Congés planifiés</span>
          </div>
        </div>
      </div>
    );
  };

  // --- Schedule Mockup Component ---
  const ScheduleMockup = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-[#2f365b]">Planning d'équipe</h4>
        <span className="text-sm text-gray-500">
          {currentTime.toLocaleDateString("fr-FR")}
        </span>
      </div>

      <div className="space-y-3">
        {[
          {
            name: "Sophie M.",
            status: "present",
            time: "08:30",
            dept: "Marketing",
          },
          { name: "Ibrahim T.", status: "present", time: "09:00", dept: "IT" },
          { name: "Marie K.", status: "absent", time: "Congé", dept: "RH" },
          {
            name: "Paul D.",
            status: "late",
            time: "09:15",
            dept: "Commercial",
          },
        ].map((employee, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full mr-3 ${
                  employee.status === "present"
                    ? "bg-green-500"
                    : employee.status === "absent"
                    ? "bg-red-500"
                    : "bg-orange-500"
                }`}
              ></div>
              <div>
                <p className="font-medium text-sm text-[#2f365b]">
                  {employee.name}
                </p>
                <p className="text-xs text-gray-500">{employee.dept}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">
                {employee.time}
              </p>
              <p
                className={`text-xs capitalize ${
                  employee.status === "present"
                    ? "text-green-600"
                    : employee.status === "absent"
                    ? "text-red-600"
                    : "text-orange-600"
                }`}
              >
                {employee.status === "present"
                  ? "Présent"
                  : employee.status === "absent"
                  ? "Absent"
                  : "Retard"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  const abassa = 300
  console.log(`${abassa}`);
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* --- Hero Section --- */}
      <section
        id="hero"
        className="relative py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f365b]/0 to-[#3a4272]/90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                Y'TIME - GESTION DU TEMPS
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Maîtrisez le temps de travail,{" "}
                <span className="text-[#ea532b]">sans stress</span>
              </h1>
              <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                Gérez les temps de présence, les congés et les absences de vos
                équipes en toute simplicité. Adapté aux réalités africaines,
                petites ou grandes entreprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle
                    size={20}
                    className="text-[#ea532b] mr-3 flex-shrink-0"
                  />
                  <span className="text-sm">Suivi temps réel</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle
                    size={20}
                    className="text-[#ea532b] mr-3 flex-shrink-0"
                  />
                  <span className="text-sm">Alertes automatiques</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle
                    size={20}
                    className="text-[#ea532b] mr-3 flex-shrink-0"
                  />
                  <span className="text-sm">Interface intuitive</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle
                    size={20}
                    className="text-[#ea532b] mr-3 flex-shrink-0"
                  />
                  <span className="text-sm">Adapté aux réalités locales</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => navigate("/demo")}
                  className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center group"
                >
                  Découvrir Y'Time
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>

            {/* Right Column: Dashboard Preview */}
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white">Tableau de bord</h4>
                  <div className="flex items-center text-sm text-gray-200">
                    <Clock size={16} className="mr-1 animate-spin" />
                    {currentTime.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {dashboardStats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/20 rounded-lg p-4 text-center"
                    >
                      <div className={`${stat.color} mb-2 flex justify-center`}>
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-200">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center text-white/80 text-sm">
                  Mise à jour en temps réel
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
                <Bell size={24} />
              </div>
              <div className="absolute  -bottom-4 -left-4 bg-white/20 backdrop-blur text-white p-3 rounded-lg shadow-lg">
                <TrendingUp size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
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

      {/* --- Features Section --- */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
              FONCTIONNALITÉS PRINCIPALES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
              Deux modules <span className="text-[#ea532b]">essentiels</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Y'Time vous accompagne avec deux fonctionnalités complémentaires
              pour une gestion optimale du temps de travail.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-col md:flex-row justify-center mb-12">
            <div className="flex bg-gray-100 rounded-lg p-1 max-w-lg mx-auto">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  className={`px-6 py-3 rounded-lg whitespace-nowrap font-medium transition-all duration-300 flex items-center ${
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
                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ea532b]/10 text-[#ea532b] font-medium text-sm mb-6">
                    {selectedModule.icon}
                    <span className="ml-2">
                      {selectedModule.title.toUpperCase()}
                    </span>
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

                {/* Mockup */}
                <div className="bg-gradient-to-br from-[#2f365b] to-[#3a4272] p-8 md:p-12 flex items-center justify-center">
                  {selectedModule.mockup === "calendar" ? (
                    <CalendarMockup />
                  ) : (
                    <ScheduleMockup />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- Benefits Section --- */}
      <section className="py-20 bg-gradient-to-br from-[#2f365b] to-[#3a4272] text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
              POURQUOI Y'TIME
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un outil pensé pour{" "}
              <span className="text-[#ea532b]">l'Afrique</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Y'Time respecte vos contraintes locales et s'adapte à la réalité
              du terrain, que vous soyez une petite équipe ou une grande
              entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#ea532b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock size={32} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Suivi temps réel</h3>
              <p className="text-gray-300">
                Visualisez instantanément qui est présent, absent ou en retard
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#ea532b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bell size={32} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Alertes automatiques
              </h3>
              <p className="text-gray-300">
                Recevez des notifications personnalisées pour ne rien manquer
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#ea532b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone size={32} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Interface intuitive
              </h3>
              <p className="text-gray-300">
                Simple pour tous, même sans expertise digital
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#ea532b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} className="text-[#ea532b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Réalités locales</h3>
              <p className="text-gray-300">
                Jours fériés régionaux, horaires décalés, quotités adaptées
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Zap size={48} className="mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à simplifier la gestion du temps ?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Rejoignez les entreprises qui ont déjà adopté Y'Time pour
              optimiser leur gestion des ressources humaines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <button
              onClick={() => navigate("/demo")}
              className="px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
            >
              <Calendar size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Demander une démo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Temes;