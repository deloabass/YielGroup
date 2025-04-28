import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Briefcase,
  Users,
  Book,
  PenTool,
  UserPlus,
  Clock,
  Compass,
  HelpCircle,
  Calculator,
  Newspaper,
  MessageCircle,
  Building,
  Handshake,
  ChevronRight,
  MenuIcon
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeLink, setActiveLink] = useState("Accueil");

  const searchInputRef = useRef(null);
  const headerRef = useRef(null);
  const dropdownRefs = useRef({});

  // Menu data structure wrapped in useMemo to prevent recreation on each render
  const menuData = useMemo(() => ({
    solutions: {
      title: "Nos solutions",
      layout: "grid",
      columns: 2,
      width: 500,
      position: "center",
      navigate: "/nos-solution",
      items: [
        {
          icon: <Briefcase className="text-[#ea532b]" size={20} />,
          title: "Y'Core",
          description: "Gestion de profil salarié",
          path: "/core"
        },
        {
          icon: <Users className="text-[#ea532b]" size={20} />,
          title: "Y'Expertise",
          description: "Notes de frais",
          path: "/expertise"
        },
        {
          icon: <Users className="text-[#ea532b]" size={20} />,
          title: "Y'Talents",
          description: "Gestion des talents",
          path: "/talents"
        },
        {
          icon: <Book className="text-[#ea532b]" size={20} />,
          title: "Y'Learn",
          description: "Formation",
          path: "/learn"
        },
        {
          icon: <PenTool className="text-[#ea532b]" size={20} />,
          title: "Y'Sign",
          description: "Signature électronique",
          path: "/sign"
        },
        {
          icon: <UserPlus className="text-[#ea532b]" size={20} />,
          title: "Y'Recrute",
          description: "Optimisation du recrutement",
          path: "/recrute"
        },
        {
          icon: <Clock className="text-[#ea532b]" size={20} />,
          title: "Y'Time",
          description: "Absences & Congés",
          path: "/time"
        }
      ]
    },
    nous: {
      title: "Nous",
      layout: "grid",
      columns: 2,
      width: 500,
      position: "center",
      items: [
        {
          icon: <Compass className="text-[#ea532b]" size={20} />,
          title: "Notre Histoire",
          description: "Le parcours de YIEL",
          path: "/Notre-Histoire"
        },
        {
          icon: <Building className="text-[#ea532b]" size={20} />,
          title: "Nos valeurs",
          description: "Les principes qui nous guident",
          path: "/valeurs"
        },
        {
          icon: <Users className="text-[#ea532b]" size={20} />,
          title: "Teams YIELERS",
          description: "Notre équipe à votre service",
          path: "/equipe"
        },
        {
          icon: <MessageCircle className="text-[#ea532b]" size={20} />,
          title: "Nous contacter",
          description: "Notre engagement pour vous",
          path: "/contact"
        }
      ]
    },
    ressources: {
      title: "Ressources",
      layout: "grid",
      columns: 2,
      width: 500,
      position: "right",
      items: [
        {
          icon: <Handshake className="text-[#ea532b]" size={20} />,
          title: "Nos partenaires",
          description: "Le parcours de YIEL",
          path: "/partenaires"
        },
        {
          icon: <Briefcase className="text-[#ea532b]" size={20} />,
          title: "Nos métiers",
          description: "Découvrez notre expertise",
          path: "/metiers"
        },
        {
          icon: <HelpCircle className="text-[#ea532b]" size={20} />,
          title: "Centre d'aide & FAQ",
          description: "Trouvez vos réponses",
          path: "/aide"
        },
        {
          icon: <Calculator className="text-[#ea532b]" size={20} />,
          title: "Calculateur ROI",
          description: "Mesurez l'impact du logiciel",
          path: "/calculateur"
        },
        {
          icon: <Users className="text-[#ea532b]" size={20} />,
          title: "Nos clients",
          description: "Les principes nous guident",
          path: "/clients"
        },
        {
          icon: <Newspaper className="text-[#ea532b]" size={20} />,
          title: "Blog RH",
          description: "Explorez nos articles",
          path: "/blog-rh"
        }
      ]
    },
  }), []);  // Empty dependency array means it only runs once on component mount

  // Navigation links also wrapped in useMemo to prevent recreation
  const navLinks = useMemo(() => [
    { title: "Accueil", path: "/", dropdown: false },
    { title: "Nos solutions", dropdown: true, menuKey: "solutions" },
    { title: "Nous", dropdown: true, menuKey: "nous" },
    { title: "Ressources", dropdown: true, menuKey: "ressources" },
    { title: "Devenez un Yieler", path: "/devenez-yieler", dropdown: false }
  ], []);

  // Effet pour gérer le défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effet pour gérer les clics en dehors du menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null);
        if (window.innerWidth < 1024) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Effet pour focus sur l'input de recherche quand il est ouvert
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Effet pour mettre à jour le lien actif en fonction de la route
  // Using stable references to menuData and navLinks
