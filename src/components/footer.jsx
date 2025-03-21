import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility function
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import i18n from "../i18n";

export default function Footer() {
  const { t, i18n } = useTranslation('footer');
  const footers = t('footer:footer', { returnObjects: true }); // Fetch the array of doctors
  // const logoSrc = t('header.stickyLogo');

  const logoAlt = "Karisma Logo";
  const logoStyle = { width: 115 };

  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { lng } = useParams();


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
    return;
  }

  if (error) {
    return;
  }
  const { styles, images } = jsonData;
  const { footer } = styles; // Destructure the JSON as needed
  const { header } = images;

  const socialLinks = [
    { platform: "Facebook", iconClass: "bi-facebook", link: "#" },
    { platform: "Twitter", iconClass: "bi-twitter-x", link: "#" },
    { platform: "Instagram", iconClass: "bi-instagram", link: "#" },
    { platform: "Pinterest", iconClass: "bi-pinterest", link: "#" },
  ];

  const companyLink = { name: "", link: "/" };

  return (
    <>
      <footer id="site-footer" className="site-footer" style={{ backgroundColor: footer['background-color'] }}>
        <div className="site-footer-wrap container-fluid p-0">


          <div
            className="footer-widgets-wrap"
            style={{ backgroundColor: footer['background-color'], paddingTop: '50px', paddingBottom: '30px', borderRadius: '0' }}
          >

            <div className="container">
              <div className="row">
                <aside className="footer-widget-2 col-md-12">
                  <div className="widget widget_block">
                    <div className="widget-content">
                      <div className="wp-block-columns cus-footer-middle is-layout-flex">
                        <div
                          className="wp-block-column footer-desc">
                          <figure className="wp-block-image size-full">
                            <Link to={`/${lng}`} style={{ display: 'inline-block' }}>
                              <img
                                loading="lazy"
                                decoding="async"
                                // src={header['stickyLogo'] || header['logo'] || '/assets/Images/logo_main_3.png'}
                                src={footers.logo}
                                alt={logoAlt}
                                className="wp-image-71634"
                                style={logoStyle}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  // e.target.src = '/assets/Images/logo_main_3.png';
                                }}
                              />
                            </Link>
                          </figure>
                          <p
                            className="custom-footer-txt"
                            style={{
                              color: footer['about-color'],
                              fontSize: footer['about-size'],
                            }}
                          >
                            {footers.description}
                          </p>
                          <ul style={{ display: "flex", flexWrap: 'wrap' }}>
                            <li>
                              <a
                                href="https://www.facebook.com/profile.php?id=61568136563889&sk=photos"
                                target="_blank"
                                className="links"
                              >
                                <div className="footer-icons">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13.247"
                                    height="23.339"
                                    viewBox="0 0 13.247 23.339"
                                  >
                                    <path
                                      id="facebook"
                                      d="M9.929,5.777c.032-.036.181-.153.766-.153h1.919A1.133,1.133,0,0,0,13.746,4.49V1.136A1.134,1.134,0,0,0,12.616,0L9.766,0A5.866,5.866,0,0,0,5.441,1.678,6.159,6.159,0,0,0,3.812,6.091V7.9H1.632A1.133,1.133,0,0,0,.5,9.032v3.612a1.133,1.133,0,0,0,1.132,1.132H3.812v8.43a1.133,1.133,0,0,0,1.132,1.132H8.682a1.133,1.133,0,0,0,1.132-1.132v-8.43H12.48a1.133,1.133,0,0,0,1.132-1.132V9.032a1.136,1.136,0,0,0-.582-.99,1.15,1.15,0,0,0-.56-.142H9.814V6.471c0-.466.063-.634.115-.694Zm0,0"
                                      transform="translate(-0.5 0)"
                                    />
                                  </svg>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/karismamc_shj/"
                                target="_blank"
                                className="links"
                              >
                                <div className="footer-icons">
                                  <svg
                                    id="instagram"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23.72"
                                    height="23.72"
                                    viewBox="0 0 23.72 23.72"
                                  >
                                    <g id="Group_183" data-name="Group 183" transform="translate(0)">
                                      <g id="Group_182" data-name="Group 182">
                                        <path
                                          id="Path_143"
                                          data-name="Path 143"
                                          d="M17.795,0H5.935A5.948,5.948,0,0,0,0,5.93V17.79a5.948,5.948,0,0,0,5.93,5.93h11.86a5.948,5.948,0,0,0,5.93-5.93V5.93A5.948,5.948,0,0,0,17.795,0Zm3.953,17.79a3.958,3.958,0,0,1-3.953,3.953H5.935A3.958,3.958,0,0,1,1.982,17.79V5.93A3.958,3.958,0,0,1,5.935,1.977h11.86A3.957,3.957,0,0,1,21.748,5.93V17.79Z"
                                          transform="translate(-0.005 0)"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      id="Group_185"
                                      data-name="Group 185"
                                      transform="translate(16.802 3.953)"
                                    >
                                      <g id="Group_184" data-name="Group 184">
                                        <ellipse
                                          id="Ellipse_14"
                                          data-name="Ellipse 14"
                                          cx="1.482"
                                          cy="1.482"
                                          rx="1.482"
                                          ry="1.482"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      id="Group_187"
                                      data-name="Group 187"
                                      transform="translate(5.93 5.93)"
                                    >
                                      <g id="Group_186" data-name="Group 186">
                                        <path
                                          id="Path_144"
                                          data-name="Path 144"
                                          d="M108.335,102.4a5.93,5.93,0,1,0,5.93,5.93A5.929,5.929,0,0,0,108.335,102.4Zm0,9.884a3.953,3.953,0,1,1,3.953-3.954A3.953,3.953,0,0,1,108.335,112.284Z"
                                          transform="translate(-102.405 -102.4)"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/@KarismaMC"
                                target="_blank"
                                className="links"
                              >
                                <div className="footer-icons" id="youtube">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30.018"
                                    height="21.692"
                                    viewBox="0 0 30.018 21.692"
                                  >
                                    <path
                                      id="youtube"
                                      d="M15.006,22.192H15c-.906-.006-8.913-.079-11.182-.693A4.639,4.639,0,0,1,.552,18.237,34.047,34.047,0,0,1,0,11.375,34.688,34.688,0,0,1,.55,4.461l0-.006A4.737,4.737,0,0,1,3.812,1.171l.012,0C6.067.578,14.091.506,15,.5h.016c.908.006,8.937.079,11.185.694A4.638,4.638,0,0,1,29.46,4.451a33.031,33.031,0,0,1,.553,6.95,34.141,34.141,0,0,1-.55,6.852l0,.006a4.64,4.64,0,0,1-3.266,3.263l-.006,0c-2.243.589-10.266.661-11.174.668h-.008ZM2.817,5.062a33.545,33.545,0,0,0-.472,6.3v.031a31.521,31.521,0,0,0,.472,6.239,2.287,2.287,0,0,0,1.61,1.6c1.674.453,8.2.6,10.579.612,2.39-.017,8.921-.155,10.583-.59a2.288,2.288,0,0,0,1.607-1.6,31.629,31.629,0,0,0,.472-6.239c0-.012,0-.025,0-.037A30.528,30.528,0,0,0,27.2,5.07v0a2.288,2.288,0,0,0-1.611-1.608c-1.658-.453-8.19-.6-10.579-.612-2.388.017-8.913.155-10.58.589a2.352,2.352,0,0,0-1.61,1.628ZM28.329,17.954h0Zm-16.311-1.86V6.6l8.208,4.749Zm0,0"
                                      transform="translate(0.002 -0.5)"
                                    />
                                  </svg>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="https://x.com/karisma_mc14872" target="_blank" className="links">
                                <div className="footer-icons">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21.407"
                                    height="20.793"
                                    viewBox="0 0 21.407 20.793"
                                  >
                                    <path
                                      id="Path_321"
                                      data-name="Path 321"
                                      d="M24.711,8.381,31.921,0H30.213l-6.26,7.277L18.952,0H13.185l7.561,11-7.561,8.789h1.709L21.5,12.108l5.281,7.685h5.767L24.711,8.381Zm-2.34,2.72-.766-1.1-6.1-8.719h2.624l4.919,7.037.766,1.1,6.395,9.146H27.589L22.371,11.1Z"
                                      transform="translate(-12.095 0.5)"
                                      strokeWidth={1}
                                    />
                                  </svg>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.tiktok.com/@karisma_mc"
                                target="_blank"
                                className="links"
                              >
                                <div className="footer-icons">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23.158"
                                    height="26.396"
                                    viewBox="0 0 23.158 26.396"
                                  >
                                    <path
                                      id="tiktok"
                                      d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                                    />
                                  </svg>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.snapchat.com/add/karismamedical?share_id=uzJ2zqgcCcg&locale=en-US"
                                target="_blank"
                                className="links"
                              >
                                <div className="footer-icons">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23.158"
                                    height="26.396"
                                    viewBox="0 0 23.158 26.396"
                                  >
                                    <path d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z" />
                                  </svg>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/in/karisma-mc-6291a0332/"
                                target="_blank"
                                className="links"
                              >
                                <div className="footer-icons">
                                  <svg
                                    id="Group_176"
                                    data-name="Group 176"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="22.755"
                                    height="21.749"
                                    viewBox="0 0 22.755 21.749"
                                  >
                                    <defs>
                                      <clipPath id="clip-path">
                                        <rect
                                          id="Rectangle_91"
                                          data-name="Rectangle 91"
                                          width="22.754"
                                          height="21.749"
                                        />
                                      </clipPath>
                                    </defs>
                                    <g id="Group_175" data-name="Group 175">
                                      <g id="Group_174" data-name="Group 174" clipPath="url(#clip-path)">
                                        <path
                                          id="Path_139"
                                          data-name="Path 139"
                                          d="M2.759,0A2.542,2.542,0,1,0,2.7,5.071h.032A2.543,2.543,0,1,0,2.759,0"
                                        />
                                        <rect
                                          id="Rectangle_90"
                                          data-name="Rectangle 90"
                                          width="4.878"
                                          height="14.675"
                                          transform="translate(0.288 7.074)"
                                        />
                                        <path
                                          id="Path_140"
                                          data-name="Path 140"
                                          d="M230.273,189.108c-2.631,0-4.4,2.473-4.4,2.473v-2.128H221v14.675h4.878v-8.195a3.343,3.343,0,0,1,.161-1.19,2.67,2.67,0,0,1,2.5-1.784c1.765,0,2.471,1.346,2.471,3.318v7.85h4.877v-8.414c0-4.507-2.407-6.6-5.616-6.6"
                                          transform="translate(-213.134 -182.378)"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="wp-block-column footer-col"
                        >
                          <div className="widget widget_nav_menu">
                            <h2
                              className="widgettitle"
                              style={{
                                color: footer['heading-color'],
                                fontSize: footer['heading-size'],
                              }}
                            >
                              {footers.deptName}
                            </h2>
                            <ul className="menu">
                              {footers.departments.map((dept, index) => (
                                <li key={index}>
                                  <Link to={`/${lng}${dept.link}`}
                                    style={{
                                      color: footer['desc-color'],
                                      fontSize: footer['desc-size'],
                                    }}
                                  >
                                    {dept.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div
                          className="wp-block-column footer-col"
                        >
                          <div className="widget widget_nav_menu">
                            <h2
                              className="widgettitle"
                              style={{
                                color: footer['heading-color'],
                                fontSize: footer['heading-size'],
                              }}
                            >
                              {footers.abtName}
                            </h2>
                            <ul className="menu">
                              {footers.corporate.map((link, index) => (
                                <li key={index}>
                                  <Link to={`/${lng}${link.link}`}
                                    style={{
                                      color: footer['desc-color'],
                                      fontSize: footer['desc-size'],
                                    }}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div
                          className="wp-block-column footer-col"
                        >
                          <div className="widget widget_nav_menu">
                            <h2
                              className="widgettitle"
                              style={{
                                color: footer['heading-color'],
                                fontSize: footer['heading-size'],
                              }}
                            >
                              {footers.infoName}
                            </h2>
                            <ul className="menu">
                              {footers.service.map((link, index) => (
                                <li key={index}>
                                  <Link to={`/${lng}${link.link}`}
                                    style={{
                                      color: footer['desc-color'],
                                      fontSize: footer['desc-size'],
                                    }}
                                  >
                                    {link.name}
                                  </Link>
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
            style={{
              backgroundColor: footer['background-color'],
              // borderTop: `1px solid #916F4D` 
            }}
          >

            <div className="container">
              <div className="row">
                <div className="col-12" style={{ justifyContent: 'center' }}>
                  <p className="footer-copyright"
                    style={{
                      color: footer['desc-color'],
                      fontSize: footer['desc-size'],
                    }}>
                    {footers.copyrightText}
                    <a href={companyLink.link}
                      style={{
                        color: footer['desc-color'],
                        fontSize: footer['desc-size'],
                      }}
                    >
                      {companyLink.name}
                    </a>
                  </p>
                  <ul className="nav social-icons" style={{ display: 'none' }}>
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
