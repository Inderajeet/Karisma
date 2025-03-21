import { useState } from 'react';
import '.././custom_css/contactForm.css';
import { useTranslation } from "react-i18next";


export default function ContactForm() {
    const { t, i18n } = useTranslation('forms');

    const forms = t('forms', { returnObjects: true });  // Fetch the entire contact object
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '', // Default country code
        phone: '',
        message: '',
        contactType: 'Enquiry',
    });

    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        let updatedValue = value;

        if (name === "phone") {
            updatedValue = value.replace(/\D/g, "").slice(0, 15); // Allow only numbers & limit to 15 digits
        }
        else if (name === "countryCode") {
            updatedValue = value.replace(/[^+\d]/g, ""); // Allow only "+" and numbers
        }
        else if (name === "name") {
            updatedValue = value.replace(/[^A-Za-z.\s]/g, ""); // Allow only alphabets, spaces, and dots
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: updatedValue,
        }));

        validateField(name, updatedValue);
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors };

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    newErrors.name = 'Name is required';
                } else if (!/^[A-Za-z\s.]+$/.test(value)) {
                    newErrors.name = 'Name should only contain alphabets';
                } else {
                    newErrors.name = '';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!/^\S+@\S+\.\S+$/.test(value)) {
                    newErrors.email = 'Invalid email format';
                } else {
                    newErrors.email = '';
                }
                break;
            case 'phone':
                if (!value.trim()) {
                    newErrors.phone = 'Phone number is required';
                } else if (!/^\d{10,15}$/.test(value)) {
                    newErrors.phone = 'Phone number not valid';
                } else {
                    newErrors.phone = '';
                }
                break;
            case 'message':
                if (!value.trim()) {
                    newErrors.message = 'Message is required';
                } else {
                    newErrors.message = '';
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        let hasErrors = false;

        Object.keys(formData).forEach((field) => {
            const value = formData[field];
            validateField(field, value); // Run validation

            if (!value.trim() && field !== "contactType" && field !== "countryCode") { // Check for empty fields
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
                hasErrors = true;
            }

            if (errors[field]) { // Check for validation errors
                newErrors[field] = errors[field];
                hasErrors = true;
            }
        });

        setErrors(newErrors);
        console.log("NewErrors:", newErrors);
        console.log('Current Errors State:', errors);

        if (hasErrors) {
            console.log("Validation Errors Found");
            return;
        }


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
                setAlertMessage('Message sent successfully!');
                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    countryCode: '',
                    phone: '',
                    message: '',
                    contactType: 'Enquiry',
                });
                setErrors({});
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
    };



    return (
        <>
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
                                                        {forms.enquiry}
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
                                                        {forms.feedback}
                                                    </label>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row contact-us-form">
    {/* Name Input - Full Width */}
    <div className="col-12">
        <p>
            <input
                maxLength={400}
                className="cust-form-control cust-text"
                aria-invalid="false"
                placeholder={forms.name}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="name"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
        </p>
    </div>

    {/* Email Input - Full Width on Mobile, Half on Desktop */}
    <div className="col-12 col-md-6">
        <p>
            <input
                maxLength={400}
                className="cust-form-control cust-email"
                aria-required="true"
                aria-invalid="false"
                placeholder={forms.email}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
        </p>
    </div>

    {/* Country Code + Phone - Stacked on Mobile, Inline on Desktop */}
    <div className="col-12 col-md-6 d-flex gap-2">
        <p style={{ flex: "0 0 25%" }}>
            <input
                maxLength={4}
                className="cust-form-control cust-tel"
                aria-required="true"
                aria-invalid="false"
                placeholder="+971"
                value={formData.countryCode}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="countryCode"
            />
        </p>
        <p style={{ flex: "1" }}>
            <input
                maxLength={15}
                className="cust-form-control cust-tel"
                aria-required="true"
                aria-invalid="false"
                placeholder={forms.phone}
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
                name="phone"
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
        </p>
    </div>

    {/* Message Input - Full Width */}
    <div className="col-12">
        <p>
            <textarea
                cols={40}
                rows={10}
                maxLength={2000}
                className="cust-form-control cust-textarea"
                aria-invalid="false"
                placeholder={forms.message}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
        </p>
    </div>

    {/* Submit Button */}
    <div className="col-12 mt-3">
        <input
            className="wpcf7-form-control wpcf7-submit has-spinner third slidebottomleft"
            type="submit"
            value={isSubmitting ? "Submitting..." : forms.sendNow}
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