import React from "react";
import "../../custom_css/basicSmile.css";

const CardSection = ({ title, subtitle, description, subtitle2, description2, features }) => {
    console.log('CardSection Props:', { title, subtitle, description, subtitle2, description2, features });
    
    return (
        <>
        <div className="custitem">
            <div className="cmnBox">
                {/* Title */}
                <div className="cmnTitle">{title}</div>
                {/* Subtitle 1 and Description 1 */}
                {subtitle && <div className="subtitle"><strong>{subtitle}</strong></div>}
                {description && <div className="description">{description}</div>}
                {/* Subtitle 2 and Description 2 */}
                {subtitle2 && <div className="subtitle"><strong>{subtitle2}</strong></div>}
                {description2 && <div className="description">{description2}</div>}
                {/* Features */}
                {features && features.length > 0 && (
                    <div className="featuresContainer">
                        <ul>
                            {features.map((feature, index) => (
                                <li key={index} className="featureItem">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};


export default CardSection;


