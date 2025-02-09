import '../../custom_css/doctor.css';
import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { useTranslation } from "react-i18next";

export default function ListServices({ services }) {

  console.log('inside services:', services);  // Debugging: log services
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="happysmile-content-wrap container page" style={{ marginTop: "10px" }}>
        <div className="col-md-12 order-md-2">
          <div className="post-inner">
            <div className="entry-content">
              <div className="elementor elementor-73315">
                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                  <div className="e-con-inner">
                    <div className="dd-row">
                      {services?.map((doctor) => (
                        <Link
                          to={`/${i18n.language}/${encodeURI(doctor.link)}`}
                          key={doctor.id}
                          className="service-info-cols"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="dd-inner">
                            <div className="cust-doctor-info-wrap">
                              <div className="doctor-thumbnail">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width={500}
                                  height={456}
                                  src={doctor.image}
                                  className="img-responsive wp-post-image"
                                  alt={doctor.name}
                                />
                              </div>
                              <div className="doctor-info-body">
                                <div className="doctor-name">{doctor.name}</div>
                                <div className="doctor-info-inner">
                                  <div className="doctor-specialities">
                                    <div className="doctor-departments">{doctor.designation}</div>
                                  </div>
                                  <div className="doctor-specialities">
                                    <div className="service-departments"><strong>Read More</strong></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
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
