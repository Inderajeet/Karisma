import React, { useState, useEffect, useRef } from "react";
import "./HomeSlider.css";

const HomeSlider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const autoSlideIntervalRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const response = await fetch('https://demo.karismamc.com/api/homepage');
        const data = await response.json();
        
        if (isMounted.current) {
          if (data.banners && Array.isArray(data.banners)) {
            // Filter only banners with title "Home Slider" and have desktop_image
            const homeSliderBanners = data.banners
              .filter(banner => 
                banner.title === "Home Slider" && 
                banner.type === "image" && 
                banner.desktop_image
              )
              .map(banner => ({
                imageUrl: banner.desktop_image,
                title: banner.title
              }));
            
            if (homeSliderBanners.length > 0) {
              setSliderData(homeSliderBanners);
            } else {
              setError("No Home Slider banners found");
            }
          } else {
            setError("Invalid banners data structure");
          }
          setLoading(false);
        }
      } catch (err) {
        if (isMounted.current) {
          console.error("Error fetching banner images:", err);
          setError("Failed to load banner images");
          setLoading(false);
        }
      }
    };

    fetchBannerImages();

    return () => {
      isMounted.current = false;
      clearInterval(autoSlideIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (sliderData.length > 0) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      }, 5000);

      return () => clearInterval(autoSlideIntervalRef.current);
    }
  }, [sliderData]);

  const changeSlide = (direction) => {
    if (sliderData.length > 0) {
      clearInterval(autoSlideIntervalRef.current);
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + direction + sliderData.length) % sliderData.length
      );

      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      }, 5000);
    }
  };

  if (loading) {
    return <p style={{padding:"140px"}}></p>;
  }

  if (error) {
    return <div className="error-placeholder">{error}</div>;
  }

  if (sliderData.length === 0) {
    return <p style={{padding:"140px"}}>No Home Slider banners available</p>;
  }

  return (
    <div className="background-slider">
      <div
        className="background-image-slider"
        style={{ backgroundImage: `url(${sliderData[currentImageIndex].imageUrl || ""})` }}
      ></div>
      <div className="overlay"></div>
      
      <div className="slider-arrows">
        <button className="slider-arrow" onClick={() => changeSlide(-1)}>
          <svg fill="#ffffff" height="20px" width="25px" viewBox="70 70 190 190">
            <path d="M205.606,234.394c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"></path>
          </svg>
        </button>
        <button className="slider-arrow" onClick={() => changeSlide(1)}>
          <svg fill="#ffffff" height="20px" width="25px" viewBox="70 70 190 190">
            <path d="M225.606,175.605l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;