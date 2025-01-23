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

    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState(''); // State for handling alert messages
    const [isSuccess, setIsSuccess] = useState(false); // To differentiate success and error alert styles
    const [isSubmitting, setIsSubmitting] = useState(false); // To track form submission state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear error for the field as user types
        if (value.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

    const validateField = (name) => {
        if (!formData[name]?.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field].trim()) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            try {
                // const response = await fetch('', {
                const response = await fetch('https://dental.dmaksolutions.com/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setAlertMessage('Message sent successfully!');
                    setIsSuccess(true);

                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                        contactType: 'Enquiry',
                    });
                } else {
                    setAlertMessage('Error sending message. Please try again later.');
                    setIsSuccess(false);
                }
            } catch (error) {
                setAlertMessage('Error sending message. Please try again later.');
                setIsSuccess(false);
            }

            setTimeout(() => {
                setAlertMessage('');
            }, 3000);

            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Conditional rendering of the alert message */}
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
                                    <form onSubmit={handleSubmit} className="cust-form init">
                                        {/* Radio buttons */}
                                        <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ margin: 0 }}>
                                                    <label htmlFor="r1" className="radio-label" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <input
                                                            type="radio"
                                                            name="contactType"
                                                            value="Enquiry"
                                                            checked={formData.contactType === 'Enquiry'}
                                                            onChange={handleChange}
                                                            style={{ marginRight: '10px' }}
                                                            id="r1"
                                                        />
                                                        Enquiry
                                                    </label>
                                                </p>
                                            </div>
                                            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ margin: 0 }}>
                                                    <label htmlFor="r2" className="radio-label" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <input
                                                            type="radio"
                                                            name="contactType"
                                                            value="Feedback"
                                                            checked={formData.contactType === 'Feedback'}
                                                            onChange={handleChange}
                                                            style={{ marginRight: '10px' }}
                                                            id="r2"
                                                        />
                                                        Feedback
                                                    </label>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Form fields */}
                                        <div className="row contact-us-form">
                                            <div className="col-md-12">
                                                <p>
                                                    <input
                                                        size={40}
                                                        maxLength={400}
                                                        className="cust-form-control cust-text"
                                                        aria-invalid="false"
                                                        placeholder="Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        onBlur={() => validateField('name')}
                                                        type="text"
                                                        name="name"
                                                    />
                                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                                </p>
                                            </div>
                                            <div className="col-md-6 pr-2">
                                                <p>
                                                    <input
                                                        size={40}
                                                        maxLength={400}
                                                        className="cust-form-control cust-email"
                                                        aria-required="true"
                                                        aria-invalid="false"
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        onBlur={() => validateField('email')}
                                                        type="email"
                                                        name="email"
                                                    />
                                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                                </p>
                                            </div>
                                            <div className="col-md-6 pl-3">
                                                <p>
                                                    <input
                                                        size={40}
                                                        maxLength={400}
                                                        className="cust-form-control cust-tel"
                                                        aria-required="true"
                                                        aria-invalid="false"
                                                        placeholder="Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        onBlur={() => validateField('phone')}
                                                        type="tel"
                                                        name="phone"
                                                    />
                                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                                </p>
                                            </div>
                                            <div className="col-md-12">
                                                <p>
                                                    <textarea
                                                        cols={40}
                                                        rows={10}
                                                        maxLength={2000}
                                                        className="cust-form-control cust-textarea"
                                                        aria-invalid="false"
                                                        placeholder="Message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        onBlur={() => validateField('message')}
                                                    />
                                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                                </p>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <input
                                                    className="wpcf7-form-control wpcf7-submit has-spinner"
                                                    type="submit"
                                                    value={isSubmitting ? 'Submitting...' : 'Send Now'}
                                                    disabled={isSubmitting}
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
