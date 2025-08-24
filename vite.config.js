import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import viteSitemap from "vite-plugin-sitemap";
import tailwindcss from "@tailwindcss/vite";
import { BASE_URL, dynamicRoutes, excludeRoutes } from './src/config/sitemap';

const staticRoutes = [
  "/",
  "/about",
  "/inscription",
  "/demo",
  "/conseil-en-transformation-RH",
  "/pilotage-du-parcours-collaborateur",
  "/analytics-HR",
  "/recrutement-sur-mesure",
  "/solutions-digitales-RH",
  "/talents",
  "/time",
  "/expense",
  "/plus-my-yiel",
  "/notre-histoire",
  "/valeurs",
  "/equipe",
  "/contact",
  "/partenaires",
  "/calculateur",
  "/voix",
  "/mentions-legale",
  "/politique-de-confidentialite",
  "/devenez-yieler",
  "/log-in",
  "/metiers",
  "/clients",
  "/nos-solution",
  "/FAQ",
  "/core",
  "/learn",
  "/sign",
  "/recrute",
  "/cookies",
  "/loader",
];

// Export async pour gérer les routes dynamiques
export default defineConfig(async () => {
  const dynamic = await dynamicRoutes();
  const routes = [...staticRoutes, ...dynamic].filter(r => !excludeRoutes.includes(r));

  return {
    plugins: [
      tailwindcss(),
      react(),

      // Sitemap automatique
      viteSitemap({
        hostname: BASE_URL,
        routes,
        generateRobotsTxt: true,
      }),

      // SEO de base
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: "YielGroup - SIRH",
            description:
              "YIEL, une solution SIRH complète et innovante conçue pour les entreprises en Afrique qui vous accompagne dans la gestion de vos talents et vos équipes et fait grandir votre entreprise.",
          },
        },
      }),
    ],

    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "react-router-dom"],
          },
        },
      },
    },
  };
});
