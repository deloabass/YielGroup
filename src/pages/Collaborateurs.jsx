import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Users,
  Search,
  Filter,
  Plus,
  Download,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  MapPin,
  X,
  UserPlus,
  Building,
  ChevronDown,
  ChevronRight
} from "lucide-react";

function Collaborateurs() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      nom: "Dubois",
      prenom: "Marie",
      email: "marie.dubois@yiel.com",
      telephone: "+237 123 456 789",
      poste: "Développeuse Frontend",
      departement: "IT",
      dateEmbauche: "2023-03-15",
      statut: "Actif",
      salaire: "850000",
      manager: "Thomas Martin",
      avatar: "MD"
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Thomas",
      email: "thomas.martin@yiel.com",
      telephone: "+237 123 456 790",
      poste: "Chef de Projet",
      departement: "Marketing",
      dateEmbauche: "2022-01-10",
      statut: "En congé",
      salaire: "1200000",
      manager: "Sophie Bernard",
      avatar: "TM"
    },
    {
      id: 3,
      nom: "Bernard",
      prenom: "Sophie",
      email: "sophie.bernard@yiel.com",
      telephone: "+237 123 456 791",
      poste: "Directrice Marketing",
      departement: "Marketing",
      dateEmbauche: "2021-06-01",
      statut: "Actif",
      salaire: "1500000",
      manager: "Stéphanie NKOMANE",
      avatar: "SB"
    },
    {
      id: 4,
      nom: "Leroy",
      prenom: "Pierre",
      email: "pierre.leroy@yiel.com",
      telephone: "+237 123 456 792",
      poste: "Consultant RH",
      departement: "RH",
      dateEmbauche: "2023-09-01",
      statut: "Formation",
      salaire: "950000",
      manager: "Stéphanie NKOMANE",
      avatar: "PL"
    }
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("Tous");
  const [filterStatus, setFilterStatus] = useState("Tous");

  const departments = ["Tous", "IT", "Marketing", "RH", "Finance", "Commercial"];
  const statuses = ["Tous", "Actif", "En congé", "Formation", "Inactif"];

  const [newEmployee, setNewEmployee] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    poste: "",
    departement: "",
    dateEmbauche: "",
    salaire: "",
    manager: ""
  });

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      employee.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.poste.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment === "Tous" || employee.departement === filterDepartment;
    const matchesStatus = filterStatus === "Tous" || employee.statut === filterStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const handleAddEmployee = (e) => {
    e.preventDefault();
    const employee = {
      ...newEmployee,
      id: employees.length + 1,
      statut: "Actif",
      avatar: `${newEmployee.prenom[0]}${newEmployee.nom[0]}`
    };
    setEmployees([...employees, employee]);
    setNewEmployee({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      poste: "",
      departement: "",
      dateEmbauche: "",
      salaire: "",
      manager: ""
    });
    setShowAddModal(false);
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce collaborateur ?")) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Actif": return "bg-green-100 text-green-800";
      case "En congé": return "bg-blue-100 text-blue-800";
      case "Formation": return "bg-orange-100 text-orange-800";
      case "Inactif": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
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
                <h1 className="text-2xl font-bold text-gray-900">Collaborateurs</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Gérez vos {employees.length} collaborateurs
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="inline-flex items-center px-4 py-2 bg-[#ea532b] text-white font-medium rounded-lg hover:bg-[#d64a27] transition-colors"
                >
                  <Plus size={20} className="mr-2" />
                  Ajouter un collaborateur
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un collaborateur..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
              </div>
              
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>

              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <Download size={20} className="mr-2" />
                Exporter
              </button>
            </div>
          </div>

          {/* Employees Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Collaborateur
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
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
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                            {employee.avatar}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {employee.prenom} {employee.nom}
                            </div>
                            <div className="text-sm text-gray-500">ID: {employee.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{employee.email}</div>
                        <div className="text-sm text-gray-500">{employee.telephone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {employee.poste}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {employee.departement}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(employee.statut)}`}>
                          {employee.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedEmployee(employee)}
                            className="text-gray-400 hover:text-[#ea532b] transition-colors"
                          >
                            <Eye size={16} />
                          </button>
                          <button className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteEmployee(employee.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={16} />
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
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Affichage de {filteredEmployees.length} collaborateur(s)
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Précédent
              </button>
              <button className="px-3 py-1 bg-[#ea532b] text-white rounded text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Suivant
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f365b]">Profil collaborateur</h3>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                {selectedEmployee.avatar}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#2f365b] mb-1">
                  {selectedEmployee.prenom} {selectedEmployee.nom}
                </h4>
                <p className="text-gray-600 mb-2">{selectedEmployee.poste}</p>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedEmployee.statut)}`}>
                  {selectedEmployee.statut}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="font-semibold text-[#2f365b] mb-3">Informations personnelles</h5>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail size={16} className="text-gray-400 mr-3" />
                    <span className="text-gray-700">{selectedEmployee.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-400 mr-3" />
                    <span className="text-gray-700">{selectedEmployee.telephone}</span>
                  </div>
                  <div className="flex items-center">
                    <Building size={16} className="text-gray-400 mr-3" />
                    <span className="text-gray-700">{selectedEmployee.departement}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-[#2f365b] mb-3">Informations professionnelles</h5>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Briefcase size={16} className="text-gray-400 mr-3" />
                    <span className="text-gray-700">{selectedEmployee.poste}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-3" />
                    <span className="text-gray-700">Embauché le {new Date(selectedEmployee.dateEmbauche).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-gray-400 mr-3" />
                    <span className="text-gray-700">Manager: {selectedEmployee.manager}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button className="flex-1 px-4 py-2 bg-[#2f365b] text-white rounded-lg hover:bg-[#3a4272] transition-colors flex items-center justify-center">
                <Edit size={18} className="mr-2" />
                Modifier
              </button>
              <button className="flex-1 px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors flex items-center justify-center">
                <Mail size={18} className="mr-2" />
                Contacter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Employee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f365b]">Ajouter un collaborateur</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddEmployee} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={newEmployee.prenom}
                    onChange={(e) => setNewEmployee({...newEmployee, prenom: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={newEmployee.nom}
                    onChange={(e) => setNewEmployee({...newEmployee, nom: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={newEmployee.email}
                  onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={newEmployee.telephone}
                    onChange={(e) => setNewEmployee({...newEmployee, telephone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date d'embauche *
                  </label>
                  <input
                    type="date"
                    required
                    value={newEmployee.dateEmbauche}
                    onChange={(e) => setNewEmployee({...newEmployee, dateEmbauche: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Poste *
                  </label>
                  <input
                    type="text"
                    required
                    value={newEmployee.poste}
                    onChange={(e) => setNewEmployee({...newEmployee, poste: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Département *
                  </label>
                  <select
                    required
                    value={newEmployee.departement}
                    onChange={(e) => setNewEmployee({...newEmployee, departement: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  >
                    <option value="">Sélectionner un département</option>
                    {departments.slice(1).map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salaire (FCFA)
                  </label>
                  <input
                    type="number"
                    value={newEmployee.salaire}
                    onChange={(e) => setNewEmployee({...newEmployee, salaire: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Manager
                  </label>
                  <input
                    type="text"
                    value={newEmployee.manager}
                    onChange={(e) => setNewEmployee({...newEmployee, manager: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Collaborateurs;