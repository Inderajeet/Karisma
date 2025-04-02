import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import "./slideDoctor.css";

const SlidingDoct = ({ doctors, isRTL }) => {
    console.log("SlidingDoct Doctors Prop:", doctors);
    console.log("SlidingDoct isRTL Prop:", isRTL);

    const { t, i18n } = useTranslation();

    return (
        <>
            <div
                data-elementor-type="wp-page"
                data-elementor-id={73397}
                className="elementor elementor-73397 customContainer"
                style={{
                    //   backgroundColor: about_us["background-color"],
                }}
            ><div
                className="elementor-element elementor-element-7017c942 e-flex e-con-boxed e-con e-child"
                data-id="7017c942"
                data-element_type="container"
            >
                    <div className="e-con-inner" style={{ margin: "0px" }}>
                        <div
                            className="elementor-element elementor-element-24da0674 e-flex e-con-boxed e-con e-child"
                            data-id="24da0674"
                            data-element_type="container"
                        >
                            <div className="e-con-inner">
                                <div
                                    className="elementor-element elementor-element-581d3470 elementor-widget elementor-widget-ceaservice animated fadeInUp"
                                    data-id="581d3470"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"fadeInUp"}'
                                    data-widget_type="ceaservice.default"
                                >
                                    <div className="elementor-widget-container service-wrapper service-style-default service-light service-normal-model">
                                        <div className="row">
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
                                                style={{
                                                    direction: isRTL ? "rtl" : "ltr",
                                                }}
                                                breakpoints={{
                                                    0: { slidesPerView: 1 },
                                                    530: { slidesPerView: 2 },
                                                    576: { slidesPerView: 2 },
                                                    768: { slidesPerView: 3 },
                                                    992: { slidesPerView: 3 },
                                                    1200: { slidesPerView: 3 },
                                                    1300: { slidesPerView: 3 },
                                                }}
                                                modules={[Autoplay]}
                                            >
                                                {doctors.map((doctor, index) => (
                                                    <SwiperSlide key={doctor.id}>
                                                        <Link
                                                            to={`/${i18n.language}/${encodeURI(doctor.link)}`}
                                                        >
                                                            <div
                                                                className="service-inner doctor-inner"
                                                                style={{ backgroundColor: "#f9f9f9" }}
                                                            >
                                                                <div className="entrye-title">
                                                                    <h3 className="post-title-head" style={{ paddingBottom: '0' }}>
                                                                        <div
                                                                            className="post-title"
                                                                            style={{
                                                                                color: "#577065",
                                                                                fontSize: "24px",
                                                                            }}
                                                                        >
                                                                            {doctor.name}
                                                                        </div>
                                                                    </h3>
                                                                </div>
                                                                <div
                                                                    className="post-excerpt doctor-post-excerpt"
                                                                    style={{
                                                                        color: "#5C4033",
                                                                        fontSize: "16px",
                                                                    }}
                                                                >
                                                                    {doctor.designation}
                                                                </div>
                                                                <div className="post-thumb home-doct">
                                                                    <div className="post-image-link">
                                                                        <img
                                                                            // src={Object.values(doctorsImg)[index]}
                                                                            src={doctor.image}
                                                                            alt={doctor.title}
                                                                            className="img-fluid squared"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="bottom-meta clearfix">
                                                                    <ul className="nav bottom-meta-list meta-left">
                                                                        <li>
                                                                            <div>
                                                                                <div
                                                                                    href={doctor.link}
                                                                                    className="homefont"
                                                                                    style={{
                                                                                        color: "#577065",
                                                                                        fontWeight: "600",
                                                                                        fontSize: "16px"
                                                                                    }}
                                                                                >
                                                                                    {doctor.readMore}
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
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
};

export default SlidingDoct;
