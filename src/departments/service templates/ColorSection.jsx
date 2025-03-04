import React from "react";
import "../../custom_css/serviceTemplate.css";

const renderFeature = (feature, index, level = 1) => {
    let className = "content-featureItem divP";

    if (level === 2 || level === 3) {
        className = "custom-list-item divP";
    }

    if (typeof feature === "string") {
        if (feature.includes(":")) {
            const [key, value] = feature.split(/:(.+)/);
            return (
                <div key={index} className={className}>
                    <strong>{key}</strong>: {value}
                </div>
            );
        } else {
            return (
                <div key={index} className={className}>
                    {feature}
                </div>
            );
        }
    } else if (typeof feature === "object" && feature.title && Array.isArray(feature.items)) {
        if (feature.title.includes(":")) {
            const [key, value] = feature.title.split(/:(.+)/);
            return (
                <div key={index} className={className}>
                    <strong>{key}</strong>: {value}
                    <ul style={{ marginLeft: "15px", paddingLeft: "10px" }}>
                        {feature.items.map((item, subIndex) => (
                            <li key={subIndex} style={{ listStyleType: "none" }}>
                                {renderFeature(item, subIndex, level + 1)}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div key={index} className={className}>
                    <strong>{feature.title}</strong>
                    <ul style={{ marginLeft: "15px", paddingLeft: "10px" }}>
                        {feature.items.map((item, subIndex) => (
                            <li key={subIndex} style={{ listStyleType: "none" }}>
                                {renderFeature(item, subIndex, level + 1)}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
    return null;
};

export const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text;

    return text.split("").map((char, index) =>
        /[A-Za-z0-9 ]/.test(char)
            ? char
            : <span key={index} className="fallback-font">{char}</span>
    );
};

const ColorSection = ({ title, description, description2, features, heading, heading2 }) => {
    return (
        <div className="custsectionStyle customContainer" style={{ marginTop: "0px", marginBottom: "0px" }}>
            {title && <h2 className="title">{applyFontFallback(title)}</h2>}

            {heading && <p style={{ fontFamily: "The Seasons", fontWeight: "600" }}><strong>{heading}</strong></p>}
            {description && <p>{description}</p>}
            {heading2 && <p style={{ fontFamily: "The Seasons", fontWeight: "600" }}><strong>{heading2}</strong></p>}

            {features && <div className="featuresContainer divP">{features.map((feature, index) => renderFeature(feature, index, 1))}</div>}
            {description2 && <p>{description2}</p>}
        </div>
    );
};

export default ColorSection;