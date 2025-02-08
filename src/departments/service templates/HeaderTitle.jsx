import React from "react";
import "../../custom_css/serviceTemplate.css";
import Banner from "../../components/Banner";

const HeaderTitle = ({ title, description }) => {
    return (
        <div className="custsectionStyle customContainer">
            <h2 className="header-title">{title}</h2>
            <p>{description}</p>
            <Banner />
        </div>
    );
};

export default HeaderTitle;