import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Settings,
  User,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
  Mail,
  Phone,
  Building,
  Save,
  Eye,
  EyeOff,
  Upload,
  Download,
  Trash2,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Users,
  Calendar,
  Clock,
  DollarSign
} from "lucide-react";

function Parametres() {
  const [activeTab, setActiveTab] = useState("profil");
  const [showPassword, setShowPassword] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const [profilData, setProfilData] = useState({
    nom: "NKOMANE BITEGYE",
    prenom: "Stéphanie",
    email: "stephanie@yiel-group.com",
    telephone: "+237 123 456 789",
    poste: "PDG et fondatrice",
    entreprise: "YIEL Group",
    adresse: "Yaoundé, Cameroun",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    weeklyReport: true,
    monthlyReport: true,
    systemAlerts: true,
    marketingEmails: false
  });

  const [companySettings, setCompanySettings] = useState({
    nomEntreprise: "YIEL Group",
    secteurActivite: "Technologie",
    nombreEmployes: "50-100",
    adresseEntreprise: "Yaoundé, Cameroun",
    siteWeb: "https://yielgroup.com",
    logo: null,
    couleurPrimaire: "#2f365b",
    couleurSecondaire: "#ea532b"
  });

  const [systemSettings, setSystemSettings] = useState({
    langue: "fr",
    fuseau: "Africa/Douala",
    formatDate: "dd/mm/yyyy",
    devise: "FCFA",
    sauvegardAuto: true,
    modeDebug: false
  });

  const tabs = [
    { id: "profil", label: "Profil", icon: <User size={20} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={20} /> },
    { id: "entreprise", label: "Entreprise", icon: <Building size={20} /> },
    { id: "systeme", label: "Système", icon: <Settings size={20} /> },
    { id: "securite", label: "Sécurité", icon: <Shield size={20} /> },
    { id: "donnees", label: "Données", icon: <Database size={20} /> }
  ];

  const handleSave = (section) => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("success");
      setTimeout(() => setSaveStatus(null), 3000);
    }, 1000);
  };

  const handleProfilChange = (field, value) => {
    setProfilData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field, value) => {
    setNotificationSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleCompanyChange = (field, value) => {
    setCompanySettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSystemChange = (field, value) => {
    setSystemSettings(prev => ({ ...prev, [field]: value }));
  };

  const renderProfilTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Informations personnelles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
            <input
              type="text"
              value={profilData.prenom}
              onChange={(e) => handleProfilChange("prenom", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input
              type="text"
              value={profilData.nom}
              onChange={(e) => handleProfilChange("nom", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={profilData.email}
              onChange={(e) => handleProfilChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
            <input
              type="tel"
              value={profilData.telephone}
              onChange={(e) => handleProfilChange("telephone", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Poste</label>
            <input
              type="text"
              value={profilData.poste}
              onChange={(e) => handleProfilChange("poste", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise</label>
            <input
              type="text"
              value={profilData.entreprise}
              onChange={(e) => handleProfilChange("entreprise", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Changer le mot de passe</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe actuel</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={profilData.currentPassword}
                onChange={(e) => handleProfilChange("currentPassword", e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
            <input
              type="password"
              value={profilData.newPassword}
              onChange={(e) => handleProfilChange("newPassword", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
            <input
              type="password"
              value={profilData.confirmPassword}
              onChange={(e) => handleProfilChange("confirmPassword", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleSave("profil")}
          className="px-6 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors flex items-center"
        >
          <Save size={16} className="mr-2" />
          Enregistrer
        </button>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Préférences de notification</h3>
        <div className="space-y-4">
          {Object.entries(notificationSettings).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">
                  {key === "emailNotifications" && "Notifications par email"}
                  {key === "pushNotifications" && "Notifications push"}
                  {key === "smsNotifications" && "Notifications SMS"}
                  {key === "weeklyReport" && "Rapport hebdomadaire"}
                  {key === "monthlyReport" && "Rapport mensuel"}
                  {key === "systemAlerts" && "Alertes système"}
                  {key === "marketingEmails" && "Emails marketing"}
                </h4>
                <p className="text-sm text-gray-600">
                  {key === "emailNotifications" && "Recevoir les notifications importantes par email"}
                  {key === "pushNotifications" && "Notifications en temps réel dans l'application"}
                  {key === "smsNotifications" && "Alertes urgentes par SMS"}
                  {key === "weeklyReport" && "Résumé hebdomadaire de l'activité RH"}
                  {key === "monthlyReport" && "Bilan mensuel détaillé"}
                  {key === "systemAlerts" && "Alertes de maintenance et mises à jour"}
                  {key === "marketingEmails" && "Actualités produit et conseils RH"}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => handleNotificationChange(key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ea532b]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ea532b]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleSave("notifications")}
          className="px-6 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors flex items-center"
        >
          <Save size={16} className="mr-2" />
          Enregistrer
        </button>
      </div>
    </div>
  );

  const renderEntrepriseTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Informations de l'entreprise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'entreprise</label>
            <input
              type="text"
              value={companySettings.nomEntreprise}
              onChange={(e) => handleCompanyChange("nomEntreprise", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Secteur d'activité</label>
            <input
              type="text"
              value={companySettings.secteurActivite}
              onChange={(e) => handleCompanyChange("secteurActivite", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre d'employés</label>
            <select
              value={companySettings.nombreEmployes}
              onChange={(e) => handleCompanyChange("nombreEmployes", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            >
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="50-100">50-100</option>
              <option value="100-500">100-500</option>
              <option value="500+">500+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Site web</label>
            <input
              type="url"
              value={companySettings.siteWeb}
              onChange={(e) => handleCompanyChange("siteWeb", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Personnalisation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Couleur primaire</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={companySettings.couleurPrimaire}
                onChange={(e) => handleCompanyChange("couleurPrimaire", e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={companySettings.couleurPrimaire}
                onChange={(e) => handleCompanyChange("couleurPrimaire", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Couleur secondaire</label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={companySettings.couleurSecondaire}
                onChange={(e) => handleCompanyChange("couleurSecondaire", e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={companySettings.couleurSecondaire}
                onChange={(e) => handleCompanyChange("couleurSecondaire", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleSave("entreprise")}
          className="px-6 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors flex items-center"
        >
          <Save size={16} className="mr-2" />
          Enregistrer
        </button>
      </div>
    </div>
  );

  const renderSystemeTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Paramètres système</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Langue</label>
            <select
              value={systemSettings.langue}
              onChange={(e) => handleSystemChange("langue", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fuseau horaire</label>
            <select
              value={systemSettings.fuseau}
              onChange={(e) => handleSystemChange("fuseau", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            >
              <option value="Africa/Douala">Afrique/Douala</option>
              <option value="Africa/Casablanca">Afrique/Casablanca</option>
              <option value="Europe/Paris">Europe/Paris</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Format de date</label>
            <select
              value={systemSettings.formatDate}
              onChange={(e) => handleSystemChange("formatDate", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            >
              <option value="dd/mm/yyyy">DD/MM/YYYY</option>
              <option value="mm/dd/yyyy">MM/DD/YYYY</option>
              <option value="yyyy-mm-dd">YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Devise</label>
            <select
              value={systemSettings.devise}
              onChange={(e) => handleSystemChange("devise", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
            >
              <option value="FCFA">FCFA</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Options avancées</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">Sauvegarde automatique</h4>
              <p className="text-sm text-gray-600">Sauvegarder automatiquement les modifications</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={systemSettings.sauvegardAuto}
                onChange={(e) => handleSystemChange("sauvegardAuto", e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ea532b]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ea532b]"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">Mode debug</h4>
              <p className="text-sm text-gray-600">Activer les logs détaillés pour le support technique</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={systemSettings.modeDebug}
                onChange={(e) => handleSystemChange("modeDebug", e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ea532b]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ea532b]"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleSave("systeme")}
          className="px-6 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors flex items-center"
        >
          <Save size={16} className="mr-2" />
          Enregistrer
        </button>
      </div>
    </div>
  );

  const renderSecuriteTab = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div className="flex">
          <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
          <div>
            <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Ces paramètres affectent la sécurité de votre compte et de vos données.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Authentification</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">Authentification à deux facteurs</h4>
              <p className="text-sm text-gray-600">Sécuriser votre compte avec un code SMS</p>
            </div>
            <button className="px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors">
              Activer
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">Sessions actives</h4>
              <p className="text-sm text-gray-600">Gérer les appareils connectés à votre compte</p>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Voir les sessions
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Permissions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Rôle actuel: Administrateur</h4>
            <p className="text-sm text-gray-600 mb-3">Vous avez accès à toutes les fonctionnalités du système</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Gestion utilisateurs</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Rapports</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Paramètres système</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Données sensibles</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions de sécurité</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 text-left border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="flex items-center">
              <RefreshCw size={16} className="mr-2" />
              Forcer la déconnexion sur tous les appareils
            </span>
          </button>
          <button className="w-full flex items-center justify-between p-4 text-left border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors">
            <span className="flex items-center">
              <Trash2 size={16} className="mr-2" />
              Supprimer définitivement le compte
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderDonneesTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sauvegarde et restauration</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">Dernière sauvegarde</h4>
              <p className="text-sm text-gray-600">20 avril 2025 à 14:30</p>
            </div>
            <button className="px-4 py-2 bg-[#ea532b] text-white rounded-lg hover:bg-[#d64a27] transition-colors flex items-center">
              <Download size={16} className="mr-2" />
              Sauvegarder maintenant
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-800">Restaurer les données</h4>
              <p className="text-sm text-gray-600">Importer une sauvegarde précédente</p>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center">
              <Upload size={16} className="mr-2" />
              Restaurer
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Export des données</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="flex items-center mb-2">
              <Users size={20} className="mr-2 text-[#ea532b]" />
              <span className="font-medium">Données collaborateurs</span>
            </div>
            <p className="text-sm text-gray-600">Exporter la liste complète des employés</p>
          </button>
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="flex items-center mb-2">
              <Calendar size={20} className="mr-2 text-[#ea532b]" />
              <span className="font-medium">Données de congés</span>
            </div>
            <p className="text-sm text-gray-600">Historique des demandes et validations</p>
          </button>
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="flex items-center mb-2">
              <Clock size={20} className="mr-2 text-[#ea532b]" />
              <span className="font-medium">Données de présence</span>
            </div>
            <p className="text-sm text-gray-600">Pointages et heures travaillées</p>
          </button>
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="flex items-center mb-2">
              <DollarSign size={20} className="mr-2 text-[#ea532b]" />
              <span className="font-medium">Données financières</span>
            </div>
            <p className="text-sm text-gray-600">Salaires et notes de frais</p>
          </button>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <div className="flex">
          <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
          <div>
            <h3 className="text-sm font-medium text-red-800">Zone de danger</h3>
            <p className="text-sm text-red-700 mt-1">
              Ces actions sont irréversibles et supprimeront définitivement vos données.
            </p>
            <div className="mt-4 space-y-2">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center">
                <Trash2 size={16} className="mr-2" />
                Supprimer toutes les données
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gérez vos préférences et paramètres de compte
            </p>
          </div>

          {/* Save Status */}
          {saveStatus && (
            <div className={`mb-6 p-4 rounded-lg ${
              saveStatus === "saving" ? "bg-blue-50 text-blue-800" :
              saveStatus === "success" ? "bg-green-50 text-green-800" :
              "bg-red-50 text-red-800"
            }`}>
              <div className="flex items-center">
                {saveStatus === "saving" && <RefreshCw className="animate-spin h-5 w-5 mr-2" />}
                {saveStatus === "success" && <CheckCircle className="h-5 w-5 mr-2" />}
                <span>
                  {saveStatus === "saving" && "Enregistrement en cours..."}
                  {saveStatus === "success" && "Paramètres enregistrés avec succès"}
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <ul className="space-y-2">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? "bg-[#ea532b] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {tab.icon}
                        <span className="ml-3">{tab.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                {activeTab === "profil" && renderProfilTab()}
                {activeTab === "notifications" && renderNotificationsTab()}
                {activeTab === "entreprise" && renderEntrepriseTab()}
                {activeTab === "systeme" && renderSystemeTab()}
                {activeTab === "securite" && renderSecuriteTab()}
                {activeTab === "donnees" && renderDonneesTab()}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Parametres;