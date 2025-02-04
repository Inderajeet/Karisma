import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";

const Elite = () => {
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
  const data = laserHair?.elite;
  return <div>
    <DeptBanner pageName = "Elite IQ" bannerImg = {images.about.visionImg}></DeptBanner>
    <Blog
        blogImg={images.about.visionImg}
        blogTitle={data.blog1?.title}
        blogDesc={data.blog1?.description}
        additionalParagraphs={[
          data.blog1?.content
        ]}
        bulletPoints={data.blog1?.bulletPoints}
      />
      
      <PointBlog title={data?.point_blog1?.title} description={data?.point_blog1?.description} benefits={data?.point_blog1?.benefits} />
      <PointBlog title={data?.point_blog2?.title} description={data?.point_blog2?.description} benefits={data?.point_blog2?.benefits} />
      <PointBlog title={data?.point_blog3?.title} description={data?.point_blog3?.description} benefits={data?.point_blog3?.benefits} />

    
  </div>;
};

export default Elite;
