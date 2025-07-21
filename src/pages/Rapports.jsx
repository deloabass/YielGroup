import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  FileText,
  Eye,
  Share2,
  Settings,
  Clock,
  Award,
  DollarSign,
  AlertTriangle
} from "lucide-react";

function Rapports() {
  const [selectedPeriod, setSelectedPeriod] = useState("mois");
  const [selectedReport, setSelectedReport] = useState("effectifs");

  const periods = [
    { value: "semaine", label: "Cette semaine" },
    { value: "mois", label: "Ce mois" },
    { value: "trimestre", label: "Ce trimestre" },
    { value: "annee", label: "Cette année" },
    { value: "personnalise", label: "Période personnalisée" }
  ];

  const reportTypes = [
    { value: "effectifs", label: "Effectifs", icon: <Users size={20} /> },
    { value: "absences", label: "Absences & Congés", icon: <Calendar size={20} /> },
    { value: "formations", label: "Formations", icon: <Award size={20} /> },
    { value: "performance", label: "Performance", icon: <TrendingUp size={20} /> },
    { value: "couts", label: "Coûts RH", icon: <DollarSign size={20} /> },
    { value: "turnover", label: "Turnover", icon: <RefreshCw size={20} /> }
  ];

  const kpis = [
    {
      title: "Effectif total",
      value: "247",
      change: "+5.2%",
      trend: "up",
      icon: <Users size={24} />,
      color: "text-blue-600"
    },
    {
      title: "Taux d'absentéisme",
      value: "3.8%",
      change: "-0.5%",
      trend: "down",
      icon: <Calendar size={24} />,
      color: "text-green-600"
    },
    {
      title: "Heures de formation",
      value: "1,247h",
      change: "+12.3%",
      trend: "up",
      icon: <Award size={24} />,
      color: "text-purple-600"
    },
    {
      title: "Coût RH moyen",
      value: "2.1M FCFA",
      change: "+3.1%",
      trend: "up",
      icon: <DollarSign size={24} />,
      color: "text-orange-600"
    }
  ];

  const recentReports = [
    {
      id: 1,
      name: "Rapport mensuel effectifs",
      type: "Effectifs",
      date: "2025-04-20",
      status: "Généré",
      size: "2.3 MB"
    },
    {
      id: 2,
      name: "Analyse des absences Q1",
      type: "Absences",
      date: "2025-04-15",
      status: "Généré",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "Bilan formations 2024",
      type: "Formations",
      date: "2025-04-10",
      status: "En cours",
      size: "-"
    },
    {
      id: 4,
      name: "Rapport performance équipes",
      type: "Performance",
      date: "2025-04-08",
      status: "Généré",
      size: "3.1 MB"
    }
  ];

  const chartData = {
    effectifs: {
      title: "Évolution des effectifs",
      data: [
        { month: "Jan", value: 235 },
        { month: "Fév", value: 238 },
        { month: "Mar", value: 242 },
        { month: "Avr", value: 247 }
      ]
    },
    absences: {
      title: "Répartition des absences",
      data: [
        { type: "Congés payés", value: 45 },
        { type: "Maladie", value: 23 },
        { type: "Formation", value: 18 },
        { type: "Autres", value: 14 }
      ]
    }
  };

  const generateReport = () => {
    alert(`Génération du rapport ${reportTypes.find(r => r.value === selectedReport)?.label} pour ${periods.find(p => p.value === selectedPeriod)?.label}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Rapports & Analytics</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Analysez vos données RH et générez des rapports personnalisés
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-3">
                <button
                  onClick={generateReport}
                  className="inline-flex items-center px-4 py-2 bg-[#ea532b] text-white font-medium rounded-lg hover:bg-[#d64a27] transition-colors"
                >
                  <FileText size={20} className="mr-2" />
                  Générer un rapport
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Settings size={20} className="mr-2" />
                  Paramètres
                </button>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-800">{kpi.value}</p>
                    <div className="flex items-center mt-1">
                      <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">vs mois dernier</span>
                    </div>
                  </div>
                  <div className={`${kpi.color}`}>
                    {kpi.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Report Generation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Générer un nouveau rapport</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de rapport</label>
                <select
                  value={selectedReport}
                  onChange={(e) => setSelectedReport(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                >
                  {reportTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Période</label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                >
                  {periods.map(period => (
                    <option key={period.value} value={period.value}>{period.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={generateReport}
                  className="w-full px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors flex items-center justify-center"
                >
                  <Download size={20} className="mr-2" />
                  Générer
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Charts */}
            <div className="lg:col-span-2 space-y-8">
              {/* Effectifs Chart */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Évolution des effectifs</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <RefreshCw size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="h-64 flex items-end justify-between space-x-2">
                  {chartData.effectifs.data.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-[#ea532b] rounded-t-lg transition-all duration-500 hover:bg-[#d64a27]"
                        style={{ height: `${(item.value / 250) * 100}%` }}
                      ></div>
                      <div className="mt-2 text-sm text-gray-600">{item.month}</div>
                      <div className="text-xs font-medium text-gray-800">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Absences Chart */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Répartition des absences</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <RefreshCw size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {chartData.absences.data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: `hsl(${index * 90}, 70%, 50%)` }}
                        ></div>
                        <span className="text-sm text-gray-700">{item.type}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="h-2 rounded-full"
                            style={{ 
                              width: `${(item.value / 50) * 100}%`,
                              backgroundColor: `hsl(${index * 90}, 70%, 50%)`
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Rapports récents</h3>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{report.name}</h4>
                        <div className="flex space-x-1">
                          <button className="text-gray-400 hover:text-[#ea532b] transition-colors">
                            <Eye size={16} />
                          </button>
                          <button className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Download size={16} />
                          </button>
                          <button className="text-gray-400 hover:text-green-600 transition-colors">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{report.type}</span>
                        <span>{new Date(report.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          report.status === "Généré" ? "bg-green-100 text-green-800" :
                          report.status === "En cours" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {report.status}
                        </span>
                        <span className="text-xs text-gray-500">{report.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions rapides</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 text-left bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
                    <span className="flex items-center">
                      <BarChart3 size={16} className="mr-2" />
                      Tableau de bord exécutif
                    </span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <PieChart size={16} className="mr-2" />
                      Analyse des coûts
                    </span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="flex items-center">
                      <TrendingUp size={16} className="mr-2" />
                      Prévisions RH
                    </span>
                  </button>
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Alertes</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-800">Taux d'absentéisme élevé</p>
                      <p className="text-xs text-red-600">Département IT: 8.5% ce mois</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock size={16} className="text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Rapport en retard</p>
                      <p className="text-xs text-yellow-600">Bilan trimestriel à générer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Rapports;