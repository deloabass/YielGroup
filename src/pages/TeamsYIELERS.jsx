// import React, { useRef } from "react";
// import { Users, Heart, Rocket, Target } from "lucide-react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useScrollToTop } from "../hooks/useScrollToTop";

// function TeamsYIELERS() {
//   const topRef = useRef(null);
//   useScrollToTop(topRef);

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
//       <Header />

//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="relative py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden">
//           {/* Effets d'arrière-plan */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
//           </div>
//           <div className="absolute top-0 left-0 w-full h-full">
//             <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
//             <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
//             <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
//           </div>

//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="">
//               <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6 border border-[#ea532b]/30">
//                  REJOIGNEZ L'AVENTURE
//               </span>
//               <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
//                 Teams
//                 <span className="text-[#ea532b]"> YIELERS</span>
//               </h1>
//               <p className="text-xl md:text-2xl mx-auto leading-relaxed text-gray-200">
//                 Rejoignez le mouvement YIEL et contribuez à construire le futur du travail.
//               </p>
//             </div>
//           </div>

//           {/* Wave separator */}
//           <div className="absolute border-0 bottom-0 left-0 right-0 w-full overflow-hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 1440 90"
//               className="w-full h-auto"
//               preserveAspectRatio="none"
//             >
//               <path
//                 fill="#ea532b"
//                 fillOpacity="1"
//                 d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
//               ></path>
//             </svg>
//           </div>
//         </section>

//         {/* Main Content Section */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               {/* Image Section */}
//               <div className="order-2 lg:order-1">
//                 <div className="relative">
//                   <div className="absolute -inset-4 bg-gradient-to-r from-[#ea532b] to-[#d64a27] rounded-2xl opacity-20 blur-lg"></div>
//                   <div className="relative bg-gradient-to-br from-[#2f365b] to-[#3a4272] rounded-2xl p-8 text-white shadow-2xl">
//                     {/* Placeholder pour l'image - remplacez par votre vraie image */}
//                     <div className="w-full h-80 bg-white/10 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
//                       <div className="text-center">
//                         <Users className="h-16 w-16 text-[#ea532b] mx-auto mb-4" />
//                         <p className="text-white/80 text-sm">
//                           Votre image d'équipe ici
//                         </p>
//                       </div>
//                     </div>
                    
//                     {/* Éléments décoratifs */}
//                     <div className="absolute top-4 right-4 w-8 h-8 bg-[#ea532b]/30 rounded-full animate-pulse"></div>
//                     <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#ea532b]/20 rounded-full animate-pulse delay-300"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Text Content Section */}
//               <div className="order-1 lg:order-2">
//                 <div className="space-y-8">
//                   {/* Vision */}
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-[#ea532b] to-[#d64a27] rounded-full flex items-center justify-center flex-shrink-0">
//                       <Target className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-[#2f365b] mb-3">
//                         Notre Vision
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         Nous croyons en un avenir où la technologie RH permet à chaque organisation 
//                         de libérer le potentiel de ses collaborateurs et de créer des environnements 
//                         de travail épanouissants.
//                       </p>
//                     </div>
//                   </div>

//                   {/* Mission */}
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-[#ea532b] to-[#d64a27] rounded-full flex items-center justify-center flex-shrink-0">
//                       <Rocket className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-[#2f365b] mb-3">
//                         Notre Mission
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         Transformer la gestion des ressources humaines en Afrique grâce à des 
//                         solutions innovantes, intuitives et adaptées aux réalités locales.
//                       </p>
//                     </div>
//                   </div>

//                   {/* Valeurs */}
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-[#ea532b] to-[#d64a27] rounded-full flex items-center justify-center flex-shrink-0">
//                       <Heart className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-[#2f365b] mb-3">
//                         Nos Valeurs
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         Excellence, innovation, collaboration et impact social guident chacune 
//                         de nos actions pour construire ensemble le futur du travail.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white">
//           <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="mb-8">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 Prêt à rejoindre l'aventure ?
//               </h2>
//               <p className="text-xl text-gray-200 max-w-2xl mx-auto">
//                 Ensemble, construisons l'avenir des ressources humaines et créons 
//                 un impact positif sur le monde du travail.
//               </p>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="inline-flex items-center cursor-pointer px-8 py-4 bg-[#ea532b] text-white font-semibold rounded-lg hover:bg-[#d64a27] transition-colors group shadow-lg">
//                 <Users className="h-5 w-5 mr-2" />
//                 Rejoindre l'équipe
//               </button>
//               <button className="inline-flex items-center cursor-pointer px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20">
//                 <Heart className="h-5 w-5 mr-2" />
//                 En savoir plus
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default TeamsYIELERS;

import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

function TeamsYIELERS() {
  const topRef = useRef(null);
  useScrollToTop(topRef);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        {/* Ajoute ici tes composants ou sections de page */}
        <section className="px-4 py-28 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Teams YIELERS</h1>
          <p className="text-gray-600 text-lg">
            Rejoignez le mouvement YIEL et contribuez à construire le futur du
            travail.
          </p>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}

export default TeamsYIELERS;

// cette page doit contenir une image et cette text là juste : 
