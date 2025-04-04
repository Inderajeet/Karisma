import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./about.css";
import CommonServiceBanner from "../../departments/CommonServiceBanner";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const { t, ready } = useTranslation("about");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://demo.karismamc.com/api/aboutuspage");
        const data = await response.json();
  
        if (data.success) {
          setAboutData({
            deptName: data.data.dept_name,
            bannerImage: data.data.banner_image,
            bannerPosition: data.data.banner_position,
            home: data.data.home,
            section1: {
              ...data.data.section1,
              image: data.data.section1_image // Add image to section1
            },
            section2: {
              ...data.data.section2,
              image: data.data.story_image // Add image to section2
            },
            ceoMessage: {
              ...(data.data.ceo_message || {}),
              ceoImg: data.data.ceo_image // Add CEO image
            },
            ourStory: {
              ...(data.data.our_story || {}),
              image: data.data.story_image // Add story image
            }
          });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (!ready || loading) {
    return <p style={{padding:"140px"}}></p>;
  }

  if (error) {
    return <p style={{padding:"140px"}}>Error:{error}</p>;
  }

  if (!aboutData) {
    return <p style={{padding:"140px"}}></p>;
  }

  const { deptName, bannerImage, bannerPosition, home, section1, section2, ceoMessage, ourStory } = aboutData;
  return (
    <div>
      <CommonServiceBanner
        deptName={deptName}
        bannerImage={bannerImage || ""}
        bannerPosition={bannerPosition}
        deptLink={deptName}
        home="Home"
      />

      {ourStory && (
       <div className="our-story-container">
       {/* <h2 className="title our-story-heading">{ourStory?.title}</h2> */}
       <h2 className="title our-story-heading">Our Story</h2>
     
       {/* Inject the API content */}
       <div
         className="our-story-section our-story-text"
         dangerouslySetInnerHTML={{ __html: ourStory?.content[0] }}
       />
     
       {/* Divider manually added after content */}
       <div className="story-divider">
         <span className="diamond-shape">
           <span className="diamond-inner"></span>
         </span>
       </div>
     </div>
     
      )}

      <div style={{ backgroundColor: "#D9C5AD" }}>
        <div className="main-content-container">
          <div className="about-us-container">
            {[section1, section2].map((section, index) => (
              <div key={index} className={`about-us-section ${index % 2 === 0 ? "" : "reverse-layout"}`}>
                <div className="sec1">
                  <img src={section.image} alt={section.title} className="section-image" />
                </div>
                <div className="sec2">
                  <span className="title about-us-heading">{section.title}</span>
                  <p className="about-us-paragraph" dangerouslySetInnerHTML={{ __html: section.description }} />
                </div>
              </div>
            ))}

            {ceoMessage && (
              <div className="ceo-message-container">
                <div className="ceo-content">
                  <div className="ceo-image-container">
                    <img src={ceoMessage.ceoImg} alt="CEO" />
                  </div>
                  <div className="ceo-text-container">
                    {/* <p className="title ceo-message-heading">{ceoMessage.title}</p> */}
                    <p className="title ceo-message-heading">CEO Message</p>
                    <p className="ceo-message-tagline">{ceoMessage.ceoMessageTagline}</p>
                    {ceoMessage.ceoMessageContent?.map((para, i) => (
                      <p key={i} className="ceo-message-content" dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                    <p className="title ceo-name">{ceoMessage.ceoName}</p>
                    <p className="ceo-designation">{ceoMessage.ceoDesignation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
