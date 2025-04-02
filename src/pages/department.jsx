import React, { useEffect, useState } from "react";
import '../custom_css/departments.css';
import DynamicBanner from '../components/DynamicBanner';
import { useTranslation } from "react-i18next";
import CommonServiceBanner from "../departments/CommonServiceBanner";

const Departments = () => {
    const { t } = useTranslation('departmentPage');
    const [departmentsData, setDepartmentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch('/api/departments', {
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
            if (data && data.departmentPage && Array.isArray(data.departmentPage)) {
                setDepartmentsData(data.departmentPage);
            } else {
                throw new Error("Invalid data format or no departments found");
            }
            setLoading(false);
        })
        .catch(err => {
            console.error("Failed to fetch departments:", err);
            setError(`Failed to fetch departments: ${err.message}`);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading departments...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <CommonServiceBanner
                deptName={departmentsData[0]?.title}
                bannerImage={departmentsData[0]?.imageUrl}
                bannerPosition="center"
                deptLink={departmentsData[0]?.link}
                home="Home"
            />
            <div className="customContainer depts">
                <div className="dFlex">
                    {departmentsData.slice(1).map((department, index) => (
                        <div className="item" key={index}>
                            <a href={department.link} className="imgBx">
                                <img
                                    src={department.imageUrl}
                                    alt={department.imageAlt}
                                    width={315}
                                    height={452}
                                    className="lazy entered loaded"
                                    loading="lazy"
                                    data-ll-status="loaded"
                                />
                                <div className="cont">
                                    <div className="tle">{department.title}</div>
                                    <div className="innerCnt">
                                        <div className="hd">{department.title}</div>
                                        <ul>
                                            {(department.listItems || []).map((item, i) => (
                                                <li className="content-featureItem-dept" key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="line-container" style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '10px' }}>
                <hr className="half-line" style={{ width: '50%', border: '0', height: '2px', backgroundColor: '#111', margin: '0' }} />
            </div>
        </>
    );
};

export default Departments;
