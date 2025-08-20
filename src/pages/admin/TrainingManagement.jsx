import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Eye,
  Users,
  Calendar,
  Clock,
  Award,
  TrendingUp,
  CheckCircle,
  XCircle,
  Play,
  Download,
  MoreVertical
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const TrainingManagement = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Leadership et Management',
      instructor: 'Dr. Marie Kouassi',
      category: 'Management',
      duration: '40h',
      participants: 25,
      maxParticipants: 30,
      startDate: '2025-02-15',
      endDate: '2025-03-15',
      status: 'Planifié',
      price: 150000,
      description: 'Formation complète sur les techniques de leadership moderne'
    },
    {
      id: 2,
      title: 'Développement React Avancé',
      instructor: 'Thomas Dubois',
      category: 'Technique',
      duration: '60h',
      participants: 12,
      maxParticipants: 15,
      startDate: '2025-01-20',
      endDate: '2025-02-20',
      status: 'En Cours',
      price: 200000,
      description: 'Maîtrise avancée du framework React et ses écosystèmes'
    },
    {
      id: 3,
      title: 'Gestion du Stress au Travail',
      instructor: 'Sophie Martin',
      category: 'Bien-être',
      duration: '16h',
      participants: 18,
      maxParticipants: 20,
      startDate: '2025-01-10',
      endDate: '2025-01-25',
      status: 'Terminé',
      price: 75000,
      description: 'Techniques de gestion du stress et amélioration du bien-être'
    }
  ];

  const trainingRequests = [
    {
      id: 1,
      employee: 'Alexandre Petit',
      department: 'Développement',
      course: 'Formation Angular',
      requestDate: '2025-01-25',
      status: 'En Attente',
      priority: 'Haute',
      budget: 180000,
      justification: 'Besoin pour le nouveau projet client'
    },
    {
      id: 2,
      employee: 'Julie Moreau',
      department: 'RH',
      course: 'Certification GPEC',
      requestDate: '2025-01-23',
      status: 'Approuvé',
      priority: 'Moyenne',
      budget: 250000,
      justification: 'Évolution réglementaire'
    },
    {
      id: 3,
      employee: 'Marie Leroy',
      department: 'Design',
      course: 'UX Design Avancé',
      requestDate: '2025-01-20',
      status: 'Rejeté',
      priority: 'Basse',
      budget: 120000,
      justification: 'Budget dépassé ce trimestre'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Planifié':
        return 'bg-blue-100 text-blue-800';
      case 'En Cours':
        return 'bg-green-100 text-green-800';
      case 'Terminé':
        return 'bg-gray-100 text-gray-800';
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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Haute':
        return 'bg-red-100 text-red-800';
      case 'Moyenne':
        return 'bg-yellow-100 text-yellow-800';
      case 'Basse':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Management':
        return 'bg-purple-100 text-purple-800';
      case 'Technique':
        return 'bg-blue-100 text-blue-800';
      case 'Bien-être':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2f365b]">
              Gestion des Formations
            </h1>
            <p className="text-gray-600 mt-1">
              Gérez les formations et le développement des compétences
            </p>
          </div>
          <button className="flex items-center px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors mt-4 md:mt-0">
            <Plus size={18} className="mr-2" />
            Nouvelle Formation
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-4">
                <BookOpen size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">{courses.length}</div>
                <div className="text-sm text-gray-600">Formations Actives</div>
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
                  {courses.reduce((sum, course) => sum + course.participants, 0)}
                </div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mr-4">
                <Award size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {courses.filter(c => c.status === 'Terminé').length}
                </div>
                <div className="text-sm text-gray-600">Formations Terminées</div>
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
                  {trainingRequests.filter(r => r.status === 'En Attente').length}
                </div>
                <div className="text-sm text-gray-600">Demandes en Attente</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('courses')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'courses'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Formations ({courses.length})
              </button>
              <button
                onClick={() => setActiveTab('requests')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'requests'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Demandes ({trainingRequests.length})
              </button>
            </nav>
          </div>

          {/* Search */}
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Rechercher ${activeTab === 'courses' ? 'une formation' : 'une demande'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'courses' ? (
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:border-[#ea532b] transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold text-[#2f365b]">{course.title}</h3>
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(course.status)}`}>
                            {course.status}
                          </span>
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(course.category)}`}>
                            {course.category}
                          </span>
                        </div>

                        <p className="text-gray-600 mb-4">{course.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Formateur:</span> {course.instructor}
                          </div>
                          <div>
                            <span className="font-medium">Durée:</span> {course.duration}
                          </div>
                          <div>
                            <span className="font-medium">Participants:</span> {course.participants}/{course.maxParticipants}
                          </div>
                          <div>
                            <span className="font-medium">Prix:</span> {course.price.toLocaleString()} FCFA
                          </div>
                        </div>

                        <div className="mt-3 text-sm text-gray-600">
                          <span className="font-medium">Période:</span> {new Date(course.startDate).toLocaleDateString('fr-FR')} - {new Date(course.endDate).toLocaleDateString('fr-FR')}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Inscriptions</span>
                            <span>{course.participants}/{course.maxParticipants}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-[#ea532b] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(course.participants / course.maxParticipants) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-2 text-[#2f365b] hover:bg-[#2f365b]/10 rounded-lg transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-[#ea532b] hover:bg-[#ea532b]/10 rounded-lg transition-colors">
                          <Edit size={18} />
                        </button>
                        {course.status === 'En Cours' && (
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Play size={18} />
                          </button>
                        )}
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
                {trainingRequests.map((request) => (
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
                            {request.status}
                          </span>
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(request.priority)}`}>
                            {request.priority}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                          <div>
                            <span className="font-medium">Formation:</span> {request.course}
                          </div>
                          <div>
                            <span className="font-medium">Budget:</span> {request.budget.toLocaleString()} FCFA
                          </div>
                          <div>
                            <span className="font-medium">Demande:</span> {new Date(request.requestDate).toLocaleDateString('fr-FR')}
                          </div>
                        </div>

                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Justification:</span> {request.justification}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        {request.status === 'En Attente' && (
                          <>
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                              <CheckCircle size={18} />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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
            )}
          </div>
        </div>

        {/* Training Analytics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Analyse des Formations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {courses.reduce((sum, c) => sum + c.price, 0).toLocaleString()} FCFA
              </div>
              <div className="text-sm text-gray-600">Budget Total Formations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {courses.reduce((sum, c) => sum + parseInt(c.duration), 0)}h
              </div>
              <div className="text-sm text-gray-600">Heures de Formation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(courses.reduce((sum, c) => sum + (c.participants / c.maxParticipants), 0) / courses.length * 100)}%
              </div>
              <div className="text-sm text-gray-600">Taux de Remplissage</div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

// Helper functions
const getStatusColor = (status) => {
  switch (status) {
    case 'Planifié':
      return 'bg-blue-100 text-blue-800';
    case 'En Cours':
      return 'bg-green-100 text-green-800';
    case 'Terminé':
      return 'bg-gray-100 text-gray-800';
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

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'Haute':
      return 'bg-red-100 text-red-800';
    case 'Moyenne':
      return 'bg-yellow-100 text-yellow-800';
    case 'Basse':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'Management':
      return 'bg-purple-100 text-purple-800';
    case 'Technique':
      return 'bg-blue-100 text-blue-800';
    case 'Bien-être':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default TrainingManagement;