import React, { useState, useEffect } from "react";
import "./video.css"; 
import { fetchAllJson } from "../utils/fetchAllJson";



const VideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const [jsonData, setJsonData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await fetchAllJson();
                    setJsonData(data);
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            };
    
            fetchData();
        }, []);
    
        if (loading) {
            return ;
        }
    
        if (error) {
            return ;
        }
        const { images } = jsonData;
        const {home} = images;

    return (
        <>
        <div
        data-elementor-type="wp-page"
        data-elementor-id={73397}
        className="elementor elementor-73397"
        // style={{
        //   backgroundColor: about_us["background-color"],
        // }}
      >
        <div className="section" style={{ backgroundImage: `url(${home['video']})` }}>
            {/* <button className="play-button" onClick={toggleModal}>
        ▶
      </button> */}
            <div
                className="elementor-element elementor-element-7d80052a cea-view-framed anim cus-light elementor-widget__width-auto elementor-hidden-mobile cea-shape-circle elementor-widget elementor-widget-ceapopupanything animated zoomIn"
                data-id="7d80052a"
                data-element_type="widget"
                data-settings='{"_animation":"zoomIn","_animation_delay":3}'
                data-widget_type="ceapopupanything.default"
                style={{ alignSelf: 'center' }}
            >
                <div className="elementor-widget-container popup-anything-wrapper" style={{ margin: '0' }}>
                    <a className="cea-popup-anything popup-trigger-icon" 
                    // href="onClick={toggleModal}"
                    href="/"
                    >
                        <i aria-hidden="true" className=" bi-play"></i>
                    </a>
                </div>
            </div>{isOpen && (
                <div className="modal" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            // src="/ggg"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button className="close-button" onClick={toggleModal}>
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div>
        </>
    );
};

export default VideoSection;
