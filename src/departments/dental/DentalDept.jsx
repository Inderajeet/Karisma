import React, { useEffect, useState } from "react";
import ContentSection from "../service templates/ContentSection";
import CardSection from "../service templates/CardSection";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import ImageContent from "../service templates/ImageContent"
import SlidingDoct from "../service templates/SlidingDoct";
import VideoSection from "../../components/VideoSection";
import OffersTemplate from "../service templates/OffersTemplate";
import ListServices from "../service templates/ListServices";
import ListServicesNoImg from "../service templates/ListServicesNoImg";
import HeaderTitle from "../service templates/HeaderTitle";
import DentalBanner from "./DentalBanner";
import ColorHeading from "../service templates/ColorHeading";
import ContSection from "../service templates/ContSection";
import SubHeadingColor from "../service templates/SubHeading";
import SubHeadingColorLast from "../service templates/SubHeadingColorLast";
import ColorSection from "../service templates/ColorSection";

const DentalDept = () => {
    const { t, i18n } = useTranslation('dentaldept');

    // Correct way to access the data:
    const serviceData = t('dentaldept', { returnObjects: true });

    // Check if the translation returned an array and access the first element
    const service = Array.isArray(serviceData) && serviceData.length > 0 ? serviceData[0] : null;

    if (!service) {
        return <div>{t('Loading...') || 'Loading...'}</div>; // Handle the case where translation is not yet loaded
    }


    return (
        <>
            {/* <BannerSkinCare /> */}
            <div className="">
                {service.sections.map((section, index) => {
                    console.log('Section-services:', section.listServices);  // Debugging: log section
                    if (section.type === "content") {
                        return (
                            <div style={{  paddingTop: '1rem', paddingBottom: '1rem' }}>

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
                    }if (section.type === "cont-content") {
                        return (
                            <div style={{  paddingTop: '1rem', paddingBottom: '0rem' }}>

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
                            <div style={{  paddingTop: '0rem', paddingBottom: '1rem' }}>

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
                    }else if (section.type === "center-content") {
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
                            <div style={{ backgroundColor: '#c4a98863', paddingTop: '1rem'}}>
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
                    }else if (section.type === "sub-heading-color-content-last") {
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
                    }else if (section.type === "sub-heading-content-last") {
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
                    }else if (section.type === "sub-heading-content") {
                        return (
                            <div style={{  paddingTop: '0rem', paddingBottom: '0rem' }}>
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
                            <div style={{ backgroundColor: '#c4a98863', paddingTop: '1rem'}}>
                                <ColorHeading
                                    key={index}
                                    title={section.title}
                                    heading={section.heading}
                                    description={section.description}
                                    features={section.features}
                                />
                            </div>
                        );
                    } else if (section.type === "banner") {
                        return (
                            <DentalBanner
                                deptName={section.deptName}
                                serviceName={section.serviceName}
                                bannerImage={section.bannerImage}
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
                            <div style={{ backgroundColor: '#c4a98863' }}>
                                <ListServices key={index} services={section.listServices} />
                            </div>);
                    } else if (section.type === "list-services-noImage") {
                        console.log('Related services:', section.listServices);  // Debugging: log related services
                        return (
                            <div style={{ backgroundColor: '#c4a98863' }}>
                                <ListServicesNoImg key={index} services={section.listServices} />
                            </div>);
                    }
                    return null;  // If no valid section type found
                })}
                {/* <Doctors /> */}
            </div>
            <div className="line-container" style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '60px' }}>
                <hr className="half-line" style={{ width: '50%', border: '0', height: '2px', backgroundColor: '#111', margin: '0' }} />
            </div>
        </>
    );
};

export default DentalDept;
