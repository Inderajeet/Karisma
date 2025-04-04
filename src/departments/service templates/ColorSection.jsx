import React from "react";
import "../../custom_css/serviceTemplate.css";

const ColorSection = ({ 
  title, 
  content = []
}) => {
  // Handle list items (keep your existing implementation)
  const renderListItem = (item, index, level = 1) => {
    if (typeof item === "string") {
      if (item.includes(":")) {
        const [key, value] = item.split(/:(.+)/);
        return (
          <li key={index} className={`content-featureItem level-${level}`}>
            <strong>{key}:</strong> {value.trim()}
          </li>
        );
      }
      return <li key={index} className={`content-featureItem level-${level}`}>{item}</li>;
    } 
    else if (typeof item === "object" && item.title && Array.isArray(item.items)) {
      const [key, value] = item.title.includes(":") 
        ? item.title.split(/:(.+)/) 
        : [item.title, ""];

      return (
        <li key={index} className={`content-featureItem level-${level}`}>
          {key && <strong>{key}:</strong>} {value.trim()}
          <ul className="content-sublist">
            {item.items.map((subItem, subIndex) => 
              renderListItem(subItem, subIndex, level + 1)
            )}
          </ul>
        </li>
      );
    }
    return null;
  };

  // Font fallback (keep your existing implementation)
  const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text;
    return text.split(/\b/).map((word, index) => 
      /^[A-Za-z0-9 ]+$/.test(word)
        ? word
        : <span key={index} className="fallback-font">{word}</span>
    );
  };

  return (
    <div className="custsectionStyle customContainer" 
         style={{ marginTop: '0px', marginBottom: '0px' }}>
      
      {/* Always show title */}
      {title && (
        <h2 className="title">{applyFontFallback(title)}</h2>
      )}

      {/* Render content in original order */}
      {content.map((item, index) => {
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
                {item.items.map((listItem, idx) => 
                  renderListItem(listItem, idx)
                )}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ColorSection;