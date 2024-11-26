export default function Footer() {
    return (
        <>
        <footer id="site-footer" className="site-footer" >
            <div className="site-footer-wrap container-fluid p-0" >
              <div className="footer-widgets-wrap" style={{backgroundColor:'#405D53'}}>
                <div className="container">
                  <div className="row">
                    <aside className="footer-widget-2 col-md-12">
                      <div className="widget widget_block">
                        <div className="widget-content">
                          <div className="wp-block-columns cus-footer-middle is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                            <div
                              className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                              style={{ flexBasis: "40%" }}
                            >
                              <figure className="wp-block-image size-full is-resized">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width={200}
                                  height={68}
                                  src="./https://dental.dmaksolutions.com/assets/Images/logo_main-3.png"
                                  alt=""
                                  className="wp-image-71634"
                                  style={{ width: 158 }}
                                />
                              </figure>
                              <p className="custom-footer-txt" style={{fontFamily: 'Tajawal variant2', color:"white", fontSize:'15px'}}>
                              Karisma's philosophy is that true beauty lies within everyone, and
through their innovative, luxurious treatments, they help
individuals embrace their natural allure and shine in their own way.
                              </p>
                              <div className="widget happysmile_mailchimp_widget">
                                <div className="mailchimp-wrapper">
                                  <form
                                    className="zozo-mc-form"
                                    id="zozo-mc-form"
                                    method="post"
                                  >
                                    <input
                                      type="hidden"
                                      name="happysmile_mc_listid"
                                      defaultValue=""
                                    />
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="form-control zozo-mc-email"
                                        required="required"
                                        id="zozo-mc-email"
                                        placeholder="Email Address"
                                        name="zozo_mc_email"
                                      />
                                      <button className="input-group-addon zozo-mc btn btn-default" style={{backgroundColor:'#916F4D'}}>
                                        <span className="bi bi-send"  />
                                      </button>
                                    </div>
                                  </form>
                                  {/*Mailchimp Custom Script*/}
                                  <div
                                    className="mc-notice-group"
                                    data-success="Success."
                                    data-fail="Failure."
                                  >
                                    <span className="mc-notice-msg" />
                                  </div>
                                  {/* .mc-notice-group */}
                                </div>
                                {/* .mailchimp-wrapper */}
                              </div>
                            </div>
                            <div
                              className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                              style={{ flexBasis: "30%" }}
                            >
                              <div className="widget widget_nav_menu">
                                <h2 className="widgettitle" style={{fontFamily: 'Tajawal variant2',color:'#ACB9D0 '}}>Department</h2>
                                <div className="menu-footer-service-container">
                                  <ul id="menu-footer-service" className="menu">
                                    <li
                                      id="menu-item-73656"
                                      className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73656"
                                    >
                                      <a href="/" style={{fontFamily: 'Tajawal variant2'}}>
                                        Dental
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73657"
                                      className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73657"
                                    >
                                      <a href="" style={{fontFamily: 'Tajawal variant2'}}>
                                        Derma
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73654"
                                      className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73654"
                                    >
                                      <a href="/" style={{fontFamily: 'Tajawal variant2'}}>
                                       Laser Hair Removal
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73658"
                                      className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73658"
                                    >
                                      <a href="/" style={{fontFamily: 'Tajawal variant2'}}>
                                       Skin Care
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73655"
                                      className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73655"
                                    >
                                      <a href="/" style={{fontFamily: 'Tajawal variant2'}}>
                                        
                                      Gynecology                                                                                        
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73655"
                                      className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-73655"
                                    >
                                      <a href="/" style={{fontFamily: 'Tajawal variant2'}}>
                                        
                                      Slimming                                                                                        
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div
                              className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                              style={{ flexBasis: "30%" }}
                            >
                              <div className="widget widget_nav_menu">
                                <h2 className="widgettitle" style={{fontFamily: 'Tajawal variant2', color:'#ACB9D0 '}}>Quick Links</h2>
                                <div className="menu-quicklinks-container">
                                  <ul id="menu-quicklinks" className="menu">
                                    <li
                                      id="menu-item-73637"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73637"
                                    >
                                      <a href="/about" style={{fontFamily: 'Tajawal variant2'}}>
                                        About
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73636"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73636"
                                    >
                                      <a href="/doctor" style={{fontFamily: 'Tajawal variant2'}}>
                                        Our Doctors
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73639"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73639"
                                    >
                                      <a href="/" style={{fontFamily: 'Tajawal variant2'}}>
                                        Offers
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73640"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73640"
                                    >
                                      <a href="" style={{fontFamily: 'Tajawal variant2'}}>
                                        Careers
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-73638"
                                      className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-73311 current_page_item menu-item-73638"
                                    >
                                      <a
                                        href="/contact_us"
                                        style={{fontFamily: 'Tajawal variant2'}}
                                      >
                                        Contact Us
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </aside>
                    <aside className="footer-widget-2 col-md-4" style={{backgroundColor:'#405D53', display:'none'}}>
                      <div className="widget widget_block" style={{backgroundColor:'#405D53'}}>
                        <div className="widget-content" style={{backgroundColor:'#405D53'}}>
                          <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex" style={{backgroundColor:'#405D53'}}>
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                              <div className="footer-contact cus-footer-middle-2">
                                <h3 className="footer-title">
                                  Schedule An Appointment Today
                                </h3>
                                <a
                                  href="https://wordpress.zozothemes.com/happysmile/contact-us/"
                                  className="btn btn-primary"
                                >
                                  <span>
                                    APPOINTMENT <i className="fas fa-tooth" />
                                  </span>
                                </a>
                                <div className="contact-time">
                                  09 : 00 AM - 08 : 00 PM
                                </div>
                                <div className="contact-day">Monday - Sunday</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </aside>
                  </div>
                  {/* .row */}
                </div>
                {/* .container */}
              </div>
              {/* .footer-widgets-wrap */}
              <div className="footer-bottom-wrap">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <ul className="nav copyright-bar-ul element-left right-element-exist">
                        {" "}
                        <li>
                          <p className="footer-copyright" style={{color:'white'}}>
                            © Copyright 2024. All rights reserved {" "}
                            <a
                              href="https://wordpress.zozothemes.com/happysmile/"
                              target="_blank" style={{color:'#465F7E'}}
                            >
                              Karisma
                            </a>
                            , Designed by 
                             <a href="https://dmaksolutions.com/" target="_blank" style={{color:'#465F7E'}}>
                             <span style={{paddingLeft:'5px'}}> Dmak Solutions</span>
                            </a>
                          </p>
                        </li>
                      </ul>
                      <ul className="nav copyright-bar-ul pull-right justify-content-end right-element-exist">
                        {" "}
                        <li>
                          <aside className="copyright-widget">
                            <div className="widget zozo_social_widget">
                              <div className="widget-content">
                                <ul className="nav social-icons social-widget widget-content social-transparent social-white social-h-black social-bg-transparent social-hbg-transparent">
                                  <li>
                                    <a
                                      href="#"
                                      target="_blank"
                                      className="social-facebook" style={{backgroundColor:'#405D53'}}
                                    >
                                      <i className="bi bi-facebook" />
                                    </a>
                                  </li>{" "}
                                  <li>
                                    <a
                                      href="#"
                                      target="_blank"
                                      className="social-twitter" style={{backgroundColor:'#405D53'}}
                                    >
                                      <i className="bi bi-twitter-x" />
                                    </a>
                                  </li>{" "}
                                  <li>
                                    <a
                                      href="#"
                                      target="_blank"
                                      className="social-instagram" style={{backgroundColor:'#405D53'}}
                                    >
                                      <i className="bi bi-instagram" />
                                    </a>
                                  </li>{" "}
                                  <li>
                                    <a
                                      href="#"
                                      target="_blank"
                                      className="social-pinterest" style={{backgroundColor:'#405D53'}}
                                    >
                                      <i className="bi bi-pinterest" />
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </div>{" "}
                          </aside>
                        </li>
                      </ul>{" "}
                    </div>
                    {/* .col-12 */}
                  </div>
                  {/* .row */}
                </div>
                {/* .container */}
              </div>
              {/* .footer-bottom-wrap */}
            </div>
            {/* .container */}
          </footer>
        </>
    );
}