import React from "react";
import "../../../custom_css/basicSmile.css";
import HeaderContact from "../../components/headercontact";
import Footer from "../../components/footer";
import HeaderDoctor from "../../components/headerDoctor";

// Dynamic data for Basic Mo Smile
const basicMoData = {
    title: "Bubble Facial",
    description:
        "Discover the Power of Bubbles for Radiant Skin",
    imageUrl:
        "https://damasmc.com/uploads/sub-services/bannerf4de479c04c629da2da7089d093f1edd9374d1c5.jpg",
    section: {
        title: "Discover the Power of Bubbles for Radiant Skin",
        description:
            "At Karisma Specialist Medical Center, we bring you the Bubble Facial, an innovative and refreshing treatment designed to deeply cleanse, oxygenate, and revitalize your skin. Infused with gentle, oxygenating bubbles, this luxurious experience leaves your complexion clear, smooth, and glowing.",
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
            title: "How the Bubble Facial Works",
            subtitle: "Gentle Cleansing",
            description:
            "The treatment begins with a thorough yet gentle cleanse, removing makeup, dirt, and surface impurities without stripping essential moisture.",
            subtitle2: "Oxygenating Bubbles",
            description2: "A specialized mask releases a cascade of oxygen-rich bubbles that offer multiple benefits:",
            features: [
                "Exfoliation: Bubbles gently break down and lift away dead skin cells, revealing a fresh, radiant layer of skin.",
                "Deep Pore Cleansing: The bubbles penetrate deep into pores, dissolving dirt and oil to minimize their appearance and prevent future breakouts.",
                "Oxygenation: Oxygen boosts collagen production, enhancing skin plumpness and promoting a youthful glow.",
                "Nutrient Delivery: Oxygenated bubbles help transport essential nutrients deeper into the skin for optimal results.",
            ],
        },
        {
            title: "Benefits of the Bubble Facial",
            description: "The Basic HydraFacial is ideal for those seeking:",
            features: [
                "Deep Cleanse: Enjoy a thorough cleanse that leaves skin fresh and free of impurities.",
                "Minimized Pores: Notice visibly refined, tightened pores and reduced blackheads.",
                "Breakout Prevention: Keep your complexion clear by preventing future blemishes.",
                "Hydrated Glow: Experience a boost in hydration and a luminous, refreshed appearance.",
                "Enhanced Product Absorption: Post-treatment, your skin is more receptive to other skincare products, maximizing their efficacy.",
            ],
        },
    ],
    section2: {
        title: "A Gentle Yet Powerful Experience",
        description:
            "The Bubble Facial is suitable for most skin types, offering gentle care with powerful results. However, a consultation with our experts ensures the treatment is tailored to your needs.",
    },
    section3: {
        title: "Precautions to Consider",
        features: [
            "Sensitive Skin: Consult our experts if you have very sensitive skin to ensure the treatment is appropriate.",
            "Allergies: Discuss any known ingredient sensitivities with our team to avoid reactions. A patch test may be recommended.",
            "Sunburn: Wait until sunburn heals before booking to avoid irritation.",
            "Open Wounds or Skin Conditions: Avoid treatment if you have active skin issues such as rashes or open wounds.",
        ],
    },
    section4: {
        title: "Achieve Radiant, Healthy Skin",
        description:
            "Glow Effortlessly Revel in the gentle power of the Bubble Facial at Karisma Specialist Medical Centerand let your skin shine with renewed clarity and radiance.",
    },
};

const BubbleFacial = () => {
    return (
        <>

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
                    // features={basicMoData.section.features}
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


export default BubbleFacial;
