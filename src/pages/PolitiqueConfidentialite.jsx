import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PolitiqueConfidentialite() {
  const [activeSection, setActiveSection] = useState("introduction");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white py-30 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
            Politique de Confidentialité
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Politique de Confidentialité YIEL</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Chez YIEL, nous accordons une importance capitale à la protection de vos données personnelles. 
              Cette politique détaille nos engagements pour assurer la sécurité et la confidentialité de vos informations.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto py-3 px-4 md:px-8">
            <nav className="text-sm">
              <ol className="list-none p-0 flex flex-wrap items-center">
                <li className="flex items-center">
                  <a href="/" className="text-[#2f365b] hover:text-[#ea532b]">Accueil</a>
                  <svg className="h-4 w-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </li>
                <li className="text-[#ea532b] font-medium">Politique de Confidentialité</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto py-8 px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Navigation Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white shadow rounded-lg sticky top-24 p-4">
                <h2 className="text-[#2f365b] font-bold mb-4 pb-2 border-b">Table des matières</h2>
                <nav className="space-y-1">
                  {[
                    { id: "introduction", title: "Introduction" },
                    { id: "destinataires", title: "Destinataires" },
                    { id: "responsable", title: "Responsable du traitement" },
                    { id: "donnees", title: "Données collectées" },
                    { id: "finalites", title: "Finalités du traitement" },
                    { id: "partage", title: "Partage des données" },
                    { id: "base-legale", title: "Base légale" },
                    { id: "conservation", title: "Conservation des données" },
                    { id: "droits", title: "Vos droits" },
                    { id: "securite", title: "Sécurité et confidentialité" },
                    { id: "cookies", title: "Cookies et traceurs" },
                    { id: "contact", title: "Nous contacter" }
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`w-full text-left py-2 px-3 rounded-md transition ${
                        activeSection === section.id
                          ? "bg-[#ea532b] text-white font-medium"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="bg-white shadow rounded-lg p-6">
                <section id="introduction" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Introduction</h2>
                  <p className="mb-4">
                    Chez YIEL, nous comprenons que la confidentialité de vos données est une priorité. 
                    Nous avons conçu cette politique pour vous expliquer de manière claire et transparente quelles 
                    informations nous collectons, comment nous les utilisons et quels droits vous avez à ce sujet.
                  </p>
                  <p>
                    Cette politique de confidentialité s'applique à notre solution SIRH YIEL et définit notre 
                    engagement à respecter et protéger vos données personnelles conformément à la législation 
                    applicable en matière de protection des données.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 border-l-4 border-[#2f365b] rounded">
                    <p className="text-[#2f365b] font-medium">
                      Dernière mise à jour: 13 avril 2025
                    </p>
                  </div>
                </section>

                <section id="destinataires" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">À qui s'adresse cette politique ?</h2>
                  <p className="mb-4">
                    Cette politique s'applique à toute personne physique utilisant nos services SIRH YIEL, que ce soit via notre site web, 
                    nos applications, ou dans le cadre d'une relation contractuelle avec nous.
                  </p>
                  <p>
                    Elle ne concerne pas les données traitées pour le compte de nos clients dans le cadre d'un usage 
                    professionnel de notre solution, où YIEL agit comme sous-traitant. Dans ce cas, c'est la 
                    politique de confidentialité de votre employeur qui s'applique.
                  </p>
                </section>

                <section id="responsable" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Qui sommes-nous ?</h2>
                  <p>
                    Le responsable du traitement des données est la société YIEL Group, éditrice de la solution SIRH YIEL, 
                    dont les coordonnées sont disponibles dans la section "Nous contacter" à la fin de ce document.
                  </p>
                  <div className="mt-4 flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="mr-4 flex-shrink-0 bg-[#2f365b] text-white p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2f365b]">YIEL Group</h3>
                      <p className="text-sm text-gray-600">Éditeur de la solution SIRH YIEL</p>
                    </div>
                  </div>
                </section>

                <section id="donnees" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Données que nous collectons</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#ea532b] mb-3">Données que vous nous transmettez directement</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-medium">Lors de la création de compte :</span> nom, prénom, e-mail, 
                        mot de passe, fonction, entreprise.
                      </li>
                      <li>
                        <span className="font-medium">Lors de vos interactions avec nous :</span> demandes d'assistance, 
                        participation à des démonstrations ou événements.
                      </li>
                      <li>
                        <span className="font-medium">Lors de l'utilisation des fonctionnalités RH :</span> gestion des congés, 
                        notes de frais, objectifs, évaluations, etc.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#ea532b] mb-3">Données collectées automatiquement</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-medium">Données techniques :</span> adresse IP, type de navigateur, 
                        appareil utilisé, pages consultées, durée de navigation.
                      </li>
                      <li>
                        <span className="font-medium">Données de connexion et d'usage :</span> actions dans 
                        le logiciel, clics, modules consultés, rapports d'erreurs.
                      </li>
                      <li>
                        <span className="font-medium">Données de localisation et accès caméra :</span> uniquement 
                        avec votre accord, si nécessaire pour certaines fonctionnalités.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#ea532b] mb-3">Données issues de tiers</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-medium">Intégrations :</span> applications partenaires ou outils connectés 
                        (ERP, ATS, messagerie, etc.)
                      </li>
                      <li>
                        <span className="font-medium">Services de vérification :</span> vérification d'adresse e-mail ou 
                        informations entreprise.
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="finalites" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Pourquoi utilisons-nous vos données ?</h2>
                  <p className="mb-4">
                    Nous utilisons vos données personnelles uniquement dans des buts précis et légitimes :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Services et fonctionnalités</h3>
                      <p className="text-sm">Fournir les services attendus via notre plateforme SIRH YIEL et assurer son bon fonctionnement.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Personnalisation</h3>
                      <p className="text-sm">Adapter votre expérience utilisateur et améliorer l'ergonomie de nos solutions.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Sécurité</h3>
                      <p className="text-sm">Assurer la sécurité de notre système et prévenir les fraudes ou accès non autorisés.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Communication</h3>
                      <p className="text-sm">Vous informer des évolutions et vous proposer des contenus adaptés à votre utilisation.</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    Nous pouvons également, avec votre accord explicite, vous adresser des communications 
                    marketing liées à nos services ou vous inviter à des événements professionnels.
                  </p>
                  
                  <div className="p-4 bg-yellow-50 border-l-4 border-[#ea532b] rounded">
                    <p className="text-sm">
                      <span className="font-bold text-[#ea532b]">Important :</span> Vos données ne seront jamais 
                      utilisées à des fins non prévues sans vous en informer préalablement et obtenir 
                      votre consentement lorsque cela est requis.
                    </p>
                  </div>
                </section>

                <section id="partage" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Partage de vos données</h2>
                  <p className="mb-4">
                    Nous ne partageons jamais vos données personnelles sans raison valable. Elles peuvent être 
                    transmises uniquement aux destinataires suivants :
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="flex">
                      <div className="mr-3 items-center flex mt-1 flex-shrink-0 bg-[#2f365b] text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Nos sous-traitants techniques</p>
                        <p className="text-sm text-gray-600">
                          Hébergeurs, services de paiement, ou prestataires d'assistance, uniquement pour 
                          fournir nos services.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-3 mt-1 items-center flex flex-shrink-0 bg-[#2f365b] text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Des autorités administratives ou judiciaires</p>
                        <p className="text-sm text-gray-600">
                          Uniquement si la loi l'exige ou en cas de demande légale.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-3 mt-1 items-center flex flex-shrink-0 bg-[#2f365b] text-white p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Une autre entité en cas de restructuration</p>
                        <p className="text-sm text-gray-600">
                          En cas de fusion, acquisition ou autre changement de structure d'entreprise.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-50 border-l-4 border-[#ea532b] rounded">
                    <p className="text-sm">
                      <span className="font-bold">Engagement :</span> Aucun transfert n'est effectué à des fins 
                      commerciales ou publicitaires sans votre consentement explicite.
                    </p>
                  </div>
                </section>

                <section id="base-legale" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Base légale du traitement</h2>
                  <p className="mb-4">
                    Nous traitons vos données personnelles sur la base des fondements juridiques suivants :
                  </p>
                  
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left text-[#2f365b] font-semibold border-b">Base légale</th>
                          <th className="py-3 px-4 text-left text-[#2f365b] font-semibold border-b">Applications</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Votre consentement</td>
                          <td className="py-3 px-4">
                            Pour l'envoi de newsletters, l'utilisation de cookies, l'accès à la caméra
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">L'exécution d'un contrat</td>
                          <td className="py-3 px-4">
                            Si vous êtes utilisateur de notre solution SIRH YIEL (utilisation des fonctionnalités)
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Notre intérêt légitime</td>
                          <td className="py-3 px-4">
                            Pour sécuriser et améliorer notre plateforme, prévenir les fraudes
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Nos obligations légales</td>
                          <td className="py-3 px-4">
                            Pour la facturation, les obligations fiscales ou les audits
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="conservation" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Durée de conservation</h2>
                  <p className="mb-4">
                    Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
                    pour lesquelles elles ont été collectées :
                  </p>
                  
                  <div className="relative mb-6">
                    <div className="absolute h-full w-0.5 bg-gray-200 left-3"></div>
                    
                    <div className="relative flex items-start mb-4">
                      <div className="h-6 w-6 rounded-full bg-[#2f365b] text-white flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="ml-6">
                        <h3 className="font-medium">Pendant la durée d'utilisation du service</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Aussi longtemps que votre compte est actif et que vous utilisez notre plateforme SIRH YIEL.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start mb-4">
                      <div className="h-6 w-6 rounded-full bg-[#2f365b] text-white flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="ml-6">
                        <h3 className="font-medium">Après la fin de l'utilisation</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Puis archivées ou anonymisées dans un délai raisonnable après la clôture du compte, 
                          sauf obligation légale plus longue.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#2f365b] text-white flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="ml-6">
                        <h3 className="font-medium">Conservation légale prolongée</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Certaines données (factures, justificatifs) peuvent être conservées jusqu'à 10 ans 
                          selon la législation applicable en matière comptable et fiscale.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="droits" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Vos droits</h2>
                  <p className="mb-4">
                    Conformément à la réglementation applicable en matière de protection des données personnelles, 
                    vous disposez des droits suivants :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white shadow rounded-lg p-4 border-t-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Droits d'accès et d'information</h3>
                      <p className="text-sm text-gray-600">
                        Vous pouvez obtenir confirmation que des données vous concernant sont traitées et 
                        recevoir une copie de ces données.
                      </p>
                    </div>
                    
                    <div className="bg-white shadow rounded-lg p-4 border-t-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Droit de rectification</h3>
                      <p className="text-sm text-gray-600">
                        Vous pouvez demander la correction des données inexactes ou incomplètes vous concernant.
                      </p>
                    </div>
                    
                    <div className="bg-white shadow rounded-lg p-4 border-t-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Droit à l'effacement</h3>
                      <p className="text-sm text-gray-600">
                        Vous pouvez demander la suppression de vos données dans certaines circonstances.
                      </p>
                    </div>
                    
                    <div className="bg-white shadow rounded-lg p-4 border-t-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Droit à la limitation</h3>
                      <p className="text-sm text-gray-600">
                        Vous pouvez demander la restriction du traitement de vos données dans certains cas.
                      </p>
                    </div>
                    
                    <div className="bg-white shadow rounded-lg p-4 border-t-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Droit à la portabilité</h3>
                      <p className="text-sm text-gray-600">
                        Vous pouvez récupérer vos données dans un format structuré pour les transmettre à un tiers.
                      </p>
                    </div>
                    
                    <div className="bg-white shadow rounded-lg p-4 border-t-4 border-[#2f365b]">
                      <h3 className="font-medium text-[#2f365b] mb-2">Directives post-mortem</h3>
                      <p className="text-sm text-gray-600">
                        Vous pouvez définir des directives relatives au sort de vos données après votre décès.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#2f365b] text-white p-5 rounded-lg mb-4">
                    <h3 className="font-medium text-xl mb-2">Comment exercer vos droits ?</h3>
                    <p className="mb-3">
                      Pour exercer l'un de ces droits, vous pouvez nous contacter via les coordonnées indiquées 
                      dans la section "Nous contacter" à la fin de ce document.
                    </p>
                    <p className="text-sm">
                      Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois à compter 
                      de sa réception. Ce délai peut être prolongé de deux mois supplémentaires en cas de demande 
                      complexe ou de nombre élevé de demandes.
                    </p>
                  </div>
                </section>

                <section id="securite" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Sécurité et confidentialité</h2>
                  <p className="mb-4">
                    La sécurité de vos données est notre priorité. Nous mettons en œuvre des mesures techniques 
                    et organisationnelles appropriées pour protéger vos données personnelles :
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-[#ea532b] text-white flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-center">Chiffrement</h3>
                      <p className="text-sm text-gray-600 text-center">
                        Chiffrement des données sensibles en transit et au repos
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-[#ea532b] text-white flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-center">Authentification</h3>
                      <p className="text-sm text-gray-600 text-center">
                        Authentification forte et contrôles d'accès stricts
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
                      <div className="h-12 w-12 rounded-full bg-[#ea532b] text-white flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-center">Audits</h3>
                      <p className="text-sm text-gray-600 text-center">
                        Audits réguliers et tests de sécurité
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-sm mb-2">
                      <span className="font-bold">Note importante :</span> Malgré toutes les précautions prises, 
                      aucun système n'est totalement infaillible. En cas de violation de données susceptible 
                      d'engendrer un risque pour vos droits et libertés, nous nous engageons à vous en informer 
                      dans les délais légaux.
                    </p>
                    <p className="text-sm">
                      Notre équipe technique surveille en permanence nos systèmes et met régulièrement à jour 
                      nos mesures de sécurité selon les meilleures pratiques du secteur.
                    </p>
                  </div>
                </section>

                <section id="cookies" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Cookies et traceurs</h2>
                  <p className="mb-4">
                    Notre site et nos applications peuvent utiliser des cookies et technologies similaires pour 
                    améliorer votre expérience utilisateur et la qualité de nos services.
                  </p>
                  
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left text-[#2f365b] font-semibold border-b">Type de cookies</th>
                          <th className="py-3 px-4 text-left text-[#2f365b] font-semibold border-b">Finalité</th>
                          <th className="py-3 px-4 text-left text-[#2f365b] font-semibold border-b">Durée</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Cookies essentiels</td>
                          <td className="py-3 px-4">Fonctionnement du site et sécurité</td>
                          <td className="py-3 px-4">Session ou 13 mois max.</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Cookies fonctionnels</td>
                          <td className="py-3 px-4">Personnalisation et préférences</td>
                          <td className="py-3 px-4">13 mois max.</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Cookies analytiques</td>
                          <td className="py-3 px-4">Statistiques d'utilisation et performances</td>
                          <td className="py-3 px-4">13 mois max.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Cookies marketing</td>
                          <td className="py-3 px-4">Publicités ciblées (avec consentement)</td>
                          <td className="py-3 px-4">13 mois max.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="contact" className="mb-6">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Nous contacter</h2>
                  <p className="mb-4">
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                    vous pouvez nous contacter :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white shadow rounded-lg p-5">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#2f365b] text-white p-3 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#2f365b]">E-mail</h3>
                          <a href="mailto:contact@yiel-group.com" className="text-[#ea532b] hover:underline">
                              contact@yiel-group.com
                            </a>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Notre délégué à la protection des données (DPO) est à votre disposition pour toute question 
                        relative à vos données personnelles.
                      </p>
                    </div>
                    
                    <div className="bg-white shadow rounded-lg p-5">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#2f365b] text-white p-3 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#2f365b]">Adresse Cameroun</h3>
                          <p className="text-[#ea532b]">YIEL Group - Yaoundé</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Quartier Bastos, Yaoundé, Cameroun<br />
                        Informations légales à venir.
                      </p>
                    </div>

                  </div>
                </section>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600 italic">
                    Cette politique de confidentialité peut être amenée à évoluer. Nous vous invitons à la 
                    consulter régulièrement pour rester informé des mises à jour.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Dernière mise à jour : 13 avril 2025 - Version 2.3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}

export default PolitiqueConfidentialite;