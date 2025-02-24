import AppointmentButton from "../components/AppointmentButton";
import Banner from "../components/Banner";
import ContactDetail from "../components/ContactDetail";
import ContactForm from "../components/ContactForm";
import HomeSlider from "../components/HomeSlider";
import { useTranslation } from "react-i18next";
import '../components/Home.css';
import DynamicBanner from "../components/DynamicBanner";


export default function ContactPage() {
    const { t, i18n } = useTranslation('contact');

    const contact = t('contact', { returnObjects: true });  // Fetch the entire contact object
    // const contact = t('contact', { returnObjects: true }) || {};
    console.log(contact);
    console.log('i18next current language:', i18n.language);
    console.log('Full contact translations:', t('contact', { returnObjects: true }));


    return (
        <>
    <DynamicBanner  deptName="Contact Us" serviceName="" bannerImage="https://damasmc.com/uploads/banners/bannerimage68e2318425ebbe7d65777d85eb6a11ecbabc116c.jpg" />
    <div className="customContainer ">
                <div className="row">
                    <div className="col-md-12 order-md-2">
                        <article
                            className="post-73311 page type-page status-publish hentry"
                            id="post-73311"
                        >
                            <div className="post-inner">
                                <div className="entry-content">
                                    <div
                                        data-elementor-type="wp-page"
                                        data-elementor-id={73311}
                                        className="elementor elementor-73311"
                                    >
                                        <div
                                            className="elementor-element elementor-element-2c75043 e-flex e-con-boxed e-con e-parent"
                                            data-id="2c75043"
                                            data-element_type="container"
                                            data-settings='{"background_background":"classic"}'
                                        >
                                            <div className="e-con-inner" style={{ padding: '60px 0' }}>
                                                <div
                                                    className="elementor-element elementor-element-27105168 e-flex e-con-boxed e-con e-child"
                                                    data-id={27105168}
                                                    data-element_type="container"
                                                >
                                                    <div className="e-con-inner">
                                                        <div
                                                            className="elementor-element elementor-element-72580fb5 e-flex e-con-boxed e-con e-child"
                                                            data-id="72580fb5"
                                                            data-element_type="container"
                                                        >
                                                            <div className="e-con-inner">
                                                                <div
                                                                    className="elementor-element elementor-element-6859ace0 elementor-widget elementor-widget-ceasectiontitle"
                                                                    data-id="6859ace0"
                                                                    data-element_type="widget"
                                                                    data-widget_type="ceasectiontitle.default"
                                                                >
                                                                    <div className="elementor-widget-container">
                                                                        <div className="section-title-wrapper">
                                                                            <div className="title-wrap">
                                                                                <h2 className="section-title">
                                                                                    {contact.heading}
                                                                                </h2>
                                                                            </div>
                                                                            {/* .title-wrap */}
                                                                            <div className="section-description">
                                                                                <h3 style={{ color: "#577065", fontWeight: 'bold' }}>{contact.workingHours}</h3>
                                                                                <p className="section-content" style={{ color: '#5C4033' }}>
                                                                                    {contact.workingHoursDesc1}<br></br>
                                                                                    {contact.workingHoursDesc2}
                                                                                </p>
                                                                            </div>
                                                                            {/* .section-description */}
                                                                        </div>
                                                                        {/* .section-title-wrapper */}
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="elementor-element elementor-element-3d4480e2 e-flex e-con-boxed e-con e-child"
                                                                    data-id="3d4480e2"
                                                                    data-element_type="container"
                                                                >
                                                                    <div className="e-con-inner">
                                                                        <AppointmentButton></AppointmentButton>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ContactForm></ContactForm>
                                                    </div>
                                                </div>
                                                <ContactDetail></ContactDetail>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-1266c646 e-con-full e-flex e-con e-parent"
                                            data-id="1266c646"
                                            data-element_type="container"
                                        >
                                            <div
                                                className="elementor-element elementor-element-120ecd75 elementor-widget elementor-widget-google_maps"
                                                data-id="120ecd75"
                                                data-element_type="widget"
                                                data-widget_type="google_maps.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-custom-embed">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.571934740014!2d55.4080799!3d25.3856592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59a94f0585bf%3A0xb9dd440e8cd8f955!2sKarisma%20Medical%20Center!5e0!3m2!1sen!2sin!4v1737625891521!5m2!1sen!2sin"
                                                            //  width="600" 
                                                            //  height="450" 
                                                            //  style="border:0;"
                                                            title="Karisma Medical Center"
                                                            aria-label="Karisma Medical Center"
                                                            allowfullscreen=""
                                                            loading="lazy"></iframe>
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
                        {/* .post */}
                    </div>
                    {/* .col */}
                </div>
                {/* .row */}
            </div>
        </>

    );
}