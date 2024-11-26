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

Modal.setAppElement('#root'); // For accessibility

function App() {
  return (
    <Router>
      <CartProvider>
        {/* <NavigationWithLoader> */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact_us" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctor" element={<Doctors />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        {/* </NavigationWithLoader> */}
      </CartProvider>
    </Router>
  );
}

// function NavigationWithLoader({ children }) {
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     // Start loader on route change
//     setLoading(true);

//     // Stop loader only after new page finishes rendering
//     const stopLoading = () => setLoading(false);
//     const timeoutId = setTimeout(stopLoading, 2000); // Safety timeout in case of very fast renders

//     return () => clearTimeout(timeoutId); // Cleanup timeout
//   }, [location]);

//   useEffect(() => {
//     const handlePageLoad = () => setLoading(false); // Hide loader when the page finishes rendering

//     // Wait for the browser's rendering cycle to complete
//     requestAnimationFrame(() => {
//       setTimeout(handlePageLoad, 2000); // Add delay to smoothen the loader
//     });

//     return () => {}; // No cleanup needed here
//   }, [loading]);

//   return (
//     <>
//       {loading && <PageLoader />} {/* Show loader while loading */}
//       {!loading && children} {/* Render children after loading */}
//     </>
//   );
// }

export default App;
