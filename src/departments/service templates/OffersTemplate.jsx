import '../../custom_css/offers.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../components/CartContext';
import { useState } from 'react';
import ServiceForm from '../../components/ServiceForm';
import { Modal } from 'react-bootstrap';

export default function OffersTemplate({ offers }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBookNow = (offer) => {
    setSelectedOffer(offer);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOffer(null);
  };

  const handleAddToCart = (offer) => {
    addToCart(offer);
    navigate('/cart');
  };

  const handleOfferClick = (slug) => {
    navigate(`/service/${slug}`);
  };

  return (
    <div className="offerPage">
      <div className="happysmile-content-wrap container page">
        <div className="col-md-12 order-md-2">
          <div
            className="elementor-element elementor-element-7ae393d4 e-flex e-con-boxed e-con e-parent e-lazyloaded"
            data-id="7ae393d4"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-385db791 e-con-full e-flex e-con e-child"
                data-id="385db791"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-32772b5f e-con-full e-flex e-con e-child"
                  data-id="32772b5f"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-431080b3 elementor-widget elementor-widget-ceaservice"
                    data-id="431080b3"
                    data-element_type="widget"
                    data-widget_type="ceaservice.default"
                  >
                    <div className="elementor-widget-container service-wrapper service-style-classic-pro service-light service-normal-model row">
                      {offers.map((offer) => (
                        <div className="col-lg-4 col-md-4" key={offer.id}>
                          <div className="service-inner">
                            <div className="post-thumb">
                              <a onClick={() => handleOfferClick(offer.slug)} className="post-image-link">
                                <img
                                  decoding="async"
                                  src={offer.image}
                                  title={offer.name}
                                  alt={offer.name}
                                  className="img-fluid squared"
                                />
                              </a>
                            </div>
                            <div className="post-details-outer">
                              <div className="entry-title">
                                <h4 className="post-title-head">
                                  <a onClick={() => handleOfferClick(offer.slug)} className="post-title">
                                    {offer.name}
                                  </a>
                                </h4>
                              </div>
                              <div className="post-excerpt">{offer.description}</div>
                              <div className="offer-price-title">{offer.price} AED</div>
                              <div className="bottom-meta clearfix">
                                <ul className="nav bottom-meta-list meta-left">
                                  <li>
                                    <div className="post-more">
                                      <a
                                        onClick={() => handleBookNow(offer)}
                                        className="read-more elementor-button"
                                      >
                                        {offer.btn_text}
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                                <div className="payNowbtn" onClick={() => handleAddToCart(offer)}>
                                  Pay Now
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    {selectedOffer && (
                      <Modal
                        show={showModal}
                        onHide={closeModal}
                        dialogClassName="my-modal"
                        centered
                      >
                        <Modal.Header closeButton>
                          <div style={{ fontSize: '30px' }}>Book {selectedOffer.name}</div>
                        </Modal.Header>
                        <Modal.Body>
                          <ServiceForm offer={selectedOffer} onClose={closeModal} />
                        </Modal.Body>
                      </Modal>
                    )}
                  </div>
                </div>
                );
}
