import React, { useState, useEffect } from "react";
import { fetchAllJson } from "../utils/fetchAllJson"; // Import the utility function
import SliderDept from "../components/SliderDept";
import SliderDoct from "../components/SliderDoct";
import VideoSection from "../components/VideoSection";
import { useTranslation } from "react-i18next";
import HomeSlider from "../components/HomeSlider";
import '../components/Home.css';
import { Link, useParams } from "react-router-dom";
import AppointmentButton from "../components/AppointmentButton";

const Index = () => {
  const [jsonData, setJsonData] = useState(null); // State for fetched JSON
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling
  const { t, ready } = useTranslation();
  const { lng } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllJson(); // Fetch all JSON files
        setJsonData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!ready || loading) {
    return;
  }

  if (error) {
    return;
  }

  const { styles, images } = jsonData;
  const { about_us, about2, department, doctors, videoTopSection } = styles; // Destructure the JSON as needed
  const { home } = images;
  return (
    <>
      {/* <Header></Header>*/}
      {/* <SampleHeader></SampleHeader> */}
      <HomeSlider></HomeSlider>
      <div
        data-elementor-type="wp-page"
        data-elementor-id={73397}
        className="elementor elementor-73397"
        style={{
          backgroundColor: about_us["background-color"],
        }}
      >
        <div
          className="elementor-element elementor-element-23578682 e-flex e-con-boxed e-con e-parent e-lazyloaded"
          data-id={23578682}
          data-element_type="container"
        >
          <div className="e-con-inner aboutSec1" style={{padding:'0'}}>
            <div
              className="elementor-element elementor-element-2c3746fc e-flex e-con-boxed e-con e-child"
              data-id="2c3746fc"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-1cf86a22 e-flex e-con-boxed e-con e-child"
                  data-id="1cf86a22"
                  data-element_type="container"
                >
                  <div className="e-con-inner" style={{ gap: "1" }}>
                    <div
                      className="elementor-element elementor-element-587964da e-flex e-con-boxed e-con e-child"
                      data-id="587964da"
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-18f86fa3 elementor-widget elementor-widget-image animated fadeInUp"
                          data-id="18f86fa3"
                          data-element_type="widget"
                          data-settings='{"_animation":"fadeInUp","_animation_delay":100}'
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <img
                              decoding="async"
                              // src="../assets/Images/home/about-us2.png"
                              src={home['about1']}
                              title="about-3"
                              alt="about-3"
                              loading="lazy"
                            // onError={(e) => { e.target.src = 'fallback-image.png'; console.error('Image not found:', e); }} // Add an error handler
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-44fc78d9 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child"
                      data-id="44fc78d9"
                      data-element_type="container"
                      style={{ marginLeft: "0" }}
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-5ad798d4 elementor-widget elementor-widget-image animated fadeInUp"
                          data-id="5ad798d4"
                          data-element_type="widget"
                          data-settings='{"_animation":"fadeInUp","_animation_delay":150}'
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <img
                              decoding="async"
                              src={home['about2']}
                              title="about-2"
                              alt="about-2"
                              loading="lazy"
                            />{" "}
                          </div>
                        </div>
                        <div

                          className="elementor-element elementor-element-27b168ca elementor-absolute verticle-move cea-view-default elementor-widget elementor-widget-ceafeaturebox animated fadeIn"
                          data-id="27b168ca"
                          data-element_type="widget"
                          data-settings='{"_position":"absolute","_animation":"fadeIn"}'
                          data-widget_type="ceafeaturebox.default"
                          style={{ bottom: "-20px", display: 'none' }}
                        >
                          <div className="elementor-widget-container feature-box-wrapper feature-box-default" style={{ backgroundColor: about_us["CustomerBg-color"] }}>
                            <a href="/">
                              <div className="feature-box-inner">
                                <div className="cea-featured-icon">
                                  <i
                                    aria-hidden="true"
                                    className=" bi-arrow-up-right"
                                  />
                                </div>
                                <h3 className="feature-box-title" style={{
                                  color: about_us["Customer-font-color"], fontSize: about_us["Customer-font-size"],
                                }}>6.5Million</h3>
                                <div className="fbox-content" style={{
                                  color: about_us["Customer-font-color"], fontSize: about_us["Customer-subfont-size"],
                                }}>Customers Benefits</div>
                              </div>
                            </a>
                            {/* .fbox link close */}{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-578953ab e-flex e-con-boxed e-con e-child animated fadeInRight"
                  data-id="578953ab"
                  data-element_type="container"
                  data-settings='{"animation":"fadeInRight","animation_delay":100}'
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-7a498b97 cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                      data-id="7a498b97"
                      data-element_type="widget"
                      data-widget_type="ceasectiontitle.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="section-title-wrapper">
                          <div className="title-wrap">
                            <h2 className="subtitle-dots sub-title home-head-font" style={{
                              color: about_us["heading-font-color"], fontSize: about_us["heading-font-size"],
                              fontWeight: 'bold',
                            }}>{t('about1.about1Heading')}</h2>
                          </div>
                          {/* .title-wrap */}
                          <div className="section-description">
                            <p className="home-desc-font" style={{
                              color: about_us["font-color"], fontSize: about_us["font-size"]
                            }}>
                              {t('about1.about1Desc1')}
                            </p>
                            <p className="" style={{
                              color: about_us["font-color"], fontSize: about_us["font-size"]
                            }}>
                              {t('about1.about1Desc2')}
                            </p>
                          </div>
                          {/* .section-description */}
                        </div>
                        {/* .section-title-wrapper */}{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-93a2172 e-flex e-con-boxed e-con e-child"
                      data-id="93a2172"
                      data-element_type="container"
                      style={{  padding: "0" }}>
                      <div className="e-con-inner abtBtn" style={{  padding: "0" }}>
                        <div
                          className="elementor-element elementor-element-3484564e e-con-full e-flex e-con e-child"
                          data-id="3484564e"
                          data-element_type="container" style={{ float: 'left' }}
                        >
                          <div
                            className="elementor-element elementor-element-60a4b9e0 elementor-widget__width-auto elementor-widget elementor-widget-ceabutton"
                            data-id="60a4b9e0"
                            data-element_type="widget"
                            data-widget_type="ceabutton.default" style={{ float: 'left' }}
                          >
                            {/* <div className="" >
                              <div className=""  >
                                <a
                                  href="/"
                                  className="cea-button-link elementor-button cea-button elementor-size-sm third"
                                  // style={{ backgroundColor: about_us["Button-color"], border: `1px solid ${about_us["Button-color"]}`, float: 'left' }}
                                >
                                  <span className="cea-button-content-wrapper" >
                                    <span className="cea-button-icon cea-align-icon-right">
                                    </span>
                                    <span className="cea-button-text" 
                                    // style={{ color: about_us["Button-text-color"] }}
                                    >{t('about1.about1Btn')} </span>
                                  </span>
                                </a>
                              </div>
                            </div> */}
                            <div className="">
                              <div className="">
                              <Link to={`/${lng}${t('about1.about1Link')}`}
                                  className="cea-button-link elementor-button cea-button elementor-size-sm third slidebottomleft"
                                >
                                  <span>
                                    {t('about1.about1Btn')}</span>
                                </Link>
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
        </div>

        <div style={{ backgroundColor: about2["background-color"] }}
          data-cea-float='[{"float_title":"Floating Image","float_img":"https:\/\/wordpress.zozothemes.com\/happysmile\/wp-content\/uploads\/sites\/20\/2024\/06\/home-about-bg.webp","float_left":"85","float_top":"40","float_distance":"100","float_animation":"0","float_mouse":"0","float_width":"190px"}]'
          className="elementor-element elementor-element-5814061e e-flex e-con-boxed e-con e-parent e-lazyloaded"
          data-id="5814061e"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div
            id="float-parallax-5814061e"
            className="float-parallax"
            data-mouse={0}
            data-left={85}
            data-top={40}
            data-distance={100}
            style={{ width: 190, top: "40%", left: "85%", display: 'none' }}
          >
            <img
              alt="Floating Image"
              src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/06/home-about-bg.webp"
            />
          </div>
          <div className="e-con-inner" style={{ padding: '0 0' }}>
            <div
              className="elementor-element elementor-element-42d93607 e-flex e-con-boxed e-con e-child animated fadeInUp"
              data-id="42d93607"
              data-element_type="container"
              data-settings='{"animation":"fadeInUp"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-155b6eb8 cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                  data-id="155b6eb8"
                  data-element_type="widget"
                  data-widget_type="ceasectiontitle.default"
                >
                  <div className="elementor-widget-container">
                    <div className="section-title-wrapper">
                      <div className="">
                        <h6 className="">
                          <span className="" style={{
                            color: about2['heading1-color'], fontSize: about2["heading1-size"],
                            fontWeight: 'bold'
                          }}>{t('about2.about2Heading1')}</span>
                        </h6>
                        <h2 className="subtitle-dots sub-title home-head-font" style={{
                          color: about2["heading2-color"], fontSize: about2["heading2-size"],
                          fontWeight: 'bold'
                        }}>{t('about2.about2Heading2')}</h2>
                      </div>
                      {/* .title-wrap */}
                      <div className="section-description">
                        <p className=" home-desc-font" style={{
                          color: about2["desc-color"], fontSize: about2["desc-size"]
                        }}>
                          {t('about2.about2Desc')}
                        </p>
                      </div>
                      {/* .section-description */}
                    </div>
                    {/* .section-title-wrapper */}{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4cd38a53 e-flex e-con-boxed e-con e-child"
                  data-id="4cd38a53"
                  data-element_type="container"
                >
                  <div className="about-2 e-con-inner">
                    <div
                      className="elementor-element elementor-element-66a8144 elementor-widget__width-auto elementor-widget elementor-widget-ceabutton"
                      data-id="66a8144"
                      data-element_type="widget"
                      data-widget_type="ceabutton.default"
                    >
                      {/* <AppointmentButton></AppointmentButton> */}
                      <div className="" >
                        <div className="">
                        <Link to={`/${lng}${t('about2.about2Link')}`}
                            className="cea-button-link elementor-button cea-button elementor-size-sm third slidebottomleft"

                          >
                            <span className="cea-button-content-wrapper">
                              <span className="cea-button-icon cea-align-icon-right">
                              </span>
                              <span className="cea-button-text" >{t('about2.about2Btn')}</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div
              className="elementor-element elementor-element-2f034552 e-flex e-con-boxed e-con e-child animated slideInUp"
              data-id="2f034552"
              data-element_type="container"
              data-settings='{"animation":"slideInUp"}'
            >

              <div className="e-con-inner">

                <div
                  className="elementor-element elementor-element-7d327444 e-flex e-con-boxed e-con e-child"
                  data-id="7d327444"
                  data-element_type="container"
                >

                  <div className="e-con-inner">

                    <div
                      className="elementor-element elementor-element-3b2ca68e cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                      data-id="3b2ca68e"
                      data-element_type="widget"
                      data-widget_type="ceasectiontitle.default"
                    >

                      <div className="elementor-widget-container mobile-img-container">
                        <div className="image-container">
                          <img src={home['logoAnim']} alt="Rotating Image" className="rotating-image" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <div
          className="home_align"
          data-id="5c6a904c"
          data-element_type="container" style={{ backgroundColor: department['background-color'] }}
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-abe6a2c e-flex e-con-boxed e-con e-child"
              data-id="abe6a2c"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-75b52bfa e-flex e-con-boxed e-con e-child"
                  data-id="75b52bfa"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-2164c3aa e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
                      data-id="2164c3aa"
                      data-element_type="container"
                    ></div>
                    <div
                      className="elementor-element elementor-element-2cca417d e-con-full e-flex e-con e-child animated slideInDown"
                      data-id="2cca417d"
                      data-element_type="container"
                      data-settings='{"animation":"slideInDown"}'
                    >
                      <div
                        className="elementor-element elementor-element-add583f cea-align-center elementor-widget elementor-widget-ceasectiontitle"
                        data-id="add583f"
                        data-element_type="widget"
                        data-widget_type="ceasectiontitle.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="section-title-wrapper">
                            <div className="title-wrap">
                              <h2 className="subtitle-dots sub-title home-head-font" style={{
                                color: department['heading1-color'], fontSize: department['heading1-size'],
                                fontWeight: 'bold',
                                display: 'block'
                              }}>{t('services.servicesHeading')}</h2>
                              <div className="home-desc-font" style={{ 
                                color: department['heading2-color'], 
                                fontSize: department['heading2-size'], 
                                fontWeight: 'normal', 
                                marginBottom: '20px'
                                }}>
                                {t('services.servicesDesc')}
                              </div>
                            </div>
                            {/* .title-wrap */}
                            <div className="section-description" />
                            {/* .section-description */}
                          </div>
                          {/* .section-title-wrapper */}{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-2fe3f866 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child"
                      data-id="2fe3f866"
                      data-element_type="container"
                    >
                      <div className="e-con-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-7017c942 e-flex e-con-boxed e-con e-child"
                  data-id="7017c942"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-24da0674 e-flex e-con-boxed e-con e-child"
                      data-id="24da0674"
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-581d3470 elementor-widget elementor-widget-ceaservice animated fadeInUp"
                          data-id="581d3470"
                          data-element_type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="ceaservice.default"
                        >
                          <div className="elementor-widget-container service-wrapper service-style-default service-light service-normal-model">
                            <div className="row">
                              <SliderDept></SliderDept>
                            </div>
                            {/* .row */}
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

        <div
          className="elementor-element elementor-element-19b50aa7 e-flex e-con-boxed e-con e-parent e-lazyloaded"
          data-id="19b50aa7"
          data-element_type="container"
          style={{ display: 'none' }}
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-1f31a132 e-flex e-con-boxed e-con e-child"
              data-id="1f31a132"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-75a108d6 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
                  data-id="75a108d6"
                  data-element_type="container"
                ></div>
                <div
                  className="elementor-element elementor-element-6bd88a95 e-flex e-con-boxed e-con e-child animated slideInRight"
                  data-id="6bd88a95"
                  data-element_type="container"
                  data-settings='{"background_background":"classic","animation":"slideInRight"}' style={{ backgroundColor: videoTopSection['background-color'] }}
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-7fec9641 e-con-full e-flex e-con e-child"
                      data-id="7fec9641"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-8c197f6 cea-view-default elementor-widget elementor-widget-ceacounter"
                        data-id="8c197f6"
                        data-element_type="widget"
                        data-widget_type="ceacounter.default"
                      >
                        <div className="elementor-widget-container cea-counter-wrapper  cea-counter-style-list" >
                          <div className="media">
                            <div className="counter-left mr-3">
                              <div className="counter-icon">
                                <i aria-hidden="true" className=" bi-arrow-up-right" />
                              </div>
                            </div>
                            {/* .counter-left */}
                            <div className="media-body counter-right">
                              <div className="counter-value">
                                <h3>
                                  <span
                                    className="counter-up" style={{ fontSize: videoTopSection['couter-size'], color: videoTopSection['couter-color'] }}
                                    data-count={840}
                                    data-duration={2000}
                                  >
                                    840
                                  </span>
                                </h3>
                              </div>
                              {/* .counter-value */}
                              <div className="counter-title">
                                <h5 className="counter-title-head" style={{ fontSize: videoTopSection['heading-size'], color: videoTopSection['heading-color'] }}>
                                  Happy Patients</h5>
                              </div>
                              {/* .counter-title */}
                              <div className="counter-content" style={{ fontSize: videoTopSection['desc-size'], color: videoTopSection['desc-color'] }}>
                                <p>Client assets under advisement.</p>
                              </div>
                              {/* .counter-read-more */}
                            </div>
                            {/* .counter-right */}
                          </div>
                          {/* .media */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-6460945a e-flex e-con-boxed e-con e-child"
                      data-id="6460945a"
                      data-element_type="container"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-4fc0440d cea-view-default elementor-widget elementor-widget-ceacounter"
                          data-id="4fc0440d"
                          data-element_type="widget"
                          data-widget_type="ceacounter.default"
                        >
                          <div className="elementor-widget-container cea-counter-wrapper  cea-counter-style-list">
                            <div className="media">
                              <div className="counter-left mr-3">
                                <div className="counter-icon">
                                  <i
                                    aria-hidden="true"
                                    className=" bi-arrow-up-right"
                                  />
                                </div>
                              </div>
                              {/* .counter-left */}
                              <div className="media-body counter-right">
                                <div className="counter-value">
                                  <h3>
                                    <span
                                      className="counter-up" style={{ fontSize: videoTopSection['couter-size'], color: videoTopSection['couter-color'] }}
                                      data-count={93}
                                      data-duration={2000}
                                    >
                                      93
                                    </span>
                                  </h3>
                                </div>
                                {/* .counter-value */}
                                <div className="counter-title">
                                  <h5 className="counter-title-head" style={{ fontSize: videoTopSection['heading-size'], color: videoTopSection['heading-color'] }}>
                                    Locations</h5>
                                </div>
                                {/* .counter-title */}
                                <div className="counter-content" style={{ fontSize: videoTopSection['desc-size'], color: videoTopSection['desc-color'] }}>
                                  <p>Client assets under advisement.</p>
                                </div>
                                {/* .counter-read-more */}
                              </div>
                              {/* .counter-right */}
                            </div>
                            {/* .media */}
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
        <div
          className="elementor-element elementor-element-4ad4c0f6 e-flex e-con-boxed e-con e-parent e-lazyloaded"
          data-id="4ad4c0f6"
          data-element_type="container"
          style={{ margin: '0', display: 'none' }}
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-5237d806 e-flex e-con-boxed e-con e-child"
              data-id="5237d806"
              data-element_type="container"
              data-settings='{"animation":"none"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-740d5562 e-flex e-con-boxed e-con e-child"
                  data-id="740d5562"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-f423e8e e-flex e-con-boxed e-con e-child"
                      data-id="f423e8e"
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-247a0d4e e-flex e-con-boxed e-con e-child"
                          data-id="247a0d4e"
                          data-element_type="container"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div className="e-con-inner">
                            <div
                              className="elementor-element elementor-element-7d80052a cea-view-framed anim cus-light elementor-widget__width-auto elementor-hidden-mobile cea-shape-circle elementor-widget elementor-widget-ceapopupanything animated zoomIn"
                              data-id="7d80052a"
                              data-element_type="widget"
                              data-settings='{"_animation":"zoomIn","_animation_delay":3}'
                              data-widget_type="ceapopupanything.default"
                            >
                              <div className="elementor-widget-container popup-anything-wrapper">
                                <a
                                  className="cea-popup-anything popup-trigger-icon"
                                  href="https://www.youtube.com/watch?v=lw7xIB0kPCo"
                                >
                                  <i aria-hidden="true" className=" bi-play" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-5e1e5a06 cea-align-left cea-mobile-align-center elementor-widget elementor-widget-ceasectiontitle"
                              data-id="5e1e5a06"
                              data-element_type="widget"
                              data-widget_type="ceasectiontitle.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="section-title-wrapper">
                                  <div className="title-wrap">
                                    <h2 className="section-title"
                                      style={{
                                        fontSize: videoTopSection['video-heading-size'], color: videoTopSection['video-heading-color']
                                      }}>
                                      "The Best Way to Maintain a Healthy Smile to
                                      Proactive!"
                                    </h2>
                                  </div>
                                  {/* .title-wrap */}
                                  <div className="section-description" />
                                  {/* .section-description */}
                                </div>
                                {/* .section-title-wrapper */}{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-3fe33909 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child"
                      data-id="3fe33909"
                      data-element_type="container"
                    >
                      <div className="e-con-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VideoSection></VideoSection>
        <div
          className="home_align"
          data-id="5c6a904c"
          data-element_type="container" style={{ backgroundColor: doctors['background-color']}}
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-abe6a2c e-flex e-con-boxed e-con e-child"
              data-id="abe6a2c"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-75b52bfa e-flex e-con-boxed e-con e-child"
                  data-id="75b52bfa"
                  data-element_type="container"
                >
                  <div className="e-con-inner" style={{gap:'0'}}>
                    <div
                      className="elementor-element elementor-element-2164c3aa e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
                      data-id="2164c3aa"
                      data-element_type="container"
                    ></div>
                    <div
                      className="elementor-element elementor-element-2cca417d e-con-full e-flex e-con e-child animated slideInDown"
                      data-id="2cca417d"
                      data-element_type="container"
                      data-settings='{"animation":"slideInDown"}'
                    >
                      <div
                        className="elementor-element elementor-element-add583f cea-align-center elementor-widget elementor-widget-ceasectiontitle"
                        data-id="add583f"
                        data-element_type="widget"
                        data-widget_type="ceasectiontitle.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="section-title-wrapper">
                            <div className="title-wrap">
                              <h2 className="subtitle-dots sub-title home-head-font" style={{
                                color: doctors['heading1-color'], fontSize: doctors['heading1-size'],
                                fontWeight: 'bold',
                                display: 'block'
                              }}>
                                {t('doctors.heading')}
                              </h2>
                              <h2 className="section-title" style={{ color: doctors['heading2-color'], fontSize: doctors['heading2-size'], fontWeight: 'bold' }}>
                              </h2>
                            </div>
                            {/* .title-wrap */}
                            <div className="section-description" />
                            {/* .section-description */}
                          </div>
                          {/* .section-title-wrapper */}{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-2fe3f866 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child"
                      data-id="2fe3f866"
                      data-element_type="container"
                    >
                      <div className="e-con-inner"></div>
                    </div>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-7017c942 e-flex e-con-boxed e-con e-child"
                  data-id="7017c942"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-24da0674 e-flex e-con-boxed e-con e-child"
                      data-id="24da0674"
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-581d3470 elementor-widget elementor-widget-ceaservice animated fadeInUp"
                          data-id="581d3470"
                          data-element_type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="ceaservice.default"
                        >
                          <div className="elementor-widget-container service-wrapper service-style-default service-light service-normal-model">
                            {/* .row */}
                            <div className="row">
                              <SliderDoct></SliderDoct>
                            </div>
                            {/* .row */}
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
        <div className="line-container" style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <hr className="half-line" style={{ width: '50%', border: '0', height: '2px', backgroundColor: '#111', margin: '0' }} />
        </div>
      </div>
    </>
  );
}

export default Index