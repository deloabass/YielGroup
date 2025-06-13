import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Briefcase,
  Users,
  Book,
  Clock,
  Compass,
  HelpCircle,
  Calculator,
  Newspaper,
  MessageCircle,
  Building,
  Handshake,
  ChevronRight,
  Menu as MenuIcon,
  Mic,
  ArrowRight,
  GraduationCap,
  Target,
  UserCheck,
  RefreshCcw,
  ClipboardList,
  CalendarDays,
  CalendarCheck,
  UserCog,
  FileText,
  BarChart2,
  Grid,
  Settings,
  DownloadCloud,
  Sparkles,
  Zap,
} from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);
  const [activeLink, setActiveLink] = useState("Accueil");
  const [isLoading, setIsLoading] = useState(false);
  console.log("Active Link", activeLink);
  

  // New state to manage the active section within the SIRH dropdown
  const [activeSirhSection, setActiveSirhSection] = useState(null);

  const searchInputRef = useRef(null);
  const headerRef = useRef(null);
  const dropdownRefs = useRef({});

  // Debounce timeout reference for closing the dropdown
  const debounceTimeoutRef = useRef(null);

  // Function to handle mouse entering any menu item or the dropdown itself
  const handleMouseEnterMenu = (menuKey) => {
    clearTimeout(debounceTimeoutRef.current); // Clear any pending close actions
    if (window.innerWidth >= 1024) { // Only for desktop
      setActiveMenu(menuKey);
      // Initialize activeSirhSection when the SIRH menu opens
      if (menuKey === "solutions" && !activeSirhSection) {
        setActiveSirhSection(menuData.solutions.items[0]?.id || null);
      }
    }
  };

  // Function to handle mouse leaving the entire menu area (header or open dropdown)
  const handleMouseLeaveMenu = () => {
    // Set a timeout to close the menu. If mouse re-enters before this, it's cleared.
    debounceTimeoutRef.current = setTimeout(() => {
      if (window.innerWidth >= 1024) { // Only for desktop
        setActiveMenu(null);
        setActiveSirhSection(null); // Reset SIRH section when main menu closes
      }
    }, 200); // Short delay (e.g., 200ms) to allow moving between elements
  };

  // Memoized menu data for performance
  const menuData = useMemo(() => ({
    NosOffres: {
      title: "Nos offres",
      layout: "grid",
      columns: 2,
      width: 850,
      position: "left",
      navigate: "/nos-offres",
      gradient: "from-blue-50 to-indigo-50",
      items: [
        {
          icon: <Handshake size={20} />,
          title: "Conseils en transformation RH",
          description: "Solutions pour digitaliser vos processus RH",
          path: "/conseil-en-transformation-RH",
          badge: "Populaire",
          color: "blue"
        },
        {
          icon: <Target size={20} />,
          title: "Pilotage du parcours collaborateur",
          description: "Optimisation de l'expérience employé",
          path: "/pilotage-du-parcours-collaborateur",
          color: "green"
        },
        {
          icon: <BarChart2 size={20} />,
          title: "HR Analytics & Tableaux de bord",
          description: "Analyse avancée des données RH",
          path: "/analytics-HR",
          badge: "Nouveau",
          color: "purple"
        },
        {
          icon: <UserCheck size={20} />,
          title: "Recrutement sur-mesure & intégration",
          description: "Solutions de recrutement personnalisées",
          path: "/recrutement-sur-mesure",
          color: "orange"
        },
        {
          icon: <Zap size={20} />,
          title: "Solutions digitales",
          description: "Services numériques pour vos RH",
          path: "/solutions-digitales-RH",
          color: "red"
        },
      ],
    },
    solutions: {
      title: "Plateforme SIRH MyYiel",
      layout: "custom-factorial-grid",
      columns: 3,
      width: 1200,
      position: "center",
      navigate: "/plateforme-sirh-myyiel",
      gradient: "from-orange-50 to-red-50",
      items: [
        {
          id: "suivi",
          title: "Suivi du temps",
          icon: <Clock size={20} />,
          color: "blue",
          options: [
            {
              icon: <CalendarDays size={20} />,
              title: "Gestion des absences",
              description: "Gérez les demandes de congés et absences de vos collaborateurs.",
              path: "/sirh/gestion-absences",
            },
            {
              icon: <Clock size={20} />,
              title: "Gestion du temps de travail",
              description: "Analysez les performances de vos collaborateurs et augmentez leur productivité.",
              path: "/sirh/gestion-temps-travail",
            },
            {
              icon: <CalendarCheck size={20} />,
              title: "Gestion des plannings",
              description: "Définissez les plannings horaires de vos collaborateurs.",
              path: "/sirh/gestion-plannings",
            },
          ],
          linkText: "En savoir plus sur la gestion des temps",
          linkPath: "/sirh/gestion-temps-global",
        },
        {
          id: "talent",
          title: "Gestion des talents",
          icon: <UserCog size={20} />,
          color: "green",
          options: [
            {
              icon: <UserCheck size={20} />,
              title: "Recrutement",
              description: "Gérez vos processus de recrutement et suivez les candidatures.",
              path: "/sirh/recrutement",
            },
            {
              icon: <ClipboardList size={20} />,
              title: "Entretiens & Évolution",
              description: "Accompagnez chaque collaborateur dans son parcours professionnel.",
              path: "/sirh/entretiens-evolution",
            },
            {
              icon: <GraduationCap size={20} />,
              title: "Formation & Compétences",
              description: "Déployez des plans de formation adaptés.",
              path: "/sirh/formation-competences",
            },
          ],
          linkText: "En savoir plus sur la gestion des talents",
          linkPath: "/sirh/gestion-talents-global",
        },
        {
          id: "paie",
          title: "Gestion de la paie",
          icon: <FileText size={20} />,
          color: "purple",
          options: [
            {
              icon: <FileText size={20} />,
              title: "Bulletins de salaire",
              description: "Générez et distribuez les fiches de paie automatiquement.",
              path: "/sirh/bulletins-salaire",
            },
          ],
          linkText: "En savoir plus sur la paie",
          linkPath: "/sirh/gestion-paie-global",
        },
        {
          id: "finances",
          title: "Finances",
          icon: <BarChart2 size={20} />,
          color: "indigo",
          options: [
            {
              icon: <BarChart2 size={20} />,
              title: "Rapports financiers",
              description: "Analysez vos dépenses RH avec des rapports détaillés.",
              path: "/sirh/rapports-financiers",
            },
          ],
          linkText: "En savoir plus sur les finances",
          linkPath: "/sirh/finances-global",
        },
      ],
      yTalentBlock: {
        title: "Y'Talent",
        items: [
          {
            icon: <UserCheck size={20} />,
            title: "Recrutement & Attractivité",
            description: "Attirez les meilleurs profils grâce à un processus de recrutement fluide et optimisé.",
            path: "/y-talent/recrutement-attractivite",
          },
          {
            icon: <RefreshCcw size={20} />,
            title: "Parcours d'Intégration & de Sortie",
            description: "Assurez un accueil structuré des nouveaux arrivants.",
            path: "/y-talent/integration-sortie",
          },
          {
            icon: <GraduationCap size={20} />,
            title: "Formation & Montée en Compétences",
            description: "Déployez des plans de formation adaptés.",
            path: "/y-talent/formation-competences",
          },
        ],
        link: {
          text: "Découvrir Y'Talent",
          path: "/y-talent",
        },
      },
    },
    nous: {
      title: "Yielers",
      layout: "grid",
      columns: 2,
      width: 600,
      position: "center",
      navigate: "/yielers",
      gradient: "from-green-50 to-emerald-50",
      items: [
        {
          icon: <Compass size={20} />,
          title: "Notre Histoire",
          description: "Le parcours de YIEL",
          path: "/notre-histoire",
          color: "green"
        },
        {
          icon: <Building size={20} />,
          title: "Nos valeurs",
          description: "Les principes qui nous guident",
          path: "/valeurs",
          color: "blue"
        },
        {
          icon: <Users size={20} />,
          title: "Teams YIELERS",
          description: "Notre équipe à votre service",
          path: "/equipe",
          color: "purple"
        },
        {
          icon: <MessageCircle size={20} />,
          title: "Nous contacter",
          description: "Notre engagement pour vous",
          path: "/contact",
          color: "orange"
        },
      ],
    },
    ressources: {
      title: "Ressources",
      layout: "grid",
      columns: 2,
      width: 700,
      position: "right",
      navigate: "/ressources",
      gradient: "from-purple-50 to-pink-50",
      items: [
        {
          icon: <Handshake size={20} />,
          title: "Nos partenaires",
          description: "Ils nous font confiance",
          path: "/partenaires",
          color: "blue"
        },
        {
          icon: <HelpCircle size={20} />,
          title: "Centre d'aide & FAQ",
          description: "Trouvez vos réponses",
          path: "/aide",
          color: "green"
        },
        {
          icon: <Calculator size={20} />,
          title: "Calculateur ROI",
          description: "Mesurez l'impact du logiciel",
          path: "/calculateur",
          badge: "Outil",
          color: "purple"
        },
        {
          icon: <Newspaper size={20} />,
          title: "Blog RH",
          description: "Explorez nos articles",
          path: "/blog-rh",
          color: "orange"
        },
        {
          icon: <Mic size={20} />,
          title: "Y'Voix - Notre Blog RH",
          description: "La voix RH d'aujourd'hui et de demain.",
          path: "/voix",
          badge: "Nouveau",
          color: "red"
        },
      ],
    },
  }), []);

  // Memoized navigation links
  const navLinks = useMemo(() => [
    { title: "Accueil", path: "/", dropdown: false },
    { title: "Nos offres", dropdown: true, menuKey: "NosOffres" },
    { title: "Plateforme SIRH MyYiel", dropdown: true, menuKey: "solutions" },
    { title: "Yielers", dropdown: true, menuKey: "nous" },
    { title: "Ressources", dropdown: true, menuKey: "ressources" },
  ], []);

  // Effect to handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to determine active navigation link based on current path
  useEffect(() => {
    const currentPath = location.pathname;

    const findMatchingNavLink = () => {
      const directMatch = navLinks.find((link) => link.path === currentPath);
      if (directMatch) {
        return directMatch.title;
      }

      for (const navLink of navLinks) {
        if (navLink.dropdown && menuData[navLink.menuKey]) {
          const menu = menuData[navLink.menuKey];

          if (menu.navigate === currentPath) {
            return navLink.title;
          }

          if (menu.items?.some((item) => item.path === currentPath)) {
            return navLink.title;
          }

          if (navLink.menuKey === "solutions") {
            const hasMatchingSirhOption = menu.items.some(topItem =>
              topItem.options?.some(option => option.path === currentPath)
            );
            if (hasMatchingSirhOption) {
              return navLink.title;
            }
          }

          if (menu.yTalentBlock?.items?.some((item) => item.path === currentPath)) {
            return navLink.title;
          }
          if (menu.yTalentBlock?.link?.path === currentPath) {
            return navLink.title;
          }
        }
      }

      if (currentPath === "/" || currentPath === "") {
        return "Accueil";
      }

      return null;
    };

    const matchedNavLink = findMatchingNavLink();
    if (matchedNavLink) {
      setActiveLink(matchedNavLink);
    } else {
      setActiveLink("Accueil"); // Default to Accueil if no match
    }
  }, [location.pathname, navLinks, menuData]);

  // Effect to close dropdowns/mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      let isClickInsideDropdown = false;
      for (const key in dropdownRefs.current) {
        if (dropdownRefs.current[key] && dropdownRefs.current[key].contains(event.target)) {
          isClickInsideDropdown = true;
          break;
        }
      }

      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        !isClickInsideDropdown
      ) {
        setActiveMenu(null);
        setActiveSirhSection(null); // Reset SIRH section when clicking outside
        if (window.innerWidth < 1024) {
          setIsOpen(false);
          setActiveMobileMenu(null);
          setActiveMobileSubMenu(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Effect to focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Handles navigation and loading state
  const handleLinkClick = (linkTitle, path) => {
    setIsLoading(true);
    setActiveLink(linkTitle);
    setActiveMenu(null); // Close desktop dropdown
    setActiveSirhSection(null); // Reset SIRH section
    setIsOpen(false); // Close mobile menu
    setActiveMobileMenu(null); // Close mobile main dropdown
    setActiveMobileSubMenu(null); // Close mobile sub-dropdown

    setTimeout(() => {
      setIsLoading(false);
      if (path) navigate(path);
    }, 500); // Simulate network delay
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Recherche: ${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Toggles mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) { // If opening, close any active dropdowns
      setActiveMenu(null);
      setActiveSirhSection(null);
      setActiveMobileMenu(null);
      setActiveMobileSubMenu(null);
    }
  };

  // Toggles search input visibility
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) setSearchQuery(""); // Clear search query when closing
  };

  // Helper to get color classes for icons/backgrounds
  const getColorClasses = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50 hover:bg-blue-100",
      green: "text-green-600 bg-green-50 hover:bg-green-100",
      purple: "text-purple-600 bg-purple-50 hover:bg-purple-100",
      orange: "text-orange-600 bg-orange-50 hover:bg-orange-100",
      red: "text-red-600 bg-red-50 hover:bg-red-100",
      indigo: "text-indigo-600 bg-indigo-50 hover:bg-indigo-100",
    };
    return colors[color] || colors.blue; // Default to blue
  };

  // Component for the "Plateforme SIRH MyYiel" desktop dropdown
  const PlatformSIRHMenuCard = ({ hoveredSection, setHoveredSection }) => { // Receive as props
    const menu = menuData.solutions;
    const [isAnimating, setIsAnimating] = useState(false); // For transition effect on content change

    // No longer need a local `hoveredSection` state, it's passed from parent
    // The `useEffect` to set default is now handled in `handleMouseEnterMenu`

    // Handles the hover state for the left sidebar sections
    const handleSectionHover = (sectionId) => {
      if (hoveredSection !== sectionId) {
        setIsAnimating(true); // Start animation
        setTimeout(() => {
          setHoveredSection(sectionId); // Update parent state
          setIsAnimating(false); // End animation
        }, 150); // Small delay to allow animation
      }
    };

    if (!menu) return null;

    const currentOptions = menu.items.find(item => item.id === hoveredSection);

    return (
      <div
        ref={(ref) => (dropdownRefs.current.solutions = ref)}
        className={`absolute ${
          activeMenu === "solutions"
            ? "opacity-100 visible translate-y-0 scale-100"
            : "opacity-0 invisible translate-y-[-10px] scale-95"
        } bg-white shadow-2xl rounded-2xl w-auto p-0 transition-all duration-500 ease-out left-1/2 -translate-x-1/2 z-50 mt-4 border border-gray-100`}
        style={{ width: `${menu.width}px` }}
        // IMPORTANT: Add mouse event handlers here for the entire dropdown
        onMouseEnter={() => clearTimeout(debounceTimeoutRef.current)} // Clear close timeout when mouse enters dropdown
        onMouseLeave={handleMouseLeaveMenu} // Apply debounce when mouse leaves the dropdown
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl overflow-hidden border border-gray-100">
              {/* Left Sidebar for SIRH modules */}
              <div className="w-full md:w-1/3 bg-white/80 backdrop-blur-sm p-6 space-y-2">
                <h3 className="font-bold text-lg text-[#2f365b] mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-[#ea532b]" />
                  Modules SIRH
                </h3>
                {menu.items.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleSectionHover(item.id)} // Hover event to update content
                    className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 group ${
                      hoveredSection === item.id
                        ? "bg-gradient-to-r from-[#ea532b] to-[#d44620] text-white shadow-lg transform scale-105" // Active state
                        : "hover:bg-white hover:shadow-md text-[#2f365b]" // Hover state for non-active
                    }`}
                  >
                    <div className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredSection === item.id ? "bg-white/20" : "bg-gray-100"
                    }`}>
                      {React.cloneElement(item.icon, {
                        className: hoveredSection === item.id ? "text-white" : "text-gray-600 group-hover:text-[#ea532b]",
                      })}
                    </div>
                    <span className="font-medium text-sm text-nowrap">{item.title}</span>
                  </div>
                ))}
              </div>

              {/* Right Content displaying options for hovered SIRH module */}
              <div className="w-full md:w-2/3 p-6 bg-white">
                <div className={`transition-all duration-300 ${isAnimating ? 'opacity-50 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
                  <h3 className="font-bold text-xl text-[#2f365b] mb-6 flex items-center gap-2">
                    {currentOptions?.title || "Sélectionnez une option"}
                    <ArrowRight size={16} className="text-[#ea532b]" />
                  </h3>

                  {currentOptions?.options.length > 0 ? (
                    <div className="space-y-4">
                      {currentOptions.options.map((opt, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 rounded-xl cursor-pointer transition-all duration-300 group border border-transparent hover:border-gray-200"
                          onClick={() => handleLinkClick(opt.title, opt.path)}
                        >
                          <div className="p-2 rounded-full bg-gradient-to-br from-[#ea532b]/10 to-[#ea532b]/20 group-hover:from-[#ea532b] group-hover:to-[#d44620] transition-all duration-300">
                            {React.cloneElement(opt.icon, {
                              className: "text-[#ea532b] group-hover:text-white transition-colors duration-300",
                            })}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-[#2f365b] group-hover:text-[#ea532b] transition-colors duration-300 mb-1 text-nowrap">
                              {opt.title}
                            </h4>
                            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                              {opt.description}
                            </p>
                          </div>
                          <ChevronRight size={16} className="text-gray-400 group-hover:text-[#ea532b] transition-all duration-300 transform group-hover:translate-x-1" />
                        </div>
                      ))}

                      {currentOptions.linkText && (
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => handleLinkClick(currentOptions.linkText, currentOptions.linkPath)}
                            className="text-[#ea532b] font-medium hover:text-[#d44620] flex items-center gap-2 transition-all duration-300 group"
                          >
                            {currentOptions.linkText}
                            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">Découvrez plus de détails sur cette section.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Y'Talent Block - part of the SIRH menu */}
            {menu.yTalentBlock && (
              <div className="md:col-span-1 bg-gradient-to-br from-[#ea532b]/5 via-orange-50 to-red-50 p-6 rounded-xl border border-[#ea532b]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ea532b]/10 to-transparent rounded-bl-full"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-gradient-to-br from-[#ea532b] to-[#d44620] rounded-full">
                      <Sparkles size={18} className="text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-[#2f365b] text-nowrap">{menu.yTalentBlock.title}</h4>
                  </div>

                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    Explorez nos modules de gestion des talents pour accompagner vos collaborateurs.
                  </p>

                  <div className="space-y-4 mb-6">
                    {menu.yTalentBlock.items.map((subItem, subIdx) => (
                      <div
                        key={subIdx}
                        className="flex items-start gap-3 cursor-pointer group p-3 hover:bg-white/60 rounded-lg transition-all duration-300"
                        onClick={() => handleLinkClick(subItem.title, subItem.path)}
                      >
                        <div className="p-1.5 bg-[#ea532b]/10 group-hover:bg-[#ea532b] rounded-full transition-all duration-300">
                          {React.cloneElement(subItem.icon, {
                            size: 16,
                            className: "text-[#ea532b] group-hover:text-white transition-colors duration-300",
                          })}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-[#2f365b] group-hover:text-[#ea532b] transition-colors duration-300 text-sm text-nowrap">
                            {subItem.title}
                          </p>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            {subItem.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {menu.yTalentBlock.link && (
                    <button
                      onClick={() => handleLinkClick(menu.yTalentBlock.link.text, menu.yTalentBlock.link.path)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#ea532b] to-[#d44620] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {menu.yTalentBlock.link.text}
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Renders desktop dropdowns for other menus (NosOffres, Yielers, Ressources)
  const renderDesktopDropdown = (menuKey) => {
    const menu = menuData[menuKey];
    if (!menu) return null;

    let positionClass = "left-1/2 -translate-x-1/2";
    if (menu.position === "right") positionClass = "right-0";
    else if (menu.position === "left") positionClass = "left-0";

    // Pass activeSirhSection and its setter to PlatformSIRHMenuCard
    if (menuKey === "solutions") {
      return <PlatformSIRHMenuCard hoveredSection={activeSirhSection} setHoveredSection={setActiveSirhSection} />;
    }

    return (
      <div
        ref={(ref) => (dropdownRefs.current[menuKey] = ref)}
        className={`absolute ${
          activeMenu === menuKey
            ? "opacity-100 visible translate-y-0 scale-100"
            : "opacity-0 invisible translate-y-[-10px] scale-95"
        } bg-white shadow-2xl rounded-2xl w-auto p-0 transition-all duration-500 ease-out ${positionClass} z-50 mt-4 border border-gray-100`}
        style={{ width: `${menu.width}px` }}
        // IMPORTANT: Add mouse event handlers here for the entire dropdown
        onMouseEnter={() => clearTimeout(debounceTimeoutRef.current)} // Clear close timeout when mouse enters dropdown
        onMouseLeave={handleMouseLeaveMenu} // Apply debounce when mouse leaves the dropdown
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>

        <div className="p-6">
          <div className="mb-4">
            <h3 className="font-bold text-lg text-[#2f365b] flex items-center gap-2">
              <Sparkles size={18} className="text-[#ea532b]" />
              {menu.title}
            </h3>
          </div>

          <div className={`grid grid-cols-${menu.columns} gap-4`}>
            {menu.items.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => handleLinkClick(item.title, item.path)}
              >
                <div className="flex items-start space-x-4 p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/30 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200 hover:shadow-md">
                  <div className={`p-3 rounded-xl ${getColorClasses(item.color)} transition-all duration-300 group-hover:scale-110`}>
                    {React.cloneElement(item.icon, {
                      className: `${item.color ? `text-${item.color}-600` : 'text-gray-600'} transition-all duration-300`,
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-[#2f365b] group-hover:text-[#ea532b] transition-colors duration-300 text-nowrap">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.badge === 'Nouveau' ? 'bg-green-100 text-green-700' :
                          item.badge === 'Populaire' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 group-hover:text-[#ea532b] transition-all duration-300 transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Determines if a mobile navigation link is active
  const isMobileNavLinkActive = (link, currentPath) => {
    if (link.path && link.path === currentPath) {
      return true;
    }
    if (link.dropdown && menuData[link.menuKey]?.navigate === currentPath) {
      return true;
    }
    if (link.dropdown && menuData[link.menuKey]?.items?.some(item => item.path === currentPath)) {
        return true;
    }
    // Special check for SIRH menu's nested paths
    if (link.menuKey === "solutions" && menuData.solutions) {
        const sirhMenu = menuData.solutions;
        if (sirhMenu.items?.some(section => section.path === currentPath)) {
            return true;
        }
        if (sirhMenu.items?.some(section => section.options?.some(option => option.path === currentPath))) {
            return true;
        }
        if (sirhMenu.yTalentBlock?.items?.some(item => item.path === currentPath)) {
            return true;
        }
        if (sirhMenu.yTalentBlock?.link?.path === currentPath) {
            return true;
        }
    }
    return false;
  };

  // Determines if a desktop navigation link is active (uses the same logic as mobile for consistency)
  const isNavLinkActive = (link) => {
    return isMobileNavLinkActive(link, location.pathname);
  };

  // Renders items for the mobile dropdown menus
  const renderMobileMenuItems = (menuKey) => {
    const menu = menuData[menuKey];
    if (!menu) return null;

    if (menuKey === "solutions") {
      return (
        <div key={menuKey} className="pl-4 space-y-1">
          {menu.items.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setActiveMobileSubMenu(activeMobileSubMenu === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left font-medium rounded-xl transition-all duration-300 ${
                  activeMobileSubMenu === item.id
                    ? "text-[#ea532b] bg-gradient-to-r from-[#ea532b]/10 to-[#ea532b]/5"
                    : "text-[#2f365b] hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getColorClasses(item.color)}`}>
                    {React.cloneElement(item.icon, {
                      className: item.color ? `text-${item.color}-600` : 'text-gray-600',
                    })}
                  </div>
                  <span className="text-nowrap">{item.title}</span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    activeMobileSubMenu === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  activeMobileSubMenu === item.id
                    ? "max-h-screen opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-8 space-y-1">
                  {item.options?.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => handleLinkClick(opt.title, opt.path)}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-xl transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-[#ea532b]/10">
                        {React.cloneElement(opt.icon, { size: 16, className: "text-[#ea532b]" })}
                      </div>
                      <div>
                        <span className="font-normal text-[#2f365b] text-sm text-nowrap">{opt.title}</span>
                        <p className="text-xs text-gray-600">{opt.description}</p>
                      </div>
                    </button>
                  ))}
                  {item.linkText && (
                    <button
                      onClick={() => handleLinkClick(item.linkText, item.linkPath)}
                      className="w-full flex items-center space-x-2 px-4 py-3 text-left text-[#ea532b] hover:underline rounded-xl transition-all duration-300"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* Y'Talent block for SIRH on mobile */}
          <div className="pl-4 pt-4 mt-2 border-t border-gray-200">
            <h4 className="font-bold text-lg text-[#2f365b] mb-3 flex items-center gap-2">
              <Sparkles size={18} className="text-[#ea532b]" />
              {menu.yTalentBlock.title}
            </h4>
            <div className="space-y-1">
              {menu.yTalentBlock.items.map((subItem, subIdx) => (
                <button
                  key={`y-talent-mobile-${subIdx}`}
                  onClick={() => handleLinkClick(subItem.title, subItem.path)}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-xl transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-[#ea532b]/10">
                    {React.cloneElement(subItem.icon, { size: 16, className: "text-[#ea532b]" })}
                  </div>
                  <div>
                    <span className="font-medium text-[#2f365b] text-nowrap">{subItem.title}</span>
                    <p className="text-sm text-gray-600">{subItem.description}</p>
                  </div>
                </button>
              ))}
              {menu.yTalentBlock.link && (
                <button
                  onClick={() => handleLinkClick(menu.yTalentBlock.link.text, menu.yTalentBlock.link.path)}
                  className="w-full flex items-center space-x-2 px-4 py-3 text-left text-[#ea532b] hover:underline rounded-xl transition-all duration-300"
                >
                  <span>{menu.yTalentBlock.link.text}</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    // For other menus (NosOffres, Yielers, Ressources) in mobile
    return (
      <div key={menuKey} className="pl-4 space-y-1">
        {menu.items?.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleLinkClick(item.title, item.path)}
            className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-xl transition-all duration-300"
          >
            <div className={`p-2 rounded-lg ${getColorClasses(item.color)}`}>
              {React.cloneElement(item.icon, { size: 16 })}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#2f365b] text-nowrap">
                  {item.title}
                </span>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.badge === 'Nouveau' ? 'bg-green-100 text-green-700' :
                    item.badge === 'Populaire' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="w-5 h-5 border-2 border-[#ea532b] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-[#2f365b] font-medium">Chargement...</span>
          </div>
        </div>
      )}

      <header
        ref={headerRef}
        className={`fixed w-full z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b-0"
            : "bg-transparent"
        } ${isOpen ? "bg-white shadow-lg" : ""}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
      className="flex-shrink-0 flex items-center cursor-pointer"
      onClick={() => handleLinkClick("Accueil", "/")}
    >
      {/* Logo dans un fond dégradé */}
      <div className="w-10 h-10 bg-gradient-to-br from-[#ea532b] to-[#d44620] rounded-xl flex items-center justify-center shadow-lg">
        <img
          src="../logo.webp"
          alt="YIEL Logo"
          className="w-full h-full object-contain rounded-xl "
        />
      </div>

      {/* Texte à droite du logo */}
      <div className="ml-3">
        <span className={`font-bold text-xl whitespace-nowrap block ${scrolled ? "text-[#2f365b]" : "text-amber-50" }`}>
          YIEL
        </span>
        <div className="text-sm text-[#ea532b] font-semibold">
          Système d'Information RH
        </div>
      </div>
    </div>
            

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.title}
                  className="relative"
                  // Handle mouse enter on the nav link itself
                  onMouseEnter={() =>
                    link.dropdown && handleMouseEnterMenu(link.menuKey)
                  }
                  // Handle mouse leave on the nav link, applying the debounce
                  onMouseLeave={link.dropdown ? handleMouseLeaveMenu : null}
                >
                  <button
                    onClick={() => !link.dropdown && handleLinkClick(link.title, link.path)}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 text-nowrap ${
                      isNavLinkActive(link)
                        ? "text-[#ea532b] bg-gradient-to-r from-[#ea532b]/10 to-[#ea532b]/5"
                        : scrolled || isOpen
                        ? "text-[#2f365b] hover:text-[#ea532b] hover:bg-gray-50"
                        : "text-white hover:text-[#ea532b] hover:bg-white/10"
                    }`}
                  >
                    {link.title}
                    {link.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-300 ${
                          activeMenu === link.menuKey ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {/* The dropdown itself also needs onMouseEnter/onMouseLeave */}
                  {link.dropdown && renderDesktopDropdown(link.menuKey)}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher..."
                      className="w-64 px-4 py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent transition-all duration-300"
                    />
                    <Search size={18} className="absolute left-3 text-gray-400" />
                    <button
                      type="button"
                      onClick={toggleSearch}
                      className="ml-2 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    >
                      <X size={18} />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={toggleSearch}
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      scrolled || isOpen
                        ? "text-[#2f365b] hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Search size={20} />
                  </button>
                )}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleLinkClick("Démo", "/demo")}
                className="bg-gradient-to-r from-[#ea532b] to-[#d44620] text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-nowrap"
              >
                Demander une démo
              </button>
            </div>

            {/* Mobile menu and search toggles */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleSearch}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  scrolled || isOpen
                    ? "text-[#2f365b] hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  scrolled || isOpen
                    ? "text-[#2f365b] hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {searchOpen && (
            <div className="lg:hidden pb-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full px-4 py-3 pl-10 pr-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea532b] focus:border-transparent"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </form>
            </div>
          )}

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-out ${
              isOpen
                ? "max-h-screen opacity-100 pb-6"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.title}>
                  <button
                    onClick={() => {
                      if (link.dropdown) {
                        setActiveMobileMenu(
                          activeMobileMenu === link.menuKey ? null : link.menuKey
                        );
                      } else {
                        handleLinkClick(link.title, link.path);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left font-medium rounded-xl transition-all duration-300 ${
                      isMobileNavLinkActive(link, location.pathname)
                        ? "text-[#ea532b] bg-gradient-to-r from-[#ea532b]/10 to-[#ea532b]/5"
                        : "text-[#2f365b] hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-nowrap">{link.title}</span>
                    {link.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeMobileMenu === link.menuKey ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown Content */}
                  {link.dropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        activeMobileMenu === link.menuKey
                          ? "max-h-screen opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {renderMobileMenuItems(link.menuKey)}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleLinkClick("Démo", "/demo")}
                  className="w-full bg-gradient-to-r from-[#ea532b] to-[#d44620] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-nowrap"
                >
                  Demander une démo
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;