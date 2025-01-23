import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React, { Suspense } from 'react';
import './i18n'; // Import your i18n setup

// import '/assets/wp-content/plugins/main.css';
// import '/assets/wp-content/plugins/global_inline.css';
// import '/assets/wp-content/uploads/elementor/css/post-73397.css';
// import '/assets/wp-content/uploads/elementor/css/post-73311.css';
// import '/assets/wp-content/uploads/elementor/css/post-73397.css';
// import '/assets/wp-content/plugins/elementor/assets/css/frontend.min.css';
// import '/assets/wp-content/themes/happysmile/style.css';
// import '/assets/wp-content/plugins/elementor/assets/css/widget-rating.min.css';
// import '/assets/wp-content/plugins/classic-elementor-addons-pro/assets/css/style.css';
// import '/assets/wp-content/plugins/doctors-directory/assets/css/style.css';
// import '/assets/wp-content/plugins/classic-elementor-addons-pro/assets/css/font-awesome.css';
// import '/assets/wp-content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css';
// import '/assets/css/karisma.css';
// import '/assets/fonts/themify.svg';
// import '/assets/fonts/themify.ttf';
// import '/assets/fonts/themify.woff';
// import '/assets/fonts/themify.eot';


createRoot(document.getElementById('root')).render(
  
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
)
