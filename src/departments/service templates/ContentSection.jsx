import React from "react";
import "../../custom_css/serviceTemplate.css";

const renderFeature = (feature, index, level = 1) => {
    // If feature is a string (Key-Value pair)
    if (typeof feature === "string") {
        if (feature.includes(":")) {
            const [key, value] = feature.split(/:(.+)/);
            return (
                <div key={index} className="content-featureItem divP">
                    <strong>{key}</strong>: {value}
                </div>
            );
        } else {
            return <div key={index} className="content-featureItem divP">{feature}</div>;
        }
    }

    // If feature is an object with title & items (nested list)
    if (typeof feature === "object" && feature.title && Array.isArray(feature.items)) {
        const titleContent = feature.title.includes(":")
            ? (() => {
                  const [key, value] = feature.title.split(/:(.+)/);
                  return (
                      <>
                          <strong>{key}</strong>: {value}
                      </>
                  );
              })()
            : feature.title;

        return (
            <div key={index} className="divP">
                {/* ✅ Make sure title is separate */}
                <div className="content-featureItem">{titleContent}</div>

                <ul className="custom-list">
                    {feature.items.map((item, subIndex) => (
                        <li key={subIndex} className="custom-list-item divP">
                            {/* ✅ If it's a nested object, call renderFeature() to keep list structure */}
                            {typeof item === "string" ? item : renderFeature(item, subIndex, level + 1)}
                        </li>
                    ))}
                </ul>
            </div>
        );
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
  
  

  const ContentSection = ({ title, description, description2, features, heading, heading2 }) => {
    return (
        <div className="custsectionStyle customContainer" style={{ marginTop: '0px', marginBottom: '0px' }}>
            {title &&  <h2 className="title">{applyFontFallback(title)}</h2>}

            {heading && <p style={{ fontFamily: 'The Seasons', fontWeight: '600' }}><strong>{heading}</strong></p>}
            {description && <p>{description}</p>}
            {heading2 && <p style={{ fontFamily: 'The Seasons', fontWeight: '600' }}><strong>{heading2}</strong></p>}

            {features && <div className="featuresContainer divP">{features.map(renderFeature)}</div>}
            {description2 && <p>{description2}</p>}

        </div>
    );
};


export default ContentSection;
