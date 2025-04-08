import React from "react";
import "../../custom_css/serviceTemplate.css";

const ContentSection = ({ 
  title, 
  content = [],
  description,
  description2,
  heading,
  heading2,
  features
}) => {
  // Render feature/list item (from first component with enhancements)
  const renderFeature = (feature, index, level = 1) => {
    let className = `content-featureItem divP level-${level}`;

    if (level === 2 || level === 3) {
      className = `custom-list-item divP level-${level}`;
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

  // Font fallback (from first component)
  const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text;
    return text.split(/\b/).map((word, index) => 
      /^[A-Za-z0-9 ]+$/.test(word)
        ? word
        : <span key={index} className="fallback-font">{word}</span>
    );
  };

  return (
    <div className="custsectionStyle customContainer" style={{ marginTop: '0px', marginBottom: '0px' }}>
      {/* Title from both components */}
      {title && <h2 className="title">{applyFontFallback(title)}</h2>}

      {/* Support both old props (first component) and new content array (second component) */}
      {heading && <p className="content-heading" style={{ fontFamily: 'The Seasons', fontWeight: '600' }}><strong>{heading}</strong></p>}
      {description && <p className="content-paragraph">{description}</p>}
      {heading2 && <p className="content-heading" style={{ fontFamily: 'The Seasons', fontWeight: '600' }}><strong>{heading2}</strong></p>}

      {/* Support both features array (first component) and content array (second component) */}
      {features && (
        <div className="featuresContainer divP">
          {features.map((feature, index) => renderFeature(feature, index, 1))}
        </div>
      )}

      {content.length > 0 && (
        <>
          {content.map((item, index) => {
            switch (item.type) {
              case 'heading':
                return (
                  <p key={index} className="content-heading" style={{ fontFamily: 'The Seasons', fontWeight: '600' }}>
                    <strong>{item.text}</strong>
                  </p>
                );
              case 'paragraph':
                return (
                  <p key={index} className="content-paragraph">
                    {item.text}
                  </p>
                );
              case 'list':
                return (
                  <div key={index} className="featuresContainer divP">
                    {item.items.map((feature, idx) => renderFeature(feature, idx, 1))}
                  </div>
                );
              default:
                return null;
            }
          })}
        </>
      )}

      {description2 && <p className="content-paragraph">{description2}</p>}
    </div>
  );
};

export default ContentSection;