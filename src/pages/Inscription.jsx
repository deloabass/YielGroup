import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Building, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Inscription() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    poste: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    newsletter: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation basique
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      setLoading(false);
      return;
    }

    if (!formData.acceptTerms) {
      setError("Vous devez accepter les conditions d'utilisation");
      setLoading(false);
      return;
    }

    // Simulation d'inscription
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/log-in";
      }, 2000);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Inscription réussie !</h2>
          <p className="text-gray-600 mb-4">
            Votre compte a été créé avec succès. Vous allez être redirigé vers la page de connexion.
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ea532b] mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row shadow-xl rounded-2xl overflow-hidden">
          {/* Partie gauche (branding) */}
          <div className="bg-[#2f365b] text-white w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-8">
                <img src="/logo.webp" alt="YIEL Logo" className="h-12 w-auto mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Rejoignez YIEL</h1>
                <p className="text-gray-300 text-lg">Créez votre compte et transformez votre gestion RH</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-[#ea532b]">Pourquoi choisir YIEL ?</h2>
                <ul className="space-y-3">
                  {[
                    "Solution SIRH complète et intuitive",
                    "Adaptée aux réalités africaines",
                    "Support client réactif 24/7",
                    "Sécurité et conformité garanties",
                    "Interface mobile-friendly",
                    "Intégration facile avec vos outils"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-[#ea532b] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Formes décoratives */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ea532b]/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#ea532b]/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          {/* Partie droite (formulaire) */}
          <div className="bg-white w-full lg:w-1/2 p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#2f365b] mb-2">Créer un compte</h2>
              <p className="text-gray-600">
                Remplissez le formulaire pour créer votre compte YIEL
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b]"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b]"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email professionnel *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b]"
                    placeholder="nom@entreprise.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b]"
                      placeholder="+237 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="entreprise"
                      name="entreprise"
                      type="text"
                      required
                      value={formData.entreprise}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b]"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="poste" className="block text-sm font-medium text-gray-700 mb-1">
                  Poste/Fonction *
                </label>
                <input
                  id="poste"
                  name="poste"
                  type="text"
                  required
                  value={formData.poste}
                  onChange={handleChange}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b]"
                  placeholder="Votre fonction dans l'entreprise"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b]"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmer le mot de passe *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b]"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#ea532b] focus:ring-[#ea532b] border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                    J'accepte les{" "}
                    <Link to="/mentions-legale" className="text-[#ea532b] hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link to="/politique-de-confidentialite" className="text-[#ea532b] hover:underline">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#ea532b] focus:ring-[#ea532b] border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    Je souhaite recevoir la newsletter YIEL avec les dernières actualités RH
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ea532b] hover:bg-[#d44620] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ea532b] ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Création du compte...
                  </>
                ) : (
                  "Créer mon compte"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Vous avez déjà un compte ?{" "}
                <Link to="/log-in" className="font-medium text-[#ea532b] hover:text-[#d44620]">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inscription;