// Effet pour mettre à jour le lien actif en fonction de la route
useEffect(() => {
  const path = location.pathname;
  const activeNavLink = navLinks.find(link => link.path === path || (link.dropdown && menuData[link.menuKey]?.items.some(item => item.path === path)));

  if (activeNavLink) {
    setActiveLink(activeNavLink.title);
  } else if (path === "/") {
    setActiveLink("Accueil");
  } else if (Object.values(menuData.solutions.items).some(item => item.path === path)) {
    setActiveLink("Nos solutions");
  } else if (Object.values(menuData.nous.items).some(item => item.path === path)) {
    setActiveLink("Nous");
  } else if (Object.values(menuData.ressources.items).some(item => item.path === path)) {
    setActiveLink("Ressources");
  } else {
    setActiveLink("Page");
  }
}, [location, navLinks, menuData]);

  // Handle hover effect for desktop dropdown menus
  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 1024) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveMenu(null);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleDropdown = (menu) => setActiveMenu(activeMenu === menu ? null : menu);
  const toggleMobileDropdown = (menu) => setActiveMobileMenu(activeMobileMenu === menu ? null : menu);

  const handleLinkClick = (link, path) => {
    setActiveLink(link);
    setActiveMenu(null);
    setIsOpen(false);
    if (path) navigate(path);
  };

  // Render dropdown menu for desktop
  const renderDesktopDropdown = (menuKey) => {
    const menu = menuData[menuKey];
    if (!menu) return null;

    let positionClass = "left-1/2 -translate-x-1/2";
    if (menu.position === "right") positionClass = "right-0";
    else if (menu.position === "left") positionClass = "left-0";

    return (
      <div
        ref={(ref) => (dropdownRefs.current[menuKey] = ref)}
        className={`absolute ${
          activeMenu === menuKey ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-white shadow-xl rounded-lg p-4 transition-all duration-300 ease-in-out ${positionClass} z-50 mt-3`}
        style={{ width: `${menu.width}px`, transitionProperty: "opacity, visibility, transform", transform: activeMenu === menuKey ? "translateY(0)" : "translateY(-10px)" }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 bg-white transform rotate-45"></div>

        <div className={`grid grid-cols-${menu.columns} gap-4`}>
          {menu.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg group cursor-pointer transition-all duration-300 hover:shadow-md"
              onClick={() => handleLinkClick(item.title, item.path)}
            >
              <div className="p-1.5 rounded-full bg-gray-100 group-hover:bg-[#ea532b]/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <div className="font-medium text-[#2f365b] group-hover:text-[#ea532b] transition-colors">
                  {item.title}
                </div>
                <span className="text-sm text-gray-600">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render mobile menu items
  const renderMobileMenuItems = (menuKey) => {
    const menu = menuData[menuKey];
    if (!menu) return null;

    return (
      <div className="py-2 px-3" key={menuKey}>
        <button
          className={`flex items-center justify-between w-full text-left font-medium ${
            activeMobileMenu === menuKey ? "text-[#ea532b]" : "text-[#2f365b]"
          } transition-colors`}
          onClick={() => toggleMobileDropdown(menuKey)}
        >
          <span>{menu.title}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              activeMobileMenu === menuKey ? "rotate-180 text-[#ea532b]" : "text-gray-400"
            }`}
          />
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            activeMobileMenu === menuKey ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } mt-2 ml-2 border-l-2 border-[#ea532b]/20 pl-3`}
        >
          {menu.items.map((item, idx) => (
            <div
              key={idx}
              className={`py-2.5 flex items-center space-x-3 cursor-pointer transition-all duration-300 ${
                activeLink === item.title
                  ? "text-[#ea532b]"
                  : "text-[#2f365b] hover:text-[#ea532b]"
              } hover:translate-x-1`}
              onClick={() => handleLinkClick(item.title, item.path)}
            >
              <div className={`p-1 rounded-full ${activeLink === item.title ? "bg-[#ea532b]/10" : "bg-gray-100"}`}>
                {item.icon}
              </div>
              <span className="font-medium">{item.title}</span>
              <ChevronRight size={16} className="ml-auto text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo et nom de l'entreprise */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleLinkClick("Accueil", "/")}
          >
            <div className="relative overflow-hidden rounded-lg p-1">
              <img
                src="/logo.webp"
                alt="Logo de l'entreprise"
                className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ea532b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-2">
              <span className="hidden sm:block text-[#2f365b] font-bold text-xl">
                YIEL Group
              </span>
              <span className="hidden sm:block text-[#ea532b] text-xs font-medium">
                Système d'Information RH
              </span>
            </div>
          </div>

          {/* Navigation - version desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.menuKey)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center px-3 py-2 text-nowrap rounded-md transition-all duration-300 cursor-pointer relative ${
                    (link.dropdown && activeMenu === link.menuKey) || activeLink === link.title
                      ? "text-[#ea532b] font-medium"
                      : "text-[#2f365b] hover:text-[#ea532b] font-medium"
                  }`}
                  onClick={() =>
                    link.dropdown
                      ? toggleDropdown(link.menuKey)
                      : handleLinkClick(link.title, link.path)
                  }
                  aria-expanded={link.dropdown && activeMenu === link.menuKey}
                >
                  {link.title}
                  {link.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-300 ${
                        activeMenu === link.menuKey ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ea532b] rounded-full transform origin-left transition-transform duration-300 ${
                    (link.dropdown && activeMenu === link.menuKey) || activeLink === link.title
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}></span>
                </button>
                {link.dropdown && renderDesktopDropdown(link.menuKey)}
              </div>
            ))}
          </nav>

          {/* Actions (visible sur desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 text-[#2f365b] transition-colors duration-300"
              aria-label="Rechercher"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => handleLinkClick("Se connecter", "/log-in")}
              className="px-5 py-2 text-[#2f365b] border border-transparent hover:border-[#2f365b]/20 hover:bg-gray-50 font-medium rounded-full transition-all duration-300"
            >
              Se connecter
            </button>
            <button
              onClick={() => handleLinkClick("Démo", "/demo")}
              className="px-5 py-2 bg-[#ea532b] hover:bg-[#d44620] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Demander une démo
            </button>
          </div>

          {/* Menu mobile burger et icones */}
          <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-gray-100 text-[#2f365b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ea532b]/50"
            aria-label="Rechercher"
          >
            <Search size={20} className="stroke-1.5" />
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 text-[#2f365b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ea532b]/50"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X size={24} className="stroke-1.5" />
            ) : (
              <MenuIcon size={24} className="stroke-1.5" />
            )}
          </button>
          </div>
        </div>

        {/* Menu mobile déplié avec animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 pb-4 border-t border-gray-200 pt-3 max-h-[70vh] overflow-y-auto">
            <div className="grid gap-2">
              <div
                className={`block py-2.5 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeLink === "Accueil"
                    ? "bg-[#ea532b]/10 text-[#ea532b] font-medium"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleLinkClick("Accueil", "/")}
              >
                Accueil
              </div>

              {/* Menus déroulants mobiles générés dynamiquement */}
              {Object.keys(menuData).map((menuKey) =>
                renderMobileMenuItems(menuKey)
              )}

              <div
                className={`block py-2.5 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeLink === "Devenez un Yieler"
                    ? "bg-[#ea532b]/10 text-[#ea532b] font-medium"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleLinkClick("Devenez un Yieler", "/devenez-yieler")}
              >
                Devenez un Yieler
              </div>
            </div>

            {/* Boutons d'action pour la version mobile */}
            <div className="mt-6 flex flex-col space-y-3 px-3">
              <button
                onClick={() => handleLinkClick("Se connecter", "/log-in")}
                className="py-2.5 text-center px-4 border border-[#2f365b]/20 text-[#2f365b] hover:bg-gray-50 rounded-full transition-all duration-300"
              >
                Se connecter
              </button>
              <button
                onClick={() => handleLinkClick("Démo", "/demo")}
                className="py-2.5 text-center px-4 bg-[#ea532b] hover:bg-[#d44620] text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Demander une démo
              </button>
            </div>
          </div>
        </div>

        {/* Recherche overlay avec animation */}
        <div
          className={`absolute inset-x-0 top-full bg-white shadow-lg p-4 z-50 transition-all duration-300 ${
            searchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="relative mx-auto max-w-3xl">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Rechercher..."
              className="w-full p-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent transition-all duration-300"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <button
              onClick={toggleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ea532b] transition-colors duration-300"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;