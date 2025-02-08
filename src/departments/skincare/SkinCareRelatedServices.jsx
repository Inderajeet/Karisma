import React, { useEffect, useState } from "react";
import ContentSection from "../service templates/ContentSection";
import CardSection from "../service templates/CardSection";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import ImageContent from "../service templates/ImageContent";
import SlidingDoct from "../service templates/SlidingDoct";
import VideoSection from "../../components/VideoSection";
import OffersTemplate from "../service templates/OffersTemplate";
import ListServices from "../service templates/ListServices";
import BannerSkinCare from "../../components/BannerSkinCare";
import HeaderTitle from "../service templates/HeaderTitle";

const SkinCareRelatedServices = () => {
    const { t, i18n } = useTranslation('skinCareRelated');
    const { serviceName, subService } = useParams();  // Extract sub-service too

    const [service, setService] = useState(null);

    useEffect(() => {
        const servicesData = t('skinCareRelated:skinCareRelated', { returnObjects: true });

        // 🔹 Split the name from JSON: "facials/basic-hydraFacial" → ["facials", "basic-hydraFacial"]
        const foundService = servicesData.find(service => {
            const serviceParts = service.name.split("/");
            return serviceParts[0] === serviceName; // Match only the main service name
        });

        setService(foundService || null);
    }, [t, serviceName]);

    if (!service) return <p>Service not found!</p>;

    return (
        <>
            <div className="relatedServices">
                {service.sections.map((section, index) => {
                    console.log('Section-services:', section.listServices);

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
                        return (
                            <ImageContent
                                key={index}
                                title={section.title}
                                imageUrl={section.imageUrl}
                                imageAlt={section.imageAlt}
                                content={section.content}
                            />
                        );
                    } else if (section.type === "slider-doctors") {
                        return (
                            <SlidingDoct
                                key={index}
                                doctors={section.doctors}
                                cards={section.cards}
                                isRTL={i18n.dir() === "rtl"}
                            />
                        );
                    } else if (section.type === "video") {
                        return <VideoSection />;
                    } else if (section.type === "offers") {
                        return <OffersTemplate key={index} offers={section.offers} />;
                    } else if (section.type === "list-services") {
                        return <ListServices key={index} services={section.listServices} />;
                    } else if (section.type === "card") {
                        if (Array.isArray(section.cards)) {
                            return (
                                <div className="flxBx custsectionStyle customContainer" key={index}>
                                    {section.cards.map((card, cardIndex) => (
                                        <CardSection
                                            key={cardIndex}
                                            title={card.title}
                                            subtitle={card.subtitle}
                                            description={card.description}
                                            subtitle2={card.subtitle2}
                                            description2={card.description2}
                                            features={card.features}
                                        />
                                    ))}
                                </div>
                            );
                        }
                    }
                    return null;
                })}
            </div>
        </>
    );
};

export default SkinCareRelatedServices;
