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
  PieChart,
  Building,
  Briefcase
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function CalculateurROI() {
  const navigate = useNavigate();
  const topRef = useRef(null);
  const [formData, setFormData] = useState({
    employees: 50,
    currentHRTime: 8,
    salaryHR: 2500000, // 2.5M FCFA par mois
    paperCosts: 500000, // 500k FCFA
    recruitmentCosts: 3000000, // 3M FCFA
    trainingCosts: 2000000, // 2M FCFA
    complianceRisks: 1000000, // 1M FCFA
    turnoverRate: 20
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

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M FCFA`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}k FCFA`;
    }
    return `${Math.round(amount).toLocaleString()} FCFA`;
  };

  const calculateROI = () => {
    const { employees, currentHRTime, salaryHR, paperCosts, recruitmentCosts, trainingCosts, complianceRisks, turnoverRate } = formData;
    
    // Coûts actuels annuels (salaire mensuel * 12)
    const annualSalaryHR = salaryHR * 12;
    const hrTimeCost = (currentHRTime * annualSalaryHR * employees) / (40 * 52); // Coût du temps administratif
    const totalCurrentCosts = hrTimeCost + paperCosts + recruitmentCosts + trainingCosts + complianceRisks;
    
    // Économies avec SIRH (estimations adaptées au marché africain)
    const hrTimeReduction = 0.45; // 45% de réduction du temps administratif
    const paperReduction = 0.85; // 85% de réduction des coûts papier (plus impactant en Afrique)
    const recruitmentImprovement = 0.35; // 35% d'amélioration du recrutement
    const trainingEfficiency = 0.30; // 30% d'amélioration de l'efficacité formation
    const complianceReduction = 0.70; // 70% de réduction des risques (conformité importante)
    const turnoverReduction = 0.25; // 25% de réduction du turnover
    
    const hrTimeSavings = hrTimeCost * hrTimeReduction;
    const paperSavings = paperCosts * paperReduction;
    const recruitmentSavings = recruitmentCosts * recruitmentImprovement;
    const trainingSavings = trainingCosts * trainingEfficiency;
    const complianceSavings = complianceRisks * complianceReduction;
    const turnoverSavings = (employees * (annualSalaryHR * 0.3) * (turnoverRate / 100)) * turnoverReduction;
    
    const totalSavings = hrTimeSavings + paperSavings + recruitmentSavings + trainingSavings + complianceSavings + turnoverSavings;
    
    // Coût du SIRH (adapté au marché africain)
    const sirhCostPerEmployee = employees < 25 ? 35000 : employees < 100 ? 28000 : employees < 300 ? 22000 : 18000;
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
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      resultsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleDownloadReport = () => {
    if (email) {
      alert(`Rapport ROI envoyé à ${email} !`);
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
          className={`relative py-20 md:py-24 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white overflow-hidden ${
            isVisible["hero"] ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          {/* Effets visuels d'arrière-plan */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/VisionYiel.png')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#ea532b]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ea532b]/40 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#ea532b]/15 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-[#ea532b]/20 text-[#ea532b] font-medium text-sm mb-6 border border-[#ea532b]/30">
                   CALCULATEUR ROI SIRH
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Mesurez l'impact de votre 
                  <span className="text-[#ea532b]"> digitalisation RH</span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-8 text-gray-200">
                  Découvrez combien votre entreprise pourrait économiser avec une solution SIRH moderne. 
                  Calcul personnalisé en quelques minutes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                    <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0" />
                    <span className="text-sm">Calcul en temps réel</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                    <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0" />
                    <span className="text-sm">Rapport personnalisé</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                    <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0" />
                    <span className="text-sm">100% gratuit</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                    <CheckCircle className="h-5 w-5 text-[#ea532b] mr-3 flex-shrink-0" />
                    <span className="text-sm">Sans engagement</span>
                  </div>
                </div>
              </div>

              {/* Statistiques visuelles */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-semibold mb-6 text-center">Résultats moyens observés</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">285%</div>
                      <div className="text-sm text-gray-300">ROI moyen</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">6</div>
                      <div className="text-sm text-gray-300">mois retour</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">45%</div>
                      <div className="text-sm text-gray-300">gain temps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#ea532b] mb-2">70%</div>
                      <div className="text-sm text-gray-300">moins d'erreurs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Calculateur */}
        <section 
          id="calculator"
          className={`py-16 md:py-20 bg-white ${
            isVisible["calculator"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-6">
                Calculez votre <span className="text-[#ea532b]">ROI personnalisé</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques informations sur votre entreprise suffisent pour estimer précisément 
                les bénéfices d'une solution SIRH adaptée à votre contexte africain.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Formulaire - 2/3 de la largeur */}
              <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#2f365b] mb-8 flex items-center">
                  <Calculator className="h-7 w-7 mr-3 text-[#ea532b]" />
                  Paramètres de votre entreprise
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre d'employés */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#2f365b] mb-3 items-center">
                      <Users className="h-4 w-4 mr-2 text-[#ea532b]" />
                      Nombre d'employés
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="1000"
                      step="5"
                      value={formData.employees}
                      onChange={(e) => handleInputChange('employees', e.target.value)}
                      className="accent-orange-600 w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-3"
                      style={{
                        background: `linear-gradient(to right, #ea532b 0%, #ea532b ${(formData.employees / 1000) * 100}%, #e5e7eb ${(formData.employees / 1000) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>5</span>
                      <span className="font-bold text-[#ea532b] text-lg">{formData.employees} employés</span>
                      <span>1000+</span>
                    </div>
                  </div>

                  {/* Temps RH administratif */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-3 items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#ea532b]" />
                      Temps RH admin (h/semaine)
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="40"
                      value={formData.currentHRTime}
                      onChange={(e) => handleInputChange('currentHRTime', e.target.value)}
                      className="accent-orange-600 w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-3"
                      style={{
                        background: `linear-gradient(to right, #ea532b 0%, #ea532b ${(formData.currentHRTime / 40) * 100}%, #e5e7eb ${(formData.currentHRTime / 40) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="text-center">
                      <span className="font-bold text-[#ea532b] text-lg">{formData.currentHRTime}h</span>
                    </div>
                  </div>

                  {/* Taux de turnover */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-3 items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-[#ea532b]" />
                      Taux turnover (%/an)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={formData.turnoverRate}
                      onChange={(e) => handleInputChange('turnoverRate', e.target.value)}
                      className="accent-orange-600 w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-3"
                      style={{
                        background: `linear-gradient(to right, #ea532b 0%, #ea532b ${(formData.turnoverRate / 50) * 100}%, #e5e7eb ${(formData.turnoverRate / 50) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="text-center">
                      <span className="font-bold text-[#ea532b] text-lg">{formData.turnoverRate}%</span>
                    </div>
                  </div>

                  {/* Salaire RH mensuel */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-3 items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-[#ea532b]" />
                      Salaire RH mensuel (FCFA)
                    </label>
                    <input
                      type="number"
                      value={formData.salaryHR}
                      onChange={(e) => handleInputChange('salaryHR', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] bg-white text-center font-semibold"
                      placeholder="2500000"
                    />
                    <div className="text-center text-sm text-gray-500 mt-1">
                      {formatCurrency(formData.salaryHR)}/mois
                    </div>
                  </div>

                  {/* Coûts papier */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-3 items-center">
                      <FileText className="h-4 w-4 mr-2 text-[#ea532b]" />
                      Coûts papier/an (FCFA)
                    </label>
                    <input
                      type="number"
                      value={formData.paperCosts}
                      onChange={(e) => handleInputChange('paperCosts', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] bg-white text-center font-semibold"
                      placeholder="500000"
                    />
                    <div className="text-center text-sm text-gray-500 mt-1">
                      {formatCurrency(formData.paperCosts)}/an
                    </div>
                  </div>

                  {/* Budget recrutement */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-3 items-center">
                      <Target className="h-4 w-4 mr-2 text-[#ea532b]" />
                      Budget recrutement/an (FCFA)
                    </label>
                    <input
                      type="number"
                      value={formData.recruitmentCosts}
                      onChange={(e) => handleInputChange('recruitmentCosts', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] bg-white text-center font-semibold"
                      placeholder="3000000"
                    />
                    <div className="text-center text-sm text-gray-500 mt-1">
                      {formatCurrency(formData.recruitmentCosts)}/an
                    </div>
                  </div>

                  {/* Budget formation */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-3 items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-[#ea532b]" />
                      Budget formation/an (FCFA)
                    </label>
                    <input
                      type="number"
                      value={formData.trainingCosts}
                      onChange={(e) => handleInputChange('trainingCosts', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] bg-white text-center font-semibold"
                      placeholder="2000000"
                    />
                    <div className="text-center text-sm text-gray-500 mt-1">
                      {formatCurrency(formData.trainingCosts)}/an
                    </div>
                  </div>

                  {/* Risques conformité */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2f365b] mb-3  items-center">
                      <Shield className="h-4 w-4 mr-2 text-[#ea532b]" />
                      Risques conformité/an (FCFA)
                    </label>
                    <input
                      type="number"
                      value={formData.complianceRisks}
                      onChange={(e) => handleInputChange('complianceRisks', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b] bg-white text-center font-semibold"
                      placeholder="1000000"
                    />
                    <div className="text-center text-sm text-gray-500 mt-1">
                      {formatCurrency(formData.complianceRisks)}/an
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full mt-8 cursor-pointer px-7 py-3 bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white font-bold rounded-full shadow-lg hover:from-[#d64a27] hover:to-[#c44125] transition-all duration-300 flex items-center justify-center text-lg group"
                >
                  <Calculator className="h-6 w-6 mr-3" />
                  Calculer mon ROI maintenant
                  <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Panel des avantages - 1/3 de la largeur */}
              <div className="space-y-6">
                {/* Bénéfices instantanés */}
                <div className="bg-gradient-to-br from-[#2f365b] to-[#3a4272] text-white rounded-2xl p-6 border border-[#2f365b]/20">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Zap className="h-6 w-6 mr-3 text-[#ea532b]" />
                    Bénéfices immédiats
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-[#ea532b] mr-2" />
                        <span className="font-semibold text-sm">Gain de temps</span>
                      </div>
                      <div className="text-2xl font-bold text-[#ea532b]">45%</div>
                      <div className="text-xs text-gray-300">tâches admin automatisées</div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-[#ea532b] mr-2" />
                        <span className="font-semibold text-sm">Conformité</span>
                      </div>
                      <div className="text-2xl font-bold text-[#ea532b]">70%</div>
                      <div className="text-xs text-gray-300">réduction des risques</div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center mb-2">
                        <BarChart3 className="h-5 w-5 text-[#ea532b] mr-2" />
                        <span className="font-semibold text-sm">Productivité</span>
                      </div>
                      <div className="text-2xl font-bold text-[#ea532b]">+30%</div>
                      <div className="text-xs text-gray-300">efficacité équipe RH</div>
                    </div>
                  </div>
                </div>

                {/* Pourquoi calculer */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-[#2f365b] mb-4 flex items-center">
                    <Building className="h-5 w-5 mr-2 text-[#ea532b]" />
                    Pourquoi ce calcul ?
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Justifier l'investissement</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Identifier les gains prioritaires</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Planifier la transformation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#ea532b] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Comparer les solutions</span>
                    </div>
                  </div>
                </div>

                {/* Contexte africain */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-[#ea532b]/20 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-[#2f365b] mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-[#ea532b]" />
                    Spécifique à l'Afrique
                  </h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>• Calculs adaptés au marché local</p>
                    <p>• Conformité réglementaire africaine</p>
                    <p>• Réduction massive du papier</p>
                    <p>• Amélioration gouvernance RH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Résultats */}
        {showResults && (
          <section 
            id="results"
            className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ease-in-out"
          >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2f365b] mb-4">
                  Votre <span className="text-[#ea532b]">ROI personnalisé</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Découvrez le potentiel d'économies de votre entreprise
                </p>
              </div>

              {/* Métriques principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#ea532b]">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="h-8 w-8 text-[#ea532b]" />
                    <span className="text-3xl font-bold text-[#ea532b]">
                      {Math.round(results.roi)}%
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#2f365b]">ROI Annuel</h3>
                  <p className="text-sm text-gray-600">Retour sur investissement</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-4">
                    <Calendar className="h-8 w-8 text-green-500" />
                    <span className="text-3xl font-bold text-green-500">
                      {Math.round(results.paybackPeriod)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#2f365b]">Mois</h3>
                  <p className="text-sm text-gray-600">Retour sur investissement</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-500" />
                    <span className="text-3xl font-bold text-blue-500">
                      {formatCurrency(results.netSavings)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#2f365b]">Économies nettes</h3>
                  <p className="text-sm text-gray-600">Par année</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="h-8 w-8 text-purple-500" />
                    <span className="text-3xl font-bold text-purple-500">
                      {Math.round(results.productivityGain)}%
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#2f365b]">Gain productivité</h3>
                  <p className="text-sm text-gray-600">Temps admin économisé</p>
                </div>
              </div>

              {/* Détail des économies */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#2f365b] mb-6 flex items-center">
                    <PieChart className="h-7 w-7 mr-3 text-[#ea532b]" />
                    Répartition des économies
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-[#ea532b] mr-3" />
                        <span className="font-medium">Temps administratif</span>
                      </div>
                      <span className="font-bold text-[#ea532b]">{formatCurrency(results.hrTimeSavings)}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-green-500 mr-3" />
                        <span className="font-medium">Réduction papier</span>
                      </div>
                      <span className="font-bold text-green-500">{formatCurrency(results.paperSavings)}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 text-blue-500 mr-3" />
                        <span className="font-medium">Recrutement optimisé</span>
                      </div>
                      <span className="font-bold text-blue-500">{formatCurrency(results.recruitmentSavings)}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-purple-500 mr-3" />
                        <span className="font-medium">Formation efficace</span>
                      </div>
                      <span className="font-bold text-purple-500">{formatCurrency(results.trainingSavings)}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-orange-500 mr-3" />
                        <span className="font-medium">Conformité renforcée</span>
                      </div>
                      <span className="font-bold text-orange-500">{formatCurrency(results.complianceSavings)}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-red-500 mr-3" />
                        <span className="font-medium">Rétention employés</span>
                      </div>
                      <span className="font-bold text-red-500">{formatCurrency(results.turnoverSavings)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#2f365b] mb-6 flex items-center">
                    <BarChart3 className="h-7 w-7 mr-3 text-[#ea532b]" />
                    Analyse financière
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Coûts actuels (par an)</h4>
                      <div className="text-2xl font-bold text-red-600">{formatCurrency(results.currentCosts)}</div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Coût SIRH (par an)</h4>
                      <div className="text-2xl font-bold text-blue-600">{formatCurrency(results.sirhCost)}</div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Économies totales (par an)</h4>
                      <div className="text-2xl font-bold text-green-600">{formatCurrency(results.totalSavings)}</div>
                    </div>
                    
                    <div className="bg-[#ea532b]/10 border border-[#ea532b]/30 rounded-lg p-4">
                      <h4 className="font-semibold text-[#ea532b] mb-2">Bénéfice net (par an)</h4>
                      <div className="text-3xl font-bold text-[#ea532b]">{formatCurrency(results.netSavings)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                  <h3 className="text-xl font-bold text-[#2f365b] mb-4">
                    Obtenez votre rapport détaillé
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    Recevez une analyse complète avec recommandations personnalisées
                  </p>
                  
                  {showEmailForm ? (
                    <div className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre.email@entreprise.com"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-[#ea532b]"
                      />
                      <div className="flex gap-3">
                        <button
                          onClick={handleDownloadReport}
                          className="flex-1 px-6 py-3 bg-[#ea532b] text-white font-bold rounded-lg hover:bg-[#d64a27] transition-colors duration-300 flex items-center justify-center"
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          Envoyer le rapport
                        </button>
                        <button
                          onClick={() => setShowEmailForm(false)}
                          className="px-6 py-3 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400 transition-colors duration-300"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={handleDownloadReport}
                      className="px-8 py-4 bg-gradient-to-r from-[#ea532b] to-[#d64a27] text-white font-bold rounded-xl shadow-lg hover:from-[#d64a27] hover:to-[#c44125] transition-all duration-300 flex items-center justify-center mx-auto group"
                    >
                      <Download className="h-6 w-6 mr-3" />
                      Télécharger le rapport complet
                      <ChevronRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section CTA final */}
        <section className="py-16 bg-gradient-to-r from-[#2f365b] to-[#3a4272] text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre <span className="text-[#ea532b]">gestion RH</span> ?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Rejoignez les centaines d'entreprises africaines qui ont déjà optimisé 
              leur gestion RH avec des solutions modernes et adaptées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  if (topRef.current) {
                    topRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="cursor-pointer px-7 py-3 bg-[#ea532b] text-white font-bold rounded-full shadow-lg hover:bg-[#d64a27] transition-all duration-300 flex items-center"
              >
                Refaire le calcul
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
              <button onClick={() => navigate("/demo")} className="cursor-pointer px-7 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                Demander une démo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CalculateurROI;