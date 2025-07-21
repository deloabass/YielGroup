import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BookOpen,
  Users,
  Clock,
  Calendar,
  Award,
  TrendingUp,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Play,
  CheckCircle,
  AlertCircle,
  X,
  User,
  MapPin,
  DollarSign
} from "lucide-react";

function Formations() {
  const [formations, setFormations] = useState([
    {
      id: 1,
      titre: "Formation Sécurité au Travail",
      description: "Formation obligatoire sur les règles de sécurité et prévention des risques",
      formateur: "Jean-Pierre Kouassi",
      dateDebut: "2025-05-15",
      dateFin: "2025-05-17",
      duree: "3 jours",
      lieu: "Salle de formation A",
      maxParticipants: 20,
      inscrits: 15,
      statut: "Programmée",
      cout: "150000",
      type: "Obligatoire",
      competences: ["Sécurité", "Prévention", "Réglementation"]
    },
    {
      id: 2,
      titre: "Développement Leadership",
      description: "Développer ses compétences managériales et de leadership",
      formateur: "Marie Diallo",
      dateDebut: "2025-06-01",
      dateFin: "2025-06-03",
      duree: "3 jours",
      lieu: "Centre de formation externe",
      maxParticipants: 15,
      inscrits: 12,
      statut: "Ouverte",
      cout: "300000",
      type: "Développement",
      competences: ["Leadership", "Management", "Communication"]
    },
    {
      id: 3,
      titre: "Formation Excel Avancé",
      description: "Maîtriser les fonctionnalités avancées d'Excel pour l'analyse de données",
      formateur: "Thomas Mbeki",
      dateDebut: "2025-04-20",
      dateFin: "2025-04-22",
      duree: "3 jours",
      lieu: "Salle informatique",
      maxParticipants: 12,
      inscrits: 12,
      statut: "Terminée",
      cout: "100000",
      type: "Technique",
      competences: ["Excel", "Analyse de données", "Bureautique"]
    },
    {
      id: 4,
      titre: "Gestion du Stress",
      description: "Techniques de gestion du stress et amélioration du bien-être au travail",
      formateur: "Dr. Fatima Sow",
      dateDebut: "2025-05-30",
      dateFin: "2025-05-30",
      duree: "1 jour",
      lieu: "Salle de conférence",
      maxParticipants: 25,
      inscrits: 8,
      statut: "Ouverte",
      cout: "75000",
      type: "Bien-être",
      competences: ["Gestion du stress", "Bien-être", "Productivité"]
    }
  ]);

  const [participants, setParticipants] = useState([
    { id: 1, formationId: 1, nom: "Marie Dubois", poste: "Développeuse", statut: "Inscrit" },
    { id: 2, formationId: 1, nom: "Thomas Martin", poste: "Chef de projet", statut: "Inscrit" },
    { id: 3, formationId: 2, nom: "Sophie Bernard", poste: "Manager", statut: "Validé" },
    { id: 4, formationId: 3, nom: "Pierre Leroy", poste: "Consultant", statut: "Terminé" }
  ]);

  const [selectedFormation, setSelectedFormation] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");
  const [filterType, setFilterType] = useState("Tous");

  const statuses = ["Tous", "Programmée", "Ouverte", "En cours", "Terminée", "Annulée"];
  const types = ["Tous", "Obligatoire", "Développement", "Technique", "Bien-être"];

  const [nouvelleFormation, setNouvelleFormation] = useState({
    titre: "",
    description: "",
    formateur: "",
    dateDebut: "",
    dateFin: "",
    lieu: "",
    maxParticipants: "",
    cout: "",
    type: ""
  });

  const filteredFormations = formations.filter(formation => {
    const matchesSearch = 
      formation.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formation.formateur.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "Tous" || formation.statut === filterStatus;
    const matchesType = filterType === "Tous" || formation.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleAddFormation = (e) => {
    e.preventDefault();
    const dateDebut = new Date(nouvelleFormation.dateDebut);
    const dateFin = new Date(nouvelleFormation.dateFin);
    const dureeJours = Math.ceil((dateFin - dateDebut) / (1000 * 60 * 60 * 24)) + 1;
    
    const formation = {
      ...nouvelleFormation,
      id: formations.length + 1,
      duree: `${dureeJours} jour${dureeJours > 1 ? 's' : ''}`,
      inscrits: 0,
      statut: "Programmée",
      competences: []
    };
    
    setFormations([...formations, formation]);
    setNouvelleFormation({
      titre: "",
      description: "",
      formateur: "",
      dateDebut: "",
      dateFin: "",
      lieu: "",
      maxParticipants: "",
      cout: "",
      type: ""
    });
    setShowAddModal(false);
  };

  const handleDeleteFormation = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette formation ?")) {
      setFormations(formations.filter(formation => formation.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Programmée": return "bg-blue-100 text-blue-800";
      case "Ouverte": return "bg-green-100 text-green-800";
      case "En cours": return "bg-yellow-100 text-yellow-800";
      case "Terminée": return "bg-gray-100 text-gray-800";
      case "Annulée": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Obligatoire": return "bg-red-100 text-red-800";
      case "Développement": return "bg-purple-100 text-purple-800";
      case "Technique": return "bg-blue-100 text-blue-800";
      case "Bien-être": return "bg-green-100 text-green-800";
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
                <h1 className="text-2xl font-bold text-gray-900">Gestion des Formations</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Planifiez et suivez les formations de vos collaborateurs
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="inline-flex items-center px-4 py-2 bg-[#ea532b] text-white font-medium rounded-lg hover:bg-[#d64a27] transition-colors"
                >
                  <Plus size={20} className="mr-2" />
                  Nouvelle formation
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total formations</p>
                  <p className="text-2xl font-bold text-gray-800">{formations.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Participants</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {formations.reduce((total, f) => total + f.inscrits, 0)}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">En cours</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {formations.filter(f => f.statut === "En cours" || f.statut === "Ouverte").length}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Terminées</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {formations.filter(f => f.statut === "Terminée").length}
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
                  placeholder="Rechercher une formation..."
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
                {types.map(type => (
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

          {/* Formations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFormations.map((formation) => (
              <div key={formation.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{formation.titre}</h3>
                      <p className="text-sm text-gray-600 mb-3">{formation.description}</p>
                    </div>
                    <div className="flex space-x-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(formation.statut)}`}>
                        {formation.statut}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <User size={16} className="mr-2" />
                      {formation.formateur}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      {new Date(formation.dateDebut).toLocaleDateString('fr-FR')} - {new Date(formation.dateFin).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {formation.lieu}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users size={16} className="mr-2" />
                      {formation.inscrits}/{formation.maxParticipants} participants
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign size={16} className="mr-2" />
                      {parseInt(formation.cout).toLocaleString()} FCFA
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(formation.type)}`}>
                      {formation.type}
                    </span>
                    <div className="text-sm text-gray-600">
                      {formation.duree}
                    </div>
                  </div>

                  {formation.competences.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {formation.competences.map((competence, index) => (
                          <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                            {competence}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setSelectedFormation(formation)}
                      className="text-[#ea532b] text-sm font-medium hover:underline flex items-center"
                    >
                      <Eye size={16} className="mr-1" />
                      Voir détails
                    </button>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteFormation(formation.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Formation Detail Modal */}
      {selectedFormation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f365b]">Détails de la formation</h3>
              <button
                onClick={() => setSelectedFormation(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-[#2f365b] mb-2">{selectedFormation.titre}</h4>
                  <p className="text-gray-600">{selectedFormation.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Formateur</label>
                      <div className="flex items-center text-gray-900">
                        <User size={16} className="mr-2 text-gray-400" />
                        {selectedFormation.formateur}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Lieu</label>
                      <div className="flex items-center text-gray-900">
                        <MapPin size={16} className="mr-2 text-gray-400" />
                        {selectedFormation.lieu}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Coût</label>
                      <div className="flex items-center text-gray-900">
                        <DollarSign size={16} className="mr-2 text-gray-400" />
                        {parseInt(selectedFormation.cout).toLocaleString()} FCFA
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Période</label>
                      <div className="flex items-center text-gray-900">
                        <Calendar size={16} className="mr-2 text-gray-400" />
                        {new Date(selectedFormation.dateDebut).toLocaleDateString('fr-FR')} - {new Date(selectedFormation.dateFin).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Durée</label>
                      <div className="flex items-center text-gray-900">
                        <Clock size={16} className="mr-2 text-gray-400" />
                        {selectedFormation.duree}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Participants</label>
                      <div className="flex items-center text-gray-900">
                        <Users size={16} className="mr-2 text-gray-400" />
                        {selectedFormation.inscrits}/{selectedFormation.maxParticipants}
                      </div>
                    </div>
                  </div>
                </div>

                {selectedFormation.competences.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Compétences développées</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedFormation.competences.map((competence, index) => (
                        <span key={index} className="px-3 py-1 text-sm bg-[#ea532b]/10 text-[#ea532b] rounded-full">
                          {competence}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-3">Statut</h5>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(selectedFormation.statut)}`}>
                    {selectedFormation.statut}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-3">Type</h5>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTypeColor(selectedFormation.type)}`}>
                    {selectedFormation.type}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-3">Participants inscrits</h5>
                  <div className="space-y-2">
                    {participants
                      .filter(p => p.formationId === selectedFormation.id)
                      .map(participant => (
                        <div key={participant.id} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{participant.nom}</p>
                            <p className="text-xs text-gray-500">{participant.poste}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            participant.statut === "Terminé" ? "bg-green-100 text-green-800" :
                            participant.statut === "Validé" ? "bg-blue-100 text-blue-800" :
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {participant.statut}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
                    Gérer les inscriptions
                  </button>
                  <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Modifier la formation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Formation Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2f365b]">Nouvelle formation</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddFormation} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre de la formation *
                </label>
                <input
                  type="text"
                  required
                  value={nouvelleFormation.titre}
                  onChange={(e) => setNouvelleFormation({...nouvelleFormation, titre: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={nouvelleFormation.description}
                  onChange={(e) => setNouvelleFormation({...nouvelleFormation, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Formateur *
                  </label>
                  <input
                    type="text"
                    required
                    value={nouvelleFormation.formateur}
                    onChange={(e) => setNouvelleFormation({...nouvelleFormation, formateur: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type *
                  </label>
                  <select
                    required
                    value={nouvelleFormation.type}
                    onChange={(e) => setNouvelleFormation({...nouvelleFormation, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  >
                    <option value="">Sélectionner un type</option>
                    {types.slice(1).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de début *
                  </label>
                  <input
                    type="date"
                    required
                    value={nouvelleFormation.dateDebut}
                    onChange={(e) => setNouvelleFormation({...nouvelleFormation, dateDebut: e.target.value})}
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
                    value={nouvelleFormation.dateFin}
                    onChange={(e) => setNouvelleFormation({...nouvelleFormation, dateFin: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lieu *
                  </label>
                  <input
                    type="text"
                    required
                    value={nouvelleFormation.lieu}
                    onChange={(e) => setNouvelleFormation({...nouvelleFormation, lieu: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre max de participants *
                  </label>
                  <input
                    type="number"
                    required
                    value={nouvelleFormation.maxParticipants}
                    onChange={(e) => setNouvelleFormation({...nouvelleFormation, maxParticipants: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Coût (FCFA)
                </label>
                <input
                  type="number"
                  value={nouvelleFormation.cout}
                  onChange={(e) => setNouvelleFormation({...nouvelleFormation, cout: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
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
                  Créer la formation
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

export default Formations;