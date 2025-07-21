import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Eye, EyeOff, Mail, Lock, AlertCircle, Coffee, User } from "lucide-react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginMethod, setLoginMethod] = useState("email"); // "email" ou "employee_id"
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Simulation d'une vérification de connexion
    setTimeout(() => {
      setLoading(false);
      // Pour la démonstration, on simule une erreur si les champs sont vides
      if ((loginMethod === "email" && (!email || !password)) || 
          (loginMethod === "employee_id" && (!employeeId || !password))) {
        setError("Identifiants incorrects. Veuillez réessayer.");
      } else {
        // Redirection après connexion réussie
        window.location.href = "/";
      }
    }, 1500);
  };

  // Animation de la connexion réussie
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleDemoLogin = () => {
    setEmail("demo@yiel.fr");
    setPassword("demo123");
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- HEADER --- */}
      {/* <Header /> */}
      
      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow flex items-center justify-center px-4 py-10 md:py-20">
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row shadow-xl rounded-2xl overflow-hidden">
          {/* Partie gauche (image/branding) */}
          <div className="bg-[#2f365b] text-white w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-12">
                <img 
                  src="/logo.webp" 
                  alt="YIEL Logo" 
                  className="h-12 w-auto mb-4"
                />
                <h1 className="text-3xl md:text-4xl font-bold mb-2">YIEL</h1>
                <p className="text-gray-300 text-lg">Système d'Information RH</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Accédez à votre espace personnel</h2>
                <p className="text-gray-300 leading-relaxed">
                  Gérez vos collaborateurs, suivez les congés, consultez les bulletins de paie et accédez à toutes les fonctionnalités RH depuis une interface unique.
                </p>
              </div>
              
              <div className="hidden md:block">
                <h3 className="font-semibold mb-3 text-[#ea532b]">Les fonctionnalités qui vous attendent</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Gestion des congés et absences",
                    "Dossiers salariés digitalisés",
                    "Notes de frais simplifiées",
                    "Bulletins de paie dématérialisés",
                    "Suivi des formations",
                    "Entretiens annuels"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-[#ea532b]"></div>
                      <span>{feature}</span>
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
          <div className="bg-white w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
            {loginSuccess ? (
              <div className="flex flex-col items-center justify-center space-y-6 py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Connexion réussie !</h2>
                <p className="text-gray-600 text-center">Redirection vers votre tableau de bord...</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-2">Connexion</h2>
                  <p className="text-gray-600">
                    Bienvenue ! Connectez-vous pour accéder à votre espace personnel.
                  </p>
                </div>

                {/* Tabs pour méthode de connexion */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    className={`py-2 px-4 ${loginMethod === "email" ? "text-[#ea532b] border-b-2 border-[#ea532b] font-medium" : "text-gray-500"}`}
                    onClick={() => setLoginMethod("email")}
                  >
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>Email</span>
                    </div>
                  </button>
                  <button
                    className={`py-2 px-4 ${loginMethod === "employee_id" ? "text-[#ea532b] border-b-2 border-[#ea532b] font-medium" : "text-gray-500"}`}
                    onClick={() => setLoginMethod("employee_id")}
                  >
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>ID Employé</span>
                    </div>
                  </button>
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
                  {loginMethod === "email" ? (
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Adresse email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b] sm:text-sm"
                          placeholder="nom@entreprise.com"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label htmlFor="employee_id" className="block text-sm font-medium text-gray-700">
                        Identifiant employé
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="employee_id"
                          type="text"
                          value={employeeId}
                          onChange={(e) => setEmployeeId(e.target.value)}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b] sm:text-sm"
                          placeholder="EMP-12345"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Mot de passe
                      </label>
                      <a href="#" className="text-sm font-medium text-[#ea532b] hover:text-[#d44620]">
                        Mot de passe oublié ?
                      </a>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#ea532b] focus:border-[#ea532b] sm:text-sm"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-[#ea532b] focus:ring-[#ea532b] border-gray-300 accent-[#ea532b] rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Se souvenir de moi
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ea532b] hover:bg-[#d44620] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ea532b] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Connexion en cours...
                        </>
                      ) : (
                        "Se connecter"
                      )}
                    </button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">ou</span>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleDemoLogin}
                      className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-[#2f365b] rounded-md shadow-sm text-sm font-medium text-[#2f365b] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2f365b]"
                    >
                      <Coffee className="h-5 w-5" />
                      Accès démo rapide
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <p className="text-center text-sm text-gray-600">
                    Pas encore de compte ?{' '}
                    <a href="#" className="font-medium text-[#ea532b] hover:text-[#d44620]">
                      Contactez votre service RH
                    </a>
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Problèmes de connexion ?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="#" className="text-xs text-[#2f365b] hover:text-[#ea532b] flex items-center">
                      <span className="bg-gray-100 rounded-full p-1 mr-2">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zm1 11h-2v2h2v-2zm0-8h-2v6h2V7z"/>
                        </svg>
                      </span>
                      Problème technique ?
                    </a>
                    <a href="#" className="text-xs text-[#2f365b] hover:text-[#ea532b] flex items-center">
                      <span className="bg-gray-100 rounded-full p-1 mr-2">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zm-1 16h2v-2h-2v2zm2-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5-.67 1.5-1.5c0-1.38-1.12-2.5-2.5-2.5-1.23 0-2.28.9-2.45 2.08l1.97.35c.04-.29.29-.5.58-.5.33 0 .6.27.6.6 0 .33-.27.6-.6.6-.93 0-1.7.76-1.7 1.7V15h2z"/>
                        </svg>
                      </span>
                      Questions fréquentes
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      {/* --- FOOTER --- */}
      {/* <Footer /> */}
    </div>
  );
}

export default LogIn;