import React, { useState } from 'react';
import { 
  Settings, 
  Users, 
  Shield, 
  Bell, 
  Globe,
  Database,
  Mail,
  Smartphone,
  Key,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const SettingsManagement = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showApiKey, setShowApiKey] = useState(false);
  const [settings, setSettings] = useState({
    companyName: 'YIEL Group',
    companyEmail: 'contact@yiel-group.com',
    companyPhone: '+237 6 XX XX XX XX',
    companyAddress: 'Yaoundé, Cameroun',
    timezone: 'Africa/Douala',
    language: 'fr',
    currency: 'XAF',
    workingDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    workingHours: { start: '08:00', end: '17:00' },
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    autoApproval: false,
    maxLeaveBalance: 30,
    expenseLimit: 500000
  });

  const tabs = [
    { id: 'general', title: 'Général', icon: <Settings size={20} /> },
    { id: 'company', title: 'Entreprise', icon: <Users size={20} /> },
    { id: 'security', title: 'Sécurité', icon: <Shield size={20} /> },
    { id: 'notifications', title: 'Notifications', icon: <Bell size={20} /> },
    { id: 'integrations', title: 'Intégrations', icon: <Database size={20} /> }
  ];

  const handleSave = () => {
    console.log('Sauvegarde des paramètres:', settings);
    // Simulation de sauvegarde
    alert('Paramètres sauvegardés avec succès !');
  };

  const handleReset = () => {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser les paramètres ?')) {
      console.log('Réinitialisation des paramètres');
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2f365b]">
              Paramètres Système
            </h1>
            <p className="text-gray-600 mt-1">
              Configurez votre système YIEL selon vos besoins
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button 
              onClick={handleReset}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <RefreshCw size={18} className="mr-2" />
              Réinitialiser
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors"
            >
              <Save size={18} className="mr-2" />
              Sauvegarder
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#ea532b] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* General Settings */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Paramètres Généraux</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fuseau Horaire</label>
                      <select 
                        value={settings.timezone}
                        onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      >
                        <option value="Africa/Douala">Africa/Douala (GMT+1)</option>
                        <option value="Africa/Lagos">Africa/Lagos (GMT+1)</option>
                        <option value="Africa/Casablanca">Africa/Casablanca (GMT+1)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Langue</label>
                      <select 
                        value={settings.language}
                        onChange={(e) => setSettings({...settings, language: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      >
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Devise</label>
                      <select 
                        value={settings.currency}
                        onChange={(e) => setSettings({...settings, currency: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      >
                        <option value="XAF">Franc CFA (XAF)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="USD">Dollar US (USD)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Limite Notes de Frais</label>
                      <input
                        type="number"
                        value={settings.expenseLimit}
                        onChange={(e) => setSettings({...settings, expenseLimit: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                        placeholder="500000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jours de Travail</label>
                    <div className="grid grid-cols-7 gap-2">
                      {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day, index) => {
                        const dayKey = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'][index];
                        return (
                          <label key={day} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={settings.workingDays.includes(dayKey)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSettings({...settings, workingDays: [...settings.workingDays, dayKey]});
                                } else {
                                  setSettings({...settings, workingDays: settings.workingDays.filter(d => d !== dayKey)});
                                }
                              }}
                              className="rounded border-gray-300 text-[#ea532b] focus:ring-[#ea532b]"
                            />
                            <span className="text-sm">{day.slice(0, 3)}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Company Settings */}
              {activeTab === 'company' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Informations Entreprise</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom de l'Entreprise</label>
                      <input
                        type="text"
                        value={settings.companyName}
                        onChange={(e) => setSettings({...settings, companyName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Entreprise</label>
                      <input
                        type="email"
                        value={settings.companyEmail}
                        onChange={(e) => setSettings({...settings, companyEmail: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        value={settings.companyPhone}
                        onChange={(e) => setSettings({...settings, companyPhone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                      <input
                        type="text"
                        value={settings.companyAddress}
                        onChange={(e) => setSettings({...settings, companyAddress: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Heure de Début</label>
                      <input
                        type="time"
                        value={settings.workingHours.start}
                        onChange={(e) => setSettings({
                          ...settings, 
                          workingHours: {...settings.workingHours, start: e.target.value}
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Heure de Fin</label>
                      <input
                        type="time"
                        value={settings.workingHours.end}
                        onChange={(e) => setSettings({
                          ...settings, 
                          workingHours: {...settings.workingHours, end: e.target.value}
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Paramètres de Sécurité</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-[#2f365b]">Authentification à deux facteurs</h4>
                        <p className="text-sm text-gray-600">Sécurisez l'accès avec une double authentification</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ea532b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ea532b]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-[#2f365b]">Connexions simultanées</h4>
                        <p className="text-sm text-gray-600">Limiter le nombre de sessions actives</p>
                      </div>
                      <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]">
                        <option value="1">1 session</option>
                        <option value="3">3 sessions</option>
                        <option value="5">5 sessions</option>
                        <option value="unlimited">Illimité</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-[#2f365b]">Expiration de session</h4>
                        <p className="text-sm text-gray-600">Durée avant déconnexion automatique</p>
                      </div>
                      <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea532b]">
                        <option value="30">30 minutes</option>
                        <option value="60">1 heure</option>
                        <option value="120">2 heures</option>
                        <option value="480">8 heures</option>
                      </select>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center">
                        <AlertTriangle size={20} className="text-yellow-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-yellow-800">Clé API</h4>
                          <p className="text-sm text-yellow-700">Utilisée pour les intégrations externes</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center space-x-3">
                        <div className="flex-1 font-mono text-sm bg-white p-2 rounded border">
                          {showApiKey ? 'yiel_api_key_2025_secure_token_xyz123' : '••••••••••••••••••••••••••••••••'}
                        </div>
                        <button
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="p-2 text-gray-600 hover:text-gray-800"
                        >
                          {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        <button className="px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                          Régénérer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Paramètres de Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Mail size={20} className="text-[#ea532b] mr-3" />
                        <div>
                          <h4 className="font-medium text-[#2f365b]">Notifications Email</h4>
                          <p className="text-sm text-gray-600">Recevoir les alertes par email</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={settings.emailNotifications}
                          onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ea532b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ea532b]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Smartphone size={20} className="text-[#ea532b] mr-3" />
                        <div>
                          <h4 className="font-medium text-[#2f365b]">Notifications SMS</h4>
                          <p className="text-sm text-gray-600">Recevoir les alertes par SMS</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={settings.smsNotifications}
                          onChange={(e) => setSettings({...settings, smsNotifications: e.target.checked})}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ea532b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ea532b]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Bell size={20} className="text-[#ea532b] mr-3" />
                        <div>
                          <h4 className="font-medium text-[#2f365b]">Notifications Push</h4>
                          <p className="text-sm text-gray-600">Notifications dans l'application</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={settings.pushNotifications}
                          onChange={(e) => setSettings({...settings, pushNotifications: e.target.checked})}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ea532b]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ea532b]"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Integrations */}
              {activeTab === 'integrations' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#2f365b] mb-4">Intégrations</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-3">
                            <Mail size={20} />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2f365b]">Email Service</h4>
                            <p className="text-sm text-gray-600">SMTP Configuration</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Connecté
                        </span>
                      </div>
                      <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Configurer
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mr-3">
                            <Database size={20} />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2f365b]">Sauvegarde Cloud</h4>
                            <p className="text-sm text-gray-600">Backup automatique</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Actif
                        </span>
                      </div>
                      <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Configurer
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[#2f365b] mb-4">État du Système</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-green-500" />
              <div>
                <div className="font-medium text-[#2f365b]">Serveur Principal</div>
                <div className="text-sm text-gray-600">Opérationnel</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-green-500" />
              <div>
                <div className="font-medium text-[#2f365b]">Base de Données</div>
                <div className="text-sm text-gray-600">Opérationnel</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <AlertTriangle size={20} className="text-yellow-500" />
              <div>
                <div className="font-medium text-[#2f365b]">Sauvegarde</div>
                <div className="text-sm text-gray-600">En cours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SettingsManagement;