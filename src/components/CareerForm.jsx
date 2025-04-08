import { useState, useEffect } from 'react';
import { Modal, Toast, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom_css/bookingForm.css';
import { useTranslation } from "react-i18next";
import axios from 'axios';

function CareerForm({ showModal, handleClose }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const { t, i18n } = useTranslation('forms');

    const forms = t('forms', { returnObjects: true });  // Fetch the entire contact object

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+971',
        phone: '',
        resume: null,
    });

    const [errors, setErrors] = useState({});


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
        setFormData({ ...formData, [name]: updatedValue });
        validateField(name, updatedValue);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type and size
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            const maxSize = 5 * 1024 * 1024; // 5MB
            
            if (!allowedTypes.includes(file.type)) {
                setErrors({...errors, resume: 'Please upload a PDF or Word document'});
                return;
            }
            
            if (file.size > maxSize) {
                setErrors({...errors, resume: 'File size should be less than 5MB'});
                return;
            }
            
            setFormData({ ...formData, resume: file });
            setErrors({...errors, resume: ''});
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
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
                } else if (!/^\d{10,15}$/.test(value)) {
                    newErrors.phone = 'Phone number not valid';
                } else {
                    newErrors.phone = '';
                }
                break;
            case 'resume':
                newErrors.resume = value ? '' : 'Resume is required';
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const submitApplication = async (e) => {
        e.preventDefault();
        console.log('submitApplication function called');

        let newErrors = {};

        // Validation Logic
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';

        setErrors(newErrors);
        console.log("Validation Errors:", newErrors);

        if (Object.keys(newErrors).some(key => newErrors[key])) {
            console.log("Validation failed. Form not submitted.");
            return;
        }

        setIsSubmitting(true);
        setAlertMessage("Submitting your application...");

        // Create FormData for file upload
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('countryCode', formData.countryCode);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('resume', formData.resume);

        try {
            const response = await axios.post('https://frontend.karismamc.com/careers/submitApplication.php', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                setAlertMessage('Application submitted successfully!');
                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    countryCode: '+971',
                    phone: '',
                    resume: null,
                });
                setErrors({});
            } else {
                setAlertMessage(response.data.message || 'Error submitting application. Please try again later.');
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            setAlertMessage('Error submitting application. Please try again later.');
            setIsSuccess(false);
        } finally {
            setTimeout(() => {
                setAlertMessage('');
                setIsSubmitting(false);
            }, 3000);
        }
    };

    const closeModal = () => {
        setError('');
        setSuccess('');
        handleClose();
    };

    return (
        <>
            {alertMessage && (
                <div
                    className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}
                    role="alert"
                    style={{
                        zIndex: 10002,
                        position: 'fixed',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        maxWidth: '500px',
                    }}
                >
                    {alertMessage}
                </div>
            )}
            
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 10001,
                }}
            >
                {error && (
                    <Toast onClose={() => setError('')} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto text-danger">Error</strong>
                        </Toast.Header>
                        <Toast.Body>{error}</Toast.Body>
                    </Toast>
                )}
                {success && (
                    <Toast onClose={() => setSuccess('')} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto text-success">Success</strong>
                        </Toast.Header>
                        <Toast.Body>{success}</Toast.Body>
                    </Toast>
                )}
            </div>

            <Modal
                show={showModal}
                onHide={closeModal}
                dialogClassName='my-modal'
                centered
                keyboard={false}
                classname="modal"
            >
                <Modal.Header closeButton>
                    <div style={{ fontSize: '30px', margin: '8px 0' }}>{forms.careerHeader || 'Apply Now'}</div>
                </Modal.Header>
                <Modal.Body>
                    <div className="row contact-us-form">
                        {/* Left Column: Image */}
                        <div className="bookImg" style={{ flex: 1, alignSelf: 'center' }}>
                            <img
                                src="/assets/wp-content/uploads/career-illustration.jpg"
                                alt="Career Illustration"
                                className="img-fluid"
                                style={{ maxWidth: "100%" }}
                            />
                        </div>

                        {/* Right Column: Form */}
                        <div className="col-12 col-md-8">
                            {/* Name Input */}
                            <div className="mb-2">
                                <input
                                    type="text"
                                    placeholder={forms.name || 'Full Name'}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${errors.name ? "is-invalid" : ""}`}
                                />
                                {errors.name && <div className="cust-invalid-feedback">{errors.name}</div>}
                            </div>

                            {/* Email Input */}
                            <div className="mb-2">
                                <input
                                    type="email"
                                    placeholder={forms.email || 'Email'}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${errors.email ? "is-invalid" : ""}`}
                                />
                                {errors.email && <div className="cust-invalid-feedback">{errors.email}</div>}
                            </div>

                            {/* Phone Number */}
                            <div className="row mb-2">
                                <div className="col-12 col-md-4">
                                    <input
                                        maxLength={4}
                                        type="text"
                                        placeholder="+971"
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${errors.countryCode ? "is-invalid" : ""}`}
                                    />
                                </div>
                                <div className="col-12 col-md-8">
                                    <input
                                        type="tel"
                                        maxLength={15}
                                        placeholder={forms.phone || 'Phone Number'}
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${errors.phone ? "is-invalid" : ""}`}
                                    />
                                    {errors.phone && <div className="cust-invalid-feedback">{errors.phone}</div>}
                                </div>
                            </div>

                            {/* Resume Upload */}
                            <div className="mb-3">
                                <label htmlFor="resume-upload" className="d-block mb-1">
                                    {forms.resume || 'Upload Resume (PDF/Doc)'}
                                </label>
                                <input
                                    id="resume-upload"
                                    type="file"
                                    name="resume"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    className={`d-block ${errors.resume ? "is-invalid" : ""}`}
                                />
                                {errors.resume && <div className="cust-invalid-feedback">{errors.resume}</div>}
                                {formData.resume && (
                                    <div className="mt-1 small">
                                        Selected: {formData.resume.name}
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button 
                                className="go-to-offers-btn" 
                                onClick={submitApplication} 
                                disabled={formLoading || isSubmitting}
                            >
                                {formLoading || isSubmitting ? (
                                    <Spinner animation="border" size="sm" role="status" className="me-2" />
                                ) : null}
                                {forms.submitApplication || 'Submit'}
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CareerForm;