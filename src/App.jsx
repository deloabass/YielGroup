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
import Expertise from "./pages/Expertise";

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
        <Route path="/notre-Histoire" element={<NotreHistoire />} />
        <Route path="/nos-solution" element={<NosSolution />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/core" element={<Core />} />
        <Route path="/expertise" element={<Expertise />} />
      </Routes>
    </Router>
  );
}

export default App;
