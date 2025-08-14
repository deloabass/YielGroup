import React, { useState, useRef } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Users, 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Calendar, 
  Clock, 
  FileText, 
  Target,
  BookOpen,
  BarChart3,
  Shield,
  Zap,
  Star,
  Play
} from "lucide-react";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const topRef = useRef(null);
  const [formData, setFormData] = useState({
    modules_interesses: [],
    taille_entreprise: "",
    sujet: "",
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    poste: "",
    localisation: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleModuleToggle = (module) => {
    const isSelected = formData.modules_interesses.includes(module);
    if (isSelected) {
      setFormData({
        ...formData,
        modules_interesses: formData.modules_interesses.filter(
          (m) => m !== module
        ),
      });
    } else {
      setFormData({
        ...formData,
        modules_interesses: [...formData.modules_interesses, module],
      });
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    alert("Merci pour votre demande de démo ! Nous vous contacterons sous 24h.");
  };

  const modules = [
    {
      id: "gestion-carrieres",
      name: "Gestion de carrière",
      icon: Target,
      description: "Suivez l'évolution professionnelle de vos collaborateurs",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "conges-absences",
      name: "Congés et absences",
      icon: Calendar,
      description: "Planifiez et gérez les congés en toute simplicité",
      color: "from-green-500 to-green-600"
    },
    {
      id: "notes-frais",
      name: "Notes de frais",
      icon: FileText,
      description: "Dématérialisez vos notes de frais",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "planning",
      name: "Planning",
      icon: Clock,
      description: "Optimisez l'organisation du temps de travail",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "pointage",
      name: "Pointage",
      icon: BarChart3,
      description: "Suivez les temps de présence en temps réel",
      color: "from-red-500 to-red-600"
    },
    {
      id: "recrutement",
      name: "Recrutement",
      icon: Users,
      description: "Streamline votre processus de recrutement",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: "formations",
      name: "Formations",
      icon: BookOpen,
      description: "Gérez et planifiez les formations de vos équipes",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const renderProgressBar = () => {
    const steps = [
      { id: 1, name: "MODULES", icon: Zap },
      { id: 2, name: "SOCIÉTÉ", icon: Building },
      { id: 3, name: "CONTACT", icon: Mail }
    ];
    
    return (
      <div className="w-full mb-12">
        <div className="flex justify-center items-center space-x-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300 ${
                    step.id <= currentStep
                      ? "bg-gradient-to-r from-[#ea532b] to-[#d64a27] border-[#ea532b] text-white shadow-lg"
                      : "border-gray-300 text-gray-400 bg-white"
                  }`}
                >
                  {step.id < currentStep ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </div>
                <span
                  className={`text-sm mt-3 font-semibold transition-colors duration-300 ${
                    step.id <= currentStep ? "text-[#ea532b]" : "text-gray-400"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-24 h-1 mx-6 rounded-full transition-colors duration-300 ${
                    step.id < currentStep ? "bg-gradient-to-r from-[#ea532b] to-[#d64a27]" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
          Sélectionnez les <span className="text-[#ea532b]">modules</span> qui vous intéressent
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sélectionnez les modules en cliquant dessus afin que nous puissions en savoir
          plus sur vos besoins et réaliser une démonstration personnalisée.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {modules.map((module) => {
          const Icon = module.icon;
          const isSelected = formData.modules_interesses.includes(module.id);
          
          return (
            <div
              key={module.id}
              onClick={() => handleModuleToggle(module.id)}
              className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 group hover:scale-105 ${
                isSelected
                  ? "border-[#ea532b] bg-gradient-to-br from-[#ea532b]/10 to-[#d64a27]/5 shadow-lg"
                  : "border-gray-200 bg-white hover:border-[#ea532b]/30 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white"
                      : `bg-gradient-to-r ${module.color} text-white group-hover:scale-110`
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-[#ea532b] border-[#ea532b]"
                      : "border-gray-300 group-hover:border-[#ea532b]"
                  }`}
                >
                  {isSelected && <CheckCircle className="h-4 w-4 text-white" />}
                </div>
              </div>
              
              <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                isSelected ? "text-[#ea532b]" : "text-[#2f365b] group-hover:text-[#ea532b]"
              }`}>
                {module.name}
              </h3>
              
              <p className="text-sm text-gray-600">
                {module.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
          Combien d'employés compte votre <span className="text-[#ea532b]">entreprise</span> ?
        </h2>
        <p className="text-lg text-gray-600">
          Pour se faire une idée du volume de données à traiter et vous proposer la solution la plus adaptée
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {[
          { value: "1-9", label: "1 - 9 employés", desc: "TPE - Solution starter" },
          { value: "10-29", label: "10 - 29 employés", desc: "PME - Solution standard" },
          { value: "30-99", label: "30 - 99 employés", desc: "Entreprise - Solution avancée" },
          { value: "100-499", label: "100 - 499 employés", desc: "Grande entreprise - Solution premium" },
          { value: "500+", label: "500+ employés", desc: "Groupe - Solution enterprise" },
        ].map((option) => (
          <label
            key={option.value}
            className={`flex items-center justify-between p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] group ${
              formData.taille_entreprise === option.value
                ? "border-[#ea532b] bg-gradient-to-r from-[#ea532b]/10 to-[#d64a27]/5 shadow-lg"
                : "border-gray-200 bg-white hover:border-[#ea532b]/30 hover:shadow-md"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  formData.taille_entreprise === option.value
                    ? "bg-[#ea532b] border-[#ea532b]"
                    : "border-gray-300 group-hover:border-[#ea532b]"
                }`}
              >
                {formData.taille_entreprise === option.value && (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>
              <div>
                <div className={`text-lg font-semibold transition-colors duration-300 ${
                  formData.taille_entreprise === option.value ? "text-[#ea532b]" : "text-[#2f365b]"
                }`}>
                  {option.label}
                </div>
                <div className="text-sm text-gray-600">{option.desc}</div>
              </div>
            </div>
            <Users className={`h-8 w-8 transition-colors duration-300 ${
              formData.taille_entreprise === option.value ? "text-[#ea532b]" : "text-gray-400"
            }`} />
            <input
              type="radio"
              name="taille_entreprise"
              value={option.value}
              checked={formData.taille_entreprise === option.value}
              onChange={handleChange}
              className="hidden"
            />
          </label>
        ))}
      </div>

      {/* Avantages par taille */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[#2f365b] mb-4 flex items-center">
          <Star className="h-6 w-6 text-[#ea532b] mr-2" />
          Pourquoi cette information ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-gray-700">
            <CheckCircle className="h-4 w-4 text-[#ea532b] mr-2" />
            Dimensionnement optimal
          </div>
          <div className="flex items-center text-gray-700">
            <CheckCircle className="h-4 w-4 text-[#ea532b] mr-2" />
            Tarification adaptée
          </div>
          <div className="flex items-center text-gray-700">
            <CheckCircle className="h-4 w-4 text-[#ea532b] mr-2" />
            Fonctionnalités ciblées
          </div>
          <div className="flex items-center text-gray-700">
            <CheckCircle className="h-4 w-4 text-[#ea532b] mr-2" />
            Support personnalisé
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
          Veuillez saisir vos <span className="text-[#ea532b]">informations</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ces données seront uniquement utilisées dans le but de vous fournir la
          démonstration la plus adaptée à vos besoins.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sujet */}
          <div>
            <label className="block text-sm font-semibold text-[#2f365b] mb-3">
              <Mail className="h-4 w-4 inline mr-2 text-[#ea532b]" />
              Sujet du message
            </label>
            <select
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors bg-white"
              required
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="demo">Demande de démo personnalisée</option>
              <option value="information">Demande d'information</option>
              <option value="devis">Demande de devis</option>
              <option value="autre">Autre sujet</option>
            </select>
          </div>

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
                placeholder="Entrez votre prénom"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                required
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
                placeholder="Entrez votre nom"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                required
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
                placeholder="votre.email@entreprise.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                <Phone className="h-4 w-4 inline mr-2 text-[#ea532b]" />
                Numéro de téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+227 XX XX XX XX"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
              />
            </div>
          </div>

          {/* Entreprise et Poste */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                <Building className="h-4 w-4 inline mr-2 text-[#ea532b]" />
                Nom de l'entreprise *
              </label>
              <input
                type="text"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                placeholder="Nom de votre entreprise"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2f365b] mb-3">
                Poste que vous occupez *
              </label>
              <input
                type="text"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                placeholder="Ex: DRH, Responsable RH..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors"
                required
              />
            </div>
          </div>

          {/* Localisation */}
          <div>
            <label className="block text-sm font-semibold text-[#2f365b] mb-3">
              <MapPin className="h-4 w-4 inline mr-2 text-[#ea532b]" />
              Localisation de votre entreprise
            </label>
            <select
              name="localisation"
              value={formData.localisation}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors bg-white"
              required
            >
              <option value="">Sélectionnez le pays de votre entreprise</option>
              <option value="niger">Niger</option>
              <option value="burkina">Burkina Faso</option>
              <option value="mali">Mali</option>
              <option value="senegal">Sénégal</option>
              <option value="cote-ivoire">Côte d'Ivoire</option>
              <option value="benin">Bénin</option>
              <option value="togo">Togo</option>
              <option value="ghana">Ghana</option>
              <option value="nigeria">Nigeria</option>
              <option value="cameroun">Cameroun</option>
              <option value="autre-afrique">Autre pays africain</option>
              <option value="france">France</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#2f365b] mb-3">
              Message (optionnel)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez-nous vos besoins spécifiques, vos enjeux actuels ou toute question particulière..."
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] transition-colors resize-none"
            ></textarea>
          </div>

          {/* Résumé de la sélection */}
          {formData.modules_interesses.length > 0 && (
            <div className="bg-gradient-to-r from-[#ea532b]/10 to-[#d64a27]/5 border border-[#ea532b]/20 rounded-xl p-6">
              <h4 className="font-semibold text-[#2f365b] mb-3 flex items-center">
                <Zap className="h-5 w-5 text-[#ea532b] mr-2" />
                Modules sélectionnés ({formData.modules_interesses.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {formData.modules_interesses.map(moduleId => {
                  const module = modules.find(m => m.id === moduleId);
                  return module ? (
                    <span key={moduleId} className="px-3 py-1 bg-[#ea532b] text-white text-sm rounded-full">
                      {module.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Consentement */}
          <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
            <input
              type="checkbox"
              id="consent"
              required
              className="w-5 h-5 text-[#ea532b] border-gray-300 rounded focus:ring-[#ea532b] accent-[#ea532b] mt-1"
            />
            <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
              En cochant cette case, je déclare avoir pris connaissance et accepter sans réserve les{" "}
              <span className="text-[#ea532b] underline font-medium cursor-pointer">Mentions légales</span> ainsi que la{" "}
              <span className="text-[#ea532b] underline font-medium cursor-pointer">Politique de confidentialité des données</span>. 
              Je consens à être recontacté(e) pour une démonstration personnalisée.
            </label>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
      {/* Hero Section */}


      {/* Progress Bar */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderProgressBar()}
          </div>
      </section>

      {/* Formulaire principal */}
      <section className="flex-1 py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>
      </section>

      {/* Boutons de navigation */}
      <section className="bg-white border-t border-gray-200 py-8">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-8 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:border-[#ea532b] hover:text-[#ea532b] transition-all duration-300 group"
                >
                  <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Retour
                </button>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && formData.modules_interesses.length === 0) ||
                    (currentStep === 2 && !formData.taille_entreprise)
                  }
                  className="flex items-center px-8 py-3 bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white font-semibold rounded-lg hover:from-[#d64a27] hover:to-[#c43f24] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group shadow-lg"
                >
                  Continuer
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex items-center px-8 py-3 bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white font-semibold rounded-lg hover:from-[#d64a27] hover:to-[#c43f24] transition-all duration-300 group shadow-lg"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Envoyer ma demande
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;