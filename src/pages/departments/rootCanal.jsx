import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";

const RootCanal = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("rootCanal");
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

  const rootCanal = t("rootCanal", { returnObjects: true });
  return <div>
    <DeptBanner pageName = "Root Canal" bannerImg = {rootCanal?.bannerImg}></DeptBanner>
    <Blog
        blogImg={rootCanal?.blog1?.blogImg}
        blogTitle={rootCanal.blog1?.title}
        blogDesc={rootCanal.blog1?.description}
        additionalParagraphs={[
            rootCanal.blog1?.content
        ]}
      />
      <ParaSection title={rootCanal?.para_sec1?.title} desc={rootCanal?.para_sec1?.description} />;
      <PointBlog title={rootCanal?.point_blog1?.title} description={rootCanal?.point_blog1?.description} benefits={rootCanal?.point_blog1?.benefits} />
      
      <PointBlog title={rootCanal?.point_blog2?.title} description={rootCanal?.point_blog2?.description} benefits={rootCanal?.point_blog2?.benefits} />
      <PointBlog title={rootCanal?.point_blog3?.title} description={rootCanal?.point_blog3?.description} benefits={rootCanal?.point_blog3?.benefits} />
      <PointBlog title={rootCanal?.point_blog4?.title} description={rootCanal?.point_blog4?.description} description2={rootCanal?.point_blog4?.desc1} benefits={rootCanal?.point_blog4?.benefits} />
      <ParaSection title={rootCanal?.para_sec2?.title} desc={rootCanal?.para_sec2?.description} />;
      <ParaSection title={rootCanal?.para_sec3?.title} desc={rootCanal?.para_sec3?.description} />;
  </div>;
};

export default RootCanal;
