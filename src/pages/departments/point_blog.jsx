import React from "react";
import "./point_blog.css"; // Include the CSS for styling
import { TiTick } from "react-icons/ti";

const PointBlog = ({ title, description, benefits }) => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-title">{title}</h2>
      <p className="benefits-description">{description}</p>
      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index} className="benefit-item">
            <TiTick /><strong>{benefit.title}:</strong> {benefit.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointBlog;
