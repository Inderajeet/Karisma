import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContentSection from "./service templates/ContentSection";
import SlidingDoct from "./service templates/SlidingDoct";
import CommonServiceBanner from "./CommonServiceBanner";
import ImageContent from "./service templates/ImageContent";
import ColorSection from "./service templates/ColorSection";
import ListServices from "./service templates/ListServices";

const parseSectionContent = (html, sectionTitle = '') => {
    if (!html) return { blocks: [{ title: sectionTitle, content: [] }] };

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const result = {
        blocks: [],
        currentBlock: { title: sectionTitle, content: [] }
    };

    // Process nodes
    Array.from(tempDiv.childNodes).forEach(node => {
        if (/^H[2-4]$/.test(node.nodeName)) {
            // For headings in content
            if (result.currentBlock.content.length > 0 || result.currentBlock.title !== sectionTitle) {
                result.blocks.push(result.currentBlock);
            }
            result.currentBlock = {
                title: node.textContent.trim(),
                content: []
            };
        }
        else if (node.nodeName === 'BR') {
            // For breaks between content blocks
            if (result.currentBlock.content.length > 0 || result.currentBlock.title !== sectionTitle) {
                result.blocks.push(result.currentBlock);
            }
            result.currentBlock = {
                title: sectionTitle,
                content: []
            };
        }
        else if (node.nodeName === 'P') {
            const text = node.textContent.trim();
            if (text) {
                // Special handling for bold text
                const boldElements = node.querySelectorAll('b, strong');
                if (boldElements.length > 0) {
                    // If the entire paragraph is bold, treat as heading
                    if (node.textContent.trim() === boldElements[0].textContent.trim()) {
                        result.currentBlock.content.push({
                            type: 'heading',
                            text: node.textContent.trim()
                        });
                    } else {
                        // If only part is bold, split it
                        let lastIndex = 0;
                        boldElements.forEach(bold => {
                            // Add text before bold as paragraph
                            const beforeText = node.textContent.slice(lastIndex, bold.textContent.index).trim();
                            if (beforeText) {
                                result.currentBlock.content.push({
                                    type: 'paragraph',
                                    text: beforeText
                                });
                            }
                            // Add bold text as heading
                            result.currentBlock.content.push({
                                type: 'heading',
                                text: bold.textContent.trim()
                            });
                            lastIndex = bold.textContent.index + bold.textContent.length;
                        });
                        // Add remaining text after last bold
                        const afterText = node.textContent.slice(lastIndex).trim();
                        if (afterText) {
                            result.currentBlock.content.push({
                                type: 'paragraph',
                                text: afterText
                            });
                        }
                    }
                } else {
                    // Normal paragraph
                    result.currentBlock.content.push({
                        type: 'paragraph',
                        text: text
                    });
                }
            }
        }
        else if (node.nodeName === 'UL') {
            result.currentBlock.content.push({
                type: 'list',
                items: Array.from(node.querySelectorAll('li')).map(li => li.textContent.trim())
            });
        }
    });

    // Add the last block
    if (result.currentBlock.content.length > 0 || result.blocks.length === 0) {
        result.blocks.push(result.currentBlock);
    }

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
        content={(() => {
            const parsed = parseSectionContent(firstSectionLocalized.description);
            
            // Transform content for first section specifically:
            const transformedContent = [
                // Add section title as first heading
                {
                    type: 'heading',
                    text: firstSectionLocalized.title
                },
                // Process all other content
                ...parsed.blocks.flatMap(block => 
                    block.content.map(item => {
                        // Convert any bold paragraphs to headings
                        if (item.type === 'paragraph' && item.text.includes('<b>')) {
                            return {
                                type: 'heading',
                                text: item.text.replace(/<\/?b>/g, '')
                            };
                        }
                        return item;
                    })
                )
            ];
            
            return transformedContent;
        })()}
    />
)}

{department.sections?.slice(1).map((section, index, arr) => {
    const localized = getLocalizedContent(section);
    const parsedContent = parseSectionContent(localized.description, localized.title);
    const hasImage = !!localized.imageUrl;
    const isColoredSection = index % 2 !== 0; // Alternate colors

    if (hasImage) {
        return (
            <ImageContent
                key={section.id || index}
                title={localized.title}
                content={parsedContent.blocks.flatMap(block => block.content)}
                imageUrl={localized.imageUrl}
                imageAlt={localized.title}
            />
        );
    }

    return (
        <React.Fragment key={section.id || index}>
            {parsedContent.blocks.map((block, blockIndex, blocks) => {
                const isFirstBlock = blockIndex === 0;
                const isLastBlock = blockIndex === blocks.length - 1;
                const hasMultipleBlocks = blocks.length > 1;

                let padding = '1rem';
                if (hasMultipleBlocks) {
                    if (isFirstBlock) {
                        padding = '1rem 1rem 0 1rem';
                    } else if (isLastBlock) {
                        padding = '0 1rem 1rem 1rem';
                    } else {
                        padding = '0 1rem';
                    }
                }

                return (
                    <div
                        key={`${section.id}-${blockIndex}`}
                        style={{
                            backgroundColor: isColoredSection ? '#c4a98863' : 'transparent',
                            padding: padding
                        }}
                    >
                        {isColoredSection ? (
                            <ColorSection
                                title={block.title}
                                content={block.content}
                            />
                        ) : (
                            <ContentSection
                                title={isFirstBlock ? localized.title : block.title}
                                content={block.content}
                            />
                        )}
                    </div>
                );
            })}
        </React.Fragment>
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