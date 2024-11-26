import React from 'react';
import Lottie from 'lottie-react';
import dentalLoaderAnimation from '../custom_css/loader.json'; 
import '../custom_css/pageLoader.css';  

const PageLoader = () => {
  return (
    <div className="loader-container">
      <Lottie animationData={dentalLoaderAnimation} loop={true}  className="lottie-animation" />
    </div>
  );
};

export default PageLoader;
