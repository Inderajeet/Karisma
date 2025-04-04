import '../custom_css/doctor.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DynamicBanner from '../components/DynamicBanner';


export const applyFontFallback = (text) => {
  if (!text || typeof text !== "string") return text;
  return text.split(/\b/).map((word, index) => 
      /^[A-Za-z0-9 ]+$/.test(word)
          ? word
          : <span key={index} className="fallback-font">{word}</span>
  );
};

export default function Doctors() {
  const { t, i18n } = useTranslation('doctors');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
      // Set initial state
      setLoading(true);
      setError(null);
      
      console.log("Fetching doctors data from API...");
      
      // Use fetch with promise chain
      fetch('https://demo.karismamc.com/api/doctors', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Doctors data received:", data);
        if (data && data.doctors && Array.isArray(data.doctors)) {
          setDoctors(data.doctors);
        } else {
          throw new Error("Invalid data format or no doctors found");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch doctors:", err);
        setError(`Failed to fetch doctors: ${err.message}`);
        setLoading(false);
      });
    }, []);
  

  if (loading) return <p style={{padding:"140px"}}></p>;
  if (error) return <p style={{padding:"140px"}}>Error: {error}</p>;

  return (
    <>
      {doctors.length > 0 && (
        <DynamicBanner 
          deptName={doctors[0].deptName}
          bannerImage={doctors[0].bannerImage}
          bannerPosition={doctors[0].bannerPosition}
          deptLink={doctors[0].deptLink}
          home={doctors[0].home}
        />
      )}
      <div className="docContainer" style={{ marginTop: "50px" }}>
        <div className="col-md-12 order-md-2">
          <div className="post-inner">
            <div className="entry-content">
              <div className="elementor elementor-73315">
                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                  <div className="e-con-inner">
                    <div className="dd-row" style={{ justifyContent: 'start' }}>
                      {doctors.slice(1).map((doctor, index) => (
                        <Link
                          to={`/${i18n.language}/${encodeURI(doctor.link)}`}
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
                                <div className="doctor-name">{i18n.language === 'ar' ? doctor.name_arabic : doctor.name}</div>
                                <div className="doctor-info-inner">
                                  <div className="doctor-specialities">
                                    <p>{i18n.language === 'ar' ? doctor.designation_arabic : doctor.designation}</p>
                                  </div>
                                  <p><strong>{i18n.language === 'ar' ? doctor.department_arabic : doctor.department}</strong></p>
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
