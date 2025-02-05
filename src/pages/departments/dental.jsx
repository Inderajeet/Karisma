import React, { useEffect, useState } from 'react'
import DeptBanner from './deptbanner'
import { useTranslation } from 'react-i18next';
import { fetchAllJson, fetchDentalContent } from '../../utils/fetchAllJson';
import Blog from './blog';
import PointBlog from './point_blog';
import ParaSection from './para_section';

const Dental = () => {
    const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);
         const { t, ready } = useTranslation('dental');
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
          
          const dental = t('dental', { returnObjects: true });
  return (
    <div>
      <DeptBanner pageName = "Dental" bannerImg = {images.about.visionImg}></DeptBanner>
      <Blog
        blogImg={images.about.visionImg}
        blogTitle={dental.blog1?.title}
        blogDesc={dental.blog1?.description}
        additionalParagraphs={[
            dental.blog1?.content
        ]}
      />
      <PointBlog title={dental?.point_blog1?.title} description={dental?.point_blog1?.description} benefits={dental?.point_blog1?.benefits} />
      <PointBlog title={dental?.point_blog2?.title} description={dental?.point_blog2?.description} benefits={dental?.point_blog2?.benefits} />
      {/* <PointBlog title={dental?.point_blog3?.title} description={dental?.point_blog3?.description} benefits={dental?.point_blog3?.benefits} /> */}
      <ParaSection title={dental?.para_sec1?.title} desc={dental?.para_sec1?.description} />;
      <PointBlog title={dental?.point_blog4?.title} description={dental?.point_blog4?.description} benefits={dental?.point_blog4?.benefits} />
      <ParaSection title={dental?.para_sec2?.title} desc={dental?.para_sec2?.description} />;
    </div>
  )
}

export default Dental
