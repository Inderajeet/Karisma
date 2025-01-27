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
              <div>
                <img src={sectionImages[index]} alt={t(section.title)} className="section-image" />
              </div>
              <div>
                <span className="about-us-heading">{t(section.title)}</span>
                <br />
                <span className="about-us-paragraph">{t(section.description)}</span>
              </div>
            </div>
          ))}
           <div className="about-card-container">
       {/* Audience Card */}
<div className="about-card">
  <h2 className="about-card-title">Audience</h2>
  <div className="about-card-content">
    <p>{audience.overview}</p>

    <p><strong>Demographics:</strong></p>
    <ul>
      <li>{audience.demographics.age}</li>
      <li>{audience.demographics.gender}</li>
      <li>{audience.demographics.incomeLevel}</li>
    </ul>

    <p><strong>Psychographics:</strong></p>
    <ul>
      <li><strong>Lifestyle:</strong> {audience.psychographics.lifestyle}</li>
      <li><strong>Values:</strong></li>
      <ul>
        {audience.psychographics.values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <li><strong>Aspirations:</strong></li>
      <ul>
        {audience.psychographics.aspirations.map((aspiration, index) => (
          <li key={index}>{aspiration}</li>
        ))}
      </ul>
    </ul>

    <p><strong>Behavioral Traits:</strong></p>
    <ul>
      <li><strong>Luxury Seekers:</strong> {audience.behavioralTraits.luxurySeekers}</li>
      <li><strong>Informed Decision-Makers:</strong> {audience.behavioralTraits.informedDecisionMakers}</li>
      <li><strong>Community-Oriented:</strong> {audience.behavioralTraits.communityOriented}</li>
    </ul>

    <p>{audience.conclusion}</p>
  </div>
</div>

{/* Brand Persona Card */}
<div className="about-card">
  <h2 className="about-card-title">Brand Persona</h2>
  <div className="about-card-content">
    <p>{brandPersona.overview}</p>

    <p><strong>Core Characteristics:</strong></p>
    <ul>
      {Object.entries(brandPersona.coreCharacteristics).map(([key, value]) => (
        <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}</li>
      ))}
    </ul>

    <p><strong>Emotional Connection:</strong></p>
    <ul>
      {Object.entries(brandPersona.emotionalConnection).map(([key, value]) => (
        <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}</li>
      ))}
    </ul>
  </div>
</div>

        {/* Tone of Voice Card */}
  <div className="about-card">
    <h2 className="about-card-title">Tone of Voice</h2>
    <div className="about-card-content">
      <p>{toneOfVoice.overview}</p>
      <ul>
        {Object.entries(toneOfVoice.qualities).map(([key, value]) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
      <div style={{height:"200px"}}></div>
    </div>
  </div>
   {/* Brand Prism Card */}
   <div className="about-card">
    <h2 className="about-card-title">Brand Prism</h2>
    <div className="about-card-content">
      <p><strong>Physique:</strong></p>
      <ul>
        {brandPrism.physique.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Personality:</strong></p>
      <ul>
        {brandPrism.personality.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Culture:</strong></p>
      <ul>
        {brandPrism.culture.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Relationship:</strong></p>
      <ul>
        {brandPrism.relationship.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Reflection:</strong></p>
      <ul>
        {brandPrism.reflection.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Self-Image:</strong></p>
      <ul>
        {brandPrism.selfImage.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{brandPrism.summary}</p>
    </div>
    </div>
      </div>
      </div>
      {/* Background Image with Text */}
  <div className="background-container">
    <div className="overlay-text">
      <h1>Welcome to Karisma</h1>
      <p>Empowering confidence, elegance, and beauty.</p>
    </div>
  </div>
      <div className="ceo-message-container">
        <p className="ceo-message-heading">CEO Message</p>
        <p className="ceo-message-tagline">{ceoMessage?.ceoMessageTagline}</p>
        <div>
          <img src={images.about.visionImg} alt="" />
          <p className="ceo-message-content">{ceoMessage?.ceoMessageContent}</p>
        </div>
        <div>
          <p className="ceo-name">{ceoMessage?.ceoName}</p>
          <p className="ceo-designation">{ceoMessage?.ceoDesignation}</p>
        </div>
      </div>
      </div>
        </div>
      
    </div>
  );
};

export default About;
