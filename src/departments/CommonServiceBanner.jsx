import React from "react";
import "../components/Header.css";
import "./ServiceBanner.css";
import { Link, useParams } from "react-router-dom";

export const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text; // Prevent errors on undefined/null values

    return text.split(/\b/).map((word, index) => 
        /^[A-Za-z0-9 ]+$/.test(word) // If word is English/number/space, keep normal font
            ? word
            : <span key={index} className="fallback-font">{word}</span> // Apply fallback only for non-English words
    );
};


const CommonServiceBanner = ({ deptName, serviceName, bannerImage, bannerPosition, deptLink, home }) => {
    const { lng } = useParams();

    const getBannerImageUrl = () => {
        if (!bannerImage) {
            return `${window.location.origin}/assets/Images/default-banner.png`;
        }

        // First, clean the input by removing any /uploads/ prefix if it exists
        const cleanedBannerImage = bannerImage.replace(/^\/?uploads\//, '');

        // Check if it's already a valid URL
        try {
            const url = new URL(cleanedBannerImage);
            if (['http:', 'https:'].includes(url.protocol)) {
                return cleanedBannerImage;
            }
        } catch (e) {
            // Not a valid URL, continue processing
        }

        // If it contains your domain name but is malformed
        if (cleanedBannerImage.includes('karisma.dmaksolutions.com')) {
            return cleanedBannerImage.startsWith('http') 
                ? cleanedBannerImage 
                : `https://${cleanedBannerImage.replace(/^\/+/, '')}`;
        }

        // Default case - treat as local path
        return `${window.location.origin}/uploads/${cleanedBannerImage.replace(/^\/+/, '')}`;
    };

    const bannerImageUrl = getBannerImageUrl();
    console.log('Final banner URL:', bannerImageUrl);



    return (
        <>
            <div
                className="background-img"
                style={{
                    backgroundImage: `url(${bannerImageUrl})`, backgroundPosition: `${bannerPosition}`
                }}            >
                <div className="img-overlay"></div>
            </div>
            <div className="container" style={{ position: "relative", top: '100px' }}>
                <div className="mainBanner">
                    <div className="captionBx" style={{ color: "white" }}>
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-wrap">
                                    <ul className="page-title-elements page-title-center pull-center">
                                        <h1 className="page-title">{applyFontFallback(serviceName || deptName)}</h1>
                                        <div className="breadcrumbs-wrap">
                                            <li className="breadcrumb-wrap">
                                                <ul id="breadcrumb" className="breadcrumb nav" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <li>
                                                        <Link to={`/${lng}`}>
                                                            <span style={{ color: '#fff' }}>{home}</span>
                                                        </Link>
                                                    </li>
                                                    {deptName && (
                                                        <li>
                                                            <Link
                                                                to={`/${lng}/${lng === 'ar' ? deptLink : deptName.toLowerCase()}`}
                                                                style={{ color: '#fff', marginLeft: '5px' }}
                                                            >
                                                                <span className="breadcrumb-separator">|</span> {deptName}
                                                            </Link>
                                                        </li>
                                                    )}
                                                    {serviceName && (
                                                        <li>
                                                            <span style={{ color: '#fff', marginLeft: '5px' }}>
                                                                <span className="breadcrumb-separator">|</span> {serviceName}
                                                            </span>
                                                        </li>
                                                    )}
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommonServiceBanner;
