import React, { useState, useRef } from "react";
import "../../custom_css/TreatmentImages.css"; // Create this CSS file

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
  
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition)); // Keep within bounds
      setSliderPosition(newPosition);
    };
  
    return (
      <div
        className="before-after-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
      >
        {/* Images Wrapper */}
        <div className="treat-image-container">
          {/* After Image (Full Background) */}
          <img src={afterImage} alt="After" className="image after-image" />
  
          {/* Before Image (Hidden Initially, Revealed by Slider) */}
          <div className="before-image-wrapper" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
            <img src={beforeImage} alt="Before" className="image before-image" />
          </div>
        </div>
  
        {/* Slider Handle (Vertical Line + Circle) */}
        <div className="slider-handle" style={{ left: `${sliderPosition}%` }} />
      </div>
    );
  };
  
  export default BeforeAfterSlider;
  