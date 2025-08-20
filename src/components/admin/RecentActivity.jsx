import React from 'react';
import { 
  UserPlus, 
  Calendar, 
  Award, 
  CreditCard, 
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'recruitment':
        return <UserPlus size={16} className="text-blue-500" />;
      case 'leave':
        return <Calendar size={16} className="text-green-500" />;
      case 'training':
        return <Award size={16} className="text-purple-500" />;
      case 'expense':
        return <CreditCard size={16} className="text-orange-500" />;
      default:
        return <Info size={16} className="text-gray-500" />;
    }
  };

  const getActivityBg = (type) => {
    switch (type) {
      case 'recruitment':
        return 'bg-blue-50';
      case 'leave':
        return 'bg-green-50';
      case 'training':
        return 'bg-purple-50';
      case 'expense':
        return 'bg-orange-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#2f365b] flex items-center">
          <Clock size={20} className="mr-2" />
          Activité Récente
        </h3>
        <button className="text-sm text-[#ea532b] hover:text-[#d64a27] font-medium">
          Voir tout
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full ${getActivityBg(activity.type)} flex items-center justify-center flex-shrink-0`}>
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">Par {activity.user}</span>
                <span className="mx-2 text-xs text-gray-300">•</span>
                <span className="text-xs text-gray-500">Il y a {activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full text-center text-sm text-[#ea532b] hover:text-[#d64a27] font-medium">
          Voir toutes les activités
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;