import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NosClients() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- HEADER --- */}
      <Header />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        {/* Ajoute ici tes composants ou sections de page */}
        <section className="px-4 py-28 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Nos clients</h1>
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

export default NosClients;
