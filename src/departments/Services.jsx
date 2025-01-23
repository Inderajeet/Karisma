import '.././custom_css/offers.css';
import '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { useState } from 'react';
import ServiceForm from '../components/ServiceForm';
import { Modal, Button } from 'react-bootstrap';

const Services = ({ offersData }) => {

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

    // const offersData = [
    //     {
    //         id: 1,
    //         name: 'Basic MO Premium Smile',
    //         description: 'Premium (Basic MO), where Simplicity Meets Affordability',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-1.webp',
    //         slug: 'basic-mo-premium-smile',
    //         price: 1799,
    //         btn_text: 'Book An Appointment',
    //         vat: 0,
    //     }, {
    //         id: 2,
    //         name: 'G-Glass',
    //         description: 'We offering our patients the most advanced and exceptional dental solutions.',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-9.webp',
    //         slug: 'gc-snow-white-hollywood-smile',
    //         price: 4500,
    //         btn_text: 'Book An Appointment',
    //     }, {
    //         id: 3,
    //         name: 'Zircon Smile',
    //         description: 'Embrace Unmatched Strength with Stunning Clarity',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-6.webp',
    //         slug: 'zircon-hollywood-smile',
    //         price: 6999,
    //         btn_text: 'Book An Appointment',
    //     }, {
    //         id: 4,
    //         name: 'Ortho',
    //         description: 'We understand the transformative power of a smile.',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-2.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 499,
    //         btn_text: 'Book An Appointment',
    //     }, {
    //         id: 5,
    //         name: 'SP',
    //         description: 'Looking for a permanent solution to missing or damaged teeth?',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-4.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 99,
    //         btn_text: 'Book An Appointment',
    //     }, {
    //         id: 6,
    //         name: 'Botox',
    //         description: 'Beyond Wrinkles at Damas Medical Center',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 349,
    //         btn_text: 'Book An Appointment',
    //     }, {
    //         id: 7,
    //         name: 'Filler',
    //         description: 'Explore the World of Dermal Fillers at Damas Medical Center',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 349,
    //         btn_text: 'Book An Appointment',
    //     }, {
    //         id: 8,
    //         name: 'Botox + Filler',
    //         description: 'Versatility of Botox: Beyond Wrinkles at Damas Medical Center',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 653,
    //         btn_text: 'Book An Appointment',
    //     }, {
    //         id: 9,
    //         name: 'Candela',
    //         description: 'Delivers comfortable treatment with integrated cooling technology.',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 180,
    //         btn_text: 'Book An Appointment',
    //     },{
    //         id: 10,
    //         name: 'Cynosure',
    //         description: 'The Cynosure Elite+ is a powerful laser system featuring a long-pulse',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 180,
    //         btn_text: 'Book An Appointment',
    //     },{
    //         id: 11,
    //         name: 'Beard Laser',
    //         description: 'Revolutionary Approach to Hair Removal',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 180,
    //         btn_text: 'Book An Appointment',
    //     },{
    //         id: 12,
    //         name: 'HydraFacial',
    //         description: 'Discover the Power of Facials and HydraFacial',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         slug:'basic-hydrafacial',
    //         price: 180,
    //         btn_text: 'Book An Appointment',
    //     },{
    //         id: 13,
    //         name: 'Carbon Laser or Lip Pinking Or Magic Facial',
    //         description: 'Unveiling the Power of Our Facials',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 180,
    //         btn_text: 'Book An Appointment',
    //     },{
    //         id: 14,
    //         name: 'Meso Fat Tummy',
    //         description: 'Stubborn fat deposits can be a roadblock on the path to achieving your aesthetic goals.',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         slug: 'meso-fat-injections',
    //         price: 180,
    //         btn_text: 'Book An Appointment',
    //     },{
    //         id: 15,
    //         name: 'V. Filler',
    //         description: 'Enhance Your Intimacy with Vaginal Fillers',
    //         image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
    //         link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
    //         price: 180,
    //         btn_text: 'Book An Appointment',
    //     },
    // ];

    const handleAddToCart = (offer) => {
        addToCart(offer);
        navigate('/cart');
    }
    
    const handleOfferClick = (slug) => {
        navigate(`/service/${slug}`);  // Programmatically navigate to the offer details page
      };

    return (
        <>
            {/* <main id="site-content"> */}
            <div>
                {/* <div className="happysmile-content-wrap container page "> */}
                    <div className="">
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
                                                    {offersData.map((offer) => (
                                                        <div className="col-lg-4 col-md-4" key={offer.id}>
                                                            <div className="service-inner">
                                                                <div className="post-thumb">
                                                                    <a
                                                                        onClick={() => handleOfferClick(offer.slug)}
                                                                        className="post-image-link"
                                                                    >
                                                                    {/* <Link to={`/offers/${offer.slug}`}> */}
                                                                        <img
                                                                            decoding="async"
                                                                            src={offer.image}
                                                                            title={offer.name}
                                                                            alt={offer.name}
                                                                            className="img-fluid squared"
                                                                        />
                                                                        {/* </Link> */}
                                                                    </a>
                                                                </div>
                                                                {/* .post-thumb */}

                                                                <div className="post-details-outer">
                                                                    <div className="entry-title">
                                                                        <h4 className="post-title-head">
                                                                            <a
                                                                                onClick={() => handleOfferClick(offer.slug)}
                                                                                className="post-title"
                                                                            >
                                                                             {/* <Link to={`/offers/${offer.slug}`} className="post-title"> */}
                                                                            {offer.name}
                                                                            </a>
                                                                            {/* </Link> */}
                                                                        </h4>
                                                                        
                                                                    </div>
                                                                    {/* .entry-title */}
                                                                    <div className="post-excerpt">
                                                                        {offer.description}
                                                                    </div>
                                                                    <div className='offer-price-title'>{offer.price} AED</div>
                                                                    {/* .post-excerpt */}
                                                                    <div className="bottom-meta clearfix">
                                                                        <ul className="nav bottom-meta-list meta-left">
                                                                            <li>

                                                                                <div className="post-more" key={offer.id}>
                                                                                    <a
                                                                                        onClick={() => handleBookNow(offer)}
                                                                                        // href="https://wordpress.zozothemes.com/happysmile/service/scaling-and-root-planing/"
                                                                                        className="read-more elementor-button"
                                                                                    >
                                                                                        {offer.btn_text}
                                                                                    </a>
                                                                                </div>

                                                                                {/* {selectedOffer && (
                                                                                    <ServiceForm offer={selectedOffer} onClose={closePopup} />
                                                                                )} */}
                                                                            </li>
                                                                        </ul>
                                                                        <div className='payNowbtn' onClick={() => handleAddToCart(offer)}>
                                                                            Pay Now
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* .post-details-outer */}
                                                            </div>
                                                            {/* .service-inner */}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {selectedOffer && (
                                            <Modal
                                                show={showModal}
                                                onHide={closeModal}
                                                dialogClassName="my-modal"
                                                centered
                                                aria-labelledby="example-custom-modal-styling-title"
                                            >
                                                <Modal.Header closeButton>
                                                    <div style={{ fontSize: '30px', margin: '8px 0' }}>Book {selectedOffer.name}</div>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <ServiceForm offer={selectedOffer} onClose={closeModal} />
                                                </Modal.Body>
                                            </Modal>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* .post */}
                        </div>
                        {/* .col */}
                    </div>
                    {/* .row */}
                {/* </div> */}
                {/* .container */}
                {/* </main> */}
            </div>

        </>

    );
}

export default Services;