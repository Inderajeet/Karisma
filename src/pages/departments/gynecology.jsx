import React, { useEffect, useState } from 'react'
import DeptBanner from './deptbanner'
import { useTranslation } from 'react-i18next';
import { fetchAllJson, fetchDentalContent } from '../../utils/fetchAllJson';
import Blog from './blog';
import PointBlog from './point_blog';
import ParaSection from './para_section';

const Gynecology = () => {
    const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);
         const { t, ready } = useTranslation('gynecology');
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
          
          const gynecology = t('gynecology', { returnObjects: true });
  return (
    <div>
      <DeptBanner pageName = "Gynecology" bannerImg = {images.about.visionImg}></DeptBanner>
      <Blog
        blogImg={images.about.visionImg}
        blogTitle={gynecology.blog1?.title}
       
        additionalParagraphs={[
            gynecology.blog1?.content
        ]}
      />
      <PointBlog title={gynecology?.point_blog1?.title} description={gynecology?.point_blog1?.description} benefits={gynecology?.point_blog1?.benefits} />
      <PointBlog title={gynecology?.point_blog2?.title} description={gynecology?.point_blog2?.description} benefits={gynecology?.point_blog2?.benefits} />
      <Blog
        blogImg={images.about.visionImg}
        blogTitle={gynecology.blog2?.title}
       blogDesc={gynecology.blog2?.description}
        additionalParagraphs={[ 
            gynecology.blog2_para1?.title,gynecology.blog2_para1?.description,gynecology.blog2_para2?.title,gynecology.blog2_para2?.description
        ]}
      />
      <PointBlog title={gynecology?.point_blog3?.title} description={gynecology?.point_blog3?.description} benefits={gynecology?.point_blog3?.benefits} />
      <ParaSection title={gynecology?.para_sec1?.title} desc={gynecology?.para_sec1?.description} />;
      
    </div>
  )
}

export default Gynecology
