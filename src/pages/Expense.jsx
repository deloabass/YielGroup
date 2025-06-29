import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Expense() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- HEADER --- */}
      <Header />
      <section
        id="hero"
        className="relative py-28 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f365b]/0 to-[#3a4272]/90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                {/* Y'expense - Gestion des dépenses */}
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">La page est en cours de développement.</h1>
        </div>
      </section>
      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}

export default Expense;
