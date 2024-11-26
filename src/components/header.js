
import React, { useState } from "react";
import Booking from "../components/BookingForm";

export default function Header() {
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
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="profile" href="https://gmpg.org/xfn/11" />
      <title>Medical &amp; Dentist WordPress Theme</title>
      <meta name="robots" content="max-image-preview:large" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Medical & Dentist WordPress Theme » Feed"
        href="https://wordpress.zozothemes.com/happysmile/feed/"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Medical & Dentist WordPress Theme » Comments Feed"
        href="https://wordpress.zozothemes.com/happysmile/comments/feed/"
      />
      <link
        rel="stylesheet"
        id="bootstrap-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/bootstrap.min.css?ver=4.5.3"
        media="all"
      />
      <link
        rel="stylesheet"
        id="owl-carousel-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/owl.carousel.min.css?ver=2.3.4"
        media="all"
      />
      <link
        rel="stylesheet"
        id="image-hover-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/image-hover.min.css?ver=1.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="fontawesome-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/font-awesome.css?ver=4.7.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="themify-icons-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/themify-icons.css?ver=1.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="bootstrap-icons-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/bootstrap-icons.css?ver=1.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="cea-style-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/style.css?ver=1.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="cea-shortcode-style-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/shortcode-styles.css?ver=1.0"
        media="all"
      />
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
      <link
        rel="stylesheet"
        id="font-awesome-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css?ver=4.7.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="woocommerce-layout-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=9.4.2"
        media="all"
      />
      <link
        rel="stylesheet"
        id="woocommerce-smallscreen-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=9.4.2"
        media="only screen and (max-width: 768px)"
      />
      <link
        rel="stylesheet"
        id="woocommerce-general-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=9.4.2"
        media="all"
      />
      <style
        id="woocommerce-inline-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.woocommerce form .form-row .required { visibility: visible; }\n"
        }}
      />
      <link
        rel="stylesheet"
        id="bootstrap-5-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/css/bootstrap.min.css?ver=5.0.2"
        media="all"
      />
      <link
        rel="stylesheet"
        id="happysmile-style-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/style.css?ver=1.0"
        media="all"
      />
      <style
        id="happysmile-style-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            '\n@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1200px}}.primary-color,.theme-color,a:focus,a:hover,a:active{color:#38bde0}.primary-bg,.theme-bg{background-color:#38bde0}.border-shape-top:before,.border-shape-top-left:before{background:linear-gradient(to bottom,#38bde0 -24%,rgb(58 123 213 / 0))}.border-shape-top:after,.border-shape-top-left:after{background:linear-gradient(to top,#38bde0 0,rgb(58 123 213 / 0))}.happysmile-masonry .top-meta-wrap ul.nav.post-meta > li:before{background:linear-gradient(to top,#38bde0 0,rgb(184 151 128 / 0))}.footer-widget.contact-widget:before{background:linear-gradient(to right,#38bde0 0,rgb(184 151 128 / 6%))}.service-style-default .service-inner:before{border-right:50px solid rgba(56,189,224,1)}.service-style-default .service-inner:hover:before{background:linear-gradient(to left,#38bde0,rgb(58 123 213 / 0))}.section-title-wrapper span.elementor-divider-separator{border-image:linear-gradient(to right,#38bde0,rgb(58 123 213 / 0));border-image-slice:1}.rtl .section-title-wrapper span.elementor-divider-separator{border-image:linear-gradient(to left,#38bde0,rgb(58 123 213 / 0));border-image-slice:1}.page-title-wrap:after{background:linear-gradient(to top,rgba(56,189,224,0.61),rgb(255 255 255 / 0));background:-webkit-linear-gradient(to top,rgba(56,189,224,0.61),rgb(255 255 255 / 0))}.elementor-widget-container.feature-box-wrapper.feature-box-classic:before{background:linear-gradient(to bottom,rgba(56,189,224,0.31),rgb(184 151 128 / 4%));background:-webkit-linear-gradient(to bottom,rgba(56,189,224,0.31),rgb(184 151 128 / 4%))}aside.footer-widget-2 h5:before,.widget .widgettitle:before,.widget .widget-title:before,.widget-area-right .wp-block-group__inner-container h1:before,.widget-area-right .wp-block-group__inner-container h2:before,.widget-area-right .wp-block-group__inner-container h3:before,.widget-area-right .wp-block-group__inner-container h4:before,.widget-area-right .wp-block-group__inner-container h5:before,.widget-area-right .wp-block-group__inner-container h6:before,.widget-area-left .widget .widget-title:before,.owl-dots button.owl-dot,.pricing-style-classic.pricing-table-wrapper ul > li:before,.single-post ul.nav.post-meta > li.post-category:before,.team-wrapper.team-style-classic .team-inner:before{background:linear-gradient(to top,#38bde0,rgb(184 151 128 / 0))}.blog .happysmile-masonry .post-meta .post-more a:before,.happysmile-masonry .bottom-meta-wrap .post-meta .post-more a:before,.elementor-widget-ceaposts .blog-inner .read-more:before,.section-title-wrapper .title-wrap > *.sub-title:before,.insta-footer-wrap .sub-title:before{background:linear-gradient(to top,#38bde0 29%,rgba(56,189,224,0.11))}.bookly-progress-tracker .step,.service-style-default .service-inner .post-thumb:before{background-color:rgba(56,189,224,0.25)}.calendar_wrap th,tfoot td,ul.nav.wp-menu > li > a:before,.elementor-widget-container.feature-box-wrapper.feature-box-classic:after,ul[id^="nv-primary-navigation"] li.button.button-primary > a,.menu li.button.button-primary > a,span.animate-bubble-box:after,span.animate-bubble-box:before,.header-navbar.navbar .wp-menu li > ul.sub-menu li a:before,.pagination-single-inner > h6 > a span.arrow,::selection,.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot.active,.comments-pagination.pagination .page-numbers.current,.portfolio-meta ul.nav.social-icons > li > a:hover,span.cea-popup-modal-dismiss.ti-close,blockquote:after,.wp-block-quote.is-large:after,.wp-block-quote.is-style-large:after,.wp-block-quote.is-style-large:not(.is-style-plain):after,.wp-block-quote.has-text-align-right:after,.wp-block-quote:after,p.quote-author::before,nav.post-nav-links .post-page-numbers.current,blockquote cite::before,.single-post .comments-wrapper.section-inner input.submit,.page .comments-wrapper.section-inner input.submit,.widget-area-right .widget p.wp-block-tag-cloud a.tag-cloud-link:hover,.widget .tagcloud > a:hover,.widget .tagcloud > a:focus,.widget .tagcloud > a:active,.section-title-wrapper.title-theme .title-wrap > *.sub-title:after,.team-style-default .team-inner .post-overlay-items > .team-social-wrap,.cea-tab-elementor-widget.tab-style-2.cea-vertical-tab a.nav-item.nav-link:before,.portfolio-single .portfolio-video.post-video-wrap .video-play-icon,.portfolio-wrapper.portfolio-style-default .isotope-filter ul.nav li a:before,.isotope-filter ul.nav.m-auto.d-block li.active a,.call-us-team a.cea-button-link:hover,.call-us-team a.cea-button-link span.cea-button-num,.header-navbar .cea-button-link,.team-wrapper.team-style-default .team-inner .social-icons > li > a,.elementor-widget-ceaposts .blog-style-classic-pro .blog-inner .post-date a,.widget-area-left .contact-widget-info > p > span.bi,.widget-area-right .contact-widget-info > p > span.bi,.row.portfolio-details .col-sm-4 > .portfolio-meta span.portfolio-meta-icon,.portfolio-style-default .portfolio-inner .post-thumb:before,.portfolio-single .portfolio-sub-title,.testimonial-wrapper.testimonial-style-default .owl-item .testimonial-inner:hover:before,.timeline > li > .timeline-sep-title:before,.feature-box-style-5 .feature-box-wrapper .fbox-number,.header-navbar a.h-phone:before,.zozo_social_widget ul.nav.social-icons > li > a,.footer-widget.contact-widget,.portfolio-style-classic .post-thumb.post-overlay-active:before,.bottom-meta .post-more:before,.elementor-progress-percentage,.elementor-progress-percentage,.blog-style-classic-pro .blog-inner ul.nav.top-meta-list li:before,.wp-block-file__button.wp-element-button,p.wp-block-tag-cloud a.tag-cloud-link:hover,.event-inner ul.nav.top-meta-list .post-date:before,.site-header .btn.btn-primary::after,.cea-button-wrapper .cea-button-link:after,.site-header .btn.btn-primary::after,.site-footer .footer-contact.cus-footer-middle-2 .btn.btn-primary:after,.happysmile-content-wrap .post-share-wrap ul.nav.social-share > li a:hover,.service-style-classic .service-inner .post-category a,.team-style-classic .team-inner .post-overlay-items .team-designation,.single-cea-team .team-social-wrap ul.social-icons > li > a:hover,.happysmile-content-wrap .team-content-area .team-details-icon:hover,form.form-inline.search-form .input-group .input-group-btn button.btn,.bottom-meta .post-more .read-more:after,.site-header .btn.btn-primary:hover,.service-area .e-con-inner:before,.content-widgets-wrapper .widget_categories ul li a:before,.content-widgets-wrapper .widget_archive ul li a:before,aside.content-widgets-outer-wrapper .widget_pages ul li.page_item a:before,.footer-widgets-wrap .widget.widget_pages ul li.page_item a:before,.happysmile-masonry .nav .post-more:hover:before,.happysmile-masonry .nav .post-more:after,.service-inner:hover .nav .post-more a.read-more:before,.team-inner:hover .bottom-meta .post-more .read-more:before,.blog-layouts-wrapper .post-more:hover .read-more:before,.blog-style-classic .blog-inner .nav .post-more .read-more:hover:before,.blog-style-classic-pro .blog-inner .nav .post-more .read-more:hover:before,.blog-style-list .blog-inner .post-more:hover .read-more:before,.blog-style-modern .blog-inner .post-more:hover .read-more:before{background-color:#38bde0}.theme-color-bg,.icon-theme-color-bg,.flip-box-wrapper:hover .icon-theme-hcolor-bg,.contact-info-style-classic-pro .contact-info-title,.contact-info-wrapper.contact-info-style-classic:before,.isotope-filter ul.nav li.active a:after,.isotope-filter ul.nav li a:after,.blog-wrapper.blog-style-modern .blog-inner .top-meta .post-category,.blog-wrapper .post-overlay-items .post-date a,.event-style-classic .top-meta .post-date,.blog-layouts-wrapper .post-overlay-items .post-date a,.portfolio-content-wrap .portfolio-title h3,.service-style-classic .entry-title:after,.service-style-classic .entry-title:before,.team-style-default .team-inner .post-overlay-items > .team-social-wrap > ul,.team-style-default .team-inner:hover .post-overlay-items > .team-social-wrap,.back-to-top:after,.elementor-widget-container.feature-box-wrapper.feature-box-classic:after,h2.we-stand__top-title,span.zozo-product-favoured,.widget .tagcloud > a:hover,.widget .tagcloud > a:focus,.widget .tagcloud > a:active{background-color:#38bde0 !important}.full-search-wrapper .search-form .input-group .btn:hover,.testimonial-style-list .testimonial-inner:after,.team-details-icon,ul.nav.post-meta > li span,.comment-metadata time,.comments-wrap span:before,.comment-body .reply a.comment-reply-link,.happysmile-masonry .bottom-meta-wrap .post-meta .post-more a .widget.widget_nav_menu li a:before,.happysmile-masonry > article .top-meta-wrap a:hover,h2.entry-title a:hover,.woocommerce-message::before,.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.woocommerce div.product p.price,.woocommerce div.product span.price,ul.pricing-features-list.list-group li:before,.doc-icon,.sidebar-broucher .icon-box a:hover,p.quote-author,.feature-box-wrapper .fbox-content a:hover,ul.nav.post-meta > li.post-tag > a:hover,blockquote cite,.wp-block-quote cite,.wp-block-quote footer,.bottom-meta-wrap ul.nav.post-meta > li.post-date a:hover,.single-post .top-meta-wrap ul.nav.post-meta li a:hover,.cus-img-menu .menu-item .widget .wp-block-image:hover figcaption a,.single-post blockquote cite,.single-post blockquote cite a,.content-widgets-wrapper .widget_categories ul li a:before,.content-widgets-wrapper .widget_archive ul li a:before,.content-widgets-wrapper .wp-block-categories li a:before,footer button.input-group-addon.zozo-mc.btn.btn-default,.cus-contact a:first-child,.pagination-single-inner > h6 > a:hover span.title,.happysmile-masonry .bottom-meta-wrap .post-meta li.post-share-wrap .social-share a:hover i,.post-share-wrap ul.social-share > li > a:hover > i,.team-style-classic-pro .team-designation,.pricing-style-classic.pricing-table-wrapper ul > li:before,.widget-content-bx a i,.widget-area-left .contact-widget-info > p a:hover,.widget-area-right .contact-widget-info > p a:hover,.testimonial-style-default .testimonial-inner::after,i.breadcrumb-delimiter,.sticky-head.header-sticky .header-navbar a.h-phone:hover,.contact-widget-info > p > span.bi,.pricing-style-classic.pricing-table-wrapper:hover ul li:before,.top-meta-wrap ul.nav.post-meta li a:hover,.custom-post-nav .prev-nav-link > a:hover h5,.custom-post-nav .next-nav-link > a:hover h5,.secondary-bar-inner .input-group-addon.zozo-mc.btn.btn-default,.blog-style-classic-pro .post-author a:hover > span.author-name,.contact-widget-info > p a:hover,.insta-footer-wrap .sub-title,.site-header .btn.btn-primary,.site-header .header-logobar .email-link:hover,.secondary-bar-active .secondary-bar-inner .widget-content .contact-widget-info p a:hover,.secondary-menu-toggle.happysmile-toggle:before,.happysmile-masonry .nav .post-more a,.blog-layouts-wrapper .post-more .read-more:focus,.service-style-default .service-inner .post-category:hover a,.team-style-classic-pro .team-social-wrap ul.social-icons > li > a,team-style-classic .team-inner .post-overlay-items .team-social-wrap .nav.social-icons li a:hover,.testimonial-wrapper.testimonial-style-default .owl-nav .owl-next:before,.testimonial-wrapper.testimonial-style-default .owl-nav .owl-prev:before,.testimonial-wrapper.testimonial-style-modern .testimonial-inner:after,.testimonial-style-list .testimonial-style-list-item .testimonial-thumb:before,.single-cea-testimonial .testimonial-info .testimonial-img:before,.custom-post-nav .prev-nav-link > a:hover > i:before,.custom-post-nav .next-nav-link > a:hover > i:before,.single .content-widgets .widget .menu-service-sidebar-menu-container ul > li.current-menu-item > a,.blog-layouts-wrapper .blog-multi-layout-3 .post-more .read-more,.blog-layouts-wrapper .blog-multi-layout-3 .post-category .before-icon,.blog-style-classic-pro .blog-inner .post-details-outer .post-category,.blog-style-classic-pro .blog-inner .post-details-outer .post-category a:hover,.site-footer .cus-footer-middle .input-group-addon.zozo-mc.btn.btn-default:hover,.content-widgets-wrapper .widget_categories ul li a:hover,.content-widgets-wrapper .widget_categories ul li a:focus,.content-widgets-wrapper .widget_categories ul li a:active,.content-widgets-wrapper .widget_archive ul li a:hover,.content-widgets-wrapper .widget_archive ul li a:focus,.content-widgets-wrapper .widget_archive ul li a:active,.wp-calendar-table #today,blockquote:before,.wp-block-quote.is-large:before,.wp-block-quote.is-style-large:before,.wp-block-quote.is-style-large:not(.is-style-plain):before,.wp-block-quote.has-text-align-right:before,.wp-block-quote:before,.site-footer .footer-contact.cus-footer-middle-2 .btn.btn-primary span,.team-style-classic-pro .team-inner .nav.bottom-meta-list .post-more .read-more:focus{color:#38bde0}.widget.widget_nav_menu li a:before,.happysmile-masonry .bottom-meta-wrap .post-meta li.post-share-wrap .social-share a:hover,.single-post ul.social-share > li > a:hover,.post-share-wrap ul.social-share > li > a,.wp-block-button.is-style-outline a.wp-block-button__link,.cea-tab-elementor-widget .cea-tabs > a.active .cea-tab-title{color:#38bde0 !important}.woocommerce-message,.woocommerce #content div.product .woocommerce-tabs ul.tabs,.woocommerce div.product .woocommerce-tabs ul.tabs,.woocommerce-page #content div.product .woocommerce-tabs ul.tabs,.woocommerce-page div.product .woocommerce-tabs ul.tabs,.contact-form-wrapper span.wpcf7-form-control-wrap input:focus,.contact-form-wrapper span.wpcf7-form-control-wrap select:focus,.contact-form-wrapper span.wpcf7-form-control-wrap textarea:focus,.single-post .comments-wrapper.section-inner input:focus,.single-post .comments-wrapper.section-inner textarea:focus,.modal-popup-body input.wpcf7-form-control:focus,.modal-popup-body textarea.wpcf7-form-control:focus,.wp-block-search__input:focus,.mailchimp-wrapper .input-group input#zozo-mc-email:focus,.single-cea-testimonial .testimonial-info img,.cus-float-img .float-parallax img,.comments-wrapper.section-inner input:focus,.comments-wrapper.section-inner textarea:focus,ul.nav.pagination.post-pagination > li > a,ul.nav.pagination.post-pagination > li > span,.comments-pagination.pagination .page-numbers,.team-wrapper.team-style-default .team-inner > .post-thumb img.img-fluid.rounded-circle,.testimonial-wrapper.testimonial-style-list .post-thumb img,.timeline > li:hover .timeline-panel,nav.post-nav-links .post-page-numbers,.first-widget-abt,.zozo-booking-form-wrap .bookly-form select:focus,.zozo-booking-form-wrap .bookly-form input[type="text"]:focus,.zozo-booking-form-wrap .bookly-form input[type="number"]:focus,.zozo-booking-form-wrap .bookly-form input[type="password"]:focus,.zozo-booking-form-wrap .bookly-form textarea:focus,.wp-block-button.is-style-outline a.wp-block-button__link,form.post-password-form input:focus,.elementor-element.border-left-cls:before,form.form-inline.search-form .input-group > *.form-control:focus,.site-header .btn.btn-primary,.wpcf7 form.sent .wpcf7-response-output,.secondary-bar-active .secondary-bar-wrapper .secondary-bar-inner input.wpcf7-form-control:focus,.secondary-bar-active .secondary-bar-wrapper .secondary-bar-inner textarea.wpcf7-form-control:focus,.error404 form.form-inline.search-form .input-group > *.form-control:focus,.team-style-classic-pro .team-social-wrap ul.social-icons,.single .content-widgets-wrapper .wp-block-search__input:focus,.single .content-widgets-wrapper .wp-block-search__button,.single .content-widgets .widget .menu-service-sidebar-menu-container ul > li.current-menu-item > a,.single .content-widgets .widget .menu-service-sidebar-menu-container ul > li > a:hover,.full-search-wrapper form.form-inline.search-form .form-control:focus,.single .content-widgets-wrapper input.wpcf7-form-control:focus,.single .content-widgets-wrapper .sidebar-form .wpcf7-form-control:focus,.cf-style-default .contact-us-form .wpcf7-form-control-wrap input.wpcf7-form-control:focus,.cf-style-default .contact-us-form .wpcf7-form-control-wrap textarea.wpcf7-form-control:focus,.site-footer .footer-contact.cus-footer-middle-2 .btn.btn-primary,.btn-primary.focus,.btn-primary:focus,footer button.input-group-addon.zozo-mc.btn.btn-default:focus,form.form-inline.search-form .input-group .input-group-btn button.btn,nav.post-nav-links .post-page-numbers,nav.post-nav-links .post-page-numbers.current,nav.post-nav-links .post-page-numbers.current:hover,.wp-block-button.is-style-outline a.wp-block-button__link,form.form-inline.search-form .input-group .input-group-btn button.btn.btn-outline-success,.widget_search .search-form .input-group .btn:focus,.widget_search .search-form .input-group .btn:hover,.widget_search .search-form .input-group .btn:active,.widget .tagcloud > a:hover,.widget .tagcloud > a:focus,.widget .tagcloud > a:active,.page .comments-wrapper.section-inner input:focus{border-color:#38bde0}.testimonial-wrapper.testimonial-style-default .owl-item .testimonial-inner,.full-search-wrapper form.form-inline.search-form .form-control:focus,input.wpcf7-form-control:focus,textarea.wpcf7-form-control:focus{border-bottom-color:#38bde0}.service-style-default .service-inner:before{border-right-color:rgba(56,189,224,0.3)}.timeline:before,.service-style-default .service-inner:hover:before{border-right-color:#38bde0}.cea-counter-wrapper.cea-counter-style-modern .counter-value > *{-webkit-text-stroke:1px #38bde0}.secondary-color,.widget-area-right .zozo_social_widget ul.nav.social-icons > li > a:hover,.secondary-menu-toggle.happysmile-toggle:hover:before,.happysmile-masonry > article .top-meta-wrap li.post-category a,.happysmile-content-wrap .post-category a,.happysmile-content-wrap aside.content-widgets-outer-wrapper .widget_search .wp-block-search__label,.elementor-widget-sidebar .elementor-widget-container .widget_search .wp-block-search__label,.team-style-classic .team-inner .post-overlay-items .team-social-wrap .nav.social-icons li a,.testimonial-wrapper.testimonial-style-default .owl-nav .owl-next:hover:before,.testimonial-wrapper.testimonial-style-default .owl-nav .owl-prev:hover:before,.owl-carousel .owl-nav .owl-next:hover:before,.owl-carousel .owl-nav .owl-prev:hover:before,.custom-post-nav a > *,.single .content-widgets-wrapper .widget_search .wp-block-search__label,.single-post blockquote cite a:hover,.single-post .comments-wrapper.section-inner input:hover{color:#05071c}.secondary-bg,.comments-pagination a.prev.page-numbers:hover > span:before,.comments-pagination a.next.page-numbers:hover > span:before,.single-post .comments-wrapper.section-inner input:hover,.service-style-classic .service-inner .post-thumb:before,.single-post .comments-wrapper.section-inner input.submit:hover,.comment-body .reply a.comment-reply-link:hover,.single-post .comments-wrapper.section-inner input.submit:hover,.page .comments-wrapper.section-inner input.submit:hover,.pagination .page-numbers.current:hover,.comments-pagination.pagination .page-numbers.current:hover,.comments-pagination.pagination .page-numbers.current:hover{background-color:#05071c}<br /><b>Warning</b>:Undefined variable $secondary_rgb in <b>/home/tzozothemes/wordpress.zozothemes.com/wp-content/plugins/happysmile-addon/admin/extension/theme-options/theme-options-css.php</b> on line <b>152</b><br />header.happysmile-page-header:after{background-color:rgba(,0.77)}.close:hover,.search-form .input-group .btn:hover,.full-search-wrapper,.elementor-widget-ceaposts .blog-style-classic-pro .blog-inner .post-date a:hover,.bottom-meta .post-more:hover:before{background-color:#05071c}.blog .happysmile-masonry .post-meta .post-more a:hover:before,.happysmile-masonry .bottom-meta-wrap .post-meta .post-more a:hover:before{background:linear-gradient(to top,#05071c 29%,rgba(56,189,224,0.11))}.zozo-booking-form-wrap .bookly-form select,select{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/icon-select.png)}.full-search-wrapper:before{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/full-search-1.png)}.cus-testimonial-page .testimonial-wrapper.testimonial-style-list .testimonial-inner .post-excerpt::before{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/left-quote-1.png)}.elementor-element.border-points:before{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/arrow-step.png)}.elementor-element.border-points:after{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/arrow-step-after.png)}.btn,button,.back-to-top,.header-navbar a.btn.btn-primary,.widget_search .search-form .input-group .btn,button.wp-block-search__button,.btn.bordered:hover,.close,button.wp-block-search__button,ul.nav.pagination.post-pagination > li > span,.comment-respond input[type="submit"],.wp-block-button__link,input[type="submit"],.button.button-primary,input[type=button],input[type="submit"],header .mini-cart-dropdown ul.cart-dropdown-menu > li.mini-view-cart a,.woocommerce #respond input#submit.alt,.woocommerce a.button.alt,.woocommerce button.button.alt,.woocommerce input.button.alt,a.zozo-woo-compare-ajax.zozo-btn,.mini-view-wishlist a,.mini-view-cart a,.woocommerce .woocommerce-error .button,.woocommerce .woocommerce-info .button,.woocommerce .woocommerce-message .button,.woocommerce-page .woocommerce-error .button,.woocommerce-page .woocommerce-info .button,.woocommerce-page .woocommerce-message .button,a.zozo-compare-close,a.zozo-sticky-cart-close,a.zozo-sticky-wishlist-close{color:#ffffff;background-color:#38bde0}.btn:hover,button:hover,.back-to-top:hover,.header-navbar a.btn.btn-primary:hover,.widget_search .search-form .input-group .btn:hover,button.wp-block-search__button:hover,.btn:focus,button:focus,.back-to-top:focus,.header-navbar a.btn.btn-primary:focus,.widget_search .search-form .input-group .btn:focus,button.wp-block-search__button:focus,.btn:active,button:active,.back-to-top:active,.header-navbar a.btn.btn-primary:active,.widget_search .search-form .input-group .btn:active,button.wp-block-search__button:active,.contact-form-wrapper input.wpcf7-form-control.wpcf7-submit:hover,input[type="submit"]:hover,header .mini-cart-dropdown ul.cart-dropdown-menu > li.mini-view-cart a:hover,nav.post-nav-links .post-page-numbers:hover,.wp-block-button__link:hover,.wp-block-button.is-style-outline a.wp-block-button__link:hover,.pagination-single-inner > h6 > a:hover span.arrow,ul.nav.pagination.post-pagination > li > a:hover,.woocommerce #respond input#submit.alt:hover,.woocommerce a.button.alt:hover,.woocommerce button.button.alt:hover,.woocommerce input.button.alt:hover,a.zozo-woo-compare-ajax.zozo-btn:hover,.mini-view-wishlist a:hover,.mini-view-cart a:hover,.woocommerce .woocommerce-error .button:hover,.woocommerce .woocommerce-info .button:hover,.woocommerce .woocommerce-message .button:hover,.woocommerce-page .woocommerce-error .button:hover,.woocommerce-page .woocommerce-info .button:hover,.woocommerce-page .woocommerce-message .button:hover,a.zozo-compare-close:hover,a.zozo-sticky-cart-close:hover,a.zozo-sticky-wishlist-close:hover{color:#ffffff;background-color:#05071c}.header-topbar a{color:#38bde0}.happysmile-content-wrap{padding-top:120px;padding-bottom:120px}@media only screen and ( max-width:1024px ){.header-mobilebar{display:flex}.site-header{display:none}}@media only screen and ( min-width:1025px ){.site-header{display:block}.header-mobilebar{display:none}}body{color:#666b68;font-family:Rethink Sans;font-weight:400;font-size:16px;line-height:28px}.lead{color:#313956;font-family:Rethink Sans}h1,.h1{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:68px;line-height:75px;letter-spacing:-1px}h2,.h2{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:56px;line-height:65px;letter-spacing:-1px}h3,.h3{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:42px;line-height:50px;letter-spacing:-1px}h4,.h4{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:30px;line-height:37px}h5,.h5{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:21px;line-height:30px}h6,.h6{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:13px;line-height:20px;letter-spacing:0}.site-header{font-family:Rethink Sans;font-weight:600}.site-header{border-top-width:2px;border-top-style:none;border-right-width:2px;border-right-style:none;border-bottom-width:2px;border-bottom-style:none;border-left-width:2px;border-left-style:none}.primary-menu .menu-item-has-children ul.sub-menu{background-color:rgb(255,255,255)}.primary-menu .menu-item-has-children ul.sub-menu li a{color:#05071c}.primary-menu .menu-item-has-children ul.sub-menu li a:hover{color:#38bde0}.primary-menu .menu-item-has-children ul.sub-menu li a:active,.primary-menu li.current-menu-parent > ul.sub-menu > li.current-menu-item > a,.primary-menu li.current-menu-parent > ul.sub-menu > li.current-menu-ancestor.current-menu-item > a,ul.wp-menu ul.sub-menu li.menu-item.current-menu-ancestor.menu-item-has-children > a{color:#38bde0}.header-topbar{font-family:Rethink Sans;font-weight:600;font-size:15px}.header-topbar{line-height:40px}.header-topbar{background-color:rgb(5,7,28)}.header-topbar{padding-right:35px;padding-left:35px}.header-topbar{border-bottom-width:1px;border-bottom-style:none;border-bottom-color:rgba(255,255,255,0.2)}.header-topbar a{color:#ffffff}.header-topbar a:hover{color:#38bde0}.header-topbar a:active,.header-topbar ul.wp-menu > li.current-menu-item > a,.header-topbar ul.nav.wp-menu > li.menu-item-has-children.current_page_parent > a,.header-topbar ul.nav.wp-menu > li.menu-item-has-children.current-menu-ancestor > a{color:#38bde0}.header-logobar{font-family:Rethink Sans;font-weight:600}.header-logobar{line-height:120px}.header-logobar{background-color:rgb(255,255,255)}.header-logobar{padding-top:0;padding-right:30px;padding-bottom:0;padding-left:30px}.header-navbar{font-family:Rethink Sans;font-weight:600;font-size:14px;line-height:30px;letter-spacing:1px;text-transform:uppercase}.header-navbar{line-height:80px}.header-sticky .header-navbar{line-height:80px}.header-navbar{background-color:rgba(255,255,255,0)}.header-navbar{padding-right:30px;padding-left:30px}.header-navbar{border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(255,255,255,0.13)}.header-navbar a{color:#ffffff}.header-navbar a:hover{color:#38bde0}.header-navbar a:active,.header-navbar ul.wp-menu > li.current-menu-item > a,.header-navbar ul.nav.wp-menu > li.menu-item-has-children.current-menu-ancestor > a{color:#38bde0}.sticky-head.header-sticky .header-navbar{background-color:rgb(255,255,255)}.sticky-head.header-sticky .header-navbar a{color:#05071c}.sticky-head.header-sticky .header-navbar a:hover{color:#38bde0}.sticky-head.header-sticky .header-navbar a:active,.sticky-head.header-sticky .header-navbar ul.wp-menu > li.current-menu-item > a,.sticky-head.header-sticky .header-navbar ul.nav.wp-menu > li.menu-item-has-children.current-menu-ancestor > a,.sticky-head.header-sticky .header-navbar a.active{color:#38bde0}img.site-logo{max-width:156px}img.sticky-logo{max-width:130px}img.mobile-logo{max-width:130px}.blog .page-title-wrap .page-title,.blog .page-title-wrap .breadcrumb li{color:#ffffff}.blog .page-title-wrap .page-subtitle{color:#38bde0}.blog .page-title-wrap .breadcrumb a{color:#ffffff}.blog .page-title-wrap .breadcrumb a:hover{color:#38bde0}.blog .page-title-wrap .breadcrumb a:active{color:#38bde0}.blog .happysmile-page-header{background-color:rgba(8 12 31 / 95%);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp);background-repeat:no-repeat;background-position:center top;background-size:cover}.blog .page-title-wrap{padding-top:325px;padding-bottom:70px}.archive .page-title-wrap .page-title,.archive .page-title-wrap .breadcrumb li,.search .page-title-wrap .page-title,.search .page-title-wrap .breadcrumb li{color:#ffffff}.archive .page-title-wrap .breadcrumb a,.search .page-title-wrap .breadcrumb a{color:#ffffff}.archive .page-title-wrap .breadcrumb a:hover,.search .page-title-wrap .breadcrumb a:hover{color:#38bde0}.archive .page-title-wrap .breadcrumb a:active,.search .page-title-wrap .breadcrumb a:active{color:#38bde0}.archive .happysmile-page-header,.search .happysmile-page-header{background-color:rgba(5,7,28,0.95);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp);background-position:center top;background-size:cover}.archive .page-title-wrap,.search .page-title-wrap{padding-top:325px;padding-bottom:70px}.single-post .page-title-wrap .page-title,.single-post .page-title-wrap .breadcrumb li,.single-product .page-title-wrap .page-title,.single-product .page-title-wrap .breadcrumb li,.doctors-directory-template-default .page-title-wrap .page-title,.doctors-directory-template-default .page-title-wrap .breadcrumb li{color:#ffffff}.single-post .page-title-wrap .page-subtitle,.single-product .page-title-wrap .page-subtitle,.doctors-directory-template-default .page-title-wrap .page-subtitle{color:#ffffff}.single-post .page-title-wrap .breadcrumb a,.single-product .page-title-wrap .breadcrumb a,.doctors-directory-template-default .page-title-wrap .breadcrumb a{color:#ffffff}.single-post .page-title-wrap .breadcrumb a:hover,.single-product .page-title-wrap .breadcrumb a:hover,.doctors-directory-template-default .breadcrumb a:hover{color:#38bde0}.single-post .page-title-wrap .breadcrumb a:active,.single-product .page-title-wrap .breadcrumb a:active,.doctors-directory-template-default .page-title-wrap .breadcrumb a:active{color:#38bde0}.single-post .happysmile-page-header,.single-product .happysmile-page-header,.single-product .happysmile-page-header,.doctors-directory-template-default .happysmile-page-header{background-color:rgba(5,7,28,0.95);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp);background-repeat:no-repeat;background-position:center top;background-size:cover}.single-post .page-title-wrap,.single-product .page-title-wrap,.doctors-directory-template-default .page-title-wrap{padding-top:325px;padding-bottom:70px}.page .page-title-wrap .page-title,.page .page-title-wrap .breadcrumb li,.error404 .page-title-wrap .page-title,.error404 .page-title-wrap .breadcrumb li{color:#ffffff}.page .page-title-wrap .page-subtitle,.error404 .page-title-wrap .page-subtitle{color:#ffffff}.page .page-title-wrap .breadcrumb a,.error404 .page-title-wrap .breadcrumb a{color:#ffffff}.page .page-title-wrap .breadcrumb a:hover,.error404 .page-title-wrap .breadcrumb a:hover{color:#38bde0}.page .page-title-wrap .breadcrumb a:active,.error404 .page-title-wrap .breadcrumb a:active{color:#38bde0}.page .happysmile-page-header,.error404 .happysmile-page-header{background-color:rgba(5,7,28,0.95);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp);background-repeat:no-repeat;background-position:center top;background-size:cover}.page .page-title-wrap,.error404 .page-title-wrap{padding-top:325px;padding-bottom:70px}.single[class*="single-cea-"] .page-title-wrap .page-title,.single[class*="single-cea-"] .page-title-wrap .breadcrumb li{color:#ffffff}.single[class*="single-cea-"] .page-title-wrap .page-subtitle{color:#ffffff}.single[class*="single-cea-"] .page-title-wrap .breadcrumb a{color:#ffffff}.single[class*="single-cea-"] .page-title-wrap .breadcrumb a:hover{color:#38bde0}.single[class*="single-cea-"] .page-title-wrap .breadcrumb a:active{color:#38bde0}.single[class*="single-cea-"] .happysmile-page-header{background-color:rgba(5,7,28,0.95);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp)}.single[class*="single-cea-"] .page-title-wrap{padding-top:325px;padding-bottom:70px}.single.single-cea-service .page-title-wrap .page-title,.single-cea-service .page-title-wrap .breadcrumb li{color:#ffffff}.single.single-cea-service .happysmile-page-header{background-color:rgb(18,14,53)}.single.single-cea-team .page-title-wrap .page-title,.single-cea-team .page-title-wrap .breadcrumb li{color:#ffffff}.single.single-cea-team .happysmile-page-header{background-color:rgb(18,14,53);background-repeat:no-repeat;background-position:center center;background-size:cover}.single.single-cea-testimonial .happysmile-page-header{background-color:rgb(18,14,53);background-repeat:no-repeat;background-position:center center;background-size:cover}.single.single-cea-portfolio .happysmile-page-header{background-color:rgb(18,14,53);background-repeat:no-repeat;background-position:center center;background-size:cover}.single.single-cea-event .happysmile-page-header{background-color:rgb(18,14,53)}.site-footer{color:#c8d1cf}.site-footer{background-color:rgb(5,7,28);background-repeat:no-repeat;background-position:left top}.site-footer{margin-top:0;margin-right:0;margin-bottom:0;margin-left:0}.insta-footer-wrap{color:#c8d1cf}.insta-footer-wrap{background-color:rgb(5,7,28);background-repeat:no-repeat;background-position:left center}.insta-footer-wrap{padding-top:70px;padding-right:48px;padding-bottom:0;padding-left:48px}.insta-footer-wrap a{color:#ffffff}.footer-widgets-wrap{color:#c8d1cf;font-size:16px;line-height:30px}.footer-widgets-wrap{background-color:rgb(5,7,28);background-repeat:no-repeat;background-position:left bottom;background-size:inherit}.footer-widgets-wrap{padding-top:100px;padding-bottom:100px}.footer-widgets-wrap{border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(255,255,255,0.12)}.footer-widgets-wrap a{color:#c8d1cf}.footer-widgets-wrap a:hover{color:#38bde0}.footer-widgets-wrap a:active{color:#38bde0}.footer-bottom-wrap{color:#c8d1cf;font-size:16px;line-height:30px}.footer-bottom-wrap{background-color:rgb(5,7,28)}.footer-bottom-wrap{padding-top:25px;padding-bottom:25px}.footer-bottom-wrap{margin-top:0;margin-right:0;margin-bottom:0;margin-left:0}.footer-bottom-wrap a{color:#38bde0}.footer-bottom-wrap a:hover{color:#ffffff}.footer-bottom-wrap a:active{color:#ffffff}.secondary-bar-wrapper{background:linear-gradient(90deg,#38bde0 0,#05071c 100%)}.page-load-initiate .page-loader:before,.page-load-end .page-loader:before,.page-load-initiate .page-loader:after,.page-load-end .page-loader:after{background:linear-gradient(90deg,#38bde0 0,#05071c 100%);background:-webkit-gradient(linear,left top,right top,from(#05071c),to(#38bde0));background:-webkit-linear-gradient(left,#05071c 0,#38bde0 100%);background:-o-linear-gradient(left,#05071c 0,#38bde0 100%);background:linear-gradient(to right,#05071c 0,#38bde0 100%)}.secondary-bar-inner{width:450px}.secondary-bar-wrapper.from-left .secondary-bar-inner{left:-450px}.secondary-bar-wrapper.from-right .secondary-bar-inner{right:-450px}\n/* Happysmile Post Options Styles */\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n'
        }}
      />
      <link
        rel="stylesheet"
        id="happysmile-woo-style-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/css/woo-styles.css?ver=1.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="simple-line-icons-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/doctors-directory/assets/css/simple-line-icons.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="dd-style-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/doctors-directory/assets/css/style.css?ver=1.0.0"
        media="all"
      />
      <style
        id="dd-style-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n\t\t\t\t\t.dd-container{\n\t\t\t\t\t\tmax-width: 1200px;\n\t\t\t\t\t}\n"
        }}
      />
      <link
        rel="stylesheet"
        id="elementor-icons-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.32.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="swiper-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-swiper-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-5-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/elementor/css/post-5.css?ver=1716549008"
        media="all"
      />
      <link
        rel="stylesheet"
        id="font-awesome-5-all-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="font-awesome-4-shim-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-animation-fadeInUp-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="widget-image-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-animation-fadeIn-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="widget-icon-list-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-animation-fadeInRight-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInRight.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-animation-slideInUp-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/animations/styles/slideInUp.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-animation-slideInDown-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/animations/styles/slideInDown.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="magnific-popup-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/magnific-popup.min.css?ver=1.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-animation-slideInRight-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/animations/styles/slideInRight.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-animation-zoomIn-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/animations/styles/zoomIn.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="widget-text-editor-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="e-animation-slideInLeft-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/animations/styles/slideInLeft.min.css?ver=3.25.8"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-73397-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/elementor/css/post-73397.css?ver=1728100390"
        media="all"
      />
      <link
        rel="stylesheet"
        id="google-fonts-1-css"
        href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap&ver=6.7"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-shared-2-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/bootstrap-icons.css?ver=1.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-bootstrap-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/bootstrap-icons.css?ver=1.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-shared-0-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-fa-solid-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3"
        media="all"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        rel="https://api.w.org/"
        href="https://wordpress.zozothemes.com/happysmile/wp-json/"
      />
      <link
        rel="alternate"
        title="JSON"
        type="application/json"
        href="https://wordpress.zozothemes.com/happysmile/wp-json/wp/v2/pages/73397"
      />
      <link
        rel="EditURI"
        type="application/rsd+xml"
        title="RSD"
        href="https://wordpress.zozothemes.com/happysmile/xmlrpc.php?rsd"
      />
      <meta name="generator" content="WordPress 6.7" />
      <meta name="generator" content="WooCommerce 9.4.2" />
      <link rel="canonical" href="https://wordpress.zozothemes.com/happysmile/" />
      <link rel="shortlink" href="https://wordpress.zozothemes.com/happysmile/" />
      <link
        rel="alternate"
        title="oEmbed (JSON)"
        type="application/json+oembed"
        href="https://wordpress.zozothemes.com/happysmile/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwordpress.zozothemes.com%2Fhappysmile%2F"
      />
      <link
        rel="alternate"
        title="oEmbed (XML)"
        type="text/xml+oembed"
        href="https://wordpress.zozothemes.com/happysmile/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwordpress.zozothemes.com%2Fhappysmile%2F&format=xml"
      />
      <noscript>
        &lt;style&gt;.woocommerce-product-gallery{"{"} opacity: 1 !important; {"}"}
        &lt;/style&gt;
      </noscript>
      <meta
        name="generator"
        content="Elementor 3.25.8; features: additional_custom_breakpoints, e_optimized_control_loading; settings: css_print_method-external, google_font-enabled, font_display-swap"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 1024px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 640px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"
        }}
      />
      <meta
        name="generator"
        content="Powered by Slider Revolution 6.7.20 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface."
      />
      <style
        className="wp-fonts-local"
        dangerouslySetInnerHTML={{
          __html:
            "\n@font-face{font-family:Inter;font-style:normal;font-weight:300 900;font-display:fallback;src:url('https://wordpress.zozothemes.com/happysmile/wp-content/plugins/woocommerce/assets/fonts/Inter-VariableFont_slnt,wght.woff2') format('woff2');font-stretch:normal;}\n@font-face{font-family:Cardo;font-style:normal;font-weight:400;font-display:fallback;src:url('https://wordpress.zozothemes.com/happysmile/wp-content/plugins/woocommerce/assets/fonts/cardo_normal_400.woff2') format('woff2');}\n"
        }}
      />
      <link
        rel="icon"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/fav-icon-80x80.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/fav-icon.png"
        sizes="192x192"
      />
      <link
        rel="apple-touch-icon"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/fav-icon.png"
      />
      <meta
        name="msapplication-TileImage"
        content="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/fav-icon.png"
      />
      <style
        id="wp-custom-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t.single-doctors-directory .page-title-bar {\n    padding-top: 325px;\n    padding-bottom: 70px;\n}\t\t"
        }}
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Rethink+Sans:400,,600&amp;subset="
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n"
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: "" }} />

      <style dangerouslySetInnerHTML={{ __html: "" }} />
      <style dangerouslySetInnerHTML={{ __html: "" }} />
      <style dangerouslySetInnerHTML={{ __html: "" }} />
      <style dangerouslySetInnerHTML={{ __html: "" }} />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '@font-face {\n\tfont-family: "wticons";\n\tfont-display: block;\n\tsrc: url(data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAB0oAAsAAAAAN9gAABzVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIlCBmAAjEIKyES7NwE2AiQDglALgSoABCAFhAoHhWob2C91BGwcgBDmb+eICk5vFKVis5b9/1+SG2NEiUg9BK2txZLRkJaG0CIWnaG5MDWJeUSj/RuuU69+E8k63elDli8+/lh7hhiq4o3ksr+iSUpfrt0fU+QMcIfJ7Hkg9qu9/3cPMa26oicqTcQTFjURMsN0kmii2XTResvYnBd5VRDluwNgeNrmvwta8I42KQkLEaygLQzKGnMYc9OtdRnGKsxVORfdLjrdDzIAAGYGuyZh1XRz+f3aqM3FUoTESqxA4rA2/1sz1V8XJTvUgaUAOwQsCADd/Nq5SD1Kr7cZjXedsGFsbxDLZNhmqtP7+sOUNmYrpcwyCJ4YJE6IfzsRYP+/X8tiUbTaJLTHf9763MH0sYkkJiXgHSIhrqWNiDZSpJI6IWR6ZP7nTJseUoZ05O5NKCKLSv6fprv85Oj3qHBEGacHhENPoIBk2lFhkIywHaKaMHt+coqMZm3HOlXEIPUGUzwlos+OMfffSWuIo22IRoiKeC2k8f6MQAZkt88IgD1mVjxVNU1dDswMrsw5A/EvBuCwMZiZHB+0azQI5VQEfH9ItMNhPSdf+s0ruBK0hdrQHW4MP8F/2STyIvIR5UfzPLAMi9fCAkExnIdNELxiJg76TFhzNyJiThIUzXAtaSvS3BoWsJW3sFOpSsxGmd30NnFSyyZ2ghPKf5RFMAg2Z9C8RIEXVZHcBUlmDiBjGLOR4DtmtiCOaBIgP3FQJY8R5jhXrRmR8SHfYjVHSG4Fy0NYRZDeT1ykXLVpDPBy7RCbQeGn/tx9/rFv/eyqWnWpn4qsbaV9JBbjSWt6XjMa3bwhK919RfvmdUnR8x0huWPmFLS9djG+kdNaubWbIozWhTG1/M3PjKWEYTMnsYpmQxxSTWbJ5jPg6onpYTwuWGT6umXuoEaZsb7Pp8x4FbNrxuDGJxOkRLiagrRfY7xMWgbC3CTmqws6knyPWKazZglrREoXx2RqcQTiukmLrq4ZyAoadiIClnuYnKzldw87ysMiZh5GrLh9VgxvP7eO/Un5w3UENV8V1nD3QRHqoMS4gvndjUuCfN8q+bgXXDjG8+c4sJrTymxkVluQCVTxLIME8B2/OUid2gDzecLqYe1+3IiGiwNM8/1d7PbZ4RvZLa3NDiHjSGsLMhXxArd1r/3two3C1fsRv41ZkabGlXpLfBR2DibMKDc+u7ZRo06DFh2i4a3giQKwPxq+xIPN9wffQSwIQciJ8F/QNlY94m3l2yP/AQNRvYM7AtkvAQVABLjmBofCivypoIi9m73GFuB9VTQ4BJwQY8NOmrTo1K3XpAVb23s8yntFHa0HTVvadoo/G8io0aLG8gXXg/BjneqV+GrVrE3OXocWMXdx4gFMlA67FNkpU2WWOMne9szUUZ1bzopZLncaceBRKh+/gKCQ8Hx3VExcQtJKfpEzsnLyCopKyiqqauoamlraOrp6+gaGRsYmpmYg2MHP0NRZX9L+hoZOkhtEvW2xxkVG39bl8O8vq0olTpAt5PR4uVW7BOf2gRfoOl0oD9GECnSiEvWoQglQjXbUdLfKOvDNYOEAbejozqmMqu3u9tCBXrRgEDFgCI0YRhwYQQYYRR4YQwPGUQpMoByTKAKmUYEZlGEWVZhDCphHAlhADZaQBZZRCKwgDawiCayhGuuowwZuAZuoxVZLMdgGaCMwR4KQYCQECUXCkHAkAolEopBoJAaJReKQeCQBSUSSkGQkBUlF0pB0JAPJRLKQbCQHyUXykHykAClEipBipAQpRcqQcqQCqUSqkGqkBqlF6pB6hcLjM/GMpxz2c0/IQH4N3YcEo80DIJdwm1kY8EUALwXSjbwEGyYUOAkXm5q7sJuzvUzs7Ik/U7zrvjsPbCG0MK1OCBzrRAf6Yh6C0YYd+u5mLq1KqVT6oF6bmLSrNYtvXhkuBAWllPkP3R1WS4GUWgv71hDhdNyMpo2Zw2yhMcty2AYyi7fVtPX6PXq9WliI/mr3g5Iy8z92OyjQtFEBkjUDjGgHKN76NO+rLX4+/7me+3Tuy+z9Fqh22zSbSDaOqye/m18fyYe/6N8eS3H0DRhHwKVhOCqbTdNuq1ZLNxowFA35fMjIDThXcNxiPS7MI4SLb1GH/JcMFrkoUC1KseCuu4jiS4O0BRg60DjDd7Izu0EsPZ3lF7KMThJBBqU7cEp9fSytJW28IxnzNaTU+73pVCZgN0RSGZYhPJlJpXO7qSJDukuwPTy37yNOaF3HEFasYMgfU/y77TzPP1bib7cZKOXvNe0reoJVvsC6puqEcDsyjMtoGKb1BC5iU5UOJT0jCcYskk4YDKpD8gdCO0xTl8jLmCrqkAk3dVXTiawSLpPnqtJNlZ4e7AITAf9+ThtqxqGBSWLaO1jVTInVF6rmrElhJbBayIJg1HG3ub5grr/D18dxBDhgKjDiGM0MML/Rwlg3einWLx8iNBSlEYY0ko9eXQH8+xMNpTz+7biqEGJKiOFc/UF34YZnjsgWs/lOx3r9Xu2vVja81im7quuezSNm4ovj0fhXrL+7n3+p5Qm46IR5JE+EWSfpbS+Je2JQ1rMYiidJR4upYf9Ii9InWsgQoTTsIwinzJQIHapx3TiN+ACeJ6Tj5E+VAfAM7HkWCI6GYG1tURipPA/j7AIILfiBYmLEJW4Uub1IuoCJOdV61hZI8YkYu1GAESpO7TiHeELSYXiRhW5QXhnrf+S/5n+4yZUCRiiePQpzMnos2QW35lJlomtblNWhjEwMotNinUcIA0EFYgTZJYThfZFnIrfzLK1AmAuXcBRLxggSdBGQoc6jC4EaHspUGY6I8d2wWBBvqmiCKucgTq4A72Y9QjdaefNNEdNc1NeFmvTWVARxflzMhviAAmnKL/QU7vbEnvLsMYzjnZAYyXfmb93ucp1kXAlqawULW1/1jIV+GZB67UDLQgpvgkEU+3U/RhAaZS1CaFS+U6I+N+qLSiYtszIF3BHjpu3SCz+u+/We2O8p9NwdW6Do0q3ORmWCOpljvRsjC8FyvBSjwXDWQoVpRjId6QPPLiJh466lzUkrrGOZVKsjFAqDSDqURVdI7fEnVBubCybyvQ3W14UAbvc8xNS0bBieuNZ5rbdBmwmhcQaywMVxlJ2Al3i520PJwnFhsajLNUPeXc33FEaKHkRA0m0hlkzFYehZv1B40MhfsS7BkYs/7qRWgdw2gcQqMUsqU3zvRqs98uaMgh/T6NJ5cISRrD7nWiPrJAGpTFyZEh+y54loc7jR/RdvYfOdvnT66lKgzVtHlYYL+peH8tG06rLqLtf/f8rXUx48sdkzwfqX7NTptd+oareJ+XVS/XfisjVTB5ZWhGTnzt3/TX4/vc99LpnKVvIUFi7ISUnWxJoe0N0OHBzpGM+yM5OPD/5g0JHOi4DdwmldA5S8pCt0ttWIbg0jsm6WNCD2xJZSbkOHUhYz1sg4IVAukANOUU+wpWZ+bd4drU8F9IF89CvJcLuI/lChGrHOSI0PXeyE3F10nHXXsBQI1vZjRDjKAKRRhpuJdqYlpVwLGMpGQ7da0MD4o217iewyER6gVonX/l59TQLzL5JvxzXooBYvvwf1v/lXZqu/EtMea/uPPa43Nb9PqT0WrsJgJEM8SNsDIq7U9RQll/Xdyp5Mfph8unbnirnubpSorwoXmpXA5o5QIRq1MJTuvGnSwNgVVv4KnIlvdnNbRvM6ig7Nd/W57qmqOYAEPyGrhJg6AD7yQkj7dhtKgc8E/bLgA4LwZWDO8IhA2U5+SeyiBwGfhQ6jQb3LuY0dL9UNcb+94TPb++Dni98Yj9//pn95+xDJ5jpUlce+hcth8fvp330oaFcO5AxNLTp7jQ+s+Afan0HE2XR2AKXYS3LOhIKsIDbuC/W20FDXlC+4VRf0wpdLk6lvFrxY1F6z782Ur2c8gD82NumF8lOjp6w9zgHVTTtRaCp7kpUz+e3CZFxhyoMVk18ufdsYdUQ3GlO8qSleIewr+W9WfD3jok1UrVYmXRDIThZFuhwfa48n46gMMdbW488nnyJrhpF+1cOt9UVMan74+kQRx4SYCLFnkzwUGe3oPqq8EWI6XVybMJ9jOreYXcinst687BpOp4lF1fHzGBELKlOWsBl8ZIHXJvKryhqV78zX6r1+e4KGTqg78Aa/TAwvYRGrmnaKFd3ITIyVx8knxlsWHGWICRCIpDDlYh/lwMQBV6tsQ7SvtploRWxwx0tJDJuIlsFg7S1Hgy3A0sHKX4Fh09ByGGTcZdAusPkgGUPUxbpT9mNLwB7YUTfv5Fs9efHWZTZGNYhyYVkUdibP42mYSYt2LK/9lsOgvvtL//INIl2FECGsE9RxDyoyKNWQRl8UBzsIBO1HBHJvgDm82R45QdJvsudMUObHCr9HDdy0Czjf7F48WvMRNwZTN5U2LtI1U1aXcVQBsG3wUSvhfxMYQoqzw7NCQ7PCLLvCskMzs964sJ0OBK4dwrJ3hVlCs7JCs8NHfSpemXrWnGA+m7qyeJ6/LSw9bfTotLkOPC49bFcu6xL8zNHm/EyNewIUWGn02rp6Q32dHtSha+eEmTDHzi24HDj7Rv0mZWKz91yDeaI7d7ItfgAQPnky17umhrp2xg1zwHJ5gWJjUu/ExN7JmdbadfxF7VW7d6/Rd/50P7xdzZm7Ea1EDbGQKRTUGNeubXz86PHjBjC8eObMzwcOzF/wPwge+amid8n7NHUqwBdElySWtCa0+uCXanV8nL9l+X2mrd8m3jVdqw7Ia6JL+LhPa0JbSUFC7qDCLl1buY83Gh4/fvJ4BHg8GQFLEjx5Ah5POux7dnaLg+9NR6wROeHhORHWwwTacU64NeIwo0vcbCaiXeaEzRapNveHVtoa2//IlWpbE9LBfS6Fv1683pl/Cx8hHoFfczrbxFHizp2+wi7NyWsUhcBBnYyurdiZ61Jjof0BmHlCqApoDDDOmPGOMEPbSOqeMyZTE8PIeNcjwhb1ms/ulNOIG1g1StYG9355duc1HWsjlG9gA4n5ii8VLFGVbNlaP4CnNw2M7RXtcsW44572ihG4YGsHD4oF1ONU+uC0SaGJW7bgEvyiXBO53xFslhuNcnNwB4EKFEaFuQNYYWIIBaGwm9wUbJ5UUivOqnI69U6TucoyyORMd3KyysdICARMSyQOUxBm2mYNOPasBjErNW2U8glpKRFLI8wpE6jlrQH/bO3N3ZE73HgoY+Je/63/BDz1p231t9rrQ/tbRFN6tXml0ChFH8HdO+5GFOpeHxlfJIUd9zS2pd6c3JIO2va/h3kn8hP7ukcLu2rykvtRRtnIzgXnl/4+m6SCsIMVvckYU93kP3tQndW7/193Dyqpl/E8DlSzWj4qDnAuchIuRYJf27ITt/7cCicotgHKh1/efTygAKWTIKaUGBbAk2QqCSQizNT5kBAGlqTgDIg1mdQV81CdTiQRA2f5DhTRanAURslRCJRZMIaLft/6MkI4JJOZWJFqTAhH4hw0iIRCMMBgwi4jDssivCNiWGINpoVVURCEwgQyMXVADBSEYzgBxkT66ChpcUpxACARxgfIh+eOyO0jR4p6ZbtJPv55LPQHa2Txn3xhPelgNgS1SFuCGr5RDuAHWKH9KG6FSU+izMX9eVYebsPJmcHccVxq9EsSNkI2HCO9jKZTLuAHmAfrthSpmHgqN9Wb6R3IDXRyrVy67DXJG2GF8UIp0xgd1JGEMO4OhaqJY/D+3BYMKQ1IUuL0aZfyFTTWCFl90HBmb1IHGYsA7ztY7LFpRSk9XIbGErabtFuJ2c38X/RQu/ymS3gQsZpbvCOtf1pR3+fUuiHawcLBOlFFH8mYwpv7mrt5App3AD/XLBlu0F/Lm9tckT9t/OkBxfx1rbHDofixGOo2RSPBNAqdE96fCVnSe2t0ujzKfKDHyls2Tu8xti4ZMWiZ1E3TPXXLWkTMknsxxqaiDDoeIh/8nsN8eqPs1Ewj6HtoT/mUoZMg8p21vaejd2MG7q8fe7VP0q+4jHyJUIQzWT48OpUmKzA2l461hI9bYgbyE6GVxysbc4Q5f8zCS8K40HJXl8USB+riYqfWpdZl1aXUdafdtrmMNR7es6tI/FHmUMoBRQ3a6Nv43Acqgvs2dnc3Rv824P2WUePv1TD0XoYo28nWy0xzBA6URItEgpXnNcIcPIOaxzLuPWppmjLB2P/qQ2+KxdQ8dPuOk3WhzzZBH0X8VVK7b6OuX3qSlg+h/iXUfAQkcAx51l17LnZuRodBcKnIxi2/ot/89F3t7htHB5fWOBoGlJGpCMmeSWMzoCRZRsVkIh8/3Nie8IOeDVnr2/DVj6bV33k2UVxb4TBGVyUl+Kp5TE7UuoWC9NQZ1TMWrVGXrcibW7r97EDX4lljJ55lZgimUJphrGedjqVnpU8aqO2XktJPOxAmcHDBZpDgqleVJoFCgTUwZ8LfmOz+plPgfyyxc9vsvQ9enT//6kHH0m3ticf8A32JyLZjCPFaf43K7lBphDcXTLkp0thVH1FNeCKRf/zDhz9dz/7MobYriInENoH/tsR2+SW66G5DDC8rNFwTIWcG/KiUuaSF06cXSl2yiwQCd+fSQpnrIkd82QVXT8/YsV5en16dak9RsHYSXcK4TtfQAaNHX2dIGPU8ja5hANbhNIaE/jFQh+ZCBISSVYkh8NQRMAGmG1ZgSNOsSqKoHHbD3iOcSSIOUkgMKkwMYle5sh0GfFk1bPHfHE3OXzFb7DF4ggMCU7oEsYKu5MDWZ8ZdeCMzltmIb9s8XwtNm/SCrpTAt7zFVPVSzlYi/8hktzpYW0+Nm8meiwrWzxqjiZdOcpEC+sIklDHOkooThLlEoYtJRJkD7VaRzJa/KnbVnf6rvFcBSvJucPrmSCJWRUhyQGFKRK5Smes2ILZkp1MB1cg8rRwzFw/RCvTCrMKs0PTQkPDI2goCDi46tDBLL9QKiodg5v3CDSkbhCC2TCnTBwVOeOk9Vmo56sBfyJcTAoP0WXrzyOhWUXReyvLzj5lBeos+ff2WvJRoUWv0SLO+43VyazLN4+X28gD/sN/CJZ/xW/ijxQNm/wwSO4qjthqLHWLj2bDeRGEZ4ka8h9vbb4iwgCAxyqrqkY1zLv+fjvLMrT6I6rgAnpuXS2EtxMjSxmDs+J3f/odV0Mj+AMYm82EEnrcDYgLlAFDsfmh5OmXjjBmMHYzFMyZuO4Yyl4jLeoLI1H//XVbUF4LGcUxDE0NZobeqf1tNCoNcblCYrOnhxjH/lqahW7Bi6b9jwo3pVliSGwxykwKo51fW5tQ+zI48r1wx8c5ts1ZarURf67psh1bWLsPysZyQYxmldIh1OrFDmZpSnWPCKrH2XpwpZ62YqhQ7dDpHmL1i89fZowUjOxtSGjpHCqKxzv1tNTLPup9RNrEs48t9UWRCXGlZfC2BXsiESNF9UH7jSfZuOUaWh91oq8gZfB8vfhgLkaKor447S8BCQztF3cRejvJ2THJFKrR1lJg6Fg0VLJtRqw6mPxpOlA1BBiP4tFKjiKuqIIVUJN5b3sjqQrGMOfk7lvuOh5GlPufnOJLJV7H8K3KIGNl9f09FT8BloY2uLgbvAF8BUDJIOm8lvh8iwxojX5s28y62AQ/ly6b+kaepDepGDB/ujrerEvM1GXz7iBEFfulqZ6LKGlsyDGbiy27zPOH04rmvt1oRvcIYzNczHY6rpVwvY6X4aAwiK5OAX10ReUraIyI2qQDBMmg9SFpuWshguD5bsuRSRA4nk5dbFqHMy1PeUXVHynM83MwFWZsOqewLVNd+YOycZENYTObEDBqickl/f2CUkTpIzaRWIqOMfsslFaK0jMyJMWEGU7OFYjOFR3sSW2fTQZKa6U0PyMyI35gv9skbNcHLFUV3Daoa7LPLLM6Iz2RirAz1WVzAHzShaAhfuCQjLhO/tPRjTic32j7tYm27xTVNggMp9HaAgy/PnKkcomVrh1R2yjpLSl6x2mRtrPflJZ0yp6xzZfurEkg4c0aEix8S78Wl78BIQ2DjrdnZt7obYvyWWfYrPaDp+9RBj8dtL2XrIvMg9vLY5KrEyj5JVcl/qpMrk25BStWflGoBgJ35pyq5z8R8cnVkMKxGdA9xgpiAP9TDo5HA+o8nKsnRIWqU7yVBgzQEtVIIwkXFWu/lEHwssBaiuXRKnA0bUH8jnAdjVnNiOKJxvkIvl+tz5Qa9TBFgUusTwWowqI/+kf6hfoQyrNRoCswkZIBAVhUBTsn4QSCvUv9R/0k/MiBLOpiX6+sKStyRflEaFC08Zngocn3kfuKSOM0k/eI4JJgBIw1NQ9xxJTExJXHuZwRCJV/XHT9jXrP2wXaH3b7sr+MvQDumT3hf653mZTKX7+64ysoUMSElPzFIg5W7ZyNESRbVwU4/f6xn88I5abOufcR8s3uvm3L8xKmmMHgp+F8dvyq6Yvk6e//0ZCsfJtLdFAsDYSVIjUTrqT0PO68QWgDL/Ur/7FRx1XTl6T/No2zYy6ODh9Y4WgbWUGgoOT+bzmEwk3hFwyYTfdSP2xYl/BzdB3I2bGTuftTe/PbpJM3UCofJVJWd4Kfhs7jR+1pEWdaZo2cu2q0u2+aeO2THnQkDNs0eO+89M1s0jboUYpbsMbLNnKzKl2flyp5Cp8C+wAz80ZGTH3a+qR/pwBUP+EnrI3okZEO+RfSkA/4YRIWP5EBb4dHJlZBoGAZ/Qhjx8BSe3o7YgFwPNQfZEGE2fApOB/IY0qG/jhCBzEDqUh+Ar3Wgq44mqFCpCgfPQxgej34f8hRS58G/dHV+S7bDq/T+yCkgl8K3RnfBQzz/6e8gCSRhCSybIkRWJGdC3gyFdyP30y4jC6pUAiMqpUdugW+QZUh/8jy0nxyHBAY9Q9qy4TOIymOaXKnzQh0Zvqv+u/H8wPlZfVm9vJN+kmnIG4CgYsrzwxM3Sn1p8SVkAAMwVOnJv/FMHg+/wb+7RjkWTQj7woWki+tF1hR5DWhvlfWgnZCs0jPJrSn8SU3DVdFqfxx+ZQgA4IBkgAE8DACg0nQAPJCKgdO3IBUCJGEO/D09mnRQIK4MBerKCSYAGvAPJgISkAdTQShQnpgGWKAIIABCKQACDNC/p4BdRysQ10YF6tocTABcsDqYCBhgfzAV5IOz50IDMsjv5jQYpvKBvkaQkWp9pB+UEpiaE6WKeRK3SCigaJvhpCmdP1V1jRNOzQ2TYozcZOE/NHrYquazo4hK3jt3aDgNeg2GqXygrxGE30BC+INSCDXcvebk8DhfccuRSHhQtNrhJC5fOn+qVOuasLJwam7kKEEUCeI5l/n8HxqiP2wl+Hx2RDtyotxhxdHJPrkHo1HftpOGxAjESZAkRfqfnT93R54CRUqCKMmKqumGadmO6/lBGMVJmuVFWdVN2/XDOM3Luu3Hed3P+/3lFZVV1TW1dfUNjU3NLa1t7R2dXd0hBhKM4Uo6A9auGxD7gSX845WAnzdQKsQ506IZLceCzwQxLuxNdMI0azhPliI6LcOGkli0rFju6TL7EudQhGUexxnILjpEOwQz2nAhRrRXIuh8aaSfdYHsvGMpwtqsD04XvcDkiT3Pbc/hdz54YsHZQI5XIjpVjGdjNozkdrhF/IGGU0KyoIGpbGaoP+A15fYDewmKcxmK4kwOtJAFU6hpbVP8ChVCXEns8qbGuCMF7dFT8K0esOgSq84aXqUX/qzeY9FCOy9oWgouyDx+VaRo7UXnhc0IdbMgKWUbvB5DyhHLYkHVQL4slJYl3dKiVmUJEJe+KYakgrfzlaLkSz7bg9D6L4vVSnhRVZnIMWCwiihLfEBF8O+KF7VGPiWdbKJ3yRk69+TXjRfXvl0EAAAA) format("woff2");\n}\n\n.wticons {\n\tline-height: 1;\n}\n\n.wticons:before {\n\tfont-family: wticons !important;\n\tfont-style: normal;\n\tfont-weight: normal !important;\n\tvertical-align: top;\n}\n\n.wticon-account:before {\n\tcontent: "\\f101";\n}\n.wticon-add:before {\n\tcontent: "\\f102";\n}\n.wticon-cardResizeDrag:before {\n\tcontent: "\\f103";\n}\n.wticon-casual:before {\n\tcontent: "\\f104";\n}\n.wticon-check:before {\n\tcontent: "\\f105";\n}\n.wticon-checkSmall:before {\n\tcontent: "\\f106";\n}\n.wticon-chevron:before {\n\tcontent: "\\f107";\n}\n.wticon-copy:before {\n\tcontent: "\\f108";\n}\n.wticon-copySmall:before {\n\tcontent: "\\f109";\n}\n.wticon-dismiss:before {\n\tcontent: "\\f10a";\n}\n.wticon-downChevron:before {\n\tcontent: "\\f10b";\n}\n.wticon-error:before {\n\tcontent: "\\f10c";\n}\n.wticon-expand:before {\n\tcontent: "\\f10d";\n}\n.wticon-feedback:before {\n\tcontent: "\\f10e";\n}\n.wticon-filledDownArrow:before {\n\tcontent: "\\f10f";\n}\n.wticon-find:before {\n\tcontent: "\\f110";\n}\n.wticon-formal:before {\n\tcontent: "\\f111";\n}\n.wticon-gift:before {\n\tcontent: "\\f112";\n}\n.wticon-grayLogo:before {\n\tcontent: "\\f113";\n}\n.wticon-grayW:before {\n\tcontent: "\\f114";\n}\n.wticon-ignore:before {\n\tcontent: "\\f115";\n}\n.wticon-info:before {\n\tcontent: "\\f116";\n}\n.wticon-leftChevron:before {\n\tcontent: "\\f117";\n}\n.wticon-logo:before {\n\tcontent: "\\f118";\n}\n.wticon-love:before {\n\tcontent: "\\f119";\n}\n.wticon-noRecommendations:before {\n\tcontent: "\\f11a";\n}\n.wticon-paragraphRewrite:before {\n\tcontent: "\\f11b";\n}\n.wticon-paste:before {\n\tcontent: "\\f11c";\n}\n.wticon-pin:before {\n\tcontent: "\\f11d";\n}\n.wticon-premium:before {\n\tcontent: "\\f11e";\n}\n.wticon-premiumDetail:before {\n\tcontent: "\\f11f";\n}\n.wticon-premiumFull:before {\n\tcontent: "\\f120";\n}\n.wticon-recommendationLight:before {\n\tcontent: "\\f121";\n}\n.wticon-recommendationLightCard:before {\n\tcontent: "\\f122";\n}\n.wticon-recommendationLightNoSuggestions:before {\n\tcontent: "\\f123";\n}\n.wticon-refine:before {\n\tcontent: "\\f124";\n}\n.wticon-rewrite:before {\n\tcontent: "\\f125";\n}\n.wticon-rightChevron:before {\n\tcontent: "\\f126";\n}\n.wticon-rocket:before {\n\tcontent: "\\f127";\n}\n.wticon-sentenceExamples:before {\n\tcontent: "\\f128";\n}\n.wticon-settings:before {\n\tcontent: "\\f129";\n}\n.wticon-shorten:before {\n\tcontent: "\\f12a";\n}\n.wticon-tutorial:before {\n\tcontent: "\\f12b";\n}\n.wticon-Unlimited:before {\n\tcontent: "\\f12c";\n}\n.wticon-unlock:before {\n\tcontent: "\\f12d";\n}\n.wticon-warn:before {\n\tcontent: "\\f12e";\n}\n.wticon-WordtuneButton:before {\n\tcontent: "\\f12f";\n}\n.wticon-x:before {\n\tcontent: "\\f130";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jbGllbnQvc2hhcmVkL0ljb25zLmZvbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDREQUFpeVQ7QUFDbHlUOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJ3dGljb25zXCI7XG5cdGZvbnQtZGlzcGxheTogYmxvY2s7XG5cdHNyYzogdXJsKFwiZGF0YTpmb250L3dvZmYyO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdNZ0FCQUFBQUFCMG9BQXNBQUFBQU45Z0FBQnpWQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFISWxDQm1BQWpFSUt5RVM3TndFMkFpUURnbEFMZ1NvQUJDQUZoQW9IaFdvYjJDOTFCR3djZ0JEbWIrZUlDazV2RktWaXM1YjkvMStTRzJORWlVZzlCSzJ0eFpMUmtKYUcwQ0lXbmFHNU1EV0plVVNqL1J1dVU2OStFOGs2M2VsRGxpOCsvbGg3aGhpcTRvM2tzcitpU1VwZnJ0MGZVK1FNY0lmSjdIa2c5cXU5LzNjUE1hMjZvaWNxVGNRVEZqVVJNc04wa21paTJYVFJlc3ZZbkJkNVZSRGx1d05nZU5ybXZ3dGE4STQyS1FrTEVheWdMUXpLR25NWWM5T3RkUm5HS3N4Vk9SZmRManJkRHpJQUFHWUd1eVpoMVhSeitmM2FxTTNGVW9URVNxeEE0ckEyLzFzejFWOFhKVHZVZ2FVQU93UXNDQURkL05xNVNEMUtyN2NaalhlZHNHRnNieERMWk5obXF0UDcrc09VTm1ZcnBjd3lDSjRZSkU2SWZ6c1JZUCsvWDh0aVViVGFKTFRIZjk3NjNNSDBzWWtrSmlYZ0hTSWhycVdOaURaU3BKSTZJV1I2WlA3blRKc2VVb1owNU81TktDS0xTdjZmcHJ2ODVPajNxSEJFR2FjSGhFTlBvSUJrMmxGaGtJeXdIYUthTUh0K2NvcU1abTNIT2xYRUlQVUdVendsb3MrT01mZmZTV3VJbzIySVJvaUtlQzJrOGY2TVFBWmt0ODhJZ0QxbVZqeFZOVTFkRHN3TXJzdzVBL0V2QnVDd01aaVpIQiswYXpRSTVWUUVmSDlJdE1OaFBTZGYrczBydUJLMGhkclFIVzRNUDhGLzJTVHlJdklSNVVmelBMQU1pOWZDQWtFeG5JZE5FTHhpSmc3NlRGaHpOeUppVGhJVXpYQXRhU3ZTM0JvV3NKVzNzRk9wU3N4R21kMzBObkZTeXlaMmdoUEtmNVJGTUFnMlo5QzhSSUVYVlpIY0JVbG1EaUJqR0xPUjREdG10aUNPYUJJZ1AzRlFKWThSNWpoWHJSbVI4U0hmWWpWSFNHNEZ5ME5ZUlpEZVQxeWtYTFZwRFBCeTdSQ2JRZUduL3R4OS9yRnYvZXlxV25XcG40cXNiYVY5SkJialNXdDZYak1hM2J3aEs5MTlSZnZtZFVuUjh4MGh1V1BtRkxTOWRqRytrZE5hdWJXYklveldoVEcxL00zUGpLV0VZVE1uc1lwbVF4eFNUV2JKNWpQZzZvbnBZVHd1V0dUNnVtWHVvRWFac2I3UHA4eDRGYk5yeHVER0p4T2tSTGlhZ3JSZlk3eE1XZ2JDM0NUbXF3czZrbnlQV0thelpnbHJSRW9YeDJScWNRVGl1a21McnE0WnlBb2FkaUlDbG51WW5Lemxkdzg3eXNNaVpoNUdyTGg5Vmd4dlA3ZU8vVW41dzNVRU5WOFYxbkQzUVJIcW9NUzRndm5kalV1Q2ZOOHErYmdYWERqRzgrYzRzSnJUeW14a1ZsdVFDVlR4TElNRThCMi9PVWlkMmdEemVjTHFZZTErM0lpR2l3Tk04LzFkN1BiWjRSdlpMYTNORGlIalNHc0xNaFh4QXJkMXIvM3R3bzNDMWZzUnY0MVprYWJHbFhwTGZCUjJEaWJNS0RjK3U3WlJvMDZERmgyaTRhM2dpUUt3UHhxK3hJUE45d2ZmUVN3SVFjaUo4Ri9RTmxZOTRtM2wyeVAvQVFOUnZZTTdBdGt2QVFWQUJMam1Cb2ZDaXZ5cG9JaTltNzNHRnVCOVZUUTRCSndRWThOT21yVG8xSzNYcEFWYjIzczh5bnRGSGEwSFRWdmFkb28vRzhpbzBhTEc4Z1hYZy9Cam5lcVYrR3JWckUzT1hvY1dNWGR4NGdGTWxBNjdGTmtwVTJXV09NbmU5c3pVVVoxYnpvcFpMbmNhY2VCUktoKy9nS0NROEh4M1ZFeGNRdEpLZnBFenNuTHlDb3BLeWlxcWF1b2FtbHJhT3JwNitnYUdSc1ltcG1ZZzJNSFAwTlJaWDlMK2hvWk9raHRFdlcyeHhrVkczOWJsOE84dnEwb2xUcEF0NVBSNHVWVzdCT2YyZ1Jmb09sMG9EOUdFQ25TaUV2V29RZ2xRalhiVWRMZktPdkROWU9FQWJlam96cW1NcXUzdTl0Q0JYclJnRURGZ0NJMFlSaHdZUVFZWVJSNFlRd1BHVVFwTW9CeVRLQUttVVlFWmxHRVdWWmhEQ3BoSEFsaEFEWmFRQlpaUkNLd2dEYXdpQ2F5aEd1dW93d1p1QVp1b3hWWkxNZGdHYUNNd1I0S1FZQ1FFQ1VYQ2tIQWtBb2xFb3BCb0pBYUpSZUtRZUNRQlNVU1NrR1FrQlVsRjBwQjBKQVBKUkxLUWJDUUh5VVh5a0h5a0FDbEVpcEJpcEFRcFJjcVFjcVFDcVVTcWtHcWtCcWxGNnBCNmhjTGpNL0dNcHh6MmMwL0lRSDROM1ljRW84MERJSmR3bTFrWThFVUFMd1hTamJ3RUd5WVVPQWtYbTVxN3NKdXp2VXpzN0lrL1U3enJ2anNQYkNHME1LMU9DQnpyUkFmNlloNkMwWVlkK3U1bUxxMUtxVlQ2b0Y2Ym1MU3JOWXR2WGhrdUJBV2xsUGtQM1IxV1M0R1VXZ3Y3MWhEaGROeU1wbzJadzJ5aE1jdHkyQVl5aTdmVnRQWDZQWHE5V2xpSS9tcjNnNUl5OHo5Mk95alF0RkVCa2pVRGpHZ0hLTjc2Tk8rckxYNCsvN21lKzNUdXkrejlGcWgyMnpTYlNEYU9xeWUvbTE4ZnlZZS82TjhlUzNIMERSaEh3S1ZoT0NxYlRkTnVxMVpMTnhvd0ZBMzVmTWpJRFRoWGNOeGlQUzdNSTRTTGIxR0gvSmNNRnJrb1VDMUtzZUN1dTRqaVM0TzBCUmc2MERqRGQ3SXp1MEVzUFozbEY3S01UaEpCQnFVN2NFcDlmU3l0SlcyOEl4bnpOYVRVKzczcFZDWmdOMFJTR1pZaFBKbEpwWE83cVNKRHVrdXdQVHkzN3lOT2FGM0hFRmFzWU1nZlUveTc3VHpQUDFiaWI3Y1pLT1h2TmUwcmVvSlZ2c0M2cHVxRWNEc3lqTXRvR0tiMUJDNWlVNVVPSlQwakNjWXNrazRZREtwRDhnZENPMHhUbDhqTG1DcnFrQWszZFZYVGlhd1NMcFBucXRKTmxaNGU3QUlUQWY5K1RodHF4cUdCU1dMYU8xalZUSW5WRjZybXJFbGhKYkJheUlKZzFIRzN1YjVncnIvRDE4ZHhCRGhnS2pEaUdNME1NTC9Sd2xnM2VpbldMeDhpTkJTbEVZWTBrbzllWFFIOCt4TU5wVHorN2JpcUVHSktpT0ZjL1VGMzRZWm5qc2dXcy9sT3gzcjlYdTJ2VmphODFpbTdxdXVlelNObTRvdmowZmhYckwrN24zK3A1UW00NklSNUpFK0VXU2ZwYlMrSmUySlExck1ZaWlkSlI0dXBZZjlJaTlJbldzZ1FvVFRzSXdpbnpKUUlIYXB4M1RpTitBQ2VKNlRqNUUrVkFmQU03SGtXQ0k2R1lHMXRVUmlwUEEvajdBSUlMZmlCWW1MRUpXNFV1YjFJdW9DSk9kVjYxaFpJOFlrWXUxR0FFU3BPN1RpSGVFTFNZWGlSaFc1UVhobnJmK1MvNW4rNHlaVUNSaWllUFFwek1ub3MyUVczNWxKbG9tdGJsTldoakV3TW90TmluVWNJQTBFRllnVFpKWVRoZlpGbklyZnpMSzFBbUF1WGNCUkx4Z2dTZEJHUW9jNmpDNEVhSHNwVUdZNkk4ZDJ3V0JCdnFtaUNLdWNnVHE0QTcyWTlRamRhZWZOTkVkTmMxTmVGbXZUV1ZBUnhmbHpNaHZpQUFtbktML1FVN3ZiRW52THNNWXpqblpBWXlYZm1iOTN1Y3Axa1hBbHFhd1VMVzEvMWpJVitHWkI2N1VETFFncHZna0VVKzNVL1JoQWFaUzFDYUZTK1U2SStOK3FMU2lZdHN6SUYzQkhqcHUzU0N6K3UrL1dlMk84cDlOd2RXNkRvMHEzT1JtV0NPcGxqdlJzakM4Rnl2QlNqd1hEV1FvVnBSaklkNlFQUExpSmg0NjZselVrcnJHT1pWS3NqRkFxRFNEcVVSVmRJN2ZFblZCdWJDeWJ5dlEzVzE0VUFidmM4eE5TMGJCaWV1Tlo1cmJkQm13bWhjUWF5d01WeGxKMkFsM2k1MjBQSnduRmhzYWpMTlVQZVhjMzNGRWFLSGtSQTBtMGhsa3pGWWVoWnYxQjQwTWhmc1M3QmtZcy83cVJXZ2R3MmdjUXFNVXNxVTN6dlJxczk4dWFNZ2gvVDZOSjVjSVNSckQ3bldpUHJKQUdwVEZ5WkVoK3k1NGxvYzdqUi9SZHZZZk9kdm5UNjZsS2d6VnRIbFlZTCtwZUg4dEcwNnJMcUx0Zi9mOHJYVXg0OHNka3p3ZnFYN05UcHRkK29hcmVKK1hWUy9YZmlzalZUQjVaV2hHVG56dDMvVFg0L3ZjOTlMcG5LVnZJVUZpN0lTVW5XeEpvZTBOME9IQnpwR00reU01T1BELzVnMEpIT2k0RGR3bWxkQTVTOHBDdDB0dFdJYmcwanNtNldOQ0QyeEpaU2JrT0hVaFl6MXNnNElWQXVrQU5PVVUrd3BXWitiZDRkclU4RjlJRjg5Q3ZKY0x1SS9sQ2hHckhPU0kwUFhleUUzRjEwbkhYWHNCUUkxdlpqUkRqS0FLUlJocHVKZHFZbHBWd0xHTXBHUTdkYTBNRDRvMjE3aWV3eUVSNmdWb25YL2w1OVRRTHpMNUp2eHpYb29CWXZ2d2Yxdi9sWFpxdS9FdE1lYS91UFBhNDNOYjlQcVQwV3JzSmdKRU04U05zRElxN1U5UlFsbC9YZHlwNU1mcGg4dW5ibmlybnVicFNvcndvWG1wWEE1bzVRSVJxMU1KVHV2R25Td05nVlZ2NEtuSWx2ZG5OYlJ2TTZpZzdOZC9XNTdxbXFPWUFFUHlHcmhKZzZBRDd5UWtqN2RodEtnYzhFL2JMZ0E0THdaV0RPOEloQTJVNStTZXlpQndHZmhRNmpRYjNMdVkwZEw5VU5jYis5NFRQYisrRG5pOThZajkvL3BuOTUreERKNWpwVWxjZStoY3RoOGZ2cDMzMG9hRmNPNUF4TkxUcDdqUStzK0FmYW4wSEUyWFIyQUtYWVMzTE9oSUtzSURidUMvVzIwRkRYbEMrNFZSZjB3cGRMazZsdkZyeFkxRjZ6NzgyVXIyYzhnRDgyTnVtRjhsT2pwNnc5emdIVlRUdFJhQ3A3a3BVeitlM0NaRnhoeW9NVmsxOHVmZHNZZFVRM0dsTzhxU2xlSWV3citXOVdmRDNqb2sxVXJWWW1YUkRJVGhaRnVod2ZhNDhuNDZnTU1kYlc0ODhubnlKcmhwRisxY090OVVWTWFuNzQra1FSeDRTWUNMRm5rendVR2Uzb1BxcThFV0k2WFZ5Yk1KOWpPcmVZWGNpbnN0Njg3QnBPcDRsRjFmSHpHQkVMS2xPV3NCbDhaSUhYSnZLcnlocVY3OHpYNnIxK2U0S0dUcWc3OEFhL1RBd3ZZUkdybW5hS0ZkM0lUSXlWeDhrbnhsc1dIR1dJQ1JDSXBERGxZaC9sd01RQlY2dHNRN1N2dHBsb1JXeHd4MHRKREp1SWxzRmc3UzFIZ3kzQTBzSEtYNEZoMDlCeUdHVGNaZEF1c1BrZ0dVUFV4YnBUOW1OTHdCN1lVVGZ2NUZzOWVmSFdaVFpHTlloeVlWa1VkaWJQNDJtWVNZdDJMSy85bHNPZ3Z2dEwvL0lOSWwyRkVDR3NFOVJ4RHlveUtOV1FSbDhVQnpzSUJPMUhCSEp2Z0RtODJSNDVRZEp2c3VkTVVPYkhDcjlIRGR5MEN6amY3RjQ4V3ZNUk53WlRONVUyTHRJMVUxYVhjVlFCc0czd1VTdmhmeE1ZUW9xenc3TkNRN1BDTEx2Q3NrTXpzOTY0c0owT0JLNGR3ckozaFZsQ3M3SkNzOE5IZlNwZW1YclduR0ErbTdxeWVKNi9MU3c5YmZUb3RMa09QQzQ5YkZjdTZ4TDh6TkhtL0V5TmV3SVVXR24wMnJwNlEzMmRIdFNoYStlRW1UREh6aTI0SERqN1J2MG1aV0t6OTF5RGVhSTdkN0l0ZmdBUVBua3kxN3VtaHJwMnhnMXp3SEo1Z1dKalV1L0V4TjdKbWRiYWRmeEY3Vlc3ZDYvUmQvNTBQN3hkelptN0VhMUVEYkdRS1JUVUdOZXViWHo4NlBIakJqQzhlT2JNendjT3pGL3dQd2dlK2FtaWQ4bjdOSFVxd0JkRWx5U1d0Q2EwK3VDWGFuVjhuTDlsK1gybXJkOG0zalZkcXc3SWE2SkwrTGhQYTBKYlNVRkM3cURDTGwxYnVZODNHaDQvZnZKNEJIZzhHUUZMRWp4NUFoNVBPdXg3ZG5hTGcrOU5SNndST2VIaE9SSFd3d1RhY1U2NE5lSXdvMHZjYkNhaVhlYUV6UmFwTnZlSFZ0b2EyLy9JbFdwYkU5TEJmUzZGdjE2ODNwbC9DeDhoSG9GZmN6cmJ4RkhpenAyK3dpN055V3NVaGNCQm5ZeXVyZGlaNjFKam9mMEJtSGxDcUFwb0RERE9tUEdPTUVQYlNPcWVNeVpURThQSWVOY2p3aGIxbXMvdWxOT0lHMWcxU3RZRzkzNTVkdWMxSFdzamxHOWdBNG41aWk4VkxGR1ZiTmxhUDRDbk53Mk03Ulh0Y3NXNDQ1NzJpaEc0WUdzSEQ0b0YxT05VK3VDMFNhR0pXN2JnRXZ5aVhCTzUzeEZzbGh1TmNuTndCNEVLRkVhRnVRTllZV0lJQmFHd205d1ViSjVVVWl2T3FuSTY5VTZUdWNveXlPUk1kM0t5eXNkSUNBUk1TeVFPVXhCbTJtWU5PUGFzQmpFck5XMlU4Z2xwS1JGTEk4d3BFNmpsclFIL2JPM04zWkU3M0hnb1krSmUvNjMvQkR6MXAyMzF0OXJyUS90YlJGTjZ0WG1sMENoRkg4SGRPKzVHRk9wZUh4bGZKSVVkOXpTMnBkNmMzSklPMnZhL2gza244aFA3dWtjTHUycnlrdnRSUnRuSXpnWG5sLzQrbTZTQ3NJTVZ2Y2tZVTkza1AzdFFuZFc3LzE5M0R5cXBsL0U4RGxTeldqNHFEbkF1Y2hJdVJZSmYyN0lUdC83Y0NpY290Z0hLaDEvZWZUeWdBS1dUSUthVUdCYkFrMlFxQ1NRaXpOVDVrQkFHbHFUZ0RJZzFtZFFWODFDZFRpUVJBMmY1RGhUUmFuQVVSc2xSQ0pSWk1JYUxmdC82TWtJNEpKT1pXSkZxVEFoSDRodzBpSVJDTU1CZ3dpNGpEc3NpdkNOaVdHSU5wb1ZWVVJDRXdnUXlNWFZBREJTRVl6Z0J4a1Q2NkNocGNVcHhBQ0FSeGdmSWgrZU95TzBqUjRwNlpidEpQdjU1TFBRSGEyVHhuM3hoUGVsZ05nUzFTRnVDR3I1UkR1QUhXS0g5S0c2RlNVK2l6TVg5ZVZZZWJzUEptY0hjY1Z4cTlFc1NOa0kySENPOWpLWlRMdUFIbUFmcnRoU3BtSGdxTjlXYjZSM0lEWFJ5clZ5NjdEWEpHMkdGOFVJcDB4Z2QxSkdFTU80T2hhcUpZL0QrM0JZTUtRMUlVdUwwYVpmeUZUVFdDRmw5MEhCbWIxSUhHWXNBN3p0WTdMRnBSU2s5WEliR0VyYWJ0RnVKMmMzOFgvUlF1L3ltUzNnUXNacGJ2Q090ZjFwUjMrZlV1aUhhd2NMQk9sRkZIOG1Zd3B2N21ydDVBcHAzQUQvWExCbHUwRi9MbTl0Y2tUOXQvT2tCeGZ4MXJiSERvZml4R09vMlJTUEJOQXFkRTk2ZkNWblNlMnQwdWp6S2ZLREh5bHMyVHU4eHRpNFpNV2laMUUzVFBYWExXa1RNa25zeHhxYWlERG9lSWgvOG5zTjhlcVBzMUV3ajZIdG9UL21Vb1pNZzhwMjF2YWVqZDJNRzdxOGZlN1ZQMHErNGpIeUpVSVF6V1Q0OE9wVW1LekEybDQ2MWhJOWJZZ2J5RTZHVnh5c2JjNFE1Zjh6Q1M4SzQwSEpYbDhVU0IrcmlZcWZXcGRabDFhWFVkYWZkdHJtTU5SN2VzNnRJL0ZIbVVNb0JSUTNhNk52NDNBY3FndnMyZG5jM1J2ODI0UDJXVWVQdjFURDBYb1lvMjhuV3kweHpCQTZVUkl0RWdwWG5OY0ljUElPYXh6THVQV3BwbWpMQjJQL3FRMitLeGRROGRQdU9rM1doenpaQkgwWDhWVks3YjZPdVgzcVNsZytoL2lYVWZBUWtjQXg1MWwxN0xuWnVSb2RCY0tuSXhpMi9vdC84OUYzdDdodEhCNWZXT0JvR2xKR3BDTW1lU1dNem9DUlpSc1ZrSWg4LzNOaWU4SU9lRFZucjIvRFZqNmJWMzNrMlVWeGI0VEJHVnlVbCtLcDVURTdVdW9XQzlOUVoxVE1XclZHWHJjaWJXN3I5N0VEWDRsbGpKNTVsWmdpbVVKcGhyR2VkanFWbnBVOGFxTzJYa3RKUE94QW1jSERCWnBEZ3FsZVZKb0ZDZ1RVd1o4TGZtT3orcGxQZ2Z5eXhjOXZzdlE5ZW5ULy82a0hIMG0zdGljZjhBMzJKeUxaakNQRmFmNDNLN2xCcGhEY1hUTGtwMHRoVkgxRk5lQ0tSZi96RGh6OWR6LzdNb2JZcmlJbkVOb0gvdHNSMitTVzY2RzVEREM4ck5Gd1RJV2NHL0tpVXVhU0YwNmNYU2wyeWl3UUNkK2ZTUXBucklrZDgyUVZYVDgvWXNWNWVuMTZkYWs5UnNIWVNYY0s0VHRmUUFhTkhYMmRJR1BVOGphNWhBTmJoTklhRS9qRlFoK1pDQklTU1ZZa2g4TlFSTUFHbUcxWmdTTk9zU3FLb0hIYkQzaU9jU1NJT1VrZ01La3dNWWxlNXNoMEdmRmsxYlBIZkhFM09YekZiN0RGNGdnTUNVN29Fc1lLdTVNRFdaOFpkZUNNemx0bUliOXM4WHd0Tm0vU0NycFRBdDd6RlZQVlN6bFlpLzhoa3R6cFlXMCtObThtZWl3cld6eHFqaVpkT2NwRUMrc0lrbERIT2tvb1RoTGxFb1l0SlJKa0Q3VmFSekphL0tuYlZuZjZydkZjQlN2SnVjUHJtU0NKV1JVaHlRR0ZLUks1U21lczJJTFprcDFNQjFjZzhyUnd6RncvUkN2VENyTUtzMFBUUWtQREkyZ29DRGk0NnREQkxMOVFLaW9kZzV2M0NEU2tiaENDMlRDblRCd1ZPZU9rOVZtbzU2c0JmeUpjVEFvUDBXWHJ6eU9oV1VYUmV5dkx6ajVsQmVvcytmZjJXdkpSb1VXdjBTTE8rNDNWeWF6TE40K1gyOGdEL3NOL0NKWi94Vy9panhRTm0vd3dTTzRxanRocUxIV0xqMmJEZVJHRVo0a2E4aDl2YmI0aXdnQ0F4eXFycWtZMXpMditmanZMTXJUNkk2cmdBbnB1WFMyRXR4TWpTeG1EcytKM2Yvb2RWME1qK0FNWW04MkVFbnJjRFlnTGxBRkRzZm1oNU9tWGpqQm1NSFl6Rk15WnVPNFl5bDRqTGVvTEkxSC8vWFZiVUY0TEdjVXhERTBOWm9iZXFmMXROQ29OY2JsQ1lyT25oeGpIL2xxYWhXN0JpNmI5andvM3BWbGlTR3d4eWt3S281MWZXNXRRK3pJNDhyMXd4OGM1dHMxWmFyVVJmNjdwc2gxYldMc1B5c1p5UVl4bWxkSWgxT3JGRG1acFNuV1BDS3JIMlhwd3BaNjJZcWhRN2REcEhtTDFpODlmWm93VWpPeHRTR2pwSENxS3h6djF0TlRMUHVwOVJOckVzNDh0OVVXUkNYR2xaZkMyQlhzaUVTTkY5VUg3alNmWnVPVWFXaDkxb3E4Z1pmQjh2ZmhnTGthS29yNDQ3UzhCQ1F6dEYzY1JlanZKMlRISkZLclIxbEpnNkZnMFZMSnRScXc2bVB4cE9sQTFCQmlQNHRGS2ppS3VxSUlWVUpONWIzc2pxUXJHTU9mazdsdnVPaDVHbFB1Zm5PSkxKVjdIOEszS0lHTmw5ZjA5RlQ4QmxvWTJ1TGdidkFGOEJVREpJT204bHZoOGl3eG9qWDVzMjh5NjJBUS9seTZiK2thZXBEZXBHREIvdWpyZXJFdk0xR1h6N2lCRUZmdWxxWjZMS0dsc3lER2JpeTI3elBPSDA0cm12dDFvUnZjSVl6TmN6SFk2cnBWd3ZZNlg0YUF3aUs1T0FYMTBSZVVyYUl5STJxUURCTW1nOVNGcHVXc2hndUQ1YnN1UlNSQTRuazVkYkZxSE15MVBlVVhWSHluTTgzTXdGV1pzT3Fld0xWTmQrWU95Y1pFTllUT2JFREJxaWNrbC9mMkNVa1RwSXphUldJcU9NZnNzbEZhSzBqTXlKTVdFR1U3T0ZZak9GUjNzU1cyZlRRWkthNlUwUHlNeUkzNWd2OXNrYk5jSExGVVYzRGFvYTdMUExMTTZJejJSaXJBejFXVnpBSHpTaGFBaGZ1Q1FqTGhPL3RQUmpUaWMzMmo3dFltMjd4VFZOZ2dNcDlIYUFneS9QbktrY29tVnJoMVIyeWpwTFNsNngybVJ0clBmbEpaMHlwNnh6WmZ1ckVrZzRjMGFFaXg4Uzc4V2w3OEJJUTJEanJkblp0N29iWXZ5V1dmWXJQYURwKzlSQmo4ZHRMMlhySXZNZzl2TFk1S3JFeWo1SlZjbC9xcE1yazI1QlN0V2ZsR29CZ0ozNXB5cTV6OFI4Y25Wa01LeEdkQTl4Z3BpQVA5VERvNUhBK284bktzblJJV3FVN3lWQmd6UUV0VklJd2tYRld1L2xFSHdzc0JhaXVYUktuQTBiVUg4am5BZGpWbk5pT0tKeHZrSXZsK3R6NVFhOVRCRmdVdXNUd1dvd3FJLytrZjZoZm9ReXJOUm9Dc3drWklCQVZoVUJUc240UVNDdlV2OVIvMGsvTWlCTE9waVg2K3NLU3R5UmZsRWFGQzA4Wm5nb2NuM2tmdUtTT00way9lSTRKSmdCSXcxTlE5eHhKVEV4SlhIdVp3UkNKVi9YSFQ5alhyUDJ3WGFIM2I3c3IrTXZRRHVtVDNoZjY1M21aVEtYNys2NHlzb1VNU0VsUHpGSWc1VzdaeU5FU1JiVndVNC9mNnhuODhJNWFiT3VmY1I4czN1dm0zTDh4S21tTUhncCtGOGR2eXE2WXZrNmUvLzBaQ3NmSnRMZEZBc0RZU1ZJalVUcnFUMFBPNjhRV2dETC9Vci83RlJ4MVhUbDZUL05vMnpZeTZPRGg5WTRXZ2JXVUdnb09UK2J6bUV3azNoRnd5WVRmZFNQMnhZbC9CemRCM0kyYkdUdWZ0VGUvUGJwSk0zVUNvZkpWSldkNEtmaHM3alIrMXBFV2RhWm8yY3UycTB1MithZU8yVEhuUWtETnMwZU8rODlNMXMwamJvVVlwYnNNYkxObkt6S2wyZmx5cDVDcDhDK3dBejgwWkdUSDNhK3FSL3B3QlVQK0Vuckkzb2taRU8rUmZTa0EvNFlSSVdQNUVCYjRkSEpsWkJvR0FaL1Foang4QlNlM283WWdGd1BOUWZaRUdFMmZBcE9CL0lZMHFHL2poQ0J6RURxVWgrQXIzV2dxNDRtcUZDcENnZlBReGdlajM0ZjhoUlM1OEcvZEhWK1M3YkRxL1QreUNrZ2w4SzNSbmZCUXp6LzZlOGdDU1JoQ1N5YklrUldKR2RDM2d5RmR5UDMweTRqQzZwVUFpTXFwVWR1Z1crUVpVaC84ankwbnh5SEJBWTlROXF5NFRPSXltT2FYS256UWgwWnZxdit1L0g4d1BsWmZWbTl2Sk4ra21uSUc0Q2dZc3J6d3hNM1NuMXA4U1ZrQUFNd1ZPbkp2L0ZNSGcrL3diKzdSamtXVFFqN3dvV2tpK3RGMWhSNURXaHZsZldnblpDczBqUEpyU244U1UzRFZkRnFmeHgrWlFnQTRJQmtnQUU4REFDZzBuUUFQSkNLZ2RPM0lCVUNKR0VPL0QwOW1uUlFJSzRNQmVyS0NTWUFHdkFQSmdJU2tBZFRRU2hRbnBnR1dLQUlJQUJDS1FBQ0ROQy9wNEJkUnlzUTEwWUY2dG9jVEFCY3NEcVlDQmhnZnpBVjVJT3o1MElETXNqdjVqUVlwdktCdmthUWtXcDlwQitVRXBpYUU2V0tlUkszU0NpZ2FKdmhwQ21kUDFWMWpSTk96UTJUWW96Y1pPRS9OSHJZcXVhem80aEszanQzYURnTmVnMkdxWHlncnhHRTMwQkMrSU5TQ0RYY3ZlYms4RGhmY2N1UlNIaFF0TnJoSkM1Zk9uK3FWT3Vhc0xKd2FtN2tLRUVVQ2VJNWwvbjhIeHFpUDJ3bCtIeDJSRHR5b3R4aHhkSEpQcmtIbzFIZnRwT0d4QWpFU1pBa1JmcWZuVDkzUjU0Q1JVcUNLTW1LcXVtR2FkbU82L2xCR01WSm11VkZXZFZOMi9YRE9NM0x1dTNIZWQzUCsvM2xGWlZWMVRXMWRmVU5qVTNOTGExdDdSMmRYZDBoQmhLTTRVbzZBOWF1R3hEN2dTWDg0NVdBbnpkUUtzUTUwNklaTGNlQ3p3UXhMdXhOZE1JMGF6aFBsaUk2TGNPR2tsaTByRmp1NlRMN0V1ZFFoR1VleHhuSUxqcEVPd1F6Mm5BaFJyUlhJdWg4YWFTZmRZSHN2R01wd3Rxc0QwNFh2Y0RraVQzUGJjL2hkejU0WXNIWlFJNVhJanBWakdkak5vemtkcmhGL0lHR1UwS3lvSUdwYkdhb1ArQTE1ZllEZXdtS2N4bUs0a3dPdEpBRlU2aHBiVlA4Q2hWQ1hFbnM4cWJHdUNNRjdkRlQ4SzBlc09nU3E4NGFYcVVYL3F6ZVk5RkNPeTlvV2dvdXlEeCtWYVJvN1VYbmhjMElkYk1nS1dVYnZCNUR5aEhMWWtIVlFMNHNsSllsM2RLaVZtVUpFSmUrS1lha2dyZnpsYUxrU3o3Ymc5RDZMNHZWU25oUlZabklNV0N3aWloTGZFQkY4TytLRjdWR1BpV2RiS0ozeVJrNjkrVFhqUmZYdmwwRUFBQUFcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5cbi53dGljb25zIHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5cbi53dGljb25zOmJlZm9yZSB7XG5cdGZvbnQtZmFtaWx5OiB3dGljb25zICFpbXBvcnRhbnQ7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ud3RpY29uLWFjY291bnQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMDFcIjtcbn1cbi53dGljb24tYWRkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTAyXCI7XG59XG4ud3RpY29uLWNhcmRSZXNpemVEcmFnOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTAzXCI7XG59XG4ud3RpY29uLWNhc3VhbDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwNFwiO1xufVxuLnd0aWNvbi1jaGVjazpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwNVwiO1xufVxuLnd0aWNvbi1jaGVja1NtYWxsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTA2XCI7XG59XG4ud3RpY29uLWNoZXZyb246YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMDdcIjtcbn1cbi53dGljb24tY29weTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwOFwiO1xufVxuLnd0aWNvbi1jb3B5U21hbGw6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMDlcIjtcbn1cbi53dGljb24tZGlzbWlzczpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwYVwiO1xufVxuLnd0aWNvbi1kb3duQ2hldnJvbjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwYlwiO1xufVxuLnd0aWNvbi1lcnJvcjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwY1wiO1xufVxuLnd0aWNvbi1leHBhbmQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMGRcIjtcbn1cbi53dGljb24tZmVlZGJhY2s6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMGVcIjtcbn1cbi53dGljb24tZmlsbGVkRG93bkFycm93OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTBmXCI7XG59XG4ud3RpY29uLWZpbmQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTBcIjtcbn1cbi53dGljb24tZm9ybWFsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTExXCI7XG59XG4ud3RpY29uLWdpZnQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTJcIjtcbn1cbi53dGljb24tZ3JheUxvZ286YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTNcIjtcbn1cbi53dGljb24tZ3JheVc6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTRcIjtcbn1cbi53dGljb24taWdub3JlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTE1XCI7XG59XG4ud3RpY29uLWluZm86YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTZcIjtcbn1cbi53dGljb24tbGVmdENoZXZyb246YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTdcIjtcbn1cbi53dGljb24tbG9nbzpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjExOFwiO1xufVxuLnd0aWNvbi1sb3ZlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTE5XCI7XG59XG4ud3RpY29uLW5vUmVjb21tZW5kYXRpb25zOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTFhXCI7XG59XG4ud3RpY29uLXBhcmFncmFwaFJld3JpdGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMWJcIjtcbn1cbi53dGljb24tcGFzdGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMWNcIjtcbn1cbi53dGljb24tcGluOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTFkXCI7XG59XG4ud3RpY29uLXByZW1pdW06YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMWVcIjtcbn1cbi53dGljb24tcHJlbWl1bURldGFpbDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjExZlwiO1xufVxuLnd0aWNvbi1wcmVtaXVtRnVsbDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyMFwiO1xufVxuLnd0aWNvbi1yZWNvbW1lbmRhdGlvbkxpZ2h0OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTIxXCI7XG59XG4ud3RpY29uLXJlY29tbWVuZGF0aW9uTGlnaHRDYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTIyXCI7XG59XG4ud3RpY29uLXJlY29tbWVuZGF0aW9uTGlnaHROb1N1Z2dlc3Rpb25zOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTIzXCI7XG59XG4ud3RpY29uLXJlZmluZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyNFwiO1xufVxuLnd0aWNvbi1yZXdyaXRlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTI1XCI7XG59XG4ud3RpY29uLXJpZ2h0Q2hldnJvbjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyNlwiO1xufVxuLnd0aWNvbi1yb2NrZXQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMjdcIjtcbn1cbi53dGljb24tc2VudGVuY2VFeGFtcGxlczpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyOFwiO1xufVxuLnd0aWNvbi1zZXR0aW5nczpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyOVwiO1xufVxuLnd0aWNvbi1zaG9ydGVuOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTJhXCI7XG59XG4ud3RpY29uLXR1dG9yaWFsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTJiXCI7XG59XG4ud3RpY29uLVVubGltaXRlZDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyY1wiO1xufVxuLnd0aWNvbi11bmxvY2s6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMmRcIjtcbn1cbi53dGljb24td2FybjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyZVwiO1xufVxuLnd0aWNvbi1Xb3JkdHVuZUJ1dHRvbjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyZlwiO1xufVxuLnd0aWNvbi14OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTMwXCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */'
        }}
      />
      <link
        rel="prefetch"
        href="https://wordpress.zozothemes.com/happysmile/blog/"
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
                        href="https://wordpress.zozothemes.com/happysmile/"
                      >
                        <img
                          className="img-fluid mobile-logo"
                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/HappySmile-logo.png"
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
        <header id="site-header" className="site-header header-absolute">
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
                  <h5 style={{ fontFamily: 'Tajawal variant2', color: 'white' }}>
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
                            <a href="/about">About Us</a></li>

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
        <div className="happysmile-slider-wrapper">
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
                          // lineHeight: 40,
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
                          //lineHeight: 27,
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
                          //lineHeight: 27,
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
                          display: 'block',
                          backgroundColor: "#916F4D",
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
                      >

                        <span style={{
                          display: 'none',
                          color: "rgb(255, 255, 255)",
                          fontSize: '25px',
                          paddingLeft: '50px',
                          textAlign: 'center',

                        }}>
                          Working Hours
                        </span>
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
                          //lineHeight: 40,
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

        {/* .happysmile-slider-wrapper */}{" "}


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
                    src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/HappySmile-logo.png"
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
              href="https://wordpress.zozothemes.com/happysmile/"
            >
              <img
                className="img-fluid mobile-logo"
                src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/HappySmile-logo.png"
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
                    <a href="https://wordpress.zozothemes.com/happysmile/about-us/">
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

            <div
              className="modal fade bookingModal show"
              id="bookingModal"
              tabIndex={-1}
              aria-labelledby="bookingModalLabel"
              style={{ display: "none", paddingLeft: 0 }}
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <a
                    href="javascript:void(0)"
                    className="closeBtn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27.764"
                        height="27.764"
                        viewBox="0 0 27.764 27.764"
                      >
                        <g
                          id="Group_11467"
                          data-name="Group 11467"
                          transform="translate(-2 -2)"
                        >
                          <path
                            id="Path_12146"
                            data-name="Path 12146"
                            d="M9.185,8.2a.694.694,0,0,0-.982.982l4.368,4.368L8.2,17.921a.694.694,0,0,0,.982.982l4.368-4.368L17.921,18.9a.694.694,0,1,0,.982-.982l-4.368-4.368L18.9,9.185a.694.694,0,0,0-.982-.982l-4.368,4.368Z"
                            transform="translate(2.329 2.329)"
                          />
                          <path
                            id="Path_12147"
                            data-name="Path 12147"
                            d="M2,8.941A6.941,6.941,0,0,1,8.941,2H22.823a6.941,6.941,0,0,1,6.941,6.941V22.823a6.941,6.941,0,0,1-6.941,6.941H8.941A6.941,6.941,0,0,1,2,22.823ZM8.941,3.388H22.823a5.553,5.553,0,0,1,5.553,5.553V22.823a5.553,5.553,0,0,1-5.553,5.553H8.941a5.553,5.553,0,0,1-5.553-5.553V8.941A5.553,5.553,0,0,1,8.941,3.388Z"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                  </a>
                  <div className="modal-body">
                    <div className="flxBx">
                      <div className="lftBx">
                        <div className="imgBx">
                          <img
                            src="https://damasmc.com/uploads/about/book_an_appointment_popup_imagea7c0804e02b6c1429cf99564e0542664ba2d4f8b.jpg"
                            data-src="https://damasmc.com/uploads/about/book_an_appointment_popup_imagea7c0804e02b6c1429cf99564e0542664ba2d4f8b.jpg"
                            width={700}
                            height={630}
                            alt="popupBg"
                          />
                        </div>
                      </div>
                      <div className="rtSec">
                        <div className="appointMentBox ">
                          <div className="imgBox">
                            <img src="https://damasmc.com/images/logIcon.svg" alt="Logo Icon" />
                          </div>
                          <div className="title"> Book An Appointment</div>
                          <form
                            id="appointment-form"
                            action="/en/appointment-form"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="_csrf-frontend"
                              defaultValue="wf30fGHj9CJeyFuKc8AnNjmoUOIf6jVavYwiQsPD-QObqoMVU5aNWmfwdvJHpGsBCtkXlUunejPv4mkwq_Oreg=="
                            />{" "}
                            <div className="row">
                              <input
                                type="hidden"
                                name="AppointmentEnquiry[page_url]"
                                defaultValue="https://damasmc.com/en/contact-us"
                              />
                              <div className="col-lg-12">
                                <div className="form-group field-appointmentenquiry-name required">
                                  <input
                                    type="text"
                                    id="appointmentenquiry-name"
                                    className="form-control"
                                    name="AppointmentEnquiry[name]"
                                    placeholder="Name *"
                                    aria-required="true"
                                  />
                                  <div className="help-block" />
                                </div>{" "}
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group field-appointmentenquiry-age required">
                                  <input
                                    type="text"
                                    id="appointmentenquiry-age"
                                    className="form-control"
                                    name="AppointmentEnquiry[age]"
                                    placeholder="Age *"
                                    aria-required="true"
                                  />
                                  <div className="help-block" />
                                </div>{" "}
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group field-appointmentenquiry-gender required has-error">
                                  <select
                                    id="appointmentenquiry-gender"
                                    className="select2 select"
                                    name="AppointmentEnquiry[gender]"
                                    aria-required="true"
                                    aria-invalid="true"
                                  >
                                    <option value="">Gender *</option>
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                  </select>
                                  <div className="help-block">Gender cannot be blank.</div>
                                </div>{" "}
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group field-appointmentenquiry-phone_number required">
                                  <input
                                    type="text"
                                    id="appointmentenquiry-phone_number"
                                    className="form-control"
                                    name="AppointmentEnquiry[phone_number]"
                                    placeholder="Phone No *"
                                    aria-required="true"
                                  />
                                  <div className="help-block" />
                                </div>{" "}
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group field-appointmentenquiry-email required">
                                  <input
                                    type="text"
                                    id="appointmentenquiry-email"
                                    className="form-control"
                                    name="AppointmentEnquiry[email]"
                                    placeholder="Email *"
                                    aria-required="true"
                                  />
                                  <div className="help-block" />
                                </div>{" "}
                              </div>
                              {/*<div class="col-sm-12">*/}
                              {/*    */}
                              {/*</div>*/}
                              <div className="col-sm-12">
                                <div className="dateBx">
                                  <div className="icon">
                                    <svg
                                      id="Group_21637"
                                      data-name="Group 21637"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18.895"
                                      height="18.895"
                                      viewBox="0 0 18.895 18.895"
                                    >
                                      <g id="Group_21636" data-name="Group 21636">
                                        <g id="Group_21635" data-name="Group 21635">
                                          <ellipse
                                            id="Ellipse_23"
                                            data-name="Ellipse 23"
                                            cx="1.176"
                                            cy="0.588"
                                            rx="1.176"
                                            ry="0.588"
                                            transform="translate(12.935 7.055)"
                                            fill="#888"
                                          />
                                          <path
                                            id="Path_237"
                                            data-name="Path 237"
                                            d="M15.942,1.476h-.959V.738a.738.738,0,1,0-1.476,0v.738H10.148V.738a.738.738,0,0,0-1.476,0v.738H5.351V.738a.738.738,0,0,0-1.476,0v.738H2.952A2.956,2.956,0,0,0,0,4.428V15.942a2.956,2.956,0,0,0,2.952,2.952H8.6a.738.738,0,0,0,0-1.476H2.952a1.478,1.478,0,0,1-1.476-1.476V4.428A1.478,1.478,0,0,1,2.952,2.952h.923V3.69a.738.738,0,0,0,1.476,0V2.952H8.672V3.69a.738.738,0,1,0,1.476,0V2.952h3.358V3.69a.738.738,0,0,0,1.476,0V2.952h.959a1.478,1.478,0,0,1,1.476,1.476V8.635a.738.738,0,1,0,1.476,0V4.428A2.956,2.956,0,0,0,15.942,1.476Z"
                                            fill="#888"
                                          />
                                          <path
                                            id="Path_238"
                                            data-name="Path 238"
                                            d="M274.465,270a4.465,4.465,0,1,0,4.465,4.465A4.47,4.47,0,0,0,274.465,270Zm0,7.454a2.989,2.989,0,1,1,2.989-2.989A2.993,2.993,0,0,1,274.465,277.454Z"
                                            transform="translate(-260.036 -260.036)"
                                            fill="#888"
                                          />
                                          <path
                                            id="Path_239"
                                            data-name="Path 239"
                                            d="M372.808,331.513h-.332v-.775a.738.738,0,1,0-1.476,0v1.513a.738.738,0,0,0,.738.738h1.07a.738.738,0,0,0,0-1.476Z"
                                            transform="translate(-357.309 -317.822)"
                                            fill="#888"
                                          />
                                          <ellipse
                                            id="Ellipse_24"
                                            data-name="Ellipse 24"
                                            cx="1.176"
                                            cy="0.588"
                                            rx="1.176"
                                            ry="0.588"
                                            transform="translate(9.407 7.055)"
                                            fill="#888"
                                          />
                                          <circle
                                            id="Ellipse_25"
                                            data-name="Ellipse 25"
                                            cx="1.176"
                                            cy="1.176"
                                            r="1.176"
                                            transform="translate(7.055 9.407)"
                                            fill="#888"
                                          />
                                          <ellipse
                                            id="Ellipse_26"
                                            data-name="Ellipse 26"
                                            cx="1.176"
                                            cy="0.588"
                                            rx="1.176"
                                            ry="0.588"
                                            transform="translate(3.528 7.055)"
                                            fill="#888"
                                          />
                                          <circle
                                            id="Ellipse_27"
                                            data-name="Ellipse 27"
                                            cx="1.176"
                                            cy="1.176"
                                            r="1.176"
                                            transform="translate(3.528 9.407)"
                                            fill="#888"
                                          />
                                          <circle
                                            id="Ellipse_28"
                                            data-name="Ellipse 28"
                                            cx="1.176"
                                            cy="1.176"
                                            r="1.176"
                                            transform="translate(3.528 12.935)"
                                            fill="#888"
                                          />
                                          <circle
                                            id="Ellipse_29"
                                            data-name="Ellipse 29"
                                            cx="1.176"
                                            cy="1.176"
                                            r="1.176"
                                            transform="translate(7.055 12.935)"
                                            fill="#888"
                                          />
                                          <ellipse
                                            id="Ellipse_30"
                                            data-name="Ellipse 30"
                                            cx="1.176"
                                            cy="0.588"
                                            rx="1.176"
                                            ry="0.588"
                                            transform="translate(7.055 7.055)"
                                            fill="#888"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                  <div className="form-group field-eventDate1 required">
                                    <input
                                      type="text"
                                      id="eventDate1"
                                      className="form-control datepicker"
                                      name="AppointmentEnquiry[appointment_date]"
                                      placeholder="Your Preferred Date *"
                                      data-input=""
                                      aria-required="true"
                                    />
                                    <div className="help-block" />
                                  </div>{" "}
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group field-appointmentenquiry-service required">
                                  <select
                                    id="appointmentenquiry-service"
                                    className="select2 select"
                                    name="AppointmentEnquiry[service]"
                                    aria-required="true"
                                  >
                                    <option value="">Select Department</option>
                                    <option value={1}>Dental</option>
                                    <option value={2}>Laser Hair Removal </option>
                                    <option value={5}>Derma</option>
                                    <option value={7}>Slimming </option>
                                    <option value={8}>Gynecology</option>
                                    <option value={9}>Skincare </option>
                                  </select>
                                  <div className="help-block" />
                                </div>{" "}
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group field-appointmentenquiry-message">
                                  <textarea
                                    id="appointmentenquiry-message"
                                    className="form-control"
                                    name="AppointmentEnquiry[message]"
                                    placeholder="Message"
                                    defaultValue={""}
                                  />
                                  <div className="help-block" />
                                </div>{" "}
                              </div>
                              <div className="col-lg-12">
                                <button className="hoveranim cmnBtn">
                                  <span>Book Now</span>
                                </button>
                              </div>
                            </div>
                          </form>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* .mobile-menu-floating */}{" "}
        <a
          href="https://wordpress.zozothemes.com/happysmile"
          className="back-to-top"
          id="back-to-top"
          style={{ display: "none" }}
        >
          <i className="bi bi-caret-up-fill" />
        </a>
      </div>
      {/* .happysmile-body-inner */}
      <link
        href="//fonts.googleapis.com/css?family=DM+Sans:400%2C500%7CSora:600%2C400%2C500%7CRoboto:400&display=swap"
        rel="stylesheet"
        property="stylesheet"
        media="all"
        type="text/css"
      />
      <link
        rel="preload"
        as="font"
        id="rs-icon-set-revicon-woff"
        href="//wordpress.zozothemes.com/happysmile/wp-content/plugins/revslider/sr6/assets/fonts/revicons/revicons.woff?5510888"
        type="font/woff"
        crossOrigin="anonymous"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wc-blocks-style-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=wc-9.4.2"
        media="all"
      />
      <link
        rel="stylesheet"
        id="contact-form-7-css"
        href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=6.0"
        media="all"
      />
      <style
        id="core-block-supports-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.wp-container-core-columns-is-layout-1{flex-wrap:nowrap;}.wp-container-core-columns-is-layout-2{flex-wrap:nowrap;}\n"
        }}
      />
      <link
        rel="stylesheet"
        id="rs-plugin-settings-css"
        href="//wordpress.zozothemes.com/happysmile/wp-content/plugins/revslider/sr6/assets/css/rs6.css?ver=6.7.20"
        media="all"
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