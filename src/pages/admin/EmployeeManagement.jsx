import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Download,
  Upload,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  MoreVertical
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const EmployeeManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const employees = [
    {
      id: 1,
      firstName: 'Sophie',
      lastName: 'Martin',
      email: 'sophie.martin@yiel.com',
      phone: '+237 6 XX XX XX XX',
      department: 'Développement',
      position: 'Développeuse Frontend',
      status: 'Actif',
      hireDate: '2023-03-15',
      avatar: 'SM',
      salary: '850000',
      manager: 'Thomas Dubois'
    },
    {
      id: 2,
      firstName: 'Thomas',
      lastName: 'Dubois',
      email: 'thomas.dubois@yiel.com',
      phone: '+237 6 XX XX XX XX',
      department: 'Marketing',
      position: 'Chef de Projet',
      status: 'Actif',
      hireDate: '2022-11-08',
      avatar: 'TD',
      salary: '1200000',
      manager: 'Marie Leroy'
    },
    {
      id: 3,
      firstName: 'Marie',
      lastName: 'Leroy',
      email: 'marie.leroy@yiel.com',
      phone: '+237 6 XX XX XX XX',
      department: 'Design',
      position: 'Designer UX/UI',
      status: 'En Formation',
      hireDate: '2023-01-20',
      avatar: 'ML',
      salary: '750000',
      manager: 'Alexandre Petit'
    },
    {
      id: 4,
      firstName: 'Alexandre',
      lastName: 'Petit',
      email: 'alexandre.petit@yiel.com',
      phone: '+237 6 XX XX XX XX',
      department: 'Développement',
      position: 'Développeur Backend',
      status: 'Actif',
      hireDate: '2022-09-12',
      avatar: 'AP',
      salary: '900000',
      manager: 'Sophie Martin'
    },
    {
      id: 5,
      firstName: 'Julie',
      lastName: 'Moreau',
      email: 'julie.moreau@yiel.com',
      phone: '+237 6 XX XX XX XX',
      department: 'RH',
      position: 'Responsable RH',
      status: 'Actif',
      hireDate: '2021-06-01',
      avatar: 'JM',
      salary: '1100000',
      manager: 'Direction'
    }
  ];

  const departments = ['all', 'Développement', 'Marketing', 'Design', 'RH', 'Commercial'];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const handleSelectEmployee = (employeeId) => {
    setSelectedEmployees(prev => 
      prev.includes(employeeId) 
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const handleSelectAll = () => {
    if (selectedEmployees.length === filteredEmployees.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(filteredEmployees.map(emp => emp.id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Actif':
        return 'bg-green-100 text-green-800';
      case 'En Formation':
        return 'bg-blue-100 text-blue-800';
      case 'Inactif':
        return 'bg-red-100 text-red-800';
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
              Gestion des Employés
            </h1>
            <p className="text-gray-600 mt-1">
              Gérez les profils et informations de vos collaborateurs
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Upload size={18} className="mr-2" />
              Importer
            </button>
            <button className="flex items-center px-4 py-2 bg-[#2f365b] text-white rounded-lg hover:bg-[#3a4272] transition-colors">
              <Plus size={18} className="mr-2" />
              Nouvel Employé
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un employé..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              >
                <option value="all">Tous les départements</option>
                {departments.slice(1).map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter size={18} className="mr-2" />
                Filtres
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                {filteredEmployees.length} employé(s) trouvé(s)
              </span>
              <button className="flex items-center px-3 py-2 text-[#ea532b] hover:bg-[#ea532b]/10 rounded-lg transition-colors">
                <Download size={18} className="mr-2" />
                Exporter
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]">
                  <option>Tous les statuts</option>
                  <option>Actif</option>
                  <option>En Formation</option>
                  <option>Inactif</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]">
                  <option>Toutes les positions</option>
                  <option>Manager</option>
                  <option>Développeur</option>
                  <option>Designer</option>
                </select>
                <input
                  type="date"
                  placeholder="Date d'embauche depuis"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                />
                <button className="px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
                  Appliquer
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bulk Actions */}
        {selectedEmployees.length > 0 && (
          <div className="bg-[#ea532b] text-white rounded-lg p-4 flex items-center justify-between">
            <span>{selectedEmployees.length} employé(s) sélectionné(s)</span>
            <div className="flex items-center space-x-3">
              <button className="px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition-colors">
                Envoyer Email
              </button>
              <button className="px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition-colors">
                Exporter
              </button>
              <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition-colors">
                Supprimer
              </button>
            </div>
          </div>
        )}

        {/* Employee Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedEmployees.length === filteredEmployees.length && filteredEmployees.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-[#ea532b] focus:ring-[#ea532b]"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employé
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Département
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date d'embauche
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedEmployees.includes(employee.id)}
                        onChange={() => handleSelectEmployee(employee.id)}
                        className="rounded border-gray-300 text-[#ea532b] focus:ring-[#ea532b]"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          {employee.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {employee.firstName} {employee.lastName}
                          </div>
                          <div className="text-sm text-gray-500">{employee.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{employee.department}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{employee.position}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(employee.status)}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(employee.hireDate).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#2f365b] hover:text-[#3a4272] p-1">
                          <Eye size={16} />
                        </button>
                        <button className="text-[#ea532b] hover:text-[#d64a27] p-1">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 p-1">
                          <Trash2 size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 p-1">
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

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Affichage de 1 à {filteredEmployees.length} sur {employees.length} employés
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              Précédent
            </button>
            <button className="px-3 py-2 bg-[#ea532b] text-white rounded-lg text-sm">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

// Helper function for status colors
const getStatusColor = (status) => {
  switch (status) {
    case 'Actif':
      return 'bg-green-100 text-green-800';
    case 'En Formation':
      return 'bg-blue-100 text-blue-800';
    case 'Inactif':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default EmployeeManagement;