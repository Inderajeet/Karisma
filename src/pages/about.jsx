import Footer from "../components/footer";
import HeaderAbout from "../components/headerabout";

export default function About() {
    return (
        <>
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
              '\n@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1200px}}.primary-color,.theme-color,a:focus,a:hover,a:active{color:#38bde0}.primary-bg,.theme-bg{background-color:#38bde0}.border-shape-top:before,.border-shape-top-left:before{background:linear-gradient(to bottom,#38bde0 -24%,rgb(58 123 213 / 0))}.border-shape-top:after,.border-shape-top-left:after{background:linear-gradient(to top,#38bde0 0,rgb(58 123 213 / 0))}.happysmile-masonry .top-meta-wrap ul.nav.post-meta > li:before{background:linear-gradient(to top,#38bde0 0,rgb(184 151 128 / 0))}.footer-widget.contact-widget:before{background:linear-gradient(to right,#38bde0 0,rgb(184 151 128 / 6%))}.service-style-default .service-inner:before{border-right:50px solid rgba(56,189,224,1)}.service-style-default .service-inner:hover:before{background:linear-gradient(to left,#38bde0,rgb(58 123 213 / 0))}.section-title-wrapper span.elementor-divider-separator{border-image:linear-gradient(to right,#38bde0,rgb(58 123 213 / 0));border-image-slice:1}.rtl .section-title-wrapper span.elementor-divider-separator{border-image:linear-gradient(to left,#38bde0,rgb(58 123 213 / 0));border-image-slice:1}.page-title-wrap:after{background:linear-gradient(to top,rgba(56,189,224,0.61),rgb(255 255 255 / 0));background:-webkit-linear-gradient(to top,rgba(56,189,224,0.61),rgb(255 255 255 / 0))}.elementor-widget-container.feature-box-wrapper.feature-box-classic:before{background:linear-gradient(to bottom,rgba(56,189,224,0.31),rgb(184 151 128 / 4%));background:-webkit-linear-gradient(to bottom,rgba(56,189,224,0.31),rgb(184 151 128 / 4%))}aside.footer-widget-2 h5:before,.widget .widgettitle:before,.widget .widget-title:before,.widget-area-right .wp-block-group__inner-container h1:before,.widget-area-right .wp-block-group__inner-container h2:before,.widget-area-right .wp-block-group__inner-container h3:before,.widget-area-right .wp-block-group__inner-container h4:before,.widget-area-right .wp-block-group__inner-container h5:before,.widget-area-right .wp-block-group__inner-container h6:before,.widget-area-left .widget .widget-title:before,.owl-dots button.owl-dot,.pricing-style-classic.pricing-table-wrapper ul > li:before,.single-post ul.nav.post-meta > li.post-category:before,.team-wrapper.team-style-classic .team-inner:before{background:linear-gradient(to top,#38bde0,rgb(184 151 128 / 0))}.blog .happysmile-masonry .post-meta .post-more a:before,.happysmile-masonry .bottom-meta-wrap .post-meta .post-more a:before,.elementor-widget-ceaposts .blog-inner .read-more:before,.section-title-wrapper .title-wrap > *.sub-title:before,.insta-footer-wrap .sub-title:before{background:linear-gradient(to top,#38bde0 29%,rgba(56,189,224,0.11))}.bookly-progress-tracker .step,.service-style-default .service-inner .post-thumb:before{background-color:rgba(56,189,224,0.25)}.calendar_wrap th,tfoot td,ul.nav.wp-menu > li > a:before,.elementor-widget-container.feature-box-wrapper.feature-box-classic:after,ul[id^="nv-primary-navigation"] li.button.button-primary > a,.menu li.button.button-primary > a,span.animate-bubble-box:after,span.animate-bubble-box:before,.header-navbar.navbar .wp-menu li > ul.sub-menu li a:before,.pagination-single-inner > h6 > a span.arrow,::selection,.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot.active,.comments-pagination.pagination .page-numbers.current,.portfolio-meta ul.nav.social-icons > li > a:hover,span.cea-popup-modal-dismiss.ti-close,blockquote:after,.wp-block-quote.is-large:after,.wp-block-quote.is-style-large:after,.wp-block-quote.is-style-large:not(.is-style-plain):after,.wp-block-quote.has-text-align-right:after,.wp-block-quote:after,p.quote-author::before,nav.post-nav-links .post-page-numbers.current,blockquote cite::before,.single-post .comments-wrapper.section-inner input.submit,.page .comments-wrapper.section-inner input.submit,.widget-area-right .widget p.wp-block-tag-cloud a.tag-cloud-link:hover,.widget .tagcloud > a:hover,.widget .tagcloud > a:focus,.widget .tagcloud > a:active,.section-title-wrapper.title-theme .title-wrap > *.sub-title:after,.team-style-default .team-inner .post-overlay-items > .team-social-wrap,.cea-tab-elementor-widget.tab-style-2.cea-vertical-tab a.nav-item.nav-link:before,.portfolio-single .portfolio-video.post-video-wrap .video-play-icon,.portfolio-wrapper.portfolio-style-default .isotope-filter ul.nav li a:before,.isotope-filter ul.nav.m-auto.d-block li.active a,.call-us-team a.cea-button-link:hover,.call-us-team a.cea-button-link span.cea-button-num,.header-navbar .cea-button-link,.team-wrapper.team-style-default .team-inner .social-icons > li > a,.elementor-widget-ceaposts .blog-style-classic-pro .blog-inner .post-date a,.widget-area-left .contact-widget-info > p > span.bi,.widget-area-right .contact-widget-info > p > span.bi,.row.portfolio-details .col-sm-4 > .portfolio-meta span.portfolio-meta-icon,.portfolio-style-default .portfolio-inner .post-thumb:before,.portfolio-single .portfolio-sub-title,.testimonial-wrapper.testimonial-style-default .owl-item .testimonial-inner:hover:before,.timeline > li > .timeline-sep-title:before,.feature-box-style-5 .feature-box-wrapper .fbox-number,.header-navbar a.h-phone:before,.zozo_social_widget ul.nav.social-icons > li > a,.footer-widget.contact-widget,.portfolio-style-classic .post-thumb.post-overlay-active:before,.bottom-meta .post-more:before,.elementor-progress-percentage,.elementor-progress-percentage,.blog-style-classic-pro .blog-inner ul.nav.top-meta-list li:before,.wp-block-file__button.wp-element-button,p.wp-block-tag-cloud a.tag-cloud-link:hover,.event-inner ul.nav.top-meta-list .post-date:before,.site-header .btn.btn-primary::after,.cea-button-wrapper .cea-button-link:after,.site-header .btn.btn-primary::after,.site-footer .footer-contact.cus-footer-middle-2 .btn.btn-primary:after,.happysmile-content-wrap .post-share-wrap ul.nav.social-share > li a:hover,.service-style-classic .service-inner .post-category a,.team-style-classic .team-inner .post-overlay-items .team-designation,.single-cea-team .team-social-wrap ul.social-icons > li > a:hover,.happysmile-content-wrap .team-content-area .team-details-icon:hover,form.form-inline.search-form .input-group .input-group-btn button.btn,.bottom-meta .post-more .read-more:after,.site-header .btn.btn-primary:hover,.service-area .e-con-inner:before,.content-widgets-wrapper .widget_categories ul li a:before,.content-widgets-wrapper .widget_archive ul li a:before,aside.content-widgets-outer-wrapper .widget_pages ul li.page_item a:before,.footer-widgets-wrap .widget.widget_pages ul li.page_item a:before,.happysmile-masonry .nav .post-more:hover:before,.happysmile-masonry .nav .post-more:after,.service-inner:hover .nav .post-more a.read-more:before,.team-inner:hover .bottom-meta .post-more .read-more:before,.blog-layouts-wrapper .post-more:hover .read-more:before,.blog-style-classic .blog-inner .nav .post-more .read-more:hover:before,.blog-style-classic-pro .blog-inner .nav .post-more .read-more:hover:before,.blog-style-list .blog-inner .post-more:hover .read-more:before,.blog-style-modern .blog-inner .post-more:hover .read-more:before{background-color:#38bde0}.theme-color-bg,.icon-theme-color-bg,.flip-box-wrapper:hover .icon-theme-hcolor-bg,.contact-info-style-classic-pro .contact-info-title,.contact-info-wrapper.contact-info-style-classic:before,.isotope-filter ul.nav li.active a:after,.isotope-filter ul.nav li a:after,.blog-wrapper.blog-style-modern .blog-inner .top-meta .post-category,.blog-wrapper .post-overlay-items .post-date a,.event-style-classic .top-meta .post-date,.blog-layouts-wrapper .post-overlay-items .post-date a,.portfolio-content-wrap .portfolio-title h3,.service-style-classic .entry-title:after,.service-style-classic .entry-title:before,.team-style-default .team-inner .post-overlay-items > .team-social-wrap > ul,.team-style-default .team-inner:hover .post-overlay-items > .team-social-wrap,.back-to-top:after,.elementor-widget-container.feature-box-wrapper.feature-box-classic:after,h2.we-stand__top-title,span.zozo-product-favoured,.widget .tagcloud > a:hover,.widget .tagcloud > a:focus,.widget .tagcloud > a:active{background-color:#38bde0 !important}.full-search-wrapper .search-form .input-group .btn:hover,.testimonial-style-list .testimonial-inner:after,.team-details-icon,ul.nav.post-meta > li span,.comment-metadata time,.comments-wrap span:before,.comment-body .reply a.comment-reply-link,.happysmile-masonry .bottom-meta-wrap .post-meta .post-more a .widget.widget_nav_menu li a:before,.happysmile-masonry > article .top-meta-wrap a:hover,h2.entry-title a:hover,.woocommerce-message::before,.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover,.woocommerce div.product .woocommerce-tabs ul.tabs li.active a,.woocommerce div.product p.price,.woocommerce div.product span.price,ul.pricing-features-list.list-group li:before,.doc-icon,.sidebar-broucher .icon-box a:hover,p.quote-author,.feature-box-wrapper .fbox-content a:hover,ul.nav.post-meta > li.post-tag > a:hover,blockquote cite,.wp-block-quote cite,.wp-block-quote footer,.bottom-meta-wrap ul.nav.post-meta > li.post-date a:hover,.single-post .top-meta-wrap ul.nav.post-meta li a:hover,.cus-img-menu .menu-item .widget .wp-block-image:hover figcaption a,.single-post blockquote cite,.single-post blockquote cite a,.content-widgets-wrapper .widget_categories ul li a:before,.content-widgets-wrapper .widget_archive ul li a:before,.content-widgets-wrapper .wp-block-categories li a:before,footer button.input-group-addon.zozo-mc.btn.btn-default,.cus-contact a:first-child,.pagination-single-inner > h6 > a:hover span.title,.happysmile-masonry .bottom-meta-wrap .post-meta li.post-share-wrap .social-share a:hover i,.post-share-wrap ul.social-share > li > a:hover > i,.team-style-classic-pro .team-designation,.pricing-style-classic.pricing-table-wrapper ul > li:before,.widget-content-bx a i,.widget-area-left .contact-widget-info > p a:hover,.widget-area-right .contact-widget-info > p a:hover,.testimonial-style-default .testimonial-inner::after,i.breadcrumb-delimiter,.sticky-head.header-sticky .header-navbar a.h-phone:hover,.contact-widget-info > p > span.bi,.pricing-style-classic.pricing-table-wrapper:hover ul li:before,.top-meta-wrap ul.nav.post-meta li a:hover,.custom-post-nav .prev-nav-link > a:hover h5,.custom-post-nav .next-nav-link > a:hover h5,.secondary-bar-inner .input-group-addon.zozo-mc.btn.btn-default,.blog-style-classic-pro .post-author a:hover > span.author-name,.contact-widget-info > p a:hover,.insta-footer-wrap .sub-title,.site-header .btn.btn-primary,.site-header .header-logobar .email-link:hover,.secondary-bar-active .secondary-bar-inner .widget-content .contact-widget-info p a:hover,.secondary-menu-toggle.happysmile-toggle:before,.happysmile-masonry .nav .post-more a,.blog-layouts-wrapper .post-more .read-more:focus,.service-style-default .service-inner .post-category:hover a,.team-style-classic-pro .team-social-wrap ul.social-icons > li > a,team-style-classic .team-inner .post-overlay-items .team-social-wrap .nav.social-icons li a:hover,.testimonial-wrapper.testimonial-style-default .owl-nav .owl-next:before,.testimonial-wrapper.testimonial-style-default .owl-nav .owl-prev:before,.testimonial-wrapper.testimonial-style-modern .testimonial-inner:after,.testimonial-style-list .testimonial-style-list-item .testimonial-thumb:before,.single-cea-testimonial .testimonial-info .testimonial-img:before,.custom-post-nav .prev-nav-link > a:hover > i:before,.custom-post-nav .next-nav-link > a:hover > i:before,.single .content-widgets .widget .menu-service-sidebar-menu-container ul > li.current-menu-item > a,.blog-layouts-wrapper .blog-multi-layout-3 .post-more .read-more,.blog-layouts-wrapper .blog-multi-layout-3 .post-category .before-icon,.blog-style-classic-pro .blog-inner .post-details-outer .post-category,.blog-style-classic-pro .blog-inner .post-details-outer .post-category a:hover,.site-footer .cus-footer-middle .input-group-addon.zozo-mc.btn.btn-default:hover,.content-widgets-wrapper .widget_categories ul li a:hover,.content-widgets-wrapper .widget_categories ul li a:focus,.content-widgets-wrapper .widget_categories ul li a:active,.content-widgets-wrapper .widget_archive ul li a:hover,.content-widgets-wrapper .widget_archive ul li a:focus,.content-widgets-wrapper .widget_archive ul li a:active,.wp-calendar-table #today,blockquote:before,.wp-block-quote.is-large:before,.wp-block-quote.is-style-large:before,.wp-block-quote.is-style-large:not(.is-style-plain):before,.wp-block-quote.has-text-align-right:before,.wp-block-quote:before,.site-footer .footer-contact.cus-footer-middle-2 .btn.btn-primary span,.team-style-classic-pro .team-inner .nav.bottom-meta-list .post-more .read-more:focus{color:#38bde0}.widget.widget_nav_menu li a:before,.happysmile-masonry .bottom-meta-wrap .post-meta li.post-share-wrap .social-share a:hover,.single-post ul.social-share > li > a:hover,.post-share-wrap ul.social-share > li > a,.wp-block-button.is-style-outline a.wp-block-button__link,.cea-tab-elementor-widget .cea-tabs > a.active .cea-tab-title{color:#38bde0 !important}.woocommerce-message,.woocommerce #content div.product .woocommerce-tabs ul.tabs,.woocommerce div.product .woocommerce-tabs ul.tabs,.woocommerce-page #content div.product .woocommerce-tabs ul.tabs,.woocommerce-page div.product .woocommerce-tabs ul.tabs,.contact-form-wrapper span.wpcf7-form-control-wrap input:focus,.contact-form-wrapper span.wpcf7-form-control-wrap select:focus,.contact-form-wrapper span.wpcf7-form-control-wrap textarea:focus,.single-post .comments-wrapper.section-inner input:focus,.single-post .comments-wrapper.section-inner textarea:focus,.modal-popup-body input.wpcf7-form-control:focus,.modal-popup-body textarea.wpcf7-form-control:focus,.wp-block-search__input:focus,.mailchimp-wrapper .input-group input#zozo-mc-email:focus,.single-cea-testimonial .testimonial-info img,.cus-float-img .float-parallax img,.comments-wrapper.section-inner input:focus,.comments-wrapper.section-inner textarea:focus,ul.nav.pagination.post-pagination > li > a,ul.nav.pagination.post-pagination > li > span,.comments-pagination.pagination .page-numbers,.team-wrapper.team-style-default .team-inner > .post-thumb img.img-fluid.rounded-circle,.testimonial-wrapper.testimonial-style-list .post-thumb img,.timeline > li:hover .timeline-panel,nav.post-nav-links .post-page-numbers,.first-widget-abt,.zozo-booking-form-wrap .bookly-form select:focus,.zozo-booking-form-wrap .bookly-form input[type="text"]:focus,.zozo-booking-form-wrap .bookly-form input[type="number"]:focus,.zozo-booking-form-wrap .bookly-form input[type="password"]:focus,.zozo-booking-form-wrap .bookly-form textarea:focus,.wp-block-button.is-style-outline a.wp-block-button__link,form.post-password-form input:focus,.elementor-element.border-left-cls:before,form.form-inline.search-form .input-group > *.form-control:focus,.site-header .btn.btn-primary,.wpcf7 form.sent .wpcf7-response-output,.secondary-bar-active .secondary-bar-wrapper .secondary-bar-inner input.wpcf7-form-control:focus,.secondary-bar-active .secondary-bar-wrapper .secondary-bar-inner textarea.wpcf7-form-control:focus,.error404 form.form-inline.search-form .input-group > *.form-control:focus,.team-style-classic-pro .team-social-wrap ul.social-icons,.single .content-widgets-wrapper .wp-block-search__input:focus,.single .content-widgets-wrapper .wp-block-search__button,.single .content-widgets .widget .menu-service-sidebar-menu-container ul > li.current-menu-item > a,.single .content-widgets .widget .menu-service-sidebar-menu-container ul > li > a:hover,.full-search-wrapper form.form-inline.search-form .form-control:focus,.single .content-widgets-wrapper input.wpcf7-form-control:focus,.single .content-widgets-wrapper .sidebar-form .wpcf7-form-control:focus,.cf-style-default .contact-us-form .wpcf7-form-control-wrap input.wpcf7-form-control:focus,.cf-style-default .contact-us-form .wpcf7-form-control-wrap textarea.wpcf7-form-control:focus,.site-footer .footer-contact.cus-footer-middle-2 .btn.btn-primary,.btn-primary.focus,.btn-primary:focus,footer button.input-group-addon.zozo-mc.btn.btn-default:focus,form.form-inline.search-form .input-group .input-group-btn button.btn,nav.post-nav-links .post-page-numbers,nav.post-nav-links .post-page-numbers.current,nav.post-nav-links .post-page-numbers.current:hover,.wp-block-button.is-style-outline a.wp-block-button__link,form.form-inline.search-form .input-group .input-group-btn button.btn.btn-outline-success,.widget_search .search-form .input-group .btn:focus,.widget_search .search-form .input-group .btn:hover,.widget_search .search-form .input-group .btn:active,.widget .tagcloud > a:hover,.widget .tagcloud > a:focus,.widget .tagcloud > a:active,.page .comments-wrapper.section-inner input:focus{border-color:#38bde0}.testimonial-wrapper.testimonial-style-default .owl-item .testimonial-inner,.full-search-wrapper form.form-inline.search-form .form-control:focus,input.wpcf7-form-control:focus,textarea.wpcf7-form-control:focus{border-bottom-color:#38bde0}.service-style-default .service-inner:before{border-right-color:rgba(56,189,224,0.3)}.timeline:before,.service-style-default .service-inner:hover:before{border-right-color:#38bde0}.cea-counter-wrapper.cea-counter-style-modern .counter-value > *{-webkit-text-stroke:1px #38bde0}.secondary-color,.widget-area-right .zozo_social_widget ul.nav.social-icons > li > a:hover,.secondary-menu-toggle.happysmile-toggle:hover:before,.happysmile-masonry > article .top-meta-wrap li.post-category a,.happysmile-content-wrap .post-category a,.happysmile-content-wrap aside.content-widgets-outer-wrapper .widget_search .wp-block-search__label,.elementor-widget-sidebar .elementor-widget-container .widget_search .wp-block-search__label,.team-style-classic .team-inner .post-overlay-items .team-social-wrap .nav.social-icons li a,.testimonial-wrapper.testimonial-style-default .owl-nav .owl-next:hover:before,.testimonial-wrapper.testimonial-style-default .owl-nav .owl-prev:hover:before,.owl-carousel .owl-nav .owl-next:hover:before,.owl-carousel .owl-nav .owl-prev:hover:before,.custom-post-nav a > *,.single .content-widgets-wrapper .widget_search .wp-block-search__label,.single-post blockquote cite a:hover,.single-post .comments-wrapper.section-inner input:hover{color:#05071c}.secondary-bg,.comments-pagination a.prev.page-numbers:hover > span:before,.comments-pagination a.next.page-numbers:hover > span:before,.single-post .comments-wrapper.section-inner input:hover,.service-style-classic .service-inner .post-thumb:before,.single-post .comments-wrapper.section-inner input.submit:hover,.comment-body .reply a.comment-reply-link:hover,.single-post .comments-wrapper.section-inner input.submit:hover,.page .comments-wrapper.section-inner input.submit:hover,.pagination .page-numbers.current:hover,.comments-pagination.pagination .page-numbers.current:hover,.comments-pagination.pagination .page-numbers.current:hover{background-color:#05071c}<br /><b>Warning</b>:Undefined variable $secondary_rgb in <b>/home/tzozothemes/wordpress.zozothemes.com/wp-content/plugins/happysmile-addon/admin/extension/theme-options/theme-options-css.php</b> on line <b>152</b><br />header.happysmile-page-header:after{background-color:rgba(,0.77)}.close:hover,.search-form .input-group .btn:hover,.full-search-wrapper,.elementor-widget-ceaposts .blog-style-classic-pro .blog-inner .post-date a:hover,.bottom-meta .post-more:hover:before{background-color:#05071c}.blog .happysmile-masonry .post-meta .post-more a:hover:before,.happysmile-masonry .bottom-meta-wrap .post-meta .post-more a:hover:before{background:linear-gradient(to top,#05071c 29%,rgba(56,189,224,0.11))}.zozo-booking-form-wrap .bookly-form select,select{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/icon-select.png)}.full-search-wrapper:before{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/full-search-1.png)}.cus-testimonial-page .testimonial-wrapper.testimonial-style-list .testimonial-inner .post-excerpt::before{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/left-quote-1.png)}.elementor-element.border-points:before{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/arrow-step.png)}.elementor-element.border-points:after{background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/themes/happysmile/assets/images/arrow-step-after.png)}.btn,button,.back-to-top,.header-navbar a.btn.btn-primary,.widget_search .search-form .input-group .btn,button.wp-block-search__button,.btn.bordered:hover,.close,button.wp-block-search__button,ul.nav.pagination.post-pagination > li > span,.comment-respond input[type="submit"],.wp-block-button__link,input[type="submit"],.button.button-primary,input[type=button],input[type="submit"],header .mini-cart-dropdown ul.cart-dropdown-menu > li.mini-view-cart a,.woocommerce #respond input#submit.alt,.woocommerce a.button.alt,.woocommerce button.button.alt,.woocommerce input.button.alt,a.zozo-woo-compare-ajax.zozo-btn,.mini-view-wishlist a,.mini-view-cart a,.woocommerce .woocommerce-error .button,.woocommerce .woocommerce-info .button,.woocommerce .woocommerce-message .button,.woocommerce-page .woocommerce-error .button,.woocommerce-page .woocommerce-info .button,.woocommerce-page .woocommerce-message .button,a.zozo-compare-close,a.zozo-sticky-cart-close,a.zozo-sticky-wishlist-close{color:#ffffff;background-color:#38bde0}.btn:hover,button:hover,.back-to-top:hover,.header-navbar a.btn.btn-primary:hover,.widget_search .search-form .input-group .btn:hover,button.wp-block-search__button:hover,.btn:focus,button:focus,.back-to-top:focus,.header-navbar a.btn.btn-primary:focus,.widget_search .search-form .input-group .btn:focus,button.wp-block-search__button:focus,.btn:active,button:active,.back-to-top:active,.header-navbar a.btn.btn-primary:active,.widget_search .search-form .input-group .btn:active,button.wp-block-search__button:active,.contact-form-wrapper input.wpcf7-form-control.wpcf7-submit:hover,input[type="submit"]:hover,header .mini-cart-dropdown ul.cart-dropdown-menu > li.mini-view-cart a:hover,nav.post-nav-links .post-page-numbers:hover,.wp-block-button__link:hover,.wp-block-button.is-style-outline a.wp-block-button__link:hover,.pagination-single-inner > h6 > a:hover span.arrow,ul.nav.pagination.post-pagination > li > a:hover,.woocommerce #respond input#submit.alt:hover,.woocommerce a.button.alt:hover,.woocommerce button.button.alt:hover,.woocommerce input.button.alt:hover,a.zozo-woo-compare-ajax.zozo-btn:hover,.mini-view-wishlist a:hover,.mini-view-cart a:hover,.woocommerce .woocommerce-error .button:hover,.woocommerce .woocommerce-info .button:hover,.woocommerce .woocommerce-message .button:hover,.woocommerce-page .woocommerce-error .button:hover,.woocommerce-page .woocommerce-info .button:hover,.woocommerce-page .woocommerce-message .button:hover,a.zozo-compare-close:hover,a.zozo-sticky-cart-close:hover,a.zozo-sticky-wishlist-close:hover{color:#ffffff;background-color:#05071c}.header-topbar a{color:#38bde0}.happysmile-content-wrap{padding-top:120px;padding-bottom:120px}@media only screen and ( max-width:1024px ){.header-mobilebar{display:flex}.site-header{display:none}}@media only screen and ( min-width:1025px ){.site-header{display:block}.header-mobilebar{display:none}}body{color:#666b68;font-family:Rethink Sans;font-weight:400;font-size:16px;line-height:28px}.lead{color:#313956;font-family:Rethink Sans}h1,.h1{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:68px;line-height:75px;letter-spacing:-1px}h2,.h2{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:56px;line-height:65px;letter-spacing:-1px}h3,.h3{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:42px;line-height:50px;letter-spacing:-1px}h4,.h4{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:30px;line-height:37px}h5,.h5{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:21px;line-height:30px}h6,.h6{color:#262626;font-family:Rethink Sans;font-weight:600;font-size:13px;line-height:20px;letter-spacing:0}.site-header{font-family:Rethink Sans;font-weight:600}.site-header{border-top-width:2px;border-top-style:none;border-right-width:2px;border-right-style:none;border-bottom-width:2px;border-bottom-style:none;border-left-width:2px;border-left-style:none}.primary-menu .menu-item-has-children ul.sub-menu{background-color:rgb(255,255,255)}.primary-menu .menu-item-has-children ul.sub-menu li a{color:#05071c}.primary-menu .menu-item-has-children ul.sub-menu li a:hover{color:#38bde0}.primary-menu .menu-item-has-children ul.sub-menu li a:active,.primary-menu li.current-menu-parent > ul.sub-menu > li.current-menu-item > a,.primary-menu li.current-menu-parent > ul.sub-menu > li.current-menu-ancestor.current-menu-item > a,ul.wp-menu ul.sub-menu li.menu-item.current-menu-ancestor.menu-item-has-children > a{color:#38bde0}.header-topbar{font-family:Rethink Sans;font-weight:600;font-size:15px}.header-topbar{line-height:40px}.header-topbar{background-color:rgb(5,7,28)}.header-topbar{padding-right:35px;padding-left:35px}.header-topbar{border-bottom-width:1px;border-bottom-style:none;border-bottom-color:rgba(255,255,255,0.2)}.header-topbar a{color:#ffffff}.header-topbar a:hover{color:#38bde0}.header-topbar a:active,.header-topbar ul.wp-menu > li.current-menu-item > a,.header-topbar ul.nav.wp-menu > li.menu-item-has-children.current_page_parent > a,.header-topbar ul.nav.wp-menu > li.menu-item-has-children.current-menu-ancestor > a{color:#38bde0}.header-logobar{font-family:Rethink Sans;font-weight:600}.header-logobar{line-height:120px}.header-logobar{background-color:rgb(255,255,255)}.header-logobar{padding-top:0;padding-right:30px;padding-bottom:0;padding-left:30px}.header-navbar{font-family:Rethink Sans;font-weight:600;font-size:14px;line-height:30px;letter-spacing:1px;text-transform:uppercase}.header-navbar{line-height:80px}.header-sticky .header-navbar{line-height:80px}.header-navbar{background-color:rgba(255,255,255,0)}.header-navbar{padding-right:30px;padding-left:30px}.header-navbar{border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(255,255,255,0.13)}.header-navbar a{color:#ffffff}.header-navbar a:hover{color:#38bde0}.header-navbar a:active,.header-navbar ul.wp-menu > li.current-menu-item > a,.header-navbar ul.nav.wp-menu > li.menu-item-has-children.current-menu-ancestor > a{color:#38bde0}.sticky-head.header-sticky .header-navbar{background-color:rgb(255,255,255)}.sticky-head.header-sticky .header-navbar a{color:#05071c}.sticky-head.header-sticky .header-navbar a:hover{color:#38bde0}.sticky-head.header-sticky .header-navbar a:active,.sticky-head.header-sticky .header-navbar ul.wp-menu > li.current-menu-item > a,.sticky-head.header-sticky .header-navbar ul.nav.wp-menu > li.menu-item-has-children.current-menu-ancestor > a,.sticky-head.header-sticky .header-navbar a.active{color:#38bde0}img.site-logo{max-width:156px}img.sticky-logo{max-width:130px}img.mobile-logo{max-width:130px}.blog .page-title-wrap .page-title,.blog .page-title-wrap .breadcrumb li{color:#ffffff}.blog .page-title-wrap .page-subtitle{color:#38bde0}.blog .page-title-wrap .breadcrumb a{color:#ffffff}.blog .page-title-wrap .breadcrumb a:hover{color:#38bde0}.blog .page-title-wrap .breadcrumb a:active{color:#38bde0}.blog .happysmile-page-header{background-color:rgba(8 12 31 / 95%);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp);background-repeat:no-repeat;background-position:center top;background-size:cover}.blog .page-title-wrap{padding-top:325px;padding-bottom:70px}.archive .page-title-wrap .page-title,.archive .page-title-wrap .breadcrumb li,.search .page-title-wrap .page-title,.search .page-title-wrap .breadcrumb li{color:#ffffff}.archive .page-title-wrap .breadcrumb a,.search .page-title-wrap .breadcrumb a{color:#ffffff}.archive .page-title-wrap .breadcrumb a:hover,.search .page-title-wrap .breadcrumb a:hover{color:#38bde0}.archive .page-title-wrap .breadcrumb a:active,.search .page-title-wrap .breadcrumb a:active{color:#38bde0}.archive .happysmile-page-header,.search .happysmile-page-header{background-color:rgba(5,7,28,0.95);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp);background-position:center top;background-size:cover}.archive .page-title-wrap,.search .page-title-wrap{padding-top:325px;padding-bottom:70px}.single-post .page-title-wrap .page-title,.single-post .page-title-wrap .breadcrumb li,.single-product .page-title-wrap .page-title,.single-product .page-title-wrap .breadcrumb li,.doctors-directory-template-default .page-title-wrap .page-title,.doctors-directory-template-default .page-title-wrap .breadcrumb li{color:#ffffff}.single-post .page-title-wrap .page-subtitle,.single-product .page-title-wrap .page-subtitle,.doctors-directory-template-default .page-title-wrap .page-subtitle{color:#ffffff}.single-post .page-title-wrap .breadcrumb a,.single-product .page-title-wrap .breadcrumb a,.doctors-directory-template-default .page-title-wrap .breadcrumb a{color:#ffffff}.single-post .page-title-wrap .breadcrumb a:hover,.single-product .page-title-wrap .breadcrumb a:hover,.doctors-directory-template-default .breadcrumb a:hover{color:#38bde0}.single-post .page-title-wrap .breadcrumb a:active,.single-product .page-title-wrap .breadcrumb a:active,.doctors-directory-template-default .page-title-wrap .breadcrumb a:active{color:#38bde0}.single-post .happysmile-page-header,.single-product .happysmile-page-header,.single-product .happysmile-page-header,.doctors-directory-template-default .happysmile-page-header{background-color:rgba(5,7,28,0.95);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp);background-repeat:no-repeat;background-position:center top;background-size:cover}.single-post .page-title-wrap,.single-product .page-title-wrap,.doctors-directory-template-default .page-title-wrap{padding-top:325px;padding-bottom:70px}.page .page-title-wrap .page-title,.page .page-title-wrap .breadcrumb li,.error404 .page-title-wrap .page-title,.error404 .page-title-wrap .breadcrumb li{color:#ffffff}.page .page-title-wrap .page-subtitle,.error404 .page-title-wrap .page-subtitle{color:#ffffff}.page .page-title-wrap .breadcrumb a,.error404 .page-title-wrap .breadcrumb a{color:#ffffff}.page .page-title-wrap .breadcrumb a:hover,.error404 .page-title-wrap .breadcrumb a:hover{color:#38bde0}.page .page-title-wrap .breadcrumb a:active,.error404 .page-title-wrap .breadcrumb a:active{color:#38bde0}.page .happysmile-page-header,.error404 .happysmile-page-header{background-color:rgba(5,7,28,0.95);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp);background-repeat:no-repeat;background-position:center top;background-size:cover}.page .page-title-wrap,.error404 .page-title-wrap{padding-top:325px;padding-bottom:70px}.single[class*="single-cea-"] .page-title-wrap .page-title,.single[class*="single-cea-"] .page-title-wrap .breadcrumb li{color:#ffffff}.single[class*="single-cea-"] .page-title-wrap .page-subtitle{color:#ffffff}.single[class*="single-cea-"] .page-title-wrap .breadcrumb a{color:#ffffff}.single[class*="single-cea-"] .page-title-wrap .breadcrumb a:hover{color:#38bde0}.single[class*="single-cea-"] .page-title-wrap .breadcrumb a:active{color:#38bde0}.single[class*="single-cea-"] .happysmile-page-header{background-color:rgba(5,7,28,0.95);background-image:url(https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2024/05/page-title-bg-1.webp)}.single[class*="single-cea-"] .page-title-wrap{padding-top:325px;padding-bottom:70px}.single.single-cea-service .page-title-wrap .page-title,.single-cea-service .page-title-wrap .breadcrumb li{color:#ffffff}.single.single-cea-service .happysmile-page-header{background-color:rgb(18,14,53)}.single.single-cea-team .page-title-wrap .page-title,.single-cea-team .page-title-wrap .breadcrumb li{color:#ffffff}.single.single-cea-team .happysmile-page-header{background-color:rgb(18,14,53);background-repeat:no-repeat;background-position:center center;background-size:cover}.single.single-cea-testimonial .happysmile-page-header{background-color:rgb(18,14,53);background-repeat:no-repeat;background-position:center center;background-size:cover}.single.single-cea-portfolio .happysmile-page-header{background-color:rgb(18,14,53);background-repeat:no-repeat;background-position:center center;background-size:cover}.single.single-cea-event .happysmile-page-header{background-color:rgb(18,14,53)}.site-footer{color:#c8d1cf}.site-footer{background-color:rgb(5,7,28);background-repeat:no-repeat;background-position:left top}.site-footer{margin-top:0;margin-right:0;margin-bottom:0;margin-left:0}.insta-footer-wrap{color:#c8d1cf}.insta-footer-wrap{background-color:rgb(5,7,28);background-repeat:no-repeat;background-position:left center}.insta-footer-wrap{padding-top:70px;padding-right:48px;padding-bottom:0;padding-left:48px}.insta-footer-wrap a{color:#ffffff}.footer-widgets-wrap{color:#c8d1cf;font-size:16px;line-height:30px}.footer-widgets-wrap{background-color:rgb(5,7,28);background-repeat:no-repeat;background-position:left bottom;background-size:inherit}.footer-widgets-wrap{padding-top:100px;padding-bottom:100px}.footer-widgets-wrap{border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(255,255,255,0.12)}.footer-widgets-wrap a{color:#c8d1cf}.footer-widgets-wrap a:hover{color:#38bde0}.footer-widgets-wrap a:active{color:#38bde0}.footer-bottom-wrap{color:#c8d1cf;font-size:16px;line-height:30px}.footer-bottom-wrap{background-color:rgb(5,7,28)}.footer-bottom-wrap{padding-top:25px;padding-bottom:25px}.footer-bottom-wrap{margin-top:0;margin-right:0;margin-bottom:0;margin-left:0}.footer-bottom-wrap a{color:#38bde0}.footer-bottom-wrap a:hover{color:#ffffff}.footer-bottom-wrap a:active{color:#ffffff}.secondary-bar-wrapper{background:linear-gradient(90deg,#38bde0 0,#05071c 100%)}.page-load-initiate .page-loader:before,.page-load-end .page-loader:before,.page-load-initiate .page-loader:after,.page-load-end .page-loader:after{background:linear-gradient(90deg,#38bde0 0,#05071c 100%);background:-webkit-gradient(linear,left top,right top,from(#05071c),to(#38bde0));background:-webkit-linear-gradient(left,#05071c 0,#38bde0 100%);background:-o-linear-gradient(left,#05071c 0,#38bde0 100%);background:linear-gradient(to right,#05071c 0,#38bde0 100%)}.secondary-bar-inner{width:450px}.secondary-bar-wrapper.from-left .secondary-bar-inner{left:-450px}.secondary-bar-wrapper.from-right .secondary-bar-inner{right:-450px}\n/* Happysmile Post Options Styles */.happysmile-content-wrap {padding-top: 0px;padding-bottom: 0px;}\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n'
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
          id="elementor-post-73311-css"
          href="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/elementor/css/post-73311.css?ver=1725970784"
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
        <link
          rel="stylesheet"
          id="elementor-icons-shared-1-css"
          href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/themify-icons.css?ver=1.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-themify-css"
          href="https://wordpress.zozothemes.com/happysmile/wp-content/plugins/classic-elementor-addons-pro/assets/css/themify-icons.css?ver=1.0"
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
          href="https://wordpress.zozothemes.com/happysmile/wp-json/wp/v2/pages/73311"
        />
        <link
          rel="EditURI"
          type="application/rsd+xml"
          title="RSD"
          href="https://wordpress.zozothemes.com/happysmile/xmlrpc.php?rsd"
        />
        <meta name="generator" content="WordPress 6.7" />
        <meta name="generator" content="WooCommerce 9.4.2" />
        <link
          rel="canonical"
          href="https://wordpress.zozothemes.com/happysmile/contact-us/"
        />
        <link
          rel="shortlink"
          href="https://wordpress.zozothemes.com/happysmile/?p=73311"
        />
        <link
          rel="alternate"
          title="oEmbed (JSON)"
          type="application/json+oembed"
          href="https://wordpress.zozothemes.com/happysmile/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwordpress.zozothemes.com%2Fhappysmile%2Fcontact-us%2F"
        />
        <link
          rel="alternate"
          title="oEmbed (XML)"
          type="text/xml+oembed"
          href="https://wordpress.zozothemes.com/happysmile/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwordpress.zozothemes.com%2Fhappysmile%2Fcontact-us%2F&format=xml"
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
       
        <style
          dangerouslySetInnerHTML={{
            __html:
              '@font-face {\n\tfont-family: "wticons";\n\tfont-display: block;\n\tsrc: url(data:font/woff2;charset=utf-8;base64,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) format("woff2");\n}\n\n.wticons {\n\tline-height: 1;\n}\n\n.wticons:before {\n\tfont-family: wticons !important;\n\tfont-style: normal;\n\tfont-weight: normal !important;\n\tvertical-align: top;\n}\n\n.wticon-account:before {\n\tcontent: "\\f101";\n}\n.wticon-add:before {\n\tcontent: "\\f102";\n}\n.wticon-cardResizeDrag:before {\n\tcontent: "\\f103";\n}\n.wticon-casual:before {\n\tcontent: "\\f104";\n}\n.wticon-check:before {\n\tcontent: "\\f105";\n}\n.wticon-checkSmall:before {\n\tcontent: "\\f106";\n}\n.wticon-chevron:before {\n\tcontent: "\\f107";\n}\n.wticon-copy:before {\n\tcontent: "\\f108";\n}\n.wticon-copySmall:before {\n\tcontent: "\\f109";\n}\n.wticon-dismiss:before {\n\tcontent: "\\f10a";\n}\n.wticon-downChevron:before {\n\tcontent: "\\f10b";\n}\n.wticon-error:before {\n\tcontent: "\\f10c";\n}\n.wticon-expand:before {\n\tcontent: "\\f10d";\n}\n.wticon-feedback:before {\n\tcontent: "\\f10e";\n}\n.wticon-filledDownArrow:before {\n\tcontent: "\\f10f";\n}\n.wticon-find:before {\n\tcontent: "\\f110";\n}\n.wticon-formal:before {\n\tcontent: "\\f111";\n}\n.wticon-gift:before {\n\tcontent: "\\f112";\n}\n.wticon-grayLogo:before {\n\tcontent: "\\f113";\n}\n.wticon-grayW:before {\n\tcontent: "\\f114";\n}\n.wticon-ignore:before {\n\tcontent: "\\f115";\n}\n.wticon-info:before {\n\tcontent: "\\f116";\n}\n.wticon-leftChevron:before {\n\tcontent: "\\f117";\n}\n.wticon-logo:before {\n\tcontent: "\\f118";\n}\n.wticon-love:before {\n\tcontent: "\\f119";\n}\n.wticon-noRecommendations:before {\n\tcontent: "\\f11a";\n}\n.wticon-paragraphRewrite:before {\n\tcontent: "\\f11b";\n}\n.wticon-paste:before {\n\tcontent: "\\f11c";\n}\n.wticon-pin:before {\n\tcontent: "\\f11d";\n}\n.wticon-premium:before {\n\tcontent: "\\f11e";\n}\n.wticon-premiumDetail:before {\n\tcontent: "\\f11f";\n}\n.wticon-premiumFull:before {\n\tcontent: "\\f120";\n}\n.wticon-recommendationLight:before {\n\tcontent: "\\f121";\n}\n.wticon-recommendationLightCard:before {\n\tcontent: "\\f122";\n}\n.wticon-recommendationLightNoSuggestions:before {\n\tcontent: "\\f123";\n}\n.wticon-refine:before {\n\tcontent: "\\f124";\n}\n.wticon-rewrite:before {\n\tcontent: "\\f125";\n}\n.wticon-rightChevron:before {\n\tcontent: "\\f126";\n}\n.wticon-rocket:before {\n\tcontent: "\\f127";\n}\n.wticon-sentenceExamples:before {\n\tcontent: "\\f128";\n}\n.wticon-settings:before {\n\tcontent: "\\f129";\n}\n.wticon-shorten:before {\n\tcontent: "\\f12a";\n}\n.wticon-tutorial:before {\n\tcontent: "\\f12b";\n}\n.wticon-Unlimited:before {\n\tcontent: "\\f12c";\n}\n.wticon-unlock:before {\n\tcontent: "\\f12d";\n}\n.wticon-warn:before {\n\tcontent: "\\f12e";\n}\n.wticon-WordtuneButton:before {\n\tcontent: "\\f12f";\n}\n.wticon-x:before {\n\tcontent: "\\f130";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jbGllbnQvc2hhcmVkL0ljb25zLmZvbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDREQUFpeVQ7QUFDbHlUOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJ3dGljb25zXCI7XG5cdGZvbnQtZGlzcGxheTogYmxvY2s7XG5cdHNyYzogdXJsKFwiZGF0YTpmb250L3dvZmYyO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdNZ0FCQUFBQUFCMG9BQXNBQUFBQU45Z0FBQnpWQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFISWxDQm1BQWpFSUt5RVM3TndFMkFpUURnbEFMZ1NvQUJDQUZoQW9IaFdvYjJDOTFCR3djZ0JEbWIrZUlDazV2RktWaXM1YjkvMStTRzJORWlVZzlCSzJ0eFpMUmtKYUcwQ0lXbmFHNU1EV0plVVNqL1J1dVU2OStFOGs2M2VsRGxpOCsvbGg3aGhpcTRvM2tzcitpU1VwZnJ0MGZVK1FNY0lmSjdIa2c5cXU5LzNjUE1hMjZvaWNxVGNRVEZqVVJNc04wa21paTJYVFJlc3ZZbkJkNVZSRGx1d05nZU5ybXZ3dGE4STQyS1FrTEVheWdMUXpLR25NWWM5T3RkUm5HS3N4Vk9SZmRManJkRHpJQUFHWUd1eVpoMVhSeitmM2FxTTNGVW9URVNxeEE0ckEyLzFzejFWOFhKVHZVZ2FVQU93UXNDQURkL05xNVNEMUtyN2NaalhlZHNHRnNieERMWk5obXF0UDcrc09VTm1ZcnBjd3lDSjRZSkU2SWZ6c1JZUCsvWDh0aVViVGFKTFRIZjk3NjNNSDBzWWtrSmlYZ0hTSWhycVdOaURaU3BKSTZJV1I2WlA3blRKc2VVb1owNU81TktDS0xTdjZmcHJ2ODVPajNxSEJFR2FjSGhFTlBvSUJrMmxGaGtJeXdIYUthTUh0K2NvcU1abTNIT2xYRUlQVUdVendsb3MrT01mZmZTV3VJbzIySVJvaUtlQzJrOGY2TVFBWmt0ODhJZ0QxbVZqeFZOVTFkRHN3TXJzdzVBL0V2QnVDd01aaVpIQiswYXpRSTVWUUVmSDlJdE1OaFBTZGYrczBydUJLMGhkclFIVzRNUDhGLzJTVHlJdklSNVVmelBMQU1pOWZDQWtFeG5JZE5FTHhpSmc3NlRGaHpOeUppVGhJVXpYQXRhU3ZTM0JvV3NKVzNzRk9wU3N4R21kMzBObkZTeXlaMmdoUEtmNVJGTUFnMlo5QzhSSUVYVlpIY0JVbG1EaUJqR0xPUjREdG10aUNPYUJJZ1AzRlFKWThSNWpoWHJSbVI4U0hmWWpWSFNHNEZ5ME5ZUlpEZVQxeWtYTFZwRFBCeTdSQ2JRZUduL3R4OS9yRnYvZXlxV25XcG40cXNiYVY5SkJialNXdDZYak1hM2J3aEs5MTlSZnZtZFVuUjh4MGh1V1BtRkxTOWRqRytrZE5hdWJXYklveldoVEcxL00zUGpLV0VZVE1uc1lwbVF4eFNUV2JKNWpQZzZvbnBZVHd1V0dUNnVtWHVvRWFac2I3UHA4eDRGYk5yeHVER0p4T2tSTGlhZ3JSZlk3eE1XZ2JDM0NUbXF3czZrbnlQV0thelpnbHJSRW9YeDJScWNRVGl1a21McnE0WnlBb2FkaUlDbG51WW5Lemxkdzg3eXNNaVpoNUdyTGg5Vmd4dlA3ZU8vVW41dzNVRU5WOFYxbkQzUVJIcW9NUzRndm5kalV1Q2ZOOHErYmdYWERqRzgrYzRzSnJUeW14a1ZsdVFDVlR4TElNRThCMi9PVWlkMmdEemVjTHFZZTErM0lpR2l3Tk04LzFkN1BiWjRSdlpMYTNORGlIalNHc0xNaFh4QXJkMXIvM3R3bzNDMWZzUnY0MVprYWJHbFhwTGZCUjJEaWJNS0RjK3U3WlJvMDZERmgyaTRhM2dpUUt3UHhxK3hJUE45d2ZmUVN3SVFjaUo4Ri9RTmxZOTRtM2wyeVAvQVFOUnZZTTdBdGt2QVFWQUJMam1Cb2ZDaXZ5cG9JaTltNzNHRnVCOVZUUTRCSndRWThOT21yVG8xSzNYcEFWYjIzczh5bnRGSGEwSFRWdmFkb28vRzhpbzBhTEc4Z1hYZy9Cam5lcVYrR3JWckUzT1hvY1dNWGR4NGdGTWxBNjdGTmtwVTJXV09NbmU5c3pVVVoxYnpvcFpMbmNhY2VCUktoKy9nS0NROEh4M1ZFeGNRdEpLZnBFenNuTHlDb3BLeWlxcWF1b2FtbHJhT3JwNitnYUdSc1ltcG1ZZzJNSFAwTlJaWDlMK2hvWk9raHRFdlcyeHhrVkczOWJsOE84dnEwb2xUcEF0NVBSNHVWVzdCT2YyZ1Jmb09sMG9EOUdFQ25TaUV2V29RZ2xRalhiVWRMZktPdkROWU9FQWJlam96cW1NcXUzdTl0Q0JYclJnRURGZ0NJMFlSaHdZUVFZWVJSNFlRd1BHVVFwTW9CeVRLQUttVVlFWmxHRVdWWmhEQ3BoSEFsaEFEWmFRQlpaUkNLd2dEYXdpQ2F5aEd1dW93d1p1QVp1b3hWWkxNZGdHYUNNd1I0S1FZQ1FFQ1VYQ2tIQWtBb2xFb3BCb0pBYUpSZUtRZUNRQlNVU1NrR1FrQlVsRjBwQjBKQVBKUkxLUWJDUUh5VVh5a0h5a0FDbEVpcEJpcEFRcFJjcVFjcVFDcVVTcWtHcWtCcWxGNnBCNmhjTGpNL0dNcHh6MmMwL0lRSDROM1ljRW84MERJSmR3bTFrWThFVUFMd1hTamJ3RUd5WVVPQWtYbTVxN3NKdXp2VXpzN0lrL1U3enJ2anNQYkNHME1LMU9DQnpyUkFmNlloNkMwWVlkK3U1bUxxMUtxVlQ2b0Y2Ym1MU3JOWXR2WGhrdUJBV2xsUGtQM1IxV1M0R1VXZ3Y3MWhEaGROeU1wbzJadzJ5aE1jdHkyQVl5aTdmVnRQWDZQWHE5V2xpSS9tcjNnNUl5OHo5Mk95alF0RkVCa2pVRGpHZ0hLTjc2Tk8rckxYNCsvN21lKzNUdXkrejlGcWgyMnpTYlNEYU9xeWUvbTE4ZnlZZS82TjhlUzNIMERSaEh3S1ZoT0NxYlRkTnVxMVpMTnhvd0ZBMzVmTWpJRFRoWGNOeGlQUzdNSTRTTGIxR0gvSmNNRnJrb1VDMUtzZUN1dTRqaVM0TzBCUmc2MERqRGQ3SXp1MEVzUFozbEY3S01UaEpCQnFVN2NFcDlmU3l0SlcyOEl4bnpOYVRVKzczcFZDWmdOMFJTR1pZaFBKbEpwWE83cVNKRHVrdXdQVHkzN3lOT2FGM0hFRmFzWU1nZlUveTc3VHpQUDFiaWI3Y1pLT1h2TmUwcmVvSlZ2c0M2cHVxRWNEc3lqTXRvR0tiMUJDNWlVNVVPSlQwakNjWXNrazRZREtwRDhnZENPMHhUbDhqTG1DcnFrQWszZFZYVGlhd1NMcFBucXRKTmxaNGU3QUlUQWY5K1RodHF4cUdCU1dMYU8xalZUSW5WRjZybXJFbGhKYkJheUlKZzFIRzN1YjVncnIvRDE4ZHhCRGhnS2pEaUdNME1NTC9Sd2xnM2VpbldMeDhpTkJTbEVZWTBrbzllWFFIOCt4TU5wVHorN2JpcUVHSktpT0ZjL1VGMzRZWm5qc2dXcy9sT3gzcjlYdTJ2VmphODFpbTdxdXVlelNObTRvdmowZmhYckwrN24zK3A1UW00NklSNUpFK0VXU2ZwYlMrSmUySlExck1ZaWlkSlI0dXBZZjlJaTlJbldzZ1FvVFRzSXdpbnpKUUlIYXB4M1RpTitBQ2VKNlRqNUUrVkFmQU03SGtXQ0k2R1lHMXRVUmlwUEEvajdBSUlMZmlCWW1MRUpXNFV1YjFJdW9DSk9kVjYxaFpJOFlrWXUxR0FFU3BPN1RpSGVFTFNZWGlSaFc1UVhobnJmK1MvNW4rNHlaVUNSaWllUFFwek1ub3MyUVczNWxKbG9tdGJsTldoakV3TW90TmluVWNJQTBFRllnVFpKWVRoZlpGbklyZnpMSzFBbUF1WGNCUkx4Z2dTZEJHUW9jNmpDNEVhSHNwVUdZNkk4ZDJ3V0JCdnFtaUNLdWNnVHE0QTcyWTlRamRhZWZOTkVkTmMxTmVGbXZUV1ZBUnhmbHpNaHZpQUFtbktML1FVN3ZiRW52THNNWXpqblpBWXlYZm1iOTN1Y3Axa1hBbHFhd1VMVzEvMWpJVitHWkI2N1VETFFncHZna0VVKzNVL1JoQWFaUzFDYUZTK1U2SStOK3FMU2lZdHN6SUYzQkhqcHUzU0N6K3UrL1dlMk84cDlOd2RXNkRvMHEzT1JtV0NPcGxqdlJzakM4Rnl2QlNqd1hEV1FvVnBSaklkNlFQUExpSmg0NjZselVrcnJHT1pWS3NqRkFxRFNEcVVSVmRJN2ZFblZCdWJDeWJ5dlEzVzE0VUFidmM4eE5TMGJCaWV1Tlo1cmJkQm13bWhjUWF5d01WeGxKMkFsM2k1MjBQSnduRmhzYWpMTlVQZVhjMzNGRWFLSGtSQTBtMGhsa3pGWWVoWnYxQjQwTWhmc1M3QmtZcy83cVJXZ2R3MmdjUXFNVXNxVTN6dlJxczk4dWFNZ2gvVDZOSjVjSVNSckQ3bldpUHJKQUdwVEZ5WkVoK3k1NGxvYzdqUi9SZHZZZk9kdm5UNjZsS2d6VnRIbFlZTCtwZUg4dEcwNnJMcUx0Zi9mOHJYVXg0OHNka3p3ZnFYN05UcHRkK29hcmVKK1hWUy9YZmlzalZUQjVaV2hHVG56dDMvVFg0L3ZjOTlMcG5LVnZJVUZpN0lTVW5XeEpvZTBOME9IQnpwR00reU01T1BELzVnMEpIT2k0RGR3bWxkQTVTOHBDdDB0dFdJYmcwanNtNldOQ0QyeEpaU2JrT0hVaFl6MXNnNElWQXVrQU5PVVUrd3BXWitiZDRkclU4RjlJRjg5Q3ZKY0x1SS9sQ2hHckhPU0kwUFhleUUzRjEwbkhYWHNCUUkxdlpqUkRqS0FLUlJocHVKZHFZbHBWd0xHTXBHUTdkYTBNRDRvMjE3aWV3eUVSNmdWb25YL2w1OVRRTHpMNUp2eHpYb29CWXZ2d2Yxdi9sWFpxdS9FdE1lYS91UFBhNDNOYjlQcVQwV3JzSmdKRU04U05zRElxN1U5UlFsbC9YZHlwNU1mcGg4dW5ibmlybnVicFNvcndvWG1wWEE1bzVRSVJxMU1KVHV2R25Td05nVlZ2NEtuSWx2ZG5OYlJ2TTZpZzdOZC9XNTdxbXFPWUFFUHlHcmhKZzZBRDd5UWtqN2RodEtnYzhFL2JMZ0E0THdaV0RPOEloQTJVNStTZXlpQndHZmhRNmpRYjNMdVkwZEw5VU5jYis5NFRQYisrRG5pOThZajkvL3BuOTUreERKNWpwVWxjZStoY3RoOGZ2cDMzMG9hRmNPNUF4TkxUcDdqUStzK0FmYW4wSEUyWFIyQUtYWVMzTE9oSUtzSURidUMvVzIwRkRYbEMrNFZSZjB3cGRMazZsdkZyeFkxRjZ6NzgyVXIyYzhnRDgyTnVtRjhsT2pwNnc5emdIVlRUdFJhQ3A3a3BVeitlM0NaRnhoeW9NVmsxOHVmZHNZZFVRM0dsTzhxU2xlSWV3citXOVdmRDNqb2sxVXJWWW1YUkRJVGhaRnVod2ZhNDhuNDZnTU1kYlc0ODhubnlKcmhwRisxY090OVVWTWFuNzQra1FSeDRTWUNMRm5rendVR2Uzb1BxcThFV0k2WFZ5Yk1KOWpPcmVZWGNpbnN0Njg3QnBPcDRsRjFmSHpHQkVMS2xPV3NCbDhaSUhYSnZLcnlocVY3OHpYNnIxK2U0S0dUcWc3OEFhL1RBd3ZZUkdybW5hS0ZkM0lUSXlWeDhrbnhsc1dIR1dJQ1JDSXBERGxZaC9sd01RQlY2dHNRN1N2dHBsb1JXeHd4MHRKREp1SWxzRmc3UzFIZ3kzQTBzSEtYNEZoMDlCeUdHVGNaZEF1c1BrZ0dVUFV4YnBUOW1OTHdCN1lVVGZ2NUZzOWVmSFdaVFpHTlloeVlWa1VkaWJQNDJtWVNZdDJMSy85bHNPZ3Z2dEwvL0lOSWwyRkVDR3NFOVJ4RHlveUtOV1FSbDhVQnpzSUJPMUhCSEp2Z0RtODJSNDVRZEp2c3VkTVVPYkhDcjlIRGR5MEN6amY3RjQ4V3ZNUk53WlRONVUyTHRJMVUxYVhjVlFCc0czd1VTdmhmeE1ZUW9xenc3TkNRN1BDTEx2Q3NrTXpzOTY0c0owT0JLNGR3ckozaFZsQ3M3SkNzOE5IZlNwZW1YclduR0ErbTdxeWVKNi9MU3c5YmZUb3RMa09QQzQ5YkZjdTZ4TDh6TkhtL0V5TmV3SVVXR24wMnJwNlEzMmRIdFNoYStlRW1UREh6aTI0SERqN1J2MG1aV0t6OTF5RGVhSTdkN0l0ZmdBUVBua3kxN3VtaHJwMnhnMXp3SEo1Z1dKalV1L0V4TjdKbWRiYWRmeEY3Vlc3ZDYvUmQvNTBQN3hkelptN0VhMUVEYkdRS1JUVUdOZXViWHo4NlBIakJqQzhlT2JNendjT3pGL3dQd2dlK2FtaWQ4bjdOSFVxd0JkRWx5U1d0Q2EwK3VDWGFuVjhuTDlsK1gybXJkOG0zalZkcXc3SWE2SkwrTGhQYTBKYlNVRkM3cURDTGwxYnVZODNHaDQvZnZKNEJIZzhHUUZMRWp4NUFoNVBPdXg3ZG5hTGcrOU5SNndST2VIaE9SSFd3d1RhY1U2NE5lSXdvMHZjYkNhaVhlYUV6UmFwTnZlSFZ0b2EyLy9JbFdwYkU5TEJmUzZGdjE2ODNwbC9DeDhoSG9GZmN6cmJ4RkhpenAyK3dpN055V3NVaGNCQm5ZeXVyZGlaNjFKam9mMEJtSGxDcUFwb0RERE9tUEdPTUVQYlNPcWVNeVpURThQSWVOY2p3aGIxbXMvdWxOT0lHMWcxU3RZRzkzNTVkdWMxSFdzamxHOWdBNG41aWk4VkxGR1ZiTmxhUDRDbk53Mk03Ulh0Y3NXNDQ1NzJpaEc0WUdzSEQ0b0YxT05VK3VDMFNhR0pXN2JnRXZ5aVhCTzUzeEZzbGh1TmNuTndCNEVLRkVhRnVRTllZV0lJQmFHd205d1ViSjVVVWl2T3FuSTY5VTZUdWNveXlPUk1kM0t5eXNkSUNBUk1TeVFPVXhCbTJtWU5PUGFzQmpFck5XMlU4Z2xwS1JGTEk4d3BFNmpsclFIL2JPM04zWkU3M0hnb1krSmUvNjMvQkR6MXAyMzF0OXJyUS90YlJGTjZ0WG1sMENoRkg4SGRPKzVHRk9wZUh4bGZKSVVkOXpTMnBkNmMzSklPMnZhL2gza244aFA3dWtjTHUycnlrdnRSUnRuSXpnWG5sLzQrbTZTQ3NJTVZ2Y2tZVTkza1AzdFFuZFc3LzE5M0R5cXBsL0U4RGxTeldqNHFEbkF1Y2hJdVJZSmYyN0lUdC83Y0NpY290Z0hLaDEvZWZUeWdBS1dUSUthVUdCYkFrMlFxQ1NRaXpOVDVrQkFHbHFUZ0RJZzFtZFFWODFDZFRpUVJBMmY1RGhUUmFuQVVSc2xSQ0pSWk1JYUxmdC82TWtJNEpKT1pXSkZxVEFoSDRodzBpSVJDTU1CZ3dpNGpEc3NpdkNOaVdHSU5wb1ZWVVJDRXdnUXlNWFZBREJTRVl6Z0J4a1Q2NkNocGNVcHhBQ0FSeGdmSWgrZU95TzBqUjRwNlpidEpQdjU1TFBRSGEyVHhuM3hoUGVsZ05nUzFTRnVDR3I1UkR1QUhXS0g5S0c2RlNVK2l6TVg5ZVZZZWJzUEptY0hjY1Z4cTlFc1NOa0kySENPOWpLWlRMdUFIbUFmcnRoU3BtSGdxTjlXYjZSM0lEWFJ5clZ5NjdEWEpHMkdGOFVJcDB4Z2QxSkdFTU80T2hhcUpZL0QrM0JZTUtRMUlVdUwwYVpmeUZUVFdDRmw5MEhCbWIxSUhHWXNBN3p0WTdMRnBSU2s5WEliR0VyYWJ0RnVKMmMzOFgvUlF1L3ltUzNnUXNacGJ2Q090ZjFwUjMrZlV1aUhhd2NMQk9sRkZIOG1Zd3B2N21ydDVBcHAzQUQvWExCbHUwRi9MbTl0Y2tUOXQvT2tCeGZ4MXJiSERvZml4R09vMlJTUEJOQXFkRTk2ZkNWblNlMnQwdWp6S2ZLREh5bHMyVHU4eHRpNFpNV2laMUUzVFBYWExXa1RNa25zeHhxYWlERG9lSWgvOG5zTjhlcVBzMUV3ajZIdG9UL21Vb1pNZzhwMjF2YWVqZDJNRzdxOGZlN1ZQMHErNGpIeUpVSVF6V1Q0OE9wVW1LekEybDQ2MWhJOWJZZ2J5RTZHVnh5c2JjNFE1Zjh6Q1M4SzQwSEpYbDhVU0IrcmlZcWZXcGRabDFhWFVkYWZkdHJtTU5SN2VzNnRJL0ZIbVVNb0JSUTNhNk52NDNBY3FndnMyZG5jM1J2ODI0UDJXVWVQdjFURDBYb1lvMjhuV3kweHpCQTZVUkl0RWdwWG5OY0ljUElPYXh6THVQV3BwbWpMQjJQL3FRMitLeGRROGRQdU9rM1doenpaQkgwWDhWVks3YjZPdVgzcVNsZytoL2lYVWZBUWtjQXg1MWwxN0xuWnVSb2RCY0tuSXhpMi9vdC84OUYzdDdodEhCNWZXT0JvR2xKR3BDTW1lU1dNem9DUlpSc1ZrSWg4LzNOaWU4SU9lRFZucjIvRFZqNmJWMzNrMlVWeGI0VEJHVnlVbCtLcDVURTdVdW9XQzlOUVoxVE1XclZHWHJjaWJXN3I5N0VEWDRsbGpKNTVsWmdpbVVKcGhyR2VkanFWbnBVOGFxTzJYa3RKUE94QW1jSERCWnBEZ3FsZVZKb0ZDZ1RVd1o4TGZtT3orcGxQZ2Z5eXhjOXZzdlE5ZW5ULy82a0hIMG0zdGljZjhBMzJKeUxaakNQRmFmNDNLN2xCcGhEY1hUTGtwMHRoVkgxRk5lQ0tSZi96RGh6OWR6LzdNb2JZcmlJbkVOb0gvdHNSMitTVzY2RzVEREM4ck5Gd1RJV2NHL0tpVXVhU0YwNmNYU2wyeWl3UUNkK2ZTUXBucklrZDgyUVZYVDgvWXNWNWVuMTZkYWs5UnNIWVNYY0s0VHRmUUFhTkhYMmRJR1BVOGphNWhBTmJoTklhRS9qRlFoK1pDQklTU1ZZa2g4TlFSTUFHbUcxWmdTTk9zU3FLb0hIYkQzaU9jU1NJT1VrZ01La3dNWWxlNXNoMEdmRmsxYlBIZkhFM09YekZiN0RGNGdnTUNVN29Fc1lLdTVNRFdaOFpkZUNNemx0bUliOXM4WHd0Tm0vU0NycFRBdDd6RlZQVlN6bFlpLzhoa3R6cFlXMCtObThtZWl3cld6eHFqaVpkT2NwRUMrc0lrbERIT2tvb1RoTGxFb1l0SlJKa0Q3VmFSekphL0tuYlZuZjZydkZjQlN2SnVjUHJtU0NKV1JVaHlRR0ZLUks1U21lczJJTFprcDFNQjFjZzhyUnd6RncvUkN2VENyTUtzMFBUUWtQREkyZ29DRGk0NnREQkxMOVFLaW9kZzV2M0NEU2tiaENDMlRDblRCd1ZPZU9rOVZtbzU2c0JmeUpjVEFvUDBXWHJ6eU9oV1VYUmV5dkx6ajVsQmVvcytmZjJXdkpSb1VXdjBTTE8rNDNWeWF6TE40K1gyOGdEL3NOL0NKWi94Vy9panhRTm0vd3dTTzRxanRocUxIV0xqMmJEZVJHRVo0a2E4aDl2YmI0aXdnQ0F4eXFycWtZMXpMditmanZMTXJUNkk2cmdBbnB1WFMyRXR4TWpTeG1EcytKM2Yvb2RWME1qK0FNWW04MkVFbnJjRFlnTGxBRkRzZm1oNU9tWGpqQm1NSFl6Rk15WnVPNFl5bDRqTGVvTEkxSC8vWFZiVUY0TEdjVXhERTBOWm9iZXFmMXROQ29OY2JsQ1lyT25oeGpIL2xxYWhXN0JpNmI5andvM3BWbGlTR3d4eWt3S281MWZXNXRRK3pJNDhyMXd4OGM1dHMxWmFyVVJmNjdwc2gxYldMc1B5c1p5UVl4bWxkSWgxT3JGRG1acFNuV1BDS3JIMlhwd3BaNjJZcWhRN2REcEhtTDFpODlmWm93VWpPeHRTR2pwSENxS3h6djF0TlRMUHVwOVJOckVzNDh0OVVXUkNYR2xaZkMyQlhzaUVTTkY5VUg3alNmWnVPVWFXaDkxb3E4Z1pmQjh2ZmhnTGthS29yNDQ3UzhCQ1F6dEYzY1JlanZKMlRISkZLclIxbEpnNkZnMFZMSnRScXc2bVB4cE9sQTFCQmlQNHRGS2ppS3VxSUlWVUpONWIzc2pxUXJHTU9mazdsdnVPaDVHbFB1Zm5PSkxKVjdIOEszS0lHTmw5ZjA5RlQ4QmxvWTJ1TGdidkFGOEJVREpJT204bHZoOGl3eG9qWDVzMjh5NjJBUS9seTZiK2thZXBEZXBHREIvdWpyZXJFdk0xR1h6N2lCRUZmdWxxWjZMS0dsc3lER2JpeTI3elBPSDA0cm12dDFvUnZjSVl6TmN6SFk2cnBWd3ZZNlg0YUF3aUs1T0FYMTBSZVVyYUl5STJxUURCTW1nOVNGcHVXc2hndUQ1YnN1UlNSQTRuazVkYkZxSE15MVBlVVhWSHluTTgzTXdGV1pzT3Fld0xWTmQrWU95Y1pFTllUT2JFREJxaWNrbC9mMkNVa1RwSXphUldJcU9NZnNzbEZhSzBqTXlKTVdFR1U3T0ZZak9GUjNzU1cyZlRRWkthNlUwUHlNeUkzNWd2OXNrYk5jSExGVVYzRGFvYTdMUExMTTZJejJSaXJBejFXVnpBSHpTaGFBaGZ1Q1FqTGhPL3RQUmpUaWMzMmo3dFltMjd4VFZOZ2dNcDlIYUFneS9QbktrY29tVnJoMVIyeWpwTFNsNngybVJ0clBmbEpaMHlwNnh6WmZ1ckVrZzRjMGFFaXg4Uzc4V2w3OEJJUTJEanJkblp0N29iWXZ5V1dmWXJQYURwKzlSQmo4ZHRMMlhySXZNZzl2TFk1S3JFeWo1SlZjbC9xcE1yazI1QlN0V2ZsR29CZ0ozNXB5cTV6OFI4Y25Wa01LeEdkQTl4Z3BpQVA5VERvNUhBK284bktzblJJV3FVN3lWQmd6UUV0VklJd2tYRld1L2xFSHdzc0JhaXVYUktuQTBiVUg4am5BZGpWbk5pT0tKeHZrSXZsK3R6NVFhOVRCRmdVdXNUd1dvd3FJLytrZjZoZm9ReXJOUm9Dc3drWklCQVZoVUJUc240UVNDdlV2OVIvMGsvTWlCTE9waVg2K3NLU3R5UmZsRWFGQzA4Wm5nb2NuM2tmdUtTT00way9lSTRKSmdCSXcxTlE5eHhKVEV4SlhIdVp3UkNKVi9YSFQ5alhyUDJ3WGFIM2I3c3IrTXZRRHVtVDNoZjY1M21aVEtYNys2NHlzb1VNU0VsUHpGSWc1VzdaeU5FU1JiVndVNC9mNnhuODhJNWFiT3VmY1I4czN1dm0zTDh4S21tTUhncCtGOGR2eXE2WXZrNmUvLzBaQ3NmSnRMZEZBc0RZU1ZJalVUcnFUMFBPNjhRV2dETC9Vci83RlJ4MVhUbDZUL05vMnpZeTZPRGg5WTRXZ2JXVUdnb09UK2J6bUV3azNoRnd5WVRmZFNQMnhZbC9CemRCM0kyYkdUdWZ0VGUvUGJwSk0zVUNvZkpWSldkNEtmaHM3alIrMXBFV2RhWm8yY3UycTB1MithZU8yVEhuUWtETnMwZU8rODlNMXMwamJvVVlwYnNNYkxObkt6S2wyZmx5cDVDcDhDK3dBejgwWkdUSDNhK3FSL3B3QlVQK0Vuckkzb2taRU8rUmZTa0EvNFlSSVdQNUVCYjRkSEpsWkJvR0FaL1Foang4QlNlM283WWdGd1BOUWZaRUdFMmZBcE9CL0lZMHFHL2poQ0J6RURxVWgrQXIzV2dxNDRtcUZDcENnZlBReGdlajM0ZjhoUlM1OEcvZEhWK1M3YkRxL1QreUNrZ2w4SzNSbmZCUXp6LzZlOGdDU1JoQ1N5YklrUldKR2RDM2d5RmR5UDMweTRqQzZwVUFpTXFwVWR1Z1crUVpVaC84ankwbnh5SEJBWTlROXF5NFRPSXltT2FYS256UWgwWnZxdit1L0g4d1BsWmZWbTl2Sk4ra21uSUc0Q2dZc3J6d3hNM1NuMXA4U1ZrQUFNd1ZPbkp2L0ZNSGcrL3diKzdSamtXVFFqN3dvV2tpK3RGMWhSNURXaHZsZldnblpDczBqUEpyU244U1UzRFZkRnFmeHgrWlFnQTRJQmtnQUU4REFDZzBuUUFQSkNLZ2RPM0lCVUNKR0VPL0QwOW1uUlFJSzRNQmVyS0NTWUFHdkFQSmdJU2tBZFRRU2hRbnBnR1dLQUlJQUJDS1FBQ0ROQy9wNEJkUnlzUTEwWUY2dG9jVEFCY3NEcVlDQmhnZnpBVjVJT3o1MElETXNqdjVqUVlwdktCdmthUWtXcDlwQitVRXBpYUU2V0tlUkszU0NpZ2FKdmhwQ21kUDFWMWpSTk96UTJUWW96Y1pPRS9OSHJZcXVhem80aEszanQzYURnTmVnMkdxWHlncnhHRTMwQkMrSU5TQ0RYY3ZlYms4RGhmY2N1UlNIaFF0TnJoSkM1Zk9uK3FWT3Vhc0xKd2FtN2tLRUVVQ2VJNWwvbjhIeHFpUDJ3bCtIeDJSRHR5b3R4aHhkSEpQcmtIbzFIZnRwT0d4QWpFU1pBa1JmcWZuVDkzUjU0Q1JVcUNLTW1LcXVtR2FkbU82L2xCR01WSm11VkZXZFZOMi9YRE9NM0x1dTNIZWQzUCsvM2xGWlZWMVRXMWRmVU5qVTNOTGExdDdSMmRYZDBoQmhLTTRVbzZBOWF1R3hEN2dTWDg0NVdBbnpkUUtzUTUwNklaTGNlQ3p3UXhMdXhOZE1JMGF6aFBsaUk2TGNPR2tsaTByRmp1NlRMN0V1ZFFoR1VleHhuSUxqcEVPd1F6Mm5BaFJyUlhJdWg4YWFTZmRZSHN2R01wd3Rxc0QwNFh2Y0RraVQzUGJjL2hkejU0WXNIWlFJNVhJanBWakdkak5vemtkcmhGL0lHR1UwS3lvSUdwYkdhb1ArQTE1ZllEZXdtS2N4bUs0a3dPdEpBRlU2aHBiVlA4Q2hWQ1hFbnM4cWJHdUNNRjdkRlQ4SzBlc09nU3E4NGFYcVVYL3F6ZVk5RkNPeTlvV2dvdXlEeCtWYVJvN1VYbmhjMElkYk1nS1dVYnZCNUR5aEhMWWtIVlFMNHNsSllsM2RLaVZtVUpFSmUrS1lha2dyZnpsYUxrU3o3Ymc5RDZMNHZWU25oUlZabklNV0N3aWloTGZFQkY4TytLRjdWR1BpV2RiS0ozeVJrNjkrVFhqUmZYdmwwRUFBQUFcIikgZm9ybWF0KFwid29mZjJcIik7XG59XG5cbi53dGljb25zIHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5cbi53dGljb25zOmJlZm9yZSB7XG5cdGZvbnQtZmFtaWx5OiB3dGljb25zICFpbXBvcnRhbnQ7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ud3RpY29uLWFjY291bnQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMDFcIjtcbn1cbi53dGljb24tYWRkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTAyXCI7XG59XG4ud3RpY29uLWNhcmRSZXNpemVEcmFnOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTAzXCI7XG59XG4ud3RpY29uLWNhc3VhbDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwNFwiO1xufVxuLnd0aWNvbi1jaGVjazpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwNVwiO1xufVxuLnd0aWNvbi1jaGVja1NtYWxsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTA2XCI7XG59XG4ud3RpY29uLWNoZXZyb246YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMDdcIjtcbn1cbi53dGljb24tY29weTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwOFwiO1xufVxuLnd0aWNvbi1jb3B5U21hbGw6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMDlcIjtcbn1cbi53dGljb24tZGlzbWlzczpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwYVwiO1xufVxuLnd0aWNvbi1kb3duQ2hldnJvbjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwYlwiO1xufVxuLnd0aWNvbi1lcnJvcjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEwY1wiO1xufVxuLnd0aWNvbi1leHBhbmQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMGRcIjtcbn1cbi53dGljb24tZmVlZGJhY2s6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMGVcIjtcbn1cbi53dGljb24tZmlsbGVkRG93bkFycm93OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTBmXCI7XG59XG4ud3RpY29uLWZpbmQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTBcIjtcbn1cbi53dGljb24tZm9ybWFsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTExXCI7XG59XG4ud3RpY29uLWdpZnQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTJcIjtcbn1cbi53dGljb24tZ3JheUxvZ286YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTNcIjtcbn1cbi53dGljb24tZ3JheVc6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTRcIjtcbn1cbi53dGljb24taWdub3JlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTE1XCI7XG59XG4ud3RpY29uLWluZm86YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTZcIjtcbn1cbi53dGljb24tbGVmdENoZXZyb246YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMTdcIjtcbn1cbi53dGljb24tbG9nbzpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjExOFwiO1xufVxuLnd0aWNvbi1sb3ZlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTE5XCI7XG59XG4ud3RpY29uLW5vUmVjb21tZW5kYXRpb25zOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTFhXCI7XG59XG4ud3RpY29uLXBhcmFncmFwaFJld3JpdGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMWJcIjtcbn1cbi53dGljb24tcGFzdGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMWNcIjtcbn1cbi53dGljb24tcGluOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTFkXCI7XG59XG4ud3RpY29uLXByZW1pdW06YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMWVcIjtcbn1cbi53dGljb24tcHJlbWl1bURldGFpbDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjExZlwiO1xufVxuLnd0aWNvbi1wcmVtaXVtRnVsbDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyMFwiO1xufVxuLnd0aWNvbi1yZWNvbW1lbmRhdGlvbkxpZ2h0OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTIxXCI7XG59XG4ud3RpY29uLXJlY29tbWVuZGF0aW9uTGlnaHRDYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTIyXCI7XG59XG4ud3RpY29uLXJlY29tbWVuZGF0aW9uTGlnaHROb1N1Z2dlc3Rpb25zOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTIzXCI7XG59XG4ud3RpY29uLXJlZmluZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyNFwiO1xufVxuLnd0aWNvbi1yZXdyaXRlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTI1XCI7XG59XG4ud3RpY29uLXJpZ2h0Q2hldnJvbjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyNlwiO1xufVxuLnd0aWNvbi1yb2NrZXQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMjdcIjtcbn1cbi53dGljb24tc2VudGVuY2VFeGFtcGxlczpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyOFwiO1xufVxuLnd0aWNvbi1zZXR0aW5nczpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyOVwiO1xufVxuLnd0aWNvbi1zaG9ydGVuOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTJhXCI7XG59XG4ud3RpY29uLXR1dG9yaWFsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTJiXCI7XG59XG4ud3RpY29uLVVubGltaXRlZDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyY1wiO1xufVxuLnd0aWNvbi11bmxvY2s6YmVmb3JlIHtcblx0Y29udGVudDogXCJcXGYxMmRcIjtcbn1cbi53dGljb24td2FybjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyZVwiO1xufVxuLnd0aWNvbi1Xb3JkdHVuZUJ1dHRvbjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlxcZjEyZlwiO1xufVxuLnd0aWNvbi14OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXFxmMTMwXCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */'
          }}
        />
       <HeaderAbout></HeaderAbout>
       <article
  className="post-73266 page type-page status-publish hentry"
  id="post-73266"
>
  <div className="post-inner">
    <div className="entry-content">
      <div
        data-elementor-type="wp-page"
        data-elementor-id={73266}
        className="elementor elementor-73266"
      >
        <div
          className="elementor-element elementor-element-329db232 e-flex e-con-boxed e-con e-parent e-lazyloaded"
          data-id="329db232"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-5d18fbec e-flex e-con-boxed e-con e-child"
              data-id="5d18fbec"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-12b3f892 e-flex e-con-boxed e-con e-child"
                  data-id="12b3f892"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-49031c30 e-flex e-con-boxed e-con e-child"
                      data-id="49031c30"
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-56e22ffd elementor-widget elementor-widget-image"
                          data-id="56e22ffd"
                          data-element_type="widget"
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
                      className="elementor-element elementor-element-30322709 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child"
                      data-id={30322709}
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-4cd5d593 elementor-widget elementor-widget-image"
                          data-id="4cd5d593"
                          data-element_type="widget"
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
                        <div
                          className="elementor-element elementor-element-2e16be0c elementor-absolute verticle-move cea-view-default elementor-widget elementor-widget-ceafeaturebox"
                          data-id="2e16be0c"
                          data-element_type="widget"
                          data-settings='{"_position":"absolute"}'
                          data-widget_type="ceafeaturebox.default"
                        >
                          <div className="elementor-widget-container feature-box-wrapper feature-box-default">
                            <a href="#">
                              <div className="feature-box-inner">
                                <div className="cea-featured-icon">
                                  <i
                                    aria-hidden="true"
                                    className=" bi-arrow-up-right"
                                  />
                                </div>
                                <h3 className="feature-box-title">
                                  6.5Million
                                </h3>
                                <div className="fbox-content">
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
                  className="elementor-element elementor-element-20a16868 e-flex e-con-boxed e-con e-child"
                  data-id="20a16868"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-15a76ad8 cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                      data-id="15a76ad8"
                      data-element_type="widget"
                      data-widget_type="ceasectiontitle.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="section-title-wrapper">
                          <div className="title-wrap">
                            <h6 className="sub-title">
                              <span className="subtitle-dots">About Us</span>
                            </h6>
                            <h2 className="section-title">
                              Achieving Dental Wellness and Radiant Confidence
                            </h2>
                          </div>
                          {/* .title-wrap */}
                          <div className="section-description">
                            <p className="section-content">
                              Welcome to our office! Our dentists and team are
                              looking forward to caring for you and your smile.
                              We understand just how closely connected oral
                              health is to your overall health, confidence, and
                              appearance, and we pride ourselves on cultivating
                              a friendly.
                            </p>
                          </div>
                          {/* .section-description */}
                        </div>
                        {/* .section-title-wrapper */}{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-1dabb6b0 e-flex e-con-boxed e-con e-child"
                      data-id="1dabb6b0"
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-5fdbd3b5 e-con-full e-flex e-con e-child"
                          data-id="5fdbd3b5"
                          data-element_type="container"
                        >
                          <div
                            className="elementor-element elementor-element-458a5182 elementor-widget__width-auto elementor-widget elementor-widget-ceabutton"
                            data-id="458a5182"
                            data-element_type="widget"
                            data-widget_type="ceabutton.default"
                          >
                            <div className="elementor-widget-container cea-button-wrapper">
                              <div className="cea-button-wrapper">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/contact-us/"
                                  className="cea-button-link elementor-button cea-button elementor-size-sm"
                                >
                                  <span className="cea-button-content-wrapper">
                                    <span className="cea-button-icon cea-align-icon-right">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-tooth"
                                      />{" "}
                                    </span>
                                    <span className="cea-button-text">
                                      CONTACT US
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-1513479 e-flex e-con-boxed e-con e-child"
                          data-id={1513479}
                          data-element_type="container"
                        >
                          <div className="e-con-inner">
                            <div
                              className="elementor-element elementor-element-210e9e5c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="210e9e5c"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div className="elementor-widget-container">
                                <ul className="elementor-icon-list-items">
                                  <li className="elementor-icon-list-item">
                                    <span className="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        className=" bi-check2-circle"
                                      />{" "}
                                    </span>
                                    <span className="elementor-icon-list-text">
                                      Pain-free treatment
                                    </span>
                                  </li>
                                  <li className="elementor-icon-list-item">
                                    <span className="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        className=" bi-check2-circle"
                                      />{" "}
                                    </span>
                                    <span className="elementor-icon-list-text">
                                      Highly-qualified staff
                                    </span>
                                  </li>
                                </ul>
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
          className="elementor-element elementor-element-397b99fb e-flex e-con-boxed e-con e-parent"
          data-id="397b99fb"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-7663ee7d e-flex e-con-boxed e-con e-child"
              data-id="7663ee7d"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-59b692ea e-flex e-con-boxed e-con e-child"
                  data-id="59b692ea"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-5cd571eb elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child"
                      data-id="5cd571eb"
                      data-element_type="container"
                    >
                      <div className="e-con-inner"></div>
                    </div>
                    <div
                      className="elementor-element elementor-element-7a9830f3 e-con-full e-flex e-con e-child"
                      data-id="7a9830f3"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-1e20b8d cea-align-center elementor-widget elementor-widget-ceasectiontitle"
                        data-id="1e20b8d"
                        data-element_type="widget"
                        data-widget_type="ceasectiontitle.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="section-title-wrapper">
                            <div className="title-wrap">
                              <h6 className="sub-title">
                                <span className="subtitle-dots">
                                  Our Doctors{" "}
                                </span>
                              </h6>
                              <h2 className="section-title">
                                Friendly Faces, Personalized Care for Your Smile{" "}
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
                      className="elementor-element elementor-element-13ba87ea elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child"
                      data-id="13ba87ea"
                      data-element_type="container"
                    >
                      <div className="e-con-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-412eda9e e-flex e-con-boxed e-con e-child"
                  data-id="412eda9e"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-12cfa3cf elementor-widget elementor-widget-ceateam"
                      data-id="12cfa3cf"
                      data-element_type="widget"
                      data-widget_type="ceateam.default"
                    >
                      <div className="elementor-widget-container team-wrapper team-style-classic-pro team-light team-slide-model">
                        <div
                          className="cea-carousel owl-carousel owl-loaded owl-drag"
                          data-loop={1}
                          data-margin={0}
                          data-center={0}
                          data-nav={0}
                          data-dots={0}
                          data-autoplay={1}
                          data-items={3}
                          data-items-tab={2}
                          data-items-mob={1}
                          data-duration={5000}
                          data-smartspeed={250}
                          data-scrollby={1}
                          data-autoheight={0}
                        >
                          {/* .col / .owl-carousel-item / .isotope */}
                          {/* .col / .owl-carousel-item / .isotope */}
                          {/* .col / .owl-carousel-item / .isotope */}
                          {/* .col / .owl-carousel-item / .isotope */}
                          {/* .col / .owl-carousel-item / .isotope */}
                          {/* .col / .owl-carousel-item / .isotope */}
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(-1600px, 0px, 0px)",
                                transition: "0.25s",
                                width: 4800
                              }}
                            >
                              <div
                                className="owl-item cloned"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/laura-wilburn/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-2.webp"
                                          title="team-2"
                                          alt=""
                                          className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/laura-wilburn/"
                                            className="post-title"
                                          >
                                            Laura Wilburn
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Dental Hygienist
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/laura-wilburn/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/brian-wilson/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-7.webp"
                                          title="team-7"
                                          alt=""
                                          className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/brian-wilson/"
                                            className="post-title"
                                          >
                                            Brian Wilson
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Senior Dentist
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/brian-wilson/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/mary-vels/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-1.webp"
                                          title="team-1"
                                          alt=""
                                          className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/mary-vels/"
                                            className="post-title"
                                          >
                                            Mary Vels
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Senior Dentist
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/mary-vels/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div className="owl-item" style={{ width: 400 }}>
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/nico-robin/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2023/01/team-6.webp"
                                          title="team-6"
                                          alt=""
                                          className="img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/nico-robin/"
                                            className="post-title"
                                          >
                                            Nico Robin
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Preventive Dentistry
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/nico-robin/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/angelina-jolie/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-5.webp"
                                          title="team-5"
                                          alt=""
                                          className="img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/angelina-jolie/"
                                            className="post-title"
                                          >
                                            Angelina Jolie
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Cosmetic Dentistry
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/angelina-jolie/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/emi-akezawa/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-3.webp"
                                          title="team-3"
                                          alt=""
                                          className="img-fluid squared img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/emi-akezawa/"
                                            className="post-title"
                                          >
                                            Emi Akezawa
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Orthodontic Solutions
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/emi-akezawa/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/laura-wilburn/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-2.webp"
                                          title="team-2"
                                          alt=""
                                          className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/laura-wilburn/"
                                            className="post-title"
                                          >
                                            Laura Wilburn
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Dental Hygienist
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/laura-wilburn/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div className="owl-item" style={{ width: 400 }}>
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/brian-wilson/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-7.webp"
                                          title="team-7"
                                          alt=""
                                          className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/brian-wilson/"
                                            className="post-title"
                                          >
                                            Brian Wilson
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Senior Dentist
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/brian-wilson/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div className="owl-item" style={{ width: 400 }}>
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/mary-vels/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-1.webp"
                                          title="team-1"
                                          alt=""
                                          className="img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/mary-vels/"
                                            className="post-title"
                                          >
                                            Mary Vels
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Senior Dentist
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/mary-vels/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/nico-robin/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2023/01/team-6.webp"
                                          title="team-6"
                                          alt=""
                                          className="img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/nico-robin/"
                                            className="post-title"
                                          >
                                            Nico Robin
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Preventive Dentistry
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/nico-robin/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/angelina-jolie/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-5.webp"
                                          title="team-5"
                                          alt=""
                                          className="img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/angelina-jolie/"
                                            className="post-title"
                                          >
                                            Angelina Jolie
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Cosmetic Dentistry
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/angelina-jolie/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: 400 }}
                              >
                                <div className="owl-carousel-item">
                                  <div className="team-inner">
                                    <div className="post-thumb post-overlay-active">
                                      <a
                                        href="https://wordpress.zozothemes.com/happysmile/team/emi-akezawa/"
                                        className="post-image-link"
                                      >
                                        <img
                                          decoding="async"
                                          src="https://wordpress.zozothemes.com/happysmile/wp-content/uploads/sites/20/2019/04/team-3.webp"
                                          title="team-3"
                                          alt=""
                                          className="img-fluid squared img-fluid squared img-fluid squared"
                                        />
                                      </a>
                                      <div className="post-overlay-items">
                                        <div className="team-social-wrap clearfix">
                                          <ul className="nav social-icons team-socialsocial-circled social-black social-h-own social-bg-transparent social-hbg-transparent">
                                            <li>
                                              <a
                                                className="social-fb"
                                                href="https://www.facebook.com/zozothemes.official/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-facebook" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-twitter"
                                                href="https://twitter.com/zozothemes"
                                                target="_blank"
                                              >
                                                <i className="bi bi-twitter-x" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-instagram"
                                                href="https://www.instagram.com/zozotheme/"
                                                target="_blank"
                                              >
                                                <i className="fa fa-instagram" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="social-youtube"
                                                href="https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg"
                                                target="_blank"
                                              >
                                                <i className="fa fa-youtube-play" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>{" "}
                                        {/* .team-social-wrap */}
                                      </div>
                                    </div>
                                    {/* .post-thumb */}
                                    <div className="post-details-outer">
                                      <div className="entry-title">
                                        <h4 className="post-title-head">
                                          <a
                                            href="https://wordpress.zozothemes.com/happysmile/team/emi-akezawa/"
                                            className="post-title"
                                          >
                                            Emi Akezawa
                                          </a>
                                        </h4>
                                      </div>
                                      {/* .entry-title */}
                                      <div className="team-designation">
                                        <div className="post-designation-head">
                                          Orthodontic Solutions
                                        </div>
                                      </div>
                                      {/* .team-designation */}
                                      <div className="post-excerpt">
                                        Working Experience Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit,..
                                      </div>
                                      {/* .post-excerpt */}
                                      <div className="bottom-meta clearfix">
                                        <ul className="nav bottom-meta-list meta-left">
                                          <li>
                                            <div className="post-more">
                                              <a
                                                href="https://wordpress.zozothemes.com/happysmile/team/emi-akezawa/"
                                                className="read-more elementor-button"
                                              >
                                                READ MORE
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/* .post-details-outer */}
                                  </div>
                                  {/* .team-inner */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="owl-nav disabled">
                            <button
                              type="button"
                              role="presentation"
                              className="owl-prev"
                            >
                              <i className="ti-angle-left" />
                            </button>
                            <button
                              type="button"
                              role="presentation"
                              className="owl-next"
                            >
                              <i className="ti-angle-right" />
                            </button>
                          </div>
                          <div className="owl-dots disabled" />
                        </div>
                        {/* .owl-carousel */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-5c8ba790 e-con-full e-flex e-con e-parent"
          data-id="5c8ba790"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-350c83c e-con-full e-flex e-con e-child"
            data-id="350c83c"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-419db7fc e-con-full e-flex e-con e-child"
              data-id="419db7fc"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-3376feb8 elementor-widget elementor-widget-text-editor"
                data-id="3376feb8"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <i className="bi bi-chat-right-quote" />{" "}
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-54eb760e e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
              data-id="54eb760e"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-4eadf543 cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                data-id="4eadf543"
                data-element_type="widget"
                data-widget_type="ceasectiontitle.default"
              >
                <div className="elementor-widget-container">
                  <div className="section-title-wrapper">
                    <div className="title-wrap">
                      <h2 className="section-title">
                        Client Satisfaction Unveiled
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
              className="elementor-element elementor-element-4fc4eb89 e-con-full e-flex e-con e-child"
              data-id="4fc4eb89"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-22832cd4 elementor-widget elementor-widget-ceatestimonial"
                data-id="22832cd4"
                data-element_type="widget"
                data-widget_type="ceatestimonial.default"
              >
                <div className="elementor-widget-container testimonial-wrapper testimonial-style-default testimonial-light testimonial-slide-model image-gallery">
                  <div
                    className="cea-carousel owl-carousel owl-loaded owl-drag"
                    data-loop={1}
                    data-margin={0}
                    data-center={0}
                    data-nav={1}
                    data-dots={0}
                    data-autoplay={1}
                    data-items={1}
                    data-items-tab={1}
                    data-items-mob={1}
                    data-duration={5000}
                    data-smartspeed={250}
                    data-scrollby={1}
                    data-autoheight={0}
                  >
                    {/* .col / .owl-carousel-item / .isotope */}
                    {/* .col / .owl-carousel-item / .isotope */}
                    {/* .col / .owl-carousel-item / .isotope */}
                    {/* .col / .owl-carousel-item / .isotope */}
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(-3030px, 0px, 0px)",
                          transition: "0.25s",
                          width: 4849
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "606.075px" }}
                        >
                          <div className="owl-carousel-item">
                            <div className="testimonial-inner">
                              <div className="post-excerpt">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took..
                              </div>
                              {/* .post-excerpt */}
                              <h3 className="post-title-head">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/testimonial/jackin-martinez/"
                                  className="client-name post-title"
                                >
                                  Jackin Martinez
                                </a>
                              </h3>
                              <div className="top-meta clearfix">
                                <ul className="nav top-meta-list meta-left">
                                  <li>
                                    <div className="testimonial-designation">
                                      <div className="post-designation-head">
                                        Dentist
                                      </div>
                                    </div>
                                    {/* .testimonial-designation */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* .testimonial-inner */}
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "606.075px" }}
                        >
                          <div className="owl-carousel-item">
                            <div className="testimonial-inner">
                              <div className="post-excerpt">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took..
                              </div>
                              {/* .post-excerpt */}
                              <h3 className="post-title-head">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/testimonial/saarah-roberts/"
                                  className="client-name post-title"
                                >
                                  Saarah Roberts
                                </a>
                              </h3>
                              <div className="top-meta clearfix">
                                <ul className="nav top-meta-list meta-left">
                                  <li>
                                    <div className="testimonial-designation">
                                      <div className="post-designation-head">
                                        General Dentist
                                      </div>
                                    </div>
                                    {/* .testimonial-designation */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* .testimonial-inner */}
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "606.075px" }}
                        >
                          <div className="owl-carousel-item">
                            <div className="testimonial-inner">
                              <div className="post-excerpt">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took..
                              </div>
                              {/* .post-excerpt */}
                              <h3 className="post-title-head">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/testimonial/kristen-stewart/"
                                  className="client-name post-title"
                                >
                                  Kristen Stewart
                                </a>
                              </h3>
                              <div className="top-meta clearfix">
                                <ul className="nav top-meta-list meta-left">
                                  <li>
                                    <div className="testimonial-designation">
                                      <div className="post-designation-head">
                                        Cosmetic Dentist
                                      </div>
                                    </div>
                                    {/* .testimonial-designation */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* .testimonial-inner */}
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "606.075px" }}
                        >
                          <div className="owl-carousel-item">
                            <div className="testimonial-inner">
                              <div className="post-excerpt">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took..
                              </div>
                              {/* .post-excerpt */}
                              <h3 className="post-title-head">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/testimonial/kate-johnson/"
                                  className="client-name post-title"
                                >
                                  Kate Johnson
                                </a>
                              </h3>
                              <div className="top-meta clearfix">
                                <ul className="nav top-meta-list meta-left">
                                  <li>
                                    <div className="testimonial-designation">
                                      <div className="post-designation-head">
                                        Dentist
                                      </div>
                                    </div>
                                    {/* .testimonial-designation */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* .testimonial-inner */}
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "606.075px" }}
                        >
                          <div className="owl-carousel-item">
                            <div className="testimonial-inner">
                              <div className="post-excerpt">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took..
                              </div>
                              {/* .post-excerpt */}
                              <h3 className="post-title-head">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/testimonial/jackin-martinez/"
                                  className="client-name post-title"
                                >
                                  Jackin Martinez
                                </a>
                              </h3>
                              <div className="top-meta clearfix">
                                <ul className="nav top-meta-list meta-left">
                                  <li>
                                    <div className="testimonial-designation">
                                      <div className="post-designation-head">
                                        Dentist
                                      </div>
                                    </div>
                                    {/* .testimonial-designation */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* .testimonial-inner */}
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "606.075px" }}
                        >
                          <div className="owl-carousel-item">
                            <div className="testimonial-inner">
                              <div className="post-excerpt">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took..
                              </div>
                              {/* .post-excerpt */}
                              <h3 className="post-title-head">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/testimonial/saarah-roberts/"
                                  className="client-name post-title"
                                >
                                  Saarah Roberts
                                </a>
                              </h3>
                              <div className="top-meta clearfix">
                                <ul className="nav top-meta-list meta-left">
                                  <li>
                                    <div className="testimonial-designation">
                                      <div className="post-designation-head">
                                        General Dentist
                                      </div>
                                    </div>
                                    {/* .testimonial-designation */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* .testimonial-inner */}
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "606.075px" }}
                        >
                          <div className="owl-carousel-item">
                            <div className="testimonial-inner">
                              <div className="post-excerpt">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took..
                              </div>
                              {/* .post-excerpt */}
                              <h3 className="post-title-head">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/testimonial/kristen-stewart/"
                                  className="client-name post-title"
                                >
                                  Kristen Stewart
                                </a>
                              </h3>
                              <div className="top-meta clearfix">
                                <ul className="nav top-meta-list meta-left">
                                  <li>
                                    <div className="testimonial-designation">
                                      <div className="post-designation-head">
                                        Cosmetic Dentist
                                      </div>
                                    </div>
                                    {/* .testimonial-designation */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* .testimonial-inner */}
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "606.075px" }}
                        >
                          <div className="owl-carousel-item">
                            <div className="testimonial-inner">
                              <div className="post-excerpt">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry’s standard dummy text ever
                                since the 1500s, when an unknown printer took..
                              </div>
                              {/* .post-excerpt */}
                              <h3 className="post-title-head">
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/testimonial/kate-johnson/"
                                  className="client-name post-title"
                                >
                                  Kate Johnson
                                </a>
                              </h3>
                              <div className="top-meta clearfix">
                                <ul className="nav top-meta-list meta-left">
                                  <li>
                                    <div className="testimonial-designation">
                                      <div className="post-designation-head">
                                        Dentist
                                      </div>
                                    </div>
                                    {/* .testimonial-designation */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* .testimonial-inner */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                      >
                        <i className="ti-angle-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next"
                      >
                        <i className="ti-angle-right" />
                      </button>
                    </div>
                    <div className="owl-dots disabled" />
                  </div>
                  {/* .owl-carousel */}
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-558716da e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
              data-id="558716da"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-69875752 e-flex e-con-boxed e-con e-child"
                data-id={69875752}
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div className="e-con-inner"></div>
              </div>
              <div
                className="elementor-element elementor-element-3418b532 e-flex e-con-boxed e-con e-child"
                data-id="3418b532"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div className="e-con-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* .entry-content */}
  </div>
  {/* .post-inner */}
</article>

       <Footer></Footer>
        </>
    )
}