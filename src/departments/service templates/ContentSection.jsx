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

export const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text; // Prevent errors on undefined/null values
  
    return text.split("").map((char, index) =>
      /[A-Za-z0-9 ]/.test(char) // Keep normal text in Seasons
        ? char
        : <span key={index} className="fallback-font">{char}</span> // Force fallback for everything else
    );
  };
  
  

const ContentSection = ({ title, description, features, heading }) => {
    return (
        <div className="custsectionStyle customContainer">
            <h2 className="title">{applyFontFallback(title)}</h2>
            {/* <h2 className="title">{title}</h2> */}
            <p  style={{fontFamily:'The Seasons', fontWeight:'600'}}> <strong>{heading}</strong></p>
            <p>{description}</p>

            {features && <p className="featuresContainer">{features.map(renderFeature)}</p>}
        </div>
    );
};

export default ContentSection;
