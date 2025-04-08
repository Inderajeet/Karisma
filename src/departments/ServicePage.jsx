import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentSection from "./service templates/ContentSection";
import SlidingDoct from "./service templates/SlidingDoct";
import CommonServiceBanner from "./CommonServiceBanner";
import ImageContent from "./service templates/ImageContent";
import ColorSection from "./service templates/ColorSection";

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
            // For headings in content (not first section)
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
                // Special handling for bold text - split into heading and paragraph if needed
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


const ServicePage = () => {
    const { deptName, serviceName } = useParams();
    const [service, setService] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://demo.karismamc.com/api/servicepage`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.success && Array.isArray(data.data)) {
                    const foundService = data.data.find(s =>
                        s.canonical_name?.toLowerCase() === serviceName?.toLowerCase() &&
                        s.department?.toLowerCase() === deptName?.toLowerCase()
                    );

                    if (foundService) {
                        setService(foundService);
                    } else {
                        setError("Service not found");
                    }
                } else {
                    setError("Invalid service data format");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(`Failed to fetch service data: ${err.message}`);
                setLoading(false);
            });

        // Fetch doctors
        fetch('https://demo.karismamc.com/api/doctors')
            .then(res => res.json())
            .then(data => {
                if (data?.doctors) {
                    setDoctors(data.doctors.slice(1));
                }
            });
    }, [deptName, serviceName]);

    if (loading) return <p style={{ padding: "140px" }}></p>;
    if (error) return <p style={{ padding: "140px" }}>Error: {error}</p>;
    if (!service) return <p style={{ padding: "140px" }}>Service not found!</p>;

    const filteredDoctors = doctors.filter(doctor =>
        doctor.department?.toLowerCase() === service.department?.toLowerCase()
    );

    // First section handling for ImageContent
    const firstSection = service.servicesections?.[0];
    const firstSectionContent = firstSection ? parseSectionContent(firstSection.section_description) : { content: [] };

    return (
        <>
            <CommonServiceBanner
                deptName={service.department}
                serviceName={service.service_name}
                bannerImage={service.banner_image || "/assets/Images/default-banner.png"}
                deptLink={`/departments/${deptName}`}
                home="Home"
            />

            {/* First section with service name as title */}
            {firstSection && (
    <ImageContent
        title={service.service_name}
        imageUrl={firstSection.section_image}
        imageAlt={service.service_name}
        content={(() => {
            const parsed = parseSectionContent(firstSection.section_description);
            
            // Transform content for first section specifically:
            // 1. Section title becomes first heading
            // 2. Bold paragraphs become headings
            // 3. Normal paragraphs stay as paragraphs
            const transformedContent = [
                // Add section title as first heading
                {
                    type: 'heading',
                    text: firstSection.section_title
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
            {service.servicesections?.slice(1).map((section, index, arr) => {
                const parsedContent = parseSectionContent(section.section_description, section.section_title);
                const hasImage = !!section.section_image;
                const isColoredSection = index % 2 !== 0; // Alternate colors

                if (hasImage) {
                    return (
                        <ImageContent
                            key={section.id || index}
                            title={section.section_title}
                            content={parsedContent.blocks.flatMap(block => block.content)}
                            imageUrl={section.section_image}
                            imageAlt={section.section_title}
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
                                            title={isFirstBlock ? section.section_title : block.title}
                                            content={block.content}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </React.Fragment>
                );
            })}
            {filteredDoctors.length > 0 && (
                <SlidingDoct doctors={filteredDoctors} />
            )}

            <div className="line-container" style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '60px' }}>
                <hr className="half-line" style={{ width: '50%', border: '0', height: '2px', backgroundColor: '#111', margin: '0' }} />
            </div>
        </>
    );
};

export default ServicePage;