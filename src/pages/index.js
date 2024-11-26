import AppointmentButton from "../components/AppointmentButton";
import ContactDetail from "../components/ContactDetail";
import Footer from "../components/footer";
import Header from "../components/header";
import React, { useState } from "react";
import Booking from "../components/BookingForm";
import HomeServices from "../components/home_services";
import HomeDoctors from "../components/homeDoctors";

export default function Index() {
  const [showBooking, setShowBooking] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleOpen = (e) => {
      console.log('working');
        setShowBooking(true);
    };

    const handleClose = () => {
        setShowBooking(false);
    };

  return (

    <>
      <Header></Header>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <title>Medical &amp; Dentist WordPress Theme</title>
      <meta name="robots" content="max-image-preview:large" />

      
      <style
        id="wp-emoji-styles-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n\timg.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n"
        }}
      />

      <style
        id="classic-theme-styles-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n/*! This file is auto-generated */\n.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}\n"
        }}
      />
      <style
        id="global-styles-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            '\n:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #FFF;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--dark-gray: #111;--wp--preset--color--light-gray: #767676;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-family--inter: "Inter", sans-serif;--wp--preset--font-family--cardo: Cardo;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}\n:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}\n'
        }}
      />

      
      <style
        id="woocommerce-inline-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.woocommerce form .form-row .required { visibility: visible; }\n"
        }}
      />
      
      
      <style
        id="dd-style-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n\t\t\t\t\t.dd-container{\n\t\t\t\t\t\tmax-width: 1200px;\n\t\t\t\t\t}\n"
        }}
      />
      <meta name="generator" content="WordPress 6.7" />
      <meta name="generator" content="WooCommerce 9.4.1" />
      
      <noscript>
        &lt;style&gt;.woocommerce-product-gallery{"{"} opacity: 1 !important; {"}"}
        &lt;/style&gt;
      </noscript>
      <meta
        name="generator"
        content="Elementor 3.25.6; features: additional_custom_breakpoints, e_optimized_control_loading; settings: css_print_method-external, google_font-enabled, font_display-swap"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 1024px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 640px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"
        }}
      />

      
      <style
        id="wp-custom-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t.single-doctors-directory .page-title-bar {\n    padding-top: 325px;\n    padding-bottom: 70px;\n}\t\t"
        }}
      />
      
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n"
        }}
      />


      <div className="happysmile-body-inner">
        <div className="page-loader">
          <span className="page-loader-divider" />
        </div>
        <div className="sticky-outer" data-stickyup={0} style={{ height: 0 }}>
          <div className="sticky-head" style={{ top: 0 }}>
            <div className="header-mobilebar navbar">
              <div className="container">
                <ul className="nav mobilebar element-left right-element-exist">
                  {" "}
                  <li className="header-mobile-toggle-wrapper">
                    <a
                      href="https://wordpress.zozothemes.com/happysmile"
                      className="mobile-menu-toggle"
                    >
                      <i className="bi bi-list" />
                    </a>
                  </li>
                  {/* .header-navigation-wrapper */}
                </ul>
                <ul className="nav mobilebar pull-center justify-content-center right-element-exist">
                  {" "}
                  <li className="header-titles-wrapper">
                    <div className="header-titles">
                      <a
                        className="site-link"
                        href="/"
                      >
                        <img
                          className="img-fluid mobile-logo"
                          src="https://dental.dmaksolutions.com/assets/Images/logo_main-3.png"
                          alt="Medical & Dentist WordPress Theme"
                        />
                      </a>
                    </div>
                    {/* .header-titles */}
                  </li>
                  {/* .header-titles-wrapper */}
                </ul>
                <ul className="nav mobilebar pull-right justify-content-end right-element-exist">
                  {" "}
                  <li className="header-search-wrapper">
                    <a className="full-search-toggle" href="#">
                      <i className="bi bi-search" />
                    </a>
                  </li>
                </ul>{" "}
              </div>
              {/* .container */}
            </div>
            {/* .header-mobilebar */}{" "}
          </div>{" "}
          {/* .sticky-head */}
        </div>{" "}
        {/* .sticky-outer */}
        <header id="site-header" style={{ display: 'none' }} className="site-header header-absolute">
          <div className="header-topbar navbar elements-3">
            <div className="container-fluid">
              <ul className="nav topbar-ul element-left right-element-exist">
                <li>
                  <div className="Topbar-line" style={{ fontFamily: 'Tajawal variant2' }}>
                    A healthier{" "}
                    <a
                      href="https://wordpress.zozothemes.com/colf/courses/"
                      className="theme-color"
                    >
                      <strong> smile</strong>{" "}
                    </a>{" "}
                    without the hassle...
                  </div>
                </li>
              </ul>
              <ul className="nav topbar-ul pull-center justify-content-center right-element-exist" style={{ fontFamily: 'Tajawal variant2' }}>
                <li>
                  <i className="bi bi-clock theme-color mr-2" />
                  Mon – Sun: 9.00 am – 6.00 pm
                </li>
              </ul>
              <ul className="nav topbar-ul pull-right justify-content-end right-element-exist">
                <li>
                  <ul
                    className="nav social-icons social-transparent social-white social-h-own social-bg-white social-hbg-white"
                    target="_blank"
                  >
                    <li>
                      <a className="social-facebook" href="#">
                        <span className="bi bi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="social-twitter" href="#%20">
                        <span className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a className="social-instagram" href="#">
                        <span className="bi bi-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="social-whatsapp" href="">
                        <span className="bi bi-whatsapp" />
                      </a>{" "}
                    </li>
                  </ul>
                  {/* .social-icons */}
                </li>
              </ul>{" "}
            </div>
            {/* .container */}
          </div>
          {/* .header-topbar */}
          <div className="header-logobar navbar elements-2" style={{ backgroundColor: "#405D53" }}>
            <div className="container-fluid">
              <ul className="nav logobar-ul element-left right-element-exist">
                {" "}
                <li className="header-titles-wrapper">
                  <div className="header-titles">
                    <a
                      className="site-link"
                      href="/" 
                    >
                      <img
                        className="img-fluid site-logo"
                        src="https://dental.dmaksolutions.com/assets/Images/logo_main-3.png"
                        alt="Medical & Dentist WordPress Theme"
                      />
                    </a>
                    <a
                      className="site-link sticky-logo-link"
                      href="/"
                    >
                      <img
                        className="img-fluid sticky-logo"
                        src="https://dental.dmaksolutions.com/assets/Images/logo_main-3.png"
                        alt="Medical & Dentist WordPress Theme"
                      />
                    </a>
                  </div>
                  {/* .header-titles */}
                </li>
                {/* .header-titles-wrapper */}
                <li>
                  <h5 style={{ fontFamily: ' SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;', color: 'white' }}>
                    The Best Way To Maintain A Healthy
                    <br />
                    Smile Is To Be Proactive!
                  </h5>
                </li>
              </ul>
              <ul className="nav logobar-ul pull-right justify-content-end right-element-exist">
                <li>
                  <a style={{ color: '#D9C5AD', fontFamily: ' "Tajawal variant2", Tofu' }}
                    href="mailto:info@karisma.com"
                    className="email-link"
                    target="_self"
                  >
                    <span className="bi bi-envelope theme-color me-2" style={{ color: 'white' }} />
                    info@karisma.com
                  </a>
                </li>
                <li>
                  <ul className="happysmile-header-custom-info d-flex align-items-center">
                    <li className="happysmile-header-find">
                      <a
                        href="https://wordpress.zozothemes.com/happysmile/doctors-directory/"
                        target="_blank"
                        className="find-link"
                        style={{ color: '#D9C5AD', fontFamily: ' "Tajawal variant2", Tofu' }}
                      >
                        <span className="bi bi-geo-alt theme-color me-2" style={{ color: 'white' }}> </span>
                        Find Doctor
                      </a>
                    </li>
                    <li className="happysmile-header-btn" style={{ display: 'none' }}>
                      <a
                        href="https://wordpress.zozothemes.com/happysmile/appointment/"
                        target="_blank"
                        className="btn btn-primary"
                        style={{ color: '#577065', fontFamily: ' "Tajawal variant2", Tofu' }}
                      >
                        <span className="btn-text">
                          APPOINTMENT
                        </span>
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="javascript:void(0);"
                        className=""
                        lang="ar"
                        hrefLang="ar"
                        val="ar"
                      >
                        <div className="icon">
                          <img src="./assets/Images/lan/lang1.png" alt="Arabic" />
                        </div>

                      </a>
                    </li>

                  </ul>
                </li>
              </ul>{" "}

            </div>
            {/* .container */}
          </div>
          {/* .header-logobar */}

          {successMessage && (
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                    {successMessage}
                    <button type="button" className="btn-close" onClick={() => setSuccessMessage(null)}></button>
                </div>
            )}

          <div className="al_home">
            <ul class="OnlineBookingfixed floating">
              <a onClick={handleOpen}>
                <li style={{ color: 'white', fontFamily: ' "Tajawal variant2", Tofu' }}>APPOINTMENT</li>
                </a>
            </ul>
          </div>
          <Booking showModal={showBooking} handleClose={handleClose} setSuccessMessage={setSuccessMessage} />
          <a
            href="https://wa.me/+971564083772"
            target="_blank"
            className="float"
            title="WhatsApp"
          >
            <img
              alt=""
              loading="lazy"
              width={225}
              height={225}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              srcSet="https://altairchauffeur.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhatsAppIcon.ff701e71.jpg&w=256&q=75"
              src="https://altairchauffeur.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhatsAppIcon.ff701e71.jpg&w=256&q=75"
            />
          </a>
          <div
            className="sticky-outer"
            data-stickyup={0}
            style={{ height: "81.6px" }}
          >
            <div className="sticky-head" style={{ top: 0 }}>
              <div className="header-navbar navbar elements-2">
                <div className="container-fluid">
                  <ul className="nav navbar-ul element-left right-element-exist">
                    {" "}
                    <li className="header-titles-wrapper">
                      <div className="header-titles">
                        <a
                          className="site-link"
                          href="/"
                        >
                          <img
                            className="img-fluid site-logo"
                            src="https://dental.dmaksolutions.com/assets/Images/logo_main-3.png"
                            alt="Medical & Dentist WordPress Theme"
                          />
                        </a>
                        <a
                          className="site-link sticky-logo-link"
                          href="/"
                        >
                          <img
                            className="img-fluid sticky-logo"
                            src="https://dental.dmaksolutions.com/assets/Images/logo_main-3.png"
                            alt="Medical & Dentist WordPress Theme"
                          />
                        </a>
                      </div>
                      {/* .header-titles */}
                    </li>
                    {/* .header-titles-wrapper */}
                    <li className="header-navigation-wrapper">
                      <nav className="primary-menu-wrapper" aria-label="Horizontal">
                        <ul className="nav wp-menu primary-menu">
                          <li id="menu-item-73582" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-73582">
                            <a href="/about" style={{ fontFamily: 'Tajawal variant2' }}>About Us</a></li>

                          <li
                            id="menu-item-73581"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-73581"
                          >
                            <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                              Department
                            </a>
                            <ul className="sub-menu">

                              <li
                                id="menu-item-72611"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72611"
                              >
                                <a href="#" style={{ fontFamily: 'Tajawal variant2' }}>Dental</a>
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-73631"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73631"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Hollywood Smile (Veneers)
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73632"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73632"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Implant
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Orthodontics
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Teeth Whitening
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Mouth Rehabilitation
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Root Canal Treatment
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/">
                                      Pediatric
                                    </a>
                                  </li>

                                </ul>
                              </li>
                              <li
                                id="menu-item-72611"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72611"
                              >
                                <a href="#" style={{ fontFamily: 'Tajawal variant2' }}>Derma                                                                                        </a>
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-73631"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73631"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Dermal Fillers
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73632"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73632"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Botox
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Cosmetic Threads
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Rejuvenation injection
                                    </a>
                                  </li>


                                </ul>
                              </li>
                              <li
                                id="menu-item-72611"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72611"
                              >
                                <a href="#" style={{ fontFamily: 'Tajawal variant2' }}>
                                  Laser Hair Removal                                                                                                                                                                                 </a>
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-73631"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73631"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Candela GentleMax Pro
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73632"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73632"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Cynosure Elite+
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      RevLite SI
                                    </a>
                                  </li>

                                </ul>
                              </li>
                              <li
                                id="menu-item-72611"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-72611"
                              >
                                <a href="#" style={{ fontFamily: 'Tajawal variant2' }}>Skincare</a>
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-73631"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73631"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Facials
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73632"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73632"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Peeling
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Mesotherapy
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Plasma face
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Dermapen + Botox
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      IV DRIP Glowing
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-73634"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73634"
                                  >
                                    <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                                      Collagen Threads
                                    </a>
                                  </li>

                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="menu-item-73582"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73582"
                          >
                            <a href="/doctor" style={{ fontFamily: 'Tajawal variant2' }}>

                              Our Doctors
                            </a>
                          </li>
                          <li
                            id="menu-item-73582"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73582"
                          >
                            <a href="/offers" style={{ fontFamily: 'Tajawal variant2' }}>
                              Offers
                            </a>
                          </li>
                          <li
                            id="menu-item-73582"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73582"
                          >
                            <a href="/" style={{ fontFamily: 'Tajawal variant2' }}>
                              Careers
                            </a>
                          </li>
                          <li
                            id="menu-item-73582"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73582"
                          >
                            <a href="/contact_us" style={{ fontFamily: 'Tajawal variant2' }}>
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </nav>
                      {/* .primary-menu-wrapper */}
                    </li>
                    {/* .header-navigation-wrapper */}
                  </ul>
                  <ul className="nav navbar-ul pull-right justify-content-end right-element-exist">
                    <li>
                      <a href="tel:5284567592" className="h-phone">
                        <i className="bi bi-telephone-forward-fill mr-2" /> (528)
                        456-7592
                      </a>
                    </li>

                    <li className="secondary-toggle-wrapper">
                      <a style={{ display: 'block' }}
                        href="https://wordpress.zozothemes.com/happysmile"
                        className="secondary-menu-toggle happysmile-toggle"
                      >
                        <span />
                        <span />
                        <span />
                        <span />
                      </a>

                    </li>



                  </ul>{" "}

                </div>

                {/* .container */}
              </div>
              {/* .header-navbar */}
            </div>{" "}
            {/* .sticky-head */}
          </div>{" "}
          {/* .sticky-outer */}
        </header>
        {/* #site-header */}
        <div className="happysmile-slider-wrapper" style={{ display: 'none' }}>
          {/* START happysmile Home Main REVOLUTION SLIDER 6.7.20 */}
          <rs-fullwidth-wrap
            id="rev_slider_2_1_forcefullwidth"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <rs-module-wrap
              id="rev_slider_2_1_wrapper"
              data-source="gallery"
              style={{
                visibility: "visible",
                background: "rgb(38, 38, 38)",
                padding: 0,
                margin: "0px auto",
                height: 980,
                display: "block",
                width: 1519,
                position: "absolute",
                overflow: "visible",
                left: 0
              }}
            >
              <rs-module
                id="rev_slider_2_1"
                style={{
                  height: 980,
                  width: 1519,
                  maxHeight: 980,
                  touchAction: "manipulation",
                  cursor: "pointer",
                  userSelect: "none"
                }}
                data-version="6.7.20"
                data-idcheck="true"
                className="revslider-initialised rev_redraw_on_blurfocus"
                data-slideactive="rs-4"
              >
                <div data-key="staticlayers" style={{ touchAction: "manipulation" }}>
                  {/*

						*/}
                  <div
                    className="rs-parallax-wrap"
                    style={{
                      position: "absolute",
                      display: "block",
                      pointerEvents: "auto",
                      touchAction: "manipulation",
                      left: 190,
                      top: 312,
                      zIndex: 9,
                      visibility: "visible",
                      perspective: 601
                    }}
                  >
                    <rs-layer
                      id="slider-2-slide-2-layer-17"
                      className="rs-layer-static rs-layer"
                      data-type="object"
                      data-rsp_ch="on"
                      data-xy="xo:50px,41px,31px,19px;yo:312px,257px,195px,120px;"
                      data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                      data-onslides="s:1;"
                      data-frame_999="o:0;st:w;"
                      style={{
                        zIndex: 9,
                        fontFamily: "Roboto",
                        touchAction: "manipulation",
                        height: "auto",
                        width: "auto",
                        color: "rgb(255, 255, 255)",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        minHeight: 0,
                        minWidth: 0,
                        maxHeight: "none",
                        maxWidth: "none",
                        textAlign: "left",
                        lineHeight: 0,
                        letterSpacing: 0,
                        fontWeight: 400,
                        fontSize: 20,
                        backdropFilter: "none",
                        filter: "none",
                        transformOrigin: "50% 50%",
                        opacity: 1,
                        transform: "translate(0px, 0px)",
                        visibility: "visible"
                      }}
                      data-startslide={1}
                      data-endslide={4}
                      data-idcheck="true"
                      data-stylerecorder="true"
                      data-initialised="true"
                    ></rs-layer>
                  </div>
                  {/*
           */}
                </div>
                <div
                  style={{
                    opacity: 1,
                    transform: "translate(-240px, -120px)",
                    top: "100%",
                    left: "100%",
                    touchAction: "manipulation",
                    marginLeft: 0
                  }}
                  className="tp-leftarrow tparrows hades noSwipe"
                >
                  <div className="tp-arr-allwrapper">
                    {" "}
                    <div
                      className="tp-arr-imgholder"
                      style={{
                        backgroundImage:
                          'url("https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/slider-rev-4.webp")'
                      }}
                    />
                  </div>
                </div>
                <rs-arrow
                  style={{
                    opacity: 1,
                    transform: "translate(-120px, -120px)",
                    top: "100%",
                    left: "100%",
                    touchAction: "manipulation",
                    marginLeft: 0
                  }}
                  className="tp-rightarrow tparrows hades noSwipe"
                >
                  <div className="tp-arr-allwrapper">
                    <div
                      className="tp-arr-imgholder"
                      style={{
                        backgroundImage:
                          'url("https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/slider-rev-4.webp")'
                      }}
                    />
                  </div>
                </rs-arrow>
                <rs-progress
                  style={{ visibility: "hidden", touchAction: "manipulation" }}
                >
                  <rs-progress-bar
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      transformOrigin: "0% 50%",
                      transform: "scale(0, 1)",
                      touchAction: "manipulation"
                    }}
                  />
                </rs-progress>
                <rs-slides
                  style={{
                    overflow: "hidden",
                    position: "absolute",
                    visibility: "visible",
                    maxHeight: "none",
                    height: "100%",
                    width: "100%",
                    touchAction: "manipulation"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      display: "block",
                      overflow: "hidden",
                      height: "100%",
                      width: "100%",
                      touchAction: "manipulation",
                      zIndex: 20,
                      opacity: 1,
                      visibility: "inherit"
                    }}
                    data-key="rs-4"
                    data-title="Web Show"
                    data-anim="f:center;"
                    data-in="o:0;sx:1.1;sy:1.1;m:true;row:30;col:30;"
                    data-out="a:false;"
                    data-originalindex={1}
                    data-origindex={0}
                    data-description=""
                    data-sba=""
                    data-scroll-based="false"
                    data-owidth={1920}
                    data-oheight={1280}
                    data-rspausetimeronce={0}
                    data-isactiveslide="true"
                  >
                    <rs-sbg-px style={{ touchAction: "manipulation" }}>
                      <rs-sbg-wrap
                        data-key="rs-4"
                        data-owidth={1920}
                        data-oheight={1280}
                        style={{ touchAction: "manipulation" }}
                      >
                        {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img loading="lazy" src="//wordpress.zozothemes.com/happysmile/wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="" title="slider-1" width="1920" height="1280" class="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="assets/Images/wp-content/uploads/sites/slider-1.png" data-bg="p:center top;" data-no-retina="">*/}
                        <div
                          style={{
                            backgroundImage:
                              'url("https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/slider-1.webp")'
                          }}
                          className=""
                          data-bgcolor="transparent"
                          data-src-rs-ref="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/slider-1.webp"
                        >
                          <canvas
                            width={1600}
                            height={1032}
                            style={{
                              width: "100%",
                              height: "100%",
                              touchAction: "manipulation",
                              backgroundColor: "transparent",
                              opacity: 1,
                              filter: "none"
                            }}
                          />
                        </div>
                      </rs-sbg-wrap>
                    </rs-sbg-px>
                    {/*
             */}

                    {/*		

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}

                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 1349,
                        top: 390,
                        zIndex: 21,
                        visibility: "visible"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-4-layer-29"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:-130px,-107px,-81px,-49px;y:m;yo:50px,41px,31px,19px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:300px,247px,187px,115px;h:300px,247px,187px,115px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-border="bor:50%,50%,50%,50%;"
                        data-frame_0="rX:-70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:2920;sp:1750;sR:2920;"
                        data-frame_999="o:0;st:w;sR:4330;"
                        style={{
                          zIndex: 21,
                          backgroundColor: "#B18A6A",
                          touchAction: "manipulation",
                          color: "rgb(255, 255, 255)",
                          width: 300,
                          height: 300,
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          overflow: "hidden",
                          borderRadius: "50%",
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "perspective(600px)",
                          visibility: "visible"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      ></rs-layer>
                    </rs-layer-wrap>

                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 147,
                        top: 916,
                        zIndex: 14,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >

                      <rs-layer
                        id="slider-2-slide-4-layer-34"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:147px,132px,100px,61px;y:b;yo:37px,26px,19px,11px;"
                        data-text="w:normal;s:18,14,10,10;l:27,22,16,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:4260;sp:1000;sR:4260;"
                        data-frame_999="o:0;st:w;sR:3740;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 14,
                          fontFamily: "Sora",
                          touchAction: "manipulation",
                          height: "auto",
                          width: "auto",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          textAlign: "left",
                          lineHeight: 27,
                          letterSpacing: 0,
                          fontWeight: 500,
                          fontSize: 18,
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                          visibility: "visible"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      >
                        9Am - 8Pm
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 1499,
                        top: 528,
                        zIndex: 24,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation",
                          transformOrigin: "50% 50%",
                          transform: "translate(0px, 0px)",
                          overflow: "hidden"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-4-layer-36"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:-10px,-8px,-6px,-3px;y:m;yo:40px,33px,25px,15px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:30px,24px,18px,11px;h:3px,2px,1px,1px;"
                          data-vbility="t,f,f,f"
                          data-actions="o:click;a:jumptoslide;slide:rs-10;"
                          data-basealign="slide"
                          data-border="bor:25%,0,0,25%;"
                          data-frame_0="x:100%;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:2000;sp:1000;sR:2000;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:6000;"
                          style={{
                            zIndex: 24,
                            backgroundColor: "rgb(255, 255, 255)",
                            touchAction: "manipulation",
                            color: "rgb(255, 255, 255)",
                            width: 30,
                            height: 3,
                            minHeight: 0,
                            minWidth: 0,
                            maxHeight: "none",
                            maxWidth: "none",
                            overflow: "hidden",
                            borderBottomLeftRadius: "25%",
                            borderTopLeftRadius: "25%",
                            backdropFilter: "none",
                            filter: "none",
                            transformOrigin: "50% 50%",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                            visibility: "visible"
                          }}
                          className="rs-layer rs-waction rs-wclickaction"
                          data-idcheck="true"
                          data-stylerecorder="true"
                          data-initialised="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 1499,
                        top: 578,
                        zIndex: 23,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation",
                          transformOrigin: "50% 50%",
                          transform: "translate(0px, 0px)",
                          overflow: "hidden"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-4-layer-37"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:-10px,28px,21px,12px;y:m;yo:90px,74px,56px,34px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:30px,24px,18px,11px;h:3px,2px,1px,1px;"
                          data-vbility="t,f,f,f"
                          data-actions="o:click;a:jumptoslide;slide:rs-11;"
                          data-basealign="slide"
                          data-border="bor:25%,0,0,25%;"
                          data-frame_0="x:100%;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:2570;sp:1000;sR:2570;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:5430;"
                          style={{
                            zIndex: 23,
                            backgroundColor: "rgb(255, 255, 255)",
                            touchAction: "manipulation",
                            color: "rgb(255, 255, 255)",
                            width: 30,
                            height: 3,
                            minHeight: 0,
                            minWidth: 0,
                            maxHeight: "none",
                            maxWidth: "none",
                            overflow: "hidden",
                            borderBottomLeftRadius: "25%",
                            borderTopLeftRadius: "25%",
                            backdropFilter: "none",
                            filter: "none",
                            transformOrigin: "50% 50%",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                            visibility: "visible"
                          }}
                          className="rs-layer rs-waction rs-wclickaction"
                          data-idcheck="true"
                          data-stylerecorder="true"
                          data-initialised="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 350,
                        top: 869,
                        zIndex: 19,
                        visibility: "visible"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-4-layer-40"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:350px,276px,209px,128px;y:b;yo:71px,54px,41px,25px;"
                        data-text="w:normal;s:25,20,15,13;l:40,33,25,18;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:3360;sp:1750;sR:3360;"
                        data-frame_999="o:0;st:w;sR:3890;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 19,
                          fontFamily: "Sora",
                          touchAction: "manipulation",
                          height: "auto",
                          width: "auto",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          textAlign: "left",
                          lineHeight: 40,
                          letterSpacing: 0,
                          fontWeight: 500,
                          fontSize: 25,
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "perspective(600px)",
                          visibility: "visible"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      >
                        Phone Number
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 350,
                        top: 915,
                        zIndex: 17,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >
                      <a
                        id="slider-2-slide-4-layer-41"
                        className="rs-layer"
                        href="tel:5284567592"
                        target="_self"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:350px,273px,207px,127px;y:b;yo:38px,27px,20px,12px;"
                        data-text="w:normal;s:18,14,10,10;l:27,22,16,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:3820;sp:1000;sR:3820;"
                        data-frame_999="o:0;st:w;sR:4180;"
                        data-frame_hover="c:#38bde0;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 17,
                          fontFamily: "Sora",
                          touchAction: "manipulation",
                          height: "auto",
                          width: "auto",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          textAlign: "left",
                          lineHeight: 27,
                          letterSpacing: 0,
                          fontWeight: 500,
                          fontSize: 18,
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                          visibility: "visible"
                        }}
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      >
                        +(528) 456-7592
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 600,
                        top: 915,
                        zIndex: 16,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >
                      <a
                        id="slider-2-slide-4-layer-42"
                        className="rs-layer"
                        href="mailto:info@karisma.com"
                        target="_self"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:600px,495px,376px,231px;y:b;yo:38px,27px,20px,12px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:3940;sp:1000;sR:3940;"
                        data-frame_999="o:0;st:w;sR:4060;"
                        data-frame_hover="c:#38bde0;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 16,
                          fontFamily: "Sora",
                          touchAction: "manipulation",
                          height: "auto",
                          width: "auto",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          textAlign: "left",
                          lineHeight: 27,
                          letterSpacing: 0,
                          fontWeight: 500,
                          fontSize: 18,
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                          visibility: "visible"
                        }}
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      >
                        info@karisma.com
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 1078,
                        top: 742,
                        zIndex: 31,
                        visibility: "visible"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation",
                          overflow: "visible",
                          opacity: 1,
                          filter: "none",
                          transform: "perspective(600px) rotateY(180deg)"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-4-layer-51"
                          data-type="image"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:260px,214px,162px,99px;y:b;yo:138px,113px,85px,52px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:181px,149px,113px,69px;h:100px,82px,62px,38px;"
                          data-vbility="t,f,f,f"
                          data-basealign="slide"
                          data-btrans="rY:180;"
                          data-frame_0="rX:-70deg;oZ:-50;"
                          data-frame_1="oZ:-50;e:power4.inOut;st:260;sp:1750;sR:260;"
                          data-frame_999="o:0;st:w;sR:6990;"
                          style={{
                            zIndex: 31,
                            touchAction: "manipulation",
                            color: "rgb(255, 255, 255)",
                            width: 181,
                            height: 100,
                            minHeight: 0,
                            minWidth: 0,
                            maxHeight: "none",
                            maxWidth: "none",
                            backdropFilter: "none",
                            filter: "none",
                            transformOrigin: "50% 50%",
                            opacity: 1,
                            transform: "perspective(600px)",
                            visibility: "visible"
                          }}
                          className="rs-layer"
                          data-idcheck="true"
                          data-stylerecorder="true"
                          data-initialised="true"
                        >
                          <img
                            loading="lazy"
                            src="assets/Images/wp-content/uploads/sites/shap-2.png"
                            alt=""
                            className="tp-rs-img rs-lazyload"
                            width={350}
                            height={194}
                            data-lazyload="assets/Images/wp-content/uploads/sites/shap-2.png"
                            data-no-retina=""
                            data-src-rs-ref="assets/Images/wp-content/uploads/sites/shap-2.png"
                            style={{
                              touchAction: "manipulation",
                              position: "relative",
                              height: "100%",
                              width: "100%"
                            }}
                          />
                        </rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: "1230.5px",
                        top: 635,
                        zIndex: 32,
                        visibility: "visible"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-4-layer-52"
                        className="horizontal-teeth rs-layer"
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="x:r,c,c,c;xo:70px,1px,0,1px;y:t,m,m,m;yo:635px,-241px,-183px,-120px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:79px,65px,49px,51px;h:96px,79px,60px,62px;"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:560;sp:1750;sR:560;"
                        data-frame_999="o:0;st:w;sR:6690;"
                        style={{
                          zIndex: 32,
                          touchAction: "manipulation",
                          color: "rgb(255, 255, 255)",
                          width: 79,
                          height: 96,
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "perspective(600px)",
                          visibility: "visible"
                        }}
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      >
                        <img
                          loading="lazy"
                          src="assets/Images/wp-content/uploads/sites/shap-3.png"
                          alt=""
                          className="tp-rs-img rs-lazyload"
                          width={269}
                          height={328}
                          data-lazyload="assets/Images/wp-content/uploads/sites/shap-3.png"
                          data-no-retina=""
                          data-src-rs-ref="assets/Images/wp-content/uploads/sites/shap-3.png"
                          style={{
                            touchAction: "manipulation",
                            position: "relative",
                            height: "100%",
                            width: "100%"
                          }}
                        />
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 0,
                        top: 840,
                        zIndex: 7,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-4-layer-54"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="y:b;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:300px,247px,187px,115px;h:140px,115px,87px,53px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:700;sp:1000;sR:700;"
                        data-frame_999="o:0;st:w;sR:7300;"
                        style={{
                          zIndex: 7,
                          backgroundColor: "rgb(56, 189, 224)",
                          touchAction: "manipulation",
                          color: "rgb(255, 255, 255)",
                          width: 300,
                          height: 140,
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                          visibility: "visible"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 300,
                        top: 840,
                        zIndex: 8,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-4-layer-55"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:300px,247px,187px,115px;y:b;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:600px,495px,376px,231px;h:140px,115px,87px,53px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:680;sp:1000;sR:680;"
                        data-frame_999="o:0;st:w;sR:7320;"
                        style={{
                          zIndex: 8,
                          backgroundColor: "rgba(0, 0, 0, 0.25)",
                          touchAction: "manipulation",
                          color: "rgb(255, 255, 255)",
                          width: 600,
                          height: 140,
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                          visibility: "visible"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 600,
                        top: 869,
                        zIndex: 18,
                        visibility: "visible"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-4-layer-57"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:600px,495px,376px,231px;y:b;yo:71px,54px,41px,25px;"
                        data-text="w:normal;s:25,20,15,9;l:40,33,25,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:3520;sp:1750;sR:3520;"
                        data-frame_999="o:0;st:w;sR:3730;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 18,
                          fontFamily: "Sora",
                          touchAction: "manipulation",
                          height: "auto",
                          width: "auto",
                          color: "rgb(255, 255, 255)",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          textAlign: "left",
                          lineHeight: 40,
                          letterSpacing: 0,
                          fontWeight: 500,
                          fontSize: 25,
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "perspective(600px)",
                          visibility: "visible"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      >
                        Email Address
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 1254,
                        top: 840,
                        zIndex: 33,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation",
                          transformOrigin: "50% 50%",
                          transform: "translate(0px, 0px)",
                          overflow: "hidden"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-4-layer-58"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;y:b;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:265px,218px,165px,101px;h:140px,115px,87px,53px;"
                          data-vbility="t,f,f,f"
                          data-basealign="slide"
                          data-frame_0="x:-175%;o:1;"
                          data-frame_0_mask="u:t;x:100%;"
                          data-frame_1="e:power3.out;st:680;sp:1000;sR:680;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:7320;"
                          style={{
                            zIndex: 33,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            touchAction: "manipulation",
                            color: "rgb(255, 255, 255)",
                            width: 265,
                            height: 140,
                            minHeight: 0,
                            minWidth: 0,
                            maxHeight: "none",
                            maxWidth: "none",
                            backdropFilter: "none",
                            filter: "none",
                            transformOrigin: "50% 50%",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                            visibility: "visible"
                          }}
                          className="rs-layer"
                          data-idcheck="true"
                          data-stylerecorder="true"
                          data-initialised="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        left: 570,
                        top: 883,
                        zIndex: 34,
                        visibility: "visible"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-4-layer-59"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:570px,470px,357px,220px;y:b;yo:37px,26px,19px,11px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:1px;h:60px,49px,37px,22px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-border="bor:5px,5px,5px,5px;"
                        data-frame_0="y:200%;sX:2;sY:2;o:1;rX:-20deg;rY:-20deg;"
                        data-frame_1="e:power3.out;st:1070;sp:1000;sR:1070;"
                        data-frame_999="o:0;st:w;sR:6930;"
                        style={{
                          zIndex: 34,
                          backgroundColor: "rgba(255, 255, 255, 0.5)",
                          touchAction: "manipulation",
                          color: "rgb(255, 255, 255)",
                          width: 1,
                          height: 60,
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          overflow: "hidden",
                          borderRadius: 5,
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "perspective(600px)",
                          visibility: "visible"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap"
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "auto",
                        touchAction: "manipulation",
                        height: "100%",
                        minHeight: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        zIndex: 6,
                        visibility: "visible",
                        perspective: 601
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-4-layer-60"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="x:c;y:m;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:100%;h:100%;"
                        data-basealign="slide"
                        data-frame_999="o:0;st:w;sR:8700;"
                        style={{
                          zIndex: 6,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          touchAction: "manipulation",
                          position: "absolute",
                          color: "rgb(255, 255, 255)",
                          width: "100%",
                          height: "100%",
                          minHeight: 0,
                          minWidth: 0,
                          maxHeight: "none",
                          maxWidth: "none",
                          backdropFilter: "none",
                          filter: "none",
                          transformOrigin: "50% 50%",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                          visibility: "visible"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                        data-stylerecorder="true"
                        data-initialised="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*
             */}{" "}
                  </div>
                  <rs-slide
                    style={{
                      position: "absolute",
                      display: "none",
                      overflow: "hidden",
                      height: "100%",
                      width: "100%",
                      touchAction: "manipulation"
                    }}
                    data-key="rs-10"
                    data-title="Web Show"
                    data-anim="f:center;"
                    data-in="o:0;sx:1.1;sy:1.1;m:true;row:30;col:30;"
                    data-out="a:false;"
                    data-originalindex={2}
                    data-origindex={1}
                    data-description=""
                    data-sba=""
                    data-scroll-based="false"
                    data-owidth={1920}
                    data-oheight={1280}
                  >
                    <rs-sbg-px style={{ touchAction: "manipulation" }}>
                      <rs-sbg-wrap
                        data-key="rs-10"
                        data-owidth={1920}
                        data-oheight={1280}
                        style={{ touchAction: "manipulation" }}
                      >
                        {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img loading="lazy" src="//wordpress.zozothemes.com/happysmile/wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="" title="slider-2" width="1920" height="1280" class="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="assets/Images/wp-content/uploads/sites/slider-2.png" data-bg="p:center top;" data-no-retina="">*/}
                        <rs-sbg
                          data-lazyload="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/slider-2.webp"
                          className=""
                          data-bgcolor="transparent"
                          style={{
                            width: "100%",
                            height: "100%",
                            touchAction: "manipulation"
                          }}
                          data-src-rs-ref="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/slider-2.webp"
                        >
                          <canvas
                            style={{
                              width: "100%",
                              height: "100%",
                              touchAction: "manipulation"
                            }}
                          />
                        </rs-sbg>
                      </rs-sbg-wrap>
                    </rs-sbg-px>
                    {/*
             */}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-0"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="x:l,r,r,r;xo:-1128px,36px,36px,30px;y:t,b,b,b;yo:50px,53px,56px,19px;"
                        data-text="w:normal;s:20,16,15,15;l:25,20,22,24;ls:0,1px,1px,1px;fw:400,500,500,500;"
                        data-actions="o:click;a:jumptoslide;slide:next;"
                        data-frame_999="o:0;st:w;sR:8700;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 12,
                          fontFamily: "DM Sans",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer rs-waction rs-wclickaction"
                        data-idcheck="true"
                      >
                        NEXT
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-1"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="xo:2040px,36px,36px,30px;y:t,b,b,b;yo:94px,53px,56px,19px;"
                        data-text="w:normal;s:20,16,15,15;l:25,20,22,24;ls:0,1px,1px,1px;fw:400,500,500,500;"
                        data-actions="o:click;a:jumptoslide;slide:previous;"
                        data-frame_999="o:0;st:w;sR:8700;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 11,
                          fontFamily: "DM Sans",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer rs-waction rs-wclickaction"
                        data-idcheck="true"
                      >
                        PREV
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <h1
                        id="slider-2-slide-10-layer-2"
                        className="rs-layer Concept-Title"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="x:l,c,c,c;xo:34px,0,0,-2px;y:m;yo:15px,-2px,-8px,22px;"
                        data-text="w:normal;s:80,48,47,38;l:95,55,56,48;fw:600;a:left,center,center,center;"
                        data-dim="w:991px,544px,618px,445px;h:205px,136px,120px,110px;"
                        data-padding="b:10,9,11,11;"
                        data-frame_0="x:0,0px,0px,0px;y:0,0px,0px,0px;o:1;"
                        data-frame_0_chars="d:5;x:0,0px,0px,0px;y:0,0px,0px,0px;o:0;rX:-90deg;oZ:-50;"
                        data-frame_1="x:0,0px,0px,0px;y:0,0px,0px,0px;st:960;sp:1750;sR:960;"
                        data-frame_1_chars="e:power4.inOut;d:10;x:0,0px,0px,0px;y:0,0px,0px,0px;oZ:-50;"
                        data-frame_999="x:left;e:power3.in;st:w;sp:1000;sR:2790;"
                        data-frame_999_reverse="x:true;"
                        style={{
                          zIndex: 9,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        Innovative Therapy &amp; Qualified Dentists
                      </h1>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-10-layer-12"
                          className="slide rs-layer"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,c,c,c;xo:38px,0,0,0;yo:350px,257px,153px,203px;"
                          data-text="w:normal;s:15,16,15,15;l:28,30,22,31;ls:1px;a:left,center,center,center;"
                          data-dim="w:221px,282px,281px,auto;h:auto,auto,23px,auto;minh:0px,none,none,none;"
                          data-frame_1="e:power4.inOut;st:1620;sp:1200;sR:1620;"
                          data-frame_1_sfx="se:blocktoright;"
                          data-frame_999="o:0;st:w;sR:6180;"
                          style={{
                            zIndex: 10,
                            fontFamily: "Sora",
                            touchAction: "manipulation"
                          }}
                          data-idcheck="true"
                        >
                          Welcome to Karisma
                        </rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-10-layer-13"
                        className="rs-layer btn-slider rev-btn"
                        href="https://wordpress.zozothemes.com/happysmile/contact-us/"
                        target="_self"
                        data-type="button"
                        data-color="#38bde0"
                        data-rsp_ch="on"
                        data-xy="x:l,c,c,c;xo:45px,0,0,0;y:t,t,t,m;yo:650px,483px,357px,100px;"
                        data-text="w:normal;s:16,13,10,11;l:28,23,20,24;fw:600;a:left,center,center,center;"
                        data-dim="minh:0px,none,none,none;"
                        data-padding="t:15,12,9,10;r:30,25,20,22;b:15,12,9,10;l:30,25,20,22;"
                        data-border="bor:10px,10px,0px,10px;"
                        data-frame_0="x:-50,-41,-31,-22px;y:0,0,0,0px;"
                        data-frame_1="x:0,0,0,0px;y:0,0,0,0px;st:4420;sp:1000;sR:4420;"
                        data-frame_999="o:0;st:w;sR:3580;"
                        data-frame_hover="c:#fff;bgc:#38bde0;bor:10px,10px,0px,10px;sp:100;e:power1.inOut;bri:120%;"
                        style={{
                          zIndex: 13,
                          backgroundColor: "rgb(255, 255, 255)",
                          fontFamily: "Sora",
                          textTransform: "uppercase",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        <span
                          className="btn-text"
                          style={{ touchAction: "manipulation" }}
                        >
                          Contact Us{" "}
                          <i
                            className=" bi-arrow-up-right"
                            style={{ touchAction: "manipulation" }}
                          />{" "}
                        </span>
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-10-layer-16"
                          data-type="text"
                          data-color="#fff"
                          data-rsp_ch="on"
                          data-xy="xo:100px,82px,62px,38px;yo:406px,335px,254px,156px;"
                          data-text="w:normal;s:18,14,10,6;l:28,23,17,10;fw:500;a:center;"
                          data-dim="minh:0px,none,none,none;"
                          data-vbility="t,f,f,f"
                          data-basealign="slide"
                          data-btrans="rZ:90;"
                          data-frame_0="o:1;"
                          data-frame_0_chars="d:5;x:-105%;o:0;rZ:-90deg;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:840;sp:1200;sR:840;"
                          data-frame_1_chars="e:power4.inOut;dir:backward;d:10;rZ:0deg;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:6360;"
                          style={{
                            zIndex: 26,
                            fontFamily: "Sora",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer"
                          data-idcheck="true"
                        >
                          Social
                        </rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-19"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:125px,103px,78px,48px;y:m;yo:39px,32px,24px,14px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:3px,2px,1px,1px;h:120px,99px,75px,46px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-border="bor:5px,5px,5px,5px;"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:700;sp:1750;sR:700;"
                        data-frame_999="o:0;st:w;sR:6550;"
                        style={{
                          zIndex: 27,
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-10-layer-24"
                        className="rs-layer"
                        href="#"
                        target="_self"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="xo:118px,91px,69px,42px;yo:612px,489px,371px,228px;"
                        data-text="w:normal;s:15,12,9,5;l:22,18,13,8;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="y:bottom;sX:2;sY:2;rZ:70deg;"
                        data-frame_1="st:430;sp:1000;sR:430;"
                        data-frame_999="o:0;st:w;sR:7570;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 30,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        Fb
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-27"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:35px,39px,29px,17px;y:b;yo:66px,54px,41px,25px;"
                        data-text="w:normal;s:25,20,15,9;l:40,33,25,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:3220;sp:1750;sR:3220;"
                        data-frame_999="o:0;st:w;sR:4030;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 20,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Working Hours
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-10-layer-28"
                        className="rs-layer"
                        href=""
                        target="_self"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="xo:118px,97px,73px,45px;y:m;yo:167px,137px,104px,64px;"
                        data-text="w:normal;s:15,12,9,5;l:22,18,13,8;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="y:bottom;sX:2;sY:2;rZ:70deg;"
                        data-frame_1="st:560;sp:1000;sR:560;"
                        data-frame_999="o:0;st:w;sR:7440;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 29,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        In
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-29"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:-130px,-107px,-81px,-49px;y:m;yo:50px,41px,31px,19px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:300px,247px,187px,115px;h:300px,247px,187px,115px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-border="bor:50%,50%,50%,50%;"
                        data-frame_0="rX:-70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:2920;sp:1750;sR:2920;"
                        data-frame_999="o:0;st:w;sR:4330;"
                        style={{
                          zIndex: 21,
                          backgroundColor: "rgb(56, 189, 224)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-30"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:57px,47px,35px,21px;y:m;yo:40px,33px,25px,15px;"
                        data-text="w:nowrap;s:27,22,16,9;l:40,33,25,15;fw:600;"
                        data-dim="w:36px,29px,22px,13px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:-70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:2660;sp:1750;sR:2660;"
                        data-frame_999="o:0;st:w;sR:4590;"
                        style={{
                          zIndex: 22,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        0{"{"}
                        {"{"}current_slide_index{"}"}
                        {"}"}
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-10-layer-31"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:-10px,-8px,-6px,-3px;y:m;yo:-5px,-4px,-3px,-1px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:30px,24px,18px,11px;h:3px,2px,1px,1px;"
                          data-vbility="t,f,f,f"
                          data-actions="o:click;a:jumptoslide;slide:rs-4;"
                          data-basealign="slide"
                          data-border="bor:25%,0,0,25%;"
                          data-frame_0="x:100%;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:1680;sp:1000;sR:1680;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:6320;"
                          style={{
                            zIndex: 25,
                            backgroundColor: "rgb(255, 255, 255)",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer rs-waction rs-wclickaction"
                          data-idcheck="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-32"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="xo:116px,95px,72px,44px;y:m;yo:207px,170px,129px,79px;"
                        data-text="w:normal;s:15,12,9,5;l:22,18,13,8;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="y:bottom;sX:2;sY:2;rZ:70deg;"
                        data-frame_1="st:600;sp:1000;sR:600;"
                        data-frame_999="o:0;st:w;sR:7400;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 28,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Tw
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-33"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:39px,43px,32px,19px;y:b;yo:33px,27px,20px,12px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:4090;sp:1000;sR:4090;"
                        data-frame_999="o:0;st:w;sR:3910;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 15,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Mon - Sun :
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-34"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:147px,132px,100px,61px;y:b;yo:32px,26px,19px,11px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:4260;sp:1000;sR:4260;"
                        data-frame_999="o:0;st:w;sR:3740;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 14,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        9Am - 8Pm
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-10-layer-36"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;y:m;yo:40px,33px,25px,15px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:40px,33px,25px,15px;h:3px,2px,1px,1px;"
                          data-vbility="t,f,f,f"
                          data-actions="o:click;a:jumptoslide;slide:rs-10;"
                          data-basealign="slide"
                          data-border="bor:25%,0,0,25%;"
                          data-frame_0="x:100%;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:2000;sp:1000;sR:2000;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:6000;"
                          style={{
                            zIndex: 24,
                            backgroundColor: "rgb(255, 255, 255)",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer rs-waction rs-wclickaction"
                          data-idcheck="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-10-layer-37"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:-10px,28px,21px,12px;y:m;yo:90px,74px,56px,34px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:30px,24px,18px,11px;h:3px,2px,1px,1px;"
                          data-vbility="t,f,f,f"
                          data-actions="o:click;a:jumptoslide;slide:rs-11;"
                          data-basealign="slide"
                          data-border="bor:25%,0,0,25%;"
                          data-frame_0="x:100%;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:2570;sp:1000;sR:2570;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:5430;"
                          style={{
                            zIndex: 23,
                            backgroundColor: "rgb(255, 255, 255)",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer rs-waction rs-wclickaction"
                          data-idcheck="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-40"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:350px,276px,209px,128px;y:b;yo:66px,54px,41px,25px;"
                        data-text="w:normal;s:25,20,15,9;l:40,33,25,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:3360;sp:1750;sR:3360;"
                        data-frame_999="o:0;st:w;sR:3890;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 19,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Phone Number
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-10-layer-41"
                        className="rs-layer"
                        href="tel:5284567592"
                        target="_self"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:350px,273px,207px,127px;y:b;yo:33px,27px,20px,12px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:3820;sp:1000;sR:3820;"
                        data-frame_999="o:0;st:w;sR:4180;"
                        data-frame_hover="c:#38bde0;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 17,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        (528) 456-7592
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-10-layer-42"
                        className="rs-layer"
                        href="mailto:info@karisma.com"
                        target="_self"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:600px,495px,376px,231px;y:b;yo:33px,27px,20px,12px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:3940;sp:1000;sR:3940;"
                        data-frame_999="o:0;st:w;sR:4060;"
                        data-frame_hover="c:#38bde0;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 16,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        info@karisma.com
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-10-layer-51"
                          data-type="image"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:260px,214px,162px,99px;y:b;yo:138px,113px,85px,52px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:181px,149px,113px,69px;h:100px,82px,62px,38px;"
                          data-vbility="t,f,f,f"
                          data-basealign="slide"
                          data-btrans="rY:180;"
                          data-frame_0="rX:-70deg;oZ:-50;"
                          data-frame_1="oZ:-50;e:power4.inOut;st:260;sp:1750;sR:260;"
                          data-frame_999="o:0;st:w;sR:6990;"
                          style={{ zIndex: 31, touchAction: "manipulation" }}
                          className="rs-layer"
                          data-idcheck="true"
                        >
                          <img
                            loading="lazy"
                            src="assets/Images/wp-content/uploads/sites/shap-2.png"
                            alt=""
                            className="tp-rs-img rs-lazyload"
                            width={350}
                            height={194}
                            data-lazyload="assets/Images/wp-content/uploads/sites/shap-2.png"
                          />
                        </rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-52"
                        className="horizontal-teeth rs-layer"
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="x:r,c,c,c;xo:70px,0,0,1px;y:t,m,m,m;yo:635px,-223px,-169px,-120px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:79px,65px,49px,51px;h:96px,79px,60px,62px;"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:560;sp:1750;sR:560;"
                        data-frame_999="o:0;st:w;sR:6690;"
                        style={{ zIndex: 32, touchAction: "manipulation" }}
                        data-idcheck="true"
                      >
                        <img
                          loading="lazy"
                          src="assets/Images/wp-content/uploads/sites/shap-3.png"
                          alt=""
                          className="tp-rs-img rs-lazyload"
                          width={269}
                          height={328}
                          data-lazyload="assets/Images/wp-content/uploads/sites/shap-3.png"
                          data-no-retina=""
                          style={{ touchAction: "manipulation" }}
                          data-src-rs-ref="assets/Images/wp-content/uploads/sites/shap-3.png"
                        />
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-54"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="y:b;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:300px,247px,187px,115px;h:140px,115px,87px,53px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:700;sp:1000;sR:700;"
                        data-frame_999="o:0;st:w;sR:7300;"
                        style={{
                          zIndex: 7,
                          backgroundColor: "rgb(56, 189, 224)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-55"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:300px,247px,187px,115px;y:b;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:600px,495px,376px,231px;h:140px,115px,87px,53px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:680;sp:1000;sR:680;"
                        data-frame_999="o:0;st:w;sR:7320;"
                        style={{
                          zIndex: 8,
                          backgroundColor: "rgba(0, 0, 0, 0.25)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-57"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:600px,495px,376px,231px;y:b;yo:66px,54px,41px,25px;"
                        data-text="w:normal;s:25,20,15,9;l:40,33,25,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:3520;sp:1750;sR:3520;"
                        data-frame_999="o:0;st:w;sR:3730;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 18,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Email Address
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-10-layer-58"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;y:b;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:265px,218px,165px,101px;h:140px,115px,87px,53px;"
                          data-vbility="t,f,f,f"
                          data-basealign="slide"
                          data-frame_0="x:-175%;o:1;"
                          data-frame_0_mask="u:t;x:100%;"
                          data-frame_1="e:power3.out;st:680;sp:1000;sR:680;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:7320;"
                          style={{
                            zIndex: 33,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer"
                          data-idcheck="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-59"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:570px,470px,357px,220px;y:b;yo:32px,26px,19px,11px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:1px;h:60px,49px,37px,22px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-border="bor:5px,5px,5px,5px;"
                        data-frame_0="sX:0.9;sY:0.9;"
                        data-frame_1="e:power2.inOut;st:630;sp:1000;sR:630;"
                        data-frame_999="o:0;st:w;sR:7370;"
                        style={{
                          zIndex: 34,
                          backgroundColor: "rgba(255, 255, 255, 0.5)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-10-layer-60"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="x:c;y:m;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:100%;h:100%;"
                        data-basealign="slide"
                        data-frame_999="o:0;st:w;sR:8700;"
                        style={{
                          zIndex: 6,
                          backgroundColor: "rgba(0, 0, 0, 0.57)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*
             */}{" "}
                  </rs-slide>
                  <rs-slide
                    style={{
                      position: "absolute",
                      display: "none",
                      overflow: "hidden",
                      height: "100%",
                      width: "100%",
                      touchAction: "manipulation"
                    }}
                    data-key="rs-11"
                    data-title="Web Show"
                    data-anim="f:center;"
                    data-in="o:0;sx:1.1;sy:1.1;m:true;row:30;col:30;"
                    data-out="a:false;"
                    data-originalindex={3}
                    data-origindex={2}
                    data-description=""
                    data-sba=""
                    data-scroll-based="false"
                    data-owidth={1920}
                    data-oheight={1280}
                  >
                    <rs-sbg-px style={{ touchAction: "manipulation" }}>
                      <rs-sbg-wrap
                        data-key="rs-11"
                        data-owidth={1920}
                        data-oheight={1280}
                        style={{ touchAction: "manipulation" }}
                      >
                        {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img loading="lazy" src="//wordpress.zozothemes.com/happysmile/wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="" title="slider-rev-4" width="1920" height="1280" class="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="//wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/slider-rev-4.webp" data-bg="p:center top;" data-no-retina="">*/}
                        <rs-sbg
                          data-lazyload="assets/Images/wp-content/uploads/sites/slider-rev-4.png"
                          className=""
                          data-bgcolor="transparent"
                          style={{
                            width: "100%",
                            height: "100%",
                            touchAction: "manipulation"
                          }}
                          data-src-rs-ref="assets/Images/wp-content/uploads/sites/slider-rev-4.png"
                        >
                          <canvas
                            style={{
                              width: "100%",
                              height: "100%",
                              touchAction: "manipulation"
                            }}
                          />
                        </rs-sbg>
                      </rs-sbg-wrap>
                    </rs-sbg-px>
                    {/*
             */}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-0"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="x:l,r,r,r;xo:-1128px,36px,36px,30px;y:t,b,b,b;yo:50px,53px,56px,19px;"
                        data-text="w:normal;s:20,16,15,15;l:25,20,22,24;ls:0,1px,1px,1px;fw:400,500,500,500;"
                        data-actions="o:click;a:jumptoslide;slide:next;"
                        data-frame_999="o:0;st:w;sR:8700;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 12,
                          fontFamily: "DM Sans",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer rs-waction rs-wclickaction"
                        data-idcheck="true"
                      >
                        NEXT
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-1"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="xo:2040px,36px,36px,30px;y:t,b,b,b;yo:94px,53px,56px,19px;"
                        data-text="w:normal;s:20,16,15,15;l:25,20,22,24;ls:0,1px,1px,1px;fw:400,500,500,500;"
                        data-actions="o:click;a:jumptoslide;slide:previous;"
                        data-frame_999="o:0;st:w;sR:8700;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 11,
                          fontFamily: "DM Sans",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer rs-waction rs-wclickaction"
                        data-idcheck="true"
                      >
                        PREV
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <h1
                        id="slider-2-slide-11-layer-2"
                        className="rs-layer Concept-Title"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="x:l,c,c,c;xo:34px,0,0,-2px;y:m;yo:15px,-15px,0,22px;"
                        data-text="w:normal;s:80,58,47,38;l:95,66,56,48;fw:600;a:left,center,center,center;"
                        data-dim="w:991px,501px,618px,445px;h:205px,208px,120px,110px;"
                        data-padding="b:10,10,11,11;"
                        data-frame_0="o:1;"
                        data-frame_0_chars="d:5;o:0;rX:-90deg;oZ:-50;"
                        data-frame_1="st:960;sp:1750;sR:960;"
                        data-frame_1_chars="e:power4.inOut;d:10;oZ:-50;"
                        data-frame_999="x:left;e:power3.in;st:w;sp:1000;sR:2790;"
                        data-frame_999_reverse="x:true;"
                        style={{
                          zIndex: 9,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        Keep Your Teeth and Gums Healthy
                      </h1>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-11-layer-12"
                          className="slide rs-layer"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,c,c,c;xo:38px,0,0,0;yo:350px,209px,153px,203px;"
                          data-text="w:normal;s:15,16,15,15;l:28,30,22,31;ls:1px;a:left,center,center,center;"
                          data-dim="w:221px,282px,281px,auto;h:auto,auto,23px,auto;minh:0px,none,none,none;"
                          data-frame_1="e:power4.inOut;st:1620;sp:1200;sR:1620;"
                          data-frame_1_sfx="se:blocktoright;"
                          data-frame_999="o:0;st:w;sR:6180;"
                          style={{
                            zIndex: 10,
                            fontFamily: "Sora",
                            touchAction: "manipulation"
                          }}
                          data-idcheck="true"
                        >
                          Welcome to Karisma
                        </rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-11-layer-13"
                        className="rs-layer btn-slider rev-btn"
                        href="https://wordpress.zozothemes.com/happysmile/contact-us/"
                        target="_self"
                        data-type="button"
                        data-color="#38bde0"
                        data-rsp_ch="on"
                        data-xy="x:l,c,c,c;xo:45px,0,0,0;y:t,t,t,m;yo:650px,506px,357px,100px;"
                        data-text="w:normal;s:16,13,10,11;l:28,23,20,24;fw:600;a:left,center,center,center;"
                        data-dim="minh:0px,none,none,none;"
                        data-padding="t:15,12,9,9;r:30,25,20,19;b:15,12,9,9;l:30,25,20,19;"
                        data-border="bor:10px,10px,0px,10px;"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:4420;sp:1000;sR:4420;"
                        data-frame_999="o:0;st:w;sR:3580;"
                        data-frame_hover="c:#fff;bgc:#38bde0;bor:10px,10px,0px,10px;sp:100;e:power1.inOut;bri:120%;"
                        style={{
                          zIndex: 13,
                          backgroundColor: "rgb(255, 255, 255)",
                          fontFamily: "Sora",
                          textTransform: "uppercase",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        <span
                          className="btn-text"
                          style={{ touchAction: "manipulation" }}
                        >
                          Contact Us{" "}
                          <i
                            className=" bi-arrow-up-right"
                            style={{ touchAction: "manipulation" }}
                          />{" "}
                        </span>
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-11-layer-16"
                          data-type="text"
                          data-color="#fff"
                          data-rsp_ch="on"
                          data-xy="xo:100px,82px,62px,38px;yo:406px,335px,254px,156px;"
                          data-text="w:normal;s:18,14,10,6;l:28,23,17,10;fw:500;a:center;"
                          data-dim="minh:0px,none,none,none;"
                          data-vbility="t,f,f,f"
                          data-basealign="slide"
                          data-btrans="rZ:90;"
                          data-frame_0="o:1;"
                          data-frame_0_chars="d:5;x:-105%;o:0;rZ:-90deg;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:840;sp:1200;sR:840;"
                          data-frame_1_chars="e:power4.inOut;dir:backward;d:10;rZ:0deg;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:6360;"
                          style={{
                            zIndex: 26,
                            fontFamily: "Sora",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer"
                          data-idcheck="true"
                        >
                          Social
                        </rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-19"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:125px,103px,78px,48px;y:m;yo:39px,32px,24px,14px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:3px,2px,1px,1px;h:120px,99px,75px,46px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-border="bor:5px,5px,5px,5px;"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:700;sp:1750;sR:700;"
                        data-frame_999="o:0;st:w;sR:6550;"
                        style={{
                          zIndex: 27,
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-11-layer-24"
                        className="rs-layer"
                        href="#"
                        target="_self"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="xo:118px,91px,69px,42px;yo:612px,489px,371px,228px;"
                        data-text="w:normal;s:15,12,9,5;l:22,18,13,8;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="y:bottom;sX:2;sY:2;rZ:70deg;"
                        data-frame_1="st:430;sp:1000;sR:430;"
                        data-frame_999="o:0;st:w;sR:7570;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 30,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        Fb
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-27"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:35px,39px,29px,17px;y:b;yo:66px,54px,41px,25px;"
                        data-text="w:normal;s:25,20,15,9;l:40,33,25,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:3220;sp:1750;sR:3220;"
                        data-frame_999="o:0;st:w;sR:4030;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 20,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Working Hours
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-11-layer-28"
                        className="rs-layer"
                        href=""
                        target="_self"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="xo:118px,97px,73px,45px;y:m;yo:167px,137px,104px,64px;"
                        data-text="w:normal;s:15,12,9,5;l:22,18,13,8;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="y:bottom;sX:2;sY:2;rZ:70deg;"
                        data-frame_1="st:560;sp:1000;sR:560;"
                        data-frame_999="o:0;st:w;sR:7440;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 29,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        In
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-29"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:-130px,-107px,-81px,-49px;y:m;yo:50px,41px,31px,19px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:300px,247px,187px,115px;h:300px,247px,187px,115px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-border="bor:50%,50%,50%,50%;"
                        data-frame_0="rX:-70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:2920;sp:1750;sR:2920;"
                        data-frame_999="o:0;st:w;sR:4330;"
                        style={{
                          zIndex: 21,
                          backgroundColor: "rgb(56, 189, 224)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-30"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:57px,47px,35px,21px;y:m;yo:90px,74px,56px,34px;"
                        data-text="w:nowrap;s:27,22,16,9;l:40,33,25,15;fw:600;"
                        data-dim="w:36px,29px,22px,13px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:-70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:2660;sp:1750;sR:2660;"
                        data-frame_999="o:0;st:w;sR:4590;"
                        style={{
                          zIndex: 22,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        0{"{"}
                        {"{"}current_slide_index{"}"}
                        {"}"}
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-11-layer-31"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:-10px,-8px,-6px,-3px;y:m;yo:-5px,-4px,-3px,-1px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:30px,24px,18px,11px;h:3px,2px,1px,1px;"
                          data-vbility="t,f,f,f"
                          data-actions="o:click;a:jumptoslide;slide:rs-4;"
                          data-basealign="slide"
                          data-border="bor:25%,0,0,25%;"
                          data-frame_0="x:100%;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:1680;sp:1000;sR:1680;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:6320;"
                          style={{
                            zIndex: 25,
                            backgroundColor: "rgb(255, 255, 255)",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer rs-waction rs-wclickaction"
                          data-idcheck="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-32"
                        data-type="text"
                        data-rsp_ch="on"
                        data-xy="xo:116px,95px,72px,44px;y:m;yo:207px,170px,129px,79px;"
                        data-text="w:normal;s:15,12,9,5;l:22,18,13,8;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="y:bottom;sX:2;sY:2;rZ:70deg;"
                        data-frame_1="st:600;sp:1000;sR:600;"
                        data-frame_999="o:0;st:w;sR:7400;"
                        data-frame_hover="c:#38bde0;"
                        style={{
                          zIndex: 28,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Tw
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-33"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:39px,43px,32px,19px;y:b;yo:33px,27px,20px,12px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:4090;sp:1000;sR:4090;"
                        data-frame_999="o:0;st:w;sR:3910;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 15,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Mon - Sun :
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-34"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:147px,132px,100px,61px;y:b;yo:32px,26px,19px,11px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:4260;sp:1000;sR:4260;"
                        data-frame_999="o:0;st:w;sR:3740;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 14,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        9Am - 8Pm
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-11-layer-36"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:-10px,-8px,-6px,-3px;y:m;yo:40px,33px,25px,15px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:30px,24px,18px,11px;h:3px,2px,1px,1px;"
                          data-vbility="t,f,f,f"
                          data-actions="o:click;a:jumptoslide;slide:rs-10;"
                          data-basealign="slide"
                          data-border="bor:25%,0,0,25%;"
                          data-frame_0="x:100%;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:2000;sp:1000;sR:2000;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:6000;"
                          style={{
                            zIndex: 24,
                            backgroundColor: "rgb(255, 255, 255)",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer rs-waction rs-wclickaction"
                          data-idcheck="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-11-layer-37"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:0,28px,21px,12px;y:m;yo:90px,74px,56px,34px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:40px,33px,25px,15px;h:3px,2px,1px,1px;"
                          data-vbility="t,f,f,f"
                          data-actions="o:click;a:jumptoslide;slide:rs-11;"
                          data-basealign="slide"
                          data-border="bor:25%,0,0,25%;"
                          data-frame_0="x:100%;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:2570;sp:1000;sR:2570;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:5430;"
                          style={{
                            zIndex: 23,
                            backgroundColor: "rgb(255, 255, 255)",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer rs-waction rs-wclickaction"
                          data-idcheck="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-40"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:350px,276px,209px,128px;y:b;yo:66px,54px,41px,25px;"
                        data-text="w:normal;s:25,20,15,9;l:40,33,25,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:3360;sp:1750;sR:3360;"
                        data-frame_999="o:0;st:w;sR:3890;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 19,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Phone Number
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-11-layer-41"
                        className="rs-layer"
                        href="tel:5284567592"
                        target="_self"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:350px,273px,207px,127px;y:b;yo:33px,27px,20px,12px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:3820;sp:1000;sR:3820;"
                        data-frame_999="o:0;st:w;sR:4180;"
                        data-frame_hover="c:#38bde0;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 17,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        (971) 542455385
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <a
                        id="slider-2-slide-11-layer-42"
                        className="rs-layer"
                        href="mailto:info@karisma.com"
                        target="_self"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:600px,495px,376px,231px;y:b;yo:33px,27px,20px,12px;"
                        data-text="w:normal;s:18,14,10,6;l:27,22,16,9;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:3940;sp:1000;sR:3940;"
                        data-frame_999="o:0;st:w;sR:4060;"
                        data-frame_hover="c:#38bde0;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 16,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        data-idcheck="true"
                      >
                        info@karisma.com
                      </a>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-11-layer-51"
                          data-type="image"
                          data-rsp_ch="on"
                          data-xy="x:r;xo:260px,214px,162px,99px;y:b;yo:138px,113px,85px,52px;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:181px,149px,113px,69px;h:100px,82px,62px,38px;"
                          data-vbility="t,f,f,f"
                          data-basealign="slide"
                          data-btrans="rY:180;"
                          data-frame_0="rX:-70deg;oZ:-50;"
                          data-frame_1="oZ:-50;e:power4.inOut;st:260;sp:1750;sR:260;"
                          data-frame_999="o:0;st:w;sR:6990;"
                          style={{ zIndex: 31, touchAction: "manipulation" }}
                          className="rs-layer"
                          data-idcheck="true"
                        >
                          <img
                            loading="lazy"
                            src="assets/Images/wp-content/uploads/sites/shap-2.png"
                            alt=""
                            className="tp-rs-img rs-lazyload"
                            width={350}
                            height={194}
                            data-lazyload="assets/Images/wp-content/uploads/sites/shap-2.png"
                          />
                        </rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-52"
                        className="horizontal-teeth rs-layer"
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="x:r,c,c,c;xo:70px,1px,0,1px;y:t,m,m,m;yo:635px,-241px,-183px,-120px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:79px,65px,49px,51px;h:96px,79px,60px,62px;"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:560;sp:1750;sR:560;"
                        data-frame_999="o:0;st:w;sR:6690;"
                        style={{ zIndex: 32, touchAction: "manipulation" }}
                        data-idcheck="true"
                      >
                        <img
                          loading="lazy"
                          src="assets/Images/wp-content/uploads/sites/shap-3.png"
                          alt=""
                          className="tp-rs-img rs-lazyload"
                          width={269}
                          height={328}
                          data-lazyload="assets/Images/wp-content/uploads/sites/shap-3.png"
                          data-no-retina=""
                          style={{ touchAction: "manipulation" }}
                          data-src-rs-ref="assets/Images/wp-content/uploads/sites/shap-3.png"
                        />
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-54"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="y:b;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:300px,247px,187px,115px;h:140px,115px,87px,53px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:700;sp:1000;sR:700;"
                        data-frame_999="o:0;st:w;sR:7300;"
                        style={{
                          zIndex: 7,
                          backgroundColor: "rgb(56, 189, 224)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-55"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:300px,247px,187px,115px;y:b;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:600px,495px,376px,231px;h:140px,115px,87px,53px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="x:-50,-41,-31,-19;"
                        data-frame_1="st:680;sp:1000;sR:680;"
                        data-frame_999="o:0;st:w;sR:7320;"
                        style={{
                          zIndex: 8,
                          backgroundColor: "rgba(0, 0, 0, 0.25)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-57"
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="xo:600px,495px,376px,231px;y:b;yo:66px,54px,41px,25px;"
                        data-text="w:normal;s:25,20,15,9;l:40,33,25,15;fw:500;"
                        data-dim="minh:0px,none,none,none;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-frame_0="rX:70deg;oZ:-50;"
                        data-frame_1="oZ:-50;e:power4.inOut;st:3520;sp:1750;sR:3520;"
                        data-frame_999="o:0;st:w;sR:3730;"
                        data-frame_hover="c:#fff;bor:0px,0px,0px,0px;"
                        style={{
                          zIndex: 18,
                          fontFamily: "Sora",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      >
                        Email Address
                      </rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-mask-wrap
                        style={{
                          position: "absolute",
                          display: "block",
                          touchAction: "manipulation"
                        }}
                      >
                        <rs-layer
                          id="slider-2-slide-11-layer-58"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-xy="x:r;y:b;"
                          data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                          data-dim="w:265px,218px,165px,101px;h:140px,115px,87px,53px;"
                          data-vbility="t,f,f,f"
                          data-basealign="slide"
                          data-frame_0="x:-175%;o:1;"
                          data-frame_0_mask="u:t;x:100%;"
                          data-frame_1="e:power3.out;st:680;sp:1000;sR:680;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:7320;"
                          style={{
                            zIndex: 33,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            touchAction: "manipulation"
                          }}
                          className="rs-layer"
                          data-idcheck="true"
                        ></rs-layer>
                      </rs-mask-wrap>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-59"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:570px,470px,357px,220px;y:b;yo:32px,26px,19px,11px;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:1px;h:60px,49px,37px,22px;"
                        data-vbility="t,f,f,f"
                        data-basealign="slide"
                        data-border="bor:5px,5px,5px,5px;"
                        data-frame_0="sX:0.9;sY:0.9;"
                        data-frame_1="e:power2.inOut;st:630;sp:1000;sR:630;"
                        data-frame_999="o:0;st:w;sR:7370;"
                        style={{
                          zIndex: 34,
                          backgroundColor: "rgba(255, 255, 255, 0.5)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*

						*/}
                    <rs-layer-wrap
                      className="rs-parallax-wrap "
                      style={{
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        touchAction: "manipulation"
                      }}
                    >
                      <rs-layer
                        id="slider-2-slide-11-layer-60"
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="x:c;y:m;"
                        data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                        data-dim="w:100%;h:100%;"
                        data-basealign="slide"
                        data-frame_999="o:0;st:w;sR:8700;"
                        style={{
                          zIndex: 6,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          touchAction: "manipulation"
                        }}
                        className="rs-layer"
                        data-idcheck="true"
                      ></rs-layer>
                    </rs-layer-wrap>
                    {/*
             */}{" "}
                  </rs-slide>
                </rs-slides>
              </rs-module>
            </rs-module-wrap>
            <rs-fw-forcer style={{ height: 980 }} />
          </rs-fullwidth-wrap>
          {/* END REVOLUTION SLIDER */}
        </div>
        {/*Start AboutUS*/}
        <div
          data-elementor-type="wp-page"
          data-elementor-id={73397}
          className="elementor elementor-73397"
        >



        </div>
        {/*End AboutUS */}

        <div
          data-elementor-type="wp-page"
          data-elementor-id={73397}
          className="elementor elementor-73397"
        >
          <div
            className="elementor-element elementor-element-23578682 e-flex e-con-boxed e-con e-parent e-lazyloaded"
            data-id={23578682}
            data-element_type="container" style={{ backgroundColor: '#405D53' }}
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
                    <div className="e-con-inner">
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
                                src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/elementor/thumbs/about-3-qn6j16ogch0bi8hims1eecmi64gy991dm7vmlihpts.jpg"
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
                                src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/elementor/thumbs/about-2-qn4tuzit91kvouoyasp675v819pxn7a322gkdqxa3c.jpg"
                                title="about-2"
                                alt="about-2"
                                loading="lazy"
                              />{" "}
                            </div>
                          </div>
                          <div style={{ display: 'none' }}
                            className="elementor-element elementor-element-27b168ca elementor-absolute verticle-move cea-view-default elementor-widget elementor-widget-ceafeaturebox animated fadeIn"
                            data-id="27b168ca"
                            data-element_type="widget"
                            data-settings='{"_position":"absolute","_animation":"fadeIn"}'
                            data-widget_type="ceafeaturebox.default"
                          >
                            <div className="elementor-widget-container feature-box-wrapper feature-box-default">
                              <a href="https://wordpress.zozothemes.com/happysmile/about-us/">
                                <div className="feature-box-inner">
                                  <div className="cea-featured-icon">
                                    <i
                                      aria-hidden="true"
                                      className=" bi-arrow-up-right"
                                    />
                                  </div>
                                  <h3 className="feature-box-title" style={{ fontFamily: 'Tajawal variant2' }}>6.5Million</h3>
                                  <div className="fbox-content" style={{ fontFamily: 'Tajawal variant2' }}>
                                    Customers Benefits
                                  </div>
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
                                <span className="subtitle-dots" style={{ fontFamily: 'Tajawal variant2', fontSize: '22px', color: '#CBA880', }}>Brand Story</span>
                              </h6>

                            </div>
                            {/* .title-wrap */}
                            <div className="section-description">
                              <p className="section-content" style={{
                                fontSize: '18px', color: 'white', textAlign: 'justify'
                                , fontFamily: ' SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
                              }}>
                                Karisma stands for empowerment and self-expression. It is a
                                luxury aesthetic brand that enhances and brings out an
                                individual’s inner charisma by offering transformative treatments
                                tailored to unique needs. With a focus on innovation,
                                sophistication, and elegance, Karisma helps clients radiate
                                confidence, not just through external beauty but by igniting their
                                inner glow. By blending advanced technology with personalized
                                care, Karisma is a destination where beauty and empowerment
                                meet, offering a unique journey of self-discovery and confidence.
                              </p>
                              <p className="section-content" style={{ fontSize: '18px', color: 'white', textAlign: 'justify' }}>
                                Karisma's philosophy is that true beauty lies within everyone, and
                                through their innovative, luxurious treatments, they help
                                individuals embrace their natural allure and shine in their own way.
                                It’s about unlocking the inner charisma that empowers you to feel
                                and look your best every day.
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
                            data-element_type="container"
                          >
                            <div
                              className="elementor-element elementor-element-60a4b9e0 elementor-widget__width-auto elementor-widget elementor-widget-ceabutton"
                              data-id="60a4b9e0"
                              data-element_type="widget"
                              data-widget_type="ceabutton.default"
                            >
                              <div className="elementor-widget-container cea-button-wrapper">
                                <div className="cea-button-wrapper">
                                  <a
                                    href="/about"
                                    style={{ backgroundColor: '#e5c29c', color: '#405D53', border: '1px, solid, #405D53' }}
                                    className=" elementor-button cea-button elementor-size-sm"

                                  >
                                    <span className="cea-button-content-wrapper">
                                      <span className="cea-button-icon cea-align-icon-right">

                                      </span>
                                      <span className="cea-button-text" style={{ fontFamily: 'Tajawal variant2' }}>
                                        ABOUT US{" "}
                                      </span>
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
          <div
            data-cea-float='[{"float_title":"Floating Image","float_img":"https:\/\/wordpress.zozothemes.com\/happysmile\/wp-content\/uploads\/sites\/20\/2024\/06\/home-about-bg.webp","float_left":"85","float_top":"40","float_distance":"100","float_animation":"0","float_mouse":"0","float_width":"190px"}]'
            className="elementor-element elementor-element-5814061e e-flex e-con-boxed e-con e-parent e-lazyloaded"
            data-id="5814061e"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
            style={{ background: '#e5c29c' }}
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
                        <div className="title-wrap">
                          <h6 className="sub-title">
                            <span className="subtitle-dots" style={{ fontFamily: 'Tajawal variant2', fontSize: '18px', color: '#405D53' }}>Why Choose Us</span>
                          </h6>
                          <h2 className="section-title" style={{ fontFamily: 'Tajawal variant2', fontSize: '28px', color: '#405D53' }}>State of the Art Dentistry</h2>
                        </div>
                        {/* .title-wrap */}
                        <div className="section-description" >
                          <p className="section-content" style={{ fontFamily: 'Tajawal variant2', fontSize: '14px', color: '#405D53' }}>
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
                        <div className="elementor-widget-container cea-button-wrapper">
                          <div className="cea-button-wrapper">
                            <a
                              style={{ backgroundColor: '#405D53', color: '#e5c29c', border: '1px, solid, #e5c29c' }}
                              href="/"
                              className="elementor-button cea-button elementor-size-sm"
                            >
                              <span className="cea-button-content-wrapper">

                                <span className="cea-button-text" style={{ fontFamily: 'Tajawal variant2' }}>MORE DETAILS</span>
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
                              <h4 className="section-title" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>Dental Checkup</h4>
                            </div>
                            {/* .title-wrap */}
                            <div className="section-description">
                              <p className="section-content" style={{ fontFamily: 'Tajawal variant2', fontSize: '18px', color: '#465F7E' }}>
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
                                <i aria-hidden="true" className=" bi-arrow-up-right" style={{ color: '#8FB9A9' }} />{" "}
                              </span>
                              <span className="icon-list-text" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>
                                Wisdom tooth extraction
                              </span>
                            </li>
                            <li className="cea-icon-list-item">
                              {" "}
                              <span className="cea-icon-list-icon">
                                <i aria-hidden="true" className=" bi-arrow-up-right" style={{ color: '#8FB9A9' }} />{" "}
                              </span>
                              <span className="icon-list-text" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>
                                Root Canal Treatment
                              </span>
                            </li>
                            <li className="cea-icon-list-item">
                              {" "}
                              <span className="cea-icon-list-icon">
                                <i aria-hidden="true" className=" bi-arrow-up-right" style={{ color: '#8FB9A9' }} />{" "}
                              </span>
                              <span className="icon-list-text" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>
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
                              <h4 className="section-title" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>Brushing</h4>
                            </div>
                            {/* .title-wrap */}
                            <div className="section-description">
                              <p className="section-content" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>
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
                                <i aria-hidden="true" className=" bi-arrow-up-right" style={{ color: '#8FB9A9' }} />{" "}
                              </span>
                              <span className="icon-list-text" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>
                                Temporomandibular joint dysfunction
                              </span>
                            </li>
                            <li className="cea-icon-list-item">
                              {" "}
                              <span className="cea-icon-list-icon">
                                <i aria-hidden="true" className=" bi-arrow-up-right" style={{ color: '#8FB9A9' }} />{" "}
                              </span>
                              <span className="icon-list-text" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>
                                Dentin hypersensitivity
                              </span>
                            </li>
                            <li className="cea-icon-list-item">
                              {" "}
                              <span className="cea-icon-list-icon">
                                <i aria-hidden="true" className=" bi-arrow-up-right" style={{ color: '#8FB9A9' }} />{" "}
                              </span>
                              <span className="icon-list-text" style={{ fontFamily: 'Tajawal variant2', color: '#405D53' }}>Cavities</span>
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
          {/* <HomeServices></HomeServices> */}
          {/* <HomeDoctors></HomeDoctors> */}
        </div>

        {/* .happysmile-slider-wrapper */}{" "}
        
        <Footer></Footer>
        {/* #site-footer */}
        <div className="full-search-wrapper">
          <a className="full-search-toggle close" href="#" />
          <form
            role="search"
            className="form-inline search-form"
            action="https://wordpress.zozothemes.com/happysmile/"
          >
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                defaultValue=""
                name="s"
              />
              <span className="input-group-btn">
                <button className="btn btn-outline-success" type="submit">
                  <span className="bi bi-search" />
                </button>
              </span>
            </div>
          </form>
        </div>
        <div className="secondary-bar-wrapper from-right">
          <div className="secondary-bar-inner">
            <a
              href="https://wordpress.zozothemes.com/happysmile"
              className="secondary-menu-toggle happysmile-toggle"
            >
              <span />
              <span />
              <span />
              <span />
            </a>
            <div className="widget widget_block widget_media_image">
              <div className="widget-content">
                <figure className="wp-block-image size-full is-resized">
                  <img
                    loading="lazy"
                    decoding="async"
                    width={361}
                    height={123}
                    src="https://dental.dmaksolutions.com/assets/Images/logo_main-3.png"
                    alt=""
                    className="wp-image-71627"
                    style={{ width: 165 }}
                  />
                </figure>
              </div>
            </div>
            <div className="widget widget_block">
              <div className="widget-content">
                <div className="wp-block-group">
                  <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
                    <h3 className="wp-block-heading">Have&nbsp;questions?</h3>
                    <div className="wp-block-contact-form-7-contact-form-selector">
                      <div
                        className="wpcf7 js"
                        id="wpcf7-f17499-o1"
                        lang="en-US"
                        dir="ltr"
                        data-wpcf7-id={17499}
                      >
                        <div className="screen-reader-response">
                          <p role="status" aria-live="polite" aria-atomic="true" />{" "}
                          <ul />
                        </div>
                        <form
                          action="/happysmile/#wpcf7-f17499-o1"
                          method="post"
                          className="wpcf7-form init"
                          aria-label="Contact form"
                          noValidate="novalidate"
                          data-status="init"
                        >
                          <div style={{ display: "none" }}>
                            <input
                              type="hidden"
                              name="_wpcf7"
                              defaultValue={17499}
                            />
                            <input
                              type="hidden"
                              name="_wpcf7_version"
                              defaultValue={6.0}
                            />
                            <input
                              type="hidden"
                              name="_wpcf7_locale"
                              defaultValue="en_US"
                            />
                            <input
                              type="hidden"
                              name="_wpcf7_unit_tag"
                              defaultValue="wpcf7-f17499-o1"
                            />
                            <input
                              type="hidden"
                              name="_wpcf7_container_post"
                              defaultValue={0}
                            />
                            <input
                              type="hidden"
                              name="_wpcf7_posted_data_hash"
                              defaultValue=""
                            />
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <p>
                                <span
                                  className="wpcf7-form-control-wrap"
                                  data-name="your-name"
                                >
                                  <input
                                    size={40}
                                    maxLength={400}
                                    className="wpcf7-form-control wpcf7-text"
                                    aria-invalid="false"
                                    placeholder="Name"
                                    defaultValue=""
                                    type="text"
                                    name="your-name"
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p>
                                <span
                                  className="wpcf7-form-control-wrap"
                                  data-name="your-email"
                                >
                                  <input
                                    size={40}
                                    maxLength={400}
                                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Email"
                                    defaultValue=""
                                    type="email"
                                    name="your-email"
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p>
                                <span
                                  className="wpcf7-form-control-wrap"
                                  data-name="your-phone"
                                >
                                  <input
                                    size={40}
                                    maxLength={400}
                                    className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Phone"
                                    defaultValue=""
                                    type="tel"
                                    name="your-phone"
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="col-md-12">
                              <p>
                                <span
                                  className="wpcf7-form-control-wrap"
                                  data-name="your-message"
                                >
                                  <textarea
                                    cols={40}
                                    rows={10}
                                    maxLength={2000}
                                    className="wpcf7-form-control wpcf7-textarea"
                                    aria-invalid="false"
                                    placeholder="Message"
                                    name="your-message"
                                    defaultValue={""}
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="col-md-12 mt-3">
                              <p>
                                <input
                                  className="wpcf7-form-control wpcf7-submit has-spinner"
                                  type="submit"
                                  defaultValue="Send Now"
                                />
                                <span className="wpcf7-spinner" />
                              </p>
                            </div>
                          </div>
                          <div
                            className="wpcf7-response-output"
                            aria-hidden="true"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget happysmile_contact_info_widget">
              <div className="widget-content">
                <div className="contact-widget-wrap" data-css='""'>
                  <h3 className="widget-title subheading heading-size-3">
                    Contact Info
                  </h3>
                  <div className="contact-widget widget-content">
                    <div className="contact-widget-info">
                      <p className="contact-address">
                        <span className="bi bi-geo-alt" />
                        <span>4b, Walse Street, USA</span>
                      </p>
                      <p className="contact-phone">
                        <span className="bi bi-headset" />
                        <span>
                          <a href="tel:(528)456-7592">(528) 456-7592</a>
                        </span>
                      </p>
                      <p className="contact-email">
                        <span className="bi bi-envelope" />
                        <span>
                          <a href="mailto:info@happysmile.com">
                            info@happysmile.com
                          </a>
                        </span>
                      </p>
                    </div>
                    {/* .contact-widget-info */}
                  </div>
                </div>
                {/* .contact-widget-wrap */}
              </div>
            </div>
            <div className="widget zozo_social_widget">
              <div className="widget-content">
                <h3 className="widget-title subheading heading-size-3">Reach Us</h3>
                <ul className="nav social-icons social-widget widget-content social-transparent social-white social-h-black social-bg-transparent social-hbg-transparent">
                  <li>
                    <a href="#" target="_blank" className="social-facebook">
                      <i className="bi bi-facebook" />
                    </a>
                  </li>{" "}
                  <li>
                    <a href="#" target="_blank" className="social-twitter">
                      <i className="bi bi-twitter-x" />
                    </a>
                  </li>{" "}
                  <li>
                    <a href="#" target="_blank" className="social-instagram">
                      <i className="bi bi-instagram" />
                    </a>
                  </li>{" "}
                  <li>
                    <a href="#" target="_blank" className="social-pinterest">
                      <i className="bi bi-pinterest" />
                    </a>
                  </li>{" "}
                  <li>
                    <a href="#" target="_blank" className="social-youtube">
                      <i className="bi bi-youtube" />
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="mobile-menu-floating">
          <a
            href="https://wordpress.zozothemes.com/happysmile"
            className="mobile-menu-toggle"
          >
            <i className="close-icon" />
          </a>
          <div className="header-titles">
            <a
              className="site-link"
              href="/"
            >
              <img
                className="img-fluid mobile-logo"
                src="https://dental.dmaksolutions.com/assets/Images/logo_main-3.png"
                alt="Medical & Dentist WordPress Theme"
              />
            </a>
          </div>
          {/* .header-titles */}
          <nav className="mobile-menu-wrapper">
            <ul className="wp-menu mobile-menu">
              <li
                id="menu-item-73659"
                className="cus-img-menu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children menu-item-73659"
              >
                <a
                  href="https://wordpress.zozothemes.com/happysmile/"
                  aria-current="page"
                >
                  Home
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-73661"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-73661"
                  >
                    <a
                      href="https://wordpress.zozothemes.com/happysmile/"
                      aria-current="page"
                    >
                      Home 1
                    </a>
                  </li>
                  <li
                    id="menu-item-73662"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73662"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/home-2/">
                      Home 2
                    </a>
                  </li>
                  <li
                    id="menu-item-73663"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73663"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/home-3/">
                      Home 3
                    </a>
                  </li>
                  <li
                    id="menu-item-73664"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73664"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/home-4/">
                      Home 4
                    </a>
                  </li>
                  <li
                    id="menu-item-73665"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73665"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/home-5/">
                      Home 5
                    </a>
                  </li>
                  <li
                    id="menu-item-73794"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73794"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/home-landing-page/">
                      Home Landing Page
                    </a>
                  </li>
                </ul>
                <span className="down-arrow" />
              </li>
              <li
                id="menu-item-73667"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-73667"
              >
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-73668"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73668"
                  >
                    <a href="/about">
                      About Us
                    </a>
                  </li>
                  <li
                    id="menu-item-73669"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73669"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/our-team/">
                      Our Team
                    </a>
                  </li>
                  <li
                    id="menu-item-73670"
                    className="menu-item menu-item-type-post_type menu-item-object-cea-team menu-item-73670"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/team/angelina-jolie/">
                      Team Single
                    </a>
                  </li>
                  <li
                    id="menu-item-73671"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73671"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/testimonial/">
                      Testimonial
                    </a>
                  </li>
                  <li
                    id="menu-item-73672"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73672"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/frequently-asked-question/">
                      FAQ
                    </a>
                  </li>
                  <li
                    id="menu-item-73673"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73673"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/gallery/">
                      Gallery
                    </a>
                  </li>
                  <li
                    id="menu-item-73674"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73674"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/appointment/">
                      Appointment
                    </a>
                  </li>
                </ul>
                <span className="down-arrow" />
              </li>
              <li
                id="menu-item-73675"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-73675"
              >
                <a href="https://wordpress.zozothemes.com/happysmile/service/">
                  Service
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-73676"
                    className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73676"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/service/scaling-and-root-planing/">
                      Scaling and Root Planing
                    </a>
                  </li>
                  <li
                    id="menu-item-73677"
                    className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73677"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/service/teeth-whitening/">
                      Teeth Whitening
                    </a>
                  </li>
                  <li
                    id="menu-item-73678"
                    className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73678"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/service/invisalign-clearcorrect/">
                      Invisalign &amp; ClearCorrect
                    </a>
                  </li>
                  <li
                    id="menu-item-73679"
                    className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73679"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/service/zirconium-crowns/">
                      Zirconium Crowns
                    </a>
                  </li>
                  <li
                    id="menu-item-73680"
                    className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73680"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/service/wisdom-tooth-extraction/">
                      Wisdom Tooth Extraction
                    </a>
                  </li>
                  <li
                    id="menu-item-73681"
                    className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73681"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/service/partials-dentures/">
                      Partials &amp; Dentures
                    </a>
                  </li>
                  <li
                    id="menu-item-73682"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-73682"
                  >
                    <a href="#">Service Grid</a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-73683"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73683"
                      >
                        <a href="https://wordpress.zozothemes.com/happysmile/service-styles-1/">
                          Service Styles 1
                        </a>
                      </li>
                      <li
                        id="menu-item-73684"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73684"
                      >
                        <a href="https://wordpress.zozothemes.com/happysmile/service-styles-2/">
                          Service Styles 2
                        </a>
                      </li>
                      <li
                        id="menu-item-73685"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73685"
                      >
                        <a href="https://wordpress.zozothemes.com/happysmile/service-styles-3/">
                          Service Styles 3
                        </a>
                      </li>
                    </ul>
                    <span className="down-arrow" />
                  </li>
                </ul>
                <span className="down-arrow" />
              </li>
              <li
                id="menu-item-73686"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-73686"
              >
                <a href="https://wordpress.zozothemes.com/happysmile/doctors-directory/">
                  Doctors Directory
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-73687"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73687"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/doctors-grid/">
                      Doctors Grid
                    </a>
                  </li>
                </ul>
                <span className="down-arrow" />
              </li>
              <li
                id="menu-item-73688"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-73688"
              >
                <a href="https://wordpress.zozothemes.com/happysmile/blog/">Blog</a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-73689"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73689"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/blog/">
                      Blog Standard
                    </a>
                  </li>
                  <li
                    id="menu-item-73690"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-73690"
                  >
                    <a href="#">Blog Grid</a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-73691"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73691"
                      >
                        <a href="https://wordpress.zozothemes.com/happysmile/3-columns/">
                          3 Columns
                        </a>
                      </li>
                      <li
                        id="menu-item-73692"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73692"
                      >
                        <a href="https://wordpress.zozothemes.com/happysmile/4-columns-fullwidth/">
                          4 Columns Fullwidth
                        </a>
                      </li>
                      <li
                        id="menu-item-73693"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73693"
                      >
                        <a href="https://wordpress.zozothemes.com/happysmile/blog-grid-overlay/">
                          Blog Grid + Overlay
                        </a>
                      </li>
                    </ul>
                    <span className="down-arrow" />
                  </li>
                  <li
                    id="menu-item-73694"
                    className="menu-item menu-item-type-post_type menu-item-object-post menu-item-73694"
                  >
                    <a href="https://wordpress.zozothemes.com/happysmile/how-to-choose-the-best-dental-crown/">
                      Blog Single
                    </a>
                  </li>
                </ul>
                <span className="down-arrow" />
              </li>
              <li
                id="menu-item-73695"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73695"
              >
                <a href="https://wordpress.zozothemes.com/happysmile/contact-us/">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          {/* .mobile-menu-wrapper */}{" "}
          <form
            role="search"
            className="form-inline search-form"
            action="https://wordpress.zozothemes.com/happysmile/"
          >
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                defaultValue=""
                name="s"
              />
              <span className="input-group-btn">
                <button className="btn btn-outline-success" type="submit">
                  <span className="bi bi-search" />
                </button>
              </span>
            </div>
          </form>
        </div>
        {/* .mobile-menu-floating */}{" "}
        <a
          href="https://wordpress.zozothemes.com/happysmile"
          className="back-to-top"
          id="back-to-top" style={{ backgroundColor: '#405D53' }}
        >
          <i className="bi bi-caret-up-fill" />
        </a>
      </div>
      {/* .happysmile-body-inner */}
      
      <style
        id="core-block-supports-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.wp-container-core-columns-is-layout-1{flex-wrap:nowrap;}.wp-container-core-columns-is-layout-2{flex-wrap:nowrap;}\n"
        }}
      />
      
      <style
        id="rs-plugin-settings-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t.borders.sl-border-top-left{position:absolute;  left:0;  top:0;  display:flex}div.sl-border1{width:57px;  height:219px;  border:solid 1px #cda274;  transform:rotate(-45deg);  margin-top:92px !important}div.sl-border2{width:57px;  height:253px;  border:solid 1px #cda274;  transform:rotate(-45deg)}.borders.sl-border-top-right{position:absolute;  right:0}.slide-text-transparent{color:rgba(255,255,255,1) !important;  text-shadow:-1px -1px 0 #e8eaed,1px -1px 0 #e8eaed,-1px 1px 0 #e8eaed,1px 1px 0 #e8eaed}.slide-fbox-title:hover,.slide-fbox-number:hover{color:#d4d4d4 !important}.rotate-text-wrap img{animation-name:floating-animate-model-2;  animation-duration:400s;  animation-iteration-count:infinite;  animation-timing-function:linear;  -webkit-animation-name:floating-animate-model-2;  -webkit-animation-duration:400s;  -webkit-animation-iteration-count:infinite;  -webkit-animation-timing-function:linear;  -moz-animation-name:floating-animate-model-2;  -moz-animation-duration:400s;  -moz-animation-iteration-count:infinite;  -moz-animation-timing-function:linear;  -ms-animation-name:floating-animate-model-2;  -ms-animation-duration:400s;  -ms-animation-iteration-count:infinite;  -ms-animation-timing-function:linear;  -o-animation-name:floating-animate-model-2;  -o-animation-duration:400s;  -o-animation-iteration-count:infinite;  -o-animation-timing-function:linear}.img-shake img{-webkit-animation:skew3dance 5s linear 1s infinite;  animation:skew3dance 5s linear 1s infinite}.slide.sub-title:before{content:\"\\f5d4\";  font-family:'bootstrap-icons';  border-radius:80px;  position:absolute;  top:50%;  transform:translateY(-50%);  right:0;  font-size:19px}.rs-parallax-wrap .horizontal-teeth img{-webkit-animation:horizontal-teeth 3s linear;  animation:horizontal-teeth 3s linear infinite}@-webkit-keyframes horizontal-teeth{0%{-webkit-transform:perspective(1000px) rotateY(0deg); transform:perspective(1000px) rotateY(0deg)}100%{-webkit-transform:perspective(1000px) rotateY(360deg); transform:perspective(1000px) rotateY(360deg)}}@keyframes horizontal-teeth{0%{-webkit-transform:perspective(1000px) rotateY(0deg); transform:perspective(1000px) rotateY(0deg)}100%{-webkit-transform:perspective(1000px) rotateY(360deg); transform:perspective(1000px) rotateY(360deg)}}.rs-parallax-wrap .btn-slider:after{content:\"\";  width:100%;  height:100%;  position:absolute;  top:-7px;  left:-7px;  background-color:#38BDE0;  border-radius:10px 10px 0px 10px;  z-index:0;  transition:400ms ease-in-out}.rs-parallax-wrap .btn-slider:before{content:\"\";  width:100%;  height:100%;  position:absolute;  top:0px;  left:0px;  background-color:#fff;  border-radius:10px 10px 0px 10px;  z-index:2;  transition:400ms ease-in-out;  border:solid 1px}.rs-parallax-wrap .btn-slider:hover:before{opacity:0;  border-radius:10px 10px 0px 10px}.rs-parallax-wrap .btn-slider:hover:after{top:0;  left:0;  z-index:1;  border-radius:10px 10px 0px 10px}.rs-parallax-wrap .btn-text{position:relative;  z-index:2}.res-slide-btn.rev-sl-btn{overflow:hidden}.cus-hide1{display:none !important}.cus-hide2{display:block !important}rs-mask-wrap .rs-layer span.cus-stroke{-webkit-text-stroke:1px #fff;  color:transparent}rs-slide{overflow:visible !important}@-webkit-keyframes zoomInslide{0%{-webkit-transform:scale(0); transform:scale(0)}50%{-webkit-transform:scale(1); transform:scale(1)}100%{-webkit-transform:scale(0); transform:scale(0)}}@keyframes zoomInslide{0%{-webkit-transform:scale(0); transform:scale(0)}50%{-webkit-transform:scale(1); transform:scale(1)}100%{-webkit-transform:scale(0); transform:scale(0)}}rs-layer-wrap .cus-left-arrow-txt,rs-layer-wrap .cus-left-arrow,rs-layer-wrap .cus-right-arrow-txt,rs-layer-wrap .cus-right-arrow{opacity:0 !important;  transition:all .3s}.igual-slider-wrapper:hover rs-layer-wrap .cus-left-arrow-txt,.igual-slider-wrapper:hover rs-layer-wrap .cus-left-arrow,.igual-slider-wrapper:hover rs-layer-wrap .cus-right-arrow-txt,.igual-slider-wrapper:hover rs-layer-wrap .cus-right-arrow{opacity:1 !important;  transition:all .3s}@-webkit-keyframes skew3dance{0%{transform:skewX(0deg)}25%{transform:skewX(-3deg)}50%{transform:skewX(0deg)}75%{transform:skewX(3deg)}to{transform:skewX(0deg)}}@keyframes skew3dance{0%{transform:skewX(0deg)}25%{transform:skewX(-3deg)}50%{transform:skewX(0deg)}75%{transform:skewX(3deg)}to{transform:skewX(0deg)}}.res-d-none{display:none !important}.slide-fbox-title:hover,.slide-fbox-title,.slide-fbox-number:hover,.slide-fbox-number{transition:all .3s}.rs-layer.Concept-Content a,.rs-layer.Concept-Content a:visited{color:#fff !important; border-bottom:1px solid #fff !important; font-weight:700 !important}span.spl-slash{padding-left:19px; padding-right:19px}span.spl-slash{position:relative}.sl-link{transition:all .3s}.sl-link:hover{opacity:.8 !important;  transition:all .3s}span.spl-slash:before{content:\"\";  width:3px;  height:23px;  background:#ff3e55;  position:absolute;  top:6px;  left:5px;  transform:rotate(-20deg)}span.spl-slash:after{content:\"\";  width:3px;  height:23px;  background:#ff3e55;  position:absolute;  top:6px;  right:5px;  transform:rotate(-20deg)}.rs-layer.Concept-Content a:hover{border-bottom:1px solid transparent !important}.rs-layer.Concept-Content-Dark a,.rs-layer.Concept-Content-Dark a:visited{color:#000 !important; border-bottom:1px solid #000 !important; font-weight:700 !important}.rs-layer.Concept-Content-Dark a:hover{border-bottom:1px solid transparent !important}.res-slide-btn i{font-size:14px !important;  font-weight:600 !important;  margin-left:5px !important;  vertical-align:-1px !important}.tp-leftarrow.tparrows{border-top-left-radius:10px;  border-bottom-left-radius:10px}.tp-rightarrow.tparrows{border-top-right-radius:10px;  border-bottom-right-radius:10px}rs-layer.slide-fbox.rs-layer{background:rgb(255 255 255 / 10%) !important;  box-shadow:0 8px 32px 0 rgb(31 38 135 / 37%) !important;  backdrop-filter:blur( 6px );  -webkit-backdrop-filter:blur( 6px );   transition:all .3s ease-in-out 0s;  -webkit-transition:all .3s ease-in-out 0s;  -moz-transition:all .3s ease-in-out 0s;  -ms-transition:all .3s ease-in-out 0s;  -o-transition:all .3s ease-in-out 0s}rs-layer.slide-fbox.rs-layer:hover{background:rgb(255 255 255 / 4%) !important;   transition:all .3s ease-in-out 0s;  -webkit-transition:all .3s ease-in-out 0s;  -moz-transition:all .3s ease-in-out 0s;  -ms-transition:all .3s ease-in-out 0s;  -o-transition:all .3s ease-in-out 0s}@media only screen and (max-width:1024px){.dot-buffer:before,.dot-buffer:after{content:unset !important}span.spl-slash{padding-left:0 !important; padding-right:0 !important}span.spl-slash:before{content:unset}span.spl-slash:after{content:unset}.res-d-none{display:block !important}.res-slide-btn.rev-sl-btn i{display:none}.slide.sub-title:before{content:unset}.cus-hide1{display:block !important}.cus-hide2{display:none !important}.igual-slide-txt{padding-left:0 !important;   border-left:none !important}.dot-buffer{top:10px;  left:5px;  transform:translateY(-50%)}}@media only screen and (max-width:730px){.interiar-slide-txt{font-size:16px !important;  line-height:30px !important}rs-mask-wrap .res-slide-btn{margin-top:0px}}@media only screen and (max-width:668px){rs-mask-wrap .res-slide-btn{margin-top:61px}}@media only screen and (max-width:640px){.igual-slide-txt{font-size:16px !important;  line-height:30px !important}rs-mask-wrap .res-slide-btn{margin-top:20px !important;   padding:9px 25px !important;   font-size:13px !important}}@media only screen and (max-width:603px){rs-mask-wrap .res-slide-btn{margin-top:35px !important}}@media only screen and (max-width:575px){rs-mask-wrap .res-slide-btn{padding:9px 16px !important}}@media only screen and (max-width:565px){rs-mask-wrap .res-slide-btn{margin-top:35px !important}}@media only screen and (max-width:525px){.igual-slide-txt{line-height:30px !important}rs-mask-wrap .res-slide-btn{margin-top:47px !important}}@media only screen and (max-width:506px){.igual-slide-txt{line-height:28px !important;   font-size:15px !important}}@media only screen and (max-width:481px){rs-mask-wrap .res-slide-btn{margin-top:48px !important}}@media only screen and (max-width:480px){rs-mask-wrap .res-slide-btn{margin-top:15px !important}}@media only screen and (max-width:479px){rs-mask-wrap .res-slide-btn{margin-top:5px !important}}@media only screen and (max-width:472px){.igual-slide-txt{font-size:15px !important;  line-height:28px !important}}@media only screen and (max-width:426px){.igual-slide-txt{font-size:15px !important;  line-height:28px !important}rs-mask-wrap .res-slide-btn{margin-top:15px !important}}@media only screen and (max-width:412px){rs-mask-wrap .res-slide-btn{margin-top:15px !important}}@media only screen and (max-width:388px){rs-mask-wrap .res-slide-btn{margin-top:15px !important}.igual-slide-txt{font-size:15px !important;  line-height:27px !important}}@media only screen and (max-width:359px){.igual-slide-txt{font-size:15px !important;  line-height:24px !important}rs-mask-wrap .res-slide-btn{margin-top:35px !important}}@media only screen and (max-width:332px){.igual-slide-txt{font-size:14px !important;  line-height:24px !important}rs-mask-wrap .res-slide-btn{margin-top:69px !important}}\n\t\t#rev_slider_2_1_wrapper .hades.tparrows{cursor:pointer;background:rgba(0,0,0,0.25);width:100px;height:100px;position:absolute;display:block;z-index:1000}#rev_slider_2_1_wrapper .hades.tparrows:before{font-family:'revicons';font-size:30px;color:#ffffff;display:block;line-height:100px;text-align:center; transition:background 0.3s,color 0.3s}#rev_slider_2_1_wrapper .hades.tparrows.tp-leftarrow:before{content:'\\e824'}#rev_slider_2_1_wrapper .hades.tparrows.tp-rightarrow:before{content:'\\e825'}#rev_slider_2_1_wrapper .hades.tparrows.rs-touchhover:before{color:rgba(0,0,0,0.5);  background:#ffffff}#rev_slider_2_1_wrapper .hades .tp-arr-allwrapper{position:absolute; left:100%; top:0px; background:#888;  width:100px;height:100px; -webkit-transition:all 0.3s; transition:all 0.3s; -ms-filter:'progid:dximagetransform.microsoft.alpha(opacity=0)'; filter:alpha(opacity=0); -moz-opacity:0.0; -khtml-opacity:0.0; opacity:0.0; -webkit-transform:rotatey(-90deg); transform:rotatey(-90deg); -webkit-transform-origin:0% 50%; transform-origin:0% 50%}#rev_slider_2_1_wrapper .hades.tp-rightarrow .tp-arr-allwrapper{left:auto;  right:100%;  -webkit-transform-origin:100% 50%; transform-origin:100% 50%;  -webkit-transform:rotatey(90deg); transform:rotatey(90deg)}#rev_slider_2_1_wrapper .hades:hover .tp-arr-allwrapper{-ms-filter:'progid:dximagetransform.microsoft.alpha(opacity=100)'; filter:alpha(opacity=100); -moz-opacity:1; -khtml-opacity:1; opacity:1;   -webkit-transform:rotatey(0deg); transform:rotatey(0deg)}#rev_slider_2_1_wrapper .hades .tp-arr-iwrapper{}#rev_slider_2_1_wrapper .hades .tp-arr-imgholder{background-size:cover; position:absolute; top:0px;left:0px; width:100%;height:100%}#rev_slider_2_1_wrapper .hades .tp-arr-titleholder{}#rev_slider_2_1_wrapper .hades .tp-arr-subtitleholder{}\n"
        }}
      />
      <span id="elementor-device-mode" className="elementor-screen-only" />
      <div
        className="widget_shopping_cart_live_region screen-reader-text"
        role="status"
      />
      <grammarly-desktop-integration data-grammarly-shadow-root="true" />
    </>

  );
}