import React, { useState, useEffect, useRef } from "react";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Download, 
  Mail,
  ChevronRight,
  BarChart3,
  Calendar,
  Target,
  Zap,
  Shield,
  BookOpen,
  PieChart
} from "lucide-react";
import './Style.css'

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function CalculateurROI() {
  const navigate = useNavigate();
  const topRef = useRef(null);
  const [formData, setFormData] = useState({
    employees: 100,
    currentHRTime: 8,
    salaryHR: 50000,
    paperCosts: 2000,
    recruitmentCosts: 15000,
    trainingCosts: 20000,
    complianceRisks: 5000,
    turnoverRate: 15
  });

  const [results, setResults] = useState({});
  const [isVisible, setIsVisible] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("section[id]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Calcul du ROI
  useEffect(() => {
    calculateROI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const calculateROI = () => {
    const { employees, currentHRTime, salaryHR, paperCosts, recruitmentCosts, trainingCosts, complianceRisks, turnoverRate } = formData;
    
    // Coûts actuels annuels
    const hrTimeCost = (currentHRTime * salaryHR * employees) / 100;
    const totalCurrentCosts = hrTimeCost + paperCosts + recruitmentCosts + trainingCosts + complianceRisks;
    
    // Économies avec SIRH (estimations conservatives)
    const hrTimeReduction = 0.4; // 40% de réduction du temps administratif
    const paperReduction = 0.8; // 80% de réduction des coûts papier
    const recruitmentImprovement = 0.3; // 30% d'amélioration du recrutement
    const trainingEfficiency = 0.25; // 25% d'amélioration de l'efficacité formation
    const complianceReduction = 0.6; // 60% de réduction des risques
    const turnoverReduction = 0.2; // 20% de réduction du turnover
    
    const hrTimeSavings = hrTimeCost * hrTimeReduction;
    const paperSavings = paperCosts * paperReduction;
    const recruitmentSavings = recruitmentCosts * recruitmentImprovement;
    const trainingSavings = trainingCosts * trainingEfficiency;
    const complianceSavings = complianceRisks * complianceReduction;
    const turnoverSavings = (employees * (salaryHR * 0.5) * (turnoverRate / 100)) * turnoverReduction;
    
    const totalSavings = hrTimeSavings + paperSavings + recruitmentSavings + trainingSavings + complianceSavings + turnoverSavings;
    
    // Coût du SIRH (estimation)
    const sirhCostPerEmployee = employees < 50 ? 50 : employees < 200 ? 40 : employees < 500 ? 30 : 25;
    const sirhAnnualCost = employees * sirhCostPerEmployee;
    
    const netSavings = totalSavings - sirhAnnualCost;
    const roi = ((netSavings / sirhAnnualCost) * 100);
    const paybackPeriod = sirhAnnualCost / (totalSavings / 12);
    
    setResults({
      currentCosts: totalCurrentCosts,
      totalSavings,
      sirhCost: sirhAnnualCost,
      netSavings,
      roi,
      paybackPeriod,
      hrTimeSavings,
      paperSavings,
      recruitmentSavings,
      trainingSavings,
      complianceSavings,
      turnoverSavings,
      productivityGain: hrTimeSavings / hrTimeCost * 100
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  const handleCalculate = () => {
    setShowResults(true);
    const resultsSection = document.getElementById('results');
    resultsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadReport = () => {
    if (email) {
      // Simuler l'envoi du rapport
      alert(`Rapport envoyé à ${email}!`);
      setShowEmailForm(false);
      setEmail('');
    } else {
      setShowEmailForm(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" ref={topRef}>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          id="hero"
          className={`relative py-16 md:py-24 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden ${
            isVisible["hero"] ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('./VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6">
                  CALCULATEUR ROI
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Calculez le ROI de votre 
                  <span className="text-[#ea532b]"> transformation RH digitale</span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Découvrez en quelques clics les économies potentielles et le retour sur investissement 
                  d'une solution SIRH adaptée à votre entreprise.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2" />
                    <span className="text-sm">Calcul personnalisé</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2" />
                    <span className="text-sm">Rapport détaillé</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-[#ea532b] mr-2" />
                    <span className="text-sm">Gratuit & sans engagement</span>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">240%</div>
                      <div className="text-sm text-gray-300">ROI moyen</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">8</div>
                      <div className="text-sm text-gray-300">mois de retour</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">40%</div>
                      <div className="text-sm text-gray-300">gain de temps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">60%</div>
                      <div className="text-sm text-gray-300">réduction erreurs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full h-40"
              preserveAspectRatio="none"
            >
              <path
                fill="#ea532b"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Calculateur Section */}
        <section 
          id="calculator"
          className={`py-16 md:py-20 bg-white ${
            isVisible["calculator"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Personnalisez votre <span className="text-[#ea532b]">calcul ROI</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Renseignez les informations de votre entreprise pour obtenir une estimation précise 
                du retour sur investissement d'une solution SIRH.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#2f365b] mb-6 flex items-center">
                  <Calculator className="h-6 w-6 mr-3 text-[#ea532b]" />
                  Vos paramètres
                </h3>
                
                <div className="space-y-6">
                  {/* Nombre d'employés */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-2">
                      Nombre d'employés
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="range"
                        min="10"
                        max="2000"
                        step="10"
                        value={formData.employees}
                        onChange={(e) => handleInputChange('employees', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>10</span>
                        <span className="font-semibold text-[#ea532b]">{formData.employees}</span>
                        <span>2000+</span>
                      </div>
                    </div>
                  </div>

                  {/* Temps RH administratif */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-2">
                      Temps RH administratif (heures/semaine)
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="range"
                        min="2"
                        max="40"
                        value={formData.currentHRTime}
                        onChange={(e) => handleInputChange('currentHRTime', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>2h</span>
                        <span className="font-semibold text-[#ea532b]">{formData.currentHRTime}h</span>
                        <span>40h+</span>
                      </div>
                    </div>
                  </div>

                  {/* Salaire moyen RH */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-2">
                      Salaire annuel moyen équipe RH (€)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.salaryHR}
                        onChange={(e) => handleInputChange('salaryHR', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        placeholder="50000"
                      />
                    </div>
                  </div>

                  {/* Coûts papier */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-2">
                      Coûts papier/impression annuels (€)
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.paperCosts}
                        onChange={(e) => handleInputChange('paperCosts', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        placeholder="2000"
                      />
                    </div>
                  </div>

                  {/* Coûts de recrutement */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-2">
                      Budget recrutement annuel (€)
                    </label>
                    <div className="relative">
                      <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.recruitmentCosts}
                        onChange={(e) => handleInputChange('recruitmentCosts', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                        placeholder="15000"
                      />
                    </div>
                  </div>

                  {/* Taux de turnover */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-2">
                      Taux de turnover annuel (%)
                    </label>
                    <div className="relative">
                      <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={formData.turnoverRate}
                        onChange={(e) => handleInputChange('turnoverRate', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>0%</span>
                        <span className="font-semibold text-[#ea532b]">{formData.turnoverRate}%</span>
                        <span>50%+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full mt-8 cursor-pointer px-7 py-3 bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white font-semibold rounded-full shadow-lg hover:from-[#d64a27] hover:to-[#c44125] transition-all duration-300 flex items-center justify-center"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculer mon ROI
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>

              {/* Aperçu des bénéfices */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#2f365b] to-[#3a4272] text-white rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Zap className="h-6 w-6 mr-3 text-[#ea532b]" />
                    Bénéfices attendus
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-[#ea532b] mr-2" />
                        <span className="font-semibold">Gain de temps</span>
                      </div>
                      <div className="text-2xl font-bold text-[#ea532b]">40%</div>
                      <div className="text-sm text-gray-300">sur les tâches administratives</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-[#ea532b] mr-2" />
                        <span className="font-semibold">Conformité</span>
                      </div>
                      <div className="text-2xl font-bold text-[#ea532b]">60%</div>
                      <div className="text-sm text-gray-300">réduction des risques</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-[#ea532b] mr-2" />
                        <span className="font-semibold">Satisfaction</span>
                      </div>
                      <div className="text-2xl font-bold text-[#ea532b]">+35%</div>
                      <div className="text-sm text-gray-300">engagement collaborateurs</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <BarChart3 className="h-5 w-5 text-[#ea532b] mr-2" />
                        <span className="font-semibold">Productivité</span>
                      </div>
                      <div className="text-2xl font-bold text-[#ea532b]">+25%</div>
                      <div className="text-sm text-gray-300">efficacité globale RH</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
                  <h4 className="text-xl font-bold text-[#2f365b] mb-4">Pourquoi calculer votre ROI ?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Justifier votre investissement auprès de la direction</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Identifier les gains potentiels les plus importants</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Planifier votre transformation digitale RH</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Comparer différentes solutions SIRH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {showResults && (
          <section 
            id="results"
            className="py-16 md:py-20 bg-gray-50"
          >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                  Vos <span className="text-[#ea532b]">résultats personnalisés</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Basé sur vos paramètres, voici l'impact potentiel d'une solution SIRH sur votre entreprise.
                </p>
              </div>

              {/* Résultats principaux */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white rounded-2xl p-6 md:p-8 text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">
                    {results.roi >= 0 ? Math.round(results.roi) : 0}%
                  </div>
                  <div className="text-lg font-semibold mb-1">ROI la première année</div>
                  <div className="text-sm opacity-90">Retour sur investissement</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-[#ea532b]" />
                  <div className="text-4xl font-bold text-[#2f365b] mb-2">
                    {Math.round(results.paybackPeriod)} mois
                  </div>
                  <div className="text-lg font-semibold text-[#2f365b] mb-1">Retour sur investissement</div>
                  <div className="text-sm text-gray-600">Période d'amortissement</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-[#ea532b]" />
                  <div className="text-4xl font-bold text-[#2f365b] mb-2">
                    {Math.round(results.netSavings).toLocaleString()}€
                  </div>
                  <div className="text-lg font-semibold text-[#2f365b] mb-1">Économies nettes</div>
                  <div className="text-sm text-gray-600">Première année</div>
                </div>
              </div>

              {/* Détail des économies */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#2f365b] mb-6 flex items-center">
                    <PieChart className="h-6 w-6 mr-3 text-[#ea532b]" />
                    Répartition des économies
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Gain de productivité RH</span>
                      <span className="font-bold text-[#ea532b]">
                        {Math.round(results.hrTimeSavings).toLocaleString()}€
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Réduction coûts papier</span>
                      <span className="font-bold text-[#ea532b]">
                        {Math.round(results.paperSavings).toLocaleString()}€
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Optimisation recrutement</span>
                      <span className="font-bold text-[#ea532b]">
                        {Math.round(results.recruitmentSavings).toLocaleString()}€
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Efficacité formation</span>
                      <span className="font-bold text-[#ea532b]">
                        {Math.round(results.trainingSavings).toLocaleString()}€
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Réduction risques conformité</span>
                      <span className="font-bold text-[#ea532b]">
                        {Math.round(results.complianceSavings).toLocaleString()}€
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Réduction turnover</span>
                      <span className="font-bold text-[#ea532b]">
                        {Math.round(results.turnoverSavings).toLocaleString()}€
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#2f365b] mb-6 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-3 text-[#ea532b]" />
                    Analyse de l'investissement
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Coût SIRH annuel</span>
                        <span className="font-bold text-[#2f365b]">
                          {Math.round(results.sirhCost).toLocaleString()}€
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: '30%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Économies totales</span>
                        <span className="font-bold text-[#ea532b]">
                          {Math.round(results.totalSavings).toLocaleString()}€
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#ea532b] h-2 rounded-full" 
                          style={{ width: '100%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-[#2f365b]">Gain net annuel</span>
                        <span className="text-2xl font-bold text-[#ea532b]">
                          {Math.round(results.netSavings).toLocaleString()}€
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold text-[#2f365b] mb-4">
                    Recevez votre rapport détaillé
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Obtenez une analyse complète de votre ROI avec des recommandations personnalisées
                  </p>
                  
                  {showEmailForm ? (
                    <div className="max-w-md mx-auto">
                      <div className="flex gap-4">
                        <div className="relative flex-1">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            placeholder="votre.email@entreprise.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                          />
                        </div>
                        <button
                          onClick={handleDownloadReport}
                          className="px-7 py-3 bg-[#ea532b] text-white font-semibold rounded-full hover:bg-[#d64a27] transition-colors duration-300"
                        >
                          Envoyer
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={handleDownloadReport}
                      className="cursor-pointer px-7 py-3 bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white font-semibold rounded-full shadow-lg hover:from-[#d64a27] hover:to-[#c44125] transition-all duration-300 flex items-center mx-auto"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Télécharger le rapport complet
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      setShowResults(false);
                      topRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-pointer px-7 py-3 border-2 border-[#ea532b] text-[#ea532b] font-semibold rounded-full hover:bg-[#ea532b] hover:text-white transition-all duration-300"
                  >
                    Modifier les paramètres
                  </button>
                  <button onClick={() => navigate("/demo")} className="cursor-pointer px-7 py-3 bg-[#2f365b] text-white font-semibold rounded-full hover:bg-transparent border-2 border-[#2f365b] hover:text-[#2f365b] transition-colors duration-300">
                    Demander une démo
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section témoignages/cas d'usage */}
        <section 
          id="testimonials"
          className={`py-16 md:py-20 bg-white ${
            isVisible["testimonials"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Ils ont <span className="text-[#ea532b]">transformé leur RH</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez comment nos clients ont optimisé leurs processus RH et obtenu un ROI exceptionnel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#ea532b] mb-2">320%</div>
                  <div className="text-sm text-gray-600">ROI en 12 mois</div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Notre transformation RH nous a permis de réduire de 50% le temps administratif 
                  et d'améliorer significativement l'expérience collaborateur."
                </blockquote>
                <div className="font-semibold text-[#2f365b]">— Sarah M., DRH</div>
                <div className="text-sm text-gray-600">Entreprise 250 employés</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#ea532b] mb-2">6 mois</div>
                  <div className="text-sm text-gray-600">Retour sur investissement</div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "L'automatisation des processus RH nous a fait économiser plus de 40 000€ 
                  dès la première année d'utilisation."
                </blockquote>
                <div className="font-semibold text-[#2f365b]">— Marc L., Directeur Général</div>
                <div className="text-sm text-gray-600">PME 120 employés</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#ea532b] mb-2">60%</div>
                  <div className="text-sm text-gray-600">Réduction erreurs</div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "La digitalisation RH a révolutionné notre gestion des talents et 
                  considérablement réduit nos risques de non-conformité."
                </blockquote>
                <div className="font-semibold text-[#2f365b]">— Julie R., Responsable RH</div>
                <div className="text-sm text-gray-600">Groupe 800 employés</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à <span className="text-[#ea532b]">optimiser votre RH</span> ?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-200">
              Nos experts vous accompagnent dans le choix et la mise en œuvre 
              de la solution SIRH parfaitement adaptée à vos besoins.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate("/demo")} className="cursor-pointer px-7 py-3 bg-[#ea532b] hover:bg-[#d64a27] text-white font-semibold rounded-full transition-colors duration-300 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Demander une démo
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
              <button className="cursor-pointer px-7 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#2f365b] transition-all duration-300 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Télécharger le guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CalculateurROI;





