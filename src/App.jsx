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
import LaserServices from './departments/laser/LaserServices';
import SkinCareServices from './departments/skincare/SkinCareServices';
import SkinCareRelatedServices from './departments/skincare/SkinCareRelatedServices';
import FooterServices from './components/FooterServices';

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
import SlimmingRelatedServices from './departments/slimming/SlimmingRelatedServices';
import TreatmentImages from './departments/service templates/TreatmentImages';
import SkincareGp from './pages/departments/skinCare';
import Derma from './pages/departments/derma';
import CosmeticThreads from './pages/departments/cosmeticThreads';
import Botox from './pages/departments/botox';
import Rejuvenation from './pages/departments/rejuvenation';
import DermaRelatedServices from './departments/derma/DermaRelatedServices';
import PlasticSurgery from './pages/departments/plasticSurgery';
import SlimmingServices from './departments/slimming/SlimmingServices';
import DermaServices from './departments/derma/DermaServices';
import DentalServices from './departments/dental/DentalServices';
import Departments from './departments/Departments';


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
          <Route path="service" element={<Services />} />
          <Route path="/services" element={<ServiceList />} />
          <Route path="/services/:serviceName" element={<ServiceTemplate />} />
          <Route path="/gynecology/:serviceName" element={<GynecologyServices />} />
          <Route path="/laser-hair-removal/:serviceName" element={<LaserServices />} />
          <Route path="/skinCare/:serviceName" element={<SkinCareServices />} />
          <Route path="/slimming/:serviceName" element={<SlimmingServices />} />
          <Route path="/derma/:serviceName" element={<DermaServices />} />
          <Route path="/:deptName" element={<Departments />} />
          <Route path="/skinCare/:serviceName/:subService" element={<SkinCareRelatedServices />} />
          <Route path="/slimming/:serviceName/:subService" element={<SlimmingRelatedServices />} />
          <Route path="/derma/:serviceName/:subService" element={<DermaRelatedServices />} />
          <Route path="/dental/:serviceName" element={<DentalServices />} />
          <Route path="/:serviceName" element={<FooterServices />} />  
          <Route path="/treatments" element={<TreatmentImages />} />  

          {/* <Route path="skincare" element={<Skincare/>} /> */}
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/doctor/:doctorName" element={<DoctorPage />} />
          {/* <Route path="doctor-1" element={<Doctor1 />} /> */}
          {/* <Route path="dept/dental" element={<Dept />} /> */}
          {/* <Route path="/dental" element={<Dental />} /> */}
          {/* <Route path="/dental/veneers" element={<Veneers />} /> */}
          {/* <Route path="/dental/implant" element={<Implant />} />
          <Route path="/dental/orthodontics" element={<Orthodontics />} />
          <Route path="/dental/implant" element={<Implant />} /> 
          <Route path="/dental/orthodontics" element={<Orthodontics />} />    
          <Route path="/dental/teeth-whitening" element={<TeethWhitening />} />  
          <Route path="/dental/mouth-rehabilitation" element={<MouthRehabilitation />} /> 
          <Route path="/dental/root-canal" element={<RootCanal />} />
          <Route path="/dental/pediatric" element={<Pediatric />} />
          <Route path="/dental/dental-surgery" element={<DentalSurgery />} />
          <Route path="/dental/oral-health" element={<OralHealth />} />
          <Route path="/dental/restorative-dentistry" element={<RestorativeDentistry />} /> */}
          {/* <Route path="/gynecology" element={<Gynecology />} />
          <Route path="/slimming" element={<Slimming />} /> */}
          {/* <Route path="/slimming/machines" element={<Machines />} /> */}
          {/* <Route path="/slimming/injections" element={<Injections />} /> */}
          {/* <Route path="/slimming/machines" element={<Machines />} /> */}
          {/* <Route path="/slimming/injections" element={<Injections />} /> */}
          {/* <Route path="/slimming/other-services" element={<SlimmingOtherServices />} /> */}
          {/* <Route path="/laser-hair" element={<LaserHair />} />
          <Route path="/laser-hair/candela" element={<Candela />} />
          <Route path="/laser-hair/revlite" element={<Revlite />} />
          <Route path="/laser-hair/elite" element={<Elite />} /> */}

          {/* <Route path="/derma" element={<Derma />} /> */}
          {/* <Route path="/derma/derma-filler" element={<DermaFiller />} /> */}
          {/* <Route path="/derma/body-filler" element={<BodyFiller />} /> */}
          {/* <Route path="/skincare" element={<SkincareGp />} /> */}
          {/* <Route path="/derma/cosmetic-threads" element={<CosmeticThreads />} /> */}
          {/* <Route path="/derma/botox" element={<Botox />} /> */}
          {/* <Route path="/derma/rejuvenation" element={<Rejuvenation />} /> */}
          {/* <Route path="/plastic-surgery" element={<PlasticSurgery />} /> */}
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



