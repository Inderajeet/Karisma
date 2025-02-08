import React from "react";
import "../../custom_css/serviceTemplate.css";

const renderFeature = (feature, index) => {
    // If feature is a string (Key-Value pair)
    if (typeof feature === "string") {
        if (feature.includes(":")) {
            const [key, value] = feature.split(/:(.+)/); // Split only at the first colon
            return (
                <div key={index} className="featureItem">
                    <strong>{key}</strong>: {value}
                </div>
            );
        } else {
            // If no colon, return as normal text
            return <div key={index} className="featureItem">{feature}</div>;
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
                            <li key={subIndex} className="custom-list-item">
                                {typeof item === "string" ? item : renderFeature(item, subIndex)}
                            </li>
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
                            <li key={subIndex} className="custom-list-item">
                                {typeof item === "string" ? item : renderFeature(item, subIndex)}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    return null;
};

const ContentSection = ({ title, description, features }) => {
    return (
        <div className="custsectionStyle customContainer">
            <h2 className="title">{title}</h2>
            <p>{description}</p>

            {features && <p className="featuresContainer">{features.map(renderFeature)}</p>}
        </div>
    );
};

export default ContentSection;
