import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentSection from "./service templates/ContentSection";
import SlidingDoct from "./service templates/SlidingDoct";
import CommonServiceBanner from "./CommonServiceBanner";
import ImageContentNew from "./service templates/ImageContentNew";
import ColorSection from "./service templates/ColorSection";

const parseSectionContent = (html) => {
    if (!html) return { header: '', description: '', features: [] };

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const result = {
        header: '',
        description: '',
        features: []
    };

    Array.from(tempDiv.childNodes).forEach(node => {
        if (node.nodeName === 'P') {
            const text = node.textContent.trim();
            if (text) {
                if (node.querySelector('b') || node.querySelector('strong')) {
                    result.header = text;
                } else if (!result.description) {
                    result.description = text;
                }
            }
        }
        else if (node.nodeName === 'UL') {
            result.features = Array.from(node.querySelectorAll('li')).map(li => li.textContent);
        }
    });

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
        fetch('/api/doctors')
            .then(res => res.json())
            .then(data => {
                if (data?.doctors) {
                    setDoctors(data.doctors.slice(1));
                }
            });
    }, [deptName, serviceName]);

    if (loading) return <p style={{ padding: "140px" }}>Loading...</p>;
    if (error) return <p style={{ padding: "140px" }}>Error: {error}</p>;
    if (!service) return <p style={{ padding: "140px" }}>Service not found!</p>;

    const filteredDoctors = doctors.filter(doctor =>
        doctor.department?.toLowerCase() === service.department?.toLowerCase()
    );

    // First section handling for ImageContentNew
    const firstSection = service.servicesections?.[0];
    const firstSectionContent = firstSection ? parseSectionContent(firstSection.section_description) : {};

    const renderSection = (section, index) => {
        const content = parseSectionContent(section.section_description);
        const isColored = index % 2 !== 0;

        return (
            <div key={section.id || index} style={isColored ? {
                backgroundColor: '#c4a98863',
                padding: '1rem 1rem'
            } : null}>
                {isColored ? (
                    <ColorSection
                        title={section.section_title}
                        heading={content.header}
                        description={content.description}
                        features={content.features}
                    />
                ) : (
                    <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <ContentSection
                        title={section.section_title}
                        heading={content.header}
                        description={content.description}
                        features={content.features}
                    />
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <CommonServiceBanner
                deptName={service.department}
                serviceName={service.service_name}
                bannerImage={service.banner_image || "/assets/Images/default-banner.png"}
                deptLink={`/departments/${deptName}`}
                home="Home"
            />

            {/* ImageContentNew with service_name as title and first section content */}
            {firstSection && (
                <ImageContentNew
                    title={service.service_name}  // Service name as main title
                    heading={firstSection.section_title}  // First section title as heading
                    description={firstSectionContent.description}
                    features={firstSectionContent.features}
                    imageUrl={firstSection.section_image}
                />
            )}

            {/* Render remaining sections alternately */}
            {service.servicesections?.slice(1).map((section, index) =>
                renderSection(section, index)
            )}

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