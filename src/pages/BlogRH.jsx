import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Calendar,
  Search,
  User,
  Clock,
  Tag,
  ChevronRight,
  Filter,
  Bookmark,
} from "lucide-react";
import FAQ from "../components/FAQ";

const BlogRH = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Catégories de blog
  const categories = [
    "Tous",
    "Recrutement",
    "Formation & Compétences",
    "Législations RH",
    "Management & Leadership",
    "Bien-être & QVT",
    "Transformations RH Changement",
    "Paie & ADP",
  ];

  // Articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Comment optimiser le processus de recrutement en 2025",
      excerpt:
        "Découvrez les meilleures pratiques pour améliorer votre processus de recrutement et attirer les meilleurs talents dans votre entreprise.",
      category: "Recrutement",
      image:
        "https://www.mindonsite.com/wp-content/uploads/2023/03/tendances-recrutement-2023-1024x683.jpeg",
      author: "Marie Dubois",
      authorRole: "Responsable Recrutement",
      date: "08 Avril 2025",
      readTime: "8 min",
      featured: true,
    },
    {
      id: 2,
      title: "Les nouvelles réglementations du droit du travail",
      excerpt:
        "Mise à jour des changements législatifs importants concernant le code du travail et leur impact sur votre politique RH.",
      category: "Législations RH",
      image:
        "https://iseeop.com/wp-content/uploads/2023/10/droit-du-travail-1-1.png",
      author: "Thomas Martin",
      authorRole: "Juriste RH",
      date: "05 Avril 2025",
      readTime: "12 min",
      featured: true,
    },
    {
      id: 3,
      title: "Développer une culture d'entreprise inclusive",
      excerpt:
        "Stratégies concrètes pour créer un environnement de travail diversifié et inclusif qui valorise tous les employés.",
      category: "Management & Leadership",
      image: "/api/placeholder/800/400",
      author: "Sophie Bernard",
      authorRole: "DRH",
      date: "01 Avril 2025",
      readTime: "10 min",
      featured: false,
    },
    {
      id: 4,
      title: "Guide complet sur la gestion des talents",
      excerpt:
        "Comment identifier, développer et fidéliser les talents clés au sein de votre organisation.",
      category: "Management & Leadership",
      image: "/api/placeholder/800/400",
      author: "Pierre Leroy",
      authorRole: "Consultant RH",
      date: "28 Mars 2025",
      readTime: "15 min",
      featured: false,
    },
    {
      id: 5,
      title: "Digitalisation des processus RH : par où commencer ?",
      excerpt:
        "Les étapes essentielles pour réussir la transformation digitale de votre département RH.",
      category: "Formation & Compétences",
      image: "/api/placeholder/800/400",
      author: "Julie Moreau",
      authorRole: "Directrice Transformation Digitale",
      date: "25 Mars 2025",
      readTime: "7 min",
      featured: false,
    },
    {
      id: 6,
      title: "Prévention du burn-out : guide pour les managers",
      excerpt:
        "Reconnaître les signes et mettre en place des actions préventives pour protéger le bien-être de vos équipes.",
      category: "Bien-être & QVT",
      image: "/api/placeholder/800/400",
      author: "Alexandre Dupont",
      authorRole: "Psychologue du Travail",
      date: "22 Mars 2025",
      readTime: "9 min",
      featured: false,
    },
    {
      id: 7,
      title: "Prévention du burn-out : guide pour les managers",
      excerpt:
        "Reconnaître les signes et mettre en place des actions préventives pour protéger le bien-être de vos équipes.",
      category: "Transformations RH Changement",
      image: "/api/placeholder/800/400",
      author: "Alexandre Dupont",
      authorRole: "Psychologue du Travail",
      date: "22 Mars 2025",
      readTime: "9 min",
      featured: false,
    },
    {
      id: 8,
      title: "Prévention du burn-out : guide pour les managers",
      excerpt:
        "Reconnaître les signes et mettre en place des actions préventives pour protéger le bien-être de vos équipes.",
      category: "Paie & ADP",
      image: "/api/placeholder/800/400",
      author: "Alexandre Dupont",
      authorRole: "Psychologue du Travail",
      date: "22 Mars 2025",
      readTime: "9 min",
      featured: false,
    },
  ];
  const faqs = [
    {
      id: 1,
      question: "Comment puis-je contribuer au blog RH ?",
      answer:
        "Si vous souhaitez partager votre expertise, envoyez-nous un email avec votre proposition d'article. Notre équipe éditoriale l'examinera et vous recontactera sous 5 jours ouvrés.",
    },
    {
      id: 2,
      question: "À quelle fréquence publiez-vous de nouveaux articles ?",
      answer:
        "Nous publions généralement de nouveaux contenus 2 à 3 fois par semaine. Abonnez-vous à notre newsletter pour être informé des nouvelles publications.",
    },
    {
      id: 3,
      question: "Comment puis-je télécharger les ressources RH ?",
      answer:
        "La plupart de nos ressources sont accessibles gratuitement après inscription à notre newsletter. Certains documents premium sont réservés à nos abonnés.",
    },
  ];

  // Filtrer les articles par catégorie
  const filteredPosts =
    activeCategory === "Tous"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  // Articles à la une
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        {/* Hero Section */}
        {/* Hero Section - Blog */}
        <section className="relative pt-28 pb-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden">
          {/* Image de fond floutée */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>
          {/* Contenu principal */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog RH & Ressources
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Découvrez les dernières tendances, conseils et meilleures
                pratiques pour votre gestion des ressources humaines
              </p>

              {/* Barre de recherche */}
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 text-xl border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:ring-opacity-50 bg-white bg-opacity-10 backdrop-blur-sm text-[#3a4272] placeholder-gray-300 placeholder-opacity-60 transition duration-200 ease-in-out"
                  placeholder="Rechercher un article..."
                />
              </div>
            </div>
          </div>

          {/* Décoration SVG comme "Notre Histoire" */}
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

        {/* Breadcrumb - Sticky comme "Notre Histoire" */}
        <div className="sticky top-0 z-30 bg-white shadow-sm">
          <div className="container mx-auto py-3 px-4 md:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <nav className="text-sm mb-4 sm:mb-0">
                <ol className="list-none p-0 flex flex-wrap items-center">
                  <li className="flex items-center">
                    <a href="/" className="text-[#2f365b] hover:text-[#ea532b]">
                      Accueil
                    </a>
                    <svg
                      className="h-4 w-4 mx-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li className="text-[#ea532b] font-medium">Blog</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* Articles à la une */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2f365b] mb-8">
              Articles à la une
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative overflow-hidden rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#ea532b] text-white">
                      {post.category}
                    </span>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#2f365b] flex items-center justify-center text-white mr-3">
                          <User size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-[#2f365b]">
                            {post.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {post.authorRole}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" /> {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tous les articles */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2f365b] mb-4 md:mb-0">
                Tous nos articles
              </h2>
            </div>
            <div className="flex  flex-col md:flex-row justify-center items-start md:items-center mb-8">
              {/* Filtres pour mobile */}
              <div className="md:hidden w-full mb-4">
                <button className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm">
                  <span className="flex items-center">
                    <Filter size={18} className="mr-2 text-[#ea532b]" />
                    <span>Filtrer par catégorie</span>
                  </span>
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Navigation des catégories pour desktop */}
              <div className="hidden md:flex overflow-x-auto space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-md text-nowrap text-sm font-medium transition ${
                      activeCategory === category
                        ? "bg-[#ea532b] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Grille d'articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#2f365b] bg-opacity-10 text-[white]">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2f365b] mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#2f365b] flex items-center justify-center text-white mr-2">
                          <User size={14} />
                        </div>
                        <span className="text-sm text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <button className="flex items-center text-[#ea532b] font-medium hover:underline">
                        Lire <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Précédent
                </button>
                <button className="px-4 py-2 rounded-md bg-[#2f365b] text-white">
                  1
                </button>
                <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Suivant
                </button>
              </nav>
            </div>
          </div>
        </section>

        {/* Section d'inscription à la newsletter */}
        <section className="py-16 bg-[#2f365b]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#ea532b] to-[#f07c5e] rounded-xl py-12 px-6 md:px-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Restez informé des dernières tendances RH
                  </h2>
                  <p className="text-white text-opacity-90">
                    Inscrivez-vous à notre newsletter mensuelle pour recevoir
                    nos meilleurs articles et conseils.
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-full bg-white bg-opacity-95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 pr-32"
                      placeholder="Votre adresse email"
                    />
                    <button className="absolute right-1 top-1 bottom-1 px-6 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400">
                      S'inscrire
                    </button>
                  </div>
                  <p className="text-white text-opacity-75 text-sm mt-2">
                    Nous respectons votre vie privée. Désabonnement facile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section ressources RH */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2f365b] mb-8">
              Ressources RH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ressource 1 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
                <div className="bg-[#2f365b] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f365b] mb-2">
                  Modèles de documents
                </h3>
                <p className="text-gray-600 mb-4">
                  Accédez à notre bibliothèque de modèles RH : contrats, fiches
                  de poste, évaluations...
                </p>
                <a
                  href="#"
                  className="flex items-center text-[#ea532b] font-medium hover:underline"
                >
                  Télécharger <ChevronRight size={16} className="ml-1" />
                </a>
              </div>

              {/* Ressource 2 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
                <div className="bg-[#2f365b] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f365b] mb-2">
                  Guides pratiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Nos guides étape par étape pour optimiser vos processus RH et
                  gagner en efficacité.
                </p>
                <a
                  href="#"
                  className="flex items-center text-[#ea532b] font-medium hover:underline"
                >
                  Consulter <ChevronRight size={16} className="ml-1" />
                </a>
              </div>

              {/* Ressource 3 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
                <div className="bg-[#2f365b] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2f365b] mb-2">
                  Webinaires RH
                </h3>
                <p className="text-gray-600 mb-4">
                  Replay de nos webinaires avec des experts sur les dernières
                  tendances en ressources humaines.
                </p>
                <a
                  href="#"
                  className="flex items-center text-[#ea532b] font-medium hover:underline"
                >
                  Regarder <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <FAQ faqs={faqs} />
      </main>
      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};
export default BlogRH;
