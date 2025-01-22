import React from "react";
import "../../../custom_css/basicSmile.css";
import HeaderContact from "../../../components/headercontact";
import Footer from "../../../components/footer";
import HeaderDoctor from "../../../components/headerDoctor";

// Dynamic data for Basic Mo Smile
const basicMoData = {
    title: "Basic HydraFacial",
    description:
        "German lenses (German ceramics) are one of the most common types of veneers, offering a range of types to suit different preferences and budgets.",
    imageUrl:
        "https://damasmc.com/uploads/sub-services/bannerf4de479c04c629da2da7089d093f1edd9374d1c5.jpg",
    section: {
        title: "A Refreshing Foundation for Radiant Skin",
        description:
            "At Karisma, our Basic HydraFacial is designed to cleanse, hydrate, and rejuvenate your skin, making it the perfect introduction to advanced skincare.",
        // features: [
        //     "Classic Elegance: These veneers boast a single, timeless color layer for a natural and sophisticated aesthetic.",
        //     "Improved Oral Health: Proper veneer care encourages regular cleaning and maintenance, promoting overall oral health.",
        //     "Budget-Friendly Choice: Basic MO veneers are an accessible option for those seeking a smile enhancement within their own budget.",
        //     "Long-lasting Confidence: Enjoy a lifetime warranty on shade and stain resistance* (with regular cleaning and polishing at Damas Medical Center 3-4 times a year).",
        //     "Extend Your Warranty: For ultimate peace of mind, consider our optional 11-month extended breakage warranty for an additional fee.",
        // ],
    },
    cards: [
        {
            title: "Benefits of a Basic HydraFacial",
            description:
            "This foundational treatment delivers multiple benefits, catering to all skin types:",
            features: [
                "Deep Cleansing & Exfoliation: The HydraFacial machines gently removes impurities, including blackheads, whiteheads, excess oil, and dead skin cells, leaving your complexion refreshed and renewed.",
                "Enhanced Absorption: By clearing away surface debris, the treatment primes your skin for maximum absorption of nourishing serums and skincare products.",
                "Hydration Boost: A soothing application of hydrating products restores moisture, leaving your skin plump and healthy-looking.",
                "Versatility: Gentle yet effective, this treatment suits all skin types, offering a revitalizing cleanse for everyone.",
            ],
        },
        {
            title: "Who Can Benefit?",
            description: "The Basic HydraFacial is ideal for those seeking:",
            features: [
                "Clearer Skin: Effectively addresses clogged pores and removes blemishes.",
                "Detoxification: Eliminates impurities for a fresh, revitalized appearance.",
                "Skincare Enhancement:Prepares your skin for better absorption of products, enhancing your daily routine results.",
                "Overall Glow: Promotes skin health and radiance through deep cleansing and hydration.",
            ],
        },
    ],
    section2: {
        title: "Unlocking Advanced Results",
        description:
            "Combine the Basic HydraFacial with other treatments for even more dramatic results:",
        features: [
            "Dermapen: Boost collagen production and improve product penetration with microneedling.",
            "Mesotherapy: Infuse the skin with a potent blend of vitamins and hydrating solutions for enhanced rejuvenation.",
            "Stem Cell Therapy: Explore cutting-edge stem cell treatments for deep renewal and anti-aging effects (consultation required).",
        ],
    },
    section3: {
        title: "Important Considerations",
        description:
            "While the Basic HydraFacial is generally safe for most, it may not be suitable for those with:",
        features: [
            "Active Acne: Wait until breakouts subside to prevent irritation or infection. Our experts can recommend alternative treatments tailored to your skin’s condition.",
            "Mesotherapy: Infuse the skin with a potent blend of vitamins and hydrating solutions for enhanced rejuvenation.",
            "Stem Cell Therapy: Explore cutting-edge stem cell treatments for deep renewal and anti-aging effects (consultation required).",
        ],
    },
    section4: {
        title: "Achieve Radiant, Healthy Skin",
        description:
            "Book your consultation at Karisma today, and let our experts help you achieve your skincare goals with a customized HydraFacial experience.",
    },
};

const HydraFacial = () => {
    return (
        <>
            <HeaderDoctor />

            <div className="container">
                {/* Main Heading */}
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
                <div className="flxBx">
                    {basicMoData.cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} features={card.features} />
                    ))}
                </div>
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
                <CustSection 
                    title={basicMoData.section4.title}
                    description={basicMoData.section4.description}
                />
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


export default HydraFacial;
