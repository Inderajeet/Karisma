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
import SlidingDoct from "../../departments/service templates/SlidingDoct";
import SlidingDoct1 from "../../departments/service templates/SlidingDoct1";
const Botox = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("derma");

  const derma = t("derma", { returnObjects: true });
  const data = derma?.botox;
  console.log(derma)
  return (
    <div>
      <DeptBanner pageName="Botox" bannerImg={derma?.bannerImg}></DeptBanner>
      <Blog
        blogImg={data?.blog1?.blogImg}
        blogTitle={data?.blog1?.title}
        blogDesc={data?.blog1?.description}
        additionalParagraphs={data?.blog1?.content}
      />
      <ParaSection
        style={{ backgroundColor: "transparent", textAlign:"left" }}
        title={data?.para_sec5?.title}
        desc={data?.para_sec5?.description}
        extraContent={ <PointBlog
          title={data?.point_blog1?.title}
          description={data?.point_blog1?.description}
          benefits={data?.point_blog1?.benefits}
        />}
      />
     

      <OralSurgeryProcedure procedures={data?.paras1} />

      <ParaSection
        title={data?.para_sec1?.title}
        desc={data?.para_sec1?.description}
      />
      <ParaSection
        title={data?.para_sec2?.title}
        desc={data?.para_sec2?.description}
      />
      <OralSurgeryProcedure procedures={data?.paras2} />
      <ParaSection
        title={data?.para_sec3?.title}
        desc={data?.para_sec3?.description}
      />
      <OralSurgeryProcedure procedures={data?.paras3} />
      <ParaSection
        title={data?.para_sec4?.title}
        desc={data?.para_sec4?.description}
      />
     {/* <SlidingDoct1
  doctors={data.doctors} // Pass the entire doctors object
  isRTL={i18n.dir() === "rtl"} // Pass direction info
/> */}

    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "50px auto",
    padding: "20px",
    //   textAlign: "center",
  },
  mainTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#005a87",
    textAlign: "center",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#444",
    marginBottom: "15px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "30px",
  },
  procedureList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  procedureCard: {
    backgroundColor: "#c4a988",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
  },
  procedureTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  procedureDescription: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  readMore: {
    color: "#008cba",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "bold",
  },
};

export default Botox;
