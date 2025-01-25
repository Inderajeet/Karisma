import React, { useEffect, useState } from 'react'
import DeptBanner from './deptbanner'
import { useTranslation } from 'react-i18next';
import { fetchAllJson } from '../../utils/fetchAllJson';
import Blog from './blog';
import PointBlog from './point_blog';
import ParaSection from './para_section';

const dept = () => {
     const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
     const { t, ready } = useTranslation();
     const [imageData, setImageData] = useState(null);
     const { addToCart } = useCart();
     const navigate = useNavigate();
 
     const [selectedOffer, setSelectedOffer] = useState(null);
     const [showModal, setShowModal] = useState(false);
 
     useEffect(() => {
         const fetchData = async () => {
           try {
            //  const data = await fetchAboutContent();
             const imageData = await fetchAllJson(); 
            //  setAboutData(data);
             setImageData(imageData);
            //  console.log(data, imageData);
           } catch (err) {
             setError(err.message);
           } finally {
             setLoading(false);
           }
         };
     
         fetchData();
       }, []);
       if (!ready || loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

      const {images} = imageData;
      const title = "Benefits of Dental Implants";
  const description =
    "Dental implants offer a multitude of advantages over traditional bridges and dentures:";
  const benefits = [
    { title: "Enhanced Functionality", description: "Implants function similarly to natural teeth, allowing you to eat, speak, and smile with confidence." },
    { title: "Improved Aesthetics", description: "Implants provide a natural-looking and beautiful smile, boosting your self-esteem." },
    { title: "Durability and Longevity", description: "Implants are highly durable and can last a lifetime with proper care." },
    { title: "Preserves Jawbone Health", description: "Implants stimulate the jawbone, preventing bone loss that often occurs with missing teeth." },
    { title: "Improved Oral Health", description: "Implants prevent neighboring teeth from shifting, promoting overall oral health." },
  ];

  const handleAddToCart = (offer) => {
    addToCart(offer);
    navigate('/cart');
}

const handleOfferClick = (slug) => {
    navigate(`/service/${slug}`);  // Programmatically navigate to the offer details page
  };

 
      const handleBookNow = (offer) => {
          setSelectedOffer(offer);
          setShowModal(true);
      };
  
      const closeModal = () => {
          setShowModal(false);
          setSelectedOffer(null);
      };
  

  return (
    <div>
      <DeptBanner pageName = "Dental" bannerImg = {images.about.visionImg}></DeptBanner>
     
      <Blog
        blogImg={images.about.visionImg}
        blogTitle="The Importance of Self-Care"
        blogDesc="Discover the transformative power of self-care in today's hectic world."
        additionalParagraphs={[
          "Self-care is not just a luxury but a necessity for mental and physical well-being.",
          "Make self-care a priority by scheduling time for yourself every day."
        ]}
        bulletPoints={[ 
          "Boosts mental health",
          "Improves focus and productivity",
          "Reduces stress and anxiety",
          "Enhances physical health"
        ]}
      />
     <PointBlog title={title} description={description} benefits={benefits} />
     <ParaSection title={title} desc={[description]} />;
     <div className="col-lg-4 col-md-4">
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
    </div>
  )
}

export default dept
