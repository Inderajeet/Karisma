import AppointmentButton from "../components/AppointmentButton";
import ContactDetail from "../components/ContactDetail";
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect } from 'react';
import content from '../lang/en.json';
import $ from "jquery";

export default function Index() {
  const locale = 'en'
  const lng = locale === "en" ? "ar" : "en";
  const dir = locale === "en" ? "ltr" : "rtl";

  const { en, about_us, about2, department, videoTopSection, doctors } = content;
  const {dental} = department;
  const {doc_cards} = doctors;

  useEffect(() => {

    document.dir = dir;
    if (dir === "ltr") {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    } else {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    }
  }, [dir]);
  const toggleLanguage = () => {
    document.dir = dir;
    if (lng === "en") {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    } else {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    }
    //push(pathname, asPath, { locale: lng });
  };
  return (

    <>


      <Header></Header>
      <link
        rel="stylesheet"
        id="owl-carousel-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/owl.carousel.min.css?ver=2.3.4"
        media="all"
      />
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
          <div className="e-con-inner">
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
                  <div className="e-con-inner" style={{gap: "1"}}>
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
                              src="assets/Images/home/about-us2.png"
                              title="about-3"
                              alt="about-3"
                              loading="lazy"
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-44fc78d9 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child"
                      data-id="44fc78d9"
                      data-element_type="container"
                      style={{marginLeft: "0"}}
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
                              src="assets/Images/home/about-us1.png"
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
                          style={{bottom: "-20px"}}
                        >
                          <div className="elementor-widget-container feature-box-wrapper feature-box-default" style={{ backgroundColor: about_us["CustomerBg-color"] }}>
                            <a href="/about">
                              <div className="feature-box-inner">
                                <div className="cea-featured-icon">
                                  <i
                                    aria-hidden="true"
                                    className=" bi-arrow-up-right"
                                  />
                                </div>
                                <h3 className="feature-box-title" style={{
                                  color: about_us["Customer-font-color"], fontSize: about_us["Customer-font-size"],
                                  fontFamily: 'Visby, sans-serif'
                                }}>6.5Million</h3>
                                <div className="fbox-content" style={{
                                  color: about_us["Customer-font-color"], fontSize: about_us["Customer-subfont-size"],
                                  fontFamily: 'Visby, sans-serif'
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
                            <h6 className="sub-title">
                              <span className="subtitle-dots" style={{
                                color: about_us["heading-font-color"], fontSize: about_us["heading-font-size"],
                                fontFamily: 'Visby, sans-serif'
                              }}>Brand Story</span>
                            </h6>
                          </div>
                          {/* .title-wrap */}
                          <div className="section-description">
                            <p className="" style={{
                              color: about_us["font-color"], fontSize: about_us["font-size"], textAlign: 'justify',
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              Karisma stands for empowerment and self-expression. It is a
                              luxury aesthetic brand that enhances and brings out an
                              individual’s inner charisma by offering transformative treatments
                              tailored to unique needs.
                            </p>
                            <p className="" style={{
                              color: about_us["font-color"], fontSize: about_us["font-size"], textAlign: 'justify',
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              With a focus on innovation,
                              sophistication, and elegance, Karisma helps clients radiate
                              confidence, not just through external beauty but by igniting their
                              inner glow. By blending advanced technology with personalized
                              care, Karisma is a destination where beauty and empowerment
                              meet, offering a unique journey of self-discovery and confidence.
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
                    >
                      <div className="e-con-inner">
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
                            <div className="" >
                              <div className=""  >
                                <a
                                  href="/about"
                                  className="cea-button-link elementor-button cea-button elementor-size-sm"
                                  style={{ backgroundColor: about_us["Button-color"], border: '1px solid', border: about_us["Button-border"], float: 'left' }}
                                >
                                  <span className="cea-button-content-wrapper" >
                                    <span className="cea-button-icon cea-align-icon-right">
                                    </span>
                                    <span className="cea-button-text" style={{ color: about_us["Button-text-color"] }}>ABOUT US </span>
                                  </span>
                                </a>
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
            style={{ width: 190, top: "40%", left: "85%" }}
          >
            <img
              alt="Floating Image"
              src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/06/home-about-bg.webp"
            />
          </div>
          <div className="e-con-inner">
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
                            fontFamily: 'Visby, sans-serif'
                          }}>Why Choose Us</span>
                        </h6>
                        <h2 className="" style={{
                          color: about2["heading2-color"], fontSize: about2["heading2-size"],
                          fontFamily: 'Visby, sans-serif'
                        }}>State of the Art Dentistry</h2>
                      </div>
                      {/* .title-wrap */}
                      <div className="section-description">
                        <p className="section-content" style={{
                          color: about2["desc-color"], fontSize: about2["desc-size"], textAlign: 'justify',
                          fontFamily: 'Visby, sans-serif'
                        }}>
                          We are proud to the serve our community and are committed to
                          smile making a positive impact on the world health of our
                          patients.
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
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-66a8144 elementor-widget__width-auto elementor-widget elementor-widget-ceabutton"
                      data-id="66a8144"
                      data-element_type="widget"
                      data-widget_type="ceabutton.default"
                    >
                      <div className="">
                        <div className="">
                          <a
                            href="https://wordpress.zozothemes.com/happysmile/about-us/"
                            className="cea-button-link elementor-button cea-button elementor-size-sm"
                            style={{ backgroundColor: about2["button-bg-color"], border: '1px solid', border: about2['button-border-color'], float: 'left', color: about2["button-text-color"] }}
                          >
                            <span className="cea-button-content-wrapper">
                              <span className="cea-button-icon cea-align-icon-right">
                              </span>
                              <span className="cea-button-text" >MORE DETAILS</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-4e900527 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child animated slideInUp"
              data-id="4e900527"
              data-element_type="container"
              data-settings='{"animation":"slideInUp"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-6e34b163 verticle-move elementor-widget elementor-widget-image"
                  data-id="6e34b163"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      decoding="async"
                      src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/elementor/thumbs/about-7-qnk9e7cb82wqirhtaumbp46sjdj1qsl7ekn2j11opu.webp"
                      title="about-7"
                      alt="about-7"
                      loading="lazy"
                    />{" "}
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
                      <div className="elementor-widget-container">
                        <div className="section-title-wrapper">
                          <div className="title-wrap">
                            <h4 className="section-title" style={{
                              color: about2['right-heading-color'], textAlign: 'justify', fontSize: about2['right-heading-size'],
                              fontFamily: 'Visby, sans-serif'
                            }}>Dental Checkup</h4>
                          </div>
                          {/* .title-wrap */}
                          <div className="section-description">
                            <p className="section-content" style={{
                              color: about2['desc-color'], fontSize: about2['desc-size'],
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              Tooth care is essential for maintaining good oral
                              health, preventing dental problems.{" "}
                            </p>
                          </div>
                          {/* .section-description */}
                        </div>
                        {/* .section-title-wrapper */}{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-7072a6a9 elementor-widget__width-initial elementor-widget elementor-widget-ceaiconlist"
                      data-id="7072a6a9"
                      data-element_type="widget"
                      data-widget_type="ceaiconlist.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="nav flex-column cea-icon-list">
                          <li className="cea-icon-list-item">
                            {" "}
                            <span className="cea-icon-list-icon">
                              <i aria-hidden="true" className=" bi-arrow-up-right" />{" "}
                            </span>
                            <span className="" style={{
                              color: about2['list-color'], fontSize: about2['list-size'], textAlign: 'justify',
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              Wisdom tooth extraction
                            </span>
                          </li>
                          <li className="cea-icon-list-item">
                            {" "}
                            <span className="cea-icon-list-icon">
                              <i aria-hidden="true" className=" bi-arrow-up-right" />{" "}
                            </span>
                            <span className="" style={{
                              color: about2['list-color'], fontSize: about2['list-size'], textAlign: 'justify',
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              Root Canal Treatment
                            </span>
                          </li>
                          <li className="cea-icon-list-item">
                            {" "}
                            <span className="cea-icon-list-icon">
                              <i aria-hidden="true" className=" bi-arrow-up-right" />{" "}
                            </span>
                            <span className="" style={{
                              color: about2['list-color'], fontSize: about2['list-size'], textAlign: 'justify',
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              {" "}
                              Invisalign &amp; ClearCorrect
                            </span>
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3c5a2b18 e-flex e-con-boxed e-con e-child"
                  data-id="3c5a2b18"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-10ff2985 cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                      data-id="10ff2985"
                      data-element_type="widget"
                      data-widget_type="ceasectiontitle.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="section-title-wrapper">
                          <div className="title-wrap">
                            <h4 className="" style={{
                              color: about2['heading2-color'], fontSize: about2['heading2-size'],
                              fontFamily: 'Visby, sans-serif'
                            }}>Brushing</h4>
                          </div>
                          {/* .title-wrap */}
                          <div className="section-description">
                            <p className="section-content" style={{
                              color: about2['desc-color'], fontSize: about2['desc-size'],
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              Tooth care is essential for maintaining good oral
                              health, preventing dental problems.{" "}
                            </p>
                          </div>
                          {/* .section-description */}
                        </div>
                        {/* .section-title-wrapper */}{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-3cdf2699 elementor-widget__width-initial elementor-widget elementor-widget-ceaiconlist"
                      data-id="3cdf2699"
                      data-element_type="widget"
                      data-widget_type="ceaiconlist.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="nav flex-column cea-icon-list">
                          <li className="cea-icon-list-item">
                            {" "}
                            <span className="cea-icon-list-icon">
                              <i aria-hidden="true" className=" bi-arrow-up-right" />{" "}
                            </span>
                            <span className="" style={{
                              color: about2['list-color'], fontSize: about2['list-size'], textAlign: 'justify',
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              Temporomandibular joint dysfunction
                            </span>
                          </li>
                          <li className="cea-icon-list-item">
                            {" "}
                            <span className="cea-icon-list-icon">
                              <i aria-hidden="true" className=" bi-arrow-up-right" />{" "}
                            </span>
                            <span className="" style={{
                              ccolor: about2['list-color'], fontSize: about2['list-size'], textAlign: 'justify',
                              fontFamily: 'Visby, sans-serif'
                            }}>
                              Dentin hypersensitivity
                            </span>
                          </li>
                          <li className="cea-icon-list-item">
                            {" "}
                            <span className="cea-icon-list-icon">
                              <i aria-hidden="true" className=" bi-arrow-up-right" />{" "}
                            </span>
                            <span className="" style={{
                              color: about2['list-color'], fontSize: about2['list-size'], textAlign: 'justify',
                              fontFamily: 'Visby, sans-serif'
                            }}>Cavities</span>
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className=""
          data-id="5c6a904c"
          data-element_type="container" style={{ backgroundColor: department['background-color'], paddingTop: '80px', paddingBottom: '80px' }}
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
                              <h6 className="sub-title">
                                <span className="subtitle-dots homefont" style={{
                                  color: department['heading1-color'], fontSize: department['heading1-size'],
                                  fontFamily: 'Visby, sans-serif', display: 'block'
                                }}>Department</span>
                              </h6>
                              <h2 className="section-title homefont" style={{ color: department['heading2-color'], fontSize: department['heading2-size'] }}>
                                Comprehensive Care Across Our Specialized Departments
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
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <div className="service-inner" style={{ backgroundColor: dental["background-color"] }}>
                                  <div className="service-icon-img-wrap">
                                    {/* <img
                                      decoding="async"
                                      src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/root-canal-1.png"
                                      className="img-fluid service-icon-img"
                                      alt="Scaling and Root Planing"
                                    /> */}
                                  </div>
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="/"
                                        className="post-title " style={{ color: dental["heading-color"], fontSize: dental["heading-size"] }}
                                      >
                                        Dental
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt " style={{ color: dental["desc-color"], fontSize: dental["desc-size"] }}>
                                    Transform Your Smile and Confidence with Damas Medical Center's..
                                    Transform Your Smile and Confidence with Damas Medical Center's..
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/scaling-and-root-planing/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="assets/Images/home/Dental.png"
                                        title="services-1"
                                        alt=""
                                        className="img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left">
                                      <li>
                                        <div className="">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/scaling-and-root-planing/"
                                            className=" homefont" style={{ color: dental['button-text-color'], fontWeight: "600", fontSize: dental['button-text-size']}}
                                          >
                                            VIEW DETAILS
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}
                              <div className="col-lg-4 col-md-4">
                                <div className="service-inner" style={{ backgroundColor: dental['background-color'] }}>
                                  <div className="service-icon-img-wrap">
                                    {/* <img
                                      decoding="async"
                                      src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/teeth-cleaning.png"
                                      className="img-fluid service-icon-img"
                                      alt="Teeth Whitening"
                                    /> */}
                                  </div>
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/service/teeth-whitening/"
                                        className="post-title homefont" style={{ color: dental['heading-color'], fontSize: dental['heading-size'] }}
                                      >
                                        Derma
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt homefont" style={{ color: dental['desc-color'], fontSize: dental['desc-size'] }}>
                                    Discover Your Inner Radiance Through Personalized Aesthetics...
                                    Discover Your Inner Radiance Through Personalized Aesthetics...
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/teeth-whitening/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="assets/Images/home/derma.png"
                                        title="services-9"
                                        alt=""
                                        className="img-fluid squared img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left">
                                      <li>
                                        <div className="">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/teeth-whitening/"
                                            className=" homefont" style={{ color: dental['button-text-color'], fontWeight: "600", fontSize: dental['button-text-size']}}
                                          >
                                            VIEW DETAILS
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}
                              <div className="col-lg-4 col-md-4">
                                <div className="service-inner" style={{ backgroundColor: dental['background-color'] }}>
                                  <div className="service-icon-img-wrap">
                                    {/* <img
                                      decoding="async"
                                      src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/braces-2.png"
                                      className="img-fluid service-icon-img"
                                      alt="Invisalign & ClearCorrect"
                                    /> */}
                                  </div>
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/service/invisalign-clearcorrect/"
                                        className="post-title homefont" style={{ color: dental['heading-color'], fontSize: dental['heading-size'] }}
                                      >
                                        Laser Hair Removal
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt homefont" style={{ color: dental['desc-color'], fontSize: dental['desc-size'] }}>
                                    Laser Hair Removal at Damas Medical Center...
                                    Laser Hair Removal at Damas Medical Center...
                                    Laser Hair Removal at Damas Medical Center...
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/invisalign-clearcorrect/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="assets/Images/home/laser.png"
                                        title="services-6"
                                        alt=""
                                        className="img-fluid squared img-fluid squared img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left">
                                      <li>
                                        <div className="">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/invisalign-clearcorrect/"
                                            className=" homefont" style={{ color: dental['button-text-color'], fontWeight: "600", fontSize: dental['button-text-size']}}
                                          >
                                            VIEW DETAILS
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}
                            </div>
                            {/* .row */}
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <div className="service-inner" style={{ backgroundColor: dental['background-color'] }}>
                                  <div className="service-icon-img-wrap">
                                    {/* <img
                                      decoding="async"
                                      src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/dental-crown.png"
                                      className="img-fluid service-icon-img"
                                      alt="Zirconium Crowns"
                                    /> */}
                                  </div>
                                  {/* <div className="post-category" style={{ display: 'none' }}>
                                    <span className="before-icon ti-folder" />
                                    <a href="https://wordpress.zozothemes.com/happysmile/service-categories/specialized-care/">
                                      Specialized Care
                                    </a>
                                  </div> */}
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                        className="post-title homefont" style={{ color: dental['heading-color'], fontSize: dental['heading-size'] }}
                                      >
                                        Skincare
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt homefont" style={{ color: dental['desc-color'], fontSize: dental['desc-size'] }}>
                                    We understand the importance of healthy, beautiful skin...
                                    We understand the importance of healthy, beautiful skin...
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="assets/Images/home/skincare.png"
                                        title="services-2"
                                        alt=""
                                        className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left">
                                      <li>
                                        <div className="" >
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                            className=" homefont" style={{ color: dental['button-text-color'], fontWeight: "600", fontSize: dental['button-text-size']}}
                                          >
                                            VIEW DETAILS
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}
                              <div className="col-lg-4 col-md-4">
                                <div className="service-inner" style={{ backgroundColor: dental['background-color'] }}>
                                  <div className="service-icon-img-wrap">
                                    {/* <img
                                      decoding="async"
                                      src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/tooth.png"
                                      className="img-fluid service-icon-img"
                                      alt="Partials & Dentures"
                                    /> */}
                                  </div>
                                  {/* <div className="post-category" style={{ display: 'none' }}>
                                    <span className="before-icon ti-folder" />
                                    <a href="https://wordpress.zozothemes.com/happysmile/service-categories/preventive-dentistry/">
                                      Preventive Dentistry
                                    </a>
                                  </div> */}
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/service/partials-dentures/"
                                        className="post-title homefont" style={{ color: dental['heading-color'], fontSize: dental['heading-size'] }}
                                      >
                                        Gynecology
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt homefont" style={{ color: dental['desc-color'], fontSize: dental['desc-size'] }}>
                                    we celebrate women's health and well-being in all its aspects...
                                    we celebrate women's health and well-being in all its aspects...
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/partials-dentures/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="assets/Images/home/gyne.png"
                                        title="services-4"
                                        alt=""
                                        className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left">
                                      <li>
                                        <div className="">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/partials-dentures/"
                                            className=" homefont" style={{ color: dental['button-text-color'], fontWeight: "600", fontSize: dental['button-text-size']}}
                                          >
                                            VIEW DETAILS
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}
                              <div className="col-lg-4 col-md-4">
                                <div className="service-inner"style={{ backgroundColor: dental['background-color'] }}>
                                  <div className="service-icon-img-wrap">
                                    {/* <img
                                      decoding="async"
                                      src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2022/07/tooth-extraction-2.png"
                                      className="img-fluid service-icon-img"
                                      alt="Wisdom Tooth Extraction"
                                    /> */}
                                  </div>
                                  {/* <div className="post-category" style={{ display: 'none' }}>
                                    <span className="before-icon ti-folder" />
                                    <a href="https://wordpress.zozothemes.com/happysmile/service-categories/preventive-dentistry/">
                                      Preventive Dentistry
                                    </a>
                                  </div> */}
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/service/wisdom-tooth-extraction/"
                                        className="post-title homefont" style={{ color: dental['heading-color'], fontSize: dental['heading-size'] }}
                                      >
                                        Slimming
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt homefont" style={{ color: dental['desc-color'], fontSize: dental['desc-size'] }}>
                                    A Journey to Transformation at Damas Medical Center's Slimming...
                                    A Journey to Transformation at Damas Medical Center's Slimming...
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/wisdom-tooth-extraction/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="assets/Images/home/slimming.png"
                                        title="services-7"
                                        alt=""
                                        className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left">
                                      <li>
                                        <div className="">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/wisdom-tooth-extraction/"
                                            className=" homefont" style={{ color: dental['button-text-color'], fontWeight: "600", fontSize: dental['button-text-size']}}
                                          >
                                            VIEW DETAILS
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}
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
                                    className="counter-up homefont" style={{fontSize: videoTopSection['couter-size'], color: videoTopSection['couter-color']}}
                                    data-count={840}
                                    data-duration={2000}
                                  >
                                    840
                                  </span>
                                </h3>
                              </div>
                              {/* .counter-value */}
                              <div className="counter-title">
                                <h5 className="counter-title-head homefont" style={{fontSize: videoTopSection['heading-size'], color: videoTopSection['heading-color']}}>
                                  Happy Patients</h5>
                              </div>
                              {/* .counter-title */}
                              <div className="counter-content homefont" style={{fontSize: videoTopSection['desc-size'], color: videoTopSection['desc-color']}}>
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
                                      className="counter-up homefont" style={{fontSize: videoTopSection['couter-size'], color: videoTopSection['couter-color']}}
                                      data-count={93}
                                      data-duration={2000}
                                    >
                                      93
                                    </span>
                                  </h3>
                                </div>
                                {/* .counter-value */}
                                <div className="counter-title">
                                  <h5 className="counter-title-head homefont" style={{fontSize: videoTopSection['heading-size'], color: videoTopSection['heading-color']}}>
                                    Locations</h5>
                                </div>
                                {/* .counter-title */}
                                <div className="counter-content homefont" style={{fontSize: videoTopSection['desc-size'], color: videoTopSection['desc-color']}}>
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
                                    <h2 className="section-title homefont">
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

        <div
          className=""
          data-id="5c6a904c"
          data-element_type="container" style={{ backgroundColor: doctors['background-color'], paddingTop: '80px', paddingBottom: '80px' }}
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
                              <h6 className="sub-title">
                                <span className="subtitle-dots homefont" style={{
                                  color: doctors['heading1-color'], fontSize: doctors['heading1-size'],
                                  fontFamily: 'Visby, sans-serif', display: 'block'
                                }}>Our Doctors</span>
                              </h6>
                              <h2 className="section-title homefont" style={{ color: doctors['heading2-color'], fontSize: doctors['heading2-size'] }}>
                                Friendly Faces, Personalized Care for Your Smile
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
                              <div className="col-lg-4 col-md-4" >
                                <div className="service-inner" style={{ backgroundColor: doc_cards['background-color'] }}>

                                  {/* <div className="post-category" style={{ display: 'none' }}>
                                    <span className="before-icon ti-folder" />
                                    <a href="https://wordpress.zozothemes.com/happysmile/service-categories/specialized-care/">
                                      Specialized Care
                                    </a>
                                  </div> */}
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                        className="post-title homefont" style={{ color: doc_cards['heading-color'], fontSize: doc_cards['heading-size']}}
                                      >
                                        Brian Wilson
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt homefont" style={{ color: doc_cards['desc-color'], fontSize: doc_cards['desc-size']}}>
                                    Working Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit,..
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="assets/Images/home/Doctors.png"
                                        title="services-2"
                                        alt=""
                                        style={{ width: '306px', height: '204px' }}
                                        className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left" style={{ float: "right" }}>
                                      <li>
                                        <div className="" >
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                            className="homefont" style={{ color: doc_cards['button-text-color'], fontSize: doc_cards['button-text-size'], fontWeight: "600" }}
                                          >
                                            READ MORE
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}
                              <div className="col-lg-4 col-md-4">
                                <div className="service-inner" style={{ backgroundColor: doc_cards['background-color']  }}>

                                  {/* <div className="post-category" style={{ display: 'none' }}>
                                    <span className="before-icon ti-folder" />
                                    <a href="https://wordpress.zozothemes.com/happysmile/service-categories/specialized-care/">
                                      Specialized Care
                                    </a>
                                  </div> */}
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                        className="post-title homefont" style={{ color: doc_cards['heading-color'], fontSize: doc_cards['heading-size']}}
                                      >
                                        Mary Vels
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt homefont" style={{ color: doc_cards['desc-color'], fontSize: doc_cards['desc-size']}}>
                                    Working Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit,..
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2023/01/team-6.webp"
                                        title="services-2"
                                        alt=""
                                        style={{ width: '306px', height: '204px' }}
                                        className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left" style={{ float: "right" }}>
                                      <li>
                                        <div className="" >
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                            className="homefont" style={{ color: doc_cards['button-text-color'], fontSize: doc_cards['button-text-size'], fontWeight: "600" }}
                                          >
                                            READ MORE
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}
                              <div className="col-lg-4 col-md-4">
                                <div className="service-inner" style={{ backgroundColor: doc_cards['background-color']  }}>

                                  <div className="post-category" style={{ display: 'none' }}>
                                    <span className="before-icon ti-folder" />
                                    <a href="https://wordpress.zozothemes.com/happysmile/service-categories/specialized-care/">
                                      Specialized Care
                                    </a>
                                  </div>
                                  <div className="entry-title">
                                    <h3 className="post-title-head">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                        className="post-title homefont" style={{ color: doc_cards['heading-color'], fontSize: doc_cards['heading-size']}}
                                      >
                                        Emi Akezawa
                                      </a>
                                    </h3>
                                  </div>
                                  {/* .entry-title */}
                                  <div className="post-excerpt homefont" style={{ color: doc_cards['desc-color'], fontSize: doc_cards['desc-size']}}>
                                    Working Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit,..
                                  </div>
                                  {/* .post-excerpt */}
                                  <div className="post-thumb">
                                    <a
                                      href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                      className="post-image-link"
                                    >
                                      <img
                                        decoding="async"
                                        src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-5.webp"
                                        title="services-2"
                                        alt=""
                                        objectFit='cover'
                                        style={{ width: '306px', height: '204px', objectFit: 'cover' }}
                                        className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                      />
                                    </a>
                                  </div>
                                  {/* .post-thumb */}
                                  <div className="bottom-meta clearfix">
                                    <ul className="nav bottom-meta-list meta-left" style={{ float: "right" }}>
                                      <li>
                                        <div className="" >
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/"
                                            className="homefont" style={{ color: doc_cards['button-text-color'], fontSize: doc_cards['button-text-size'], fontWeight: "600" }}
                                          >
                                            READ MORE
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* .service-inner */}
                              </div>
                              {/* .col / .owl-carousel-item / .isotope */}



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
        <Footer></Footer>
      </div>
    </>
  );
}