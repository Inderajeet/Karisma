import React from 'react'
import { Link } from 'react-router-dom'
import i18n from '../../i18n'
import '../../custom_css/doctor.css'

const DoctorGrid = (props) => {
    console.log(props)
  return (
    <div>
      <div
        className="happysmile-content-wrap container page"
        style={{ marginTop: "50px" }}
      >
        <div className="col-md-12 order-md-2">
          <div className="post-inner">
            <div className="entry-content">
              <div className="elementor elementor-73315">
                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                  <div className="e-con-inner">
                    <div className="dd-row">
                      {props?.data?.map((service, index) => (
                        <Link
                          to={`/${i18n.language}/${encodeURIComponent(
                            service?.link
                          )}`}
                          key={index}
                          className="doctor-info-cols"
                          style={{ cursor: "pointer" }}
                        >
                          <h1>{service?.title}</h1>
                          <div className="dd-inner">
                            <div className="cust-doctor-info-wrap">
                              <div className="doctor-thumbnail">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width={500}
                                  height={456}
                                  src={service?.image}
                                  className="img-responsive wp-post-image"
                                  alt={service?.title}
                                />
                              </div>
                              <div className="doctor-info-body">
                                <div className="doctor-name">
                                  {service?.title}
                                </div>
                                <div className="doctor-info-inner">
                                  <div className="doctor-specialities">
                                          <div className="doctor-departments">{service?.description}</div>
                                        </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorGrid
