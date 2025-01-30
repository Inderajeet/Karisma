import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";
import DeptBanner from "./deptbanner";
import Blog from "./blog";
import ParaSection from "./para_section";
import PointBlog from "./point_blog";
import OralSurgeryProcedure from "./oralSurgeryProcedure";
import DoctorGrid from "./doctor_grid";

const Injections = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("slimming");
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

  const slimming = t("slimming", { returnObjects: true });
  const injections = slimming?.injections;
 
  return (
    <div>
      <DeptBanner
        pageName="Injections"
        bannerImg={images.about.visionImg}
      ></DeptBanner>
      <Blog
        blogImg={injections.blog1?.blogImg}
        blogTitle={injections.blog1?.title}
        blogDesc={injections.blog1?.description}
        // additionalParagraphs={[machines.blog1?.content]}
      />
      {injections?.paras.map((p,i)=>{
        return (
          <PointBlog key={i} title={p.title} description={p.description} benefits={p.subcategories} />
        )
      })}
     
       <ParaSection title={injections?.para_sec1?.title} desc={injections?.para_sec1?.description} />
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>{injections?.para_sec1?.title}</h1>
        {injections?.para_sec1?.description?.map((desc, index) => (
          <p
            key={index}
            style={index === 0 ? styles.subtitle : styles.description}
          >
            {desc}
          </p>
        ))}
        <div style={styles.procedureList}>
          {injections?.para_sec1?.content?.map((procedure, index) => (
            <div key={index} style={styles.procedureCard}>
              <h3 style={styles.procedureTitle}>{procedure.title}</h3>
              <p style={styles.procedureDescription}>{procedure.description}</p>
              <a href={procedure.link} style={styles.readMore}>
                Read More
              </a>
            </div>
          ))}
        </div>
       
      </div>
    
      <ParaSection title={injections?.para_sec2?.title} desc={injections?.para_sec2?.description} extraContent={<DoctorGrid data={injections?.para_sec2?.content} />} />
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

export default Injections;
