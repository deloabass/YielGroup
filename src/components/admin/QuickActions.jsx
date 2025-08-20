import React from 'react';
import { 
  UserPlus, 
  Calendar, 
  FileText, 
  Mail, 
  Settings,
  Download,
  Upload,
  Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: 'Ajouter Employé',
      description: 'Créer un nouveau profil',
      icon: <UserPlus size={20} />,
      color: 'bg-blue-500',
      onClick: () => navigate('/admin/employees/new')
    },
    {
      title: 'Nouvelle Offre',
      description: 'Publier une offre d\'emploi',
      icon: <Plus size={20} />,
      color: 'bg-green-500',
      onClick: () => navigate('/admin/recruitment/new')
    },
    {
      title: 'Valider Congés',
      description: 'Traiter les demandes',
      icon: <Calendar size={20} />,
      color: 'bg-orange-500',
      onClick: () => navigate('/admin/leaves')
    },
    {
      title: 'Générer Rapport',
      description: 'Créer un rapport RH',
      icon: <FileText size={20} />,
      color: 'bg-purple-500',
      onClick: () => navigate('/admin/reports')
    },
    {
      title: 'Envoyer Message',
      description: 'Communication interne',
      icon: <Mail size={20} />,
      color: 'bg-indigo-500',
      onClick: () => navigate('/admin/messages')
    },
    {
      title: 'Exporter Données',
      description: 'Télécharger les données',
      icon: <Download size={20} />,
      color: 'bg-gray-500',
      onClick: () => {}
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-[#2f365b] mb-4 flex items-center">
        <Settings size={20} className="mr-2" />
        Actions Rapides
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-[#ea532b] hover:bg-gray-50 transition-all duration-200 group"
          >
            <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-[#2f365b] group-hover:text-[#ea532b]">
                {action.title}
              </div>
              <div className="text-xs text-gray-500">
                {action.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;