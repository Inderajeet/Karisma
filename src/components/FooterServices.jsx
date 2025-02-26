import React, { useEffect, useState } from "react";
import ContentSection from "../departments/service templates/ContentSection";
import CardSection from "../departments/service templates/CardSection";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import Banner from "./Banner";
import ImageContent from "../departments/service templates/ImageContent"
import SlidingDoct from "../departments/service templates/SlidingDoct";
import VideoSection from "./VideoSection";
import OffersTemplate from "../departments/service templates/OffersTemplate";
import Doctors from "../pages/doctor";
import ListServices from "../departments/service templates/ListServices";

const FooterServices = () => {
    const { t, i18n } = useTranslation('footerServices');
    // const services = t('services', { returnObjects: true });

    const { footSerName } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState(null);
    // Load services from translations
    useEffect(() => {
        const servicesData = t('footerServices:footerServices', { returnObjects: true });
        setServices(servicesData);
    }, [t]);

    // Find the current doctor
    useEffect(() => {
        if (services.length > 0) {
            const foundService = services.find((doc) => doc.name === decodeURIComponent(footSerName));
            setService(foundService);
        }
    }, [services, footSerName]);
    console.log('Found Service:', services);  // Debugging: log found service

    console.log('Services data:', footSerName);  // Debugging: log services
    console.log("gyne services:", decodeURIComponent(footSerName));

    if (!service) return <p>service not found!</p>;

    return (
        <>
            {/* <Banner /> */}
            <div className="customContainer footerServTop">
                {service.sections.map((section, index) => {
                    console.log('Section-services:', section.listServices);  // Debugging: log section
                    if (section.type === "content") {
                        return (
                            <ContentSection
                                key={index}
                                title={section.title}
                                description={section.description}
                                features={section.features}
                            />
                        );
                    } else if (section.type === "image-content") {
                        console.log('ImageContent Data:', section);  // Debugging: log image-content

                        return (
                            <ImageContent
                                key={index}
                                title={section.title} // Pass title
                                imageUrl={section.imageUrl} // Pass image URL
                                imageAlt={section.imageAlt} // Pass image alt text
                                content={section.content} // Pass the content array
                            />
                        );
                    } else if (section.type === "slider-doctors") {
                        console.log('inside doctors')
                        return (

                            <SlidingDoct
                                key={index}
                                doctors={section.doctors} // Pass doctors array
                                cards={section.cards} // Pass card styles
                                isRTL={i18n.dir() === "rtl"} // Pass direction info
                            />
                        );
                    } else if (section.type === "video") {
                        console.log('inside video')
                        return (

                            <VideoSection />
                        );
                    }
                    else if (section.type === "offers") {
                        return <OffersTemplate key={index} offers={section.offers} />;
                    }
                    else if (section.type === "list-services") {
                        console.log('Related services:', section.listServices);  // Debugging: log related services
                        return <ListServices key={index} services={section.listServices} />;
                    }
                    return null;  // If no valid section type found
                })}
                {/* <Doctors /> */}
            </div>
                <div className="line-container" style={{ display: 'flex', width: '100%', justifyContent: 'center' , paddingTop:'10px'}}>
                    <hr className="half-line" style={{ width: '50%', border: '0', height: '3px', backgroundColor: '#111', margin: '0' }} />
                </div>
        </>
    );
};

export default FooterServices;
