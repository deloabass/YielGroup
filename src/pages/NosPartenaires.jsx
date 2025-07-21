import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

function NosPartenaires() {
  const topRef = useRef(null);
  useScrollToTop(topRef);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        <section className="px-4 py-28 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Nos partenaires
          </h1>
          <p className="text-gray-600">
            Ils marchent à nos côtés pour façonner un avenir meilleur.
          </p>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}

export default NosPartenaires;
