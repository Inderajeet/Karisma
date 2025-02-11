import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { fetchAllJson } from '../../utils/fetchAllJson';
import DeptBanner from './deptbanner';
import Blog from './blog';
import PointBlog from './point_blog';
import ParaSection from './para_section';

const Implant = () => {
    const [loading, setLoading] = useState(true);
              const [error, setError] = useState(null);
             const { t, ready } = useTranslation('implant');
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
                     const implant = t('implant', { returnObjects: true });
  return (
    <div>
      <DeptBanner pageName = "Implant" bannerImg = {implant?.bannerImg}></DeptBanner>
      <ParaSection title={implant?.para_sec1?.title} desc={implant?.para_sec1?.description} />;
      <ParaSection title={implant?.para_sec2?.title} desc={implant?.para_sec2?.description} />;
      <PointBlog title={implant?.point_blog1?.title} description={implant?.point_blog1?.description} benefits={implant?.point_blog1?.benefits} />
      
      <ParaSection title={implant?.para_sec3?.title} desc={implant?.para_sec3?.description} />;
      <ParaSection title={implant?.para_sec4?.title} desc={implant?.para_sec4?.description} />;
      <ParaSection title={implant?.para_sec5?.title} desc={implant?.para_sec5?.description} />;
      <ParaSection title={implant?.para_sec6?.title} desc={implant?.para_sec6?.description} />;
    </div>
  )
}

export default Implant
