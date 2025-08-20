import React, { useState } from 'react';
import { 
  Calendar, 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  Clock,
  User,
  CalendarDays,
  AlertTriangle,
  Download,
  Eye,
  MoreVertical
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const LeaveManagement = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');

  const leaveRequests = [
    {
      id: 1,
      employee: 'Sophie Martin',
      department: 'Développement',
      type: 'Congés Payés',
      startDate: '2025-02-10',
      endDate: '2025-02-20',
      days: 8,
      status: 'En Attente',
      requestDate: '2025-01-25',
      reason: 'Vacances familiales',
      manager: 'Thomas Dubois'
    },
    {
      id: 2,
      employee: 'Marie Leroy',
      department: 'Design',
      type: 'Congé Maladie',
      startDate: '2025-01-28',
      endDate: '2025-01-30',
      days: 3,
      status: 'Approuvé',
      requestDate: '2025-01-27',
      reason: 'Consultation médicale',
      manager: 'Alexandre Petit'
    },
    {
      id: 3,
      employee: 'Thomas Dubois',
      department: 'Marketing',
      type: 'Permission',
      startDate: '2025-02-05',
      endDate: '2025-02-05',
      days: 0.5,
      status: 'Rejeté',
      requestDate: '2025-01-20',
      reason: 'Rendez-vous personnel',
      manager: 'Julie Moreau'
    },
    {
      id: 4,
      employee: 'Alexandre Petit',
      department: 'Développement',
      type: 'Congés Payés',
      startDate: '2025-03-01',
      endDate: '2025-03-15',
      days: 11,
      status: 'En Attente',
      requestDate: '2025-01-26',
      reason: 'Voyage personnel',
      manager: 'Sophie Martin'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'En Attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Approuvé':
        return 'bg-green-100 text-green-800';
      case 'Rejeté':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'En Attente':
        return <Clock size={16} className="text-yellow-500" />;
      case 'Approuvé':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'Rejeté':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Congés Payés':
        return 'bg-blue-100 text-blue-800';
      case 'Congé Maladie':
        return 'bg-red-100 text-red-800';
      case 'Permission':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRequests = leaveRequests.filter(request => {
    const matchesSearch = 
      request.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = 
      activeTab === 'all' ||
      (activeTab === 'pending' && request.status === 'En Attente') ||
      (activeTab === 'approved' && request.status === 'Approuvé') ||
      (activeTab === 'rejected' && request.status === 'Rejeté');
    
    return matchesSearch && matchesTab;
  });

  const handleApprove = (requestId) => {
    console.log('Approuver la demande:', requestId);
  };

  const handleReject = (requestId) => {
    console.log('Rejeter la demande:', requestId);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2f365b]">
              Gestion des Congés & Absences
            </h1>
            <p className="text-gray-600 mt-1">
              Gérez les demandes de congés et absences de vos employés
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download size={18} className="mr-2" />
              Exporter
            </button>
            <button className="flex items-center px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
              <Calendar size={18} className="mr-2" />
              Planning
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white mr-4">
                <Clock size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {leaveRequests.filter(r => r.status === 'En Attente').length}
                </div>
                <div className="text-sm text-gray-600">En Attente</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mr-4">
                <CheckCircle size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {leaveRequests.filter(r => r.status === 'Approuvé').length}
                </div>
                <div className="text-sm text-gray-600">Approuvées</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white mr-4">
                <XCircle size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {leaveRequests.filter(r => r.status === 'Rejeté').length}
                </div>
                <div className="text-sm text-gray-600">Rejetées</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-4">
                <CalendarDays size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {leaveRequests.reduce((sum, r) => sum + r.days, 0)}
                </div>
                <div className="text-sm text-gray-600">Jours Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('pending')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pending'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                En Attente ({leaveRequests.filter(r => r.status === 'En Attente').length})
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'approved'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Approuvées ({leaveRequests.filter(r => r.status === 'Approuvé').length})
              </button>
              <button
                onClick={() => setActiveTab('rejected')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'rejected'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Rejetées ({leaveRequests.filter(r => r.status === 'Rejeté').length})
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'all'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Toutes ({leaveRequests.length})
              </button>
            </nav>
          </div>

          {/* Search */}
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une demande..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              />
            </div>
          </div>

          {/* Leave Requests */}
          <div className="p-6">
            <div className="space-y-4">
              {filteredRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 rounded-lg p-6 hover:border-[#ea532b] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold">
                          {request.employee.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#2f365b]">{request.employee}</h3>
                          <p className="text-sm text-gray-600">{request.department}</p>
                        </div>
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                          {getStatusIcon(request.status)}
                          <span className="ml-1">{request.status}</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div>
                          <span className="font-medium">Type:</span>
                          <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getTypeColor(request.type)}`}>
                            {request.type}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">Période:</span> {new Date(request.startDate).toLocaleDateString('fr-FR')} - {new Date(request.endDate).toLocaleDateString('fr-FR')}
                        </div>
                        <div>
                          <span className="font-medium">Durée:</span> {request.days} jour(s)
                        </div>
                        <div>
                          <span className="font-medium">Manager:</span> {request.manager}
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 mb-4">
                        <span className="font-medium">Motif:</span> {request.reason}
                      </div>

                      <div className="text-xs text-gray-500">
                        Demande faite le {new Date(request.requestDate).toLocaleDateString('fr-FR')}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      {request.status === 'En Attente' && (
                        <>
                          <button 
                            onClick={() => handleApprove(request.id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Approuver"
                          >
                            <CheckCircle size={18} />
                          </button>
                          <button 
                            onClick={() => handleReject(request.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Rejeter"
                          >
                            <XCircle size={18} />
                          </button>
                        </>
                      )}
                      <button className="p-2 text-[#2f365b] hover:bg-[#2f365b]/10 rounded-lg transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredRequests.length === 0 && (
              <div className="text-center py-12">
                <CalendarDays size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune demande trouvée</h3>
                <p className="text-gray-500">Aucune demande ne correspond à vos critères de recherche.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

// Helper functions
const getStatusColor = (status) => {
  switch (status) {
    case 'En Attente':
      return 'bg-yellow-100 text-yellow-800';
    case 'Approuvé':
      return 'bg-green-100 text-green-800';
    case 'Rejeté':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'En Attente':
      return <Clock size={16} className="text-yellow-500" />;
    case 'Approuvé':
      return <CheckCircle size={16} className="text-green-500" />;
    case 'Rejeté':
      return <XCircle size={16} className="text-red-500" />;
    default:
      return <Clock size={16} className="text-gray-500" />;
  }
};

const getTypeColor = (type) => {
  switch (type) {
    case 'Congés Payés':
      return 'bg-blue-100 text-blue-800';
    case 'Congé Maladie':
      return 'bg-red-100 text-red-800';
    case 'Permission':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const handleApprove = (requestId) => {
  console.log('Approuver la demande:', requestId);
};

const handleReject = (requestId) => {
  console.log('Rejeter la demande:', requestId);
};

export default LeaveManagement;