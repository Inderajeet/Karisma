import React, { useState, useEffect } from "react";
import { fetchAllJson } from "../utils/fetchAllJson";
import "./Header.css";
import "./Banner.css";

const BannerSkinCare = () => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllJson();
        setJsonData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return ;
  }

  if (error) {
    return ;
  }

  const { images } = jsonData;
  const { contact } = images;

  return (
    <>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${contact?.bannerImg})` }}
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
                    <h1 className="page-title">SkinCare</h1>
                    <div className="breadcrumbs-wrap">
                      <li className="breadcrumb-wrap">
                        <ul id="breadcrumb" className="breadcrumb nav">
                          <li>
                            <a href="/">
                              <span style={{ fontSize: "17px" }}>Home</span>
                            </a>
                          </li>
                          <li style={{ fontSize: "17px", marginLeft: "4px" }}>
                            &gt; SkinCare
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

export default BannerSkinCare;
