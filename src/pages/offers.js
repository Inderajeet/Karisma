import '.././custom_css/offers.css';
import '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import Footer from '../components/footer';
import HeaderContact from '../components/headercontact';
import PageLoader from '../components/PageLoader';

export default function Offers() {
 
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const offersData = [
        {
            id: 1,
            name: 'Scaling and Root Planing',
            description: 'We Create Beautiful Smiles Lorem ipsum dolor sit amet consectetur. Eget..',
            image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-1.webp',
            link: "https://wordpress.zozothemes.com/happysmile/service/scaling-and-root-planing/",
            price: 1799,
            btn_text: 'Read More',
            vat: 0,
        }, {
            id: 2,
            name: 'Teeth Whitening',
            description: 'We Create Beautiful Smiles Lorem ipsum dolor sit amet consectetur. Eget..',
            image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-9.webp',
            link: "https://wordpress.zozothemes.com/happysmile/service/teeth-whitening/",
            price: 1799,
            btn_text: 'Read More',
        }, {
            id: 3,
            name: 'Invisalign & ClearCorrect',
            description: 'We Create Beautiful Smiles Lorem ipsum dolor sit amet consectetur. Eget..',
            image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-6.webp',
            link: "https://wordpress.zozothemes.com/happysmile/service/invisalign-clearcorrect/",
            price: 1799,
            btn_text: 'Read More',
        }, {
            id: 4,
            name: 'Zirconium Crowns',
            description: 'We Create Beautiful Smiles Lorem ipsum dolor sit amet consectetur. Eget..',
            image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-2.webp',
            link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
            price: 1799,
            btn_text: 'Read More',
        }, {
            id: 5,
            name: 'Partials & Dentures',
            description: 'We Create Beautiful Smiles Lorem ipsum dolor sit amet consectetur. Eget..',
            image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-4.webp',
            link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
            price: 1799,
            btn_text: 'Read More',
        }, {
            id: 6,
            name: 'Wisdom Tooth Extraction',
            description: 'We Create Beautiful Smiles Lorem ipsum dolor sit amet consectetur. Eget..',
            image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
            link: "https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/",
            price: 1799,
            btn_text: 'Read More',
        },
    ];

    const handleAddToCart = (offer) => {
        addToCart(offer);
        navigate('/cart');
    }

    return (
        <>
            <HeaderContact></HeaderContact>
            {/* <main id="site-content"> */}
            <div className='offerPage'>
                <div className="happysmile-content-wrap container page ">
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
                                                                        href={offer.link}
                                                                        className="post-image-link"
                                                                    >
                                                                        <img
                                                                            decoding="async"
                                                                            src={offer.image}
                                                                            title={offer.name}
                                                                            alt={offer.name}
                                                                            className="img-fluid squared"
                                                                        />
                                                                    </a>
                                                                </div>
                                                                {/* .post-thumb */}

                                                                <div className="post-details-outer">
                                                                    <div className="entry-title">
                                                                        <h4 className="post-title-head">
                                                                            <a
                                                                                href="https://wordpress.zozothemes.com/happysmile/service/scaling-and-root-planing/"
                                                                                className="post-title"
                                                                            >
                                                                                {offer.name}
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    {/* .entry-title */}
                                                                    <div className="post-excerpt">
                                                                        {offer.description}
                                                                    </div>
                                                                    {/* .post-excerpt */}
                                                                    <div className="bottom-meta clearfix">
                                                                        <ul className="nav bottom-meta-list meta-left">
                                                                            <li>
                                                                                <div className="post-more">
                                                                                    <a
                                                                                        href="https://wordpress.zozothemes.com/happysmile/service/scaling-and-root-planing/"
                                                                                        className="read-more elementor-button"
                                                                                    >
                                                                                        {offer.btn_text}
                                                                                    </a>
                                                                                </div>
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
                                    </div>
                                </div>
                            </div>
                            {/* .post */}
                        </div>
                        {/* .col */}
                    </div>
                    {/* .row */}
                </div>
                {/* .container */}
                {/* </main> */}
            </div>
            <Footer></Footer>
        </>

    );
}