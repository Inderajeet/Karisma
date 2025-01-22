import React from 'react';
import phoneIcon from '/assets/wp-content/uploads/2024/05/dental-call.webp';
import emailIcon from '/assets/wp-content/uploads/2024/05/dental-msg.webp';
import locationIcon from '/assets/wp-content/uploads/2024/05/dental-location.webp';

const ContactDetail = () => {
  const details = [
    {
      title: "Phone Number",
      content: "+(528) 456-7592",
      link: "tel:5284567592",
      imgSrc: phoneIcon,
      // imgSrc: "../assets/wp-content/uploads/2024/05/dental-call.webp",
      imgAlt: "Phone Icon",
    },
    {
      title: "Email Address",
      content: "info@happysmile.com",
      link: "mailto:info@happysmile.com",
      imgSrc: emailIcon,
      // imgSrc: "/assets/wp-content/uploads/2024/05/dental-msg.webp",
      imgAlt: "Email Icon",
    },
    {
      title: "Current Location",
      content: "4b, Walse St, USA",
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
                            src={details[0].imgSrc}
                            className="attachment-full size-full"
                            alt={details[0].imgAlt}
                          />
                        </figure>
                      </div>
                      <div className="media-body">
                        <h4 className="feature-box-title">{details[0].title}</h4>
                        <div className="fbox-content">
                          <a href={details[0].link}>{details[0].content}</a>
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
                            src={details[1].imgSrc}
                            className="attachment-full size-full"
                            alt={details[1].imgAlt}
                          />
                        </figure>
                      </div>
                      <div className="media-body">
                        <h4 className="feature-box-title">{details[1].title}</h4>
                        <div className="fbox-content">
                          <a href={details[1].link}>{details[1].content}</a>
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
                            src={details[2].imgSrc}
                            className="attachment-full size-full"
                            alt={details[2].imgAlt}
                          />
                        </figure>
                      </div>
                      <div className="media-body">
                        <h4 className="feature-box-title">{details[2].title}</h4>
                        <div className="fbox-content">{details[2].content}</div>
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
