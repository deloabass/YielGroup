import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileText, ChevronRight } from "lucide-react";

function ConditionsUtilisation() {
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
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white py-30 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
              Conditions d'Utilisation
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation 
              de la plateforme SIRH YIEL. Dernière mise à jour : 08 avril 2025
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
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                </li>
                <li className="text-[#ea532b] font-medium">Conditions d'Utilisation</li>
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
                <h2 className="text-[#2f365b] font-bold mb-4 pb-2 border-b">Sommaire</h2>
                <nav className="space-y-1">
                  {[
                    { id: "introduction", title: "Introduction" },
                    { id: "definitions", title: "Définitions" },
                    { id: "acces", title: "Accès au service" },
                    { id: "utilisation", title: "Utilisation du service" },
                    { id: "obligations", title: "Obligations de l'utilisateur" },
                    { id: "propriete", title: "Propriété intellectuelle" },
                    { id: "donnees", title: "Protection des données" },
                    { id: "responsabilite", title: "Responsabilité" },
                    { id: "suspension", title: "Suspension et résiliation" },
                    { id: "modifications", title: "Modifications" },
                    { id: "droit", title: "Droit applicable" },
                    { id: "contact", title: "Contact" }
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
                    Les présentes Conditions Générales d'Utilisation (ci-après "CGU") régissent l'accès et 
                    l'utilisation de la plateforme SIRH YIEL (ci-après "le Service") éditée par YIEL Group.
                  </p>
                  <p className="mb-4">
                    En accédant au Service ou en l'utilisant, vous acceptez d'être lié par ces CGU. 
                    Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le Service.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#2f365b] p-4 rounded">
                    <p className="text-[#2f365b] font-medium">
                      Ces CGU constituent un contrat légalement contraignant entre vous et YIEL Group.
                    </p>
                  </div>
                </section>

                <section id="definitions" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Définitions</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#ea532b] pl-4">
                      <h3 className="font-semibold text-[#ea532b]">"Service" ou "Plateforme"</h3>
                      <p className="text-gray-700">
                        Désigne la solution SIRH YIEL accessible via le site web et les applications mobiles.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#ea532b] pl-4">
                      <h3 className="font-semibold text-[#ea532b]">"Utilisateur"</h3>
                      <p className="text-gray-700">
                        Toute personne physique ou morale qui accède et utilise le Service.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#ea532b] pl-4">
                      <h3 className="font-semibold text-[#ea532b]">"Compte"</h3>
                      <p className="text-gray-700">
                        Espace personnel sécurisé permettant l'accès aux fonctionnalités du Service.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#ea532b] pl-4">
                      <h3 className="font-semibold text-[#ea532b]">"Contenu"</h3>
                      <p className="text-gray-700">
                        Toute information, donnée, texte, logiciel, musique, son, photographie, graphique, 
                        vidéo, message ou autre matériel.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="acces" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Accès au Service</h2>
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Conditions d'accès</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Être âgé d'au moins 18 ans ou avoir l'autorisation d'un représentant légal</li>
                    <li>Disposer de la capacité juridique pour contracter</li>
                    <li>Fournir des informations exactes et complètes lors de l'inscription</li>
                    <li>Respecter les présentes CGU et la législation applicable</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Création de compte</h3>
                  <p className="mb-4">
                    Pour accéder au Service, vous devez créer un compte en fournissant des informations 
                    exactes et à jour. Vous êtes responsable de la confidentialité de vos identifiants 
                    de connexion.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-yellow-800">
                      <strong>Important :</strong> Vous devez immédiatement nous informer de toute 
                      utilisation non autorisée de votre compte.
                    </p>
                  </div>
                </section>

                <section id="utilisation" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Utilisation du Service</h2>
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Utilisation autorisée</h3>
                  <p className="mb-4">
                    Le Service est destiné à un usage professionnel pour la gestion des ressources humaines. 
                    Vous pouvez utiliser le Service pour :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Gérer les données de vos collaborateurs</li>
                    <li>Planifier et suivre les congés et absences</li>
                    <li>Organiser les formations et évaluations</li>
                    <li>Générer des rapports RH</li>
                    <li>Utiliser les fonctionnalités de communication interne</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Utilisation interdite</h3>
                  <p className="mb-4">Il est strictement interdit d'utiliser le Service pour :</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Violer les lois et réglementations applicables</li>
                    <li>Porter atteinte aux droits de tiers</li>
                    <li>Diffuser du contenu illégal, offensant ou inapproprié</li>
                    <li>Tenter d'accéder de manière non autorisée au système</li>
                    <li>Perturber le fonctionnement du Service</li>
                    <li>Utiliser le Service à des fins commerciales non autorisées</li>
                  </ul>
                </section>

                <section id="obligations" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Obligations de l'Utilisateur</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-[#2f365b] mb-3">Vos engagements</h3>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#ea532b] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Utiliser le Service conformément aux CGU
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#ea532b] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Maintenir la confidentialité de vos identifiants
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#ea532b] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Respecter les droits de propriété intellectuelle
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#ea532b] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Signaler tout dysfonctionnement ou abus
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-[#2f365b] mb-3">Nos engagements</h3>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#ea532b] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Fournir un service de qualité et sécurisé
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#ea532b] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Protéger vos données personnelles
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#ea532b] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Assurer la maintenance et les mises à jour
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#ea532b] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Fournir un support technique adapté
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="propriete" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Propriété Intellectuelle</h2>
                  <p className="mb-4">
                    Le Service, incluant mais sans s'y limiter, les logiciels, textes, images, graphiques, 
                    logos, icônes, interfaces utilisateur, et leur compilation, est la propriété exclusive 
                    de YIEL Group et est protégé par les lois sur la propriété intellectuelle.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Licence d'utilisation</h3>
                  <p className="mb-4">
                    YIEL Group vous accorde une licence limitée, non exclusive, non transférable et 
                    révocable pour utiliser le Service conformément aux présentes CGU.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Contenu utilisateur</h3>
                  <p className="mb-4">
                    Vous conservez tous les droits sur le contenu que vous soumettez au Service. 
                    En soumettant du contenu, vous accordez à YIEL Group une licence pour traiter, 
                    stocker et afficher ce contenu dans le cadre du Service.
                  </p>
                </section>

                <section id="donnees" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Protection des Données</h2>
                  <p className="mb-4">
                    La protection de vos données personnelles est une priorité pour YIEL Group. 
                    Le traitement de vos données est régi par notre Politique de Confidentialité, 
                    qui fait partie intégrante des présentes CGU.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Vos droits</h3>
                    <p className="text-blue-700 text-sm">
                      Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation 
                      du traitement, de portabilité et d'opposition concernant vos données personnelles.
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    Pour plus d'informations, consultez notre 
                    <a href="/politique-de-confidentialite" className="text-[#ea532b] hover:underline ml-1">
                      Politique de Confidentialité
                    </a>.
                  </p>
                </section>

                <section id="responsabilite" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Responsabilité</h2>
                  
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Limitation de responsabilité</h3>
                  <p className="mb-4">
                    YIEL Group s'efforce de fournir un service de qualité, mais ne peut garantir 
                    que le Service sera exempt d'erreurs, de virus ou d'interruptions.
                  </p>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>Important :</strong> La responsabilité de YIEL Group est limitée aux 
                      dommages directs et ne peut excéder le montant des sommes versées par l'utilisateur 
                      au cours des 12 derniers mois.
                    </p>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Responsabilité de l'utilisateur</h3>
                  <p className="mb-4">
                    Vous êtes responsable de l'utilisation que vous faites du Service et de tout 
                    contenu que vous y soumettez. Vous vous engagez à indemniser YIEL Group contre 
                    toute réclamation résultant de votre utilisation du Service.
                  </p>
                </section>

                <section id="suspension" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Suspension et Résiliation</h2>
                  
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Suspension du compte</h3>
                  <p className="mb-4">
                    YIEL Group se réserve le droit de suspendre temporairement ou définitivement 
                    votre accès au Service en cas de :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Violation des présentes CGU</li>
                    <li>Utilisation frauduleuse ou abusive du Service</li>
                    <li>Non-paiement des frais d'abonnement</li>
                    <li>Demande des autorités compétentes</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Résiliation</h3>
                  <p className="mb-4">
                    Vous pouvez résilier votre compte à tout moment en nous contactant. 
                    La résiliation prend effet immédiatement et entraîne la suppression 
                    de votre accès au Service.
                  </p>
                </section>

                <section id="modifications" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Modifications des CGU</h2>
                  <p className="mb-4">
                    YIEL Group se réserve le droit de modifier les présentes CGU à tout moment. 
                    Les modifications entrent en vigueur dès leur publication sur le Service.
                  </p>
                  <p className="mb-4">
                    Nous vous informerons des modifications importantes par email ou via une 
                    notification dans le Service. La poursuite de l'utilisation du Service 
                    après modification vaut acceptation des nouvelles CGU.
                  </p>
                </section>

                <section id="droit" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Droit Applicable et Juridiction</h2>
                  <p className="mb-4">
                    Les présentes CGU sont régies par le droit camerounais. Tout litige relatif 
                    à l'interprétation ou à l'exécution des présentes CGU sera soumis aux 
                    tribunaux compétents de Yaoundé, Cameroun.
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Médiation</h3>
                    <p className="text-gray-700 text-sm">
                      En cas de litige, nous encourageons le recours à la médiation avant 
                      toute action judiciaire. Contactez-nous pour explorer les options 
                      de résolution amiable.
                    </p>
                  </div>
                </section>

                <section id="contact" className="mb-6">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Contact</h2>
                  <p className="mb-4">
                    Pour toute question concernant ces Conditions d'Utilisation, 
                    vous pouvez nous contacter :
                  </p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-[#2f365b] mb-3">YIEL Group</h3>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-center">
                            <FileText size={16} className="mr-2 text-[#ea532b]" />
                            Société par Actions Simplifiée Unipersonnelle
                          </p>
                          <p>Siège social : Yaoundé, Cameroun</p>
                          <p>RCS : RC/YAO/2025/B/359</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-[#2f365b] mb-3">Nous contacter</h3>
                        <div className="space-y-2 text-sm">
                          <p>
                            Email : 
                            <a href="mailto:contact@yiel-group.com" className="text-[#ea532b] hover:underline ml-1">
                              contact@yiel-group.com
                            </a>
                          </p>
                          <p>
                            Site web : 
                            <a href="https://yielgroup.com" className="text-[#ea532b] hover:underline ml-1">
                              https://yielgroup.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600 italic">
                    Ces Conditions d'Utilisation peuvent être mises à jour. Nous vous recommandons 
                    de les consulter régulièrement pour rester informé des éventuelles modifications.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Dernière mise à jour : 08 avril 2025 - Version 1.2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ConditionsUtilisation;