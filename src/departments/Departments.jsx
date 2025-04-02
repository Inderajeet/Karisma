import React, { useEffect, useState } from "react";
import ContentSection from "./service templates/ContentSection";
import { useParams } from "react-router-dom";
import SlidingDoct from "./service templates/SlidingDoct";
import ListServices from "./service templates/ListServices";
import CommonServiceBanner from "./CommonServiceBanner";
import i18n from "i18next";
import ColorSection from "./service templates/ColorSection"; // Make sure to import this
import ImageContent from "./service templates/ImageContent";
import ImageContentNew from "./service templates/ImageContentNew";

export const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text;
    return text.split(/\b/).map((word, index) =>
        /^[A-Za-z0-9 ]+$/.test(word)
            ? word
            : <span key={index} className="fallback-font">{word}</span>
    );
};

const extractSections = (html) => {
    if (!html) return [];

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const sections = [];
    let currentSection = {};

    Array.from(tempDiv.childNodes).forEach(node => {
        if (node.nodeName === 'P') {
            const text = node.textContent.trim();
            if (text) {
                // Check if it's a heading (bold text)
                if (node.querySelector('b') || node.querySelector('strong')) {
                    // If we have content in current section, push it before starting new one
                    if (currentSection.title || currentSection.description || currentSection.imageUrl) {
                        sections.push(currentSection);
                        currentSection = {};
                    }

                    // Check if this is the main title or a sub-heading
                    if (!currentSection.title) {
                        currentSection.title = text;
                    } else if (!currentSection.heading) {
                        currentSection.heading = text;
                    } else {
                        currentSection.heading2 = text;
                    }
                } else {
                    if (!currentSection.description) {
                        currentSection.description = text;
                    } else {
                        currentSection.description2 = text;
                    }
                }
            }
        }
        else if (node.nodeName === 'UL') {
            currentSection.features = Array.from(node.querySelectorAll('li')).map(li => li.textContent);
        }
        else if (node.nodeName === 'IMG') {
            currentSection.imageUrl = node.getAttribute('src');
            currentSection.imageAlt = node.getAttribute('alt') || '';
        }
    });

    // Push the last section if it has content
    if (currentSection.title || currentSection.description || currentSection.imageUrl) {
        sections.push(currentSection);
    }

    return sections;
};

const Departments = () => {
    const { deptName } = useParams();
    const [service, setService] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const deptId = parseInt(deptName, 10);

        if (isNaN(deptId)) {
            console.error("Invalid department ID:", deptName);
            setError("Invalid department ID");
            setLoading(false);
            return;
        }

        Promise.all([
            fetch(`/api/departments/${deptId}`).then((res) => res.json()),
            fetch(`/api/doctors`).then((res) => res.json()),
        ])
            .then(([deptData, doctorData]) => {
                if (deptData && deptData.success && deptData.data) {
                    setService(deptData.data);
                    // Extract sections from the HTML content
                    const extractedSections = extractSections(deptData.data.department_description);
                    setSections(extractedSections);
                } else {
                    throw new Error("Invalid department data format");
                }

                if (doctorData && doctorData.doctors) {
                    setDoctors(doctorData.doctors.slice(1));
                } else {
                    setDoctors([]);
                    console.warn("Invalid doctors data format");
                }

                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch data:", err);
                setError(`Failed to fetch data: ${err.message}`);
                setLoading(false);
            });
    }, [deptName]);

    if (loading) return <p>Loading department details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!service) return <p>Service not found!</p>;

    const filteredDoctors = doctors.filter(
        (doctor) => doctor.department.toLowerCase() === service.department_name.toLowerCase()
    );
    const bannerSections = extractSections(service.banner_description);
    const combinedBannerContent = {
        title: service.department_name, // Use department name as main title
        imageUrl: service.banner_image ? `/uploads/${service.banner_image}` : "/assets/Images/default-banner.png",
        imageAlt: service.department_name,
        heading: bannerSections[0]?.title || '', // First bold text as heading
        heading2: bannerSections[1]?.title || '', // Second bold text as sub-heading
        description: bannerSections[0]?.description || '', // First paragraph
        description2: bannerSections[1]?.description || '', // Second paragraph
        features: bannerSections.flatMap(section => section.features || []) // Combine all features
    };



    return (
        <>
            <div>
                <CommonServiceBanner
                    deptName={service.department_name}
                    serviceName={service.department_name}
                    bannerImage={service.banner_image ? `/uploads/${service.banner_image}` : "/assets/Images/default-banner.png"}
                    deptLink={`/departments/${service.canonical_name}`}
                    bannerPosition="center"
                    home={false}
                />
                <ImageContentNew
                    key="combined-banner"
                    title={combinedBannerContent.title}
                    heading={combinedBannerContent.heading}
                    heading2={combinedBannerContent.heading2}
                    description={combinedBannerContent.description}
                    description2={combinedBannerContent.description2}
                    features={combinedBannerContent.features}
                    imageUrl={service.section_image}
                    imageAlt={service.imageAlt}
                />


                {/* Render alternating sections */}
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
                                    key={index}
                                    title={section.title}
                                    heading={section.title} // Using title as heading if needed
                                    description={section.description}
                                    features={section.features}
                                />
                            </div>
                        )}
                    </React.Fragment>
                ))}

                <ListServices
                    services={service.services?.map(s => ({
                        id: s.id,
                        name: s.service_name,
                        image: s.service_image ? `/uploads/${s.service_image}` : "/assets/Images/default-service.png",
                        link: `${service.canonical_name}/${s.canonical_name}`,
                        readMore: "Read More",
                        designation: ""
                    }))}
                />
            </div>

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

export default Departments;