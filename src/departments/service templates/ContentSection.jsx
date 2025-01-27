import React from "react";
import "../../custom_css/basicSmile.css";

const ContentSection = ({ title, description, features }) => (
    // console.log('title:', title),
    <div className="custsectionStyle">
        <div className="cmnTitle">{title}</div>
        <p>{description}</p>
        {features && (
            <div className="featuresContainer">
                {features.map((feature, index) => (
                    <div key={index} className="featureItem">
                        <strong>{feature.split(":")[0]}</strong>: {feature.split(":")[1]}
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default ContentSection;
