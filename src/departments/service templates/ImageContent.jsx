import React from 'react';
import '../../custom_css/serviceTemplate.css';

// Recursive function to handle nested lists
const renderListItem = (item, index) => {
  if (typeof item === "string") {
    if (item.includes(":")) {
      const [key, value] = item.split(":");
      return (
        <p key={index} className="content-featureItem">
          <strong >{key}:</strong> {value.trim()}
        </p>
      );
    } else {
      // No colon, just render as normal text
      return <li key={index} className="content-featureItem">{item}</li>;
    }
  } else if (typeof item === "object" && item.title && Array.isArray(item.items)) {
    const [key, value] = item.title.includes(":") ? item.title.split(":") : [item.title, ""];

    return (
      <p key={index} className="content-featureItem">
        {key ? <strong>{key}:</strong> : ""} {value.trim()}
        <ul className="custom-list" style={{ paddingLeft: "10px" }}>
          {item.items.map((subItem, subIndex) => renderListItem(subItem, subIndex))}
        </ul>
      </p>
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

const ImageContent = ({ title, imageUrl, imageAlt, content }) => {
  const finalImageUrl = imageUrl.startsWith("http")
  ? imageUrl
  : `${window.location.origin}/assets/${imageUrl.replace(/^(\.\.\/)+assets\//, '')}`;

console.log("Final Image URL:", finalImageUrl);

  return (
    <section className="imgSect">
      <div className="customContainer">
        <div className="contentWrap">
          {/* Image Section */}
          <div className="imgBx">
            <img src={finalImageUrl} loading="lazy" alt={imageAlt} />
          </div>

          {/* Content Section */}
          <div className="cont">
            <h2 className="title">{applyFontFallback(title)}</h2>

            {/* Render Dynamic Content */}
            {content.map((item, index) => {
              if (item.type === 'heading') {
                return <p key={index} style={{ fontFamily: 'The Seasons', fontWeight: '600' }}> <strong>{item.text}</strong></p>;
              }
              if (item.type === 'paragraph') {
                const parts = item.text.split(":");
                return (
                  <p key={index}>
                    {item.text}
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
