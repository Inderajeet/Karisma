import React, { useEffect, useState } from "react";
import ContentSection from "./ContentSection";
import CardSection from "./CardSection";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import Banner from "../../components/Banner";

const RelatedService = () => {
    const { t, i18n } = useTranslation('services');
    // const services = t('services', { returnObjects: true });

        const { serviceName } = useParams();
        const [services, setServices] = useState([]);
        const [service, setService] = useState(null);
    // Load services from translations
    useEffect(() => {
        const servicesData = t('services:services', { returnObjects: true });
        setServices(servicesData);
    }, [t]);

    // Find the current doctor
    useEffect(() => {
        if (services.length > 0) {
            const foundService = services.find((doc) => doc.name === decodeURIComponent(serviceName));
            setService(foundService);
        }
    }, [services, serviceName]);
    console.log('Found Service:', service);  // Debugging: log found service

    console.log('Services data:', serviceName);  // Debugging: log services
    console.log("Doctor Name:", decodeURIComponent(serviceName));

    if (!service) return <p>service not found!</p>;

    return (
        <>
            <Banner />
            <div className="happysmile-content-wrap container page">
                {service.sections.map((section, index) => {
                    console.log('Section:', section);  // Debugging: log section

                    if (section.type === "content") {
                        return (
                            <ContentSection
                                key={index}
                                title={section.title}
                                description={section.description}
                                features={section.features}
                            />
                        );
                    } else if (section.type === "card") {
                        console.log('Cards data:', section.cards);  // Debugging: log cards

                        if (Array.isArray(section.cards)) {
                            return (
                                <div className="flxBx" key={index}>
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
                        } else {
                            return <p>No cards available</p>;  // In case section.cards is not an array
                        }
                    }
                    return null;  // If no valid section type found
                })}
            </div>
        </>
    );
};

export default RelatedService;
