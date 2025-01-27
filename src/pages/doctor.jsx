import '../custom_css/doctor.css';
import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { useTranslation } from "react-i18next";
import Banner from "../components/Banner";
import BannerDoctor from '../components/Bannerdoctor';

export default function Doctors() {
  const { t, i18n } = useTranslation(['translation', 'doctors']);

  // const doctors = [
  //   {
  //     id: 1,
  //     name: "Michelle Bachelet",
  //     specialties: "Clinical Nutrition",
  //     deparmnents: "Dental",
  //     page: "/doctor-1",
  //     imageUrl: "https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/02/doctor-16-500x456.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Ben Carson",
  //     specialties: "Orthopedics",
  //     deparmnents: "Slimming",
  //     page: "/ben-carson",
  //     imageUrl: "https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/02/doctor-15-500x456.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Mae Jemison",
  //     specialties: "Pediatrics",
  //     deparmnents: "Dental",
  //     page: "/mae-jemison",
  //     imageUrl: "https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/02/doctor-14-500x456.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Alexis Carrel",
  //     specialties: "Cardiology",
  //     deparmnents: "Dental",
  //     page: "/alexis-carrel",
  //     imageUrl: "https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/02/doctor-13-500x456.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Elizabeth Blackwell",
  //     specialties: "Internal Medicine",
  //     deparmnents: "Derma",
  //     page: "/elizabeth-blackwell",
  //     imageUrl: "https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/02/doctor-12-500x456.jpg",
  //   },
  // ];
  const doctors = t('doctors:doctors', { returnObjects: true }); // Fetch the array of doctors

  return (
    <>
    <BannerDoctor />
      <div className="happysmile-content-wrap container page" style={{ marginTop: "50px" }}>
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
                                    <div className="doctor-departments">{doctor.designation}</div>
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
