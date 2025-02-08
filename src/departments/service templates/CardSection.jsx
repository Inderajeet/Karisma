import React from "react";
import "../../custom_css/serviceTemplate.css";

// Function to render features with nested lists
const renderFeature = (feature, index) => {
    // If feature is a string (Key-Value pair)
    if (typeof feature === "string") {
        if (feature.includes(":")) {
            const [key, value] = feature.split(/:(.+)/); // Split only at the first colon
            return (
                <p key={index} className="featureItem">
                    <strong>{key}</strong>: {value}
                </p>
            );
        } else {
            // If no colon, return as normal text
            return <p key={index} className="featureItem">{feature}</p>;
        }
    }

    // If feature is an object with title & items (nested list)
    else if (typeof feature === "object" && feature.title && Array.isArray(feature.items)) {
        if (feature.title.includes(":")) {
            const [key, value] = feature.title.split(/:(.+)/);
            return (
                <div key={index} className="featureItem">
                    <strong>{key}</strong>: {value}
                    <ul className="custom-list">
                        {feature.items.map((item, subIndex) => (
                            <p key={subIndex} className="custom-list-item">
                                {typeof item === "string" ? item : renderFeature(item, subIndex)}
                            </p>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div key={index} className="featureItem">
                    {feature.title}
                    <ul className="custom-list">
                        {feature.items.map((item, subIndex) => (
                            <p key={subIndex} className="custom-list-item">
                                {typeof item === "string" ? item : renderFeature(item, subIndex)}
                            </p>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    return null;
};

const CardSection = ({ title, subtitle, description, subtitle2, description2, features }) => {
    return (
        <>
            <div className="custitem">
                <div className="cmnBox">
                    {/* Title */}
                    <div className="card_title">{title}</div>
                    
                    {/* Subtitle 1 and Description 1 */}
                    {subtitle && <p className="subtitle">{subtitle}</p>}
                    {description && <div className="description">{description}</div>}
                    
                    {/* Subtitle 2 and Description 2 */}
                    {subtitle2 && <p className="subtitle">{subtitle2}</p>}
                    {description2 && <div className="description">{description2}</div>}
                    
                    {/* Features */}
                    {features && features.length > 0 && (
                        <div className="featuresContainer">
                            {features.map(renderFeature)}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CardSection;
