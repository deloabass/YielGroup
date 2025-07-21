import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  User,
  CalendarDays,
  MapPin,
  FileText,
  X
} from "lucide-react";

function Conges() {
  const [demandes, setDemandes] = useState([
    {
      id: 1,
      employe: "Marie Dubois",
      typeConge: "Congés payés",
      dateDebut: "2025-05-15",
      dateFin: "2025-05-25",
      nbJours: 8,
      statut: "En attente",
      motif: "Vacances en famille",
      dateCreation: "2025-04-20",
      avatar: "MD"
    },
    {
      id: 2,
      employe: "Thomas Martin",
      typeConge: "Congé maladie",
      dateDebut: "2025-04-22",
      dateFin: "2025-04-24",
      nbJours: 3,
      statut: "Approuvé",
      motif: "Consultation médicale",
      dateCreation: "2025-04-21",
      avatar: "TM"
    },
    {
      id: 3,
      employe: "Sophie Bernard",
      typeConge: "Congé maternité",
      dateDebut: "2025-06-01",
      dateFin: "2025-09-01",
      nbJours: 90,
      statut: "Approuvé",
      motif: "Naissance",
      dateCreation: "2025-03-15",
      avatar: "SB"
    },
    {
      id: 4,
      employe: "Pierre Leroy",
      typeConge: "Permission",
      dateDebut: "2025-04-25",
      dateFin: "2025-04-25",
      nbJours: 1,
      statut: "Refusé",
      motif: "Rendez-vous personnel",
      dateCreation: "2025-04-24",
      avatar: "PL"
    }
  ]);

  const [selectedDemande, setSelectedDemande] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");
  const [filterType, setFilterType] = useState("Tous");

  const typesConge = ["Tous", "Congés payés", "Congé maladie", "Congé maternité", "Permission", "RTT"];
  const statuses = ["Tous", "En attente", "Approuvé", "Refusé"];

  const [nouvelleDemande, setNouvelleDemande] = useState({
    employe: "",
    typeConge: "",
    dateDebut: "",
    dateFin: "",
    motif: ""
  });

  const filteredDemandes = demandes.filter(demande => {
    const matchesSearch = 
      demande.employe.toLowerCase().includes(searchTerm.toLowerCase()) ||
      demande.typeConge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      demande.motif.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "Tous" || demande.statut === filterStatus;
    const matchesType = filterType === "Tous" || demande.typeConge === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleAddDemande = (e) => {
    e.preventDefault();
    const dateDebut = new Date(nouvelleDemande.dateDebut);
    const dateFin = new Date(nouvelleDemande.dateFin);
    const nbJours = Math.ceil((dateFin - dateDebut) / (1000 * 60 * 60 * 24)) + 1;
    
    const demande = {
      ...nouvelleDemande,
      id: demandes.length + 1,
      nbJours,
      statut: "En attente",
      dateCreation: new Date().toISOString().split('T')[0],
      avatar: nouvelleDemande.employe.split(' ').map(n => n[0]).join('')
    };
    
    setDemandes([...demandes, demande]);
    setNouvelleDemande({
      employe: "",
      typeConge: "",
      dateDebut: "",
      dateFin: "",
      motif: ""
    });
    setShowAddModal(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setDemandes(demandes.map(demande => 
      demande.id === id ? { ...demande, statut: newStatus } : demande
    ));
  };

  const handleDeleteDemande = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) {
      setDemandes(demandes.filter(demande => demande.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approuvé": return "bg-green-100 text-green-800";
      case "En attente": return "bg-yellow-100 text-yellow-800";
      case "Refusé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approuvé": return <CheckCircle size={16} className="text-green-600" />;
      case "En attente": return <AlertCircle size={16} className="text-yellow-600" />;
      case "Refusé": return <XCircle size={16} className="text-red-600" />;
      default: return <Clock size={16} className="text-gray-600" />;
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
                <h1 className="text-2xl font-bold text-gray-900">Gestion des Congés</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Gérez les demandes de congés et absences de vos collaborateurs
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="inline-flex items-center px-4 py-2 bg-[#ea532b] text-white font-medium rounded-lg hover:bg-[#d64a27] transition-colors"
                >
                  <Plus size={20} className="mr-2" />
                  Nouvelle demande
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">En attente</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {demandes.filter(d => d.statut === "En attente").length}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Approuvées</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {demandes.filter(d => d.statut === "Approuvé").length}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                  <XCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Refusées</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {demandes.filter(d => d.statut === "Refusé").length}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <CalendarDays size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total jours</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {demandes.reduce((total, d) => total + d.nbJours, 0)}
                  </p>
                </div>
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
                  placeholder="Rechercher une demande..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
              </div>
              
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              >
                {typesConge.map(type => (
                  <option key={type} value={type}>{type}</option>
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

          {/* Demandes Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Employé
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type de congé
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Période
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Durée
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
                  {filteredDemandes.map((demande) => (
                    <tr key={demande.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                            {demande.avatar}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{demande.employe}</div>
                            <div className="text-sm text-gray-500">ID: {demande.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{demande.typeConge}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(demande.dateDebut).toLocaleDateString('fr-FR')} - {new Date(demande.dateFin).toLocaleDateString('fr-FR')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{demande.nbJours} jour(s)</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getStatusIcon(demande.statut)}
                          <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(demande.statut)}`}>
                            {demande.statut}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedDemande(demande)}
                            className="text-gray-400 hover:text-[#ea532b] transition-colors"
                          >
                            <Eye size={16} />
                          </button>
                          {demande.statut === "En attente" && (
                            <>
                              <button
                                onClick={() => handleStatusChange(demande.id, "Approuvé")}
                                className="text-gray-400 hover:text-green-600 transition-colors"
                              >
                                <CheckCircle size={16} />
                              </button>
                              <button
                                onClick={() => handleStatusChange(demande.id, "Refusé")}
                                className="text-gray-400 hover:text-red-600 transition-colors"
                              >
                                <XCircle size={16} />
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => handleDeleteDemande(demande.id)}
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
        </div>
      </main>

      {/* Demande Detail Modal */}
      {selectedDemande && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f365b]">Détails de la demande</h3>
              <button
                onClick={() => setSelectedDemande(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {selectedDemande.avatar}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#2f365b]">{selectedDemande.employe}</h4>
                  <p className="text-gray-600">{selectedDemande.typeConge}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date de début</label>
                    <div className="flex items-center text-gray-900">
                      <Calendar size={16} className="mr-2 text-gray-400" />
                      {new Date(selectedDemande.dateDebut).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date de fin</label>
                    <div className="flex items-center text-gray-900">
                      <Calendar size={16} className="mr-2 text-gray-400" />
                      {new Date(selectedDemande.dateFin).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Durée</label>
                    <div className="flex items-center text-gray-900">
                      <Clock size={16} className="mr-2 text-gray-400" />
                      {selectedDemande.nbJours} jour(s)
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                    <div className="flex items-center">
                      {getStatusIcon(selectedDemande.statut)}
                      <span className={`ml-2 px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(selectedDemande.statut)}`}>
                        {selectedDemande.statut}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Motif</label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-900">{selectedDemande.motif}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date de création</label>
                <div className="flex items-center text-gray-900">
                  <FileText size={16} className="mr-2 text-gray-400" />
                  {new Date(selectedDemande.dateCreation).toLocaleDateString('fr-FR')}
                </div>
              </div>

              {selectedDemande.statut === "En attente" && (
                <div className="flex space-x-4 pt-4 border-t">
                  <button
                    onClick={() => {
                      handleStatusChange(selectedDemande.id, "Approuvé");
                      setSelectedDemande(null);
                    }}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <CheckCircle size={18} className="mr-2" />
                    Approuver
                  </button>
                  <button
                    onClick={() => {
                      handleStatusChange(selectedDemande.id, "Refusé");
                      setSelectedDemande(null);
                    }}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    <XCircle size={18} className="mr-2" />
                    Refuser
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add Demande Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f365b]">Nouvelle demande de congé</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddDemande} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employé *
                </label>
                <input
                  type="text"
                  required
                  value={nouvelleDemande.employe}
                  onChange={(e) => setNouvelleDemande({...nouvelleDemande, employe: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  placeholder="Nom de l'employé"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de congé *
                </label>
                <select
                  required
                  value={nouvelleDemande.typeConge}
                  onChange={(e) => setNouvelleDemande({...nouvelleDemande, typeConge: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                >
                  <option value="">Sélectionner un type</option>
                  {typesConge.slice(1).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de début *
                  </label>
                  <input
                    type="date"
                    required
                    value={nouvelleDemande.dateDebut}
                    onChange={(e) => setNouvelleDemande({...nouvelleDemande, dateDebut: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de fin *
                  </label>
                  <input
                    type="date"
                    required
                    value={nouvelleDemande.dateFin}
                    onChange={(e) => setNouvelleDemande({...nouvelleDemande, dateFin: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Motif *
                </label>
                <textarea
                  required
                  rows={4}
                  value={nouvelleDemande.motif}
                  onChange={(e) => setNouvelleDemande({...nouvelleDemande, motif: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  placeholder="Décrivez le motif de la demande..."
                />
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
                  Créer la demande
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

export default Conges;