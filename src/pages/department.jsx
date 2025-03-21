import React, { useEffect } from "react";
import '../custom_css/departments.css';
import DynamicBanner from '../components/DynamicBanner';
import { useTranslation } from "react-i18next";

const Departments = () => {
    const { t } = useTranslation('departmentPage');
    const departmentsData = t("departmentPage", { returnObjects: true }) || [];
    console.log("departmentsData:", departmentsData);


    return (
        <>
            <DynamicBanner
                deptName={departmentsData[0].deptName}
                bannerImage={departmentsData[0].bannerImage}
                bannerPosition={departmentsData[0].bannerPosition}
                deptLink={departmentsData[0].deptLink}
                home={departmentsData[0].home}
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
                                        {/* <div className="icon">

                                            </div> */}

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