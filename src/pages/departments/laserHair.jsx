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
const LaserHair = () => {
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
  const data = laserHair?.general_page;
  console.log(data, laserHair);
  return (
    <div>
      <DeptBanner
        pageName="Laser Hair Removal"
        bannerImg={laserHair?.bannerImg}
      ></DeptBanner>
      <Blog
        blogImg={data.blog1?.blogImg}
        blogTitle={data.blog1?.title}
        blogDesc={data.blog1?.description}
        additionalParagraphs={data.blog1?.additional_description}
      />
      <PointBlog title={data?.point_blog1?.title} description={data?.point_blog1?.description} benefits={data?.point_blog1?.benefits} />
      <ParaSection
        title={data?.para_sec1?.title}
        desc={data?.para_sec1?.description}
      />
      <PointBlog title={data?.point_blog2?.title} description={data?.point_blog2?.description} benefits={data?.point_blog2?.benefits} />
      <PointBlog title={data?.point_blog3?.title} description={data?.point_blog3?.description} benefits={data?.point_blog3?.benefits} />
      <PointBlog title={data?.point_blog4?.title} description={data?.point_blog4?.description} benefits={data?.point_blog4?.benefits} />
      {/* <OralSurgeryProcedure procedures={data?.paras} /> */}
      <ParaSection
        title={data?.para_sec2?.title}
        desc={data?.para_sec2?.description}
      />
      <h1 className="title benefits-container customContainer ">Related Services</h1>

      <ListServices services={data?.related_services} />

    </div>
  );
};

export default LaserHair;
