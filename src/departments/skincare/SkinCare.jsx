import React from "react";
import "../../custom_css/basicSmile.css";
import HeaderContact from "../../components/headercontact";
import Footer from "../../components/footer";
import HeaderDoctor from "../../components/headerDoctor";
import Services from "../Services";
import Banner from "../../components/Banner";

// Dynamic data for Basic Mo Smile
const basicMoData = {
    title: " Skincare",
    description:
        "At Damas Medical Center, we understand the importance of healthy, beautiful skin. Our dedicated team of dermatologists and skincare professionals offer a comprehensive range of services designed to address your unique needs and reveal your most radiant self.",
    imageUrl:
        "https://damasmc.com/uploads/sub-services/bannerf4de479c04c629da2da7089d093f1edd9374d1c5.jpg",
    section: {
        title: "Empowering Transformation: Discovering the Magic of Effective Skin Care Solutions",
        description:
            "Whether you're seeking a rejuvenating facial, targeting specific concerns, or enhancing your natural beauty, Damas Medical Center has the perfect treatment option for you:",
        features: [
            " Facials and HydraFacial: Experience the revitalizing power of customized facials or the advanced cleansing and hydration of HydraFacial technology for a refreshed and radiant complexion.",
            "Peeling: Gently remove dead skin cells and promote cellular turnover with a variety of peeling solutions, addressing concerns like uneven texture, hyperpigmentation, and fine lines.",
            "Mesotherapy: Deliver a potent cocktail of vitamins, minerals, and hydrating solutions directly into the skin with mesotherapy for enhanced rejuvenation and a youthful glow.",
            "Plasma (PRP) and Stem Cells: Harness the power of your own blood platelets with PRP therapy to stimulate collagen production, and promote natural skin regeneration, while Stem Cells therapy targets the signs of aging and promotes deep skin renewal.",
            "IV Drip Therapy: Nourish your skin from within with a potent blend of vitamins, antioxidants, and essential nutrients delivered directly into your bloodstream through IV drip therapy.",
            "Collagen Threads: Enhance facial structure and definition with minimally invasive collagen threads, stimulating collagen production for a lifted and rejuvenated look",
            "Piercing: Discover a variety of earrings and piercing options in a safe and sterile environment.",
            "Advanced Machines: Experience the transformative power of cutting-edge technology with our advanced skincare machines for targeted treatments and optimal results.",
            "Hair Treatments: Explore a range of hair care solutions to address hair loss, promote growth, and achieve your desired hairstyle goals.",
        ],
    },
    section2: {
        title: "A Gentle Yet Powerful Experience",
        description:
            "A Personalized Journey to Radiant Skin At Damas Medical Center, we prioritize a patient-centered approach:",
        features: [
            "Expert Consultations: Our board-certified dermatologists will conduct a comprehensive consultation to assess your skin health, understand your concerns, and recommend the most suitable treatment options.",
            "Customized Treatment Plans: We create personalized treatment plans tailored to your unique needs and desired outcomes, ensuring optimal results.",
            "Advanced Technology and Expertise: Our skilled professionals utilize cutting-edge technology and their expertise to deliver effective and comfortable treatments",
        ],
    },
    section3: {
        title: "Embrace Your Inner Radiance",
        description: "Let Karisma Medical Center help you achieve your skincare goals. Contact us today to schedule a consultation with our experts and explore a world of possibilities for your most radiant and beautiful skin.",
    },
};

const Skincare = () => {
    const skincareOffers = [
        {
            id: 1,
            name: 'Basic MO Premium Smile',
            description: 'Premium (Basic MO), where Simplicity Meets Affordability',
            image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-1.webp',
            slug: 'basic-mo-premium-smile',
            price: 1799,
            btn_text: 'Book An Appointment',
            vat: 0,
        },
        {
            id: 2,
            name: 'Carbon Laser or Lip Pinking Or Magic Facial',
            description: 'Unveiling the Power of Our Facials',
            image: 'https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/services-7.webp',
            price: 180,
            btn_text: 'Book An Appointment',
        },
    ];

    return (
        <>
            <Banner></Banner>

            <div className="happysmile-content-wrap container page">
                {/* Main Heading */}
                <div style={{marginLeft:"20px", marginRight:"20px"}}>
                    <div className="cust-mainHead">
                        <h1 className="cust-head">{basicMoData.title}</h1>
                    </div>

                    {/* Main Description */}
                    <div>{basicMoData.description}</div>

                    {/* Image Section */}
                    <div className="imgBx">
                        <img
                            src={basicMoData.imageUrl}
                            alt={basicMoData.title}
                            loading="lazy"
                            className="lazy"
                        />
                    </div>

                    {/* Subheading and Features */}
                    <CustSection
                        title={basicMoData.section.title}
                        description={basicMoData.section.description}
                        features={basicMoData.section.features}
                    />

                    {/* Two-Column Section */}
                    {/* <div className="flxBx">
                    {basicMoData.cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} features={card.features} />
                    ))}
                </div> */}
                    <CustSection
                        title={basicMoData.section2.title}
                        description={basicMoData.section2.description}
                        features={basicMoData.section2.features}
                    />
                    <CustSection
                        title={basicMoData.section3.title}
                        description={basicMoData.section3.description}
                        features={basicMoData.section3.features}
                    />
                </div>
                <Services offersData={skincareOffers} />
            </div>
            <Footer></Footer>
        </>
    );
};

// Reusable Section Component
const CustSection = ({ title, description, features }) => (
    <div className="custsectionStyle">
        <div className="cmnTitle">{title}</div>
        <div>{description}</div>
        {features && (
            <div className="featuresContainer">
                {features.map((feature, index) => (
                    <div key={index} className="featureItem">
                        <strong>{feature.split(":")[0]}</strong>: {feature.split(":")[1]}
                    </div>
                ))}
            </div>
        )}
    </div>
);


// Reusable Card Component
const Card = ({ title, description, features }) => (
    <div className="custitem">
        <div className="cmnBox">
            <div className="cmnTitle">{title}</div>
            {description && <div>{description}</div>}
            {features && (
                <div className="featuresContainer">
                    {features.map((feature, index) => (
                        <div key={index} className="featureItem">
                            <strong>{feature.split(":")[0]}</strong>: {feature.split(":")[1]}
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);


export default Skincare;
