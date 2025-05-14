import React, { useState, useEffect } from "react";
import {
  MapPin, Mail, Clock, Briefcase, Book, Users, PenTool, 
  UserPlus, MessageCircle, HelpCircle, Calculator, 
  Newspaper, Compass, Building, FileCheck, ChevronUp, ChevronDown
} from "lucide-react";
import {
  FaXTwitter, FaTiktok, FaLinkedin, 
  FaFacebook, FaInstagram, FaYoutube
} from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Données pour les sections de liens avec des icônes correspondantes
  const footerSections = [
    {
      title: "Nos offres",
      links: [
        {
          icon: <PenTool size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Conseils en transformation RH",
          href: "/conseil-en-transformation-RH"
        },
        {
          icon: <Users size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Pilotage du parcours collaborateur",
        },
        {
          icon: <Calculator size={16} className="text-[#ea532b] hover:text-white" />,
          text: "HR Analytics & Tableaux de bord",
          href: "/analytics-HR"
        },
        {
          icon: <UserPlus size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Recrutement sur-mesure & intégration",
          href: "/recrutement-sur-mesure"
        },
        {
          icon: <MessageCircle size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Solutions digitales RH",
        },
      ]
    },
    {
      title: "Plateforme SIRH MyYiel",
      links: [
        {
          icon: <Briefcase size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Y'Core",
        },
        {
          icon: <Users size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Y'Expertise",
        },
        {
          icon: <Book size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Y'Talents",
        },
        {
          icon: <PenTool size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Y'Learn",
        },
        {
          icon: <FileCheck size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Y'Sign",
        },
        {
          icon: <UserPlus size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Y'Recrute",
        },
        {
          icon: <Clock size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Y'Time",
        },
      ]
    },
    {
      title: "À propos de nous",
      links: [
        {
          icon: <Compass size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Notre Histoire",
          href: "/notre-histoire",
        },
        {
          icon: <Building size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Nos valeurs",
        },
        {
          icon: <Users size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Teams YIELERS",
        },
        {
          icon: <MessageCircle size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Nous contacter",
        },
      ]
    },
    {
      title: "Ressources",
      links: [
        {
          icon: <Briefcase size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Nos métiers",
        },
        {
          icon: <HelpCircle size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Centre d'aide & FAQ",
        },
        {
          icon: <Calculator size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Calculateur ROI",
        },
        {
          icon: <Newspaper size={16} className="text-[#ea532b] hover:text-white" />,
          text: "Blog RH",
          href: "/blog-rh",
        },
      ]
    }
  ];

  const socialIcons = [
    { icon: <FaInstagram size={20} />, name: "Instagram", href: "#" },
    { icon: <FaXTwitter size={20} />, name: "Twitter", href: "#" },
    { icon: <FaFacebook size={20} />, name: "Facebook", href: "#" },
    { icon: <FaLinkedin size={20} />, name: "LinkedIn", href: "#" },
    { icon: <FaYoutube size={20} />, name: "YouTube", href: "#" },
    { icon: <FaTiktok size={20} />, name: "TikTok", href: "#" },
  ];

  const contactInfo = [
    { icon: <MapPin size={18} />, text: "Rue Charle Bindzi, Cameroun Yaoundé" },
    { icon: <Mail size={18} />, text: "contact@yiel-goup.com" },
    { icon: <Clock size={18} />, text: "Lun - Ven: 9h - 18h" },
    { icon: <Clock size={18} />, text: "Sam - Dim: Fermé" }
  ];



  const copyrightLinks = [
    {
      icon: <FileCheck size={16} className="text-[#ea532b] hover:text-white" />,
      text: "Mentions légales",
      href: "/Mentions-legale",
    },
    {
      icon: <FileCheck size={16} className="text-[#ea532b] hover:text-white" />,
      text: "Politique de confidentialité",
      href: "/politique-de-confidentialite",
    },
    {
      icon: <FiFileText size={16} className="text-[#ea532b] hover:text-white" />,
      text: "Cookies",
      href: "/cookies",
    },
  ];
   

  const appStores = [
    {
      image: "/LogoAppStore.svg",
      alt: "Download on the App Store",
      link: "#",
      classes: "w-25",
    },
    {
      image: "/LogoPlayStore.svg",
      alt: "Get it on Google Play",
      link: "#",
      classes: "w-25",
    },
  ];

  return (
    <footer className="relative bg-[#2F365B] text-white">
      {/* Orange accent bar */}
      <div className="h-2 bg-[#EA532C]"></div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Upper section with logo, description and sections */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative overflow-hidden rounded-lg p-1 bg-[#3a4166]/60">
                <img
                  src="/logo.webp"
                  alt="Logo YIEL"
                  className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ea532b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">YIEL Group</div>
                <div className="text-sm text-[#ea532b] font-semibold">
                  Système d'Information RH
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Yiel Group propose une offre complète pour transformer la fonction
              RH. Notre solution SIRH <span className="text-[#ea532b] font-medium no-underline hover:underline hover:cursor-pointer">MyYiel</span>{" "}
              digitalise tous vos processus RH : gestion administrative,
              talents, recrutement, formation, absences, etc. En parallèle, nous
              vous accompagnons avec des services RH sur-mesure : transformation
              RH, recrutement, onboarding, analyse RH, formations et solutions
              digitales adaptées à votre culture.
            </p>
            
            {/* Demo button */}
            <div>
              <button
                onClick={() => navigate("/demo")}
                className="bg-[#ea532b] hover:bg-[#d44620] text-white px-6 py-3 rounded-full transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm"
              >
                Demander une démo
              </button>
            </div>

            {/* Social icons with hover effects */}
            <div className="mt-6">
              <p className="text-gray-300 mb-3">Suivez-nous</p>
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
            </div>
          </div>
          
          {/* Footer sections with their titles */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {footerSections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg font-bold text-white relative pb-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-10 before:h-1 before:bg-[#ea532b] before:rounded-full">
                    {section.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {section.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.href || "#"}
                        onClick={(e) => {
                          if (link.href && link.href.startsWith('/')) {
                            e.preventDefault();
                            navigate(link.href);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="flex items-center hover:text-white bg-[#3a4166]/60 hover:bg-[#ea532b]/80 px-3 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group"
                      >
                        <span className="hover:text-white group-hover:text-white mr-2 transition-colors">
                          {link.icon}
                        </span>
                        <span className="text-sm whitespace-nowrap">{link.text}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Middle section with contact, newsletter and social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact info card */}
          <div className="bg-[#3a4166]/40 rounded-xl p-6 backdrop-blur-sm">
            <h4 className="font-bold mb-4 pb-2 border-b border-gray-700/30 flex items-center">
              <MessageCircle size={18} className="text-[#ea532b] mr-2" />
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start group transition-all duration-300 hover:translate-x-1">
                  <span className="text-[#ea532b] mr-3 flex-shrink-0 group-hover:scale-110 transform transition-transform mt-1">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter subscription */}
          <div className="bg-[#3a4166]/40 rounded-xl p-6 backdrop-blur-sm">
            <h4 className="font-bold mb-4 pb-2 border-b border-gray-700/30 flex items-center">
              <Newspaper size={18} className="text-[#ea532b] mr-2" />
              Newsletter
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
              <button className="absolute right-1 top-1 bottom-1 px-6 rounded-full bg-[#ea532b] text-white text-sm font-medium hover:bg-[#d44620] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ea532b] transform hover:scale-105">
                S'abonner
              </button>
            </div>
          </div>
          
          {/* App stores */}
          <div className="bg-[#3a4166]/40 rounded-xl p-6 backdrop-blur-sm">
            <h4 className="font-bold mb-4 pb-2 border-b border-gray-700/30">
              Téléchargez notre app
            </h4>
            
            <p className="text-gray-300 mb-4">
              Accédez à toutes les fonctionnalités YIEL depuis votre mobile
            </p>
            
            <div className="flex flex-wrap gap-4">
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
        </div>
        
        {/* Copyright section */}
        <div className="pt-6 border-t border-gray-700/30 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 sm:mb-0">
            © {new Date().getFullYear()} YIEL. Tous droits réservés.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
          {copyrightLinks.map((link, index) => (
  <a
    key={index}
    href={link.href}
    className="flex items-center gap-2 hover:text-[#ea532b] transition-colors"
  >
    {link.icon}
    {link.text}
  </a>
))}

          </div>
        {/* icon: <FileCheck size={16} className="text-[#ea532b] hover:text-white" />,
             text: "Mentions légales",
             href: "/Mentions-legale",
             icon: <FileCheck size={16} className="text-[#ea532b] hover:text-white" />,
             text: "Politique de confidentialité",
             href: "/politique-de-confidentialite", */}

        </div>
      </div>
      
      {/* Back to top button with animation */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#ea532b] text-white shadow-lg hover:bg-[#d64a27] focus:outline-none transition-all duration-300 transform hover:-translate-y-1 z-50 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Retour en haut"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;