import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Inscription from "./pages/Inscription";
import Collaborateurs from "./pages/Collaborateurs";
import Conges from "./pages/Conges";
import Formations from "./pages/Formations";
import Rapports from "./pages/Rapports";
import Parametres from "./pages/Parametres";
import Demo from "./pages/Demo";
import BlogRH from "./pages/BlogRH";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";
import DevenezYieler from "./pages/DevenezYieler";
import LogIn from "./pages/LogIn";

import NosPartenaires from "./pages/NosPartenaires";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Mentionslegale from "./pages/Mentionslegale";
import NotreHistoire from "./pages/NotreHistoire";
import NosSolution from "./pages/NosSolution";
import FAQ from "./components/FAQ";
import Core from "./pages/Core";
import Expense from "./pages/Expense";
import ConseilTransformationRH from "./pages/ConseilTransformationRH";
import HrAnalytics from "./pages/HrAnalytics";
import RecrutementSurMesure from "./pages/RecrutementSurMesure";
import ParcoursCollaborateur from "./pages/ParcoursCollaborateur";
import SolutionsDigitales from "./pages/SolutionsDigitales";
import Talents from "./pages/Talents";
import Learn from "./pages/Learn";
import Sign from "./pages/Sign";
import Recrute from "./pages/Recrute";
import Temes from "./pages/Temes";
import NosValeurs from "./pages/NosValeurs";
import TeamsYIELERS from "./pages/TeamsYIELERS";
import NousContacter from "./pages/NousContacter";
import NosMetiers from "./pages/NosMetiers";
import CentreDaideFAQ from "./pages/CentreDaideFAQ";
import CalculateurROI from "./pages/CalculateurROI";
import NosClients from "./pages/NosClients";
import VoixNotreBlogRH from "./pages/VoixNotreBlogRH";
import CookieConsent from "./CookieConsent";
import PlusMyYiel from "./pages/PlusMyYiel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/collaborateurs" element={<Collaborateurs />} />
        <Route path="/conges" element={<Conges />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/rapports" element={<Rapports />} />
        <Route path="/parametres" element={<Parametres />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/conseil-en-transformation-RH" element={<ConseilTransformationRH />} />
        <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
        <Route path="/pilotage-du-parcours-collaborateur" element={<ParcoursCollaborateur />} />
        <Route path="/analytics-HR" element={<HrAnalytics />} />
        <Route path="/recrutement-sur-mesure" element={<RecrutementSurMesure />} />
        <Route path="/solutions-digitales-RH" element={<SolutionsDigitales />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/time" element={<Temes />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/PlusMyYiel" element={<PlusMyYiel />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
        <Route path="/valeurs" element={<NosValeurs />} />
        <Route path="/equipe" element={<TeamsYIELERS />} />
        <Route path="/contact" element={<NousContacter />} />
        <Route path="/partenaires" element={<NosPartenaires />} />
        <Route path="/aide" element={<CentreDaideFAQ />} />
        <Route path="/calculateur" element={<CalculateurROI />} />
        <Route path="/blog-rh" element={<BlogRH />} />
        <Route path="/voix" element={<VoixNotreBlogRH />} />
        <Route path="/mentions-legale" element={<Mentionslegale />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />





        <Route path="/devenez-yieler" element={<DevenezYieler />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/metiers" element={<NosMetiers />} />
        <Route path="/clients" element={<NosClients />} />
        {/* revoir cette composent là  nos-solution */}
        <Route path="/nos-solution" element={<NosSolution />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/core" element={<Core />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/recrute" element={<Recrute />} />
        <Route path="/cookies" element={<SolutionsDigitales />} />
      </Routes>
      <CookieConsent />
    </Router>
  );
}

export default App;


