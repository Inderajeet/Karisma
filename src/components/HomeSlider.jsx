import React, { useState, useEffect, useRef } from "react";
import { fetchAllJson } from "../utils/fetchAllJson";
import "./HomeSlider.css";

const HomeSlider = () => {
  const [data, setData] = useState(null); // Store the entire fetched data
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoSlideIntervalRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchAllJson();
        if (isMounted.current) {
          setData(fetchedData); // Set the entire data object
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
      clearInterval(autoSlideIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (data && data.images && data.images.home && data.images.home.sliderImages && data.images.home.sliderImages.length > 0) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.home.sliderImages.length);
      }, 5000);

      return () => clearInterval(autoSlideIntervalRef.current);
    }
  }, [data]); // Depend on the entire data object

  const changeSlide = (direction) => {
    if (data && data.images && data.images.home && data.images.home.sliderImages) {
      clearInterval(autoSlideIntervalRef.current);
      setCurrentImageIndex((prevIndex) => (prevIndex + direction + data.images.home.sliderImages.length) % data.images.home.sliderImages.length);

      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.home.sliderImages.length);
      }, 5000);
    }
  };

  if (!data || !data.images || !data.images.home || !data.images.home.sliderImages || data.images.home.sliderImages.length === 0) {
    return <div>Loading...</div>; // Or "No images available"
  }

  return (
    <div className="background-slider">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${data.images.home.sliderImages[currentImageIndex] || ''})` }}
      ></div>
      <div className="overlay"></div>
      <div className="slider-arrows">
        <button className="slider-arrow" onClick={() => changeSlide(-1)}>
          &lt;
        </button>
        <button className="slider-arrow" onClick={() => changeSlide(1)}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;