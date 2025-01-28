import React from 'react';
import phoneIcon from '/assets/wp-content/uploads/2024/05/dental-call.webp';
import emailIcon from '/assets/wp-content/uploads/2024/05/dental-msg.webp';
import locationIcon from '/assets/wp-content/uploads/2024/05/dental-location.webp';
import { useTranslation } from "react-i18next";

const ContactDetail = () => {
  const { t, i18n } = useTranslation('contact');
  const contact = t('contact', { returnObjects: true });  // Fetch the entire contact object

  const details = [
    {
      title: "Phone Number",
      content: "06 506 8777",
      content2: "0504525189",
      link: "tel:06 506 8777",
      imgSrc: phoneIcon,
      // imgSrc: "../assets/wp-content/uploads/2024/05/dental-call.webp",
      imgAlt: "Phone Icon",
    },
    {
      title: "Email Address",
      content: "info@karismamc.com",
      link: "mailto:info@karismamc.com",
      imgSrc: emailIcon,
      // imgSrc: "/assets/wp-content/uploads/2024/05/dental-msg.webp",
      imgAlt: "Email Icon",
    },
    {
      title: "Current Location",
      content: "Al Raha Walk, Al Muntazah Street, Sharjah",
      link: null,
      imgSrc: locationIcon,
      // imgSrc: "./assets/wp-content/uploads/2024/05/dental-location.webp",
      imgAlt: "Location Icon",
    },
  ];

  return (
    <div
      className="elementor-element elementor-element-575a448 e-flex e-con-boxed e-con e-child"
      data-id="575a448"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-21e3ecd e-flex e-con-boxed e-con e-child"
          data-id="21e3ecd"
          data-element_type="container"
        >
          <div className="e-con-inner">
            {/* First Detail */}
            <div
              className="elementor-element elementor-element-4cad3d06 e-flex e-con-boxed e-con e-child"
              data-id="4cad3d06"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-7f1eb700 cea-view-default elementor-widget elementor-widget-ceafeaturebox"
                  data-id="7f1eb700"
                  data-element_type="widget"
                  data-widget_type="ceafeaturebox.default"
                >
                  <div className="elementor-widget-container feature-box-wrapper feature-box-classic">
                    <div className="media">
                      <div className="media-icon-part">
                        <figure className="cea-feature-box-img">
                          <img
                            decoding="async"
                            width={64}
                            height={64}
                            src={contact.contactInfo[0].imgSrc}
                            className="attachment-full size-full"
                            alt={contact.contactInfo[0].imgAlt}
                          />
                        </figure>
                      </div>
                      <div className="media-body">
                        <h4 className="feature-box-title">{contact.contactInfo[0].title}</h4>
                        <div className="fbox-content">
                          <a href={contact.contactInfo[0].link}>{contact.contactInfo[0].content}</a><br></br>
                          <a href={contact.contactInfo[0].link2}>{contact.contactInfo[0].content2}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Detail */}
            <div
              className="elementor-element elementor-element-1709864d e-flex e-con-boxed e-con e-child"
              data-id="1709864d"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-1133f044 cea-view-default elementor-widget elementor-widget-ceafeaturebox"
                  data-id="1133f044"
                  data-element_type="widget"
                  data-widget_type="ceafeaturebox.default"
                >
                  <div className="elementor-widget-container feature-box-wrapper feature-box-classic">
                    <div className="media">
                      <div className="media-icon-part">
                        <figure className="cea-feature-box-img">
                          <img
                            decoding="async"
                            width={64}
                            height={64}
                            src={contact.contactInfo[1].imgSrc}
                            className="attachment-full size-full"
                            alt={contact.contactInfo[1].imgAlt}
                          />
                        </figure>
                      </div>
                      <div className="media-body">
                        <h4 className="feature-box-title">{contact.contactInfo[1].title}</h4>
                        <div className="fbox-content">
                          <a href={contact.contactInfo[1].link}>{contact.contactInfo[1].content}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Detail */}
            <div
              className="elementor-element elementor-element-4d45c0b7 e-flex e-con-boxed e-con e-child"
              data-id="4d45c0b7"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-56e3c1d1 cea-view-default elementor-widget elementor-widget-ceafeaturebox"
                  data-id="56e3c1d1"
                  data-element_type="widget"
                  data-widget_type="ceafeaturebox.default"
                >
                  <div className="elementor-widget-container feature-box-wrapper feature-box-classic">
                    <div className="media">
                      <div className="media-icon-part">
                        <figure className="cea-feature-box-img">
                          <img
                            decoding="async"
                            width={64}
                            height={64}
                            src={contact.contactInfo[2].imgSrc}
                            className="attachment-full size-full"
                            alt={contact.contactInfo[2].imgAlt}
                          />
                        </figure>
                      </div>
                      <div className="media-body">
                        <h4 className="feature-box-title">{contact.contactInfo[2].title}</h4>
                        <div className="fbox-content">{contact.contactInfo[2].content}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
