import React, { useState } from "react";
import { ArrowRight, CheckCircle, Users, CreditCard, Award, Calendar, UserPlus, BookOpen, FileSignature } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NosSolution = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Solutions data
  const solutions = [
    {
      id: "ycore",
      title: "Y'Core",
      subtitle: "Gestion de profil salarié",
      description: "Centralisez toutes les informations de vos employés en un seul endroit. Avec Y'Core, accédez facilement aux profils de vos collaborateurs pour une gestion fluide et organisée.",
      icon: <Users className="w-12 h-12 text-orange-500" />,
      features: [
        "Centralisation des données employés",
        "Gestion des dossiers personnels",
        "Suivi des documents administratifs",
        "Tableaux de bord RH personnalisables"
      ],
      category: "gestion"
    },
    {
      id: "yexpense",
      title: "Y'Expense",
      subtitle: "Notes de frais",
      description: "Automatisez la gestion des notes de frais et simplifiez le remboursement des dépenses professionnelles.",
      icon: <CreditCard className="w-12 h-12 text-orange-500" />,
      features: [
        "Numérisation des reçus",
        "Validation automatique des dépenses",
        "Remboursements rapides",
        "Rapports financiers détaillés"
      ],
      category: "finance"
    },
    {
      id: "ytalents",
      title: "Y'Talents",
      subtitle: "Gestion des talents",
      description: "Développez le potentiel de vos collaborateurs grâce à notre module de gestion des talents complet et intuitif.",
      icon: <Award className="w-12 h-12 text-orange-500" />,
      features: [
        "Évaluations de performance",
        "Plans de développement personnalisés",
        "Gestion des compétences",
        "Identification des hauts potentiels"
      ],
      category: "developpement"
    },
    {
      id: "ytimes",
      title: "Y'Times",
      subtitle: "Absences & Congés",
      description: "Simplifiez la gestion des absences et des congés pour un meilleur équilibre entre vie professionnelle et vie privée.",
      icon: <Calendar className="w-12 h-12 text-orange-500" />,
      features: [
        "Demandes de congés en ligne",
        "Validation automatisée",
        "Tableaux de bord d'absence",
        "Conformité légale assurée"
      ],
      category: "gestion"
    },
    {
      id: "yrecrut",
      title: "Y'Recrut",
      subtitle: "Gestion du recrutement",
      description: "Optimisez votre processus de recrutement pour attirer et retenir les meilleurs talents.",
      icon: <UserPlus className="w-12 h-12 text-orange-500" />,
      features: [
        "Publication d'offres multicanal",
        "Suivi des candidatures",
        "Gestion des entretiens",
        "Intégration des nouveaux collaborateurs"
      ],
      category: "recrutement"
    },
    {
      id: "ylearn",
      title: "Y'Learn",
      subtitle: "Formations",
      description: "Développez les compétences de vos équipes avec notre plateforme de formation innovante.",
      icon: <BookOpen className="w-12 h-12 text-orange-500" />,
      features: [
        "Catalogue de formations personnalisable",
        "Suivi des parcours d'apprentissage",
        "Certification des compétences",
        "Rapports d'évolution"
      ],
      category: "developpement"
    },
    {
      id: "ysign",
      title: "Y'Sign",
      subtitle: "Signature électronique",
      description: "Simplifiez et sécurisez vos processus de signature de documents RH avec notre solution de signature électronique.",
      icon: <FileSignature className="w-12 h-12 text-orange-500" />,
      features: [
        "Signatures légalement contraignantes",
        "Processus 100% dématérialisé",
        "Traçabilité complète",
        "Archivage sécurisé"
      ],
      category: "documentation"
    }
  ];

  const categories = [
    { id: "all", name: "Toutes les solutions" },
    { id: "gestion", name: "Gestion RH" },
    { id: "finance", name: "Finance" },
    { id: "developpement", name: "Développement" },
    { id: "recrutement", name: "Recrutement" },
    { id: "documentation", name: "Documentation" }
  ];

  const filteredSolutions = activeTab === "all" 
    ? solutions 
    : solutions.filter(solution => solution.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Des solutions RH adaptées aux besoins de votre entreprise
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Découvrez l'ensemble de nos outils performants pour optimiser la gestion de vos talents et simplifier vos processus RH.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 transition-all transform hover:scale-105">
                  Demander une démo <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-64 h-64 bg-orange-500 opacity-20 rounded-full"></div>
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Solutions RH" 
                    className="rounded-lg shadow-xl relative z-10" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
                QUELLES SONT LES FONCTIONNALITÉS DU LOGICIEL YIEL ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre plateforme SIRH modulaire vous offre une solution complète pour tous vos besoins en ressources humaines.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeTab === category.id
                      ? "bg-indigo-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Solutions Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 group hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">{solution.icon}</div>
                    <span className="text-xs uppercase font-semibold bg-orange-100 text-orange-600 py-1 px-2 rounded-md">{solution.category === "gestion" ? "Gestion RH" : solution.category === "finance" ? "Finance" : solution.category === "developpement" ? "Développement" : solution.category === "recrutement" ? "Recrutement" : "Documentation"}</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-1">{solution.title}</h3>
                  <p className="text-orange-500 font-medium mb-4">{solution.subtitle}</p>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-2 border border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white rounded-md transition-all">
                    En savoir plus
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre gestion RH ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Nos experts sont à votre disposition pour vous accompagner dans la mise en place 
              des solutions les plus adaptées à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2">
                Demander une démo
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2">
                Nous contacter
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
                Pourquoi choisir YIEL SIRH ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre solution s'adapte à vos besoins pour vous offrir une expérience optimale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Interface intuitive",
                  description: "Une prise en main rapide pour tous vos collaborateurs"
                },
                {
                  title: "100% personnalisable",
                  description: "Adaptez notre solution à vos processus spécifiques"
                },
                {
                  title: "Support réactif",
                  description: "Une équipe d'experts disponible pour vous accompagner"
                },
                {
                  title: "Sécurité maximale",
                  description: "Protection des données conforme aux normes RGPD"
                }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-indigo-900">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
                Ce que nos clients disent
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez comment YIEL SIRH transforme la gestion des ressources humaines de nos clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Depuis que nous utilisons YIEL, nos processus RH sont beaucoup plus fluides. Un gain de temps considérable pour toute l'équipe.",
                  author: "Marie Dupont",
                  position: "DRH, Entreprise XYZ"
                },
                {
                  quote: "La plateforme est vraiment intuitive et personnalisable. Nous avons pu l'adapter parfaitement à nos besoins spécifiques.",
                  author: "Jean Martin",
                  position: "Responsable RH, Société ABC"
                },
                {
                  quote: "Le module de recrutement nous a permis d'améliorer significativement notre processus d'embauche et de réduire nos délais.",
                  author: "Sophie Leblanc",
                  position: "Talent Acquisition, Groupe DEF"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-xl shadow-sm relative">
                  <div className="absolute -top-4 left-8 text-6xl text-orange-300">"</div>
                  <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-indigo-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-lg text-gray-600">
                Retrouvez les réponses aux questions les plus posées sur nos solutions SIRH.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Comment puis-je tester YIEL SIRH ?",
                  answer: "Nous proposons une démo gratuite sur demande. Vous pouvez également bénéficier d'une période d'essai de 30 jours pour tester l'ensemble de nos fonctionnalités."
                },
                {
                  question: "YIEL est-il compatible avec mes logiciels actuels ?",
                  answer: "YIEL s'intègre facilement avec la plupart des outils existants grâce à nos API ouvertes et nos connecteurs standards. Notre équipe technique peut vous accompagner dans cette intégration."
                },
                {
                  question: "Combien de temps dure la mise en place ?",
                  answer: "La durée de déploiement dépend de la taille de votre organisation et des modules choisis. En moyenne, notre solution est opérationnelle en 2 à 4 semaines."
                },
                {
                  question: "Mes données sont-elles sécurisées ?",
                  answer: "Absolument. Nous utilisons les meilleures pratiques en matière de sécurité informatique et sommes en conformité avec le RGPD. Vos données sont stockées sur des serveurs sécurisés en Europe."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-indigo-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-indigo-900 text-white py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformez votre gestion RH dès aujourd'hui
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              Rejoignez les entreprises qui ont déjà optimisé leur gestion RH avec YIEL SIRH.
              Notre équipe se tient à votre disposition pour vous guider dans votre transformation numérique.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
              Commencer maintenant <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default NosSolution;