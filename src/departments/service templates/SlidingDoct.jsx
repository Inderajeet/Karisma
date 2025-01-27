import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import "./slideDoctor.css";

const SlidingDoct = ({ doctors, cards, isRTL }) => {
      const { t, i18n } = useTranslation();
    
    return (
        <>
        <div
        data-elementor-type="wp-page"
        data-elementor-id={73397}
        className="elementor elementor-73397"
        style={{
        //   backgroundColor: about_us["background-color"],
        }}
      ><div
      className="elementor-element elementor-element-7017c942 e-flex e-con-boxed e-con e-child"
      data-id="7017c942"
      data-element_type="container"
    >
      <div className="e-con-inner">
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
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1300: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
        >
            {doctors.map((doctor, index) => (
                <SwiperSlide key={doctor.id}>

                    <div
                        className="service-inner"
                        style={{ backgroundColor: cards["background-color"] }}
                    >
                        <div className="entry-title">
                            <h3 className="post-title-head">
                                <Link
                                    to={`/${i18n.language}/doctor/${encodeURIComponent(doctor.link)}`}
                                    className="post-title"
                                    style={{
                                        color: cards["heading-color"],
                                        fontSize: cards["heading-size"],
                                    }}
                                >
                                    {doctor.name}
                                </Link>
                            </h3>
                        </div>
                        <div
                            className="post-excerpt"
                            style={{
                                color: cards["desc-color"],
                                fontSize: cards["desc-size"],
                            }}
                        >
                            {doctor.designation}
                        </div>
                        <div className="post-thumb">
                            <Link
                                to={`/${i18n.language}/doctor/${encodeURIComponent(doctor.link)}`}
                                className="post-image-link">
                                <img
                                    src={doctor.image}
                                    alt={doctor.title}
                                    className="img-fluid squared"
                                />
                            </Link>
                        </div>
                        <div className="bottom-meta clearfix">
                            <ul className="nav bottom-meta-list meta-left">
                                <li>
                                    <div>
                                    <Link
                        to={`/${i18n.language}/doctor/${encodeURIComponent(doctor.link)}`}
                                            className="homefont"
                                            style={{
                                                color: cards["button-text-color"],
                                                fontWeight: "600",
                                                fontSize: cards["button-text-size"],
                                            }}
                                        >
                                            READ MORE
                                        </Link>
                                    </div>
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
        </div>
        </div>
        </div>
        </>
    );
};

export default SlidingDoct;
