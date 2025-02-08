import Banner from '../../components/Banner'
import React from "react";
import BeforeAfterSlider from './BeforeAfterSlider';

const TreatmentImages = () => {
    return (
      <>
              <Banner />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <BeforeAfterSlider
          beforeImage="https://damasmc.com/uploads/department-treatments/before_image31b6d4bae4ee6edade5f4016002804a28279c42b.png"
          afterImage="https://damasmc.com/uploads/department-treatments/after_image31b6d4bae4ee6edade5f4016002804a28279c42b.png"
        />
      </div>

      </>
    );
  };
  
export default TreatmentImages;
