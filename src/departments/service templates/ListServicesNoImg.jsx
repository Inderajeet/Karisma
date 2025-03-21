import '../../custom_css/doctor.css';
import '../../custom_css/listServices.css';
import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { useTranslation } from "react-i18next";

export const applyFontFallback = (text) => {
  if (!text || typeof text !== "string") return text; // Prevent errors on undefined/null values

  return text.split(/\b/).map((word, index) => 
      /^[A-Za-z0-9 ]+$/.test(word) // If word is English/number/space, keep normal font
          ? word
          : <span key={index} className="fallback-font">{word}</span> // Apply fallback only for non-English words
  );
};

export default function ListServicesNoImg({ services }) {

  console.log('inside services:', services);  // Debugging: log services
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="customContainer">
        <div className="col-md-12 order-md-2">
          <div className="post-inner">
            <div className="entry-content">
              <div className="elementor elementor-73315">
                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                  <div className="e-con-inner">
                    <div className="listRow" style={{ paddingTop: '0px' }}>
                      {services?.map((doctor) => (
                        <div className='noImg-info-cols'>
                        <div className="dd-inner">

                          <Link
                            to={`/${i18n.language}/${encodeURI(doctor.link)}`}
                            key={doctor.id}
                            className=""
                            style={{ cursor: "pointer" }}
                          >
                            <div className="cust-noImg-info-wrap">
                              {/* <div className="doctor-thumbnail">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width={500}
                                  height={456}
                                  src={doctor.image}
                                  className="img-responsive wp-post-image"
                                  alt={doctor.name}
                                />
                              </div> */}
                              <div className="noImg-info-body third">
                                <div className="doctor-info-inner">
                                  <div className="service-name">{applyFontFallback(doctor.name)}</div>
                                  <div className="doctor-specialities">
                                    <div className="service-departments">{doctor.designation}</div>
                                  </div>
                                  <div className="doctor-specialities">
                                    <div className="service-departments"><strong>{doctor.readMore}</strong></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
