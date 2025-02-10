import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";

const TeethWhitening = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("teethWhitening");
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

  const teethWhitening = t("teethWhitening", { returnObjects: true });
  return <div>
    <DeptBanner pageName = "Teeth Whitening" bannerImg = {teethWhitening?.bannerImg}></DeptBanner>
    <Blog
        blogImg={teethWhitening?.blog1?.blogImg}
        blogTitle={teethWhitening.blog1?.title}
        blogDesc={teethWhitening.blog1?.description}
        additionalParagraphs={[
          teethWhitening.blog1?.content
        ]}
      />
      <ParaSection title={teethWhitening?.para_sec1?.title} desc={teethWhitening?.para_sec1?.description} />;
      <PointBlog title={teethWhitening?.point_blog1?.title} description={teethWhitening?.point_blog1?.description} benefits={teethWhitening?.point_blog1?.benefits} />
      <ParaSection title={teethWhitening?.para_sec2?.title} desc={teethWhitening?.para_sec2?.description} />;
      <PointBlog title={teethWhitening?.point_blog2?.title} description={teethWhitening?.point_blog2?.description} benefits={teethWhitening?.point_blog2?.benefits} />
      <PointBlog title={teethWhitening?.point_blog3?.title} description={teethWhitening?.point_blog3?.description} benefits={teethWhitening?.point_blog3?.benefits} />
      <ParaSection title={teethWhitening?.para_sec3?.title} desc={teethWhitening?.para_sec3?.description} />;
  </div>;
};

export default TeethWhitening;
