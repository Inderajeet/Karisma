import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom"; // For navigation
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const SliderDoct = () => {
  const { t, i18n } = useTranslation(['translation', 'doctors']);
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

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>Error: {error}</p>;

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
        reverseDirection: isRTL,
      }}
      dir={isRTL ? "rtl" : "ltr"}
      style={{ direction: isRTL ? "rtl" : "ltr" }}
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
      {doctors.slice(1).map((doctor, index) => (
        <SwiperSlide key={doctor.id}>
          <Link to={`/${i18n.language}/doctor/${doctor.id}`}>
            <div className="service-inner doctor-inner">
              <div className="entrye-title">
                <h3 className="post-title-head" style={{ paddingBottom: '0' }}>
                  <div className="post-title">{doctor.name}</div>
                </h3>
              </div>
              <div className="post-excerpt doctor-post-excerpt">{doctor.designation}</div>
              <div className="post-thumb home-doct">
                <div className="post-image-link">
                  <img src={doctor.image} alt={doctor.name} className="img-fluid squared" />
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
                          fontSize: "16px",
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
  );
};

export default SliderDoct;
