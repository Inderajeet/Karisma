import { useState, useEffect } from 'react';
import { Modal, Toast, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom_css/bookingForm.css';
import { useTranslation } from "react-i18next";
import axios from 'axios';

function Booking({ showModal, handleClose }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [minDate, setMinDate] = useState('');
    const { t, i18n } = useTranslation('forms');

    const forms = t('forms', { returnObjects: true });  // Fetch the entire contact object

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        countryCode: '',
        phone: '',
        date: '',
        department: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (showModal) {
            setMinDate(getTodayDate());
        }
    }, [showModal]);

    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;

        if (name === "phone") {
            updatedValue = value.replace(/\D/g, "").slice(0, 15); // Allow only numbers & limit to 15 digits
        }
        else if (name === "countryCode") {
            updatedValue = value.replace(/[^+\d]/g, ""); // Allow only "+" and numbers
        }
        else if (name === "age") {
            updatedValue = value.replace(/[^+\d]/g, ""); // Allow only "+" and numbers
        }
        else if (name === "name") {
            updatedValue = value.replace(/[^A-Za-z.\s]/g, ""); // Allow only alphabets, spaces, and dots
        }
        setFormData({ ...formData, [name]: updatedValue });
        validateField(name, updatedValue);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };
    useEffect(() => {
        // Force re-render on alertMessage change (temporary debugging)
        if (alertMessage) {
            console.log("alertMessage changed:", alertMessage);
        }
    }, [alertMessage]);

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
            case 'age':
                newErrors.age = value && !isNaN(value) && value > 0 ? '' : 'Valid age is required';
                break;
            case 'gender':
                newErrors.gender = value ? '' : 'Gender is required';
                break;
            case 'department':
                newErrors.department = value ? '' : 'Department is required';
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
            case 'date':
                newErrors.date = value ? '' : 'Date is required';
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const submitBooking = async (e) => {
        e.preventDefault();
        console.log('submitBooking function called');

        let newErrors = {};

        // Validation Logic
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        else if (!/^[A-Za-z\s.]+$/.test(formData.name)) newErrors.name = 'Name should only contain alphabets';

        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';

        if (!formData.age.trim()) newErrors.age = 'Age is required';
        else if (isNaN(formData.age) || parseInt(formData.age) <= 0) newErrors.age = 'Valid age is required';

        if (!formData.gender) newErrors.gender = 'Gender is required';

        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Phone number not valid';

        if (!formData.date) newErrors.date = 'Date is required';

        if (!formData.department) newErrors.department = 'Department is required';

        setErrors(newErrors);
        console.log("Validation Errors:", newErrors);

        if (Object.keys(newErrors).length > 0) {
            console.log("Validation failed. Form not submitted.");
            return;
        }

        setIsSubmitting(true);
        setAlertMessage("Submitting your form..."); // Set initial message

        // Force a re-render
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch('https://demo.karismamc.com/contact/bookingForm.php ', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    });

                    if (response.ok) {
                        setAlertMessage('Appointment booked successfully!');
                        setIsSuccess(true);
                        setFormData({
                            name: '',
                            email: '',
                            age: '',
                            gender: '',
                            countryCode: '',
                            phone: '',
                            date: '',
                            department: '',
                            message: '',
                        });
                        setErrors({});
                    } else {
                        setAlertMessage('Error booking appointment. Please try again later.');
                        setIsSuccess(false);
                    }
                } catch (error) {
                    console.error('Error booking appointment:', error);
                    setAlertMessage('Error booking appointment. Please try again later.');
                    setIsSuccess(false);
                }

                setTimeout(() => {
                    setAlertMessage('');
                    setIsSubmitting(false);
                }, 3000);
            })();
        }, 10);
    };



    const closeModal = () => {
        setError(''); // Clear errors when modal is closed
        setSuccess(''); // Clear success state
        handleClose(); // Trigger the parent's close function
    };

    return (
        <>
            {alertMessage && (
                <div
                    className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}
                    role="alert"
                    style={{
                        zIndex: 10002, // Very high z-index
                        position: 'fixed', // Ensure it's fixed in the viewport
                        top: '20px', // Adjust as needed
                        left: '50%', // Center horizontally
                        transform: 'translateX(-50%)', // Center horizontally
                        width: '80%', // Adjust width as needed
                        maxWidth: '500px', // Prevent it from becoming too wide
                    }}
                >
                    {alertMessage}
                </div>
            )}
            {/* Toasts for Error and Success Messages */}
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 10001, // Higher than the modal
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

            {/* Modal */}
            <Modal
                show={showModal}
                onHide={closeModal} // Use the custom closeModal function
                // size="lg"
                dialogClassName='my-modal'
                centered
                // backdrop="static" // Prevent closing modal by clicking outside
                keyboard={false} // Prevent closing modal using the ESC key
                classname="modal"
            >
                <Modal.Header closeButton>
                    <div style={{ fontSize: '30px', margin: '8px 0' }}>{forms.bookHeader}</div>
                </Modal.Header>
                <Modal.Body>
                    <div className="row contact-us-form">
                        {/* Left Column: Image */}
                        <div className="bookImg" style={{ flex: 1, alignSelf: 'center' }}>
                            <img
                                src="/assets/wp-content/uploads/appointment-booking.jpg"
                                alt="Booking Illustration"
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
                                    placeholder={forms.name}
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
                                    placeholder={forms.email}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${errors.email ? "is-invalid" : ""}`}
                                />
                                {errors.email && <div className="cust-invalid-feedback">{errors.email}</div>}
                            </div>

                            {/* Age & Phone Number */}
                            <div className="row">
                                <div className="col-12 col-md-4 mb-2">
                                    <input
                                        maxLength={3}
                                        type="text"
                                        placeholder={forms.age}
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${errors.age ? "is-invalid" : ""}`}
                                    />
                                    {errors.age && <div className="cust-invalid-feedback">{errors.age}</div>}
                                </div>

                                <div className="col-12 col-md-8 d-flex gap-2">
                                    <div style={{ flex: "0 0 20%" }}>
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
                                    <div style={{ flex: "1" }}>
                                        <input
                                            type="tel"
                                            maxLength={15}
                                            placeholder={forms.phone}
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`input ${errors.phone ? "is-invalid" : ""}`}
                                        />
                                        {errors.phone && <div className="cust-invalid-feedback">{errors.phone}</div>}
                                    </div>
                                </div>
                            </div>

                            {/* Gender & Date */}
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <select
                                        name="gender"
                                        id="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${errors.gender ? "is-invalid" : ""}`}
                                    >
                                        <option value="" disabled>{forms.selectGender}</option>
                                        <option value="male">{forms.genderMale}</option>
                                        <option value="female">{forms.genderFemale}</option>
                                    </select>
                                    {errors.gender && <div className="cust-invalid-feedback">{errors.gender}</div>}
                                </div>

                                <div className="col-12 col-md-6">
                                    <input
                                        type="date"
                                        placeholder="Date*"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${errors.date ? "is-invalid" : ""}`}
                                        min={minDate}
                                    />
                                    {errors.date && <div className="cust-invalid-feedback">{errors.date}</div>}
                                </div>
                            </div>

                            {/* Departments */}
                            <div className="mb-2">
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${errors.department ? "is-invalid" : ""}`}
                                >
                                    <option value="" disabled>{forms.selectDepartment}</option>
                                    {forms.departments.map((dept, index) => (
                                        <option key={index} value={dept}>{dept}</option>
                                    ))}
                                </select>
                                {errors.department && <div className="cust-invalid-feedback">{errors.department}</div>}
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    placeholder={forms.messageOpt}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="input"
                                    rows="3"
                                />
                            </div>

                            {/* Submit Button */}
                            <button className="go-to-offers-btn" onClick={submitBooking} disabled={formLoading}>
                                {formLoading ? (
                                    <Spinner animation="border" size="sm" role="status" className="me-2" />
                                ) : null}
                                {forms.sendNow}
                            </button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Booking;
