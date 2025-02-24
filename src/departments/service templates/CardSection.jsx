import React from "react";
import "../../custom_css/serviceTemplate.css";

// Function to render features with nested lists
const renderFeature = (feature, index) => {
    if (typeof feature === "string") {
        if (feature.includes(":")) {
            const [key, value] = feature.split(/:(.+)/);
            return (
                <div key={index} className="featureItem divP">
                    <strong>{key}</strong>: {value}
                </div>
            );
        } else {
            return <div key={index} className="featureItem divP">{feature}</div>;
        }
    }

    else if (typeof feature === "object") {
        if (feature.title && Array.isArray(feature.items)) {
            return (
                <div key={index} className="featureItem divP">
                    <strong>{feature.title}</strong>
                    <ul className="custom-list">
                        {feature.items.map((item, subIndex) => (
                            <li key={subIndex} className="">
                                {renderFeature(item, subIndex)}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else if (Array.isArray(feature.items)) {
            return (
                <ul key={index} className="custom-list">
                    {feature.items.map((item, subIndex) => (
                        <li key={subIndex} className="">
                            {renderFeature(item, subIndex)}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    return null;
};

const CardSection = ({ title, subtitle, description, title2, subtitle2, description2, features }) => {
    return (
        <div className="custitem">
            <div className="cmnBox">
                {/* Title */}
                <div className="card_title">{title}</div>

                {/* Subtitle 1 and Description 1 */}
                {subtitle && <p className="subtitle">{subtitle}</p>}
                {description && <div className="description">{description}</div>}

                {/* Subtitle 2 and Description 2 */}
                {title2 && <div className="card_title">{title2}</div>}
                {subtitle2 && <p className="subtitle">{subtitle2}</p>}
                {description2 && <div className="description">{description2}</div>}

                {/* Features */}
                {features && <div className="featuresContainer divP">{features.map(renderFeature)}</div>}
            </div>
        </div>
    );
};

export default CardSection;
