import React, { useEffect, useState } from "react";
import Banner from '../../components/Banner';
import { fetchAllJson } from "../../utils/fetchAllJson"; // Import the utility function
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import BannerDoctor from "../../components/Bannerdoctor";

export const applyFontFallback = (text) => {
    if (!text || typeof text !== "string") return text; // Prevent errors on undefined/null values
  
    return text.split("").map((char, index) =>
      /[A-Za-z0-9 ]/.test(char) // Keep normal text in Seasons
        ? char
        : <span key={index} className="fallback-font">{char}</span> // Force fallback for everything else
    );
  };

function DoctorPage() {

    const { t, i18n } = useTranslation(['translation', 'doctors']);
    const { doctorName } = useParams();
    const [data, setData] = useState({ styles: {}, images: {} });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [doctor, setDoctor] = useState(null);

    // Fetch external assets (styles, images)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const allData = await fetchAllJson();
                setData(allData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Load doctors from translations
    useEffect(() => {
        const doctorsData = t('doctors:doctors', { returnObjects: true });
        setDoctors(doctorsData);
    }, [t]);

    // Find the current doctor
    useEffect(() => {
        if (doctors.length > 0) {
            const foundDoctor = doctors.find((doc) => doc.link === decodeURIComponent(doctorName));
            setDoctor(foundDoctor);
        }
    }, [doctors, doctorName]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!doctor) return <p>Doctor not found!</p>;

    // Find current doctor index
    const currentIndex = doctors.findIndex((doc) => doc.id === doctor.id);

    // Calculate previous and next indices with wrapping
    const prevIndex = (currentIndex - 1 + doctors.length) % doctors.length;
    const nextIndex = (currentIndex + 1) % doctors.length;

    const prevDoctor = doctors[prevIndex];
    const nextDoctor = doctors[nextIndex];

    console.log("Doctor Name:", decodeURIComponent(doctorName));

    return (
        <>
            <div className="relatedServices customContainer cea-team-template-default 
            single single-cea-team postid-73184 theme-happysmile woocommerce-js 
            elementor-default elementor-kit-5 elementor-page elementor-page-73184 
            e--ua-blink e--ua-chrome e--ua-webkit page-load-end" style={{ paddingBottom: "5rem" }}>
                <div className="row">
                    <div className="col-md-12 order-md-2">
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
                                        <div className="team-title">
                                            <div style={{ fontSize: "30px" }}>{doctor.name}</div>
                                            <div className="team-designation-wrap">
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
                                                                                {detail}
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="team-other-details" style={{ display: 'none' }}>
                                            <div className="row">
                                                <div className="col-md-6 team-email-wrap">
                                                    <div className="team-media media">
                                                        <div className="cust-team-details-icon">
                                                            <i className="fa fa-envelope" />
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="team-email-label">Email</span>
                                                            <a href={`mailto:${doctor.email}`} className="team-email">
                                                                {doctor.email}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 team-phone-wrap">
                                                    <div className="team-media media">
                                                        <div className="cust-team-details-icon">
                                                            <i className="fa fa-phone" />
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="team-phone-label">Phone</span>
                                                            <a href={`tel:${doctor.phone}`} className="team-phone">
                                                                {doctor.phone}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 team-website-wrap">
                                                    <div className="team-media media">
                                                        <div className="cust-team-details-icon">
                                                            <i className="fa fa-link" />
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="team-website-label">Website</span>
                                                            <a href={doctor.website} className="team-website">
                                                                {doctor.website}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 team-experience-wrap">
                                                    <div className="team-media media">
                                                        <div className="cust-team-details-icon">
                                                            <i className="fa fa-user" />
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="team-details-label">Experience</span>
                                                            <span className="team-experience">{doctor.experience}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-social-wrap" style={{ display: 'none' }}>
                                            <ul className="nav cust-social-icons team-social">
                                                <li>
                                                    <a
                                                        className="social-facebook"
                                                        href={doctor.socialLinks.facebook}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fa fa-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="social-twitter"
                                                        href={doctor.socialLinks.twitter}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="social-instagram"
                                                        href={doctor.socialLinks.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fa fa-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="social-youtube"
                                                        href={doctor.socialLinks.youtube}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fa fa-youtube-play" />
                                                    </a>
                                                </li>
                                            </ul>
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
                                                    <div className="e-con-inner">
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
                                                                        style={{display:'none'}}
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
                                                                                                {applyFontFallback(doctor.overview.title)}
                                                                                            </h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
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
                                                                                            <ul className="elementor-icon-list-items">
                                                                                                {section.items.map((detail, index) => (
                                                                                                    <li className="elementor-icon-list-item" key={index}>
                                                                                                        <span className="elementor-icon-list-icon">
                                                                                                            <i
                                                                                                                aria-hidden="true"
                                                                                                                className=" bi-check2-circle"
                                                                                                            />{" "}
                                                                                                        </span>
                                                                                                        <span className="elementor-cust-icon-list-text">
                                                                                                            {detail}
                                                                                                        </span>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
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
                                                                                        {doctor.workExperience.items.map((detail, index) => (
                                                                                            <li className="elementor-icon-list-item">
                                                                                                <span className="elementor-icon-list-icon">
                                                                                                    <i
                                                                                                        aria-hidden="true"
                                                                                                        className=" bi-check2-circle"
                                                                                                    />
                                                                                                </span>
                                                                                                <span className="elementor-cust-icon-list-text">{detail}
                                                                                                </span>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* Qualifications */}
                                                                    <div
                                                                        className="elementor-element elementor-element-87e3501 e-flex e-con-boxed e-con e-child"
                                                                        data-id="87e3501"
                                                                        data-element_type="container"
                                                                        style={{display: 'none'}}
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
                                                                                        {doctor.qualifications.items.map((detail, index) => (
                                                                                            <li className="elementor-icon-list-item">
                                                                                                <span className="elementor-icon-list-icon">
                                                                                                    <i aria-hidden="true" className=" bi-check2-circle">
                                                                                                    </i>
                                                                                                </span>
                                                                                                <span className="elementor-cust-icon-list-text">{detail}</span
                                                                                                >
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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
                                                                        className="elementor-element elementor-element-2b718853 e-flex e-con-boxed e-con e-child"
                                                                        data-id="2b718853"
                                                                        data-element_type="container"
                                                                        style={{display: 'none'}}
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
                                                                                        {doctor.workExperience.items.map((detail, index) => (
                                                                                            <li className="elementor-icon-list-item">
                                                                                                <span className="elementor-icon-list-icon">
                                                                                                    <i
                                                                                                        aria-hidden="true"
                                                                                                        className=" bi-check2-circle"
                                                                                                    />
                                                                                                </span>
                                                                                                <span className="elementor-cust-icon-list-text">{detail}
                                                                                                </span>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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
                                                                                        {doctor.qualifications.items.map((detail, index) => (
                                                                                            <li className="elementor-icon-list-item">
                                                                                                <span className="elementor-icon-list-icon">
                                                                                                    <i aria-hidden="true" className=" bi-check2-circle">
                                                                                                    </i>
                                                                                                </span>
                                                                                                <span className="elementor-cust-icon-list-text">{detail}</span
                                                                                                >
                                                                                            </li>
                                                                                        ))}
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
                                                                                            <h4 className="section-title">
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
                                        <div className="custom-post-nav">
                                            <div className="prev-nav-link">
                                                <Link
                                                    to={`/${i18n.language}/doctor/${encodeURIComponent(prevDoctor.link)}`} >
                                                    <i className="ti-arrow-left" />
                                                    <div>{prevDoctor.name}</div>
                                                </Link>
                                            </div>
                                            <div className="next-nav-link">
                                                <Link
                                                    to={`/${i18n.language}/doctor/${encodeURIComponent(nextDoctor.link)}`} >
                                                    <div>{nextDoctor.name}</div>
                                                    <i className="ti-arrow-right" />
                                                </Link>
                                            </div>
                                            {/* </div> */}
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