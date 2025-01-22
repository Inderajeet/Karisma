import React, { useEffect, useState } from "react";
import Banner from '../../components/Banner';
import { fetchAllJson } from "../../utils/fetchAllJson"; // Import the utility function
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";



function DoctorPage() {

    const { t, i18n } = useTranslation(['translation', 'doctors']);
    const { doctorName } = useParams();
    const [data, setData] = useState({ styles: {}, images: {} });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allData = await fetchAllJson(); // Fetch styles and images
                setData(allData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    


    useEffect(() => {
        // Find the doctor by name in the JSON file
        const doctorsData = t('doctors:doctors', { returnObjects: true }); // Fetch the array of doctors
        const foundDoctor = doctorsData.find(
            (doc) => doc.link === decodeURIComponent(doctorName)
        );
        setDoctor(foundDoctor);
    }, [loading, error, doctorName, t]);

    if (loading) return;
    if (error) return;

    if (!doctor) {
        return <p>Doctor not found!</p>;
    }
    console.log("Doctor Name:", decodeURIComponent(doctorName));

    // const doctor = {
    //     image: "/assets/wp-content/uploads/2019/04/team-5.webp",
    //     name: "Dr. AHMED AMIN AHMED ELFAR",
    //     designation: "Cosmetic Dentistry",
    //     email: "jamesgarcia@happysmile.com",
    //     phone: "+(528) 456-7598",
    //     website: "https://zozothemes.com/",
    //     experience: "More Than 5+ Years",
    //     socialLinks: {
    //         facebook: "https://www.facebook.com/zozothemes.official/",
    //         twitter: "https://twitter.com/zozothemes",
    //         instagram: "https://www.instagram.com/zozotheme/",
    //         youtube: "https://www.youtube.com/channel/UCAOkwuYxJuOqiYAj1Vy5JIg",
    //     },
    //     overview: {
    //         title: "Overview",
    //         sections: [
    //             {
    //                 subtitle: "Speciality",
    //                 items: ["General Practitioner Dentist", "General Dentistry"],
    //             },
    //             {
    //                 subtitle: "Procedures",
    //                 items: [
    //                     "Oral and Dental Treatments, Veneers, Cosmetic Procedures, Minor Oral Surgeries, RCT.",
    //                 ],
    //             },
    //         ],
    //     },
    //     workExperience: {
    //         title: "Work Experience",
    //         items: [
    //             "Over 12 years of experience.",
    //             "Highly experienced in Restorative and Cosmetic Dentistry.",
    //             "Oral Diagnosis and Treatment planning.",
    //             "Dental Treatments and Minor Oral Surgeons.",
    //             "Pediatric Dentistry.",
    //         ],
    //     },
    //     qualifications: {
    //         title: "Qualifications",
    //         items: [
    //             "Dr. MO is a graduate of University of British",
    //             "B.A. degree in Biology",
    //             "D.M.D. Degree",
    //             "Advanced Dental education in Diagnostic Science",
    //             "Doctor of Dental Surgery degree",
    //         ],
    //     },
    //     workingShifts: {
    //         title: "Working Shifts",
    //         flipFront1: "Mon - Sun",
    //         flipFrontDesc1: "09.00am - 08.00pm",
    //         flipBack1: "Mon - Sun",
    //         flipBackDesc1: "09.00am - 08.00pm",
    //         flipFront2: "Hospital",
    //         flipFrontDesc2: "4b, Walse Street, USA",
    //         flipBack2: "Hospital",
    //         flipBackDesc2: "4b, Walse Street, USA",
    //         items: [
    //             "Monday to Friday: 9 AM - 6 PM",
    //             "Saturday: 10 AM - 4 PM",
    //             "Sunday: Off",
    //         ],
    //     },
    // };
    return (
        <>
            <Banner></Banner>
            <div className="happysmile-content-wrap container cea-team-template-default 
            single single-cea-team postid-73184 theme-happysmile woocommerce-js 
            elementor-default elementor-kit-5 elementor-page elementor-page-73184 
            e--ua-blink e--ua-chrome e--ua-webkit page-load-end" style={{ padding: "5rem 0" }}>
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
                                        <div className="team-other-details">
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
                                        <div className="team-social-wrap">
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
                                                                    <div
                                                                        className="elementor-element elementor-element-2b718853 e-flex e-con-boxed e-con e-child"
                                                                        data-id="2b718853"
                                                                        data-element_type="container"
                                                                    >
                                                                        {/* Overview */}
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
                                                                                                {doctor.overview.title}
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
                                                                    {/* Qualifications */}
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
                                                                                                {doctor.qualifications.title}
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
                                                                                                {doctor.workExperience.title}
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
                                                                                                {doctor.workingShifts.title}
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
                                                                                                                    {doctor.workingShifts.flipFront1}
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
                                                                                                                    {doctor.workingShifts.flipBack1}
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
                                                                                                                    {doctor.workingShifts.flipFront2}
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
                                                                                                                    {doctor.workingShifts.flipBack2}
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
                                                <div
                                                    data-cea-float='[{"float_title":"Floating Image","float_img":"https:\/\/wordpress.zozothemes.com\/happysmile\/wp-content\/uploads\/sites\/20\/2024\/05\/about-5-scaled.webp","float_left":"95","float_top":"28","float_distance":"100","float_animation":"0","float_mouse":"0","float_width":"400px"}]'
                                                    className="elementor-element elementor-element-6e079b74 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                                                    data-id="6e079b74"
                                                    data-element_type="container"
                                                    style={{ display: "none" }}
                                                >
                                                    <div
                                                        id="float-parallax-6e079b74"
                                                        className="float-parallax"
                                                        data-mouse={0}
                                                        data-left={95}
                                                        data-top={28}
                                                        data-distance={100}
                                                        style={{ width: 400, top: "28%", left: "95%" }}
                                                    >
                                                        <img
                                                            alt="Floating Image"
                                                            src="/assets/wp-content/uploads/sites/20/2024/05/about-5-scaled.webp"
                                                        />
                                                    </div>
                                                    <div className="e-con-inner">
                                                        <div
                                                            className="elementor-element elementor-element-550a23e1 e-flex e-con-boxed e-con e-child"
                                                            data-id="550a23e1"
                                                            data-element_type="container"
                                                        >
                                                            <div className="e-con-inner">
                                                                <div
                                                                    className="elementor-element elementor-element-7cd7f81c e-con-full e-flex e-con e-child"
                                                                    data-id="7cd7f81c"
                                                                    data-element_type="container"
                                                                >
                                                                    <div
                                                                        className="elementor-element elementor-element-eb8b069 cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                                                                        data-id="eb8b069"
                                                                        data-element_type="widget"
                                                                        data-widget_type="ceasectiontitle.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <div className="section-title-wrapper">
                                                                                <div className="title-wrap">
                                                                                    <h6 className="sub-title">
                                                                                        <span className="subtitle-dots">
                                                                                            We Are Skilled Dentist{" "}
                                                                                        </span>
                                                                                    </h6>
                                                                                    <h2 className="section-title">
                                                                                        Perfect Smile, Excellence Defined
                                                                                    </h2>
                                                                                </div>
                                                                                {/* .title-wrap */}
                                                                                <div className="section-description">
                                                                                    <p className="section-content">
                                                                                        Excellence is a quality of being good or
                                                                                        outstanding in a particular context. It's
                                                                                        the relentless pursuit of high standards,
                                                                                        continuous improvement, willingness beyond
                                                                                        what is expected.
                                                                                    </p>
                                                                                </div>
                                                                                {/* .section-description */}
                                                                            </div>
                                                                            {/* .section-title-wrapper */}{" "}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-47dbfc31 elementor-widget elementor-widget-image"
                                                                        data-id="47dbfc31"
                                                                        data-element_type="widget"
                                                                        data-widget_type="image.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <img
                                                                                decoding="async"
                                                                                width={683}
                                                                                height={456}
                                                                                src="/assets/wp-content/uploads/2024/05/how-work-2.webp"
                                                                                className="attachment-medium size-medium wp-image-66950"
                                                                                alt=""
                                                                            />{" "}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-75ca996b cea-view-framed anim cus-light elementor-widget__width-auto elementor-hidden-mobile elementor-hidden-tablet cea-shape-circle elementor-widget elementor-widget-ceapopupanything animated zoomIn"
                                                                        data-id="75ca996b"
                                                                        data-element_type="widget"
                                                                        data-settings='{"_animation":"zoomIn","_animation_delay":3}'
                                                                        data-widget_type="ceapopupanything.default"
                                                                    >
                                                                        <div className="elementor-widget-container popup-anything-wrapper">
                                                                            <a
                                                                                className="cea-popup-anything popup-trigger-icon"
                                                                                href="https://www.youtube.com/watch?v=lw7xIB0kPCo"
                                                                            >
                                                                                <i aria-hidden="true" className=" bi-play" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="elementor-element elementor-element-78b94bc1 e-con-full e-flex e-con e-child"
                                                                    data-id="78b94bc1"
                                                                    data-element_type="container"
                                                                >
                                                                    <div
                                                                        className="elementor-element elementor-element-1f204e1f elementor-widget elementor-widget-image"
                                                                        data-id="1f204e1f"
                                                                        data-element_type="widget"
                                                                        data-widget_type="image.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <img
                                                                                decoding="async"
                                                                                width={684}
                                                                                height={456}
                                                                                src="/assets/wp-content/uploads/2024/05/skilled-1.jpg"
                                                                                className="attachment-medium size-medium wp-image-67206"
                                                                                alt=""
                                                                            />{" "}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-4d993e8a elementor-widget elementor-widget-progress"
                                                                        data-id="4d993e8a"
                                                                        data-element_type="widget"
                                                                        data-widget_type="progress.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <span
                                                                                className="elementor-title"
                                                                                id="elementor-progress-bar-4d993e8a"
                                                                            >
                                                                                Scaling and root planing{" "}
                                                                            </span>
                                                                            <div
                                                                                aria-labelledby="elementor-progress-bar-4d993e8a"
                                                                                className="elementor-progress-wrapper"
                                                                                role="progressbar"
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                                aria-valuenow={90}
                                                                            >
                                                                                <div
                                                                                    className="elementor-progress-bar"
                                                                                    data-max={90}
                                                                                >
                                                                                    <span className="elementor-progress-text" />
                                                                                    <span className="elementor-progress-percentage">
                                                                                        90%
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-654b7363 elementor-widget elementor-widget-progress"
                                                                        data-id="654b7363"
                                                                        data-element_type="widget"
                                                                        data-widget_type="progress.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <span
                                                                                className="elementor-title"
                                                                                id="elementor-progress-bar-654b7363"
                                                                            >
                                                                                Teeth whitening{" "}
                                                                            </span>
                                                                            <div
                                                                                aria-labelledby="elementor-progress-bar-654b7363"
                                                                                className="elementor-progress-wrapper"
                                                                                role="progressbar"
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                                aria-valuenow={82}
                                                                            >
                                                                                <div
                                                                                    className="elementor-progress-bar"
                                                                                    data-max={82}
                                                                                >
                                                                                    <span className="elementor-progress-text" />
                                                                                    <span className="elementor-progress-percentage">
                                                                                        82%
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-f742194 elementor-widget elementor-widget-progress"
                                                                        data-id="f742194"
                                                                        data-element_type="widget"
                                                                        data-widget_type="progress.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <span
                                                                                className="elementor-title"
                                                                                id="elementor-progress-bar-f742194"
                                                                            >
                                                                                Invisalign &amp; ClearCorrect{" "}
                                                                            </span>
                                                                            <div
                                                                                aria-labelledby="elementor-progress-bar-f742194"
                                                                                className="elementor-progress-wrapper"
                                                                                role="progressbar"
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                                aria-valuenow={65}
                                                                            >
                                                                                <div
                                                                                    className="elementor-progress-bar"
                                                                                    data-max={65}
                                                                                >
                                                                                    <span className="elementor-progress-text" />
                                                                                    <span className="elementor-progress-percentage">
                                                                                        65%
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-7a37c236 elementor-widget elementor-widget-progress"
                                                                        data-id="7a37c236"
                                                                        data-element_type="widget"
                                                                        data-widget_type="progress.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <span
                                                                                className="elementor-title"
                                                                                id="elementor-progress-bar-7a37c236"
                                                                            >
                                                                                Zirconium crowns{" "}
                                                                            </span>
                                                                            <div
                                                                                aria-labelledby="elementor-progress-bar-7a37c236"
                                                                                className="elementor-progress-wrapper"
                                                                                role="progressbar"
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                                aria-valuenow={75}
                                                                            >
                                                                                <div
                                                                                    className="elementor-progress-bar"
                                                                                    data-max={75}
                                                                                >
                                                                                    <span className="elementor-progress-text" />
                                                                                    <span className="elementor-progress-percentage">
                                                                                        75%
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="elementor-element elementor-element-2bb02f5 elementor-widget elementor-widget-progress"
                                                                        data-id="2bb02f5"
                                                                        data-element_type="widget"
                                                                        data-widget_type="progress.default"
                                                                    >
                                                                        <div className="elementor-widget-container">
                                                                            <span
                                                                                className="elementor-title"
                                                                                id="elementor-progress-bar-2bb02f5"
                                                                            >
                                                                                Root Canal Treatment{" "}
                                                                            </span>
                                                                            <div
                                                                                aria-labelledby="elementor-progress-bar-2bb02f5"
                                                                                className="elementor-progress-wrapper"
                                                                                role="progressbar"
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                                aria-valuenow={95}
                                                                            >
                                                                                <div
                                                                                    className="elementor-progress-bar"
                                                                                    data-max={95}
                                                                                >
                                                                                    <span className="elementor-progress-text" />
                                                                                    <span className="elementor-progress-percentage">
                                                                                        95%
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="elementor-element elementor-element-52df8086 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
                                                                    data-id="52df8086"
                                                                    data-element_type="container"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Contact Form */}
                                                <div
                                                    className="elementor-element elementor-element-16883c1e e-flex e-con-boxed e-con e-parent e-lazyloaded"
                                                    data-id="16883c1e"
                                                    data-element_type="container"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="e-con-inner">
                                                        <div
                                                            className="elementor-element elementor-element-74d4254a e-con-full e-flex e-con e-child"
                                                            data-id="74d4254a"
                                                            data-element_type="container"
                                                            data-settings='{"background_background":"classic"}'
                                                        >
                                                            <div
                                                                className="elementor-element elementor-element-44cf182a cea-align-left elementor-widget elementor-widget-ceasectiontitle"
                                                                data-id="44cf182a"
                                                                data-element_type="widget"
                                                                data-widget_type="ceasectiontitle.default"
                                                            >
                                                                <div className="elementor-widget-container">
                                                                    <div className="section-title-wrapper">
                                                                        <div className="title-wrap">
                                                                            <p className="sub-title">
                                                                                <span className="subtitle-dots">
                                                                                    Contact Information
                                                                                </span>
                                                                            </p>
                                                                            <h2 className="section-title">
                                                                                Let’s Discuss With Us
                                                                            </h2>
                                                                        </div>
                                                                        {/* .title-wrap */}
                                                                        <div className="section-description">
                                                                            <p className="section-content"></p>
                                                                        </div>
                                                                        {/* .section-description */}
                                                                    </div>
                                                                    {/* .section-title-wrapper */}{" "}
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="elementor-element elementor-element-537c4cc8 team-form elementor-widget elementor-widget-contactform"
                                                                data-id="537c4cc8"
                                                                data-element_type="widget"
                                                                data-widget_type="contactform.default"
                                                            >
                                                                <div className="elementor-widget-container">
                                                                    <div className="contact-form-wrapper cf-style-default">
                                                                        <div className="contact-form">
                                                                            <div
                                                                                className="wpcf7 js"
                                                                                id="wpcf7-f15411-p73183-o1"
                                                                                lang="en-US"
                                                                                dir="ltr"
                                                                                data-wpcf7-id={15411}
                                                                            >
                                                                                <div className="screen-reader-response">
                                                                                    <p
                                                                                        role="status"
                                                                                        aria-live="polite"
                                                                                        aria-atomic="true"
                                                                                    />{" "}
                                                                                    <ul />
                                                                                </div>
                                                                                <form
                                                                                    action="/wordpress/team/angelina-jolie/?simply_static_page=5467#wpcf7-f15411-p73183-o1"
                                                                                    method="post"
                                                                                    className="wpcf7-form init"
                                                                                    aria-label="Contact form"
                                                                                    noValidate="novalidate"
                                                                                    data-status="init"
                                                                                >
                                                                                    <div style={{ display: "none" }}>
                                                                                        <input
                                                                                            type="hidden"
                                                                                            name="_wpcf7"
                                                                                            defaultValue={15411}
                                                                                        />
                                                                                        <input
                                                                                            type="hidden"
                                                                                            name="_wpcf7_version"
                                                                                            defaultValue={6.0}
                                                                                        />
                                                                                        <input
                                                                                            type="hidden"
                                                                                            name="_wpcf7_locale"
                                                                                            defaultValue="en_US"
                                                                                        />
                                                                                        <input
                                                                                            type="hidden"
                                                                                            name="_wpcf7_unit_tag"
                                                                                            defaultValue="wpcf7-f15411-p73183-o1"
                                                                                        />
                                                                                        <input
                                                                                            type="hidden"
                                                                                            name="_wpcf7_container_post"
                                                                                            defaultValue={73183}
                                                                                        />
                                                                                        <input
                                                                                            type="hidden"
                                                                                            name="_wpcf7_posted_data_hash"
                                                                                            defaultValue=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                <span
                                                                                                    className="wpcf7-form-control-wrap"
                                                                                                    data-name="your-name"
                                                                                                >
                                                                                                    <input
                                                                                                        size={40}
                                                                                                        maxLength={400}
                                                                                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                        aria-required="true"
                                                                                                        aria-invalid="false"
                                                                                                        placeholder="Name *"
                                                                                                        defaultValue=""
                                                                                                        type="text"
                                                                                                        name="your-name"
                                                                                                    />
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                <span
                                                                                                    className="wpcf7-form-control-wrap"
                                                                                                    data-name="your-email"
                                                                                                >
                                                                                                    <input
                                                                                                        size={40}
                                                                                                        maxLength={400}
                                                                                                        className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                                                                        aria-required="true"
                                                                                                        aria-invalid="false"
                                                                                                        placeholder="Email *"
                                                                                                        defaultValue=""
                                                                                                        type="email"
                                                                                                        name="your-email"
                                                                                                    />
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-12">
                                                                                            <p>
                                                                                                <span
                                                                                                    className="wpcf7-form-control-wrap"
                                                                                                    data-name="your-message"
                                                                                                >
                                                                                                    <textarea
                                                                                                        cols={40}
                                                                                                        rows={10}
                                                                                                        maxLength={2000}
                                                                                                        className="wpcf7-form-control wpcf7-textarea"
                                                                                                        aria-invalid="false"
                                                                                                        placeholder="Message"
                                                                                                        name="your-message"
                                                                                                        defaultValue={""}
                                                                                                    />
                                                                                                </span>
                                                                                                <input
                                                                                                    className="wpcf7-form-control wpcf7-submit has-spinner"
                                                                                                    type="submit"
                                                                                                    defaultValue="Send Message"
                                                                                                />
                                                                                                <span className="wpcf7-spinner" />
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="wpcf7-response-output"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                        {/* .contact-form */}
                                                                    </div>
                                                                    {/* .contact-form-wrapper */}{" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* .team-content-wrap */}
                                        <div className="custom-post-nav">
                                            <div className="prev-nav-link">
                                                <a href="./../nico-robin/index.html">
                                                    <i className="ti-arrow-left" />
                                                    <h5>Nico Robin</h5>
                                                </a>
                                            </div>
                                            <div className="next-nav-link">
                                                <a href="./../emi-akezawa/index.html">
                                                    <h5>Emi Akezawa</h5>
                                                    <i className="ti-arrow-right" />
                                                </a>
                                            </div>
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