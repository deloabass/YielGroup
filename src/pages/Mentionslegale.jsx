import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Building  } from "lucide-react";


function MentionsLegales() {
  const [activeSection, setActiveSection] = useState("editeur");

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mentions Légales</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Informations juridiques concernant YIEL GROUP, éditeur de solutions SIRH innovantes.
              Dernière mise à jour : 08 avril 2025
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
                <li className="text-[#ea532b] font-medium">Mentions Légales</li>
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
                    { id: "editeur", title: "Éditeur" },
                    { id: "publication", title: "Direction de publication" },
                    { id: "hebergement", title: "Hébergement & réalisation" },
                    { id: "propriete", title: "Propriété intellectuelle" },
                    { id: "responsabilite", title: "Responsabilité" },
                    { id: "donnees", title: "Données personnelles" },
                    { id: "droits", title: "Vos droits" },
                    { id: "reglementaire", title: "Informations réglementaires" },
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
                <section id="editeur" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Éditeur</h2>
                  
                    <div className="flex flex-col lg:flex-row bg-gray-50 rounded-lg overflow-hidden">
                      {/* Section de gauche */}
                      <div className="w-full lg:w-1/3 bg-[#2f365b] text-white p-5 lg:p-6 flex items-center justify-center">
                        <div className="text-center py-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <h3 className="text-lg sm:text-xl font-bold">YIEL GROUP</h3>
                        </div>
                      </div>

                      {/* Section de droite */}
                      <div className="w-full lg:w-2/3 p-5 lg:p-6">
                        <div className="space-y-4">
                          {[
                            { label: "Dénomination sociale", value: "YIEL GROUP" },
                            { label: "Statut juridique", value: "Société par Actions Simplifiée Unipersonnelle (SASU)" },
                            { label: "Siège social", value: "Yaoundé, Cameroun" },
                            { label: "RCS / Identifiant", value: "[Numéro d'immatriculation à compléter]" }
                          ].map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                              <div className="min-w-[180px] text-[#ea532b] font-bold whitespace-nowrap">
                                {item.label} :
                              </div>
                              <div className="flex-1">{item.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>


                </section>

                <section id="publication" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Direction de la publication</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-full bg-[#2f365b] flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="text-xl font-bold text-[#ea532b] mb-1">Stéphanie NKOMANE BITEGYE</h3>
                        <p className="text-gray-600 mb-3">PDG et fondatrice de Yiel Group</p>
                        <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#2f365b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:contact@yiel-group.com" className="text-[#2f365b] hover:text-[#ea532b]">
                              contact@yiel-group.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="hebergement" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Hébergement & réalisation</h2>
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#ea532b]">
                    <p className="mb-4">
                      Le site <strong className="text-[#2f365b]">www.yielgroup.com</strong> est hébergé par :
                    </p>
                    <div className="pl-4 border-l-2 border-gray-300 mb-4">
                      <p className="font-medium">Hostinger International Ltd.</p>
                      <p>61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                      <p className="mt-2">
                        <a href="https://www.hostinger.fr" className="text-[#ea532b] hover:underline" target="_blank" rel="noopener noreferrer">
                          Site : https://www.hostinger.fr
                        </a>
                      </p>
                      <p>
                        <a href="https://support.hostinger.com" className="text-[#ea532b] hover:underline" target="_blank" rel="noopener noreferrer">
                          Support technique : https://support.hostinger.com
                        </a>
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      La conception, le développement et la maintenance du site sont assurés par les équipes techniques de YIEL GROUP.
                    </p>
                  </div>
                </section>

                <section id="propriete" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Propriété intellectuelle</h2>
                  <div className="bg-white border border-gray-200 rounded-lg">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#2f365b] flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-[#2f365b]">Droits d'auteur et propriété</h3>
                      </div>
                      <p className="mb-4">
                        L'ensemble du contenu présent sur le site Yiel (textes, images, vidéos, graphismes, logos, 
                        icônes, éléments visuels, etc.) est la propriété exclusive de Yiel Group ou de ses partenaires 
                        et est protégé par les lois internationales sur le droit d'auteur et la propriété intellectuelle.
                      </p>
                      <p className="mb-4">
                        Toute reproduction, distribution, modification ou utilisation du contenu sans autorisation 
                        écrite préalable est strictement interdite.
                      </p>
                      <div className="bg-yellow-50 border-l-4 border-[#ea532b] p-4 rounded">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-[#ea532b]" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-[#2f365b]">
                              La marque YIEL, les logos associés et l'ensemble des interfaces utilisateur sont des 
                              marques déposées et ne peuvent être utilisés sans l'accord préalable de YIEL GROUP.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="responsabilite" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Responsabilité</h2>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <p className="mb-4">
                      Yiel Group met tout en œuvre pour assurer l'exactitude et l'accessibilité des informations 
                      diffusées sur son site. Toutefois, la société ne saurait être tenue pour responsable des erreurs, 
                      omissions ou d'une indisponibilité temporaire du service.
                    </p>
                    <p className="mb-4">
                      L'utilisateur du site reconnaît utiliser les informations disponibles sous sa responsabilité exclusive.
                    </p>
                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-[#ea532b] mb-2">Limitation de responsabilité</h3>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                          YIEL GROUP ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
                          mises à disposition sur son site.
                        </li>
                        <li>
                          Les informations présentées sur le site peuvent être modifiées à tout moment sans préavis.
                        </li>
                        <li>
                          YIEL GROUP ne peut être tenu responsable des dommages directs ou indirects résultant de 
                          l'accès ou de l'utilisation de son site.
                        </li>
                        <li>
                          La responsabilité de YIEL GROUP ne saurait être engagée en cas de force majeure ou du fait 
                          imprévisible et insurmontable d'un tiers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="donnees" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Collecte et traitement des données personnelles</h2>
                  <div className="p-6 bg-white border border-gray-200 rounded-lg">
                    <p className="mb-4">
                      Conformément à la réglementation applicable en matière de protection des données, 
                      <strong> YIEL GROUP</strong> est responsable du traitement des données personnelles collectées sur ce site.
                    </p>
                    <h3 className="text-lg font-semibold text-[#ea532b] mb-3">Ces traitements ont pour finalités :</h3>
                    <ul className="mb-6 space-y-3">
                      {[
                        "La gestion de l'accès aux services proposés par Yiel",
                        "La gestion de la relation client, utilisateur ou prospect",
                        "L'amélioration continue de nos outils et services SIRH",
                        "La communication d'informations commerciales ou techniques sur nos solutions",
                        "L'organisation d'événements, démonstrations ou webinaires",
                        "Le suivi statistique de l'utilisation du site et des fonctionnalités"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-[#ea532b] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#2f365b] text-white p-4 rounded-lg mb-4">
                      <div className="flex items-center">
                        <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="font-medium">
                          Les données collectées ne sont <strong>jamais revendues</strong> à des tiers.
                        </p>
                      </div>
                    </div>
                    <p className="mb-4">
                      Elles peuvent cependant être partagées avec nos prestataires techniques dans le strict cadre 
                      de l'exécution des services.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm">
                        Pour en savoir plus, veuillez consulter notre 
                        <a href="/politique-confidentialite" className="text-[#ea532b] hover:underline mx-1">
                          Politique de confidentialité
                        </a>
                        et notre
                        <a href="/cookies" className="text-[#ea532b] hover:underline ml-1">
                          Politique relative aux cookies
                        </a>.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="droits" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Vos droits</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Droit d'accès",
                        desc: "Accéder à vos données personnelles"
                      },
                      {
                        title: "Droit de rectification",
                        desc: "Rectifier, effacer ou limiter le traitement"
                      },
                      {
                        title: "Droit d'opposition",
                        desc: "Opposition et portabilité de vos données"
                      },
                      {
                        title: "Retrait du consentement",
                        desc: "Retirer votre consentement à tout moment"
                      },
                      {
                        title: "Droit à la portabilité",
                        desc: "Récupérer et transférer vos données"
                      },
                      {
                        title: "Directives post-mortem",
                        desc: "Définir le sort de vos données après décès"
                      }
                    ].map((right, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="font-medium text-[#ea532b] flex items-center">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          {right.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 ml-7">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 bg-[#2f365b] text-white rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Comment exercer vos droits ?</h3>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2">Pour exercer ces droits ou poser une question, contactez-nous à :</p>
                        <p>
                          <a href="mailto:contact@yiel-group.com" className="text-[#ea532b] font-bold hover:underline">
                            contact@yiel-group.com
                          </a>
                        </p>
                        <p className="text-sm mt-2">
                          Ou directement via le chat en ligne sur notre site.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="reglementaire" className="mb-10">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Informations réglementaires</h2>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-[#ea532b] mb-3">Lois applicables</h3>
                        <p className="text-sm mb-3">
                          Le site et son contenu sont régis par la législation camerounaise et internationale applicable.
                        </p>
                        <p className="text-sm">
                          En cas de litige, les tribunaux compétents seront ceux de Yaoundé (Cameroun), sans préjudice de 
                          la protection dont les consommateurs pourraient bénéficier au titre des dispositions impératives 
                          du droit applicable.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#ea532b] mb-3">Médiation</h3>
                        <p className="text-sm mb-3">
                          Conformément aux dispositions en vigueur, tout consommateur dispose d'un droit de recours à un 
                          médiateur de la consommation en vue de la résolution amiable de tout litige.
                        </p>
                        <p className="text-sm">
                          Veuillez nous contacter préalablement à toute demande de médiation.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-semibold text-[#ea532b] mb-3">Conditions générales d'utilisation</h3>
                      <p className="text-sm">
                        L'utilisation du site internet YIEL GROUP implique l'acceptation pleine et entière des conditions 
                        générales d'utilisation décrites ci-dessus. Ces conditions d'utilisation sont susceptibles d'être 
                        modifiées ou complétées à tout moment.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="contact" className="mb-6">
                  <h2 className="text-2xl font-bold text-[#2f365b] mb-4">Contact</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2  bg-white shadow rounded-lg p-5">
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
                        <p className="text-sm text-gray-600 pl-12">
                          Pour toute question concernant nos services ou pour une demande commerciale.
                        </p>
                      </div>
                        <div className="md:w-1/2 bg-white shadow rounded-lg p-5">
                          <div className="flex items-center mb-4">
                            <div className="bg-[#2f365b] text-white p-3 rounded-full mr-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-[#2f365b]">Téléphone</h3>
                              <span className="text-[#ea532b]">Bientôt disponible</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 pl-12">
                            Notre ligne téléphonique sera bientôt disponible. En attendant, veuillez nous contacter par e-mail.
                          </p>
                        </div>

                    </div>
                    <div className="mt-8 bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg text-[#2f365b] mb-3">Siège social</h3>
                      <address className="not-italic">
                        <p>YIEL GROUP</p>
                        <p>Yaoundé, Cameroun</p>
                      </address>
                    </div>
                    <div className="mt-6 text-center">
                      <a 
                        href="/contact" 
                        className="inline-block bg-[#ea532b] hover:bg-[#d74a28] text-white font-medium py-2 px-6 rounded-md transition duration-200"
                      >
                        Formulaire de contact
                      </a>
                    </div>
                  </div>
                </section>
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

export default MentionsLegales;