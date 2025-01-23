// import React from 'react';
// import Lottie from 'lottie-react';
// import dentalLoaderAnimation from '../custom_css/loader.json'; 
// import '../custom_css/pageLoader.css';  

// const PageLoader = () => {
//   return (
//     <div className="loader-container">
//       <Lottie animationData={dentalLoaderAnimation} loop={true}  className="lottie-animation" />
//     </div>
//   );
// };

// export default PageLoader;

import React from 'react';
import '../custom_css/pageLoader.css'; // Ensure this CSS is updated for the animation
import logo from '../custom_css/logo_main-3.png'; // Replace with the path to your logo

const PageLoader = () => {
  return (
    <div className="loader-container">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
        {/* <div className="shimmer-effect"></div> */}
      </div>
    </div>
  );
};

export default PageLoader;
