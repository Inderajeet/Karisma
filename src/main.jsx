import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React, { Suspense } from 'react';
import './i18n'; // Import your i18n setup
import './custom_css/index.js'; // Import custom CSS fixes


createRoot(document.getElementById('root')).render(
  
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
)
