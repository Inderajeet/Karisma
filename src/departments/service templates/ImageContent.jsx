import React from 'react';
import '../../custom_css/serviceTemplate.css';

const ImageContent = ({ title, imageUrl, imageAlt, content }) => {
  return (
    <section className="cosmeticSec">
      <div className="container">
        <div className="contentWrap">
          {/* Image Section */}
          <div className="imgBx">
            <img
              src={imageUrl}
              loading="lazy"
              // style={{ width: '689px', height: '586px' }}
              alt={imageAlt}
            />
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
                return <p key={index}>{item.text}</p>;
              }
              if (item.type === 'list') {
                return (
                  <ul style={{padding:'0'}} 
                  key={index}>
                    {item.items.map((listItem, listIndex) => (
                      <li className="featureItem" 
                      key={listIndex}>{listItem}</li>
                    ))}
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
