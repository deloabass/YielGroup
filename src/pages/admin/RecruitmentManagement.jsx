import React, { useState } from 'react';
import { 
  UserPlus, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  Calendar,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  MoreVertical
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const RecruitmentManagement = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [searchTerm, setSearchTerm] = useState('');

  const jobOffers = [
    {
      id: 1,
      title: 'Développeur Frontend React',
      department: 'Développement',
      location: 'Yaoundé, Cameroun',
      type: 'CDI',
      status: 'Actif',
      applications: 23,
      publishDate: '2025-01-15',
      deadline: '2025-02-15',
      salary: '800000 - 1200000 FCFA'
    },
    {
      id: 2,
      title: 'Responsable Marketing Digital',
      department: 'Marketing',
      location: 'Douala, Cameroun',
      type: 'CDI',
      status: 'Actif',
      applications: 18,
      publishDate: '2025-01-10',
      deadline: '2025-02-10',
      salary: '900000 - 1400000 FCFA'
    },
    {
      id: 3,
      title: 'Designer UX/UI',
      department: 'Design',
      location: 'Remote',
      type: 'CDD',
      status: 'Fermé',
      applications: 45,
      publishDate: '2024-12-20',
      deadline: '2025-01-20',
      salary: '700000 - 1000000 FCFA'
    }
  ];

  const candidates = [
    {
      id: 1,
      name: 'Jean-Paul Mbeki',
      email: 'jp.mbeki@email.com',
      phone: '+237 6 XX XX XX XX',
      position: 'Développeur Frontend React',
      status: 'En Entretien',
      appliedDate: '2025-01-20',
      experience: '3 ans',
      score: 85
    },
    {
      id: 2,
      name: 'Fatima Diallo',
      email: 'f.diallo@email.com',
      phone: '+237 6 XX XX XX XX',
      position: 'Responsable Marketing Digital',
      status: 'Présélectionné',
      appliedDate: '2025-01-18',
      experience: '5 ans',
      score: 92
    },
    {
      id: 3,
      name: 'Samuel Kouassi',
      email: 's.kouassi@email.com',
      phone: '+237 6 XX XX XX XX',
      position: 'Designer UX/UI',
      status: 'Rejeté',
      appliedDate: '2025-01-15',
      experience: '2 ans',
      score: 65
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Actif':
        return 'bg-green-100 text-green-800';
      case 'Fermé':
        return 'bg-red-100 text-red-800';
      case 'En Entretien':
        return 'bg-blue-100 text-blue-800';
      case 'Présélectionné':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejeté':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Actif':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'Fermé':
        return <XCircle size={16} className="text-red-500" />;
      case 'En Entretien':
        return <Clock size={16} className="text-blue-500" />;
      case 'Présélectionné':
        return <Clock size={16} className="text-yellow-500" />;
      case 'Rejeté':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2f365b]">
              Gestion du Recrutement
            </h1>
            <p className="text-gray-600 mt-1">
              Gérez vos offres d'emploi et suivez les candidatures
            </p>
          </div>
          <button className="flex items-center px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors mt-4 md:mt-0">
            <Plus size={18} className="mr-2" />
            Nouvelle Offre
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'jobs'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Offres d'Emploi ({jobOffers.length})
              </button>
              <button
                onClick={() => setActiveTab('candidates')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'candidates'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Candidatures ({candidates.length})
              </button>
            </nav>
          </div>

          {/* Search and Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Rechercher ${activeTab === 'jobs' ? 'une offre' : 'un candidat'}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter size={18} className="mr-2" />
                  Filtres
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'jobs' ? (
              <div className="space-y-4">
                {jobOffers.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:border-[#ea532b] transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-[#2f365b]">{job.title}</h3>
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.status)}`}>
                            {getStatusIcon(job.status)}
                            <span className="ml-1">{job.status}</span>
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase size={16} className="mr-2" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <Users size={16} className="mr-2" />
                            {job.applications} candidatures
                          </div>
                        </div>

                        <div className="mt-3 text-sm text-gray-600">
                          <span className="font-medium">Salaire:</span> {job.salary}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Échéance:</span> {new Date(job.deadline).toLocaleDateString('fr-FR')}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-2 text-[#2f365b] hover:bg-[#2f365b]/10 rounded-lg transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-[#ea532b] hover:bg-[#ea532b]/10 rounded-lg transition-colors">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="border border-gray-200 rounded-lg p-6 hover:border-[#ea532b] transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold">
                          {candidate.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-[#2f365b]">{candidate.name}</h3>
                            <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(candidate.status)}`}>
                              {getStatusIcon(candidate.status)}
                              <span className="ml-1">{candidate.status}</span>
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Mail size={16} className="mr-2" />
                              {candidate.email}
                            </div>
                            <div className="flex items-center">
                              <Phone size={16} className="mr-2" />
                              {candidate.phone}
                            </div>
                            <div className="flex items-center">
                              <Briefcase size={16} className="mr-2" />
                              {candidate.experience} d'expérience
                            </div>
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-2" />
                              Candidature: {new Date(candidate.appliedDate).toLocaleDateString('fr-FR')}
                            </div>
                          </div>

                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Poste:</span> {candidate.position}
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Score:</span> 
                            <span className={`ml-1 font-semibold ${
                              candidate.score >= 80 ? 'text-green-600' : 
                              candidate.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {candidate.score}/100
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#2f365b] hover:bg-[#2f365b]/10 rounded-lg transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-[#ea532b] hover:bg-[#ea532b]/10 rounded-lg transition-colors">
                          <Mail size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-4">
                <UserPlus size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">{jobOffers.length}</div>
                <div className="text-sm text-gray-600">Offres Actives</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mr-4">
                <Users size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {jobOffers.reduce((sum, job) => sum + job.applications, 0)}
                </div>
                <div className="text-sm text-gray-600">Candidatures</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white mr-4">
                <Clock size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {candidates.filter(c => c.status === 'En Entretien').length}
                </div>
                <div className="text-sm text-gray-600">En Entretien</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mr-4">
                <CheckCircle size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {candidates.filter(c => c.status === 'Présélectionné').length}
                </div>
                <div className="text-sm text-gray-600">Présélectionnés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default RecruitmentManagement;