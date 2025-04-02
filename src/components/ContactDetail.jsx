import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import "../components/contactsDetails.css";

const ContactDetail = () => {
  const { t, i18n } = useTranslation('contact');
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('/api/contactpage')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && data.data) {
          setContactData(data.data);
        } else {
          setError('Failed to load contact data.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching contact data:', err);
        setError('Failed to load contact data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading contact information...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!contactData) {
    return <p>Contact data not found.</p>;
  }

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
                  <div className="elementor-widget-container feature-box-wrapper feature-box-classic contact-box">
                    <div className="media" style={{ display: 'flex' }}>
                      <div className="media-icon-part">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={55}
                          height={55}
                          viewBox="0 0 68 78"
                        >
                          <g id="chat" transform="translate(0.327 0.071)">
                            <g
                              id="Ellipse_89"
                              data-name="Ellipse 89"
                              transform="translate(-0.327 -0.071)"
                              fill="#405d53"
                              stroke="none"
                              strokeWidth={0}
                            >
                              <circle cx={34} cy={34} r={34} stroke="none" />
                              <circle cx={34} cy={34} r="33.5" fill="none" />
                            </g>
                            <path
                              id="Path_10022"
                              data-name="Path 10022"
                              d="M166.512,150.708c-.28-.158-.6-.336-.979-.566-.213-.129-.481-.305-.766-.492-1.459-.958-2.564-1.636-3.5-1.636a1.711,1.711,0,0,0-.619.111,5.983,5.983,0,0,0-2.156,1.987,10.536,10.536,0,0,1-.791.924,15.567,15.567,0,0,1-7.562-7.57,10.458,10.458,0,0,1,.928-.8,5.993,5.993,0,0,0,1.981-2.15c.407-1.057-.339-2.32-1.524-4.127-.187-.284-.363-.553-.491-.765-.231-.384-.409-.7-.567-.981-.646-1.149-1.073-1.909-2.677-1.909-1.041,0-2.513.985-3.511,1.961a6.667,6.667,0,0,0-2.247,4.618c0,4.236,2.365,9.09,6.48,13.323.007.007.014.009.021.016,4.23,4.119,9.084,6.475,13.316,6.475h0a6.646,6.646,0,0,0,4.613-2.239c.977-1,1.962-2.46,1.962-3.5C168.419,151.782,167.66,151.355,166.512,150.708Z"
                              transform="translate(-121.351 -111.806)"
                              fill="#fff"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="media-body">
                        <h4 className="feature-box-title">Phone</h4>
                        <div className="fbox-content">
                          <a href={`tel:${contactData.phone1}`} className="h-phone" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            {i18n.language === "ar" ? (
                              <>
                                <span>{contactData.phone1}</span>
                                <i className="bi bi-telephone-forward-fill" style={{ marginLeft: '8px' }} />
                              </>
                            ) : (
                              <>
                                <i className="bi bi-telephone-forward-fill" style={{ marginRight: '8px' }} />
                                <span>{contactData.phone1}</span>
                              </>
                            )}
                          </a><br></br>
                          <a href={`tel:${contactData.phone2}`} className="h-phone" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            {i18n.language === "ar" ? (
                              <>
                                <span>{contactData.phone2}</span>
                                <i className="bi bi-telephone-forward-fill" style={{ marginLeft: '8px' }} />
                              </>
                            ) : (
                              <>
                                <i className="bi bi-telephone-forward-fill" style={{ marginRight: '8px' }} />
                                <span>{contactData.phone2}</span>
                              </>
                            )}
                          </a>
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
                  <div className="elementor-widget-container feature-box-wrapper feature-box-classic contact-box">
                    <div className="media" style={{ display: 'flex' }}>
                      <div className="media-icon-part">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={55}
                          height={55}
                          viewBox="0 0 68 68"
                        >
                          <circle cx={34} cy={34} r={34} fill="#405d53" />
                          <path
                            fill="#fff"
                            d="M17 24C17 22.8954 17.8954 22 19 22H49C50.1046 22 51 22.8954 51 24V44C51 45.1046 50.1046 46 49 46H19C17.8954 46 17 45.1046 17 44V24ZM21 25.3333V44H47V25.3333L34 33.6667L21 25.3333ZM23.2 24H44.8L34 30.6667L23.2 24Z"
                          /></svg>
                          </div>
                          <div className="media-body">
                            <h4 className="feature-box-title">Email</h4>
                            <div className="fbox-content">
                              <a href={`mailto:${contactData.email}`} style={{ display: 'inline-flex', alignItems: 'center' }}>{contactData.email}</a>
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
                      <div className="elementor-widget-container feature-box-wrapper feature-box-classic contact-box">
                        <div className="media" style={{ display: 'flex' }}>
                          <div className="media-icon-part">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={55}
                              height={55}
                              viewBox="0 0 68 68"
                            >
                              <circle cx={34} cy={34} r={34} fill="#405d53" />
                              <g transform="scale(0.042) translate(280 200)">
                                <path
                                  fill="#fff"
                                  d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
                                />
                              </g>
                            </svg>
                          </div>
                          <div className="media-body">
                            <h4 className="feature-box-title">Address</h4>
                            <div className="fbox-content">
                                {i18n.language === "ar" ? contactData.address_arabic : contactData.address}
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
        </div>
      );
    };
    
    export default ContactDetail;