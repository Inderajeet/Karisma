import React, { useEffect, useState } from 'react'
import DeptBanner from './deptbanner'
import { useTranslation } from 'react-i18next';
import { fetchAllJson } from '../../utils/fetchAllJson';
import Blog from './blog';
import PointBlog from './point_blog';

const dept = () => {
     const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
     const { t, ready } = useTranslation();
     const [imageData, setImageData] = useState(null);
     useEffect(() => {
         const fetchData = async () => {
           try {
            //  const data = await fetchAboutContent();
             const imageData = await fetchAllJson(); 
            //  setAboutData(data);
             setImageData(imageData);
            //  console.log(data, imageData);
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
      const title = "Benefits of Dental Implants";
  const description =
    "Dental implants offer a multitude of advantages over traditional bridges and dentures:";
  const benefits = [
    { title: "Enhanced Functionality", description: "Implants function similarly to natural teeth, allowing you to eat, speak, and smile with confidence." },
    { title: "Improved Aesthetics", description: "Implants provide a natural-looking and beautiful smile, boosting your self-esteem." },
    { title: "Durability and Longevity", description: "Implants are highly durable and can last a lifetime with proper care." },
    { title: "Preserves Jawbone Health", description: "Implants stimulate the jawbone, preventing bone loss that often occurs with missing teeth." },
    { title: "Improved Oral Health", description: "Implants prevent neighboring teeth from shifting, promoting overall oral health." },
  ];

  return (
    <div>
      <DeptBanner pageName = "Dental" bannerImg = {images.about.visionImg}></DeptBanner>
     
      <Blog
        blogImg={images.about.visionImg}
        blogTitle="The Importance of Self-Care"
        blogDesc="Discover the transformative power of self-care in today's hectic world."
        additionalParagraphs={[
          "Self-care is not just a luxury but a necessity for mental and physical well-being.",
          "Make self-care a priority by scheduling time for yourself every day."
        ]}
        bulletPoints={[ 
          "Boosts mental health",
          "Improves focus and productivity",
          "Reduces stress and anxiety",
          "Enhances physical health"
        ]}
      />
     <PointBlog title={title} description={description} benefits={benefits} />

    </div>
  )
}

export default dept
