import React from "react";
import "./para_section.css";
import "./blog.css";
const ParaSection = (props) => {
  return (
   <div className="para-body">
     <div className="para-container">
      <h2 className="para-heading">{props.title}</h2>
      <div className="para-content">
        {props.desc.map((paragraph, index) => (
          <p key={index} className="para-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
   </div>
  );
};

export default ParaSection;

