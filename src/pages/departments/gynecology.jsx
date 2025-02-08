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
      {/* <Blog
        blogImg={images.about.visionImg}
        blogTitle={gynecology.blog2?.title}
       blogDesc={gynecology.blog2?.description}
        additionalParagraphs={[ 
            gynecology.blog2_para1?.title,gynecology.blog2_para1?.description,gynecology.blog2_para2?.title,gynecology.blog2_para2?.description
        ]}
      /> */}
      <PointBlog title={gynecology?.point_blog3?.title} description={gynecology?.point_blog3?.description} benefits={gynecology?.point_blog3?.benefits} />
      <PointBlog title={gynecology?.point_blog4?.title} description={gynecology?.point_blog4?.description} benefits={gynecology?.point_blog4?.benefits} />
      <ParaSection title={gynecology?.para_sec1?.title} desc={gynecology?.para_sec1?.description} />;
      <div
        className="happysmile-content-wrap container page"
        style={{ marginTop: "50px" }}
      >
        <div className="col-md-12 order-md-2">
          <div className="post-inner">
            <div className="entry-content">
              <div className="elementor elementor-73315">
                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                      <h1>Related Services</h1>
                  <div className="e-con-inner">
                    <div className="dd-row">
                      {gynecology?.related_services?.map((service, index) => (
                        <Link
                          to={`/${i18n.language}/gynecology/${encodeURIComponent(
                            service?.link
                          )}`}
                          key={index}
                          className="doctor-info-cols"
                          style={{ cursor: "pointer" }}
                        >
                          {/* <h1>{service?.title}</h1> */}
                          <div className="dd-inner">
                            <div className="cust-doctor-info-wrap">
                              <div className="doctor-thumbnail">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width={500}
                                  height={456}
                                  src={service.image}
                                  className="img-responsive wp-post-image"
                                  alt={service.title}
                                />
                              </div>
                              <div className="doctor-info-body">
                                <div className="doctor-name">
                                  {service.title}
                                </div>
                                <div className="doctor-info-inner">
                                  {/* <div className="doctor-specialities">
                                          <div className="doctor-departments">{service.designation}</div>
                                        </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gynecology
