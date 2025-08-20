import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Plus, 
  Download, 
  Eye,
  Upload,
  Folder,
  File,
  Image,
  Archive,
  Trash2,
  Share,
  Lock,
  Unlock,
  Calendar,
  User,
  MoreVertical
} from 'lucide-react';

const DocumentsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  const documents = [
    {
      id: 1,
      name: 'Contrat_Sophie_Martin.pdf',
      type: 'Contrat',
      category: 'Contrats',
      size: '2.4 MB',
      uploadDate: '2025-01-20',
      uploadedBy: 'Julie Moreau',
      employee: 'Sophie Martin',
      status: 'Actif',
      isConfidential: true,
      downloads: 3
    },
    {
      id: 2,
      name: 'Fiche_Poste_Developpeur.docx',
      type: 'Fiche de Poste',
      category: 'Fiches de Poste',
      size: '1.2 MB',
      uploadDate: '2025-01-18',
      uploadedBy: 'Thomas Dubois',
      employee: 'Général',
      status: 'Actif',
      isConfidential: false,
      downloads: 12
    },
    {
      id: 3,
      name: 'Evaluation_2024_Marie_Leroy.pdf',
      type: 'Évaluation',
      category: 'Évaluations',
      size: '856 KB',
      uploadDate: '2025-01-15',
      uploadedBy: 'Alexandre Petit',
      employee: 'Marie Leroy',
      status: 'Archivé',
      isConfidential: true,
      downloads: 1
    },
    {
      id: 4,
      name: 'Politique_Conges_2025.pdf',
      type: 'Politique',
      category: 'Politiques RH',
      size: '3.1 MB',
      uploadDate: '2025-01-10',
      uploadedBy: 'Admin System',
      employee: 'Tous',
      status: 'Actif',
      isConfidential: false,
      downloads: 45
    },
    {
      id: 5,
      name: 'Certificat_Formation_Alexandre.pdf',
      type: 'Certificat',
      category: 'Formations',
      size: '1.8 MB',
      uploadDate: '2025-01-08',
      uploadedBy: 'Sophie Martin',
      employee: 'Alexandre Petit',
      status: 'Actif',
      isConfidential: false,
      downloads: 2
    }
  ];

  const categories = [
    'all',
    'Contrats',
    'Fiches de Poste',
    'Évaluations',
    'Politiques RH',
    'Formations',
    'Certificats',
    'Bulletins de Paie'
  ];

  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText size={20} className="text-red-500" />;
      case 'docx':
      case 'doc':
        return <FileText size={20} className="text-blue-500" />;
      case 'xlsx':
      case 'xls':
        return <FileText size={20} className="text-green-500" />;
      case 'image':
        return <Image size={20} className="text-purple-500" />;
      default:
        return <File size={20} className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Actif':
        return 'bg-green-100 text-green-800';
      case 'Archivé':
        return 'bg-gray-100 text-gray-800';
      case 'Expiré':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.employee.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#2f365b]">
            Gestion des Documents
          </h1>
          <p className="text-gray-600 mt-1">
            Centralisez et organisez tous vos documents RH
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Upload size={18} className="mr-2" />
            Importer
          </button>
          <button className="flex items-center px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
            <Plus size={18} className="mr-2" />
            Nouveau Document
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-4">
              <FileText size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#2f365b]">{documents.length}</div>
              <div className="text-sm text-gray-600">Documents Total</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mr-4">
              <Lock size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#2f365b]">
                {documents.filter(d => d.isConfidential).length}
              </div>
              <div className="text-sm text-gray-600">Confidentiels</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white mr-4">
              <Archive size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#2f365b]">
                {documents.filter(d => d.status === 'Archivé').length}
              </div>
              <div className="text-sm text-gray-600">Archivés</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mr-4">
              <Download size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#2f365b]">
                {documents.reduce((sum, d) => sum + d.downloads, 0)}
              </div>
              <div className="text-sm text-gray-600">Téléchargements</div>
            </div>
          </div>
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
                placeholder="Rechercher un document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            >
              <option value="all">Toutes les catégories</option>
              {categories.slice(1).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 ${viewMode === 'list' ? 'bg-[#ea532b] text-white' : 'text-gray-600 hover:bg-gray-50'} rounded-l-lg transition-colors`}
              >
                Liste
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-[#ea532b] text-white' : 'text-gray-600 hover:bg-gray-50'} rounded-r-lg transition-colors`}
              >
                Grille
              </button>
            </div>
            <span className="text-sm text-gray-600">
              {filteredDocuments.length} document(s)
            </span>
          </div>
        </div>
      </div>

      {/* Documents List/Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {viewMode === 'list' ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employé
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getFileIcon(doc.name.split('.').pop())}
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 flex items-center">
                            {doc.name}
                            {doc.isConfidential && (
                              <Lock size={14} className="ml-2 text-red-500" />
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{doc.size}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{doc.category}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{doc.employee}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(doc.uploadDate).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#2f365b] hover:text-[#3a4272] p-1">
                          <Eye size={16} />
                        </button>
                        <button className="text-[#ea532b] hover:text-[#d64a27] p-1">
                          <Download size={16} />
                        </button>
                        <button className="text-blue-600 hover:text-blue-800 p-1">
                          <Share size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 p-1">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#ea532b] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  {getFileIcon(doc.name.split('.').pop())}
                  <div className="flex items-center space-x-1">
                    {doc.isConfidential && (
                      <Lock size={14} className="text-red-500" />
                    )}
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                
                <h4 className="font-medium text-[#2f365b] mb-2 truncate" title={doc.name}>
                  {doc.name}
                </h4>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Catégorie:</span>
                    <span className="font-medium">{doc.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Employé:</span>
                    <span className="font-medium">{doc.employee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taille:</span>
                    <span className="font-medium">{doc.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Statut:</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500">
                    {doc.downloads} téléchargements
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-[#2f365b] hover:bg-[#2f365b]/10 rounded">
                      <Eye size={14} />
                    </button>
                    <button className="p-1 text-[#ea532b] hover:bg-[#ea532b]/10 rounded">
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun document trouvé</h3>
            <p className="text-gray-500">Aucun document ne correspond à vos critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper functions
const getFileIcon = (extension) => {
  switch (extension?.toLowerCase()) {
    case 'pdf':
      return <FileText size={20} className="text-red-500" />;
    case 'docx':
    case 'doc':
      return <FileText size={20} className="text-blue-500" />;
    case 'xlsx':
    case 'xls':
      return <FileText size={20} className="text-green-500" />;
    case 'jpg':
    case 'jpeg':
    case 'png':
      return <Image size={20} className="text-purple-500" />;
    default:
      return <File size={20} className="text-gray-500" />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Actif':
      return 'bg-green-100 text-green-800';
    case 'Archivé':
      return 'bg-gray-100 text-gray-800';
    case 'Expiré':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default DocumentsManagement;