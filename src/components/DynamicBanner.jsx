import React, { useEffect } from "react";
import "./Header.css";
import "./Banner.css";
import { Link, useParams } from "react-router-dom";

export const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text; // Prevent errors on undefined/null values

    return text.split("").map((char, index) =>
        /[A-Za-z0-9 ]/.test(char) // Keep normal text in Seasons
            ? char
            : <span key={index} className="fallback-font">{char}</span> // Force fallback for everything else
    );
};

const DynamicBanner = ({ deptName, serviceName, bannerImage }) => {
    const { lng } = useParams();
    console.log('Inside banner:', bannerImage);
    const bannerImageUrl = bannerImage.startsWith("http")
        ? bannerImage
        : `${window.location.origin}/assets/${bannerImage.replace(/^(\.\.\/)+assets\//, '')}`;

    console.log("Final Banner Image URL:", bannerImageUrl); // Debugging
    return (
        <>
            <div
                className="background-img"
                style={{
                    backgroundImage: `url(${bannerImageUrl})`
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
                                                <ul id="breadcrumb" className="breadcrumb nav">
                                                    <li>
                                                        <Link to={`/${lng}`}>
                                                            <span style={{ color: '#fff' }}>Home</span>
                                                        </Link>
                                                    </li>
                                                    {deptName && (
                                                        <li style={{ marginLeft: "4px" }}>
                                                            <Link to={`/${lng}/${deptName.toLowerCase()}`}
                                                                style={{ color: '#fff' }}>
                                                                | {deptName}
                                                            </Link>
                                                        </li>
                                                    )}
                                                    {serviceName && (
                                                        <li style={{ marginLeft: "4px", color: '#fff' }}>
                                                            | {serviceName}
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

export default DynamicBanner;
