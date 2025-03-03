import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import i18n from './i18n';
import lodash from "lodash";

import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './pages/contact_us';
import Index from './pages/index';
import About from './pages/about/index';
import Doctors from './pages/doctor';
import { CartProvider } from './components/CartContext';
import Offers from './pages/offers';
import Cart from './pages/cart';
import PageLoader from './components/PageLoader';
import Checkout from './components/Checkout';
import OfferDetails from './components/OfferDetails';
import Footer from './components/footer';
import TopBar from './components/TopBar';
import DoctorPage from './pages/doctors/doctor_1';
import Services from './departments/Services';
import ServiceTemplate from './departments/service templates/ServiceTemplate';
import ServiceList from './departments/service templates/ServiceList';
import GynecologyServices from './departments/gyne/GynecologyServices';
import LaserServices from './departments/laser/LaserServices';
import SkinCareServices from './departments/skincare/SkinCareServices';
import SkinCareRelatedServices from './departments/skincare/SkinCareRelatedServices';
import FooterServices from './components/FooterServices';


import SlimmingRelatedServices from './departments/slimming/SlimmingRelatedServices';
import TreatmentImages from './departments/service templates/TreatmentImages';
import DermaRelatedServices from './departments/derma/DermaRelatedServices';
import SlimmingServices from './departments/slimming/SlimmingServices';
import DermaServices from './departments/derma/DermaServices';
import DentalServices from './departments/dental/DentalServices';
import Departments from './departments/Departments';
import Careers from './pages/careers';


Modal.setAppElement('#root'); // For accessibility

function LanguageWrapper() {
  const { lng } = useParams(); // Extract language from the URL
  const navigate = useNavigate();

 const { pathname } = useLocation();
 console.log('pathname: ' + pathname);
 
//  useEffect(()=>{
//   const url = pathname.split("/");
//  if (url[1]) {
//    const path = lodash.startCase(lodash.camelCase(url[1]));
//   //  const path = url[1]

//    document.title = `${path} | Karisma`;
//  } else {
//    document.title = "Karisma";
//  }
//  },[pathname])

useEffect(() => {
  const urlSegments = pathname.split("/"); 
  console.log('urlSegments: ' + urlSegments)
  if (urlSegments.length >2){
    if (urlSegments.length > 4 && urlSegments[4]){
      const pageName = lodash.startCase(lodash.camelCase(urlSegments[4]));
      document.title = `Karisma | ${pageName}`;
    }else if (urlSegments.length > 3 && urlSegments[3]){
      const pageName = lodash.startCase(lodash.camelCase(urlSegments[3]));
      document.title = `Karisma | ${pageName}`;
    }else{
      const pageName = lodash.startCase(lodash.camelCase(urlSegments[2]));
      document.title = `Karisma | ${pageName}`;
    }
  }else{
    document.title = "We Brought the World to You";
  }
  // if (urlSegments.length > 2 && urlSegments[2]) {
  //   // Extract and format the correct page name
  //   const pageName = lodash.startCase(lodash.camelCase(urlSegments[2]));
  //   // const pageName = urlSegments[2];

  //   document.title = `Karisma | ${pageName}`;
  // } else {
  //   document.title = "Karisma Specialist Medical Centre";
  // }
}, [pathname]);


  useEffect(() => {
    if (!['en', 'ar'].includes(lng)) {
      navigate(`/en`, { replace: true }); // Redirect to fallback language if not supported
    } else {
      i18n.changeLanguage(lng); // Update i18n language
    }
  }, [lng, navigate]);

  return (
    <>
      <TopBar />
      <CartProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="contact_us" element={<ContactPage />} />
          <Route path="about_us" element={<About />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="offers" element={<Offers />} />
          <Route path="service/:slug" element={<OfferDetails />} />
          <Route path="service" element={<Services />} />
          <Route path="/services" element={<ServiceList />} />
          <Route path="/services/:serviceName" element={<ServiceTemplate />} />

          <Route path="/:deptName" element={<Departments />} />
          <Route path="/dental/:serviceName" element={<DentalServices />} />
          <Route path="/gynecology/:serviceName" element={<GynecologyServices />} />
          <Route path="/laser-hair-removal/:serviceName" element={<LaserServices />} />
          <Route path="/skinCare/:serviceName" element={<SkinCareServices />} />
          <Route path="/skinCare/:serviceName/:subService" element={<SkinCareRelatedServices />} />
          <Route path="/slimming/:serviceName" element={<SlimmingServices />} />
          <Route path="/slimming/:serviceName/:subService" element={<SlimmingRelatedServices />} />
          <Route path="/derma/:serviceName" element={<DermaServices />} />
          <Route path="/derma/:serviceName/:subService" element={<DermaRelatedServices />} />

          <Route path="/policies/:footSerName" element={<FooterServices />} />  
          <Route path="/treatments" element={<TreatmentImages />} />  
          <Route path="/careers" element={<Careers />} />  
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/doctor/:doctorName" element={<DoctorPage />} />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <NavigationWithLoader>
        <Routes>
          {/* Redirect root `/` to `/en` */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path=":lng/*" element={<LanguageWrapper />} />
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to={`/${i18n.language}`} replace />} />
        </Routes>
      </NavigationWithLoader>
    </Router>
  );
}

// function NavigationWithLoader({ children }) {
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     const handlePageLoad = () => setLoading(false);
//     window.addEventListener('load', handlePageLoad);
//     return () => {
//       window.removeEventListener('load', handlePageLoad);
//     };
//   }, []);

//   useEffect(() => {
//     setLoading(true);
//     const stopLoading = () => setLoading(false);
//     const timeoutId = setTimeout(stopLoading, 2000);
//     return () => clearTimeout(timeoutId);
//   }, [location]);

//   return (
//     <>
//       {loading && <PageLoader />} {/* Show loader */}
//       {!loading && children} {/* Render content */}
//     </>
//   );
// }
function NavigationWithLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 1500); // Show loader for 1.5 sec
    return () => clearTimeout(timeoutId);
  }, [location]);

  return loading ? <PageLoader /> : children;
}


export default App;



