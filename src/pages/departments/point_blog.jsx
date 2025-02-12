import React from "react";
import "./point_blog.css"; // Include the CSS for styling
import { TiTick } from "react-icons/ti";

const PointBlog = ({ title, description, benefits, description2,className,style,extraContent }) => {
  return (
    <div style={{...style}} className={`benefits-container customContainer ${className || ""}`}>
      <h2 className="title">{title}</h2>
      <p >{description}</p>
      {description2 && (
        <div className="benefits-description">
          <p>{description2}</p>
        </div>
      )}
      <ul className="benefits-list">
        {benefits?.map((benefit, index) => (
          <p key={index} className="featureItem">
            <strong>{benefit.title}:</strong> {benefit.description}
          </p>
        ))}
      </ul>
      <div>{extraContent}</div>
    </div>
  );
};

export default PointBlog;
