import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import BlogRH from "./pages/BlogRH";
import DevenezYieler from "./pages/DevenezYieler";
import LogIn from "./pages/LogIn";

import NosPartenaires from "./pages/NosPartenaires";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Mentionslegale from "./pages/Mentionslegale";
import NotreHistoire from "./pages/NotreHistoire";
import NosSolution from "./pages/NosSolution";
import FAQ from "./components/FAQ";
import Core from "./pages/Core";
import Expense from "./pages/Expense";
import ConseilTransformationRH from "./pages/ConseilTransformationRH";
import HrAnalytics from "./pages/HrAnalytics";
import RecrutementSurMesure from "./pages/RecrutementSurMesure";
import ParcoursCollaborateur from "./pages/ParcoursCollaborateur";
import SolutionsDigitales from "./pages/SolutionsDigitales";
import Talents from "./pages/Talents";
import Learn from "./pages/Learn";
import Sign from "./pages/Sign";
import Recrute from "./pages/Recrute";
import Temps from "./pages/Temps";
import NosValeurs from "./pages/NosValeurs";
import TeamsYIELERS from "./pages/TeamsYIELERS";
import NousContacter from "./pages/NousContacter";
import NosMetiers from "./pages/NosMetiers";
import CentreDaideFAQ from "./pages/CentreDaideFAQ";
import CalculateurROI from "./pages/CalculateurROI";
import NosClients from "./pages/NosClients";
import VoixNotreBlogRH from "./pages/VoixNotreBlogRH";
import CookieConsent from "./CookieConsent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/blog-rh" element={<BlogRH />} />
        <Route path="/devenez-yieler" element={<DevenezYieler />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/partenaires" element={<NosPartenaires />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/mentions-legale" element={<Mentionslegale />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
        <Route path="/valeurs" element={<NosValeurs />} />
        <Route path="/equipe" element={<TeamsYIELERS />} />
        <Route path="/contact" element={<NousContacter />} />
        <Route path="/metiers" element={<NosMetiers />} />
        <Route path="/aide" element={<CentreDaideFAQ />} />
        <Route path="/calculateur" element={<CalculateurROI />} />
        <Route path="/clients" element={<NosClients />} />
        <Route path="/voix" element={<VoixNotreBlogRH />} />
        {/* revoir cette composent là  nos-solution */}
        <Route path="/nos-solution" element={<NosSolution />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/core" element={<Core />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/recrute" element={<Recrute />} />
        <Route path="/time" element={<Temps />} />
        <Route path="/conseil-en-transformation-RH" element={<ConseilTransformationRH />} />
        <Route path="/analytics-HR" element={<HrAnalytics />} />
        <Route path="/recrutement-sur-mesure" element={<RecrutementSurMesure />} />
        <Route path="/pilotage-du-parcours-collaborateur" element={<ParcoursCollaborateur />} />
        <Route path="/solutions-digitales-RH" element={<SolutionsDigitales />} />
        <Route path="/cookies" element={<SolutionsDigitales />} />
      </Routes>
      <CookieConsent />
    </Router>
  );
}

export default App;



// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// import {
//   Users,
//   Calendar,
//   Clock,
//   Briefcase,
//   Award,
//   ChartBar,
//   ChevronRight,
//   ArrowRight,
//   CheckCircle,
//   UserCog,
//   UserPlus,
//   FileText,
//   Database,
//   Play,
//   Settings,
//   BarChart2,
//   Shield,
//   Target,
//   Star,
//   PlusCircle,
//   Smartphone,
//   Monitor,
//   Laptop,
// } from 'lucide-react';

// function Core() {
//   const [activeTab, setActiveTab] = useState('timesheet');
//   const [isVisible, setIsVisible] = useState({});

//   // Animation au scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible((prev) => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting,
//           }));
//         });
//       },
//       { threshold: 0.15 }
//     );

//     // Observer toutes les sections
//     document.querySelectorAll('section[id]').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Fonctionnalités SIRH
//   const features = [
//     {
//       id: 'timesheet',
//       title: 'Gestion des temps',
//       description: 'Gérez efficacement le temps de travail, les congés et les absences de vos équipes.',
//       icon: <Clock size={24} />,
//       color: 'bg-blue-100',
//       textColor: 'text-blue-600',
//       image: "/api/placeholder/600/400",
//       benefits: [
//         'Pointage simplifié avec géolocalisation optionnelle',
//         'Demandes de congés et validation en quelques clics',
//         'Planification intuitive des équipes',
//         `Rapports d'activité personnalisables`,
//         `Respect des conventions collectives et réglementations locales`
//       ]
//     },
//     {
//       id: 'recruitment',
//       title: 'Recrutement & Onboarding',
//       description: 'Attirez et intégrez les meilleurs talents avec un processus optimal.',
//       icon: <UserPlus size={24} />,
//       color: 'bg-green-100',
//       textColor: 'text-green-600',
//       image: "/api/placeholder/600/400",
//       benefits: [
//         `Diffusion multi-canaux des offres d'emploi`,
//         'Suivi des candidatures et entretiens centralisé',
//         `Parcours d'intégration personnalisé`,
//         `Signatures électroniques des contrats`,
//         `Enquêtes de satisfaction post-intégration`
//       ]
//     },
//     {
//       id: 'payroll',
//       title: 'Paie & Administration',
//       description: 'Simplifiez votre gestion administrative et assurez des paies précises.',
//       icon: <FileText size={24} />,
//       color: 'bg-purple-100',
//       textColor: 'text-purple-600',
//       image: "/api/placeholder/600/400",
//       benefits: [
//         'Calculs de paie automatisés et fiables',
//         'Gestion des avantages et primes',
//         'Génération des déclarations sociales',
//         'Coffre-fort numérique pour bulletins de salaire',
//         'Conformité légale dans plusieurs pays africains'
//       ]
//     },
//     {
//       id: 'performance',
//       title: 'Performance & Développement',
//       description: 'Suivez et optimisez la performance de vos équipes et leur développement.',
//       icon: <ChartBar size={24} />,
//       color: 'bg-yellow-100',
//       textColor: 'text-yellow-600',
//       image: "/api/placeholder/600/400",
//       benefits: [
//         'Entretiens annuels et feedback continu',
//         'Objectifs individuels et collectifs',
//         'Plans de développement personnalisés',
//         'Suivi des certifications et formations',
//         'Analytics de performance par département'
//       ]
//     },
//     {
//       id: 'analytics',
//       title: 'Analytics RH',
//       description: 'Prenez des décisions éclairées grâce à des données RH complètes et pertinentes.',
//       icon: <BarChart2 size={24} />,
//       color: 'bg-red-100',
//       textColor: 'text-red-600',
//       image: "/api/placeholder/600/400",
//       benefits: [
//         'Tableaux de bord personnalisables',
//         'Indicateurs clés de performance RH',
//         `Prévisions d'effectifs et budget`,
//         'Analyses comparatives et tendances',
//         'Alertes et notifications configurables'
//       ]
//     },
//     {
//       id: 'core',
//       title: `Y'Core SIRH`,
//       description: 'Le cœur centralisé de votre système RH pour une gestion unifiée et efficace.',
//       icon: <Database size={24} />,
//       color: 'bg-[#ea532b]/10',
//       textColor: 'text-[#ea532b]',
//       image: "/api/placeholder/600/400",
//       benefits: [
//         'Base de données employés centralisée',
//         'Organigramme dynamique et interactif',
//         'Gestion des compétences et talents',
//         `Annuaire d'entreprise accessible`,
//         `Workflows personnalisés et automatisés`
//       ]
//     },
//   ];

//   // Fonctionnalités spécifiques pour la section détaillée
//   const coreFeatures = [
//     {
//       title: "Base employés centralisée",
//       description: "Toutes les informations RH au même endroit pour une gestion simplifiée",
//       icon: <Users />
//     },
//     {
//       title: "Workflows intelligents",
//       description: "Automatisez vos processus RH avec des workflows personnalisables",
//       icon: <Settings />
//     },
//     {
//       title: "Tableaux de bord personnalisés",
//       description: "Visualisez les données RH importantes en temps réel",
//       icon: <ChartBar />
//     },
//     {
//       title: "Gestion documentaire",
//       description: "Stockez et gérez tous vos documents RH en toute sécurité",
//       icon: <FileText />
//     },
//     {
//       title: "Sécurité avancée",
//       description: "Protection des données avec contrôle d'accès granulaire",
//       icon: <Shield />
//     },
//     {
//       title: "Multi-devices",
//       description: "Accessible sur tous vos appareils, où que vous soyez",
//       icon: <Smartphone />
//     }
//   ];

//   // Études de cas
//   const caseStudies = [
//     {
//       company: "TechAfrica",
//       industry: "Technologie",
//       employees: "250+",
//       challenge: "Harmoniser les processus RH à travers 5 pays",
//       solution: "Déploiement de Y'Core avec modules de gestion des temps et paie",
//       results: "Réduction de 40% du temps administratif et amélioration de la satisfaction employés",
//       logo: "/api/placeholder/80/80"
//     },
//     {
//       company: "BankWest",
//       industry: "Finance",
//       employees: "1200+",
//       challenge: "Digitaliser les processus de recrutement et d'onboarding",
//       solution: "Implémentation des modules recrutement et intégration de Y'Core",
//       results: "Réduction du temps d'embauche de 35% et amélioration de la rétention de 20%",
//       logo: "/api/placeholder/80/80"
//     },
//     {
//       company: "HealthPlus",
//       industry: "Santé",
//       employees: "500+",
//       challenge: "Piloter la performance et développer les compétences",
//       solution: "Déploiement de Y'Core avec focus sur le module performance",
//       results: "100% des entretiens annuels réalisés et suivi efficace des plans de développement",
//       logo: "/api/placeholder/80/80"
//     }
//   ];

//   // Plans tarifaires
//   const pricingPlans = [
//     {
//       name: "Essentiel",
//       price: "8",
//       features: [
//         "Gestion des données employés",
//         "Congés et absences",
//         "Organigramme",
//         "Tableau de bord basique",
//         "Support par email"
//       ],
//       highlight: false,
//       color: "bg-gray-100"
//     },
//     {
//       name: "Business",
//       price: "15",
//       features: [
//         "Tout l'Essentiel +",
//         "Recrutement & Onboarding",
//         "Gestion de la performance",
//         "Analytic RH avancé",
//         "Support prioritaire"
//       ],
//       highlight: true,
//       color: "bg-[#2f365b]"
//     },
//     {
//       name: "Enterprise",
//       price: "Sur mesure",
//       features: [
//         "Tout Business +",
//         "Paie & Administration",
//         "Formation & Compétences",
//         "API & Intégrations",
//         "Accompagnement dédié"
//       ],
//       highlight: false,
//       color: "bg-[#ea532b]"
//     }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* HEADER */}
//       <Header />

//       {/* MAIN CONTENT */}
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section id="hero" className="relative pt-28 pb-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center opacity-10"></div>
//           </div>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
//                   YIEL SIRH
//                 </span>
//                 <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                   <span className="text-[#ea532b]">Y'Core</span> : Le cœur battant de votre SIRH
//                 </h1>
//                 <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
//                   Centralisez, optimisez et simplifiez tous vos processus RH avec la solution SIRH la plus complète, conçue pour les entreprises africaines.
//                 </p>
//                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                   <button className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center justify-center">
//                     Demander une démo
//                     <ArrowRight size={18} className="ml-2" />
//                   </button>
//                   <button className="px-6 py-3 bg-white text-[#2f365b] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
//                     <Play size={18} className="mr-2" />
//                     Voir la vidéo
//                   </button>
//                 </div>
//               </div>
//               <div className="relative hidden lg:block">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-tr from-[#2f365b] to-[#ea532b] rounded-lg transform rotate-6 opacity-20"></div>
//                   <div className="relative bg-white p-2 rounded-lg shadow-2xl">
//                     <img 
//                       src="/api/placeholder/600/400" 
//                       alt="Dashboard YIEL SIRH" 
//                       className="w-full h-auto rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-4 -left-4 bg-[#ea532b] text-white p-3 rounded-lg shadow-lg">
//                   <Users size={24} />
//                 </div>
//                 <div className="absolute -top-4 -right-4 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
//                   <Award size={24} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="hidden lg:block absolute -bottom-1 right-0">
//             <svg
//               width="330"
//               height="230"
//               viewBox="0 0 200 200"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M40 0C17.9086 0 0 17.9086 0 40V160C0 182.091 17.9086 200 40 200H160C182.091 200 200 182.091 200 160V40C200 17.9086 182.091 0 160 0H40Z"
//                 fill="#ea532b"
//                 fillOpacity="0.1"
//               />
//             </svg>
//           </div>
//         </section>

//         {/* Navigation des fonctionnalités */}
//         <div className="sticky items-center top-16 z-30 bg-white shadow-md">
//           <div className="container bg-amber-400 mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center text-center justify-between py-2 overflow-x-auto scrollbar-hide">
//               <nav className="flex space-x-1 sm:space-x-4">
//                 {features.map((feature) => (
//                   <button
//                     key={feature.id}
//                     onClick={() => setActiveTab(feature.id)}
//                     className={`whitespace-nowrap px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
//                       activeTab === feature.id
//                         ? 'bg-[#2f365b] text-white'
//                         : 'text-gray-600 hover:bg-gray-100'
//                     }`}
//                   >
//                     <span className="flex items-center">
//                       <span className="mr-2">{feature.icon}</span>
//                       <span>{feature.title}</span>
//                     </span>
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* Section des fonctionnalités détaillées */}
//         <section id="features" className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             {features.map((feature) => (
//               <div 
//                 key={feature.id}
//                 className={`transition-all duration-500 ${activeTab === feature.id ? 'opacity-100' : 'hidden opacity-0'}`}
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                   <div>
//                     <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} ${feature.textColor} mb-6`}>
//                       {feature.icon}
//                     </div>
//                     <h2 className="text-3xl font-bold text-[#2f365b] mb-6">{feature.title}</h2>
//                     <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                    
//                     <ul className="space-y-4 mb-8">
//                       {feature.benefits.map((benefit, index) => (
//                         <li key={index} className="flex items-start">
//                           <CheckCircle className="h-6 w-6 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
//                           <span className="text-gray-700">{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
                    
