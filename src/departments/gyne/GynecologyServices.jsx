import React, { useEffect, useState } from "react";
import ContentSection from "../service templates/ContentSection";
import CardSection from "../service templates/CardSection";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import Banner from "../../components/Banner";
import ImageContent from "../service templates/ImageContent"
import SlidingDoct from "../service templates/SlidingDoct";
import VideoSection from "../../components/VideoSection";
import OffersTemplate from "../service templates/OffersTemplate";
import Doctors from "../../pages/doctor";
import RelatedServices from "../service templates/RelatedServices";

const GynecologyServices = () => {
    const { t, i18n } = useTranslation('gyneServices');
    // const services = t('services', { returnObjects: true });

    const { serviceName } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState(null);
    // Load services from translations
    useEffect(() => {
        const servicesData = t('gyneServices:gyneServices', { returnObjects: true });
        setServices(servicesData);
    }, [t]);

    // Find the current doctor
    useEffect(() => {
        if (services.length > 0) {
            const foundService = services.find((doc) => doc.name === decodeURIComponent(serviceName));
            setService(foundService);
        }
    }, [services, serviceName]);
    console.log('Found Service:', services);  // Debugging: log found service

    console.log('Services data:', serviceName);  // Debugging: log services
    console.log("gyne services:", decodeURIComponent(serviceName));

    if (!service) return <p>service not found!</p>;

    return (
        <>
            <Banner />
            <div className="happysmile-content-wrap container page">
                {service.sections.map((section, index) => {
                    console.log('Section-services:', section.relatedservices);  // Debugging: log section
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
                    else if (section.type === "related-services") {
                        console.log('Related services:', section.relatedservices);  // Debugging: log related services
                        return <RelatedServices key={index} services={section.relatedservices} />;
                    }
                    return null;  // If no valid section type found
                })}
                {/* <Doctors /> */}
            </div>
        </>
    );
};

export default GynecologyServices;
