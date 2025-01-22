import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SocialIcons from "./SocialIcons";
import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility

const SampleHeader2 = () => {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({ styles: {}, images: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

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
  const { images } = data;
  const { header } = images;
  const menuItems = t("menuItems", { returnObjects: true }) || []; // Ensure it's an array

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

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);

    // Hide the desktop menu explicitly if needed
    if (menuOpen) {
      document.querySelector(".menu-bar").style.display = "none";
    }
  };
  const toggleSubmenu = (index) => {
    const submenu = document.querySelectorAll(".mobile-menu .menu-item .sub-menu")[index];
    if (submenu) {
      submenu.classList.toggle("open");
    }
  };
  const changeLanguage = () => {
    const newLang = lng === "en" ? "ar" : "en";
    const newPath = location.pathname.replace(`/${lng}`, `/${newLang}`);
    navigate(newPath);
  };

  if (loading) return;
  if (error) return;

  const renderSubMenu = (subMenu) => (
    <ul className="sub-menu">
      {subMenu.map((item, index) => (
        <li
          key={index}
          className={`menu-item ${item.subMenu ? "menu-item-has-children" : ""
            }`}
        >
          <a href={item.link}>{item.label}</a>
          {item.subMenu && renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      {/* Social Icons */}
      <SocialIcons />

      {/* Navigation Menu */}
      <nav
        className={`menu-bar ${isSticky ? "scrolling" : ""} ${isMenuVisible ? "visible" : "hidden"} ${isScrolling ? "scrolling-active" : ""}`}
      >
        <div className="header-navbar navbar elements-2" style={{ padding: "0", border: "0" }}>
          <div className="container-fluid" style={{ padding: "0" }}>
            <ul className="nav navbar-ul element-left right-element-exist align-items-center">
              <li className="header-titles-wrapper">
                <div className="header-titles">
                  <Link to={`/${lng}`}>
                    <img
                      className="img-fluid site-logo"
                      src={header.logo}
                      alt="Logo"
                    />
                  </Link>
                </div>
              </li>
              <li className="header-navigation-wrapper">
                <nav className="primary-menu-wrapper" aria-label="Horizontal">
                  <ul className="nav wp-menu primary-menu" style={{ fontSize: "16px" }}>
                    {menuItems.map((menu, index) => (
                      <li
                        key={index}
                        className={`menu-item menu-item-type-custom menu-item-object-custom ${menu.subMenu ? "menu-item-has-children" : ""
                          }`}
                      >
                        <a href={menu.link}>{menu.label}</a>
                        {menu.subMenu && renderSubMenu(menu.subMenu)}
                      </li>
                    ))}
                  </ul>
                </nav>
              </li>
            </ul>
            <ul className="nav navbar-ul pull-right justify-content-end right-element-exist align-items-center">
              <li>
                <a href="tel:+971564223807" className="h-phone">
                  <i className="bi bi-telephone-forward-fill mr-2" /> +971564223807
                </a>
              </li>
              <li className="secondary-toggle-wrapper">
                <img
                  src={currentLang === "en" ? header.arabIcon : header.engIcon}
                  className="language-icon"
                  alt={currentLang === "en" ? "Arabic" : "English"}
                  style={{ width: "30px", marginRight: "10px" }}
                onClick={changeLanguage}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* mobile */}
      <div className="mobile-align">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <div className="mobile-menu-logo">
          <Link to={`/${lng}`}>
            <img
              src={header.logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div>
          <img
            src={currentLang === "en" ? header.arabIcon : header.engIcon}
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
            <button className="close-menu" onClick={toggleMenu}>
              ✕
            </button>
          </div>
          <ul className="mobile-menu-list">
            {menuItems.map((menu, index) => (
              <li key={index} className="menu-item">
                {menu.subMenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="submenu-toggle"
                    >
                      {menu.label}
                    </button>
                    {renderSubMenu(menu.subMenu, index)}
                  </>
                ) : (
                  <Link to={menu.link}>{menu.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default SampleHeader2;
