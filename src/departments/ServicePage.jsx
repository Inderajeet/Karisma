import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentSection from "./service templates/ContentSection";
import SlidingDoct from "./service templates/SlidingDoct";
import CommonServiceBanner from "./CommonServiceBanner";
import i18n from "i18next";
import ImageContentNew from "./service templates/ImageContentNew";
import ColorSection from "./service templates/ColorSection";

const extractSections = (html) => {
    if (!html) return [];

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const sections = [];
    let currentSection = {};

    Array.from(tempDiv.childNodes).forEach(node => {
        // Handle heading tags (h1-h6)
        if (/^H[1-6]$/.test(node.nodeName)) {
            // Push current section if it has content
            if (currentSection.title || currentSection.description || currentSection.features) {
                sections.push(currentSection);
                currentSection = {};
            }
            currentSection.title = node.textContent.trim();
        }
        // Handle paragraph tags
        else if (node.nodeName === 'P') {
            const text = node.textContent.trim();
            if (text) {
                // Check for bold/strong text (treated as heading)
                if (node.querySelector('b') || node.querySelector('strong')) {
                    if (!currentSection.heading) {
                        currentSection.heading = text;
                    } else if (!currentSection.heading2) {
                        currentSection.heading2 = text;
                    }
                } 
                // Regular paragraph text
                else {
                    if (!currentSection.description) {
                        currentSection.description = text;
                    } else {
                        currentSection.description2 = text;
                    }
                }
            }
        }
        // Handle unordered/ordered lists
        else if (node.nodeName === 'UL' || node.nodeName === 'OL') {
            currentSection.features = Array.from(node.querySelectorAll('li')).map(li => li.textContent.trim());
        }
        // Handle images
        else if (node.nodeName === 'IMG') {
            currentSection.imageUrl = node.getAttribute('src');
            currentSection.imageAlt = node.getAttribute('alt') || '';
        }
        // Handle divs (may contain nested content)
        else if (node.nodeName === 'DIV') {
            // Recursively process div content
            const divSections = extractSections(node.innerHTML);
            if (divSections.length > 0) {
                // Merge the last section if they have compatible content
                if (currentSection.title || currentSection.description || currentSection.features) {
                    const lastDivSection = divSections[divSections.length - 1];
                    if (!currentSection.title && lastDivSection.title) {
                        currentSection.title = lastDivSection.title;
                    }
                    if (!currentSection.heading && lastDivSection.heading) {
                        currentSection.heading = lastDivSection.heading;
                    }
                    if (!currentSection.description && lastDivSection.description) {
                        currentSection.description = lastDivSection.description;
                    }
                    if (lastDivSection.features) {
                        currentSection.features = [...(currentSection.features || []), ...lastDivSection.features];
                    }
                    sections.push(currentSection, ...divSections.slice(0, -1));
                } else {
                    sections.push(...divSections);
                }
                currentSection = {};
            }
        }
    });

    // Push the last section if it has content
    if (currentSection.title || currentSection.description || currentSection.features) {
        sections.push(currentSection);
    }
    return sections;
};

const ServicePage = () => {
    const { deptName, serviceName } = useParams();
    const [service, setService] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`/api/servicepage`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.status && Array.isArray(data.data)) {
                    const foundService = data.data.find(s =>
                        s.canonical_name === serviceName &&
                        s.department && s.department.canonical_name === deptName
                    );
                    
                    if (foundService) {
                        setService(foundService);
                        // Extract sections from the service description
                        const extractedSections = extractSections(foundService.service_description);
                        setSections(extractedSections);
                    } else {
                        setError("Service not found");
                    }
                } else {
                    setError("Invalid service data format");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch service data:", err);
                setError(`Failed to fetch service data: ${err.message}`);
                setLoading(false);
            });
    }, [deptName, serviceName]);

    // ... keep the doctors fetch useEffect the same ...

    if (loading) return <p>Loading service details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!service) return <p>Service not found!</p>;

    const filteredDoctors = doctors.filter((doctor) =>
        service?.department?.department_name &&
        doctor.department?.toLowerCase() === service.department.department_name.toLowerCase()
    );

    const bannerSections = extractSections(service.banner_description);
    const combinedBannerContent = {
        title: service.service_name, // Use service name as main title
        imageUrl: service.banner_image ? `/uploads/${service.banner_image}` : "/assets/Images/default-banner.png",
        imageAlt: service.service_name,
        heading: bannerSections[0]?.title || '', 
        heading2: bannerSections[1]?.title || '',
        description: bannerSections[0]?.description || '',
        description2: bannerSections[1]?.description || '',
        features: bannerSections.flatMap(section => section.features || [])
    };

    return (
        <>
            <CommonServiceBanner
                deptName={service.department?.department_name || ''}
                serviceName={service.service_name}
                bannerImage={service.banner_image ? `/uploads/${service.banner_image}` : "/assets/Images/default-banner.png"}
                deptLink={`/departments/${service.department?.canonical_name || ''}`}
                bannerPosition="center"
                home="Home" 
            />

            <ImageContentNew
                key="combined-banner"
                title={combinedBannerContent.title}
                heading={combinedBannerContent.heading}
                heading2={combinedBannerContent.heading2}
                description={combinedBannerContent.description}
                description2={combinedBannerContent.description2}
                features={combinedBannerContent.features}
                imageUrl={combinedBannerContent.imageUrl}
                imageAlt={combinedBannerContent.imageAlt}
            />

            {sections.map((section, index) => (
                <React.Fragment key={index}>
                    {index % 2 === 0 ? (
                        <ContentSection
                            title={section.title}
                            description={section.description}
                            features={section.features}
                        />
                    ) : (
                        <div style={{ backgroundColor: '#c4a98863', paddingTop: '1rem', paddingBottom: '1rem' }}>
                            <ColorSection
                                title={section.title}
                                heading={section.title}
                                description={section.description}
                                features={section.features}
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}

            {filteredDoctors.length > 0 && (
                <SlidingDoct
                    doctors={filteredDoctors}
                    isRTL={false}
                />
            )}

            <div className="line-container" style={{ display: "flex", width: "100%", justifyContent: "center", paddingTop: "60px" }}>
                <hr className="half-line" style={{ width: "50%", border: "0", height: "2px", backgroundColor: "#111", margin: "0" }} />
            </div>
        </>
    );
};
export default ServicePage;
