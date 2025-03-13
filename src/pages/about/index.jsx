import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./about.css";
import { fetchAboutContent, fetchAllJson } from "../../utils/fetchAllJson";
import DynamicBanner from "../../components/DynamicBanner";
import CommonServiceBanner from "../../departments/CommonServiceBanner";

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

  const { images } = imageData;
  if (!about) {
    return <div>Error: About content is not available.</div>;
  }

  console.log(about);

  const ceoMessage = about?.ceoMessage;



  const sections = [about.section1, about.section2];

  return (
    <div>
      {/* <DynamicBanner deptName="About Us" serviceName=""
        bannerImage="../assets/Images/depts/About-Us/about-us-banner.png"
        bannerPosition={`center`}

      /> */}
      <CommonServiceBanner deptName={about.deptName}
        bannerImage={about.bannerImage}
        bannerPosition={about.bannerPosition}
        deptLink={about.deptLink}
        home={about.home}

      />

      <div className="our-story-container">
        <h2 className="title our-story-heading">{about?.our_story?.title}</h2>
        {about?.our_story?.content.map((c, i) => {
          return <div><p className="our-story-text" key={i}>{t(c)}</p><br /></div>
        })}

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
                  <img src={section.image} alt={t(section.title)} className="section-image" />
                </div>
                <div className="sec2">
                  <span className="title about-us-heading">{t(section.title)}</span>
                  <br />
                  <p className="about-us-paragraph">{t(section.description)}</p>
                </div>
              </div>
            ))}


            <div className="ceo-message-container">
              <div className="ceo-content">
                <div className="ceo-image-container">
                  <img src={images.about.ceoImg} alt="CEO" />
                </div>
                <div className="ceo-text-container">
                  <p className="title ceo-message-heading">{ceoMessage?.title}</p>
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
