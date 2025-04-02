import React, { useState, useEffect, useRef } from "react";
import "./HomeSlider.css";

const HomeSlider = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const autoSlideIntervalRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const response = await fetch('/api/bannerpage');
        const data = await response.json();
        
        if (isMounted.current) {
          if (data.banners && Array.isArray(data.banners)) {
            // Filter active banners and map to get desktop image URLs
            const activeBanners = data.banners
              .filter(banner => banner.status === "active" && banner.desktop)
              .map(banner => banner.desktop);
            
            if (activeBanners.length > 0) {
              setSliderImages(activeBanners);
            } else {
              setError("No active banners found");
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
    if (sliderImages.length > 0) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
      }, 5000);

      return () => clearInterval(autoSlideIntervalRef.current);
    }
  }, [sliderImages]);

  const changeSlide = (direction) => {
    if (sliderImages.length > 0) {
      clearInterval(autoSlideIntervalRef.current);
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + direction + sliderImages.length) % sliderImages.length
      );

      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
      }, 5000);
    }
  };

  if (loading) {
    return <div className="loading-placeholder">Loading banners...</div>;
  }

  if (error) {
    return <div className="error-placeholder">{error}</div>;
  }

  if (sliderImages.length === 0) {
    return <div className="no-banners-placeholder">No banners available</div>;
  }

  return (
    <div className="background-slider">
      <div
        className="background-image-slider"
        style={{ backgroundImage: `url(${sliderImages[currentImageIndex] || ""})` }}
      ></div>
      <div className="overlay"></div>
      <div className="slider-arrows">
        <button className="slider-arrow" onClick={() => changeSlide(-1)}>
          <svg fill="#000000" height="20px" width="25px" viewBox="70 70 190 190">
            <path d="M205.606,234.394c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"></path>
          </svg>
        </button>
        <button className="slider-arrow" onClick={() => changeSlide(1)}>
          <svg fill="#000000" height="20px" width="25px" viewBox="70 70 190 190">
            <path d="M225.606,175.605l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;