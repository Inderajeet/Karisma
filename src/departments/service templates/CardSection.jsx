import React from "react";
import "../../custom_css/serviceTemplate.css";

// Function to render features with nested lists
const renderFeature = (feature, index, level = 1) => {
    let className = "content-featureItem divP";

    if (level === 2 || level === 3) {
        className = "custom-list-item divP";
    }

    if (typeof feature === "string") {
        if (feature.includes(":")) {
            const [key, value] = feature.split(/:(.+)/);
            return (
                <div key={index} className={className}>
                    <strong>{key}</strong>: {value}
                </div>
            );
        } else {
            return (
                <div key={index} className={className}>
                    {feature}
                </div>
            );
        }
    } else if (typeof feature === "object" && feature.title && Array.isArray(feature.items)) {
        if (feature.title.includes(":")) {
            const [key, value] = feature.title.split(/:(.+)/);
            return (
                <div key={index} className={className}>
                    <strong>{key}</strong>: {value}
                    <ul style={{ marginLeft: "15px", paddingLeft: "10px" }}>
                        {feature.items.map((item, subIndex) => (
                            <li key={subIndex} style={{ listStyleType: "none" }}>
                                {renderFeature(item, subIndex, level + 1)}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div key={index} className={className}>
                    <strong>{feature.title}</strong>
                    <ul style={{ marginLeft: "15px", paddingLeft: "10px" }}>
                        {feature.items.map((item, subIndex) => (
                            <li key={subIndex} style={{ listStyleType: "none" }}>
                                {renderFeature(item, subIndex, level + 1)}
                            </li>
                        ))}
                    </ul>
                </div>
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
                {features && <div className="featuresContainer divP">{features.map((feature, index) => renderFeature(feature, index, 1))}</div>}
                </div>
        </div>
    );
};

export default CardSection;
