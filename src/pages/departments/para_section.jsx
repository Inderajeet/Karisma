import React from "react";
import "./para_section.css";
import "./blog.css";
const ParaSection = (props) => {
  return (
   <div style={{...props.style, backgroundColor: '#D1BB9F', textAlign: 'center'}}>
     <div className="benefits-container customContainer para-body">
      <h2 className="title para-heading">{props.title}</h2>
      <div className="">
        {props.desc?.map((paragraph, index) => (
          <p key={index} className="" style={{textAlign: 'center'}}>
            {paragraph}
          </p>
        ))}
      </div>
      <div>{props.extraContent}</div>
    </div>
   </div>
  );
};

export default ParaSection;