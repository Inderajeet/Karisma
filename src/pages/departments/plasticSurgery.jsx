import React, { useEffect, useState } from 'react'
import DeptBanner from './deptbanner'
import { useTranslation } from 'react-i18next';
import { fetchAllJson, fetchDentalContent } from '../../utils/fetchAllJson';
import Blog from './blog';
import PointBlog from './point_blog';
import ParaSection from './para_section';
import { Link } from "react-router-dom";
import "../../custom_css/doctor.css";
import i18n from "../../i18n";
import ListServices from '../../departments/service templates/ListServices';

const PlasticSurgery = () => {
    const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);
         const { t, ready } = useTranslation('plasticSurgery');
         const [imageData, setImageData] = useState(null);
        
         useEffect(() => {
             const fetchData = async () => {
               try {
               
                 const imageData = await fetchAllJson(); 
                
                 setImageData(imageData);
                 console.log(imageData);
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
          const {images} = imageData;
          
          const plasticSurgery = t('plasticSurgery', { returnObjects: true });
  return (
    <div>
      <DeptBanner pageName = "Plastic Surgery" bannerImg = {plasticSurgery?.bannerImg}></DeptBanner>
      <Blog
        blogImg={plasticSurgery?.blog1?.blogImg}
        blogTitle={plasticSurgery.blog1?.title}
       
        additionalParagraphs={[
            plasticSurgery.blog1?.content
        ]}
      />
       <h2 style={{marginTop:"90px"}} className='title customContainer'>{plasticSurgery?.point_blogs?.title}</h2>
       {
        plasticSurgery?.point_blogs?.blogs?.map((pointBlog, index) => (
          <PointBlog key={index} title={pointBlog.title} description={pointBlog.description} benefits={pointBlog.benefits} />
        ))
       }
    
      <ParaSection title={plasticSurgery?.para_sec1?.title} desc={plasticSurgery?.para_sec1?.description} />;
     

    </div>
  )
}

export default PlasticSurgery
