import { useState } from 'react';
import '.././custom_css/contactForm.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactType: 'Enquiry', // Default selected radio
    });

    const [alertMessage, setAlertMessage] = useState(''); // State for handling alert messages
    const [isSuccess, setIsSuccess] = useState(false); // To differentiate success and error alert styles
    const [isSubmitting, setIsSubmitting] = useState(false); // To track form submission state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Start submitting
        setIsSubmitting(true);

        try {
            const response = await fetch('https://dental.dmaksolutions.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success (e.g., show a success message)
                setAlertMessage('Message sent successfully!');
                setIsSuccess(true);

                // Clear the form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    contactType: 'Enquiry',
                });
            } else {
                // Handle error (e.g., show an error message)
                setAlertMessage('Error sending message. Please try again later.');
                setIsSuccess(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    contactType: 'Enquiry',
                });
            }
        } catch (error) {
            // Handle fetch error
            setAlertMessage('Error sending message. Please try again later.');
            setIsSuccess(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                contactType: 'Enquiry',
            });
        }

        // Hide the alert after 3 seconds
        setTimeout(() => {
            setAlertMessage('');
        }, 3000);

        // Stop submitting
        setIsSubmitting(false);
    };

    return (
        <>
            {/* Conditional rendering of the alert message at the top */}
            {alertMessage && (
                <div
                    className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}
                    role="alert"
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 9999,
                        padding: '10px 20px',
                        width: 'auto',
                        backgroundColor: isSuccess ? '#28a745' : '#dc3545',
                        color: '#fff',
                        borderRadius: '5px',
                    }}
                >
                    {alertMessage}
                </div>
            )}

            <div
                className="elementor-element elementor-element-302573ab e-flex e-con-boxed e-con e-child"
                data-id="302573ab"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
            >
                <div className="e-con-inner">
                    <div
                        className="elementor-element elementor-element-43489300 elementor-widget elementor-widget-contactform"
                        data-id={43489300}
                        data-element_type="widget"
                        data-widget_type="contactform.default"
                    >
                        <div className="elementor-widget-container">
                            <div className="contact-form-wrapper cf-style-default">
                                <div className="contact-form">
                                    <form onSubmit={handleSubmit} className="wpcf7-form init">
                                        {/* Radio buttons for Enquiry and Feedback in the same row */}
                                        <div className="row" style={{ display: "flex", alignItems: "center" }}>
                                            <div className="col-md-6" style={{ display: "flex", alignItems: "center" }}>
                                                <p style={{ margin: 0 }}>
                                                    <label for="r1" style={{ display: "flex", alignItems: "center" }}>
                                                        <input
                                                            type="radio"
                                                            name="contactType"
                                                            value="Enquiry"
                                                            checked={formData.contactType === 'Enquiry'}
                                                            onChange={handleChange}
                                                            style={{ marginRight: "10px" }}
                                                            id='r1'
                                                        />{" "}
                                                        Enquiry
                                                        </label>
                                                </p>
                                            </div>
                                            <div className="col-md-6" style={{ display: "flex", alignItems: "center" }}>
                                                <p style={{ margin: 0 }}>
                                                    <label for="r2" style={{ display: "flex", alignItems: "center" }}>
                                                        <input
                                                            type="radio"
                                                            name="contactType"
                                                            value="Feedback"
                                                            checked={formData.contactType === 'Feedback'}
                                                            onChange={handleChange}
                                                            style={{ marginRight: "10px" }}
                                                            id='r2'
                                                        />{" "}
                                                        Feedback
                                                    </label>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Contact form fields */}
                                        <div className="row contact-us-form">
                                            <div className="col-md-12">
                                                <p>
                                                    <input
                                                        size={40}
                                                        maxLength={400}
                                                        className="wpcf7-form-control wpcf7-text"
                                                        aria-invalid="false"
                                                        placeholder="Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        type="text"
                                                        name="name"
                                                        required
                                                    />
                                                </p>
                                            </div>
                                            <div className="col-md-6 pr-2">
                                                <p>
                                                    <input
                                                        size={40}
                                                        maxLength={400}
                                                        className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                        aria-required="true"
                                                        aria-invalid="false"
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        type="email"
                                                        name="email"
                                                        required
                                                    />
                                                </p>
                                            </div>
                                            <div className="col-md-6 pl-3">
                                                <p>
                                                    <input
                                                        size={40}
                                                        maxLength={400}
                                                        className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                        aria-required="true"
                                                        aria-invalid="false"
                                                        placeholder="Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                    />
                                                </p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>
                                                    <textarea
                                                        cols={40}
                                                        rows={10}
                                                        maxLength={2000}
                                                        className="wpcf7-form-control wpcf7-textarea"
                                                        aria-invalid="false"
                                                        placeholder="Message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </p>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <input
                                                    className="wpcf7-form-control wpcf7-submit has-spinner"
                                                    type="submit"
                                                    value={isSubmitting ? 'Submitting...' : 'Send Now'}
                                                    disabled={isSubmitting} // Disable the button while submitting
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
