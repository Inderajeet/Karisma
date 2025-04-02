import React from 'react';
import '../../custom_css/serviceTemplate.css';

// Reuse the same renderFeature function from ContentSection
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
    return text.split(/\b/).map((word, index) => 
        /^[A-Za-z0-9 ]+$/.test(word)
            ? word
            : <span key={index} className="fallback-font">{word}</span>
    );
};

const ImageContentNew = ({ 
    title, 
    heading, 
    description, 
    description2, 
    features, 
    heading2,
    imageUrl, 
    imageAlt
}) => {
    const getImageUrl = () => {
        if (!imageUrl) {
            return `${window.location.origin}/assets/Images/default-image.png`;
        }

        // First, clean the input by removing any incorrect prefixes
        const cleanedImageUrl = imageUrl.replace(/^\/?uploads\//, '');

        // Case 1: Already a complete URL (http/https)
        if (/^https?:\/\//i.test(cleanedImageUrl)) {
            return cleanedImageUrl;
        }

        // Case 2: Contains your domain but missing protocol
        if (cleanedImageUrl.includes('karisma.dmaksolutions.com')) {
            return cleanedImageUrl.startsWith('http') 
                ? cleanedImageUrl 
                : `https://${cleanedImageUrl.replace(/^\/+/, '')}`;
        }

        // Case 3: Starts with /storage/ (Laravel storage)
        if (cleanedImageUrl.startsWith('/storage/')) {
            return `${window.location.origin}${cleanedImageUrl}`;
        }

        // Default case: Treat as local file
        return `${window.location.origin}/uploads/${cleanedImageUrl.replace(/^\/+/, '')}`;
    };

    const finalImageUrl = getImageUrl();
    return (
        <section className="imgSect">
            <div className="customContainer">
                <div className={`contentWrap `}>
                    {/* Image Section */}
                    <div className="imgBx">
                        <img src={finalImageUrl} loading="lazy" alt={imageAlt} />
                    </div>

                    {/* Content Section */}
                    <div className="cont">
                        {title && <h2 className="title">{applyFontFallback(title)}</h2>}
                        {heading && <p style={{ fontFamily: 'The Seasons', fontWeight: '600' }}><strong>{heading}</strong></p>}
                        {description && <p>{description}</p>}
                        {heading2 && <p style={{ fontFamily: 'The Seasons', fontWeight: '600' }}><strong>{heading2}</strong></p>}
                        {features && <div className="featuresContainer divP">{features.map((feature, index) => renderFeature(feature, index, 1))}</div>}
                        {description2 && <p>{description2}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageContentNew;