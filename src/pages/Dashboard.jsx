import React, { useState, useEffect } from "react";
import {
  Users,
  Calendar,
  TrendingUp,
  Clock,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  BarChart3,
  FileText,
  UserPlus,
  CheckCircle,
  AlertTriangle,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  MoreVertical
} from "lucide-react";

function Dashboard() {
  const [user] = useState({
    name: "Stéphanie NKOMANE",
    role: "Administrateur RH",
    company: "YIEL Group",
    avatar: "SN"
  });

  const [notifications] = useState([
    { id: 1, type: "info", message: "5 nouvelles demandes de congés en attente", time: "Il y a 2h" },
    { id: 2, type: "warning", message: "Entretien annuel de Marie Dubois à programmer", time: "Il y a 4h" },
    { id: 3, type: "success", message: "Nouveau collaborateur intégré avec succès", time: "Hier" }
  ]);

  const [stats] = useState([
    { label: "Collaborateurs", value: "247", change: "+5", icon: <Users size={24} />, color: "text-blue-600" },
    { label: "Présents aujourd'hui", value: "231", change: "+2", icon: <CheckCircle size={24} />, color: "text-green-600" },
    { label: "Demandes en attente", value: "12", change: "-3", icon: <Clock size={24} />, color: "text-orange-600" },
    { label: "Formations ce mois", value: "18", change: "+8", icon: <TrendingUp size={24} />, color: "text-purple-600" }
  ]);

  const [recentActivities] = useState([
    { id: 1, type: "leave", user: "Marie Dubois", action: "a demandé 3 jours de congés", time: "Il y a 1h", status: "pending" },
    { id: 2, type: "training", user: "Thomas Martin", action: "a terminé la formation Sécurité", time: "Il y a 2h", status: "completed" },
    { id: 3, type: "recruitment", user: "Sophie Bernard", action: "a été recrutée au poste de Designer", time: "Il y a 3h", status: "completed" },
    { id: 4, type: "evaluation", user: "Pierre Leroy", action: "a programmé un entretien annuel", time: "Il y a 5h", status: "scheduled" }
  ]);

  const [employees] = useState([
    { id: 1, name: "Marie Dubois", role: "Développeuse", department: "IT", status: "Actif", avatar: "MD" },
    { id: 2, name: "Thomas Martin", role: "Chef de projet", department: "Marketing", status: "En congé", avatar: "TM" },
    { id: 3, name: "Sophie Bernard", role: "Designer", department: "Design", status: "Actif", avatar: "SB" },
    { id: 4, name: "Pierre Leroy", role: "Consultant", department: "RH", status: "Formation", avatar: "PL" }
  ]);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.webp" alt="YIEL" className="h-8 w-auto mr-3" />
              <div>
                <h1 className="text-xl font-bold text-[#2f365b]">YIEL</h1>
                <p className="text-xs text-gray-500">Tableau de bord</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-gray-400 hover:text-gray-600 relative"
                >
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications.length}
                  </span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                          <div className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                              notif.type === 'info' ? 'bg-blue-500' :
                              notif.type === 'warning' ? 'bg-orange-500' : 'bg-green-500'
                            }`}></div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-800">{notif.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user.avatar}
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-800">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.role}</p>
                  </div>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-2">
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center">
                        <Settings size={16} className="mr-2" />
                        Paramètres
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center">
                        <LogOut size={16} className="mr-2" />
                        Se déconnecter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Bonjour {user.name.split(' ')[0]} 👋
          </h2>
          <p className="text-gray-600">Voici un aperçu de votre activité RH aujourd'hui</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} ce mois
                  </p>
                </div>
                <div className={`${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Activités récentes</h3>
                  <button className="text-[#ea532b] text-sm font-medium hover:underline">
                    Voir tout
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'leave' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'training' ? 'bg-green-100 text-green-600' :
                        activity.type === 'recruitment' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {activity.type === 'leave' ? <Calendar size={16} /> :
                         activity.type === 'training' ? <TrendingUp size={16} /> :
                         activity.type === 'recruitment' ? <UserPlus size={16} /> :
                         <FileText size={16} />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {activity.status === 'pending' ? 'En attente' :
                         activity.status === 'completed' ? 'Terminé' : 'Programmé'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* Actions rapides */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 text-left bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
                  <span className="flex items-center">
                    <Plus size={16} className="mr-2" />
                    Ajouter un collaborateur
                  </span>
                </button>
                <button className="w-full flex items-center justify-between p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    Planifier un entretien
                  </span>
                </button>
                <button className="w-full flex items-center justify-between p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="flex items-center">
                    <FileText size={16} className="mr-2" />
                    Générer un rapport
                  </span>
                </button>
              </div>
            </div>

            {/* Alertes */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Alertes importantes</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">3 contrats expirent bientôt</p>
                    <p className="text-xs text-red-600">Action requise avant le 30/04</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Clock size={16} className="text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">5 évaluations en retard</p>
                    <p className="text-xs text-yellow-600">À programmer cette semaine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employees Table */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Collaborateurs récents</h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Search size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Filter size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Collaborateur
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Poste
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Département
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                          {employee.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {employee.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {employee.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        employee.status === 'Actif' ? 'bg-green-100 text-green-800' :
                        employee.status === 'En congé' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Eye size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;