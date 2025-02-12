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
  
  const sections = [about.section1, about.section2];
  const sectionImages = [images.about.visionImg, images.about.missionImg, images.about.foundationImg, images.about.essenceImg];

  return (
    <div>
      <AboutBanner />
  
      {/* Our Story Section (Moved to Top) */}
      <div className="our-story-container">
        <h2 className="our-story-heading">Our Story</h2>
        <p className="our-story-text">
          Karisma stands for empowerment and self-expression. It is a luxury aesthetic brand that enhances and 
          brings out an individual’s inner charisma by offering transformative treatments tailored to unique needs.
          <br /><br />
          With a focus on innovation, sophistication, and elegance, Karisma helps clients radiate confidence, not 
          just through external beauty but by igniting their inner glow. By blending advanced technology with 
          personalized care, Karisma is a destination where beauty and empowerment meet, offering a unique 
          journey of self-discovery and confidence.
        </p>
      </div>
  
      <div style={{ backgroundColor: "#D9C5AD" }}>
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
  
            {/* CEO Message Section (Updated) */}
            <div className="ceo-message-container">
              <div className="ceo-content">
                <div className="ceo-image-container">
                  <img src={images.about.ceoImg} alt="CEO" />
                </div>
                <div className="ceo-text-container">
                  <p className="ceo-message-heading">CEO Message</p>
                  <p className="ceo-message-tagline">{ceoMessage?.ceoMessageTagline}</p>
                  {ceoMessage?.ceoMessageContent?.map((ceoPara, i) => (
                    <p key={i} className="ceo-message-content">{ceoPara}</p>
                  ))}
                  <p className="title ceo-name">{ceoMessage?.ceoName}</p>
                  <p className="ceo-designation">{ceoMessage?.ceoDesignation}</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default About;
