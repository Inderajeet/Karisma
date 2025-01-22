import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../custom_css/serviceForm.css';

export default function ServiceForm({ offer, show, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        phone: '',
        date: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value); // Validate field as the value changes
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
            case 'phone':
                newErrors.phone = value && /^\d{10}$/.test(value) ? '' : 'Valid phone number is required';
                break;
            case 'date':
                newErrors.date = value ? '' : 'Date is required';
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
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required';
        if (!formData.date) newErrors.date = 'Date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        try {
            // const response = await axios.post('http://localhost/api/booking-form', {
            const response = await axios.post('', {
                ...formData,
                offerName: offer.name,
            });
            console.log('Response:', response.data);
            alert('Booking successful!');
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting booking form');
        }
    };

    return (
        <div className="serviceDisplay">
            {/* Image */}
            <div style={{ flex: 1, alignSelf:'center' }}>
                <img
                    src={offer.image} 
                    alt={offer.name}
                    className="img-fluid"
                    style={{ maxWidth: '100%' }}
                />
            </div>

            {/* Form */}
            <div style={{ flex: 2, paddingLeft: '20px' }}>
                {/* Name */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Name*"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <div className="cust-invalid-feedback">{errors.name}</div>}
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
                <div className="d-flex gap-3">
                    <div className="mb-1 flex-grow-1">
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
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`input ${errors.date ? 'is-invalid' : ''}`}
                        />
                        {errors.date && <div className="cust-invalid-feedback">{errors.date}</div>}
                    </div>
                </div>

                {/* Message */}
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

                <button className="go-to-offers-btn" onClick={handleSubmit}>
                    Book Now
                </button>
            </div>
        </div>
    );
}
