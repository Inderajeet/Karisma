import React from "react";
import "../../custom_css/serviceTemplate.css";

const renderFeature = (feature, index) => {
    // If feature is a string (Key-Value pair)
    if (typeof feature === "string") {
        if (feature.includes(":")) {
            const [key, value] = feature.split(/:(.+)/); // Split only at the first colon
            return (
                <div key={index} className="content-featureItem divP">
                    <strong>{key}</strong>: {value}
                </div>
            );
        } else {
            // If no colon, return as normal text
            return <div key={index} className="content-featureItem divP">{feature}</div>;
        }
    }

    // If feature is an object with title & items (nested list)
    else if (typeof feature === "object" && feature.title && Array.isArray(feature.items)) {
        if (feature.title.includes(":")) {
            const [key, value] = feature.title.split(/:(.+)/);
            return (
                <div key={index} className="content-featureItem divP">
                    <strong>{key}</strong> {value}
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
                <div key={index} className="content-featureItem divP">
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

export const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text; // Prevent errors on undefined/null values
  
    return text.split("").map((char, index) =>
      /[A-Za-z0-9 ]/.test(char) // Keep normal text in Seasons
        ? char
        : <span key={index} className="fallback-font">{char}</span> // Force fallback for everything else
    );
  };
  
  

  const SubHeadingColorLast = ({ title, description, description2, features, heading, heading2 }) => {
    return (
        <div className="custsectionStyle customContainer" style={{ marginTop: '0px', marginBottom: '0px', paddingTop:'0' }}>
            {title &&  <h2 className="title">{applyFontFallback(title)}</h2>}

            {heading && <p style={{ fontFamily: 'The Seasons', fontWeight: '600' }}><strong>{heading}</strong></p>}
            {description && <p>{description}</p>}
            {heading2 && <p style={{ fontFamily: 'The Seasons', fontWeight: '600' }}><strong>{heading2}</strong></p>}

            {features && <div className="featuresContainer divP">{features.map(renderFeature)}</div>}
            {description2 && <p>{description2}</p>}

        </div>
    );
};


export default SubHeadingColorLast;
