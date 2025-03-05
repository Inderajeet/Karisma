import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SocialIcons from "./SocialIcons";
import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility

const MainMenu = () => {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({ styles: {}, images: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const [isMenuVisible, setIsMenuVisible] = useState(true); // Track menu visibility
  const [isScrolling, setIsScrolling] = useState(false); // Track scrolling state
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [logo, setLogo] = useState(null); 

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
  const { header } = images;
  const menuItems = t("menuItems", { returnObjects: true }) || []; // Ensure it's an array

  // styling arabic classes
  useEffect(() => {
    const handleLanguageChange = () => {
      const { language } = i18n;
      document.body.dir = i18n.dir();
      document.documentElement.classList.toggle('arabic', language === 'ar'); // Apply/remove 'arabic' class
    };
  
    handleLanguageChange(); // Initial check
    i18n.on('languageChanged', handleLanguageChange);
  
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);


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
          <Link to={`/${lng}${item.link}`}>{item.label}</Link>
          {item.subMenu && renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`header`}>
      {/* Social Icons */}
      <SocialIcons />

      <nav
        className={`menu-bar ${isSticky ? "scrolling" : ""} ${isMenuVisible ? "visible" : "hidden"} ${isScrolling ? "scrolling-active" : ""}`}
      >
        <div className="header-navbar navbar elements-2" style={{ padding: "0", border: "0" }}>
          <div className="container-fluid" style={{ padding: "0" }}>
            <ul className="nav navbar-ul element-left right-element-exist align-items-center">
              <li className="header-titles-wrapper">
                <div className="header-titles" style={{padding: "11px 0"}}>
                  <Link to={`/${lng}`}>
                    <img
                      className="img-fluid site-logo"
                      src={logo}
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
                        <Link to={`/${lng}${menu.link}`}>{menu.label}</Link>
                        {menu.subMenu && renderSubMenu(menu.subMenu)}
                      </li>
                    ))}
                  </ul>
                </nav>
              </li>
            </ul>
            <ul className="nav navbar-ul pull-right justify-content-end right-element-exist align-items-center">
              <li>
                <a href="tel:+971 6 506 8777" className="h-phone" style={{fontSize:'15px'}}>
                  <i className="bi bi-telephone-forward-fill mr-2" /> +971 6 506 8777
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
    </header>
  );
};

export default MainMenu;
