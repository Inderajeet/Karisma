import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContentSection from "./service templates/ContentSection";
import SlidingDoct from "./service templates/SlidingDoct";
import CommonServiceBanner from "./CommonServiceBanner";
import ImageContent from "./service templates/ImageContent";
import ColorSection from "./service templates/ColorSection";
import ListServices from "./service templates/ListServices";

const parseSectionContent = (html) => {
    if (!html) return { content: [] };

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const result = {
        content: []
    };

    Array.from(tempDiv.childNodes).forEach(node => {
        if (node.nodeName === 'P') {
            const text = node.textContent.trim();
            if (text) {
                const boldElement = node.querySelector('b, strong');
                if (boldElement) {
                    result.content.push({
                        type: 'heading',
                        text: text
                    });
                } else {
                    result.content.push({
                        type: 'paragraph',
                        text: text
                    });
                }
            }
        }
        else if (node.nodeName === 'UL') {
            result.content.push({
                type: 'list',
                items: Array.from(node.querySelectorAll('li')).map(li => li.textContent.trim())
            });
        }
    });

    return result;
};

const Departments = () => {
    const { deptName } = useParams();
    const { i18n } = useTranslation();
    const [department, setDepartment] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        Promise.all([
            fetch(`https://demo.karismamc.com/api/departments/${deptName}`).then((res) => res.json()),
            fetch(`https://demo.karismamc.com/api/doctors`).then((res) => res.json()),
        ])
            .then(([deptData, doctorData]) => {
                if (deptData?.success && deptData.data) {
                    setDepartment(deptData.data);
                } else {
                    throw new Error("Invalid department data format");
                }

                if (doctorData?.doctors) {
                    setDoctors(doctorData.doctors.slice(1));
                }

                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [deptName, i18n.language]); // Add language to dependencies

    if (loading) return <p style={{ padding: "140px" }}></p>;
    if (error) return <p style={{ padding: "140px" }}>Error: {error}</p>;
    if (!department) return <p style={{ padding: "140px" }}></p>;

    const filteredDoctors = doctors.filter(
        doctor => doctor.department?.toLowerCase() === department.department_name?.toLowerCase()
    );

    const getLocalizedContent = (section) => {
        const isArabic = i18n.language === 'ar';

        return {
            title: isArabic && section.section_title_arabic
                ? section.section_title_arabic
                : section.section_title,
            description: isArabic && section.section_description_ar
                ? section.section_description_ar
                : section.section_description,
            imageUrl: section.section_image
        };
    };

    const getLocalizedDeptName = () => {
        if (i18n.language === 'ar' && department.department_name_arabic) {
            return department.department_name_arabic;
        }
        return department.department_name || department.title;
    };

    const getLocalizedServices = () => {
        if (!department.services && department.listItems) {
            return department.listItems.map(service => ({
                id: service.service_name,
                name: i18n.language === 'ar' && service.service_name_arabic 
                    ? service.service_name_arabic 
                    : service.service_name,
                image: service.service_image || "/assets/Images/default-service.png",
                link: `${department.canonical_name || department.link}/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`
            }));
        }
        
        return department.services?.map((service, index) => ({
            id: index,
            name: service,
            image: "/assets/Images/default-service.png",
            link: `${department.canonical_name || department.link}/${service.toLowerCase().replace(/\s+/g, '-')}`
        })) || [];
    };

    // First section handling for ImageContent
    const firstSection = department.sections?.[0];
    const firstSectionLocalized = firstSection ? getLocalizedContent(firstSection) : {};
    const firstSectionContent = firstSection ? parseSectionContent(firstSectionLocalized.description) : { content: [] };

    return (
        <>
            <div>
                <CommonServiceBanner
                    deptName={getLocalizedDeptName()}
                    bannerImage={department.banner_image || "/assets/Images/default-banner.png"}
                    deptLink={`/${department.canonical_name || department.link}`}
                    home="Home"
                />

                {/* First section with department name as title */}
                {firstSection && (
                    <ImageContent
                        title={getLocalizedDeptName()}
                        imageUrl={firstSectionLocalized.imageUrl}
                        imageAlt={department.department_name || department.title}
                        content={firstSectionContent.content}
                    />
                )}

                {/* Render remaining sections */}
                {department.sections?.slice(1).map((section, index) => {
                    const localized = getLocalizedContent(section);
                    const parsedContent = parseSectionContent(localized.description);
                    const isColored = index % 2 !== 0;
                    const hasImage = !!localized.imageUrl;

                    return (
                        <div key={section.id || index} style={!hasImage && isColored ? { 
                            backgroundColor: '#c4a98863', 
                            padding: '1rem 1rem' 
                        } : { padding: '1rem 1rem' }}>
                            {hasImage ? (
                                <ImageContent
                                    title={localized.title}
                                    imageUrl={localized.imageUrl}
                                    imageAlt={localized.title}
                                    content={parsedContent.content || []}
                                />
                            ) : isColored ? (
                                <ColorSection
                                    title={localized.title}
                                    content={parsedContent.content || []}
                                />
                            ) : (
                                <ContentSection
                                    title={localized.title}
                                    content={parsedContent.content || []}
                                />
                            )}
                        </div>
                    );
                })}

                {getLocalizedServices().length > 0 && (
                    <div style={{ backgroundColor: '#c4a98863' }}>
                        <ListServices
                            services={getLocalizedServices()}
                        />
                    </div>
                )}
            </div>

            {filteredDoctors.length > 0 && (
                <SlidingDoct doctors={filteredDoctors} />
            )}

            <div className="line-container" style={{ display: "flex", width: "100%", justifyContent: "center", paddingTop: "60px" }}>
                <hr className="half-line" style={{ width: "50%", border: "0", height: "2px", backgroundColor: "#111", margin: "0" }} />
            </div>
        </>
    );
};

export default Departments;