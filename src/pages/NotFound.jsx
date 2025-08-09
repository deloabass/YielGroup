import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <p className="text-2xl font-semibold text-gray-600 mt-4">Page non trouvée</p>
      <p className="text-gray-500 mt-2">La page que vous recherchez n'existe pas.</p>
      <Link
        to="/"
        className="mt-8 flex items-center space-x-2 text-blue-600 hover:text-blue-800"
      >
        <Home className="w-5 h-5" />
        <span>Retour à l'accueil</span>
      </Link>
    </div>
  );
};

export default NotFound;