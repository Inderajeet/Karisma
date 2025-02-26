import React, { useState, useEffect, useRef } from "react";
import { fetchAllJson } from "../utils/fetchAllJson";
import "./HomeSlider.css";

const HomeSlider = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoSlideIntervalRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchAllJson();
        console.log("Fetched Data:", fetchedData); // Debugging log
    
        if (isMounted.current) {
          const images = fetchedData?.images?.home?.sliderImages?.desktop || []; // Select desktop images
    
          if (Array.isArray(images) && images.length > 0) {
            setSliderImages(images);
          } else {
            console.error("Invalid sliderImages structure:", images);
            setSliderImages([]);
          }
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

  if (sliderImages.length === 0) {
    return <div>Loading...</div>; // Show loading if no images
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
