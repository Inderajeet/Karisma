import { useState, useEffect, useRef } from 'react';
import { Modal, Toast, Spinner } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom_css/bookingForm.css';

function Booking({ showModal, handleClose }) {
    const [departments, setDepartments] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formLoading, setFormLoading] = useState(false); // Only for form submission
    const formRef = useRef(null);

    useEffect(() => {
        if (showModal) {
            fetchDepartments(); // Fetch departments only when modal is shown
        }
    }, [showModal]);

    const fetchDepartments = async () => {
        try {
            const response = await fetch('https://dental.dmaksolutions.com/api/departments');
            // const response = await fetch('http://localhost:5000/api/departments');
            if (!response.ok) {
                throw new Error(`Failed to fetch departments. Status: ${response.status}`);
            } 
            const data = await response.json();
            setDepartments(data);
            setError('');
        } catch (error) {
            console.error('Error fetching departments:', error);
            setError('Unable to load departments. Please try again later.');
        }
    };

    const submitBooking = async (e) => {
        e.preventDefault();
        setFormLoading(true); // Start loader for submission
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://dental.dmaksolutions.com/api/book-appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Failed to book appointment. Status: ${response.status}`);
            }

            setSuccess('Appointment booked successfully! Check your email for confirmation.');
            setError('');
            handleClose(); // Close modal on success
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
                    zIndex: 1060, // Higher than the modal
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
                size="lg"
                centered
                backdrop="static" // Prevent closing modal by clicking outside
                keyboard={false} // Prevent closing modal using the ESC key
                classname="modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Book an Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        {/* Left Column: Image */}
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img
                                src="./assets/wp-content/uploads/appointment-booking.jpg"
                                alt="Booking Illustration"
                                className="img-fluid"
                            />
                        </div>
                        {/* Right Column: Form */}
                        <div className="col-md-6">
                            <form onSubmit={submitBooking} ref={formRef}>
                                <input name="name" placeholder="Name" className="form-control mt-2" required />
                                <input name="age" placeholder="Age" className="form-control mt-2" required />
                                <input name="email" placeholder="Email" className="form-control mt-2" required />
                                <input name="phone" placeholder="Phone" className="form-control mt-2" required />
                                <input name="preferredDate" placeholder="Select Date" min={new Date().toISOString().split("T")[0]} type="date" className="form-control mt-2" required />
                                <select name="departmentId" defaultValue="" className="form-control mt-2" >
                                    <option value="" disabled>
                                        Select Department
                                    </option>
                                    {departments.map((dept) => (
                                        <option key={dept.id} value={dept.id}>
                                            {dept.name}
                                        </option>
                                    ))}
                                </select>
                                <select name="gender" defaultValue="" className="form-control mt-2" required>
                                    <option value="" disabled>
                                        Select Gender
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <textarea name="message" className="form-control mt-2" placeholder="Message (optional)" />
                                <button type="submit" className="custStyle   mt-3 " disabled={formLoading}>
                                    {formLoading ? (
                                        <Spinner animation="border" size="sm" role="status" className="me-2" />
                                    ) : null}
                                    Book Appointment
                                </button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Booking;
