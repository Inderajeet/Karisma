import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom"; // For navigation
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility function
import { useTranslation } from "react-i18next";

const SliderDoct = () => {
  const { t, i18n } = useTranslation(['translation', 'doctors']);
  const [data, setData] = useState({ styles: {}, images: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await fetchAllJson(); // Fetch styles and images
        setData(allData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return;
  if (error) return;

  const { department } = data.styles;
  const { cards } = department;

  const doctors = t('doctors:doctors', { returnObjects: true }); // Fetch the array of doctors
  const isRTL = i18n.dir() === "rtl";

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: isRTL, // Reverse autoplay direction for RTL
      }}
      dir={isRTL ? "rtl" : "ltr"} // Set the HTML direction for Swiper
      style={{
        direction: isRTL ? "rtl" : "ltr", // Ensure CSS direction is applied
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
            to={`/${i18n.language}/doctor/${encodeURIComponent(doctor.link)}`}
          >
            <div
              className="service-inner doctor-inner"
              style={{ backgroundColor: cards["background-color"] }}
            >
              <div className="entrye-title">
                <h3 className="post-title-head" style={{paddingBottom: '0'}}>
                  <div
                    className="post-title"
                    style={{
                      color: cards["heading-color"],
                      fontSize: cards["heading-size"],
                    }}
                  >
                    {doctor.name}
                  </div>
                </h3>
              </div>
              <div
                className="post-excerpt  doctor-post-excerpt"
                style={{
                  color: cards["desc-color"],
                  fontSize: cards["desc-size"],
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
                          color: cards["button-text-color"],
                          fontWeight: "600",
                          fontSize: cards["button-text-size"],
                        }}
                      >
                        READ MORE
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
  );
};

export default SliderDoct;
