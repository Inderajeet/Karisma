import React, { useState, useEffect } from "react";
import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility function
import "./HomeSlider.css";

const HomeSlider = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllJson();
        const { home } = data.images;
        setSliderImages(home.sliderImages); // Extract slider images
        setLoading(false);
        console.log("Fetched Images:", home.sliderImages);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  // Handle automatic sliding
  useEffect(() => {
    if (sliderImages.length === 0) return;
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages]); // Add this dependency

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000); // Auto-slide every 5 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [sliderImages]);
  
  const changeSlide = (direction) => {
    console.log("Arrow Clicked! Moving:", direction);
    
    // Reset the auto-slide timer when user interacts
    setCurrentImageIndex((prevIndex) => (prevIndex + direction + sliderImages.length) % sliderImages.length);
  };
  
  
  useEffect(() => {
    console.log("Updated Index:", currentImageIndex);
  }, [currentImageIndex]);
  
  
  
  if (loading) return ;
  if (error) return ;

  return (
    <>
      <div className={`background-slider ${isSliding ? "sliding" : ""}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${sliderImages[currentImageIndex]})` }}
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
    </>
  );
};

export default HomeSlider;
