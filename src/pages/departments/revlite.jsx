import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";

const Revlite = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("laserHair");
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

  const laserHair = t("laserHair", { returnObjects: true });
  const data = laserHair?.revlite;
  return <div>
    <DeptBanner pageName = "RevLite SI" bannerImg = {laserHair?.bannerImg}></DeptBanner>
    <Blog
        blogImg={data?.blog1?.blogImg}
        blogTitle={data.blog1?.title}
        blogDesc={data.blog1?.description}
        additionalParagraphs={[
          data.blog1?.content
        ]}
        bulletPoints={data.blog1?.bulletPoints}
      />
      
      
      
      <ParaSection style={{"margin-top":"30px", "background-color":"transparent"}} title={data?.para_sec1?.title} desc={data?.para_sec1?.description} />;
      <ParaSection style={{"margin-top":"-30px","background-color":"transparent"}} title={data?.para_sec2?.title} desc={data?.para_sec2?.description} />;
      
      <ParaSection  title={data?.para_sec3?.title} desc={data?.para_sec3?.description} />;
      <ParaSection style={{"margin-top":"-100px"}} title={data?.para_sec4?.title} desc={data?.para_sec4?.description} />;
  </div>;
};

export default Revlite;
