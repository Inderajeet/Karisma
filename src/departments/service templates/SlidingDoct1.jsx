import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import "./slideDoctor.css";
const SlidingDoct1 = ({ doctors, isRTL }) => {
    const { t, i18n } = useTranslation();
  
    if (!doctors || !doctors.doctors || doctors.doctors.length === 0) {
      return <p>No doctors available</p>;
    }
  
    const { title, cards, doctors: doctorsList } = doctors;
  
    return (
      <>
        <div className="elementor elementor-73397">
          <div className="elementor-element elementor-element-7017c942 e-flex e-con-boxed e-con e-child">
            <div className="e-con-inner" style={{ margin: "0px" }}>
              <div className="elementor-element elementor-element-24da0674 e-flex e-con-boxed e-con e-child">
                <div className="e-con-inner">
                  <h2 style={{ color: cards["heading-color"], fontSize: "28px", textAlign: "center", marginBottom: "20px" }}>
                    {t(title)}
                  </h2>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    loop={true}
                    speed={1000}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      reverseDirection: isRTL,
                    }}
                    dir={isRTL ? "rtl" : "ltr"}
                    style={{ direction: isRTL ? "rtl" : "ltr" }}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      576: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      992: { slidesPerView: 2 },
                      1200: { slidesPerView: 3 },
                      1300: { slidesPerView: 3 },
                    }}
                    modules={[Autoplay]}
                  >
                    {doctorsList.map((doctor, index) => (
                      <SwiperSlide key={index}>
                        <div className="service-inner" style={{ backgroundColor: cards["background-color"] }}>
                          <div className="entry-title">
                            <h3 className="post-title-head">
                              {doctor.name ? (
                                <Link
                                  to={`/${i18n.language}/doctor/dr-id-${doctor.id}`}
                                  className="post-title"
                                  style={{
                                    color: cards["heading-color"],
                                    fontSize: cards["heading-size"],
                                  }}
                                >
                                  {doctor.name}
                                </Link>
                              ) : (
                                <span className="post-title" style={{ color: cards["heading-color"], fontSize: cards["heading-size"] }}>
                                  Name Unavailable
                                </span>
                              )}
                            </h3>
                          </div>
                          <div className="post-excerpt" style={{ color: cards["desc-color"], fontSize: cards["desc-size"] }}>
                            {doctor.designation || "Designation not provided"}
                          </div>
                          <div className="post-thumb">
                            <Link to={`/${i18n.language}/doctor/dr-id-${doctor.id}`} className="post-image-link">
                              <img
                                src={doctor.image}
                                alt={doctor.name || "Doctor Image"}
                                className="img-fluid squared"
                                style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
                              />
                            </Link>
                          </div>
                          <div className="bottom-meta clearfix">
                            <ul className="nav bottom-meta-list meta-left">
                              <li>
                                <Link
                                  to={`/${i18n.language}/doctor/dr-id-${doctor.id}`}
                                  className="homefont"
                                  style={{
                                    color: cards["button-text-color"],
                                    fontWeight: "600",
                                    fontSize: cards["button-text-size"],
                                  }}
                                >
                                  READ MORE
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default SlidingDoct1;
