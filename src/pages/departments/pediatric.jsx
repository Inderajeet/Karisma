import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";

const Pediatric = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("pediatric");
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

  const pediatric = t("pediatric", { returnObjects: true });
  
  return <div>
    <DeptBanner pageName = "Pediatric" bannerImg = {images.about.visionImg}></DeptBanner>
    <Blog
        blogImg={images.about.visionImg}
        blogTitle={pediatric.blog1?.title}
        blogDesc={pediatric.blog1?.description}
        additionalParagraphs={[
          pediatric.blog1?.content
        ]}
      />
       <PointBlog 
       title={pediatric?.point_blog1?.title} 
       description={pediatric?.point_blog1?.description} 
       benefits={pediatric?.point_blog1?.benefits} />
     
      <PointBlog title={pediatric?.para_sec1?.title} description={pediatric?.para_sec1?.description} description2={pediatric?.para_sec1?.benefits?.title} benefits={pediatric?.para_sec1?.benefits?.benefits} />
      <PointBlog title={pediatric?.point_blog3?.title} description={pediatric?.point_blog3?.description} description2={pediatric?.point_blog3?.description2} benefits={pediatric?.point_blog3?.benefits} />
      <PointBlog title={pediatric?.point_blog4?.title} description={pediatric?.point_blog4?.description} description2={pediatric?.point_blog4?.description2} benefits={pediatric?.point_blog4?.benefits} />
      <PointBlog title={pediatric?.point_blog5?.title} description={pediatric?.point_blog5?.description} description2={pediatric?.point_blog5?.description2} benefits={pediatric?.point_blog5?.benefits} />
      <PointBlog title={pediatric?.point_blog6?.title} description={pediatric?.point_blog6?.description} description2={pediatric?.point_blog6?.description2} benefits={pediatric?.point_blog6?.benefits} />
      <PointBlog title={pediatric?.point_blog7?.title} description={pediatric?.point_blog7?.description} description2={pediatric?.point_blog7?.description2} benefits={pediatric?.point_blog7?.benefits} />
      <ParaSection title={pediatric?.para_sec2?.title} desc={pediatric?.para_sec2?.description} />;
      <ParaSection title={pediatric?.para_sec3?.title} desc={pediatric?.para_sec3?.description} />;
  </div>;
};

export default Pediatric;
