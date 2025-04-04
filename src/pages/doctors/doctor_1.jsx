import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import "../../custom_css/doctor.css";

// Helper functions (moved outside component)
const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text;
    return text.split(/\b/).map((word, index) =>
        /^[A-Za-z0-9 ]+$/.test(word)
            ? word
            : <span key={index} className="fallback-font">{word}</span>
    );
};

const extractPlainText = (html) => {
    if (!html) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.innerText;
};

const extractBulletPoints = (html) => {
    if (!html) return [];
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return Array.from(tempDiv.querySelectorAll("ul li")).map(li => li.innerText);
};

const processContent = (html) => {
    if (!html) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.querySelector("ul") ? extractBulletPoints(html) : extractPlainText(html);
};

const extractDoctorsArray = (apiResponse) => {
    if (apiResponse?.doctors && Array.isArray(apiResponse.doctors)) {
        return apiResponse.doctors.slice(1);
    }
    return [];
};

const getSlugFromLink = (link) => {
    if (!link) return '';
    const parts = String(link).split('/');
    return parts[parts.length - 1];
};

const DoctorPage = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { t, i18n } = useTranslation(['translation', 'doctors']);
    const [allDoctors, setAllDoctors] = useState([]);

    // Helper function to get localized content
    const getLocalizedContent = (section) => {
        const isArabic = i18n.language === 'ar';
        
        if (!section) return null;
        
        // Handle simple string fields
        if (typeof section === 'string') {
            return section;
        }
        
        // Handle object fields with translations
        const localized = {
            ...section,
            title: isArabic && section.title_arabic ? section.title_arabic : section.title,
            subtitle: isArabic && section.subtitle_arabic ? section.subtitle_arabic : section.subtitle,
            flipFront1: isArabic && section.flipFront1_arabic ? section.flipFront1_arabic : section.flipFront1,
            flipBack1: isArabic && section.flipBack1_arabic ? section.flipBack1_arabic : section.flipBack1,
            flipFront2: isArabic && section.flipFront2_arabic ? section.flipFront2_arabic : section.flipFront2,
            flipBack2: isArabic && section.flipBack2_arabic ? section.flipBack2_arabic : section.flipBack2,
            flipFrontDesc1: isArabic && section.flipFrontDesc1_arabic ? section.flipFrontDesc1_arabic : section.flipFrontDesc1,
            flipBackDesc1: isArabic && section.flipBackDesc1_arabic ? section.flipBackDesc1_arabic : section.flipBackDesc1,
            flipFrontDesc2: isArabic && section.flipFrontDesc2_arabic ? section.flipFrontDesc2_arabic : section.flipFrontDesc2,
            flipBackDesc2: isArabic && section.flipBackDesc2_arabic ? section.flipBackDesc2_arabic : section.flipBackDesc2,
        };

        // Handle items arrays with translations
        if (section.items && Array.isArray(section.items)) {
            localized.items = isArabic && section.items_arabic 
                ? section.items_arabic 
                : section.items;
        }

        return localized;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // 1. Fetch all doctors
                const doctorsResponse = await fetch('https://demo.karismamc.com/api/doctors');
                if (!doctorsResponse.ok) throw new Error('Failed to fetch doctors');
                const responseData = await doctorsResponse.json();

                // 2. Extract doctors array properly (skip first header item)
                const doctorsList = extractDoctorsArray(responseData);
                console.log('Filtered doctors:', doctorsList);

                if (!doctorsList.length) {
                    throw new Error('No valid doctors found in response');
                }

                // 3. Find current doctor using slug
                const currentDoctor = doctorsList.find(doc => {
                    const slug = getSlugFromLink(doc?.link);
                    return slug === doctorId;
                });

                if (!currentDoctor) {
                    throw new Error(`Doctor ${doctorId} not found`);
                }

                // 4. Get the slug for the individual API call
                const doctorSlug = getSlugFromLink(currentDoctor.link);

                // 5. Fetch individual doctor details
                const doctorResponse = await fetch(`https://demo.karismamc.com/api/doctor/${doctorSlug}`);
                if (!doctorResponse.ok) throw new Error('Failed to fetch doctor details');
                const doctorDetails = await doctorResponse.json();

                setDoctor(doctorDetails);
                setAllDoctors(doctorsList);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [doctorId, i18n.language]); // Add language to dependencies

    if (loading) return <p style={{ padding: "140px" }}></p>;
    if (error) return <p style={{ padding: "140px" }}>Error: {error}</p>;
    if (!doctor) return <p style={{ padding: "140px" }}></p>;

    // Find current doctor index safely
    const currentIndex = allDoctors.findIndex(doc => {
        const slug = getSlugFromLink(doc?.link);
        return slug === doctorId;
    });
    
    // Circular Navigation Logic
    const prevDoctor = 
        currentIndex > 0 ? 
            allDoctors[currentIndex - 1] : 
            allDoctors[allDoctors.length - 1];
    
    const nextDoctor = 
        currentIndex < allDoctors.length - 1 ? 
            allDoctors[currentIndex + 1] : 
            allDoctors[0];

    // Get localized versions of doctor data
    const localizedDoctor = {
        ...doctor,
        name: i18n.language === 'ar' && doctor.name_arabic ? doctor.name_arabic : doctor.name,
        designation: doctor.designation,
        overview: doctor.overview ? {
            ...getLocalizedContent(doctor.overview),
            sections: doctor.overview.sections?.map(section => ({
                ...getLocalizedContent(section),
                items: i18n.language === 'ar' && section.items_arabic 
                    ? section.items_arabic 
                    : section.items
            }))
        } : null,
        workExperience: getLocalizedContent(doctor.workExperience),
        qualifications: getLocalizedContent(doctor.qualifications),
        workingShifts: getLocalizedContent(doctor.workingShifts)
    };

    // Find current doctor index safely
    // const currentIndex = allDoctors.findIndex(doc => {
    //     const slug = getSlugFromLink(doc?.link);
    //     return slug === doctorId;
    // });
    
    // // Circular Navigation Logic
    // const prevDoctor = 
    //     currentIndex > 0 ? 
    //         allDoctors[currentIndex - 1] : 
    //         allDoctors[allDoctors.length - 1]; // If first doctor, go to last
    
    // const nextDoctor = 
    //     currentIndex < allDoctors.length - 1 ? 
    //         allDoctors[currentIndex + 1] : 
    //         allDoctors[0]; // If last doctor, go to first

    return (
        <>
            <div className="relatedServices customContainer cea-team-template-default 
            single single-cea-team postid-73184 theme-happysmile woocommerce-js 
            elementor-default elementor-kit-5 elementor-page elementor-page-73184 
            e--ua-blink e--ua-chrome e--ua-webkit page-load-end" style={{ paddingBottom: "1rem" }}>
                <div className="row">
                    <div className="col-md-12 order-md-2" style={{ paddingTop: '2rem' }}>
                        <div className="wrap cea-content">
                            <div className="team-content-area">
                                <div className="row team">
                                    <div className="col-sm-5 team-image-wrap">
                                        <div className="team-img">
                                            <img
                                                fetchpriority="high"
                                                width={768}
                                                height={1152}
                                                src={doctor.image}
                                                className="img-fluid wp-post-image"
                                                alt=""
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-7 team-info">
                                        <div className="team-title" style={{ marginBottom: '0' }}>
                                            <div style={{ fontSize: "30px" }}>{localizedDoctor.name}</div>
                                            <div className="team-designation-wrap" style={{ marginBottom: '0' }}>
                                                <span className="team-designation">{localizedDoctor.designation}</span>
                                            </div>
                                        </div>
                                        <div
                                            className="elementor-element elementor-element-2b718853 e-flex e-con-boxed e-con e-child"
                                            data-id="2b718853"
                                            data-element_type="container"
                                        >
                                            {/* Overview */}
                                            <div className="e-con-inner">
                                                {/* Overview sections*/}
                                                {localizedDoctor.overview?.sections?.map((section, sectionIndex) => (
                                                    <div className="section-description" key={sectionIndex} style={{ fontWeight: "600" }}>
                                                        {section.subtitle}
                                                        <div
                                                            className="elementor-element elementor-element-653e731 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                            data-id="653e731"
                                                            data-element_type="widget"
                                                            data-widget_type="icon-list.default"
                                                        >
                                                            <div className="elementor-widget-container">
                                                                {section.items.map((detail, index) => (
                                                                    <div className="elementor-icon-list-item" key={index}>
                                                                        <span className="elementor-cust-icon-list-text">
                                                                            {extractPlainText(detail)}
                                                                        </span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* .team */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="team-content-wrap">
                                            <div
                                                data-elementor-type="wp-post"
                                                data-elementor-id={73183}
                                                className="elementor elementor-73183"
                                            >
                                                <div
                                                    className="elementor-element elementor-element-2ce220da e-flex e-con-boxed e-con e-parent e-lazyloaded"
                                                    data-id="2ce220da"
                                                    data-element_type="container"
                                                >
                                                    <div className="e-con-inner" style={{ paddingBottom: '60px' }}>
                                                        <div
                                                            className="elementor-element elementor-element-6a088048 e-con-full e-flex e-con e-child"
                                                            data-id="6a088048"
                                                            data-element_type="container"
                                                        >

                                                            <div
                                                                className="elementor-element elementor-element-6b60bf63 e-flex e-con-boxed e-con e-child"
                                                                data-id="6b60bf63"
                                                                data-element_type="container"
                                                            >
                                                                <div className="e-con-inner">
                                                                    {/* Overview */}
                                                                    <div
                                                                        className="elementor-element elementor-element-2b718853 e-flex e-con-boxed e-con e-child"
                                                                        data-id="2b718853"
                                                                        data-element_type="container"
                                                                    >
                                                                        <div className="e-con-inner">
                                                                            <div
                                                                                className="elementor-element elementor-element-2ef812fa cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                                                                                data-id="2ef812fa"
                                                                                data-element_type="widget"
                                                                                data-widget_type="ceasectiontitle.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="section-title-wrapper">
                                                                                        <div className="title-wrap">
                                                                                            <h4 className="section-title">
                                                                                                {applyFontFallback(localizedDoctor.workExperience.title)}
                                                                                            </h4>
                                                                                        </div>
                                                                                        {/* .title-wrap */}
                                                                                        <div className="section-description" />
                                                                                        {/* .section-description */}
                                                                                    </div>
                                                                                    {/* .section-title-wrapper */}{" "}
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-653e731 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                                                data-id="653e731"
                                                                                data-element_type="widget"
                                                                                data-widget_type="icon-list.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="elementor-icon-list-items">
                                                                                        {localizedDoctor.workExperience.items.map((detail, index) => {
                                                                                            const processedContent = processContent(detail); // Check if it's a list or paragraph

                                                                                            return Array.isArray(processedContent) ? (
                                                                                                // If it's a bullet point list, map each item
                                                                                                processedContent.map((point, idx) => (
                                                                                                    <li key={`${index}-${idx}`} className="elementor-icon-list-item">
                                                                                                        <span className="elementor-icon-list-icon">
                                                                                                            <i aria-hidden="true" className="bi-check2-circle" />
                                                                                                        </span>
                                                                                                        <span className="elementor-cust-icon-list-text">{point}</span>
                                                                                                    </li>
                                                                                                ))
                                                                                            ) : (
                                                                                                // If it's plain text, show it directly in a paragraph
                                                                                                <p key={index} className="elementor-cust-icon-list-text">{processedContent}</p>
                                                                                            );
                                                                                        })}
                                                                                    </ul>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* Qualifications */}
                                                                </div>
                                                            </div>

                                                            <div
                                                                className="elementor-element elementor-element-6b60bf63 e-flex e-con-boxed e-con e-child"
                                                                data-id="6b60bf63"
                                                                data-element_type="container"
                                                                style={{ marginTop: "2rem" }}
                                                            >
                                                                <div className="e-con-inner">
                                                                    <div
                                                                        className="elementor-element elementor-element-87e3501 e-flex e-con-boxed e-con e-child"
                                                                        data-id="87e3501"
                                                                        data-element_type="container"
                                                                    >
                                                                        <div className="e-con-inner">
                                                                            <div
                                                                                className="elementor-element elementor-element-74ff4f40 cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                                                                                data-id="74ff4f40"
                                                                                data-element_type="widget"
                                                                                data-widget_type="ceasectiontitle.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="section-title-wrapper">
                                                                                        <div className="title-wrap">
                                                                                            <h4 className="section-title">
                                                                                                {applyFontFallback(localizedDoctor.qualifications.title)}
                                                                                            </h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-653e731 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="653e731" data-element_type="widget" data-widget_type="icon-list.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="elementor-icon-list-items">
                                                                                        {localizedDoctor.qualifications.items.map((detail, index) => {
                                                                                            const processedContent = processContent(detail); // Check if it's a list or paragraph

                                                                                            if (Array.isArray(processedContent)) {
                                                                                                // If it's a bullet point list, map each item
                                                                                                return processedContent.map((point, idx) => (
                                                                                                    <li key={`${index}-${idx}`} className="elementor-icon-list-item">
                                                                                                        <span className="elementor-icon-list-icon">
                                                                                                            <i aria-hidden="true" className="bi-check2-circle" />
                                                                                                        </span>
                                                                                                        <span className="elementor-cust-icon-list-text">{point}</span>
                                                                                                    </li>
                                                                                                ));
                                                                                            } else {
                                                                                                // If it's plain text, show it directly
                                                                                                return (
                                                                                                    <p key={index} className="elementor-cust-icon-list-text">{processedContent}</p>
                                                                                                );
                                                                                            }
                                                                                        })}
                                                                                    </ul>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* Working Shifts */}
                                                                    <div
                                                                        className="elementor-element elementor-element-87e3501 e-flex e-con-boxed e-con e-child"
                                                                        data-id="87e3501"
                                                                        data-element_type="container"
                                                                    >
                                                                        <div className="e-con-inner">
                                                                            <div
                                                                                className="elementor-element elementor-element-74ff4f40 cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                                                                                data-id="74ff4f40"
                                                                                data-element_type="widget"
                                                                                data-widget_type="ceasectiontitle.default"
                                                                            >
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="section-title-wrapper">
                                                                                        <div className="title-wrap">
                                                                                            <h4 className="section-title work-shift-title">
                                                                                                {applyFontFallback(localizedDoctor.workingShifts.title)}
                                                                                            </h4>
                                                                                        </div>
                                                                                        {/* .title-wrap */}
                                                                                        <div className="section-description" />
                                                                                        {/* .section-description */}
                                                                                    </div>
                                                                                    {/* .section-title-wrapper */}{" "}
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="elementor-element elementor-element-8945cc9 e-flex e-con-boxed e-con e-child"
                                                                                data-id="8945cc9"
                                                                                data-element_type="container"
                                                                            >
                                                                                <div className="e-con-inner">
                                                                                    <div
                                                                                        className="elementor-element elementor-element-47d1d167 e-flex e-con-boxed e-con e-child"
                                                                                        data-id="47d1d167"
                                                                                        data-element_type="container"
                                                                                    >
                                                                                        <div className="e-con-inner">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-794b42c6 verticalMove cea-primary-icon-view-default cea-secondary-icon-view-default elementor-widget elementor-widget-ceaflipbox"
                                                                                                data-id="794b42c6"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="ceaflipbox.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container flip-box-wrapper">
                                                                                                    <div className="flip-box-inner imghvr-flip-horiz">
                                                                                                        <div className="flip-front">
                                                                                                            <div className="flip-front-inner">
                                                                                                                <div className="flip-box-icon">
                                                                                                                    <svg
                                                                                                                        aria-hidden="true"
                                                                                                                        className="e-font-icon-svg e-fas-stethoscope"
                                                                                                                        viewBox="0 0 512 512"
                                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                                    >
                                                                                                                        <path d="M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />
                                                                                                                    </svg>
                                                                                                                </div>
                                                                                                                <h4 className="flip-box-title">
                                                                                                                    {applyFontFallback(localizedDoctor.workingShifts.flipFront1)}
                                                                                                                </h4>
                                                                                                                <div className="flip-content">
                                                                                                                    {localizedDoctor.workingShifts.flipFrontDesc1}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            {/* .flip-front-inner */}
                                                                                                        </div>
                                                                                                        {/* .flip-front */}
                                                                                                        <div className="flip-back">
                                                                                                            <div className="flip-back-inner">
                                                                                                                <div className="flip-box-icon">
                                                                                                                    <svg
                                                                                                                        aria-hidden="true"
                                                                                                                        className="e-font-icon-svg e-fas-stethoscope"
                                                                                                                        viewBox="0 0 512 512"
                                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                                    >
                                                                                                                        <path d="M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />
                                                                                                                    </svg>
                                                                                                                </div>
                                                                                                                <h4 className="flip-box-title">
                                                                                                                    {applyFontFallback(localizedDoctor.workingShifts.flipBack1)}
                                                                                                                </h4>
                                                                                                                <div className="flip-content">
                                                                                                                    {localizedDoctor.workingShifts.flipBackDesc1}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            {/* .flip-back-inner */}
                                                                                                        </div>
                                                                                                        {/* .flip-back */}
                                                                                                    </div>
                                                                                                    {/* .flip-inner */}{" "}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elementor-element elementor-element-3b89196a e-flex e-con-boxed e-con e-child"
                                                                                        data-id="3b89196a"
                                                                                        data-element_type="container"
                                                                                    >
                                                                                        <div className="e-con-inner">
                                                                                            <div
                                                                                                className="elementor-element elementor-element-37615ce2 verticalMove cea-primary-icon-view-default cea-secondary-icon-view-default elementor-widget elementor-widget-ceaflipbox"
                                                                                                data-id="37615ce2"
                                                                                                data-element_type="widget"
                                                                                                data-widget_type="ceaflipbox.default"
                                                                                            >
                                                                                                <div className="elementor-widget-container flip-box-wrapper">
                                                                                                    <div className="flip-box-inner imghvr-flip-horiz">
                                                                                                        <div className="flip-front">
                                                                                                            <div className="flip-front-inner">
                                                                                                                <div className="flip-box-icon">
                                                                                                                    <svg
                                                                                                                        aria-hidden="true"
                                                                                                                        className="e-font-icon-svg e-fas-hospital-alt"
                                                                                                                        viewBox="0 0 576 512"
                                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                                    >
                                                                                                                        <path d="M544 96H416V32c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32v368c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16V128c0-17.7-14.3-32-32-32zM160 436c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm160 128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm16-170c0 3.3-2.7 6-6 6h-26v26c0 3.3-2.7 6-6 6h-20c-3.3 0-6-2.7-6-6v-26h-26c-3.3 0-6-2.7-6-6v-20c0-3.3 2.7-6 6-6h26V86c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v26h26c3.3 0 6 2.7 6 6v20zm144 298c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z" />
                                                                                                                    </svg>
                                                                                                                </div>
                                                                                                                <h4 className="flip-box-title">
                                                                                                                    {applyFontFallback(localizedDoctor.workingShifts.flipFront2)}
                                                                                                                </h4>
                                                                                                                <div className="flip-content">
                                                                                                                    {localizedDoctor.workingShifts.flipFrontDesc2}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            {/* .flip-front-inner */}
                                                                                                        </div>
                                                                                                        {/* .flip-front */}
                                                                                                        <div className="flip-back">
                                                                                                            <div className="flip-back-inner">
                                                                                                                <div className="flip-box-icon">
                                                                                                                    <svg
                                                                                                                        aria-hidden="true"
                                                                                                                        className="e-font-icon-svg e-fas-hospital-alt"
                                                                                                                        viewBox="0 0 576 512"
                                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                                    >
                                                                                                                        <path d="M544 96H416V32c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32v368c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16V128c0-17.7-14.3-32-32-32zM160 436c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm160 128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm16-170c0 3.3-2.7 6-6 6h-26v26c0 3.3-2.7 6-6 6h-20c-3.3 0-6-2.7-6-6v-26h-26c-3.3 0-6-2.7-6-6v-20c0-3.3 2.7-6 6-6h26V86c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v26h26c3.3 0 6 2.7 6 6v20zm144 298c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z" />
                                                                                                                    </svg>
                                                                                                                </div>
                                                                                                                <h4 className="flip-box-title">
                                                                                                                    {applyFontFallback(localizedDoctor.workingShifts.flipBack2)}
                                                                                                                </h4>
                                                                                                                <div className="flip-content">
                                                                                                                    {localizedDoctor.workingShifts.flipBackDesc2}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            {/* .flip-back-inner */}
                                                                                                        </div>
                                                                                                        {/* .flip-back */}
                                                                                                    </div>
                                                                                                    {/* .flip-inner */}{" "}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* .team-content-wrap */}
                                        {/* Navigation Links */}
                                        {/* Navigation Links */}
                                        <div className="custom-post-nav">
                                            {prevDoctor && prevDoctor.link && (
                                                <div className="prev-nav-link">
                                                    <Link
                                                        to={`/${i18n.language}/doctor/${getSlugFromLink(prevDoctor.link)}`}
                                                        className="doc-nav-arrows"
                                                    >
                                                        <svg width="30" height="24" fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400.004 400.004" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"></path> </g> </g></svg>
                                                        <div>{i18n.language === 'ar' ? prevDoctor.name_arabic : prevDoctor.name}</div>
                                                    </Link>
                                                </div>
                                            )}
                                            {nextDoctor && nextDoctor.link && (
                                                <div className="next-nav-link">
                                                <Link
                                                    to={`/${i18n.language}/doctor/${getSlugFromLink(nextDoctor.link)}`}
                                                    className="doc-nav-arrows"
                                                >
                                                    <div>{i18n.language === 'ar' ? nextDoctor.name_arabic : nextDoctor.name}</div>
                                                    <svg width="30" height="24" fill="#5C4033" viewBox="0 -6.5 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <title>right-arrow</title>
                                                            <desc>Created with Sketch.</desc>
                                                            <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1511.000000, -158.000000)" fill="#5C4033" fill-rule="nonzero">
                                                                    <g id="1" transform="translate(1350.000000, 120.000000)">
                                                                        <path d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z" id="right-arrow"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* .col */}
                                </div>
                                {/* .row */}
                            </div>
                            {/* .team-content-area */}
                        </div>
                        {/* .wrap */}{" "}
                    </div>
                    {/* .col */}
                </div>
                {/* .row */}

            </div>
        </>

    )
}

export default DoctorPage