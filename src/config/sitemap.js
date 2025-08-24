// src/config/sitemap.js

export const BASE_URL = 'https://yielgroup.com'; // Ton domaine principal

// Routes dynamiques à récupérer depuis une API ou base de données
export const dynamicRoutes = async () => {
  // Exemple : récupération depuis une API
  // const res = await fetch(`${BASE_URL}/api/products`);
  // const products = await res.json();
  // return products.map(p => `/product/${p.slug}`);
  
  return []; // Par défaut, aucune route dynamique
};

// Routes à exclure du sitemap
export const excludeRoutes = ['/admin', '/private'];
