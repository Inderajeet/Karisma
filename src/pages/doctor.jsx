import '../custom_css/doctor.css'
import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from '../components/Banner';
import { Link } from "react-router-dom"; // For navigation
import { useTranslation } from "react-i18next";


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

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const doctorRows = chunkArray(doctors, 3);

  return (
    <>
      <Banner></Banner>
      <div className="happysmile-content-wrap container page">
        <div className="col-md-12 order-md-2">
          <article className="post-73315 page type-page status-publish hentry" id="post-73315">
            <div className="post-inner">
              <div className="entry-content">
                <div data-elementor-type="wp-page" data-elementor-id={73315} className="elementor elementor-73315">
                  <div
                    className="elementor-element elementor-element-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded"
                    data-id="7a321f1b"
                    data-element_type="container"
                  >
                    <div className="e-con-inner">
                      {doctorRows.map((row, rowIndex) => (
                        <div className="dd-row" key={rowIndex}>
                          {row.map((doctor) => (
                            <Link
                              to={`/${i18n.language}/doctor/${encodeURIComponent(doctor.link)}`}
                            >
                            <div
                              className="doctor-info-cols dd-col-4"
                              key={doctor.id}
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
                                        {/* <div className="doctor-specialities-name">{doctor.specialties}</div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
