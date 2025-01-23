import React from "react";
import "../../custom_css/basicSmile.css";
import HeaderContact from "../../components/headercontact";
import Footer from "../../components/footer";

// Dynamic data for Basic Mo Smile
const basicMoData = {
    title: "Meso Fat Injections",
    description:
        "Looking to achieve a more sculpted physique and enhance your body confidence? Stubborn fat deposits can be a roadblock on the path to achieving your aesthetic goals. At Damas Medical Center, we are proud to offer Meso Fat injections, a minimally invasive treatment designed to dissolve localized fat deposits and redefine your silhouette.",
    imageUrl:
        "https://damasmc.com/uploads/sub-services/bannerf4de479c04c629da2da7089d093f1edd9374d1c5.jpg",
    section: {
        title: "Meso Fat injections offer a non-surgical approach to fat reduction. Here's what you can expect:",
        // description:
        //     "While Basic MO veneers prioritize cost-effectiveness, they don't compromise on quality as the High-Grade Materials, crafted from durable German materials, these veneers resist chipping and staining for a long-lasting smile.",
        features: [
            "Targeted Treatment: Meso Fat injections directly target specific areas where stubborn fat deposits reside.",
            "Enhanced Results: The formulation of Meso Fat injections may include phosphatidylcholine, which helps dissolve fat cells, and minerals and vitamins that nourish the skin.",
            "Beyond Fat Reduction: Meso Fat injections may offer additional benefits like reduced cellulite appearance, improved skin elasticity, and potential stretch mark reduction.",
            ],
    },
    
    
    nextSection: {
        description: "Meso Fat injections utilize a carefully formulated blend of ingredients delivered directly into the middle layer of the skin. This blend typically consists of:",
        features: [
            "Phosphatidylcholine: This key ingredient plays a crucial role in dissolving fat cells, paving the way for a more sculpted appearance.",
            "Minerals and Vitamins: These components provide essential nourishment for the skin, promoting rejuvenation and a youthful, radiant glow.",
        ],
    },
    cards: [
        {
            title: "Beyond Fat Reduction: Additional Benefits of Meso Fat",
            description: "While Meso Fat injections primarily target fat reduction, they offer additional benefits that contribute to a more youthful look:",
            features: [
                "Reduced Cellulite: Meso Fat injections may help diminish the appearance of cellulite by improving circulation and lymphatic drainage, leaving your skin smoother.",
                "Improved Skin Elasticity: The combination of fat reduction and skin nourishment can lead to tighter, more youthful-looking skin. This can contribute to a more youthful overall appearance.",
                "Stretch Mark Reduction: Meso Fat injections may offer some improvement in the appearance of stretch marks, potentially minimizing their visibility.",
            ],
        },
        {
            title: "Optimizing Results with Combined Treatments",
            description:
                "While Meso Fat injections are effective on their own, we recommend combining them with other body sculpting devices for optimal results. Here's why:",
            features: [
                "Skin Tightening: The fat-dissolving properties of Meso Fat injections may benefit from skin-tightening treatments like Powershape2, Refit, or EMS devices. This helps prevent sagging after fat reduction, promoting a more defined and toned appearance.",
                "EMS Compatibility: Among the mentioned devices, EMS is the only one suitable for use on the same day as Meso Fat injections. Other devices require a one-week interval between sessions.",
                ],
        },
    ],
    nextSection1: {
        title:"Tailored Approach and Treatment Considerations",
        description: "Meso Fat injections are applied to a targeted area. The minimum recommended course is 6 sessions (3 injections + 3 device sessions) for each area, performed alternately.",
        description2:"Here are some additional points to consider:",
        features: [
            "Injection Interval: 10 to 15 days between Meso Fat injections.",
            "Device Session Interval: One device session between injections.",
            "Double Chin Treatment: The number of injections and device sessions for double chins can vary depending on the severity of the fat deposit.",
            "Filler Option: Filler injections can be used alongside Meso Fat injections for double chins to enhance skin tightening (patient's choice).",
            "Surgical Option: For severe chin relaxation with weak muscles, surgical tightening may be a more suitable option.",
            "Chronic Disease Considerations: Meso Fat injections may be safe for individuals with chronic diseases like hypertension or diabetes, but a doctor's evaluation is crucial.",
        ],
    },
    nextSection2: {
        title:"Safety and Professional Expertise",
        description: "Meso Fat injections are generally considered safe when administered by a qualified professional. However, it's important to avoid them during menstruation, pregnancy, or breastfeeding (consult a doctor after 6 months).",
    },
};

const MesoFatInjections = () => {
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
                <Section
                    description={basicMoData.nextSection.description}
                    features={basicMoData.nextSection.features} 
                />

                {/* Two-Column Section */}
                <div className="flxBx">
                    {basicMoData.cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} features={card.features} />
                    ))}
                </div>
                <Section
                    title={basicMoData.nextSection1.title}
                    description={basicMoData.nextSection1.description}
                    description2={basicMoData.nextSection1.description2}
                    features={basicMoData.nextSection1.features}
                />
                <Section
                    title={basicMoData.nextSection2.title}
                    description={basicMoData.nextSection2.description}
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
        <div>{description}</div>
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

export default MesoFatInjections;
