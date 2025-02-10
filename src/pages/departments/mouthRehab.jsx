import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";

const MouthRehabilitation = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("mouthRehabilitation");
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

  const mouthRehabilitation = t("mouthRehabilitation", { returnObjects: true });
  return <div>
    <DeptBanner pageName = "Mouth Rehabilitation" bannerImg = {mouthRehabilitation?.bannerImg}></DeptBanner>
    <Blog
        blogImg={mouthRehabilitation?.blog1?.blogImg}
        blogTitle={mouthRehabilitation.blog1?.title}
        blogDesc={mouthRehabilitation.blog1?.description}
        additionalParagraphs={[
            mouthRehabilitation.blog1?.content
        ]}
      />
      
      <PointBlog title={mouthRehabilitation?.point_blog1?.title} description={mouthRehabilitation?.point_blog1?.description} benefits={mouthRehabilitation?.point_blog1?.benefits} />
      <ParaSection title={mouthRehabilitation?.para_sec2?.title} desc={mouthRehabilitation?.para_sec2?.description} />;
      <PointBlog title={mouthRehabilitation?.point_blog2?.title} description={mouthRehabilitation?.point_blog2?.description} benefits={mouthRehabilitation?.point_blog2?.benefits} />
      <PointBlog title={mouthRehabilitation?.point_blog3?.title} description={mouthRehabilitation?.point_blog3?.description} benefits={mouthRehabilitation?.point_blog3?.benefits} />
      <ParaSection title={mouthRehabilitation?.para_sec1?.title} desc={mouthRehabilitation?.para_sec1?.description} />;
      <ParaSection title={mouthRehabilitation?.para_sec2?.title} desc={mouthRehabilitation?.para_sec2?.description} />;
      <PointBlog title={mouthRehabilitation?.point_blog4?.title} description={mouthRehabilitation?.point_blog4?.description} benefits={mouthRehabilitation?.point_blog4?.benefits} />
      <ParaSection title={mouthRehabilitation?.para_sec3?.title} desc={mouthRehabilitation?.para_sec3?.description} />;
  </div>;
};

export default MouthRehabilitation;
