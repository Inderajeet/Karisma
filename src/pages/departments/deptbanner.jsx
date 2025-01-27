import React, { useState, useEffect } from "react";
import "../../components/Header.css";
import "../../components/Banner.css";

const DeptBanner = (props) => {
  return (
    <>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${props?.bannerImg})` }}
      >
        <div className="img-overlay"></div> 
      </div>
      <div className="container" style={{ position: "relative", zIndex: "100" }}>
        <div className="mainBanner">
          <div className="captionBx" style={{ color: "white" }}>
            <div className="row">
              <div className="col-12">
                <div className="page-title-wrap">
                  <ul className="page-title-elements page-title-center pull-center">
                    <h1 className="page-title">{props.pageName}</h1>
                    <div className="breadcrumbs-wrap">
                      <li className="breadcrumb-wrap">
                        <ul id="breadcrumb" className="breadcrumb nav">
                          <li>
                            <a href="/">
                              <span style={{ fontSize: "17px" }}>Home</span>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                            &gt; <span style={{ fontSize: "17px" }}>Department</span>
                            </a>
                          </li>
                          <li style={{ fontSize: "17px", marginLeft: "4px" }}>
                            &gt; {props.pageName}
                          </li>
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

export default DeptBanner;
