import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility function
import React, { useState, useEffect } from "react";

export default function Footer() {
  const logoAlt = "Karisma Logo";
  const logoStyle = { width: 158 };

  const [jsonData, setJsonData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const data = await fetchAllJson();
                  setJsonData(data);
                  setLoading(false);
              } catch (err) {
                  setError(err.message);
                  setLoading(false);
              }
          };
  
          fetchData();
      }, []);
  
      if (loading) {
          return ;
      }
  
      if (error) {
          return ;
      }
      const { styles, images } = jsonData;
  const { footer } = styles; // Destructure the JSON as needed
  const { header } = images;
  const footerDescription =
    "Karisma's philosophy is that true beauty lies within everyone, and through their innovative, luxurious treatments, they help individuals embrace their natural allure and shine in their own way.";

  const departments = [
    { name: "Dental", link: "/" },
    { name: "Derma", link: "" },
    { name: "Laser Hair Removal", link: "/" },
    { name: "Skin Care", link: "/" },
    { name: "Gynecology", link: "/" },
    { name: "Slimming", link: "/" },
  ];

  const corporate = [
    { name: "About", link: "/" },
    { name: "Our Doctors", link: "/" },
    { name: "Careers", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  const service = [
    { name: "Privacy Policy", link: "/" },
    { name: "Cookie Policy", link: "/" },
    { name: "Terms and conditions", link: "/" },
  ];

  const socialLinks = [
    { platform: "Facebook", iconClass: "bi-facebook", link: "#" },
    { platform: "Twitter", iconClass: "bi-twitter-x", link: "#" },
    { platform: "Instagram", iconClass: "bi-instagram", link: "#" },
    { platform: "Pinterest", iconClass: "bi-pinterest", link: "#" },
  ];

  const footerContact = {
    title: "Schedule An Appointment Today",
    button: {
      text: "APPOINTMENT",
      iconClass: "fas fa-tooth",
      link: "/",
    },
    time: "09 : 00 AM - 08 : 00 PM",
    days: "Monday - Sunday",
  };

  const copyrightText =
    "© Copyright 2024";
  const companyLink = { name: "", link: "/" };

  return (
    <>
      <footer id="site-footer" className="site-footer" style={{ backgroundColor: footer['background-color'] }}>
        <div className="site-footer-wrap container-fluid p-0">
          
           
          <div
            className="footer-widgets-wrap"
            style={{  backgroundColor: footer['background-color'], paddingTop:'50px',paddingBottom:'30px', borderRadius:'0'}}
          >
            
            <div className="container">
              <div className="row">
                <aside className="footer-widget-2 col-md-12">
                  <div className="widget widget_block">
                    <div className="widget-content">
                      <div className="wp-block-columns cus-footer-middle is-layout-flex">
                        <div
                          className="wp-block-column"
                          style={{ flexBasis: "30%" }}
                        >
                          <figure className="wp-block-image size-full">
                            <img
                              loading="lazy"
                              decoding="async"
                              src={header['logo']}
                              alt={logoAlt}
                              className="wp-image-71634"
                              style={logoStyle}
                            />
                          </figure>
                          <p
                            className="custom-footer-txt"
                            style={{
                              color: footer['about-color'],
                              fontSize: footer['about-size'],
                            }}
                          >
                            {footerDescription}
                          </p>
                        </div>
                        <div
                          className="wp-block-column"
                          style={{ flexBasis: "20%" }}
                        >
                          <div className="widget widget_nav_menu">
                            <h2
                              className="widgettitle"
                              style={{
                                color: footer['heading-color'],
                                fontSize: footer['heading-size'],
                              }}
                            >
                              Department
                            </h2>
                            <ul className="menu">
                              {departments.map((dept, index) => (
                                <li key={index}>
                                  <a
                                    href={dept.link}
                                    style={{
                                      color: footer['desc-color'],
                                      fontSize: footer['desc-size'],
                                    }}
                                  >
                                    {dept.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div
                          className="wp-block-column"
                          style={{ flexBasis: "20%" }}
                        >
                          <div className="widget widget_nav_menu">
                            <h2
                              className="widgettitle"
                              style={{
                                color: footer['heading-color'],
                                fontSize: footer['heading-size'],
                              }}
                            >
                              Corporate
                            </h2>
                            <ul className="menu">
                              {corporate.map((link, index) => (
                                <li key={index}>
                                  <a
                                    href={link.link}
                                    style={{
                                      color: footer['desc-color'],
                                      fontSize: footer['desc-size'],
                                    }}
                                  >
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div
                          className="wp-block-column"
                          style={{ flexBasis: "20%" }}
                        >
                          <div className="widget widget_nav_menu">
                            <h2
                              className="widgettitle"
                              style={{
                                color: footer['heading-color'],
                                fontSize: footer['heading-size'],
                              }}
                            >
                              Service
                            </h2>
                            <ul className="menu">
                              {service.map((link, index) => (
                                <li key={index}>
                                  <a
                                    href={link.link}
                                    style={{
                                      color: footer['desc-color'],
                                      fontSize: footer['desc-size'],
                                    }}
                                  >
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div className="footer-bottom-wrap"
            style={{ backgroundColor: footer['background-color'], 
              // borderTop: `1px solid #916F4D` 
            }}
          >
            
            <div className="container">
              <div className="row">
                <div className="col-12" style={{justifyContent: 'center'}}>
                  <p className="footer-copyright"
                    style={{
                      color: footer['desc-color'],
                      fontSize: footer['desc-size'],
                    }}>
                    {copyrightText}
                    <a href={companyLink.link}
                      style={{
                        color: footer['desc-color'],
                        fontSize: footer['desc-size'],
                      }}
                    >
                      {companyLink.name}
                    </a>
                  </p>
                  <ul className="nav social-icons" style={{display: 'none'}}>
                    {socialLinks.map((social, index) => (
                      <li key={index}>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`social-${social.platform.toLowerCase()}`}
                          style={{ backgroundColor: "#405D53" }}
                        >
                          <i className={`bi ${social.iconClass}`} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
