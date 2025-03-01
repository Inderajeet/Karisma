import React from "react";
import "../../components/Header.css";
import "../dental/DentalBanner.css";
import { Link } from "react-router-dom";


const RelatedServBanner = ({ bannerImage, bannerPosition }) => {
    console.log('Inside banner:', bannerImage);
    const bannerImageUrl = bannerImage.startsWith("http")
        ? bannerImage
        : `${window.location.origin}/assets/${bannerImage.replace(/^(\.\.\/)+assets\//, '')}`;

    console.log("Final Banner Image URL:", bannerImageUrl); // Debugging
    return (
        <>
            {/* <div
                className="customContainer dental-background-img"
                style={{
                    backgroundImage: `url(${bannerImageUrl})`, backgroundPosition: `${bannerPosition}`
                }} >
                <div className="img-overlay"></div>
            </div> */}
            <div class="customContainer relatedServ">
                <img
                    src={bannerImageUrl}
                    style={{ objectPosition: `${bannerPosition}` }}
                     />
            </div>
        </>
    );
};

export default RelatedServBanner;
