import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Loader from './components/Loading';
import CookieConsent from './CookieConsent';
import { HelmetProvider } from 'react-helmet-async';

// Import de toutes tes pages
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Demo from './pages/Demo';
import DevenezYieler from './pages/DevenezYieler';
import LogIn from './pages/LogIn';
import NosPartenaires from './pages/NosPartenaires';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Mentionslegale from './pages/Mentionslegale';
import NotreHistoire from './pages/NotreHistoire';
import NosSolution from './pages/NosSolution';
import FAQ from './components/FAQ';
import Core from './pages/Core';
import Expense from './pages/Expense';
import ConseilTransformationRH from './pages/ConseilTransformationRH';
import HrAnalytics from './pages/HrAnalytics';
import RecrutementSurMesure from './pages/RecrutementSurMesure';
import ParcoursCollaborateur from './pages/ParcoursCollaborateur';
import SolutionsDigitales from './pages/SolutionsDigitales';
import Talents from './pages/Talents';
import Learn from './pages/Learn';
import Sign from './pages/Sign';
import Recrute from './pages/Recrute';
import Times from './pages/Times';
import NosValeurs from './pages/NosValeurs';
import TeamsYIELERS from './pages/TeamsYIELERS';
import NousContacter from './pages/NousContacter';
import NosMetiers from './pages/NosMetiers';
import CalculateurROI from './pages/CalculateurROI';
import NosClients from './pages/NosClients';
import VoixNotreBlogRH from './pages/VoixNotreBlogRH';
import PlusMyYiel from './pages/PlusMyYiel';
import NotFound from './pages/NotFound';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import EmployeeManagement from './pages/admin/EmployeeManagement';
import RecruitmentManagement from './pages/admin/RecruitmentManagement';
import LeaveManagement from './pages/admin/LeaveManagement';
import ExpenseManagement from './pages/admin/ExpenseManagement';
import ReportsManagement from './pages/admin/ReportsManagement';
import SettingsManagement from './pages/admin/SettingsManagement';
import TrainingManagement from './pages/admin/TrainingManagement';
import DocumentsManagement from './pages/admin/DocumentsManagement';

// Composant qui gère le changement de route et le loader
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/demo" element={<Demo />} />
        <Route
          path="/conseil-en-transformation-RH"
          element={<ConseilTransformationRH />}
        />
        <Route
          path="/pilotage-du-parcours-collaborateur"
          element={<ParcoursCollaborateur />}
        />
        <Route path="/analytics-HR" element={<HrAnalytics />} />
        <Route
          path="/recrutement-sur-mesure"
          element={<RecrutementSurMesure />}
        />
        <Route
          path="/solutions-digitales-RH"
          element={<SolutionsDigitales />}
        />
        <Route path="/talents" element={<Talents />} />
        <Route path="/time" element={<Times />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/plus-my-yiel" element={<PlusMyYiel />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
        <Route path="/valeurs" element={<NosValeurs />} />
        <Route path="/equipe" element={<TeamsYIELERS />} />
        <Route path="/contact" element={<NousContacter />} />
        <Route path="/partenaires" element={<NosPartenaires />} />
        <Route path="/calculateur" element={<CalculateurROI />} />
        <Route path="/voix" element={<VoixNotreBlogRH />} />
        <Route path="/mentions-legale" element={<Mentionslegale />} />
        <Route
          path="/politique-de-confidentialite"
          element={<PolitiqueConfidentialite />}
        />
        <Route path="/devenez-yieler" element={<DevenezYieler />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/metiers" element={<NosMetiers />} />
        <Route path="/clients" element={<NosClients />} />
        <Route path="/nos-solution" element={<NosSolution />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/core" element={<Core />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/recrute" element={<Recrute />} />
        <Route path="/cookies" element={<SolutionsDigitales />} />
        <Route path="/loader" element={<Loader />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/employees" element={<EmployeeManagement />} />
        <Route path="/admin/recruitment" element={<RecruitmentManagement />} />
        <Route path="/admin/leaves" element={<LeaveManagement />} />
        <Route path="/admin/expenses" element={<ExpenseManagement />} />
        <Route path="/admin/reports" element={<ReportsManagement />} />
        <Route path="/admin/settings" element={<SettingsManagement />} />
        <Route path="/admin/training" element={<TrainingManagement />} />
        <Route path="/admin/documents" element={<DocumentsManagement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <HelmetProvider>
        <AppContent />
      </HelmetProvider>
    </Router>
  );
}
