import React, { useState, useEffect } from "react";
import "./HeaderMobile.css";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SocialIcons from "./SocialIcons";
import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility

const MobileHeader = () => {
    const { t, i18n } = useTranslation();
    const { lng } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState({ styles: {}, images: {} });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentLang, setCurrentLang] = useState(i18n.language || "en");
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuStates, setSubmenuStates] = useState({}); // Tracks submenu open/close states
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

      const [logo, setLogo] = useState(null); 
    

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n.language]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllJson();
                setData(data); // Dynamically load header data
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    // scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            if (window.scrollY > lastScrollY) {
                setIsMenuVisible(false);
            } else {
                setIsMenuVisible(true);
            }
            setLastScrollY(window.scrollY);
            setIsSticky(window.scrollY > 50);

            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                setIsMenuVisible(true);
                setIsScrolling(false);
            }, 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const changeLanguage = () => {
        const newLang = lng === "en" ? "ar" : "en";
        const newPath = location.pathname.replace(`/${lng}`, `/${newLang}`);
        navigate(newPath);
    };
    useEffect(() => {
          if (!data || !data.images || !data.images.header) return; // Check if data is loaded
      
          const { header } = data.images;
          // Set initial logo
          setLogo(header.logo);
      
        }, [data]);
        useEffect(() => {
          if (!data || !data.images || !data.images.header) return; // Check if data is loaded
      
          const { header } = data.images;
      
          if(isSticky){
            setLogo(header.stickyLogo || header.logo); // Use stickyLogo if available, fallback to regular logo
          }else{
            setLogo(header.logo)
          }
      
        }, [isSticky, data]);
        
    const { images } = data;
    const menuItems = t("menuItems", { returnObjects: true }) || []; // Translation for menu items
    if (loading) return;
    if (error) return;
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const toggleSubmenu = (index) => {
        setSubmenuStates((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the specific submenu state
        }));
    };

    const renderSubMenu = (subMenu, parentIndex) => (
        <ul
            className={`mobile-sub-menu ${submenuStates[parentIndex] ? "open" : ""}`}
            style={{ display: submenuStates[parentIndex] ? "block" : "none" }}
        >
            {subMenu.map((item, index) => (
                <li key={index} className="menu-item menu-font">
                    {item.subMenu ? (
                        <>
                            <Link
                                to={item.link}
                                className={`menu-item-has-children menu-font`}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default link navigation if it has submenus
                                    toggleSubmenu(`${parentIndex}-${index}`);
                                }}
                            >
                                {item.label}
                                <span className="menu-icon">
                                    {submenuStates[`${parentIndex}-${index}`] ? "▼" : "▶"}
                                </span>
                            </Link>
                            {renderSubMenu(item.subMenu, `${parentIndex}-${index}`)}
                        </>
                    ) : (
                        <Link className="menu-font" to={item.link}>{item.label}</Link>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <header className={`mobile-header`}>
            <SocialIcons />
            {/* Mobile Header */}
            <div className={`mobile-align ${isSticky ? "scrolling" : ""} ${isMenuVisible ? "visible" : "hidden"} ${isScrolling ? "scrolling-active" : ""}`}>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <div className="mobile-logo"style={{padding: "11px 0"}}>
                    <Link to={`/${lng}`}>
                        <img
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div>
                    <img
                        src={currentLang === "en" ? images.header.arabIcon : images.header.engIcon}
                        className="language-icon"
                        alt={currentLang === "en" ? "Arabic" : "English"}
                        style={{ width: "30px", marginRight: "10px" }}
                        onClick={changeLanguage}
                    />
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu open">
                    <div className="mobile-menu-header">
                        <div className="mobile-menu-logo">
                            <Link to={`/${lng}`}>
                                <img
                                    src={images.header.stickyLogo}
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <button className="close-menu" onClick={toggleMenu}>
                            ✕
                        </button>
                    </div>
                    <ul className="mobile-menu-list">
                        {menuItems.map((menu, index) => (
                            <li key={index} className={`menu-item menu-font ${menu.subMenu ? "menu-item-has-children" : ""}`}>
                                <Link
                                    to={menu.link}
                                    className={`menu-item-has-children menu-font`}
                                    onClick={(e) => {
                                        if (menu.subMenu) {
                                            e.preventDefault(); // Prevent default link navigation if it has submenus
                                            toggleSubmenu(index);
                                        } else {
                                            navigate(menu.link); // Navigate to the department page if no submenu
                                        }
                                    }}
                                >
                                    {menu.label}
                                    {menu.subMenu && (
                                        <span className="menu-icon">
                                            {submenuStates[index] ? "▼" : "▶"}
                                        </span>
                                    )}
                                </Link>
                                {menu.subMenu && renderSubMenu(menu.subMenu, index)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default MobileHeader;
