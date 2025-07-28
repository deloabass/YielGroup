import React, { useRef, useState } from "react";
import {
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle,
  Building,
  User,
  Mail,
  Phone,
  Briefcase,
  Users,
  ChevronRight,
} from "lucide-react";
import Header from "../components/Header";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

Header;

const Demo = () => {
  const topRef = useRef(null);
  useScrollToTop(topRef);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    poste: "",
    taille_entreprise: "",
    modules_interesses: [],
    date_preferee: "",
    heure_preferee: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        modules_interesses: [...formData.modules_interesses, value],
      });
    } else {
      setFormData({
        ...formData,
        modules_interesses: formData.modules_interesses.filter(
          (module) => module !== value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    console.log("Formulaire soumis:", formData);
    setFormSubmitted(true);

    // Réinitialiser le formulaire après quelques secondes
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
        poste: "",
        taille_entreprise: "",
        modules_interesses: [],
        date_preferee: "",
        heure_preferee: "",
        message: "",
      });
    }, 5000);
  };
  const faqs = [
    {
      id: 1,
      question: "Combien de temps dure une démonstration ?",
      answer:
        "Une démonstration dure généralement entre 30 et 45 minutes, selon vos besoins et vos questions. Nous adaptons le contenu à vos priorités pour maximiser la valeur de ce temps.",
    },
    {
      id: 2,
      question: "Comment se déroule la démo ?",
      answer:
        "La démonstration se fait en visioconférence. Vous recevrez un lien de connexion après avoir planifié le rendez-vous. Un de nos experts vous guidera à travers notre solution en fonction de vos besoins spécifiques.",
    },
    {
      id: 3,
      question: "La démonstration est-elle gratuite ?",
      answer:
        "Oui, la démonstration est totalement gratuite et sans engagement. Notre objectif est de vous montrer comment notre SIRH peut répondre à vos besoins RH spécifiques.",
    },
    {
      id: 4,
      question: "Puis-je inviter des collègues à la démonstration ?",
      answer:
        "Bien sûr ! Nous recommandons même d'inviter tous les décideurs concernés par le projet. Précisez-le simplement dans le formulaire ou informez-nous après votre inscription.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" id="demo" ref={topRef}>
      <Header />

      {/* Hero section */}
      <section
        id="hero"
        className="relative pt-28 pb-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
            Démo
          </span>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Découvrez YIEL en action
            </h1>
            <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
              Planifiez une démonstration personnalisée avec un de nos experts
              RH
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
                <li className="text-[#ea532b] font-medium">Démo</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Partie gauche: Info sur la démo */}
              <div className="md:w-2/5 bg-[#2f365b] p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">
                  Pourquoi demander une démo ?
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Calendar size={20} className="mr-2 text-[#ea532b]" />
                    Une solution adaptée
                  </h3>
                  <p className="text-gray-300">
                    Découvrez comment YIEL peut s'adapter parfaitement à vos
                    besoins RH spécifiques.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Clock size={20} className="mr-2 text-[#ea532b]" />
                    Rapide et efficace
                  </h3>
                  <p className="text-gray-300">
                    En 30 minutes seulement, comprenez la valeur ajoutée de
                    notre solution pour votre entreprise.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Users size={20} className="mr-2 text-[#ea532b]" />
                    Experts RH à votre écoute
                  </h3>
                  <p className="text-gray-300">
                    Nos consultants experts répondront à toutes vos questions et
                    vous guideront à chaque étape.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <MessageSquare size={20} className="mr-2 text-[#ea532b]" />
                    Conseils personnalisés
                  </h3>
                  <p className="text-gray-300">
                    Recevez des conseils adaptés à votre secteur d'activité et à
                    la taille de votre entreprise.
                  </p>
                </div>
              </div>

              {/* Partie droite: Formulaire */}
              <div className="md:w-3/5 p-8">
                <h2 className="text-2xl font-bold text-[#2f365b] mb-6">
                  Planifiez votre démonstration
                </h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle
                      size={48}
                      className="text-green-500 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      Demande envoyée avec succès !
                    </h3>
                    <p className="text-gray-700">
                      Nous avons bien reçu votre demande de démonstration. Un de
                      nos experts vous contactera très prochainement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="prenom"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Prénom *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                            <User size={18} />
                          </span>
                          <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                            placeholder="Votre prénom"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="nom"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nom *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                            <User size={18} />
                          </span>
                          <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email professionnel *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                            <Mail size={18} />
                          </span>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                            placeholder="votreemail@entreprise.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="telephone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Téléphone
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                            <Phone size={18} />
                          </span>
                          <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="pl-10 w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                            placeholder="+33 6 10 14 07 71"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="entreprise"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Entreprise *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                            <Building size={18} />
                          </span>
                          <input
                            type="text"
                            id="entreprise"
                            name="entreprise"
                            value={formData.entreprise}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                            placeholder="Nom de votre entreprise"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="poste"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Poste *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                            <Briefcase size={18} />
                          </span>
                          <input
                            type="text"
                            id="poste"
                            name="poste"
                            value={formData.poste}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                            placeholder="Votre fonction"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="taille_entreprise"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Taille de l'entreprise *
                        </label>
                        <select
                          id="taille_entreprise"
                          name="taille_entreprise"
                          value={formData.taille_entreprise}
                          onChange={handleChange}
                          required
                          className="w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        >
                          <option value="" className="text-gray-300">
                            Sélectionnez une option
                          </option>
                          <option value="1-10">1 à 10 employés</option>
                          <option value="11-50">11 à 50 employés</option>
                          <option value="51-200">51 à 200 employés</option>
                          <option value="201-500">201 à 500 employés</option>
                          <option value="501-1000">501 à 1000 employés</option>
                          <option value="1000+">Plus de 1000 employés</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="date_preferee"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Date préférée pour la démo
                        </label>
                        <input
                          type="date"
                          id="date_preferee"
                          name="date_preferee"
                          value={formData.date_preferee}
                          onChange={handleChange}
                          className="w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="block text-sm font-medium text-gray-700 mb-3">
                        Modules qui vous intéressent * (au moins un)
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="modules_interesses"
                            value="Core"
                            checked={formData.modules_interesses.includes(
                              "Core"
                            )}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b]"
                          />
                          <span className="text-sm">Core</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="modules_interesses"
                            value="Expertise"
                            checked={formData.modules_interesses.includes(
                              "Expertise"
                            )}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b]"
                          />
                          <span className="text-sm">Expertise</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="modules_interesses"
                            value="Talents"
                            checked={formData.modules_interesses.includes(
                              "Talents"
                            )}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b]"
                          />
                          <span className="text-sm">Talents</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="modules_interesses"
                            value="Learn"
                            checked={formData.modules_interesses.includes(
                              "Learn"
                            )}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b]"
                          />
                          <span className="text-sm">Learn</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="modules_interesses"
                            value="Sign"
                            checked={formData.modules_interesses.includes(
                              "Sign"
                            )}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b]"
                          />
                          <span className="text-sm">Sign</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="modules_interesses"
                            value="Recrute"
                            checked={formData.modules_interesses.includes(
                              "Recrute"
                            )}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b]"
                          />
                          <span className="text-sm">Recrute</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="modules_interesses"
                            value="Time"
                            checked={formData.modules_interesses.includes(
                              "Time"
                            )}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b]"
                          />
                          <span className="text-sm">Time</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message (optionnel)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full placeholder-gray-300 rounded-lg border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        placeholder="Précisez vos besoins ou vos questions..."
                      />
                    </div>

                    <div className="flex justify-center mt-8">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-[#ea532b] hover:bg-[#d44620] text-white font-medium rounded-full transition-colors flex items-center"
                      >
                        Demander ma démo personnalisée
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      En soumettant ce formulaire, vous acceptez notre politique
                      de confidentialité. Nous respectons le RGPD et ne
                      partageons pas vos données.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2f365b] mb-12">
            Ils nous font confiance
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/50/50"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Marie Laurent</h4>
                  <p className="text-sm text-gray-600">DRH, Société Générale</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Grâce à YIEL, nous avons pu digitaliser entièrement notre
                processus RH. L'adoption par nos équipes a été rapide et les
                gains de productivité sont réels."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/50/50"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Thomas Durand</h4>
                  <p className="text-sm text-gray-600">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Le module Recrute nous a permis d'optimiser notre processus de
                recrutement. L'interface intuitive et le suivi des candidats ont
                révolutionné notre approche."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/50/50"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sophie Moreau</h4>
                  <p className="text-sm text-gray-600">
                    Responsable RH, Carrefour
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                "La solution YIEL nous a fait gagner un temps précieux dans la
                gestion des congés et des absences. Le support client est
                réactif et à l'écoute de nos besoins."
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <FAQ faqs={faqs} />

      {/* Call to Action */}
      <section className="py-12 bg-[#2f365b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à transformer votre gestion RH ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises qui ont déjà fait confiance à YIEL pour
            optimiser leurs processus RH
          </p>
          <a
            href="#demo"
            className="px-8 py-3 bg-[#ea532b] hover:bg-[#d44620] text-white font-medium rounded-full transition-colors inline-flex items-center"
          >
            Demander une démo maintenant
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Demo;
