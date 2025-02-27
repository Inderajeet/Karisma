import React from "react";
import "../../components/Header.css";
import "../dental/DentalBanner.css";
import { Link } from "react-router-dom";


const RelatedServBanner = ({ bannerImage }) => {
    console.log('Inside banner:', bannerImage);
    const bannerImageUrl = bannerImage.startsWith("http")
        ? bannerImage
        : `${window.location.origin}/assets/${bannerImage.replace(/^(\.\.\/)+assets\//, '')}`;

    console.log("Final Banner Image URL:", bannerImageUrl); // Debugging
    return (
        <>
            <div
                className="customContainer dental-background-img"
                style={{
                    backgroundImage: `url(${bannerImageUrl})`
                }}            >
                <div className="img-overlay"></div>
            </div>
        </>
    );
};

export default RelatedServBanner;
