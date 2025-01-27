import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import Doctors from "../../pages/doctor";
import SliderDoct from "../../components/SliderDoct";

const ServiceList = () => {
    const { t, i18n } = useTranslation('services'); // Fetching services translations
    const services = t('services', { returnObjects: true }); // Getting services data
    const navigate = useNavigate();

    // Function to slugify service names for URL-friendly links
    const slugify = (text) =>
        text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    return (
        <>
            <Banner />
            <div className="happysmile-content-wrap container page" style={{ marginTop: "50px" }}>
                <div className="col-md-12 order-md-2">
                    <div className="post-inner">
                        <div className="entry-content">
                            <div className="elementor elementor-73315">
                                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                                    <div className="e-con-inner">
                                        <div className="dd-row">
                                            {services.map((service) => (
                                                <Link
                                                    to={`/${i18n.language}/services/${encodeURIComponent(service.name)}`}
                                                    key={service.id}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <div className="dd-inner">
                                                        <div className="cust-doctor-info-wrap">
                                                            <div
                                                                key={service.name} // Using service name as key
                                                                className="doctor-info-body"
                                                            // onClick={() => navigate(`/services/${slugify(service.name)}`)}
                                                            >
                                                                <div className="doctor-name">{service.name}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderDoct />
        </>
    );
};

export default ServiceList;
