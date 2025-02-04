import React, { useEffect, useState } from 'react'
import DeptBanner from './deptbanner'
import { useTranslation } from 'react-i18next';
import { fetchAllJson, fetchDentalContent } from '../../utils/fetchAllJson';
import Blog from './blog';
import PointBlog from './point_blog';
import ParaSection from './para_section';
import { TbPointFilled } from "react-icons/tb";
import OralSurgeryProcedure from './oralSurgeryProcedure';
import DoctorGrid from './doctor_grid';

const BodyFiller = () => {
    const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);
         const { t, ready } = useTranslation('derma');
       
         
      
          
          const derma = t('derma', { returnObjects: true });
          const data = derma?.body_filler;

          const temp =  <div style={styles.container}>
         {data?.paras1?.content.map((filler, index) => (
           <div key={index} style={styles.section}>
             <h3 style={styles.title}>{filler.title}</h3>
             <ul style={styles.list}>
               {filler.details.map((item, i) => (
                 <li key={i} style={styles.listItem}>
                   <strong>{item.label}:</strong> {item.value}
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>;

const temp2 =  <div style={styles.container}>
{data?.blog1?.additional_description.map((filler, index) => (
  <div key={index} style={styles.section}>
    <h3 style={styles.title}>{filler.title}</h3>
   <p>{filler.description}</p>
  </div>
))}
</div>;

const temp3 =  <div>
  <ul style={styles.list}>
    {derma?.derma_filler?.point_blog1?.benefits?.map((point, index) => (
      <li key={index} style={styles.point}>
        <TbPointFilled /> {point}
      </li>
    ))}
  </ul>
  {derma?.derma_filler?.point_blog1?.para.map((p,i)=>{
    return <div style={{marginTop:"40px"}} key={i}>
      <p style={styles.subtitle}>{p?.title}</p>
      <p style={styles.description}>{p?.description}</p>
    </div>
  })}
</div>;

  return (
    <div>
      <DeptBanner pageName = "Body Fillers" bannerImg = {data?.bannerImg}></DeptBanner>
      <Blog
        blogImg={data?.blog1?.blogImg}
        blogTitle={data?.blog1?.title}
        blogDesc={data?.blog1?.description}
        // additionalParagraphs={
        //   data?.blog1?.additional_description
        // }
        extraContent={temp2}
      />
      <ParaSection  title={data?.para_sec1?.title} desc={data?.para_sec1?.description}/>;
    <PointBlog title={derma?.derma_filler?.point_blog1?.title} description={derma?.derma_filler?.point_blog1?.description} description2={derma?.derma_filler?.point_blog1?.description2} extraContent={temp3} />
    <OralSurgeryProcedure procedures={derma?.derma_filler?.paras3} />
    <ParaSection title={data?.para_sec2?.title} desc={data?.para_sec2?.description} />;
    <ParaSection title={data?.para_sec3?.title} desc={data?.para_sec3?.description} />;
   
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "20px auto",
    padding: "20px",
    // backgroundColor: "#f9f9f9",
    // borderRadius: "10px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: "25px",
    padding: "15px",
    // borderBottom: "1px solid #ddd",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    // color: "#333",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    listStyleType: "disc",
  },
  listItem: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "5px",
  },
  // container: {
  //   maxWidth: "1000px",
  //   margin: "50px auto",
  //   padding: "20px",
  //   //   textAlign: "center",
  // },
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
  }
};
export default BodyFiller
