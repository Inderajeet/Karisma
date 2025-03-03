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
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };


    const validateField = (name, value) => {
        let newErrors = { ...errors };

        switch (name) {
            case 'name':
                newErrors.name = value.trim() ? '' : 'Name is required';
                break;
            case 'email':
                newErrors.email =
                    value.trim() && /^\S+@\S+\.\S+$/.test(value)
                        ? ''
                        : 'Valid email is required';
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
                newErrors.phone = value && /^\d{10}$/.test(value) ? '' : 'Valid phone number is required';
                // newErrors.phone = value ? '' : 'Phone number is required';
                break;
            case 'preferredDate':
                newErrors.preferredDate = value ? '' : 'Date is required';
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.age || isNaN(formData.age) || formData.age <= 0) newErrors.age = 'Valid age is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.departmentId) newErrors.departmentId = 'Deparment is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required';
        if (!formData.preferredDate) newErrors.preferredDate = 'Date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const submitBooking = async (e) => {
        if (!validate()) return;
        e.preventDefault();
        setFormLoading(true); // Start loader for submission
        try {
            const response = await axios.post('https://dental.dmaksolutions.com/api/book-appointment', {
                // const response = await axios.post('http://localhost:5000/api/book-appointment', {
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
            setFormLoading(false); // End loader for submission
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

                                <div className="d-flex gap-3" style={{ width: '55%' }}>
                                    <div className="mb-1" style={{ width: '14%' }}>
                                        <input
                                            type="text"
                                            placeholder="+971"
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`input ${errors.countryCode ? 'is-invalid' : ''}`}
                                        />
                                        {errors.countryCode && <div className="cust-invalid-feedback">{errors.countryCode}</div>}
                                    </div>
                                    <div className="mb-1 flex-grow-1">
                                        <input
                                            type="tel"
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
