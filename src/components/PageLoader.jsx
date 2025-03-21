import React from 'react';
import { useTranslation } from 'react-i18next';
import '../custom_css/pageLoader.css'; 

// Import both logos
import logoEn from '../custom_css/logo_main-3.png';
import logoAr from '../custom_css/Karisma_Logo_gold_ar.png';

const PageLoader = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar'; // Check if the language is Arabic

  return (
    <div className="loader-container">
      <div className="logo-wrapper">
        <img src={isArabic ? logoAr : logoEn} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default PageLoader;
