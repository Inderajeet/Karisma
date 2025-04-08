import React from 'react';
import '../../custom_css/serviceTemplate.css';

const ImageContent = ({ 
  title, 
  imageUrl, 
  imageAlt, 
  content = [],
  features = [] 
}) => {
  // Render feature/list item (same as ContentSection)
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

  // Font fallback (same as ContentSection)
  const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text;
    return text.split(/\b/).map((word, index) => 
      /^[A-Za-z0-9 ]+$/.test(word)
        ? word
        : <span key={index} className="fallback-font">{word}</span>
    );
  };

  // Helper function to render different content types
  const renderContentItem = (item, index) => {
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
  };

  // Handle image URL
  const getImageUrl = () => {
    if (!imageUrl) {
      return `${window.location.origin}/assets/Images/default-image.png`;
    }

    // Case 1: Already a complete URL
    if (/^https?:\/\//i.test(imageUrl)) {
      return imageUrl;
    }

    // Case 2: Relative path
    return `${window.location.origin}/${imageUrl.replace(/^\//, '')}`;
  };

  // Backward compatibility: Convert features array to content format
  const normalizedContent = features.length > 0 && content.length === 0
    ? [
        { type: 'paragraph', text: title },
        { type: 'list', items: features }
      ]
    : content;

  return (
    <section className="imgSect">
      <div className="customContainer">
        <div className="contentWrap">
          {/* Image Section */}
          <div className="imgBx">
            <img 
              src={getImageUrl()} 
              loading="lazy" 
              alt={imageAlt || title} 
            />
          </div>

          {/* Content Section */}
          <div className="cont">
            {title && <h2 className="title">{applyFontFallback(title)}</h2>}
            
            {/* Render all content items */}
            {normalizedContent.map((item, index) => renderContentItem(item, index))}
            
            {/* Backward compatibility for features prop */}
            {features.length > 0 && content.length === 0 && (
              <div className="featuresContainer divP">
                {features.map((feature, index) => renderFeature(feature, index, 1))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContent;