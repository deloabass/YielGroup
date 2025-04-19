import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Briefcase,
  Book,
  Users,
  PenTool,
  UserPlus,
  MessageCircle,
  HelpCircle,
  Calculator,
  Newspaper,
  Compass,
  Building,
  FileCheck,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  FaXTwitter,
  FaTiktok,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  // Données pour les sections de liens avec des icônes correspondantes
  const footerSections = [
    {
      title: "Nos offres",
      links: [
        {
          icon: <PenTool size={16} className="mr-2 text-[#ea532b]" />,
          text: "Conseils en transformation RH",
        },
        {
          icon: <Users size={16} className="mr-2 text-[#ea532b]" />,
          text: "Pilotage du parcours collaborateur",
        },
        {
          icon: <Calculator size={16} className="mr-2 text-[#ea532b]" />,
          text: "HR Analytics & Tableaux de bord",
        },
        {
          icon: <UserPlus size={16} className="mr-2 text-[#ea532b]" />,
          text: "Recrutement sur-mesure & intégration",
        },
        {
          icon: <MessageCircle size={16} className="mr-2 text-[#ea532b]" />,
          text: "Solutions digitales RH",
        },
      ],
    },
    {
      title: "Plateforme SIRH MyYiel",
      links: [
        {
          icon: <Briefcase size={16} className="mr-2 text-[#ea532b]" />,
          text: "Y'Core",
        },
        {
          icon: <Users size={16} className="mr-2 text-[#ea532b]" />,
          text: "Y'Expertise",
        },
        {
          icon: <Book size={16} className="mr-2 text-[#ea532b]" />,
          text: "Y'Talents",
        },
        {
          icon: <PenTool size={16} className="mr-2 text-[#ea532b]" />,
          text: "Y'Learn",
        },
        {
          icon: <FileCheck size={16} className="mr-2 text-[#ea532b]" />,
          text: "Y'Sign",
        },
        {
          icon: <UserPlus size={16} className="mr-2 text-[#ea532b]" />,
          text: "Y'Recrute",
        },
        {
          icon: <Clock size={16} className="mr-2 text-[#ea532b]" />,
          text: "Y'Time",
        },
      ],
    },
    {
      title: "À propos de nous",
      links: [
        {
          icon: <Compass size={16} className="mr-2 text-[#ea532b]" />,
          text: "Notre Histoire",
          href: "/Notre-Histoire",
        },
        {
          icon: <Building size={16} className="mr-2 text-[#ea532b]" />,
          text: "Nos valeurs",
        },
        {
          icon: <Users size={16} className="mr-2 text-[#ea532b]" />,
          text: "Teams YIELERS",
        },
        {
          icon: <MessageCircle size={16} className="mr-2 text-[#ea532b]" />,
          text: "Nous contacter",
        },
        {
          icon: <FileCheck size={16} className="mr-2 text-[#ea532b]" />,
          text: "Mentions légales",
          href: "/Mentions-legale",
        },
        {
          icon: <FileCheck size={16} className="mr-2 text-[#ea532b]" />,
          text: "Politique de confidentialité",
          href: "/politique-de-confidentialite",
        },
      ],
    },
    {
      title: "Ressources",
      links: [
        {
          icon: <Briefcase size={16} className="mr-2 text-[#ea532b]" />,
          text: "Nos métiers",
        },
        {
          icon: <HelpCircle size={16} className="mr-2 text-[#ea532b]" />,
          text: "Centre d'aide & FAQ",
        },
        {
          icon: <Calculator size={16} className="mr-2 text-[#ea532b]" />,
          text: "Calculateur ROI",
        },
        {
          icon: <Newspaper size={16} className="mr-2 text-[#ea532b]" />,
          text: "Blog RH",
          href: "/blog-rh",
        },
      ],
      showButton: true,
    },
  ];

  // Données pour les réseaux sociaux
  const socialIcons = [
    { icon: <FaInstagram size={20} />, name: "Instagram", href: "#" },
    { icon: <FaXTwitter size={20} />, name: "Twitter", href: "#" },
    { icon: <FaFacebook size={20} />, name: "Facebook", href: "#" },
    { icon: <FaLinkedin size={20} />, name: "LinkedIn", href: "#" },
    { icon: <FaYoutube size={20} />, name: "YouTube", href: "#" },
    { icon: <FaTiktok size={20} />, name: "TikTok", href: "#" },
  ];

  // Données pour les liens du copyright
  const copyrightLinks = ["CGU", "CGV", "Confidentialité", "Cookies"];

  // Données pour les informations de contact
  const contactInfo = [
    {
      icon: <MapPin size={18} className="text-[#ea532b] mr-2 mt-1 flex-shrink-0" />,
      text: "Rue Charle Bindzi, Cameroun Yaoundé",
    },
    {
      icon: <Mail size={18} className="text-[#ea532b] mr-2 flex-shrink-0" />,
      text: "contact@yiel-goup.com",
    },
  ];

  // Données pour les horaires d'ouverture
  const openingHours = [
    {
      icon: <Clock size={18} className="text-[#ea532b] mr-2 flex-shrink-0" />,
      text: "Lun - Ven: 9h - 18h",
    },
    {
      icon: <Clock size={18} className="text-[#ea532b] mr-2 flex-shrink-0" />,
      text: "Sam - Dim: Fermé",
    },
  ];

  // Données pour les app stores
  const appStores = [
    {
      image: "/LogoAppStore.svg",
      alt: "Download on the App Store",
      link: "#",
      classes: "h-40",
    },
    {
      image: "/LogoPlayStore.svg",
      alt: "Get it on Google Play",
      link: "#",
      classes: "h-40",
    },
  ];

  return (
    <footer className="bg-[#2F365B] text-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4">
        {/* Gradient overlay for visual appeal */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-[#EA532C]"></div>
        
        {/* Top section with logo and main columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and company description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center mb-4 group">
              <div className="relative overflow-hidden rounded-lg mr-3 p-1">
                <img
                  src="/logo.webp"
                  alt="Logo YIEL"
                  className="w-12 h-12 transition-transform  duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ea532b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">YIEL</div>
                <div className="text-sm text-[#ea532b] font-semibold">
                  Système d'Information RH
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Yiel Group propose une offre complète pour transformer la fonction
              RH. Notre solution SIRH <span className="text-[#ea532b] font-medium">MyYiel</span>{" "}
              digitalise tous vos processus RH : gestion administrative,
              talents, recrutement, formation, absences, etc. En parallèle, nous
              vous accompagnons avec des services RH sur-mesure : transformation
              RH, recrutement, onboarding, analyse RH, formations et solutions
              digitales adaptées à votre culture.
            </p>

            {/* Social icons with hover effects */}
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={`Suivez-nous sur ${social.name}`}
                  className="bg-[#3a4166] hover:bg-[#ea532b] transition-all duration-300 p-2 rounded-full transform hover:-translate-y-1 hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* App store badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              {appStores.map((store, index) => (
                <a 
                  key={index} 
                  href={store.link} 
                  className="inline-block transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={store.image}
                    alt={store.alt}
                    className={store.classes}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer navigation sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {footerSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  {/* Mobile accordion header */}
                  <div 
                    className="flex items-center justify-between cursor-pointer md:cursor-default"
                    onClick={() => toggleSection(sectionIndex)}
                  >
                    <h3 className="text-lg font-bold text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-[#ea532b] after:rounded-full">
                      {section.title}
                    </h3>
                    <span className="md:hidden">
                      {activeSection === sectionIndex ? (
                        <ChevronUp size={20} className="text-[#ea532b]" />
                      ) : (
                        <ChevronDown size={20} className="text-[#ea532b]" />
                      )}
                    </span>
                  </div>
                  
                  {/* Links */}
                  <div className={`space-y-3 transition-all duration-300 overflow-hidden ${activeSection === sectionIndex || window.innerWidth >= 768 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'}`}>
                    {section.links.map((link, linkIndex) => (
                      <div 
                        key={linkIndex}
                        className="group"
                      >
                        <a
                          onClick={() => {
                            if (link.href) {
                              navigate(link.href);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          className="text-gray-300 hover:text-[#ea532b] duration-200 flex items-center cursor-pointer group-hover:translate-x-1 transform transition-transform"
                        >
                          <span className="transform transition-transform group-hover:scale-110">
                            {link.icon}
                          </span>
                          <span className="group-hover:text-white transition-colors hover:text-[#ea532b]">{link.text}</span>
                        </a>
                      </div>
                    ))}
                    
                    {section.showButton && (
                      <div className="mt-6">
                        <button
                          onClick={() => navigate("/demo")}
                          className="bg-[#ea532b] hover:bg-[#d44620] text-white px-5 py-2 rounded-full transition-all duration-300 font-medium block text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                          Demander une démo
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter and contact info */}
        <div className="border-t border-gray-700/50 pt-8 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Newsletter */}
            <div className="lg:col-span-6 bg-[#3a4166]/50 p-6 rounded-lg backdrop-blur-sm shadow-inner">
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Newspaper size={20} className="text-[#ea532b] mr-2" />
                Abonnez-vous à notre newsletter
              </h4>
              <p className="text-gray-300 mb-4">
                Recevez nos dernières actualités et conseils RH
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 rounded-full bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#ea532b] pr-32 placeholder-gray-400 transition-all duration-300 hover:bg-white/15"
                />
                <button className="absolute right-1 top-1 bottom-1 cursor-pointer px-6 rounded-full bg-[#ea532b] text-white font-medium hover:bg-[#d44620] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ea532b] transform hover:scale-105">
                  S'abonner
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#3a4166]/30 p-4 rounded-lg shadow-inner">
                <h4 className="font-bold mb-3 pb-2 border-b border-gray-700/50 flex items-center">
                  <MessageCircle size={18} className="text-[#ea532b] mr-2" />
                  Contactez-nous
                </h4>
                <ul className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-start group transition-all duration-300 hover:translate-x-1">
                      <span className="group-hover:scale-110 transform transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#3a4166]/30 p-4 rounded-lg shadow-inner">
                <h4 className="font-bold mb-3 pb-2 border-b border-gray-700/50 flex items-center">
                  <Clock size={18} className="text-[#ea532b] mr-2" />
                  Horaires d'ouverture
                </h4>
                <ul className="space-y-3 text-gray-300">
                  {openingHours.map((item, index) => (
                    <li key={index} className="flex items-center group transition-all duration-300 hover:translate-x-1">
                      <span className="group-hover:scale-110 transform transition-transform">
                        {item.icon}
                      </span>
                      <span className="group-hover:text-white transition-colors">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} YIEL. Tous droits réservés.
          </div>
          <div className="flex flex-wrap justify-center space-x-4 text-gray-400 text-sm">
            {copyrightLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-[#ea532b] transition-colors mb-2 md:mb-0"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top button with animation */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-[#ea532b] text-white shadow-lg hover:bg-[#d64a27] focus:outline-none transition-all duration-300 transform hover:-translate-y-1 z-50 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Retour en haut"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;