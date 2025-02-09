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
        const [key, value] = feature.title.includes(":") ? feature.title.split(/:(.+)/) : [feature.title, ""];

        return (
            <div key={index} className="featureItem">
                <strong>{key}</strong>{value && `: ${value}`}
                <ul className="custom-list">
                    {feature.items.map((item, subIndex) => (
                        <li key={subIndex} className="custom-list-item">
                            {typeof item === "string" ? (
                                item.includes(":") ? (
                                    <>
                                        <strong>{item.split(/:(.+)/)[0]}</strong>: {item.split(/:(.+)/)[1]}
                                    </>
                                ) : (
                                    item
                                )
                            ) : (
                                renderFeature(item, subIndex)
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return null;
};

const CardSection = ({ title, subtitle, description, title2, subtitle2, description2, features }) => {
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
                    {title2 && <div className="card_title">{title2}</div>}
                    {subtitle2 && <p className="subtitle">{subtitle2}</p>}
                    {description2 && <div className="description">{description2}</div>}
                    
                    {/* Features */}
                    {features && features.length > 0 && (
                        <p className="featuresContainer">
                            {features.map(renderFeature)}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default CardSection;
