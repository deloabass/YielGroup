import { Helmet } from 'react-helmet-async';

const Seo = ({
  title = 'YielGroup - SIRH',
  description = 'Solution SIRH complète et innovante pour les entreprises africaines.',
  canonical = 'https://yielgroup.com',
  image = 'https://yielgroup.com/default-image.jpg',
  schemaMarkup,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta
      name="keywords"
      content="yielgroup, yiel, group, sirh, sirh afrique, solution afrique sirh, RH, gestion des talents, gestion des ressources humaines, logiciel RH, gestion des employés Afrique, suivi des performances RH, paie et administration du personnel, recrutement et intégration employés, logiciel de gestion RH pour entreprises africaines, transformation digitale RH, solution RH innovante, automatisation RH Afrique, RH Niger, RH Afrique francophone, entreprises africaines SIRH, gestion des ressources humaines Afrique"
    />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={canonical} />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Structured Data */}
    {schemaMarkup && (
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    )}
  </Helmet>
);

export default Seo;
