import React, { useEffect, useState } from "react";
import AboutBanner from "./about_banner";
import { useTranslation } from "react-i18next";
import "./about.css";
import { fetchAboutContent, fetchAllJson } from "../../utils/fetchAllJson";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation('about');
  
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

  const about = t('about', { returnObjects: true });
  
  const {images} = imageData;
  if (!about) {
    return <div>Error: About content is not available.</div>;
  }

  console.log(about);
  
//   const { section1, section2, section3, section4 } = about;
  const audience = about?.audience; // Replace with the actual path to audience
  const brandPersona = about?.brandPersona; // Replace with the actual path to brand persona
  const toneOfVoice = about?.toneOfVoice; 
  const brandPrism = about?.brandPrism;
  const ceoMessage = about?.ceoMessage;

  if (!audience || !brandPersona) {
    return <div>Error: Data is not available.</div>;
  }
  
  const sections = [about.section1, about.section2, about.section3, about.section4];
  const sectionImages = [images.about.visionImg, images.about.missionImg, images.about.foundationImg, images.about.essenceImg];

  return (
    <div>
      <AboutBanner />
      
      <div  style={{ backgroundColor: "#D9C5AD" }}>
        <div className="main-content-container">
        <div className="about-us-container">
        {sections.map((section, index) => (
            <div
              key={index}
              className={`about-us-section ${index % 2 === 0 ? "" : "reverse-layout"}`}
            >
              <div className="sec1">
                <img src={sectionImages[index]} alt={t(section.title)} className="section-image" />
              </div>
              <div className="sec2">
                <span className="title about-us-heading">{t(section.title)}</span>
                <br />
                <span className="about-us-paragraph">{t(section.description)}</span>
              </div>
            </div>
          ))}
           <div className="about-card-container">
      
      </div>
      </div>
      {/* Background Image with Text */}
  <div className="background-container">
    <div className="overlay-text">
      <h1 className="title">Welcome to Karisma</h1>
      <p>Empowering confidence, elegance, and beauty.</p>
    </div>
  </div>
      <div className="ceo-message-container">
        <p className="ceo-message-heading">CEO Message</p>
        <p className="ceo-message-tagline">{ceoMessage?.ceoMessageTagline}</p>
        <div>
          <img src={images.about.ceoImg} alt="" />
          <p className="ceo-message-content">{ceoMessage?.ceoMessageContent}</p>
        </div>
        <div>
          <p className="title ceo-name">{ceoMessage?.ceoName}</p>
          <p className="ceo-designation">{ceoMessage?.ceoDesignation}</p>
        </div>
      </div>
      </div>
        </div>
      
    </div>
  );
};

export default About;
