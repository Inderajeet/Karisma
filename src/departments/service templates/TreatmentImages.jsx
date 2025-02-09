import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import BeforeAfterSlider from "./BeforeAfterSlider";
import "../../custom_css/doctor.css"; // Reusing the same styles

const TreatmentImages = () => {
  const { t, i18n } = useTranslation("treatmentResults");

  // Fetch treatment images from JSON
  const treatments = t("treatmentResults:treatmentResults", { returnObjects: true });

  return (
    <>
      <Banner />
      <div className="happysmile-content-wrap container page" style={{ marginTop: "50px" }}>
        <div className="col-md-12 order-md-2">
          <div className="post-inner">
            <div className="entry-content">
              <div className="elementor elementor-73315">
                <div className="elementor-element elementor-7a321f1b e-flex e-con-boxed e-con e-parent e-lazyloaded">
                  <div className="e-con-inner">
                    <div className="dd-row">
                      {treatments.map((treatment) => (
                        <Link
                          to={`/${i18n.language}/${encodeURIComponent(treatment.link)}`}
                          key={treatment.id}
                          className="doctor-info-cols" // Reusing styles
                          style={{ cursor: "pointer" }}
                        >
                          <div className="dd-inner">
                            <div className="cust-doctor-info-wrap">
                              {/* Before-After Slider */}
                              <BeforeAfterSlider
                                beforeImage={treatment.beforeImage}
                                afterImage={treatment.afterImage}
                              />
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
    </>
  );
};

export default TreatmentImages;
