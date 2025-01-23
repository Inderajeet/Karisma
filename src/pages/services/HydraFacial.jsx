import React from "react";
import "../../custom_css/basicSmile.css";
import HeaderContact from "../../components/headercontact";
import Footer from "../../components/footer";

// Dynamic data for Basic Mo Smile
const basicMoData = {
    title: "Basic HydraFacial",
    // description:
    //     "German lenses (German ceramics) are one of the most common types of veneers, offering a range of types to suit different preferences and budgets.",
    imageUrl:
        "https://damasmc.com/uploads/sub-services/bannerf4de479c04c629da2da7089d093f1edd9374d1c5.jpg",
    section: {
        title: "Benefits of a Basic HydraFacial",
        description:
            "This foundational treatment offers a range of benefits for all skin types:",
        features: [
            "Deep Cleanse and Exfoliation: Utilizing a specialized HydraFacial device, the Basic HydraFacial gently removes impurities like blackheads, whiteheads, excess oil, and dead skin cells, leaving your skin feeling refreshed and renewed.",
            "Enhanced Absorption: By removing surface debris, the Basic HydraFacial prepares your skin for optimal absorption of nourishing ingredients and serums applied during the treatment and in your skincare routine.",
            "Hydration Boost: The treatment includes the application of moisturizing and nourishing products, promoting a plump, healthy complexion.",
            "Versatile Treatment: Suitable for all skin types, the Basic HydraFacial offers a gentle yet effective cleansing experience.",
            ],
    },
    cards: [
        {
            title: "Who Can Benefit?",
            description: "The Basic HydraFacial is a perfect starting point for anyone seeking:",
            features: [
                "Blackhead and Whitehead Removal: Address clogged pores and blemishes for a clearer, more refined appearance.",
                "Detoxification: Gently remove impurities and excess oil, leaving your skin feeling refreshed and revitalized.",
                "Skin Preparation:Enhance the effectiveness of your skincare routine by creating a clean canvas for optimal product absorption.",
                "Overall Skin Health: Promote a healthy, radiant complexion with a deep cleanse and hydration boost.",
            ],
        },
        {
            title: "Unlocking Further Potential",
            description:
                "The Basic HydraFacial can be a foundation for achieving even more dramatic results when combined with other treatments:",
            features: [
                "Dermapen: Microneedling with Dermapen can further stimulate collagen production and improve product absorption.",
                "Mesotherapy: Deliver a potent cocktail of vitamins, minerals, and hydrating solutions directly into the skin for enhanced rejuvenation.",
                "Stem Cell Sessions: Explore the potential of stem cell therapy to address signs of aging and promote deep skin renewal (Disclaimer: Consult with our experts to understand the current research and suitability for your needs).",
                ],
        },
    ],
    precaution:{
        description: "Precautions: While generally safe for most skin types, the Basic HydraFacial is not recommended for individuals with active acne:",
        features: [
            "Active Acne: To avoid potential infection, it's best to wait for breakouts to clear before receiving a Basic HydraFacial. We can discuss alternative treatment options during your consultation.",

        ]
    }
};

const HydraFacial = () => {
    return (
        <>
            <HeaderContact />

            <div className="container">
                {/* Main Heading */}
                <div className="mainHead">
                    <h1 className="head">{basicMoData.title}</h1>
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
                <Section
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
                <Section 
                    description={basicMoData.precaution.description}
                    features={basicMoData.precaution.features}
                />
            </div>
            <Footer></Footer>
        </>
    );
};

// Reusable Section Component
const Section = ({ title, description, features }) => (
    <div className="section">
        <div className="cmnTitle">{title}</div>
        <div><strong>{description.split(":")[0]}</strong>:{description.split(":")[1]}</div>
        {features && (
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>
                        {/* <span style={{ color: 'green', marginRight: '8px', fontSize: 'large', fontWeight: '600' }}>✓</span> */}
                        <strong>{feature.split(":")[0]}</strong>: {feature.split(":")[1]}
                    </li>
                ))}
            </ul>
        )}
    </div>
);


// Reusable Card Component
const Card = ({ title, description, features }) => (
    <div className="item">
        <div className="cmnBox">
            <div className="cmnTitle">{title}</div>
            {description && <div>{description}</div>}
            {features && (
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>
                            {/* <span style={{ color: 'green', marginRight: '8px', fontSize: 'large', fontWeight: '600' }}>✓</span> */}
                            <strong>{feature.split(":")[0]}</strong>: {feature.split(":")[1]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
);

export default HydraFacial;
