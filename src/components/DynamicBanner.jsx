import React from "react";
import "./Header.css";
import "./Banner.css";
import { Link } from "react-router-dom";

const DynamicBanner = ({ deptName, serviceName, bannerImage }) => {
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
                                        <h1 className="page-title">{serviceName || deptName}</h1>
                                        <div className="breadcrumbs-wrap">
                                            <li className="breadcrumb-wrap">
                                                <ul id="breadcrumb" className="breadcrumb nav">
                                                    <li>
                                                        <Link to="/">
                                                            <span style={{ fontSize: "17px" }}>Home</span>
                                                        </Link>
                                                    </li>
                                                    {deptName && (
                                                        <li style={{ fontSize: "17px", marginLeft: "4px" }}>
                                                            <Link to={`/department/${deptName.toLowerCase()}`}>
                                                               | {deptName}
                                                            </Link>
                                                        </li>
                                                    )}
                                                    {serviceName && (
                                                        <li style={{ fontSize: "17px", marginLeft: "4px" }}>
                                                            &gt; {serviceName}
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
