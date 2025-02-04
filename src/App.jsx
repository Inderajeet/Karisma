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
// import Doctor1 from './pages/doctors/doctor_1';
import HydraFacial from './departments/skincare/facial/hydrafacial';
import Skincare from './departments/skincare/SkinCare';
import SampleHeader from './components/Sample';
import Footer from './components/footer';
import SampleHeader2 from './components/SampleHead';
import TopBar from './components/TopBar';
import DoctorPage from './pages/doctors/doctor_1';
import Dept from './pages/departments';
import Dental from './pages/departments/dental';
import Veneers from './pages/departments/veneers';
import Implant from './pages/departments/implant';
import Orthodontics from './pages/departments/orthodontics';
import Gynecology from './pages/departments/gynecology';
import Services from './departments/Services';
import ServiceTemplate from './departments/service templates/ServiceTemplate';
import ServiceList from './departments/service templates/ServiceList';
import GynecologyServices from './departments/gyne/GynecologyServices';
import TeethWhitening from './pages/departments/teethWhitening';
import MouthRehabilitation from './pages/departments/mouthRehab';
import RootCanal from './pages/departments/rootCanal';
import Pediatric from './pages/departments/pediatric';
import DentalSurgery from './pages/departments/dentalSurgery';
import OralHealth from './pages/departments/oralHealth';
import RestorativeDentistry from './pages/departments/restorativeDentistry';
import Slimming from './pages/departments/slimming';
import Machines from './pages/departments/machines';
import Injections from './pages/departments/injections';
import SlimmingOtherServices from './pages/departments/slimming_other_service';
import LaserHair from './pages/departments/laserHair';
import Candela from './pages/departments/candela';
import Revlite from './pages/departments/revlite';
import Elite from './pages/departments/elite';
import DermaFiller from './pages/departments/dermaFiller';
import BodyFiller from './pages/departments/bodyFiller';


Modal.setAppElement('#root'); // For accessibility

function LanguageWrapper() {
  const { lng } = useParams(); // Extract language from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if (!['en', 'ar'].includes(lng)) {
      navigate(`/en`, { replace: true }); // Redirect to fallback language if not supported
    } else {
      i18n.changeLanguage(lng); // Update i18n language
    }
  }, [lng, navigate]);

  return (
    <>
      {/* <SampleHeader /> */}
      {/* <SampleHeader2 /> */}
      <TopBar />
      <CartProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="contact_us" element={<ContactPage />} />
          <Route path="about_us" element={<About />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="offers" element={<Offers />} />
          <Route path="service/:slug" element={<OfferDetails />} />
          {/* <Route path="services" element={<ServiceTemplate/>} /> */}
          <Route path="service" element={<Services/>} />
          <Route path="/services" element={<ServiceList />} />
        <Route path="/services/:serviceName" element={<ServiceTemplate />} />
        <Route path="/gyne-services/:serviceName" element={<GynecologyServices />} />
        
          {/* <Route path="skincare" element={<Skincare/>} /> */}
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/doctor/:doctorName" element={<DoctorPage/>} />
          {/* <Route path="doctor-1" element={<Doctor1 />} /> */}
          <Route path="skincare" element={<Skincare />} />
          <Route path="service/hydra-facial" element={<HydraFacial />} />
          <Route path="dept/dental" element={<Dept />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/veneers" element={<Veneers />} />
          <Route path="/implant" element={<Implant />} /> 
          <Route path="/orthodontics" element={<Orthodontics />} />    
          <Route path="/teeth-whitening" element={<TeethWhitening />} />  
          <Route path="/mouth-rehabilitation" element={<MouthRehabilitation />} /> 
          <Route path="/root-canal" element={<RootCanal />} />
          <Route path="/pediatric" element={<Pediatric />} />
          <Route path="/dental-surgery" element={<DentalSurgery />} />
          <Route path="/oral-health" element={<OralHealth />} />
          <Route path="/restorative-dentistry" element={<RestorativeDentistry />} />
          <Route path="/gynecology" element={<Gynecology />} />
          <Route path="/slimming" element={<Slimming />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/injections" element={<Injections />} />
          <Route path="/slimming/other-services" element={<SlimmingOtherServices />} />
          <Route path="/laser-hair" element={<LaserHair />} />
          <Route path="/laser-hair/candela" element={<Candela />} />
          <Route path="/laser-hair/revlite" element={<Revlite />} />
          <Route path="/laser-hair/elite" element={<Elite />} />
          <Route path="/derma/derma-filler" element={<DermaFiller />} />
          <Route path="/derma/body-filler" element={<BodyFiller />} />
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

function NavigationWithLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handlePageLoad = () => setLoading(false);

    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  useEffect(() => {
    setLoading(true);

    const stopLoading = () => setLoading(false);
    const timeoutId = setTimeout(stopLoading, 2000);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <>
      {loading && <PageLoader />} {/* Show loader */}
      {!loading && children} {/* Render content */}
    </>
  );
}

export default App;
 


