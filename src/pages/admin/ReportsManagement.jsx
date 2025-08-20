import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Filter,
  FileText,
  Users,
  TrendingUp,
  PieChart,
  Activity,
  Clock,
  DollarSign,
  Award,
  Target,
  Eye,
  Plus
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const ReportsManagement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedReport, setSelectedReport] = useState('overview');

  const reportTypes = [
    {
      id: 'overview',
      title: 'Vue d\'ensemble RH',
      description: 'Rapport global sur tous les indicateurs RH',
      icon: <BarChart3 size={24} />,
      color: 'bg-blue-500'
    },
    {
      id: 'employees',
      title: 'Rapport Employés',
      description: 'Effectifs, mouvements, démographie',
      icon: <Users size={24} />,
      color: 'bg-green-500'
    },
    {
      id: 'performance',
      title: 'Performance',
      description: 'Objectifs, évaluations, productivité',
      icon: <Target size={24} />,
      color: 'bg-purple-500'
    },
    {
      id: 'attendance',
      title: 'Présences & Absences',
      description: 'Congés, absences, temps de travail',
      icon: <Clock size={24} />,
      color: 'bg-orange-500'
    },
    {
      id: 'expenses',
      title: 'Notes de Frais',
      description: 'Dépenses, remboursements, budgets',
      icon: <DollarSign size={24} />,
      color: 'bg-red-500'
    },
    {
      id: 'training',
      title: 'Formations',
      description: 'Formations, compétences, certifications',
      icon: <Award size={24} />,
      color: 'bg-indigo-500'
    }
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Rapport Mensuel RH - Janvier 2025',
      type: 'Vue d\'ensemble RH',
      generatedDate: '2025-01-31',
      generatedBy: 'Admin System',
      size: '2.4 MB',
      downloads: 12
    },
    {
      id: 2,
      name: 'Analyse Performance Q4 2024',
      type: 'Performance',
      generatedDate: '2025-01-15',
      generatedBy: 'Julie Moreau',
      size: '1.8 MB',
      downloads: 8
    },
    {
      id: 3,
      name: 'Rapport Absences Décembre 2024',
      type: 'Présences & Absences',
      generatedDate: '2025-01-05',
      generatedBy: 'Sophie Martin',
      size: '1.2 MB',
      downloads: 15
    }
  ];

  const kpiData = {
    overview: [
      { label: 'Total Employés', value: '247', change: '+5%', positive: true },
      { label: 'Turnover', value: '4.8%', change: '-1.2%', positive: true },
      { label: 'Satisfaction', value: '87%', change: '+3%', positive: true },
      { label: 'Productivité', value: '92%', change: '+2%', positive: true }
    ],
    employees: [
      { label: 'Nouveaux Employés', value: '12', change: '+3', positive: true },
      { label: 'Départs', value: '5', change: '-2', positive: true },
      { label: 'Promotions', value: '8', change: '+1', positive: true },
      { label: 'Mutations', value: '3', change: '0', positive: true }
    ],
    performance: [
      { label: 'Objectifs Atteints', value: '85%', change: '+4%', positive: true },
      { label: 'Évaluations', value: '94%', change: '+2%', positive: true },
      { label: 'Plans Développement', value: '76%', change: '+8%', positive: true },
      { label: 'Feedback Positif', value: '89%', change: '+1%', positive: true }
    ]
  };

  const currentKpis = kpiData[selectedReport] || kpiData.overview;

  const generateReport = () => {
    console.log(`Génération du rapport: ${selectedReport} pour la période: ${selectedPeriod}`);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2f365b]">
              Rapports & Analytics
            </h1>
            <p className="text-gray-600 mt-1">
              Générez et consultez vos rapports RH détaillés
            </p>
          </div>
          <button 
            onClick={generateReport}
            className="flex items-center px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors mt-4 md:mt-0"
          >
            <Plus size={18} className="mr-2" />
            Générer Rapport
          </button>
        </div>

        {/* Report Configuration */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Configuration du Rapport</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type de Rapport</label>
              <select 
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              >
                {reportTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Période</label>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              >
                <option value="week">Cette semaine</option>
                <option value="month">Ce mois</option>
                <option value="quarter">Ce trimestre</option>
                <option value="year">Cette année</option>
                <option value="custom">Période personnalisée</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent">
                <option value="pdf">PDF</option>
                <option value="excel">Excel</option>
                <option value="csv">CSV</option>
              </select>
            </div>
          </div>
        </div>

        {/* Report Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTypes.map((report) => (
            <div 
              key={report.id}
              onClick={() => setSelectedReport(report.id)}
              className={`bg-white rounded-xl shadow-sm border-2 p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${
                selectedReport === report.id ? 'border-[#ea532b]' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${report.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                  {report.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f365b]">{report.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{report.description}</p>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Sélectionner
              </button>
            </div>
          ))}
        </div>

        {/* KPIs Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Aperçu des Indicateurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentKpis.map((kpi, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#2f365b] mb-1">{kpi.value}</div>
                <div className="text-sm text-gray-600 mb-2">{kpi.label}</div>
                <div className={`text-xs font-medium ${kpi.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#2f365b]">Rapports Récents</h3>
            <button className="text-sm text-[#ea532b] hover:text-[#d64a27] font-medium">
              Voir tous
            </button>
          </div>

          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#ea532b] transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#2f365b] rounded-lg flex items-center justify-center text-white">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2f365b]">{report.name}</h4>
                    <div className="text-sm text-gray-600">
                      {report.type} • Généré le {new Date(report.generatedDate).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="text-xs text-gray-500">
                      Par {report.generatedBy} • {report.size} • {report.downloads} téléchargements
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-[#2f365b] hover:bg-[#2f365b]/10 rounded-lg transition-colors">
                    <Eye size={18} />
                  </button>
                  <button className="p-2 text-[#ea532b] hover:bg-[#ea532b]/10 rounded-lg transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ReportsManagement;