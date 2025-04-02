import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import "../../custom_css/doctor.css";

// Moved out of component to avoid HMR issues
const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text; // Prevent errors on undefined/null values

    return text.split(/\b/).map((word, index) =>
        /^[A-Za-z0-9 ]+$/.test(word) // If word is English/number/space, keep normal font
            ? word
            : <span key={index} className="fallback-font">{word}</span> // Apply fallback only for non-English words
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

    const bulletPoints = [];

    tempDiv.querySelectorAll("ul li").forEach((li) => {
        bulletPoints.push(li.innerText);
    });

    return bulletPoints;
};
const processContent = (html) => {
    if (!html) return "";

    // Check if the content has <ul> tags (bullet points)
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    if (tempDiv.querySelector("ul")) {
        return extractBulletPoints(html); // If <ul> exists, return bullet points
    }
    return extractPlainText(html); // Otherwise, return plain text
};
const DoctorPage = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { t, i18n } = useTranslation(['translation', 'doctors']);
    const [allDoctors, setAllDoctors] = useState([]);

    useEffect(() => {
        // Set initial state
        setLoading(true);
        setError(null);

        console.log("Fetching doctors data from API...");

        // Use fetch with promise chain
        fetch(`/api/doctor/${doctorId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Doctor data received:", data);

                if (data && data.id) {
                    setDoctor(data);
                } else {
                    throw new Error("Invalid data format or doctor not found");
                }

                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch doctor:", err);
                setError(`Failed to fetch doctor: ${err.message}`);
                setLoading(false);
            });

    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!doctor) return <p>Doctor not found!</p>;


    // Find current doctor index for prev/next navigation
    const currentIndex = allDoctors.findIndex((doc) => doc.id === doctor.id);

    // Calculate previous and next indices with wrapping
    const prevIndex = (currentIndex - 1 + allDoctors.length) % allDoctors.length;
    const nextIndex = (currentIndex + 1) % allDoctors.length;

    const prevDoctor = allDoctors[prevIndex];
    const nextDoctor = allDoctors[nextIndex];

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
                                            <div style={{ fontSize: "30px" }}>{doctor.name}</div>
                                            <div className="team-designation-wrap" style={{ marginBottom: '0' }}>
                                                <span className="team-designation">{doctor.designation}</span>
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
                                                {doctor.overview.sections.map((section, sectionIndex) => (
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
                                                                                                {applyFontFallback(doctor.workExperience.title)}
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
                                                                                        {doctor.workExperience.items.map((detail, index) => {
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
                                                                                                {applyFontFallback(doctor.qualifications.title)}
                                                                                            </h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="elementor-element elementor-element-653e731 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="653e731" data-element_type="widget" data-widget_type="icon-list.default">
                                                                                <div className="elementor-widget-container">
                                                                                    <ul className="elementor-icon-list-items">
                                                                                        {doctor.qualifications.items.map((detail, index) => {
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
                                                                                                {applyFontFallback(doctor.workingShifts.title)}
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
                                                                                                                    {applyFontFallback(doctor.workingShifts.flipFront1)}
                                                                                                                </h4>
                                                                                                                <div className="flip-content">
                                                                                                                    {doctor.workingShifts.flipFrontDesc1}
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
                                                                                                                    {applyFontFallback(doctor.workingShifts.flipBack1)}
                                                                                                                </h4>
                                                                                                                <div className="flip-content">
                                                                                                                    {doctor.workingShifts.flipBackDesc1}
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
                                                                                                                    {applyFontFallback(doctor.workingShifts.flipFront2)}
                                                                                                                </h4>
                                                                                                                <div className="flip-content">
                                                                                                                    {doctor.workingShifts.flipFrontDesc2}
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
                                                                                                                    {applyFontFallback(doctor.workingShifts.flipBack2)}
                                                                                                                </h4>
                                                                                                                <div className="flip-content">
                                                                                                                    {doctor.workingShifts.flipBackDesc2}
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
                                        <div className="row" style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
                                            {prevDoctor && (
                                                <Link
                                                    to={`/${i18n.language}/doctor/${prevDoctor.id}`}
                                                    className="btn btn-primary"
                                                    style={{ margin: '10px' }}
                                                >
                                                    &larr; Previous Doctor
                                                </Link>
                                            )}
                                            {nextDoctor && (
                                                <Link
                                                    to={`/${i18n.language}/doctor/${nextDoctor.id}`}
                                                    className="btn btn-primary"
                                                    style={{ margin: '10px', marginLeft: 'auto' }}
                                                >
                                                    Next Doctor &rarr;
                                                </Link>
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