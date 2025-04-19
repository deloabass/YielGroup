import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeLink, setActiveLink] = useState("Accueil");

  const searchInputRef = useRef(null);
  const headerRef = useRef(null);

  // Menu data structure
  const menuData = {
    solutions: {
      title: "Nos solutions",
      layout: "grid",
      columns: 2,
      width: 500,
      position: "center",
      navigate: ("/nos-solution"),
      items: [
        {
          icon: <Briefcase className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Y'Core",
          description: "Gestion de profil salarié",
          path: "/core"
        },
        {
          icon: <Users className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Y'Expertise",
          description: "Notes de frais",
          path: "/expertise"
        },
        {
          icon: <Users className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Y'Talents",
          description: "Gestion des talents",
          path: "/talents"
        },
        {
          icon: <Book className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Y'Learn",
          description: "Formation",
          path: "/learn"
        },
        {
          icon: <PenTool className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Y'Sign",
          description: "Signature électronique",
          path: "/sign"
        },
        {
          icon: <UserPlus className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Y'Recrute",
          description: "Optimisation du recrutement",
          path: "/recrute"
        },
        {
          icon: <Clock className="text-[#ea532b] mt-0.5" size={20} />,
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
          icon: <Compass className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Notre Histoire",
          description: "Le parcours de YIEL",
          path: "/Notre-Histoire"
        },
        {
          icon: <Building className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Nos valeurs",
          description: "Les principes qui nous guident",
          path: "/valeurs"
        },
        {
          icon: <Users className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Teams YIELERS",
          description: "Notre équipe à votre service",
          path: "/equipe"
        },
        {
          icon: <MessageCircle className="text-[#ea532b] mt-0.5" size={20} />,
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
          icon: <Handshake className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Nos partenaires",
          description: "Le parcours de YIEL",
          path: "/partenaires"
        },
        {
          icon: <Briefcase className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Nos métiers",
          description: "Découvrez notre expertise",
          path: "/metiers"
        },
        {
          icon: <HelpCircle className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Centre d'aide & FAQ",
          description: "Trouvez vos réponses",
          path: "/aide"
        },
        {
          icon: <Calculator className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Calculateur ROI",
          description: "Mesurez l'impact du logiciel",
          path: "/calculateur"
        },
        {
          icon: <Users className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Nos clients",
          description: "Les principes nous guident",
          path: "/clients"
        },
        {
          icon: <Newspaper className="text-[#ea532b] mt-0.5" size={20} />,
          title: "Blog RH",
          description: "Explorez nos articles",
          path: "/blog-rh"
        }

      ]
    },
  };

  // Navigation links
  const navLinks = [
    { title: "Accueil", path: "/", dropdown: false },
    { title: "Nos solutions", dropdown: true, menuKey: "solutions" },
    { title: "Nous", dropdown: true, menuKey: "nous" },
    { title: "Ressources", dropdown: true, menuKey: "ressources" },
    { title: "Devenez un Yieler", path: "/devenez-yieler", dropdown: false }
  ];

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleDropdown = (menu) => setActiveMenu(activeMenu === menu ? null : menu);
  const toggleMobileDropdown = (menu) => setActiveMobileMenu(activeMobileMenu === menu ? null : menu);

  const handleLinkClick = (link, path) => {
    setActiveLink(link);
    setActiveMenu(null);
    setIsOpen(false);
    navigate(path);
  };

  // Render dropdown menu for desktop
  const renderDesktopDropdown = (menuKey) => {
    const menu = menuData[menuKey];
    if (!menu) return null;

    let positionClass = "left-1/2 -translate-x-1/2"; // default center
    if (menu.position === "right") positionClass = "right-0";
    else if (menu.position === "left") positionClass = "left-0";

    return (
      <div
        className={`absolute ${
          activeMenu === menuKey ? "block" : "hidden"
        } bg-white shadow-xl rounded-lg p-4 w-fit ${positionClass} z-50 mt-5`}
        style={{ width: `${menu.width}px` }}
      >
        <div className={`grid grid-cols-${menu.columns} gap-3`}>
          {menu.items.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md group cursor-pointer transition-colors" onClick={() => handleLinkClick(item.title, item.path)}>
              {item.icon}
              <div>
                <div className="font-medium text-[#2f365b] group-hover:text-[#ea532b]">
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
          className={`flex items-center justify-between w-full text-left ${
            activeMobileMenu === menuKey ? "text-[#ea532b]" : ""
          }`}
          onClick={() => toggleMobileDropdown(menuKey)}
        >
          <span>{menu.title}</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              activeMobileMenu === menuKey ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`${
            activeMobileMenu === menuKey ? "block" : "hidden"
          } mt-2 ml-2 border-l-2 border-[#ea532b] pl-3`}
        >
          {menu.items.map((item, idx) => (
            <div
              key={idx}
              className={`py-2 flex items-center space-x-2 cursor-pointer ${
                activeLink === item.title
                  ? "text-[#ea532b]"
                  : "hover:text-[#ea532b]"
              }`}
              onClick={() => handleLinkClick(item.title, item.path)}
            >
              {item.icon}
              <span>{item.title}</span>
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
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo et nom de l'entreprise */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleLinkClick("Accueil", "/")}
          >
            <img
              src="/logo.webp"
              alt="Logo de l'entreprise"
              className="w-10 h-10 mr-2"
            />
            <div>
              <span className="hidden md:block text-[#2f365b] font-bold text-xl">
                YIEL
              </span>
              <span className="hidden md:block text-[#ea532b] text-xs">
                Système d'Information RH
              </span>
            </div>
          </div>

          {/* Navigation - version desktop */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                <button
                  className={`flex items-center px-3 py-2 rounded-md transition-colors cursor-pointer ${
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
                      className={`ml-1 transition-transform ${
                        activeMenu === link.menuKey ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {link.dropdown && renderDesktopDropdown(link.menuKey)}
              </div>
            ))}
          </nav>

          {/* Actions (visible sur desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 text-[#2f365b]"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => handleLinkClick("Se connecter", "/log-in")}
              className="px-4 py-2 text-[#2f365b] hover:text-[#ea532b] font-medium transition-colors"
            >
              Se connecter
            </button>
            <button
              onClick={() => handleLinkClick("Démo", "/demo")}
              className="px-5 py-2 bg-[#ea532b] hover:bg-[#d44620] text-white font-medium rounded-full transition-colors cursor-pointer"
            >
              Demander une démo
            </button>
          </div>

          {/* Menu mobile burger et icones */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 text-[#2f365b]"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 text-[#2f365b]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile déplié */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-gray-200 pt-3 max-h-[70vh] overflow-y-auto">
            <div className="grid gap-2">
              <div
                className={`block py-2 px-3 rounded-md cursor-pointer ${
                  activeLink === "Accueil"
                    ? "bg-gray-50 text-[#ea532b]"
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
                className={`block py-2 px-3 rounded-md cursor-pointer ${
                  activeLink === "Devenez un Yieler"
                    ? "bg-gray-50 text-[#ea532b]"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleLinkClick("Devenez un Yieler", "/devenez-yieler")}
              >
                Devenez un Yieler
              </div>
            </div>

            {/* Boutons d'action pour la version mobile */}
            <div className="mt-4 flex flex-col space-y-3 px-3">
              <button
                onClick={() => handleLinkClick("Se connecter", "/log-in")}
                className="py-2 text-center px-4 border border-[#2f365b] text-[#2f365b] hover:bg-gray-50 rounded-full transition-colors"
              >
                Se connecter
              </button>
              <button
                onClick={() => handleLinkClick("Démo", "/demo")}
                className="py-2 text-center px-4 bg-[#ea532b] hover:bg-[#d44620] text-white rounded-full transition-colors cursor-pointer"
              >
                Demander une démo
              </button>
            </div>
          </div>
        )}
        
        {/* Recherche overlay */}
        {searchOpen && (
          <div className="absolute inset-x-0 top-full bg-white shadow-lg p-4 z-50">
            <div className="relative mx-auto max-w-3xl">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Rechercher..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <button 
                onClick={toggleSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ea532b]"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;