import React from 'react';
import '../../custom_css/serviceTemplate.css';

const ImageContent = ({ 
  title, 
  imageUrl, 
  imageAlt, 
  content = [],
  features = [] 
}) => {
  // Helper function to render different content types
  const renderContentItem = (item, index) => {
    switch (item.type) {
      case 'heading':
        return (
          <p key={index} className="content-heading">
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
          <ul key={index} className="content-list">
            {item.items.map((listItem, idx) => renderListItem(listItem, idx))}
          </ul>
        );
      
      default:
        return null;
    }
  };

  // Recursive function to handle nested lists
  const renderListItem = (item, index) => {
    if (typeof item === "string") {
      if (item.includes(":")) {
        const [key, value] = item.split(":");
        return (
          <li key={index} className="content-featureItem">
            <strong>{key}:</strong> {value.trim()}
          </li>
        );
      }
      return <li key={index} className="content-featureItem">{item}</li>;
    } else if (typeof item === "object" && item.title && Array.isArray(item.items)) {
      const [key, value] = item.title.includes(":") 
        ? item.title.split(":") 
        : [item.title, ""];

      return (
        <li key={index} className="content-featureItem">
          {key && <strong>{key}:</strong>} {value.trim()}
          <ul className="content-sublist">
            {item.items.map((subItem, subIndex) => renderListItem(subItem, subIndex))}
          </ul>
        </li>
      );
    }
    return null;
  };

  // Font fallback for non-English characters
  const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text;
    
    return text.split(/\b/).map((word, index) => 
      /^[A-Za-z0-9 ]+$/.test(word)
        ? word
        : <span key={index} className="fallback-font">{word}</span>
    );
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
              <ul className="content-list">
                {features.map((feature, index) => renderListItem(feature, index))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContent;