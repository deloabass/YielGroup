import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  User,
  Shield,
  Database,
  Mail,
  CreditCard,
  BookOpen,
  UserPlus,
  Clock,
  Award
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: 'Tableau de Bord',
      icon: <Home size={20} />,
      path: '/admin',
      active: location.pathname === '/admin'
    },
    {
      title: 'Gestion des Employés',
      icon: <Users size={20} />,
      path: '/admin/employees',
      active: location.pathname.includes('/admin/employees')
    },
    {
      title: 'Recrutement',
      icon: <UserPlus size={20} />,
      path: '/admin/recruitment',
      active: location.pathname.includes('/admin/recruitment')
    },
    {
      title: 'Congés & Absences',
      icon: <Calendar size={20} />,
      path: '/admin/leaves',
      active: location.pathname.includes('/admin/leaves')
    },
    {
      title: 'Formations',
      icon: <BookOpen size={20} />,
      path: '/admin/training',
      active: location.pathname.includes('/admin/training')
    },
    {
      title: 'Notes de Frais',
      icon: <CreditCard size={20} />,
      path: '/admin/expenses',
      active: location.pathname.includes('/admin/expenses')
    },
    {
      title: 'Rapports',
      icon: <BarChart3 size={20} />,
      path: '/admin/reports',
      active: location.pathname.includes('/admin/reports')
    },
    {
      title: 'Documents',
      icon: <FileText size={20} />,
      path: '/admin/documents',
      active: location.pathname.includes('/admin/documents')
    },
    {
      title: 'Paramètres',
      icon: <Settings size={20} />,
      path: '/admin/settings',
      active: location.pathname.includes('/admin/settings')
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#ea532b] to-[#d44620] rounded-lg flex items-center justify-center">
              <img src="/logo.webp" alt="YIEL" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div>
              <div className="font-bold text-lg text-[#2f365b]">YIEL Admin</div>
              <div className="text-xs text-[#ea532b]">Système d'Information RH</div>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.active 
                    ? 'bg-[#ea532b] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.title}
              </button>
            ))}
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold">
              SA
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-[#2f365b]">Super Admin</div>
              <div className="text-xs text-gray-500">admin@yiel.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <Menu size={20} />
              </button>
              
              {/* Search Bar */}
              <div className="relative hidden md:block">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-500 hover:text-gray-700">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900"
                >
                  <div className="w-8 h-8 bg-[#2f365b] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    SA
                  </div>
                  <ChevronDown size={16} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User size={16} className="mr-3" />
                      Mon Profil
                    </button>
                    <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings size={16} className="mr-3" />
                      Paramètres
                    </button>
                    <hr className="my-1" />
                    <button 
                      onClick={() => navigate('/')}
                      className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={16} className="mr-3" />
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;