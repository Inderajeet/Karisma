import { useState, useEffect } from 'react';
import { Modal, Toast, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom_css/bookingForm.css';
import axios from 'axios';

function Booking({ showModal, handleClose }) {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [minDate, setMinDate] = useState('');

    // Local Departments List
    const departments = [
        "Dental",
        "Derma",
        "SkinCare",
        "Gynecology",
        "Nutrition and Slimming",
        "Plastic Surgery",
        "Laser Hair Removal"
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        countryCode: '',
        phone: '',
        preferredDate: '',
        departmentId: '',
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
            case 'departmentId':
                newErrors.departmentId = value ? '' : 'Department is required';
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
            case 'preferredDate':
                newErrors.preferredDate = value ? '' : 'Date is required';
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const submitBooking = async (e) => {
        e.preventDefault();
        console.log('submitBooking function called');

        const newErrors = {};
        let hasErrors = false;

        Object.keys(formData).forEach((field) => {
            const value = formData[field];
            validateField(field, value); // Validate field
            console.log(`Field: ${field}, Value: ${value}, Errors:`, errors[field]);

            if (errors[field]) { // Check for validation errors only
                newErrors[field] = errors[field];
                hasErrors = true;
            }
        });

        setErrors(newErrors);
        console.log("NewErrors:", newErrors);

        if (hasErrors) {
            console.log("Validation Errors Found");
            return; // Stop submission if there are errors
        }

        setFormLoading(true);
        try {
            const response = await axios.post('https://dental.dmaksolutions.com/api/book-appointment', {
                ...formData,
            });

            setSuccess('Appointment booked successfully! Check your email for confirmation.');
            setError('');
            setFormData({
                name: '',
                email: '',
                age: '',
                gender: '',
                countryCode: '',
                phone: '',
                preferredDate: '',
                departmentId: '',
                message: '',
            });
            handleClose();
        } catch (error) {
            console.error('Error booking appointment:', error);
            setError('Unable to book appointment. Please try again later.');
        } finally {
            setFormLoading(false);
        }
    };
    const closeModal = () => {
        setError(''); // Clear errors when modal is closed
        setSuccess(''); // Clear success state
        handleClose(); // Trigger the parent's close function
    };

    return (
        <>
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
                    <div style={{ fontSize: '30px', margin: '8px 0' }}>Book Appointment</div>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        {/* Left Column: Image */}
                        <div className="bookImg" style={{ flex: 1, alignSelf: 'center' }}>
                            <img
                                src="/assets/wp-content/uploads/appointment-booking.jpg"
                                alt='Booking Illustration'
                                className="img-fluid"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        {/* Right Column: Form */}
                        <div style={{ flex: 2, paddingLeft: '20px' }}>
                            {/* Name */}
                            <div className='mb-3'>
                                <input
                                    type="text"
                                    placeholder='Name*'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${errors.name ? 'is-invalid' : ''}`}
                                />
                                {errors.name && <div className='cust-invalid-feedback'>{errors.name}</div>}
                            </div>
                            {/* Email */}
                            <div className="mb-3">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${errors.email ? 'is-invalid' : ''}`}
                                />
                                {errors.email && <div className="cust-invalid-feedback">{errors.email}</div>}
                            </div>

                            {/* Age and Phone no */}
                            <div className="d-flex gap-3" >
                                <div className="mb-1 flex-grow-1" style={{ width: '30%' }}>
                                    <input
                                        maxLength={3}
                                        type="text"
                                        placeholder="Age*"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${errors.age ? 'is-invalid' : ''}`}
                                    />
                                    {errors.age && <div className="cust-invalid-feedback">{errors.age}</div>}
                                </div>

                                <div className="d-flex gap-3" style={{ width: '60%' }}>
                                    <div className="mb-1" style={{ width: '14%' }}>
                                        <input
                                            maxLength={4}
                                            type="text"
                                            placeholder="+971"
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`input ${errors.countryCode ? 'is-invalid' : ''}`}
                                        />
                                        {/* {errors.countryCode && <div className="cust-invalid-feedback">{errors.countryCode}</div>} */}
                                    </div>
                                    <div className="mb-1 flex-grow-1">
                                        <input
                                            type="tel"
                                            maxLength={15}
                                            placeholder="Phone No*"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`input ${errors.phone ? 'is-invalid' : ''}`}
                                        />
                                        {errors.phone && <div className="cust-invalid-feedback">{errors.phone}</div>}
                                    </div>
                                </div>
                            </div>

                            {/* Gender and Date */}
                            <div className="d-flex gap-3">
                                <div className="mb-3 flex-grow-1">
                                    <select
                                        name="gender"
                                        id='gender'
                                        value={formData.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${errors.gender ? 'is-invalid' : ''}`}
                                    >
                                        <option value="" disabled>Gender*</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    {errors.gender && <div className="cust-invalid-feedback">{errors.gender}</div>}
                                </div>

                                <div className="mb-3 flex-grow-1">
                                    <input
                                        type="date"
                                        placeholder="Date*"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`input ${errors.preferredDate ? 'is-invalid' : ''}`}
                                        min={minDate} // Set the minimum date
                                    />
                                    {errors.preferredDate && <div className="cust-invalid-feedback">{errors.preferredDate}</div>}
                                </div>
                            </div>

                            {/* Departments */}
                            <div className="mb-3">
                                <select
                                    name="departmentId"
                                    value={formData.departmentId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`input ${errors.departmentId ? 'is-invalid' : ''}`}
                                >
                                    <option value="" disabled>Select Department*</option>
                                    {departments.map((dept, index) => (
                                        <option className="" key={index} value={dept}>{dept}</option>
                                    ))}
                                </select>
                                {errors.departmentId && <div className="cust-invalid-feedback">{errors.departmentId}</div>}
                            </div>
                            {/* Messgage */}
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    placeholder="Message (Optional)"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="input"
                                    rows="3"
                                />
                            </div>
                            <button className="go-to-offers-btn" onClick={submitBooking} disabled={formLoading}>
                                {formLoading ? (
                                    <Spinner animation="border" size="sm" role="status" className="me-2" />
                                ) : null}
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Booking;
