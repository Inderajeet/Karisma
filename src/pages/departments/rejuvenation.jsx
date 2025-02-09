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
import SkinRejuvenation from "./rejuTemplate";
const Rejuvenation = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("derma");
 


  const derma = t("derma", { returnObjects: true });
 const data = derma?.rejuvenation;
  return (
    <div>
      <DeptBanner
        pageName="Rejuvenation Injection"
        bannerImg={data?.bannerImg}
      ></DeptBanner>
      <Blog
        blogImg={data?.blog1?.blogImg}
        blogTitle={data?.blog1?.title}
        blogDesc={data?.blog1?.description}
        additionalParagraphs={data?.blog1?.content}
      />
      <OralSurgeryProcedure procedures={data?.paras} />
      <SkinRejuvenation data={data.para1} />
      <ParaSection
      // style={{ backgroundColor: "transparent", marginBottom: "-100px" }}
        title={data?.para_sec1?.title}
        desc={data?.para_sec1?.description}
        extraContent={<PointBlog title={data?.para_sec1?.point_blog1?.title} description={data?.para_sec1?.point_blog1?.description} benefits={data?.para_sec1?.point_blog1?.benefits} />}
      />
      <OralSurgeryProcedure procedures={data?.paras2} />
      {
        data?.point_blogs.map((p,i)=>{
          return <PointBlog key={i} title={p.title} description={p.description} benefits={p.benefits} />
        })
      }
     
     
      
      
      <ParaSection
        title={data?.para_sec2?.title}
        desc={data?.para_sec2?.description}
      />
      
    
     
    
    </div>
  );
};




  
export default Rejuvenation;