//                     <button className="px-6 py-3 bg-[#ea532b] text-white font-semibold rounded-lg shadow-md hover:bg-[#d64a27] transition-all duration-300 flex items-center">
//                       En savoir plus
//                       <ChevronRight size={18} className="ml-2" />
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-gradient-to-tr from-[#2f365b] to-[#ea532b] rounded-lg transform rotate-3 opacity-20"></div>
//                     <img 
//                       src={feature.image} 
//                       alt={feature.title} 
//                       className="relative rounded-lg shadow-lg w-full"
//                     />
//                     <div className="absolute -bottom-3 -right-3 bg-[#2f365b] text-white p-3 rounded-lg shadow-lg">
//                       {feature.icon}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Pourquoi choisir Y'Core */}
//         <section id="why-ycore" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
//                 NOTRE DIFFÉRENCE
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
//                 Pourquoi choisir <span className="text-[#ea532b]">Y'Core</span> ?
//               </h2>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                 Une solution SIRH pensée pour les défis spécifiques des entreprises africaines, avec une approche centrée sur l'utilisateur et une technologie de pointe.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
//                 <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
//                   <Target size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#2f365b] mb-3">Adapté au contexte africain</h3>
//                 <p className="text-gray-600">
//                   Solution conçue pour répondre aux spécificités réglementaires et culturelles des pays africains.
//                 </p>
//               </div>
              
//               <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
//                 <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
//                   <Settings size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#2f365b] mb-3">Hautement personnalisable</h3>
//                 <p className="text-gray-600">
//                   Configurable selon vos besoins spécifiques, s'adaptant à vos processus existants.
//                 </p>
//               </div>
              
//               <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
//                 <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
//                   <Smartphone size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#2f365b] mb-3">Expérience mobile optimisée</h3>
//                 <p className="text-gray-600">
//                   Accessible partout, tout le temps, avec une interface mobile intuitive et complète.
//                 </p>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//               <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
//                 <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-4">
//                   <UserPlus size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#2f365b] mb-3">Adoption facilitée</h3>
//                 <p className="text-gray-600">
//                   Interface intuitive et formation intégrée pour une prise en main rapide par vos équipes.
//                 </p>
//               </div>
              
//               <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
//                 <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
//                   <Shield size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#2f365b] mb-3">Sécurité et conformité</h3>
//                 <p className="text-gray-600">
//                   Protection des données conforme aux standards internationaux et réglementations locales.
//                 </p>
//               </div>
              
//               <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
//                 <div className="w-14 h-14 rounded-full bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mb-4">
//                   <UserCog size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#2f365b] mb-3">Support local dédié</h3>
//                 <p className="text-gray-600">
//                   Équipe d'experts locaux pour vous accompagner à chaque étape de votre projet.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Fonctionnalités Core */}
//         <section id="core-features" className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/10 text-[#2f365b] font-medium text-sm mb-6">
//                   FONCTIONNALITÉS CLÉS
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
//                   Le cœur de votre système RH <span className="text-[#ea532b]">tout-en-un</span>
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-8">
//                   Y'Core centralise l'ensemble de vos données et processus RH dans une interface intuitive et puissante, conçue pour s'adapter à votre organisation.
//                 </p>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {coreFeatures.map((feature, index) => (
//                     <div key={index} className="flex items-start">
//                       <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#ea532b]/10 flex items-center justify-center text-[#ea532b] mr-4">
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-[#2f365b] mb-1">{feature.title}</h3>
//                         <p className="text-sm text-gray-600">{feature.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="mt-10">
//                   <button className="px-6 py-3 bg-[#2f365b] text-white font-semibold rounded-lg shadow-md hover:bg-[#252d4d] transition-all duration-300 flex items-center">
//                     Explorer toutes les fonctionnalités
//                     <ArrowRight size={18} className="ml-2" />
//                   </button>
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="space-y-6">
//                     <div className="bg-[#2f365b] p-6 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
//                       <Users size={32} className="mb-4" />
//                       <h3 className="text-xl font-bold mb-2">Gestion des talents</h3>
//                       <p className="text-sm text-gray-200">Recrutez et développez vos meilleurs éléments</p>
//                     </div>
//                     <div className="bg-gray-100 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
//                       <Calendar size={32} className="mb-4 text-[#2f365b]" />
//                       <h3 className="text-xl font-bold text-[#2f365b] mb-2">Planning & Présence</h3>
//                       <p className="text-sm text-gray-600">Optimisez le temps de travail</p>
//                     </div>
//                   </div>
//                   <div className="space-y-6 mt-10">
//                     <div className="bg-[#ea532b] p-6 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
//                       <ChartBar size={32} className="mb-4" />
//                       <h3 className="text-xl font-bold mb-2">Analytics RH</h3>
//                       <p className="text-sm text-gray-200">Pilotez avec des données pertinentes</p>
//                     </div>
//                     <div className="bg-gray-100 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
//                       <Briefcase size={32} className="mb-4 text-[#2f365b]" />
//                       <h3 className="text-xl font-bold text-[#2f365b] mb-2">Carrières</h3>
//                       <p className="text-sm text-gray-600">Développez les compétences</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="absolute -bottom-6 -right-6 bg-[#ea532b] text-white p-4 rounded-full shadow-lg">
//                   <PlusCircle size={24} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Expérience multi-device */}
//         <section id="multi-device" className="py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-6">
//                 ACCESSIBILITÉ MAXIMALE
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 Votre SIRH accessible <span className="text-[#ea532b]">partout</span> et <span className="text-[#ea532b]">tout le temps</span>
//               </h2>
//               <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//                 Que vous soyez au bureau, en déplacement ou en télétravail, Y'Core vous accompagne sur tous vos appareils avec une expérience fluide et cohérente.
//               </p>
//             </div>
            
//             <div className="relative mt-20">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
//                 <div className="hidden md:block">
//                   <div className="transform rotate-[-5deg] hover:rotate-0 transition-all duration-300">
//                     <div className="bg-white p-2 rounded-3xl shadow-2xl">
//                       <img 
//                         src="/api/placeholder/300/600" 
//                         alt="YIEL sur mobile" 
//                         className="rounded-2xl"
//                       />
//                     </div>
//                   </div>
//                   <div className="text-center mt-6">
//                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-2">
//                       <Smartphone size={24} />
//                     </div>
//                     <h3 className="font-bold">Mobile</h3>
//                     <p className="text-sm text-gray-300">Parfait pour les déplacements</p>
//                   </div>
//                 </div>
                
//                 <div className="md:col-span-1 z-10">
//                   <div className="transform hover:translate-y-[-10px] transition-all duration-300">
//                     <div className="bg-white p-2 rounded-xl shadow-2xl">
//                       <img 
//                         src="/api/placeholder/600/400" 
//                         alt="YIEL sur desktop" 
//                         className="rounded-lg"
//                       />
//                     </div>
//                   </div>
//                   <div className="text-center mt-6">
//                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-2">
//                       <Monitor size={24} />
//                     </div>
//                     <h3 className="font-bold">Desktop</h3>
//                     <p className="text-sm text-gray-300">Expérience complète au bureau</p>
//                   </div>
//                 </div>
                
//                 <div className="hidden md:block">
//                   <div className="transform rotate-[5deg] hover:rotate-0 transition-all duration-300">
//                     <div className="bg-white p-2 rounded-xl shadow-2xl">
//                       <img 
//                         src="/api/placeholder/500/350" 
//                         alt="YIEL sur tablette" 
//                         className="rounded-lg"
//                       />
//                     </div>
//                   </div>
//                   <div className="text-center mt-6">
//                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-2">
//                       <Laptop size={24} />
//                     </div>
//                     <h3 className="font-bold">Tablette</h3>
//                     <p className="text-sm text-gray-300">Idéal pour les réunions</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
//                 <div className="bg-[#ea532b] text-white px-8 py-4 rounded-full shadow-lg flex items-center space-x-3">
//                   <CheckCircle size={24} />
//                   <span className="font-bold">Une seule application, tous vos appareils</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Études de cas */}
//         <section id="case-studies" className={`py-20 bg-white ${isVisible['case-studies'] ? 'animate-fade-in' : ''}`}>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
//                 TÉMOIGNAGES
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
//                 Ils ont adopté <span className="text-[#ea532b]">Y'Core</span>
//               </h2>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                 Découvrez comment des entreprises africaines de toutes tailles ont transformé leur gestion RH avec notre solution.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {caseStudies.map((study, index) => (
//                 <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
//                   <div className="p-6">
//                     <div className="flex items-center mb-4">
//                       <img 
//                         src={study.logo} 
//                         alt={study.company} 
//                         className="w-12 h-12 rounded-lg mr-4"
//                       />
//                       <div>
//                         <h3 className="font-bold text-[#2f365b]">{study.company}</h3>
//                         <p className="text-sm text-gray-600">{study.industry} | {study.employees} employés</p>
//                       </div>
//                     </div>
                    
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="text-sm font-semibold text-gray-500">DÉFI</h4>
//                         <p className="text-gray-700">{study.challenge}</p>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-semibold text-gray-500">SOLUTION</h4>
//                         <p className="text-gray-700">{study.solution}</p>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-semibold text-gray-500">RÉSULTATS</h4>
//                         <p className="text-gray-700">{study.results}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-[#2f365b] p-4 flex justify-center">
//                     <button className="text-white font-medium flex items-center">
//                       Lire l'étude complète
//                       <ArrowRight size={16} className="ml-2" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="mt-12 text-center">
//               <button className="px-6 py-3 bg-gray-100 text-[#2f365b] font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 inline-flex items-center">
//                 Voir plus de témoignages clients
//                 <ChevronRight size={18} className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Tarification */}
//         <section id="pricing" className={`py-20 bg-gray-50 ${isVisible['pricing'] ? 'animate-fade-in' : ''}`}>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <span className="inline-block px-4 py-1 rounded-full bg-[#2f365b]/20 text-[#2f365b] font-medium text-sm mb-6">
//                 TARIFICATION
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
//                 Des offres adaptées à <span className="text-[#ea532b]">chaque besoin</span>
//               </h2>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                 Une tarification simple et transparente, avec des offres adaptées à la taille et aux besoins de votre entreprise.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {pricingPlans.map((plan, index) => (
//                 <div 
//                   key={index} 
//                   className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
//                     plan.highlight ? 'ring-2 ring-[#ea532b] relative' : ''
//                   }`}
//                 >
//                   {plan.highlight && (
//                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                       <span className="bg-[#ea532b] text-white text-xs font-bold px-4 py-1 rounded-full">POPULAIRE</span>
//                     </div>
//                   )}
//                   <div className={`${plan.color} p-6 text-center ${
//                     plan.highlight ? 'text-white' : 'text-[#2f365b]'
//                   }`}>
//                     <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
//                     <div className="flex items-center justify-center">
//                       <span className="text-3xl font-bold">
//                         {typeof plan.price === 'string' ? plan.price : `${plan.price} €`}
//                       </span>
//                       {typeof plan.price === 'number' && <span className="ml-1 text-sm opacity-80">/utilisateur/mois</span>}
//                     </div>
//                   </div>
                  
//                   <div className="bg-white p-6">
//                     <ul className="space-y-4 mb-8">
//                       {plan.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-center">
//                           <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0" />
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
                    
//                     <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//                       plan.highlight 
//                         ? 'bg-[#ea532b] text-white hover:bg-[#d64a27]' 
//                         : 'bg-gray-100 text-[#2f365b] hover:bg-gray-200'
//                     }`}>
//                       Choisir cette offre
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="mt-16 bg-white p-8 rounded-xl shadow-md text-center">
//               <h3 className="text-2xl font-bold text-[#2f365b] mb-4">Besoin d'une offre sur mesure ?</h3>
//               <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//                 Contactez-nous pour discuter de vos besoins spécifiques et obtenir une proposition personnalisée.
//               </p>
//               <button className="px-8 py-3 bg-[#2f365b] text-white font-semibold rounded-lg shadow-md hover:bg-[#252d4d] transition-all duration-300">
//                 Contacter notre équipe commerciale
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section id="cta" className="py-20 bg-gradient-to-r from-[#ea532b] to-[#ef7853] text-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
//                   Prêt à transformer votre gestion RH ?
//                 </h2>
//                 <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
//                   Rejoignez les entreprises africaines qui ont déjà adopté Y'Core et améliorez l'efficacité de vos processus RH dès aujourd'hui.
//                 </p>
//                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                   <button className="px-6 py-3 bg-white text-[#ea532b] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
//                     Demander une démo
//                     <ArrowRight size={18} className="ml-2" />
//                   </button>
//                   <button className="px-6 py-3 bg-[#ea532b]/30 text-white font-semibold rounded-lg shadow-lg hover:bg-[#ea532b]/40 transition-all duration-300 flex items-center justify-center">
//                     Nous contacter
//                   </button>
//                 </div>
//               </div>
//               <div className="relative hidden lg:block">
//                 <div className="bg-white p-2 rounded-lg shadow-2xl">
//                   <img 
//                     src="/api/placeholder/600/400" 
//                     alt="Dashboard YIEL SIRH" 
//                     className="w-full h-auto rounded"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* FOOTER */}
//       <Footer />
//     </div>
//   );
// }

// export default Core;
