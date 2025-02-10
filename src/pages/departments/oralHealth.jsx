import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";
import OralSurgeryProcedure from "./oralSurgeryProcedure";

const OralHealth = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("oralHealth");
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageData = await fetchAllJson();

        setImageData(imageData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (!ready || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const { images } = imageData;

  const oralHealth = t("oralHealth", { returnObjects: true });
  return (
    <div>
      <DeptBanner
        pageName="Oral health (Gum treatment)"
        bannerImg={oralHealth?.bannerImg}
      ></DeptBanner>
      <Blog
        blogImg={oralHealth?.blog1?.blogImg}
        blogTitle={oralHealth.blog1?.title}
        blogDesc={oralHealth.blog1?.description}
        additionalParagraphs={[oralHealth.blog1?.content]}
      />
      <ParaSection
        title={oralHealth?.para_sec1?.title}
        desc={oralHealth?.para_sec1?.description}
      />
      <h1 style={styles.mainTitle}>{oralHealth?.para_sec2?.title}</h1>
      <p style={styles.description}>{oralHealth?.para_sec2?.description}</p>
      <OralSurgeryProcedure procedures={oralHealth?.paras} />
      <PointBlog
        title={oralHealth?.point_blog1?.title}
        description={oralHealth?.point_blog1?.description}
        description2={oralHealth?.point_blog4?.description2}
        benefits={oralHealth?.point_blog1?.benefits}
      />
      <ParaSection
        title={oralHealth?.para_sec3?.title}
        desc={oralHealth?.para_sec3?.description}
      />
    </div>
  );
};

const styles = {
  mainTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#005a87",
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "50px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "30px",
    maxWidth: "1000px",
    margin: "0px auto",
  },
}
export default OralHealth;
