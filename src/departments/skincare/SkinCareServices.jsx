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
import ListServices from "../service templates/ListServices";
import ListServicesNoImg from "../service templates/ListServicesNoImg";
import BannerSkinCare from "../../components/BannerSkinCare";
import HeaderTitle from "../service templates/HeaderTitle";

const SkinCareServices = () => {
    const { t, i18n } = useTranslation('skinCareServices');
    // const services = t('services', { returnObjects: true });

    const { serviceName } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState(null);
    // Load services from translations
    useEffect(() => {
        const servicesData = t('skinCareServices:skinCareServices', { returnObjects: true });
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
            <BannerSkinCare />
            <div className="">
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
                    }else if (section.type === "center-content") {
                        return (
                            <div style={{textAlign: 'center', backgroundColor:'#c4a98863', paddingTop:'2rem'}}> 
                            <ContentSection
                                key={index}
                                title={section.title}
                                description={section.description}
                                features={section.features}
                            />
                            </div>
                        );
                    }else if (section.type === "color-content") {
                        return (
                            <div style={{backgroundColor:'#c4a98863', paddingTop:'2rem'}}> 
                            <ContentSection
                                key={index}
                                title={section.title}
                                description={section.description}
                                features={section.features}
                            />
                            </div>
                        );
                    }else if (section.type === "header-title") {
                        return (
                            <HeaderTitle
                                key={index}
                                title={section.title}
                                description={section.description}
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
                        return (
                        <div style={{backgroundColor:'#c4a98863'}}>
                        <ListServices key={index} services={section.listServices} />
                        </div>);
                    }else if (section.type === "list-services-noImage") {
                        console.log('Related services:', section.listServices);  // Debugging: log related services
                        return (
                            <div style={{backgroundColor:'#c4a98863'}}>
                        <ListServicesNoImg key={index} services={section.listServices} />
                        </div>);
                    }
                    return null;  // If no valid section type found
                })}
                {/* <Doctors /> */}
            </div>
        </>
    );
};

export default SkinCareServices;
