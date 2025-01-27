import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { fetchAllJson } from '../../utils/fetchAllJson';
import DeptBanner from './deptbanner';
import Blog from './blog';
import PointBlog from './point_blog';
import ParaSection from './para_section';

const Veneers = () => {
    const [loading, setLoading] = useState(true);
              const [error, setError] = useState(null);
             const { t, ready } = useTranslation('veneers');
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
                     const veneers = t('veneers', { returnObjects: true });
  return (
    <div>
      <DeptBanner pageName = "Hollywood Smile  (Veneers)" bannerImg = {images.about.visionImg}></DeptBanner>
      <Blog
        blogImg={images.about.visionImg}
        blogTitle={veneers.blog1?.title}
        blogDesc={veneers.blog1?.description}
        additionalParagraphs={[
            veneers.blog1?.content
        ]}
      />
      <PointBlog title={veneers?.point_blog1?.title} description={veneers?.point_blog1?.description} benefits={veneers?.point_blog1?.benefits} />
      <ParaSection title={veneers?.para_sec1?.title} desc={veneers?.para_sec1?.description} />;
      <ParaSection title={veneers?.para_sec2?.title} desc={veneers?.para_sec2?.description} />;
      <ParaSection title={veneers?.para_sec3?.title} desc={veneers?.para_sec3?.description} />;
    </div>
  )
}

export default Veneers
