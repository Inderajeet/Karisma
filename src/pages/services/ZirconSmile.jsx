import React from "react";
import "../../custom_css/basicSmile.css";
import HeaderContact from "../../components/headercontact";
import Footer from "../../components/footer";

// Dynamic data for Basic Mo Smile
const basicMoData = {
    title: "DAMAS Zircon Hollywood smile",
    description:
        "At Damas Medical Center, we believe a beautiful smile should be as strong as it is dazzling. Introducing Damas Zircon veneers, the pinnacle of strength and aesthetics in modern dentistry. Crafted from the most advanced materials and designed with cutting-edge technology, these veneers offer unparalleled durability, natural beauty, and a smile that lasts.",
    imageUrl:
        "https://damasmc.com/uploads/sub-services/bannerf4de479c04c629da2da7089d093f1edd9374d1c5.jpg",
    section: {
        title: "Embrace Unmatched Strength",
        features: [
            "Superior Durability: Experience the strongest type of American veneer available. Damas Zircon veneers boast a hardness and toughness about 400% higher than E-max, offering exceptional resistance to chipping, cracking, and wear for a smile that endures.",
            "Natural Aesthetics: Despite their unmatched strength, Damas Zircon veneers maintain a natural and vibrant appearance. These veneers are meticulously designed to seamlessly blend with your existing teeth for a flawlessly beautiful smile.",
            "Computer-Aided Precision: Our advanced CAD/CAM technology allows for the creation of veneers with exceptional precision and a natural shape, ensuring a comfortable fit and breathtaking aesthetics.",
            "Lifetime Warranty on Shade & Color: Enjoy a lifetime warranty on shade and stain resistance* (with regular cleaning and polishing at Damas Medical Center 3-4 times a year). Do not lose the extended warranty option at Damas medical center. ",
        ],
    }
};

const ZirconSmile = () => {
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
                    // description={basicMoData.section.description}
                    features={basicMoData.section.features}
                />

                {/* Two-Column Section */}
                {/* <div className="flxBx">
                    {basicMoData.cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} features={card.features} />
                    ))}
                </div> */}
            </div>
            <Footer></Footer>
        </>
    );
};

// Reusable Section Component
const Section = ({ title, description, features }) => (
    <div className="section" style={{ marginBottom: '30px' }}>
        <div className="cmnTitle">{title}</div>
        <div>{description}</div>
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
            {description && <div>{description}</div>}
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

export default ZirconSmile;
