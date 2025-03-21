import React, { useState, useEffect } from "react";
import "./HeaderMobile.css";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SocialIcons from "./SocialIcons";
import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility

const MobileMenu = () => {
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
    const header = t("header", { returnObjects: true });
 useEffect(() => {
    const header = t("header", { returnObjects: true });
    setLogo(header.logo);
  }, [t]);

  useEffect(() => {
    const header = t("header", { returnObjects: true });
    if (isSticky) {
      setLogo(header.stickyLogo || header.logo);
    } else {
      setLogo(header.logo);
    }
  }, [isSticky, t]);

    const { images } = data;
    const menuItems = t("menuItems", { returnObjects: true }) || []; // Translation for menu items
    if (loading) return;
    if (error) return;
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const toggleSubmenu = (event, index) => {
        event.stopPropagation();
        setSubmenuStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleLinkClick = (item) => {
        setMenuOpen(false); // Close the mobile menu on navigation
        navigate(`/${lng}${item.link}`);
    };

    const renderSubMenu = (subMenu, parentIndex) => (
        <ul
            className={`mobile-sub-menu ${submenuStates[parentIndex] ? "open" : ""}`}
            style={{ display: submenuStates[parentIndex] ? "block" : "none" }}
        >
            {subMenu.map((item, index) => {
                const currentIndex = parentIndex ? `${parentIndex}-${index}` : `${index}`;
                return (
                    <li key={index} className="menu-item menu-font">
                        <span // Changed to span for consistent click handling
                            className="menu-item-content"
                            onClick={(event) => {
                                event.stopPropagation(); // Stop bubbling from the text
                                handleLinkClick(item);
                            }}
                        >
                            {item.label}
                        </span>
                        {item.subMenu && (
                            <span
                                className={`menu-icon ${lng === "ar" ? "right-menu" : null}`}
                                onClick={(event) => toggleSubmenu(event, currentIndex)}
                            >
                                {submenuStates[currentIndex] ? (
                                    <svg
                                        width="12"
                                        height="16"
                                        viewBox="0 0 12 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 4L6 12L12 4H0Z" fill="#577065" />
                                    </svg>
                                ) : lng === "ar" ? (
                                    <svg
                                        width="12"
                                        height="16"
                                        viewBox="0 0 12 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 0L0 8L8 16V0Z" fill="#577065" />
                                    </svg>
                                ) : (
                                    <svg
                                        width="12"
                                        height="16"
                                        viewBox="0 0 12 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 0L12 8L4 16V0Z" fill="#577065" />
                                    </svg>
                                )}
                            </span>
                        )}
                        {item.subMenu && renderSubMenu(item.subMenu, currentIndex)} {/* Recursive call with correct index */}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <header className={`mobile-header`}>
            <SocialIcons />
            {/* Mobile Header */}
            <div className={`mobile-align ${isSticky ? "scrolling" : ""} ${isMenuVisible ? "visible" : "hidden"} ${isScrolling ? "scrolling-active" : ""}`}>
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle mobile menu">
                    ☰
                </button>
                <div className="mobile-logo" style={{ padding: "11px 0" }}>
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
                                    src={header.stickyLogo}
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
                                <div className="menu-item-content">
                                    <span
                                        className="menu-item-text"
                                        onClick={(event) => {
                                            if (menu.link) {
                                                handleLinkClick(menu); // Navigate when clicking text
                                            }
                                        }}
                                    >
                                        {menu.label}
                                    </span>

                                    {menu.subMenu && (
                                        <span
                                            className={`menu-icon ${lng === "ar" ? "right-menu" : null
                                                }`}
                                            onClick={(event) => toggleSubmenu(event, index)}
                                        >
                                            {submenuStates[index] ? (
                                                <svg
                                                    width="12"
                                                    height="16"
                                                    viewBox="0 0 12 16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M0 4L6 12L12 4H0Z" fill="#577065" />
                                                </svg>
                                            ) : lng === "ar" ? (
                                                <svg
                                                    width="12"
                                                    height="16"
                                                    viewBox="0 0 12 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M8 0L0 8L8 16V0Z" fill="#577065" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="12"
                                                    height="16"
                                                    viewBox="0 0 12 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M4 0L12 8L4 16V0Z" fill="#577065" />
                                                </svg>
                                            )}
                                        </span>
                                    )}

                                    {/* {menu.subMenu && (
                                        <span className="menu-icon" onClick={(event) => toggleSubmenu(event, index)}>
                                            {submenuStates[index] ? "▼" : "▶"}
                                        </span>
                                    )} */}
                                </div>
                                {menu.subMenu && renderSubMenu(menu.subMenu, index)} {/* Start the recursive rendering */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default MobileMenu;
