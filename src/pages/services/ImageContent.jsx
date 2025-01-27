import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../custom_css/serviceTemplate.css';

const ImageContent = () => {
  const { t } = useTranslation();
  const data = t('facials', { returnObjects: true }); // Fetch the "facials" content dynamically

  return (
    <section className="cosmeticSec">
      <div className="container">
        <div className="contentWrap">
          {/* Image Section */}
          <div className="imgBx">
            <img
              src={data.imageUrl}
              loading="lazy"
              style={{ width: '689px', height: '586px' }}
              alt={data.imageAlt}
            />
          </div>

          {/* Content Section */}
          <div className="cont">
            <div className="tle">{data.title}</div>

            {/* Render Dynamic Content */}
            {data.content.map((item, index) => {
              if (item.type === 'heading') {
                return <h2 key={index}>{item.text}</h2>;
              }
              if (item.type === 'paragraph') {
                return <p key={index}>{item.text}</p>;
              }
              if (item.type === 'list') {
                return (
                  <ul key={index}>
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
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
