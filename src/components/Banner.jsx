import React from "react";
import "./Header.css";
import "./Banner.css";

const Banner = () => {


  return (
    <>
      <div
        className="background-img"
        style={{ backgroundImage: `url("https://damasmc.com/uploads/banners/bannerimage68e2318425ebbe7d65777d85eb6a11ecbabc116c.jpg")` }}
      >
        <div className="img-overlay"></div>
      </div>
      <div className="container" style={{ position: "relative", top: '100px'}}>
        <div className="mainBanner">
          <div className="captionBx" style={{ color: "white" }}>
            <div className="row">
              <div className="col-12">
                <div className="page-title-wrap">
                  <ul className="page-title-elements page-title-center pull-center">
                    <h1 className="page-title">Contact Us</h1>
                    <div className="breadcrumbs-wrap">
                      <li className="breadcrumb-wrap">
                        <ul id="breadcrumb" className="breadcrumb nav">
                          <li>
                            <a href="/">
                              <span style={{ fontSize: "17px" }}>Home</span>
                            </a>
                          </li>
                          <li style={{ fontSize: "17px", marginLeft: "4px" }}>
                            &gt; Contact Us
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

export default Banner;
