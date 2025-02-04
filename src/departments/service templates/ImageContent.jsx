import React from 'react';
import '../../custom_css/serviceTemplate.css';

// Recursive function to handle nested lists
const renderListItem = (item, index) => {
  if (typeof item === "string") {
    if (item.includes(":")) {
      const [key, value] = item.split(":");
      return (
        <li key={index} className="featureItem">
          <strong>{key}:</strong> {value.trim()}
        </li>
      );
    } else {
      // No colon, just render as normal text
      return <li key={index} className="featureItem">{item}</li>;
    }
  } else if (typeof item === "object" && item.title && Array.isArray(item.items)) {
    const [key, value] = item.title.includes(":") ? item.title.split(":") : [item.title, ""];

    return (
      <li key={index} className="featureItem">
        {key ? <strong>{key}:</strong> : ""} {value.trim()}
        <ul className="custom-list" style={{ paddingLeft: "10px" }}>
          {item.items.map((subItem, subIndex) => renderListItem(subItem, subIndex))}
        </ul>
      </li>
    );
  }
  return null;
};


const ImageContent = ({ title, imageUrl, imageAlt, content }) => {
  return (
    <section className="cosmeticSec">
      <div className="container">
        <div className="contentWrap">
          {/* Image Section */}
          <div className="imgBx">
            <img src={imageUrl} loading="lazy" alt={imageAlt} />
          </div>

          {/* Content Section */}
          <div className="cont">
            <h2 className="tle">{title}</h2>

            {/* Render Dynamic Content */}
            {content.map((item, index) => {
              if (item.type === 'heading') {
                return <h2 className="cmnTitle" key={index}>{item.text}</h2>;
              }
              if (item.type === 'paragraph') {
                const parts = item.text.split(":");
                return (
                  <p key={index}>
                    {parts.length > 1 ? (
                      <>
                        <strong>{parts[0]}:</strong> {parts.slice(1).join(":")}
                      </>
                    ) : (
                      item.text
                    )}
                  </p>
                );
              }
              if (item.type === 'list') {
                return (
                  <ul style={{ padding: '0' }} key={index}>
                    {item.items.map((listItem, listIndex) => renderListItem(listItem, listIndex))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContent;
