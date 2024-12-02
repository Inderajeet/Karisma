import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './pages/contact_us';
import Index from './pages/index';
import About from './pages/about';
import Doctors from './pages/doctor';
import { CartProvider } from './components/CartContext';
import Offers from './pages/offers';
import Cart from './pages/cart';
import PageLoader from "./components/PageLoader";
import Checkout from './components/Checkout';
import OfferDetails from './components/OfferDetails';

Modal.setAppElement('#root'); // For accessibility

function App() {
  return (
    <Router>
      <CartProvider>
        <NavigationWithLoader>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact_us" element={<ContactPage />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/doctor" element={<Doctors />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/service/:slug" element={<OfferDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </NavigationWithLoader>
      </CartProvider>
    </Router>
  );
}

function NavigationWithLoader({ children }) {
  const [loading, setLoading] = useState(true); // Start with loading
  const location = useLocation();

  useEffect(() => {
    const handlePageLoad = () => setLoading(false); // Hide loader when everything is loaded

    // Add an event listener for the window load event
    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('load', handlePageLoad); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    setLoading(true); // Show loader on route change

    // Simulate a smoother transition while React renders
    const stopLoading = () => setLoading(false);
    const timeoutId = setTimeout(stopLoading, 2000); // Safety timeout in case resources load too fast

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, [location]);

  return (
    <>
      {loading && <PageLoader />} {/* Show loader until everything is loaded */}
      {!loading && children} {/* Render children when loading is complete */}
    </>
  );
}

export default App;
