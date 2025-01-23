import React from "react";
import "../../custom_css/basicSmile.css";
import HeaderContact from "../../components/headercontact";
import Footer from "../../components/footer";

// Dynamic data for Basic Mo Smile
const basicMoData = {
    title: "GC - Snow white Hollywood smile",
    description:
        "At Damas Medical Center, we understand the transformative power of a smile. Introducing GC Snow White veneers, a dazzling evolution of our GC-6D veneers, crafted to elevate your smile to new heights of brilliance.",
    imageUrl:
        "https://damasmc.com/uploads/sub-services/bannerf4de479c04c629da2da7089d093f1edd9374d1c5.jpg",
    section: {
        title: "Embrace a Smile as White as Snow",
        features: [
            "Unmatched Whiteness: GC Snow White veneers boast the same exceptional properties of GC-6D veneers, including superior strength and natural aesthetics, but with an added touch of unparalleled whiteness.",
            "American Innovation: Crafted from the latest advancements in American dental technology, these veneers are built to last, ensuring your dazzling smile endures for years to come.",
            "Glass-like Brilliance: Experience exceptional glass-like properties, mimicking the natural transparency and gloss of teeth for an unmatched level of realism, even with their striking whiteness.",
            "Long-lasting Confidence: Enjoy a lifetime warranty on shade and stain resistance* (with regular cleaning and polishing at Damas Medical Center 3-4 times a year). Damas medical center also offer an extended warranty at your request. ",
        ],
    }
};

const SnowWhiteSmile = () => {
    return (
        <>
            <HeaderContact />
            <div className="container">
                <div className="mainHead">
                    <h1 className="head">{basicMoData.title}</h1>
                </div>
                <div>{basicMoData.description}</div>
                <div className="imgBx">
                    <img
                        src={basicMoData.imageUrl}
                        alt={basicMoData.title}
                        loading="lazy"
                        className="lazy"
                    />
                </div>
                <Section
                    title={basicMoData.section.title}
                    features={basicMoData.section.features}
                />
            </div>
            <Footer></Footer>
        </>
    );
};

// Reusable Section Component
const Section = ({ title, description, features }) => (
    <div className="section" style={{ marginBottom: '30px' }}>
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

export default SnowWhiteSmile;
