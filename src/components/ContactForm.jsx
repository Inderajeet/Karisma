import { useState } from 'react';
import '.././custom_css/contactForm.css';

export default function ContactForm() {
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
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        validateField(name, value);
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
                } else if (!/^\d+$/.test(value)) {
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
    
        // Validate all fields and collect errors
        const newErrors = {};
        let hasErrors = false;
    
        // Validate each field and collect errors
        Object.keys(formData).forEach((field) => {
            const value = formData[field];
            validateField(field, value); // Validate field
            if (!value.trim() && field !== "contactType" && field !== "countryCode") { // Ensure empty fields show error
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
                hasErrors = true;
            }
        });
    
        setErrors(newErrors); // Set all errors at once
    
        if (hasErrors) {
            return; // Stop submission if there are errors
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
                    countryCode: '+1',
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
                                                        onBlur={handleBlur}
                                                        type="text"
                                                        name="name"
                                                    />
                                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                                </p>
                                            </div>
                                            <div className="col-md-6 pr-2" style={{width:"45%"}}>
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
                                                        onBlur={handleBlur}
                                                        type="email"
                                                        name="email"
                                                    />
                                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                                </p>
                                            </div>
                                            <div className="col-md-6 pl-3 d-flex gap-3" style={{display: 'flex', width:"55%"}}>
                                                <p style={{width: '21%'}}>
                                                    <input
                                                        size={40}
                                                        maxLength={400}
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
                                                <p style={{width: '79%'}}>
                                                    <input
                                                        size={40}
                                                        maxLength={400}
                                                        className="cust-form-control cust-tel"
                                                        aria-required="true"
                                                        aria-invalid="false"
                                                        placeholder="Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
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
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                                </p>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <input
                                                    className="wpcf7-form-control wpcf7-submit has-spinner third slidebottomleft"
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