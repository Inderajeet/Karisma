import '../custom_css/doctor.css';
import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { useTranslation } from "react-i18next";
import Banner from "../components/Banner";
import BannerDoctor from '../components/Bannerdoctor';
import DynamicBanner from '../components/DynamicBanner';

export const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text; // Prevent errors on undefined/null values
  
    return text.split("").map((char, index) =>
      /[A-Za-z0-9 ]/.test(char) // Keep normal text in Seasons
        ? char
        : <span key={index} className="fallback-font">{char}</span> // Force fallback for everything else
    );
  };
  
  
export default function Doctors() {
  const { t, i18n } = useTranslation('doctors');

  const doctors = t('doctors:doctors', { returnObjects: true }); // Fetch the array of doctors

  return (
    <>
    <DynamicBanner  deptName="Our Doctors" serviceName="" bannerImage="https://damasmc.com/uploads/banners/bannerimage68e2318425ebbe7d65777d85eb6a11ecbabc116c.jpg" />
    <div className="docContainer" style={{ marginTop: "50px" }}>
        <div className="col-md-12 order-md-2">
          <div className="post-inner">
            <div className="entry-content">
              <div className="elementor elementor-73315">
                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                  <div className="e-con-inner">
                    <div className="dd-row">
                      {doctors.map((doctor) => (
                        <Link
                        to={`/${i18n.language}/doctor/${encodeURIComponent(doctor.link)}`}
                        key={doctor.id}
                          className="doctor-info-cols"
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
                                    <p className="">{doctor.designation}</p>
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
            <div className="line-container" style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <hr className="half-line" style={{ width: '50%', border: '0', height: '2px', backgroundColor: '#111', margin: '0' }} />
        </div>
          </div>
        </div>
      </div>
    </>
  );
}
