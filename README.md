# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## YIEL - Système d'Information RH

YIEL est une solution SIRH complète conçue pour les entreprises africaines, offrant une gestion moderne et intuitive des ressources humaines.

### Structure du projet

#### Pages principales
- **Home** (`/`) - Page d'accueil
- **Dashboard** (`/dashboard`) - Tableau de bord principal (après connexion)
- **Demo** (`/demo`) - Demande de démonstration

#### Authentification
- **Connexion** (`/log-in`) - Page de connexion
- **Inscription** (`/inscription`) - Création de compte

#### Modules SIRH
- **Collaborateurs** (`/collaborateurs`) - Gestion des employés
- **Congés** (`/conges`) - Gestion des absences et congés
- **Formations** (`/formations`) - Gestion des formations
- **Rapports** (`/rapports`) - Analytics et rapports RH
- **Paramètres** (`/parametres`) - Configuration du système

#### Modules produits
- **Y'Core** (`/core`) - Gestion de profil salarié
- **Y'Expense** (`/expense`) - Notes de frais
- **Y'Talents** (`/talents`) - Gestion des talents
- **Y'Time** (`/time`) - Gestion du temps
- **Y'Learn** (`/learn`) - Formation
- **Y'Sign** (`/sign`) - Signature électronique
- **Y'Recrute** (`/recrute`) - Recrutement

#### Services
- **Conseil en transformation RH** (`/conseil-en-transformation-RH`)
- **Pilotage du parcours collaborateur** (`/pilotage-du-parcours-collaborateur`)
- **HR Analytics** (`/analytics-HR`)
- **Recrutement sur mesure** (`/recrutement-sur-mesure`)
- **Solutions digitales** (`/solutions-digitales-RH`)

#### À propos
- **Notre histoire** (`/notre-histoire`)
- **Nos valeurs** (`/valeurs`)
- **Équipe** (`/equipe`)
- **Contact** (`/contact`)
- **Partenaires** (`/partenaires`)
- **Clients** (`/clients`)
- **Métiers** (`/metiers`)

#### Ressources
- **Blog RH** (`/blog-rh`)
- **Y'Voix Blog** (`/voix`)
- **Centre d'aide** (`/aide`)
- **Calculateur ROI** (`/calculateur`)
- **FAQ** (`/FAQ`)

#### Légal
- **Mentions légales** (`/mentions-legale`)
- **Politique de confidentialité** (`/politique-de-confidentialite`)
- **Conditions d'utilisation** (`/conditions-utilisation`)

### Technologies utilisées
- React 19
- Vite
- Tailwind CSS 4
- React Router DOM
- Lucide React (icônes)
- Framer Motion (animations)
- React Helmet (SEO)

### Prochaines étapes - Backend
Le projet est maintenant prêt pour l'intégration du backend avec Firebase :
- Authentication (Firebase Auth)
- Base de données (Firestore)
- Storage (Firebase Storage)
- Hosting (Firebase Hosting)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
