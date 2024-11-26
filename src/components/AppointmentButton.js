import React, { useState } from "react";
import Booking from "./BookingForm"; // Assuming Booking component exists

export default function AppointmentButton() {
    const [showBooking, setShowBooking] = useState(false);

    const handleOpen = () => setShowBooking(true);
    const handleClose = () => setShowBooking(false);

    return (
        <>
            {/* Appointment Button */}
            <div
                className="elementor-element elementor-element-116f457b e-con-full e-flex e-con e-child"
                data-id="116f457b"
                data-element_type="container"
            >
                <div
                    className="elementor-element elementor-element-7b652a13 elementor-widget__width-auto elementor-widget elementor-widget-ceabutton"
                    data-id="7b652a13"
                    data-element_type="widget"
                    data-widget_type="ceabutton.default"
                >
                    <div className="elementor-widget-container cea-button-wrapper">
                        <div className="cea-button-wrapper">
                            <button
                                onClick={handleOpen}
                                className="cea-button-link elementor-button cea-button elementor-size-sm"
                            >
                                <span className="cea-button-content-wrapper">
                                    <span className="cea-button-icon cea-align-icon-right">
                                        <svg
                                            aria-hidden="true"
                                            className="e-font-icon-svg e-fas-tooth"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"></path>
                                        </svg>
                                    </span>
                                    <span className="cea-button-text">
                                        APPOINTMENT
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <Booking showModal={showBooking} handleClose={handleClose} />
        </>
    );
}