import React, { useRef, useState } from "react";
import {
  Globe,
  Award,
  Handshake,
  Building2,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Target,
  Heart,
  ExternalLink,
  Calendar,
  Mail,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useNavigate } from "react-router-dom";

function NosPartenaires() {
  const navigate = useNavigate();
  const topRef = useRef(null);
  useScrollToTop(topRef);
  const [activeCategory, setActiveCategory] = useState("tous");

  const partnerCategories = [
    { id: "tous", label: "Tous les partenaires", count: 24 },
    { id: "technologique", label: "Technologiques", count: 8 },
    { id: "integration", label: "Intégration", count: 6 },
    { id: "consulting", label: "Conseil", count: 5 },
    { id: "formation", label: "Formation", count: 5 }
  ];

  const partners = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/api/placeholder/120/60",
      category: "technologique",
      type: "Partenaire Technologique",
      description: "Intégration native avec Microsoft 365, Azure AD et Teams pour une expérience utilisateur unifiée.",
      collaboration: "Depuis 2019",
      benefits: ["SSO automatique", "Synchronisation Teams", "Stockage Azure"],
      status: "premium",
      website: "#"
    },
    {
      id: 2,
      name: "SAP",
      logo: "/api/placeholder/120/60",
      category: "integration",
      type: "Partenaire d'Intégration",
      description: "Connectivité parfaite avec SAP ERP pour une gestion financière et RH intégrée.",
      collaboration: "Depuis 2020",
      benefits: ["API bidirectionnelle", "Sync temps réel", "Reporting unifié"],
      status: "gold",
      website: "#"
    },
    {
      id: 3,
      name: "Deloitte",
      logo: "/api/placeholder/120/60",
      category: "consulting",
      type: "Partenaire Conseil",
      description: "Accompagnement stratégique dans la transformation digitale RH des grandes entreprises.",
      collaboration: "Depuis 2018",
      benefits: ["Audit RH", "Change management", "Formation équipes"],
      status: "premium",
      website: "#"
    },
    {
      id: 4,
      name: "Oracle",
      logo: "/api/placeholder/120/60",
      category: "technologique",
      type: "Partenaire Technologique",
      description: "Intégration avec Oracle HCM Cloud pour une solution RH enterprise complète.",
      collaboration: "Depuis 2021",
      benefits: ["Migration facilitée", "Double authentification", "Analytics avancés"],
      status: "gold",
      website: "#"
    },
    {
      id: 5,
      name: "Cornerstone OnDemand",
      logo: "/api/placeholder/120/60",
      category: "formation",
      type: "Partenaire Formation",
      description: "Plateforme de formation et développement des talents intégrée à notre SIRH.",
      collaboration: "Depuis 2020",
      benefits: ["Catalogue formation", "Tracking compétences", "Certifications"],
      status: "certified",
      website: "#"
    },
    {
      id: 6,
      name: "PwC",
      logo: "/api/placeholder/120/60",
      category: "consulting",
      type: "Partenaire Conseil",
      description: "Expertise en conformité réglementaire et optimisation des processus RH.",
      collaboration: "Depuis 2019",
      benefits: ["Audit conformité", "Optimisation processus", "Formation réglementaire"],
      status: "gold",
      website: "#"
    },
    {
      id: 7,
      name: "Salesforce",
      logo: "/api/placeholder/120/60",
      category: "technologique",
      type: "Partenaire Technologique",
      description: "Synchronisation avec Salesforce CRM pour une vue 360° de vos collaborateurs.",
      collaboration: "Depuis 2021",
      benefits: ["CRM intégré", "Pipeline recrutement", "Automation marketing"],
      status: "premium",
      website: "#"
    },
    {
      id: 8,
      name: "Workday",
      logo: "/api/placeholder/120/60",
      category: "integration",
      type: "Partenaire d'Intégration",
      description: "Connecteur bi-directionnel avec Workday pour la gestion financière RH.",
      collaboration: "Depuis 2022",
      benefits: ["Sync paie", "Budgets RH", "Reporting financier"],
      status: "certified",
      website: "#"
    }
  ];

  const partnershipStats = [
    { number: "24+", label: "Partenaires actifs", icon: Handshake },
    { number: "150+", label: "Intégrations disponibles", icon: Zap },
    { number: "98%", label: "Taux de satisfaction", icon: Star },
    { number: "5 ans", label: "Partenariat moyen", icon: Award }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Sécurité renforcée",
      description: "Nos partenaires technologiques garantissent les plus hauts standards de sécurité."
    },
    {
      icon: Zap,
      title: "Performance optimisée",
      description: "Intégrations natives pour une performance et une expérience utilisateur exceptionnelles."
    },
    {
      icon: Target,
      title: "Expertise métier",
      description: "Bénéficiez de l'expertise combinée de leaders dans leurs domaines respectifs."
    },
    {
      icon: Heart,
      title: "Support dédié",
      description: "Un accompagnement personnalisé tout au long de votre parcours digital."
    }
  ];

  const filteredPartners = activeCategory === "tous" 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "premium":
        return "from-yellow-400 to-yellow-600";
      case "gold":
        return "from-orange-400 to-orange-600";
      case "certified":
        return "from-blue-400 to-blue-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "premium":
        return "Premium";
      case "gold":
        return "Gold";
      case "certified":
        return "Certifié";
      default:
        return "Standard";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden">
          {/* Effets d'arrière-plan */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6 border border-[#ea532b]/30">
                🤝 ÉCOSYSTÈME PARTENAIRES
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Nos
                <span className="text-[#ea532b]"> partenaires</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-gray-200">
                Ils marchent à nos côtés pour façonner un avenir meilleur. Découvrez notre écosystème 
                de partenaires technologiques, d'intégration et de conseil qui enrichissent notre solution SIRH.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {partnershipStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-[#ea532b]/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#ea532b]/30">
                        <Icon className="h-8 w-8 text-[#ea532b]" />
                      </div>
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Wave separator */}
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Les avantages de notre écosystème
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos partenariats stratégiques vous offrent un accès privilégié aux meilleures 
                technologies et expertises du marché.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl border border-gray-200 hover:border-[#ea532b]/30 hover:shadow-lg transition-all duration-300 bg-white"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#ea532b] to-[#d64a27] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories Filter */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-8">
                Découvrez nos partenaires
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {partnerCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white shadow-lg"
                        : "bg-white text-[#2f365b] border border-gray-300 hover:border-[#ea532b] hover:text-[#ea532b]"
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 text-sm opacity-70">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-[#ea532b]/30 hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Partner Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <Building2 className="h-8 w-8 text-[#2f365b]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2f365b] mb-1">
                          {partner.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {partner.type}
                        </span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getStatusColor(partner.status)} text-white text-xs font-medium`}>
                      {getStatusLabel(partner.status)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Collaboration info */}
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    {partner.collaboration}
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2f365b] mb-3 text-sm">
                      Avantages clés :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#ea532b]/10 text-[#ea532b] text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center text-[#ea532b] font-medium text-sm hover:text-[#d64a27] transition-colors">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      En savoir plus
                    </button>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-[#ea532b] transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-[#ea532b] transition-colors">
                        <Globe className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vous souhaitez devenir partenaire ?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Rejoignez notre écosystème de partenaires et participez à la transformation 
                digitale RH des entreprises africaines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center cursor-pointer px-7 py-3 bg-[#ea532b] text-white font-semibold rounded-full hover:bg-[#d64a27] transition-colors group shadow-lg"
                >
               <Calendar className="h-5 w-5 mr-2" />
               Planifier une démo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NosPartenaires;