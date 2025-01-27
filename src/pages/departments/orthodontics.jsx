import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { fetchAllJson } from '../../utils/fetchAllJson';
import DeptBanner from './deptbanner';
import Blog from './blog';
import PointBlog from './point_blog';
import ParaSection from './para_section';

const Orthodontics = () => {
    const [loading, setLoading] = useState(true);
              const [error, setError] = useState(null);
             const { t, ready } = useTranslation('orthodontics');
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
                     const orthodontics = t('orthodontics', { returnObjects: true });
  return (
    <div>
      <DeptBanner pageName = "Orthodontics" bannerImg = {images.about.visionImg}></DeptBanner>
      <Blog
        blogImg={images.about.visionImg}
        blogTitle={orthodontics.blog1?.title}
        blogDesc={orthodontics.blog1?.description}
        additionalParagraphs={[
            orthodontics.blog1?.content
        ]}
      />
      {/* <ParaSection title={orthodontics?.para_sec1?.title} desc={orthodontics?.para_sec1?.description} />; */}
      <PointBlog title={orthodontics?.point_blog1?.title} description={orthodontics?.point_blog1?.description} benefits={orthodontics?.point_blog1?.benefits} />
      <ParaSection title={orthodontics?.para_sec2?.title} desc={orthodontics?.para_sec2?.description} />;
      
      <PointBlog title={orthodontics?.point_blog2?.title} description={orthodontics?.point_blog2?.description} benefits={orthodontics?.point_blog2?.benefits} />
      <ParaSection title={orthodontics?.para_sec3?.title} desc={orthodontics?.para_sec3?.description} />;
     
    </div>
  )
}

export default Orthodontics
