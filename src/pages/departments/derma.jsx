import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";
import OralSurgeryProcedure from "./oralSurgeryProcedure";
import { Link } from "react-router-dom";
import "../../custom_css/doctor.css";
import i18n from "../../i18n";
const Derma = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("derma");
 


  const derma = t("derma", { returnObjects: true });
 const data = derma?.general_page;
  return (
    <div>
      <DeptBanner
        pageName="Derma"
        bannerImg={derma?.bannerImg}
      ></DeptBanner>
      <Blog
        blogImg={data?.blog1?.blogImg}
        blogTitle={data?.blog1?.title}
        blogDesc={data?.blog1?.description}
        additionalParagraphs={[data?.blog1?.content]}
      />
     
      
      <OralSurgeryProcedure procedures={data?.paras} />
     
      
      <ParaSection
        title={data?.para_sec1?.title}
        desc={data?.para_sec1?.description}
      />
      <div
        className="happysmile-content-wrap container page"
        style={{ marginTop: "50px" }}
      >
        <div className="col-md-12 order-md-2">
          <div className="post-inner">
            <div className="entry-content">
              <div className="elementor elementor-73315">
                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                <h1>Related Services</h1>
                  <div className="e-con-inner">
                    <div className="dd-row">
                      {data?.related_services?.map((service, index) => (
                        <Link
                          to={`/${i18n.language}/skinCare/${encodeURIComponent(
                            service?.link
                          )}`}
                          key={index}
                          className="doctor-info-cols"
                          style={{ cursor: "pointer" }}
                        >
                          {/* <h1>{service?.title}</h1> */}
                          <div className="dd-inner">
                            <div className="cust-doctor-info-wrap">
                              <div className="doctor-thumbnail">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width={500}
                                  height={456}
                                  src={service.image}
                                  className="img-responsive wp-post-image"
                                  alt={service.title}
                                />
                              </div>
                              <div className="doctor-info-body">
                                <div className="doctor-name">
                                  {service.title}
                                </div>
                                <div className="doctor-info-inner">
                                  {/* <div className="doctor-specialities">
                                          <div className="doctor-departments">{service.designation}</div>
                                        </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Derma;
