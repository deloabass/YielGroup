import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Building,
  CheckCircle,
  Globe,
  Headphones,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useNavigate } from "react-router-dom";

function NousContacter() {
  const navigate = useNavigate();
  const topRef = useRef(null);
  useScrollToTop(topRef);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    poste: "",
    sujet: "",
    message: "",
    consentement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log("Formulaire envoyé:", formData);

      // Reset après 3 secondes
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          entreprise: "",
          poste: "",
          sujet: "",
          message: "",
          consentement: false,
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "Bientôt disponible",
      description: "Du lundi au vendredi, 8h-18h",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@yiel-goup.com",
      description: "Réponse sous 24h",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "Cameroun, Yaoundé",
      description: "Rue Charle Bindzi",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const officeHours = [
    { day: "Lundi - Vendredi", hours: "08:00 - 18:00" },
    { day: "Samedi", hours: "09:00 - 13:00" },
    { day: "Dimanche", hours: "Fermé" },
  ];

  const supportTypes = [
    {
      icon: MessageCircle,
      title: "Support technique",
      description: "Assistance pour l'utilisation de la plateforme",
      response: "< 2h",
    },
    {
      icon: Users,
      title: "Support commercial",
      description: "Questions sur nos offres et tarifs",
      response: "< 4h",
    },
    {
      icon: Headphones,
      title: "Formation",
      description: "Accompagnement et formation de vos équipes",
      response: "< 24h",
    },
  ];

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen flex flex-col bg-gradient-to-r from-[#2f365b] to-[#3a4272]"
        ref={topRef}
      >
        <Header />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center px-4">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200">
              <div className="w-20 h-20 bg-gradient-to-r from-[#ea532b] to-[#d64a27] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#2f365b] mb-4">
                Message envoyé avec succès !
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Merci pour votre message. Notre équipe vous répondra dans les
                plus brefs délais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-[#ea532b]/10 px-6 py-3 rounded-lg">
                  <span className="text-[#ea532b] font-semibold">
                    ⚡ Réponse sous 24h
                  </span>
                </div>
                <div className="bg-[#ea532b]/10 px-6 py-3 rounded-lg">
                  <span className="text-[#ea532b] font-semibold">
                    📧 Email de confirmation envoyé
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
                💬 NOUS SOMMES LÀ POUR VOUS 
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Contactez nos
                <span className="text-[#ea532b]"> experts</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-gray-200">
                Notre équipe d'experts SIRH est à votre disposition pour
                répondre à toutes vos questions et vous accompagner dans votre
                transformation digitale RH.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ea532b] mb-2">
                    24h
                  </div>
                  <div className="text-sm text-gray-300">Délai de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ea532b] mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-300">
                    Satisfaction client
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ea532b] mb-2">
                    5★
                  </div>
                  <div className="text-sm text-gray-300">
                    Note moyenne support
                  </div>
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

        {/* Contact Form & Info */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Formulaire de contact */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#2f365b] mb-4">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-gray-600">
                      Remplissez le formulaire ci-dessous et nous vous
                      répondrons rapidement.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nom et Prénom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                          Nom *
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    {/* Email et Téléphone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                          <Mail className="h-4 w-4 inline mr-2 text-[#ea532b]" />
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                          placeholder="votre.email@entreprise.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                          <Phone className="h-4 w-4 inline mr-2 text-[#ea532b]" />
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                          placeholder="+227 XX XX XX XX"
                        />
                      </div>
                    </div>

                    {/* Entreprise et Poste */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                          <Building className="h-4 w-4 inline mr-2 text-[#ea532b]" />
                          Entreprise
                        </label>
                        <input
                          type="text"
                          name="entreprise"
                          value={formData.entreprise}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                          Poste
                        </label>
                        <input
                          type="text"
                          name="poste"
                          value={formData.poste}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                          placeholder="Votre fonction"
                        />
                      </div>
                    </div>

                    {/* Sujet */}
                    <div>
                      <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                        Sujet de votre demande *
                      </label>
                      <select
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors bg-white"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="demo">Demande de démonstration</option>
                        <option value="devis">Demande de devis</option>
                        <option value="support">Support technique</option>
                        <option value="formation">Formation</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                        Votre message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors resize-none"
                        placeholder="Décrivez votre demande, vos besoins ou posez votre question..."
                      ></textarea>
                    </div>

                    {/* Consentement */}
                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <input
                        type="checkbox"
                        id="consentement"
                        name="consentement"
                        checked={formData.consentement}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b] mt-1"
                      />
                      <label
                        htmlFor="consentement"
                        className="text-sm text-gray-700 leading-relaxed"
                      >
                        J'accepte que mes données personnelles soient utilisées
                        pour traiter ma demande. Vous pouvez consulter notre{" "}
                        <span className="text-[#ea532b] underline cursor-pointer">
                          politique de confidentialité
                        </span>
                        .
                      </label>
                    </div>

                    {/* Bouton d'envoi */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.consentement}
                      className="w-full flex items-center justify-center cursor-pointer px-7 py-3 bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white font-semibold rounded-full hover:from-[#d64a27] hover:to-[#c43f24] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Informations de contact */}
              <div className="space-y-8">
                {/* Coordonnées */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-[#2f365b] mb-6">
                    Nos coordonnées
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:border-[#ea532b]/30 transition-colors"
                        >
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#2f365b] mb-1">
                              {contact.title}
                            </h4>
                            <p className="text-[#ea532b] font-medium mb-1">
                              {contact.info}
                            </p>
                            <p className="text-sm text-gray-600">
                              {contact.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Horaires */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-[#2f365b] mb-6 flex items-center">
                    <Clock className="h-6 w-6 text-[#ea532b] mr-2" />
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-semibold text-[#2f365b]">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Types de support */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-[#2f365b] mb-6">
                    Types de support
                  </h3>
                  <div className="space-y-4">
                    {supportTypes.map((support, index) => {
                      const Icon = support.icon;
                      return (
                        <div
                          key={index}
                          className="p-4 rounded-lg border border-gray-100 hover:border-[#ea532b]/30 transition-colors"
                        >
                          <div className="flex items-center mb-2">
                            <Icon className="h-5 w-5 text-[#ea532b] mr-2" />
                            <h4 className="font-semibold text-[#2f365b]">
                              {support.title}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {support.description}
                          </p>
                          <span className="inline-block px-3 py-1 bg-[#ea532b]/10 text-[#ea532b] text-xs font-medium rounded-full">
                            Réponse {support.response}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'une réponse immédiate ?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Notre équipe support est disponible pour répondre à vos questions
              urgentes et vous accompagner dans l'utilisation de votre SIRH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/demo")}
                className="inline-flex items-center cursor-pointer px-7 py-3 bg-[#ea532b] text-white font-semibold rounded-full hover:bg-[#d64a27] transition-colors group"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Planifier une démo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NousContacter;
