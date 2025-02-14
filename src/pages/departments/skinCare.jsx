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
import ListServices from "../../departments/service templates/ListServices";
const SkincareGp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("skinCare");



  const data = t("skinCare", { returnObjects: true });

  return (
    <div>
      <DeptBanner
        pageName="Skincare"
        bannerImg={data?.bannerImg}
      ></DeptBanner>
      <Blog
        blogImg={data.blog1?.blogImg}
        blogTitle={data.blog1?.title}
        blogDesc={data.blog1?.description}
        additionalParagraphs={[data.blog1?.content]}
      />


      <OralSurgeryProcedure procedures={data?.paras} />


      <ParaSection
        title={data?.para_sec1?.title}
        desc={data?.para_sec1?.description}
      />
      <h1 className="title benefits-container customContainer ">Related Services</h1>

      <ListServices services={data?.related_services} />
    </div>
  );
};

export default SkincareGp;
