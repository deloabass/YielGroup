import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  Calendar, 
  FileText, 
  Settings, 
  Bell,
  TrendingUp,
  UserPlus,
  Clock,
  Award,
  DollarSign,
  Activity
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatsCard from '../../components/admin/StatsCard';
import RecentActivity from '../../components/admin/RecentActivity';
import QuickActions from '../../components/admin/QuickActions';
import PerformanceChart from '../../components/admin/PerformanceChart';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalEmployees: 247,
    activeRecruitments: 12,
    pendingLeaves: 8,
    completedTrainings: 35,
    monthlyExpenses: 47250,
    performanceRate: 87
  });

  const [recentActivities] = useState([
    {
      id: 1,
      type: 'recruitment',
      message: 'Nouveau candidat pour le poste de Développeur Frontend',
      time: '2 min',
      user: 'Sophie Martin'
    },
    {
      id: 2,
      type: 'leave',
      message: 'Demande de congé approuvée pour Thomas Dubois',
      time: '15 min',
      user: 'Marie Leroy'
    },
    {
      id: 3,
      type: 'training',
      message: 'Formation "Leadership" complétée',
      time: '1h',
      user: 'Alexandre Petit'
    },
    {
      id: 4,
      type: 'expense',
      message: 'Note de frais validée - 150€',
      time: '2h',
      user: 'Julie Moreau'
    }
  ]);

  const statsCards = [
    {
      title: 'Total Employés',
      value: stats.totalEmployees,
      change: '+5%',
      changeType: 'positive',
      icon: <Users size={24} />,
      color: 'bg-blue-500'
    },
    {
      title: 'Recrutements Actifs',
      value: stats.activeRecruitments,
      change: '+2',
      changeType: 'positive',
      icon: <UserPlus size={24} />,
      color: 'bg-green-500'
    },
    {
      title: 'Congés en Attente',
      value: stats.pendingLeaves,
      change: '-3',
      changeType: 'negative',
      icon: <Calendar size={24} />,
      color: 'bg-orange-500'
    },
    {
      title: 'Formations ce Mois',
      value: stats.completedTrainings,
      change: '+12%',
      changeType: 'positive',
      icon: <Award size={24} />,
      color: 'bg-purple-500'
    },
    {
      title: 'Frais du Mois',
      value: `${stats.monthlyExpenses.toLocaleString()} €`,
      change: '+8%',
      changeType: 'positive',
      icon: <DollarSign size={24} />,
      color: 'bg-red-500'
    },
    {
      title: 'Performance Globale',
      value: `${stats.performanceRate}%`,
      change: '+3%',
      changeType: 'positive',
      icon: <TrendingUp size={24} />,
      color: 'bg-indigo-500'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2f365b]">
              Tableau de Bord Administrateur
            </h1>
            <p className="text-gray-600 mt-1">
              Vue d'ensemble de votre système RH YIEL
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="flex items-center px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
              <Bell size={18} className="mr-2" />
              Notifications
            </button>
            <button className="flex items-center px-4 py-2 bg-[#2f365b] text-white rounded-lg hover:bg-[#3a4272] transition-colors">
              <Settings size={18} className="mr-2" />
              Paramètres
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsCards.map((card, index) => (
            <StatsCard key={index} {...card} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity activities={recentActivities} />
          
          {/* System Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#2f365b] mb-4 flex items-center">
              <Activity size={20} className="mr-2" />
              État du Système
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Serveur Principal</span>
                <span className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Opérationnel
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Base de Données</span>
                <span className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Opérationnel
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">API SIRH</span>
                <span className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Opérationnel
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Sauvegarde</span>
                <span className="flex items-center text-orange-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  En cours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;