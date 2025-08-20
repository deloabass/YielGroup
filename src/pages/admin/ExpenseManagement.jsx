import React, { useState } from 'react';
import { 
  CreditCard, 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  Clock,
  DollarSign,
  Receipt,
  Download,
  Eye,
  MoreVertical,
  AlertTriangle,
  FileText,
  Calendar
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const ExpenseManagement = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');

  const expenses = [
    {
      id: 1,
      employee: 'Sophie Martin',
      department: 'Développement',
      type: 'Repas',
      amount: 45.80,
      currency: 'EUR',
      date: '2025-01-25',
      status: 'En Attente',
      description: 'Déjeuner client - Projet SIRH',
      receipt: true,
      category: 'Restauration',
      project: 'SIRH-2025'
    },
    {
      id: 2,
      employee: 'Thomas Dubois',
      department: 'Marketing',
      type: 'Transport',
      amount: 28.50,
      currency: 'EUR',
      date: '2025-01-24',
      status: 'Approuvé',
      description: 'Taxi pour rendez-vous client',
      receipt: true,
      category: 'Transport',
      project: 'MARKETING-Q1'
    },
    {
      id: 3,
      employee: 'Marie Leroy',
      department: 'Design',
      type: 'Matériel',
      amount: 120.00,
      currency: 'EUR',
      date: '2025-01-23',
      status: 'Rejeté',
      description: 'Achat logiciel design',
      receipt: false,
      category: 'Équipement',
      project: 'DESIGN-TOOLS'
    },
    {
      id: 4,
      employee: 'Alexandre Petit',
      department: 'Développement',
      type: 'Formation',
      amount: 350.00,
      currency: 'EUR',
      date: '2025-01-22',
      status: 'Approuvé',
      description: 'Formation React Advanced',
      receipt: true,
      category: 'Formation',
      project: 'DEV-TRAINING'
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
      case 'Remboursé':
        return 'bg-blue-100 text-blue-800';
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
      case 'Remboursé':
        return <DollarSign size={16} className="text-blue-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Restauration':
        return 'bg-orange-100 text-orange-800';
      case 'Transport':
        return 'bg-blue-100 text-blue-800';
      case 'Équipement':
        return 'bg-purple-100 text-purple-800';
      case 'Formation':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = 
      expense.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = 
      activeTab === 'all' ||
      (activeTab === 'pending' && expense.status === 'En Attente') ||
      (activeTab === 'approved' && expense.status === 'Approuvé') ||
      (activeTab === 'rejected' && expense.status === 'Rejeté');
    
    return matchesSearch && matchesTab;
  });

  const totalAmount = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2f365b]">
              Gestion des Notes de Frais
            </h1>
            <p className="text-gray-600 mt-1">
              Validez et gérez les dépenses professionnelles
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download size={18} className="mr-2" />
              Exporter
            </button>
            <button className="flex items-center px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
              <FileText size={18} className="mr-2" />
              Rapport
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
                  {expenses.filter(e => e.status === 'En Attente').length}
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
                  {expenses.filter(e => e.status === 'Approuvé').length}
                </div>
                <div className="text-sm text-gray-600">Approuvées</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-4">
                <DollarSign size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {totalAmount.toFixed(2)}€
                </div>
                <div className="text-sm text-gray-600">Montant Total</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mr-4">
                <Receipt size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#2f365b]">
                  {expenses.filter(e => e.receipt).length}
                </div>
                <div className="text-sm text-gray-600">Avec Justificatif</div>
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
                En Attente ({expenses.filter(e => e.status === 'En Attente').length})
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'approved'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Approuvées ({expenses.filter(e => e.status === 'Approuvé').length})
              </button>
              <button
                onClick={() => setActiveTab('rejected')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'rejected'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Rejetées ({expenses.filter(e => e.status === 'Rejeté').length})
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'all'
                    ? 'border-[#ea532b] text-[#ea532b]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Toutes ({expenses.length})
              </button>
            </nav>
          </div>

          {/* Search */}
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une note de frais..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              />
            </div>
          </div>

          {/* Expense List */}
          <div className="p-6">
            <div className="space-y-4">
              {filteredExpenses.map((expense) => (
                <div key={expense.id} className="border border-gray-200 rounded-lg p-6 hover:border-[#ea532b] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-[#2f365b] rounded-full flex items-center justify-center text-white font-semibold">
                          {expense.employee.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#2f365b]">{expense.employee}</h3>
                          <p className="text-sm text-gray-600">{expense.department}</p>
                        </div>
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(expense.status)}`}>
                          {getStatusIcon(expense.status)}
                          <span className="ml-1">{expense.status}</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div>
                          <span className="font-medium">Montant:</span>
                          <span className="ml-2 font-bold text-[#2f365b]">
                            {expense.amount.toFixed(2)} {expense.currency}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">Date:</span> {new Date(expense.date).toLocaleDateString('fr-FR')}
                        </div>
                        <div>
                          <span className="font-medium">Catégorie:</span>
                          <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getCategoryColor(expense.category)}`}>
                            {expense.category}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium">Justificatif:</span>
                          {expense.receipt ? (
                            <CheckCircle size={16} className="ml-2 text-green-500" />
                          ) : (
                            <AlertTriangle size={16} className="ml-2 text-red-500" />
                          )}
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Description:</span> {expense.description}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Projet:</span> {expense.project}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      {expense.status === 'En Attente' && (
                        <>
                          <button 
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Approuver"
                          >
                            <CheckCircle size={18} />
                          </button>
                          <button 
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
                      {expense.receipt && (
                        <button className="p-2 text-[#ea532b] hover:bg-[#ea532b]/10 rounded-lg transition-colors">
                          <Download size={18} />
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

            {filteredExpenses.length === 0 && (
              <div className="text-center py-12">
                <CreditCard size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune note de frais trouvée</h3>
                <p className="text-gray-500">Aucune note de frais ne correspond à vos critères.</p>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Résumé Financier</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {expenses.filter(e => e.status === 'Approuvé').reduce((sum, e) => sum + e.amount, 0).toFixed(2)}€
              </div>
              <div className="text-sm text-gray-600">Montant Approuvé</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {expenses.filter(e => e.status === 'En Attente').reduce((sum, e) => sum + e.amount, 0).toFixed(2)}€
              </div>
              <div className="text-sm text-gray-600">En Attente</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {expenses.filter(e => e.status === 'Rejeté').reduce((sum, e) => sum + e.amount, 0).toFixed(2)}€
              </div>
              <div className="text-sm text-gray-600">Rejeté</div>
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

const getCategoryColor = (category) => {
  switch (category) {
    case 'Restauration':
      return 'bg-orange-100 text-orange-800';
    case 'Transport':
      return 'bg-blue-100 text-blue-800';
    case 'Équipement':
      return 'bg-purple-100 text-purple-800';
    case 'Formation':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default ExpenseManagement;