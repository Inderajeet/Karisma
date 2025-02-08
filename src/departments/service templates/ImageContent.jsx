import React from 'react';
import '../../custom_css/serviceTemplate.css';

// Recursive function to handle nested lists
const renderListItem = (item, index) => {
  if (typeof item === "string") {
    if (item.includes(":")) {
      const [key, value] = item.split(":");
      return (
        <p key={index} className="featureItem">
          <strong >{key}:</strong> {value.trim()}
        </p>
      );
    } else {
      // No colon, just render as normal text
      return <li key={index} className="featureItem">{item}</li>;
    }
  } else if (typeof item === "object" && item.title && Array.isArray(item.items)) {
    const [key, value] = item.title.includes(":") ? item.title.split(":") : [item.title, ""];

    return (
      <p key={index} className="featureItem">
        {key ? <strong>{key}:</strong> : ""} {value.trim()}
        <ul className="custom-list" style={{ paddingLeft: "10px" }}>
          {item.items.map((subItem, subIndex) => renderListItem(subItem, subIndex))}
        </ul>
      </p>
    );
  }
  return null;
};


const ImageContent = ({ title, imageUrl, imageAlt, content }) => {
  return (
    <section className="cosmeticSec">
      <div className="customContainer">
        <div className="contentWrap">
          {/* Image Section */}
          <div className="imgBx">
            <img src={imageUrl} loading="lazy" alt={imageAlt} />
          </div>

          {/* Content Section */}
          <div className="cont">
            <h2 className="title">{title}</h2>

            {/* Render Dynamic Content */}
            {content.map((item, index) => {
              if (item.type === 'heading') {
                return <p  key={index} style={{fontFamily:'The Seasons', fontWeight:'600'}}> <strong>{item.text}</strong></p>;
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
