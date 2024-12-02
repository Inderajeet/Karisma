import React from "react";
import "../custom_css/basicSmile.css";
import HeaderContact from "../../components/headercontact";
import Footer from "../../components/footer";

// Dynamic data for Basic Mo Smile
const basicMoData = {
    title: "E-Max Hollywood Smile Group",
    description:
        "German lenses (German ceramics) are one of the most common types of veneers, offering a range of types to suit different preferences and budgets.",
    imageUrl:
        "https://damasmc.com/uploads/sub-services/bannerf4de479c04c629da2da7089d093f1edd9374d1c5.jpg",
    section: {
        title: "Premium (Basic MO), where Simplicity Meets Affordability",
        description:
            "While Basic MO veneers prioritize cost-effectiveness, they don't compromise on quality as the High-Grade Materials, crafted from durable German materials, these veneers resist chipping and staining for a long-lasting smile.",
        features: [
            "Classic Elegance: These veneers boast a single, timeless color layer for a natural and sophisticated aesthetic.",
            "Improved Oral Health: Proper veneer care encourages regular cleaning and maintenance, promoting overall oral health.",
            "Budget-Friendly Choice: Basic MO veneers are an accessible option for those seeking a smile enhancement within their own budget.",
            "Long-lasting Confidence: Enjoy a lifetime warranty on shade and stain resistance* (with regular cleaning and polishing at Damas Medical Center 3-4 times a year).",
            "Extend Your Warranty: For ultimate peace of mind, consider our optional 11-month extended breakage warranty for an additional fee.",
        ],
    },
    cards: [
        {
            title: "Exclusive (MO), Embrace a Lighter, Whiter Smile",
            features: [
                "Luminous Enhancement: MO Veneers feature a single, luminous color layer, crafted to be noticeably lighter and whiter than Basic MO veneers, creating a dazzling, eye-catching smile.",
                "Accessible Elegance: Enjoy a budget-friendly option for achieving a brighter, more captivating smile.",
                "Long-lasting Confidence: Benefit from a lifetime warranty on shade and stain resistance* (with regular cleaning and polishing at Damas Medical Center 3-4 times a year). Let your smile stay brilliantly white for years to come.",
                "Peace of Mind Guarantee: Consider our optional extended breakage warranty.",
            ],
        },
        {
            title: "Luxury (MT-3D), Discover Perfection",
            description:
                "At Damas Medical Center, we understand that a smile is a masterpiece, deserving the finest artistry. Introducing MT-3D veneers, the pinnacle of our veneer collection – a testament to luxury, aesthetics, and unparalleled natural beauty.",
            features: [
                "Effortless Perfection: MT-3D veneers boast a meticulously crafted multi-layered structure with a gradient color effect. This mimics the natural translucency of teeth for a smile so real, it appears flawless yet undeniably yours.",
                "A Universe of White: Choose from a vast spectrum of white shades to achieve your ideal level of brilliance, perfectly complementing your skin tone and facial features.",
                "The Epitome of Luxury: Indulge in the ultimate expression of a smile. MT-3D veneers are crafted from the finest German Emax material, renowned for exceptional aesthetics and durability.",
                "Unwavering Confidence: Benefit from a lifetime warranty on shade and stain resistance* (with regular cleaning and polishing at Damas Medical Center 3-4 times a year). Consider our optional extended breakage warranty.",
            ],
        },
    ],
};

const BasicMoSmile = () => {
    return (
        <>
            <HeaderContact />

            <div className="container">
                {/* Main Heading */}
                <div className="mainHead">
                    <h1 className="head">{basicMoData.title}</h1>
                </div>

                {/* Main Description */}
                <p>{basicMoData.description}</p>

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
            </div>
            <Footer></Footer>
        </>
    );
};

// Reusable Section Component
const Section = ({ title, description, features }) => (
    <div className="section">
        <div className="cmnTitle">{title}</div>
        <p>{description}</p>
        {features && (
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>
                        <span style={{ color: 'green', marginRight: '8px', fontSize: 'large', fontWeight: '600' }}>✓</span>
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
            {description && <p>{description}</p>}
            {features && (
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>
                            <span style={{ color: 'green', marginRight: '8px', fontSize: 'large', fontWeight: '600' }}>✓</span>
                            <strong>{feature.split(":")[0]}</strong>: {feature.split(":")[1]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
);

export default BasicMoSmile;
