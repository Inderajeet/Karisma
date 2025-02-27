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
import ColorHeading from "../service templates/ColorHeading";
import ContSection from "../service templates/ContSection";
import SubHeadingColor from "../service templates/SubHeading";
import SubHeadingColorLast from "../service templates/SubHeadingColorLast";
import ColorSection from "../service templates/ColorSection";

const DermaRelatedServices = () => {
    const { t, i18n } = useTranslation('dermaRelated');
    const { serviceName, subService } = useParams(); // Extract category & sub-service

    const [service, setService] = useState(null);

    useEffect(() => {
        const servicesData = t('dermaRelated:dermaRelated', { returnObjects: true });

        const foundService = servicesData.find(service => service.name === `${serviceName}/${subService}`);

        setService(foundService || null);
    }, [t, serviceName, subService]);

    if (!service) return <p>Service not found!</p>;

    return (
        <>
            <div className="relatedServices">
                {service.sections.map((section, index) => {
                    console.log('Section-services:', section.listServices);

                    if (section.type === "content") {
                        return (
                            <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>

                                <ContentSection
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } if (section.type === "cont-content") {
                        return (
                            <div style={{ paddingTop: '1rem', paddingBottom: '0rem' }}>

                                <ContSection
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } if (section.type === "cont-color-content") {
                        return (
                            <div style={{ backgroundColor: '#c4a98863', paddingTop: '1rem', paddingBottom: '0rem' }}>

                                <ContSection
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } if (section.type === "cont-content-last") {
                        return (
                            <div style={{ paddingTop: '0rem', paddingBottom: '1rem' }}>

                                <ContSection
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "center-content") {
                        return (
                            <div style={{ textAlign: 'center', backgroundColor: '#c4a98863', paddingTop: '2rem' }}>
                                <ContentSection
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    description={section.description}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "color-heading") {
                        return (
                            <div style={{ backgroundColor: '#c4a98863', paddingTop: '1rem' }}>
                                <ColorHeading
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    description={section.description}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "color-content") {
                        return (
                            <div style={{ backgroundColor: '#c4a98863', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                <ColorSection
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "sub-heading-color-content") {
                        return (
                            <div style={{ backgroundColor: '#c4a98863', paddingTop: '0rem', paddingBottom: '0rem' }}>
                                <SubHeadingColor
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "sub-heading-color-content-last") {
                        return (
                            <div style={{ backgroundColor: '#c4a98863', paddingTop: '0rem', paddingBottom: '1rem' }}>
                                <SubHeadingColorLast
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "sub-heading-content-last") {
                        return (
                            <div style={{ paddingTop: '0rem', paddingBottom: '1rem' }}>
                                <SubHeadingColorLast
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "sub-heading-content") {
                        return (
                            <div style={{ paddingTop: '0rem', paddingBottom: '0rem' }}>
                                <SubHeadingColor
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    heading2={section.heading2}
                                    description={section.description}
                                    description2={section.description2}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "header-title") {
                        return (
                            <HeaderTitle
                                key={index}
                                title={section.title}
                                description={section.description}
                            />
                        );
                    } else if (section.type === "color-heading") {
                        return (
                            <div style={{ backgroundColor: '#c4a98863', paddingTop: '1rem' }}>
                                <ColorHeading
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    description={section.description}
                                    features={section.features}
                                />
                            </div>
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
                                <div className="flxBx custsectionStyle customContainer" key={index} style={{paddingTop:'0', paddingBottom:'0'}}>
                                    {section.cards.map((card, cardIndex) => (
                                        <CardSection
                                            key={cardIndex}
                                            title={card.title}
                                            subtitle={card.subtitle}
                                            description={card.description}
                                            title2={card.title2}
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

export default DermaRelatedServices;
