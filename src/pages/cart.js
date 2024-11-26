import React from "react";
import { useCart } from "../components/CartContext";
import "../custom_css/cart.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import HeaderContact from "../components/headercontact";
import { useEffect } from "react";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((total, offer) => total + offer.price, 0);

  const vat = 0; // Adjust VAT as needed
  const totalAmount = subtotal + subtotal * vat;

  return (
    <>
    <HeaderContact></HeaderContact>
      <div className="cart">
        <div className="happysmile-content-wrap container page">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://damasmc.com/images/empty-cart.png" // Replace with your cart image URL
              alt="Empty Cart"
              className="empty-cart-image"
            />
            <p className="cart-description">Your cart is empty!</p>
            <button
              className="go-to-offers-btn"
              onClick={() => navigate("/offers")}
            >
              Go to Offers
            </button>
          </div>
        ) : (
          <div className="cart-details-container">
            <div className="dynamic-cart">
              {cartItems.map((offer) => (
                <div className="cart-info" key={offer.id}>
                  <button
                    className="close-btn"
                    onClick={() => removeFromCart(offer.id)}
                  >
                    X
                  </button>
                  <div className="cart-image">
                    <img src={offer.image} alt={offer.name} />
                  </div>
                  <div className="cart-content">
                    <h2 className="cart-title">{offer.name}</h2>
                    <p className="cart-description">{offer.description}</p>
                    <div className="cart-price">
                      <span>Price: </span>
                      <span>{offer.price}AED</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
            {cartItems.length > 0 && (
              <div className="price-summary">
                <h3>Summary</h3>
                <div className="summary-item">
                  <span>Subtotal:</span>
                  <span>AED {subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span>VAT (0%):</span>
                  <span>AED {(subtotal * vat).toFixed(2)}</span>
                </div>
                <div className="summary-item total">
                  <span>Total:</span>
                  <span>AED {totalAmount.toFixed(2)}</span>
                </div>
                <button
                  className="go-to-offers-btn"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>
              </div>

            )}

          </div>
        )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
