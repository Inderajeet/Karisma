import React, { useState } from "react";
import "../custom_css/checkoutForm.css";

export default function CheckoutForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        phone: "",
        date: "",
        address: "",
        city: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (value.trim()) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validateField = (name) => {
        if (!formData[name]?.trim()) {
            setErrors((prev) => ({
                ...prev,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field].trim()) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit the form
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div className="checkout-form">
            <div className="checkout-title">Checkout</div>
            <form onSubmit={handleSubmit} className="custom-form">
                {/* Name */}
                <div className="cust-form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={() => validateField("name")}
                        className={`input ${errors.name ? "error-input" : ""}`}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="cust-form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => validateField("email")}
                        className={`input ${errors.email ? "error-input" : ""}`}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="cust-form-row">
                    {/* Age */}
                    <div className="cust-form-group">
                        <input
                            type="text"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleInputChange}
                            onBlur={() => validateField("age")}
                            className={`input ${errors.age ? "error-input" : ""}`}
                        />
                        {errors.age && <p className="error-text">{errors.age}</p>}
                    </div>
                    {/* Gender */}
                    <div className="cust-form-group">
                        <input
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            onBlur={() => validateField("gender")}
                            className={`input ${errors.gender ? "error-input" : ""}`}
                        />
                        {errors.gender && <p className="error-text">{errors.gender}</p>}
                    </div>
                </div>

                <div className="cust-form-row">
                    {/* Phone no */}
                    <div className="cust-form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onBlur={() => validateField("phone")}
                            className={`input ${errors.phone ? "error-input" : ""}`}
                        />
                        {errors.phone && <p className="error-text">{errors.phone}</p>}
                    </div>
                    {/* Date */}
                    <div className="cust-form-group">
                        <input
                            type="date"
                            name="date"
                            placeholder="Date"
                            value={formData.date}
                            onChange={handleInputChange}
                            onBlur={() => validateField("date")}
                            className={`input ${errors.date ? "error-input" : ""}`}
                        />
                        {errors.date && <p className="error-text">{errors.date}</p>}
                    </div>
                </div>

                {/* Address */}
                <div className="cust-form-group">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        onBlur={() => validateField("address")}
                        className={`input ${errors.address ? "error-input" : ""}`}
                    />
                    {errors.address && <p className="error-text">{errors.address}</p>}
                </div>

                {/* City */}
                <div className="cust-form-group">
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        onBlur={() => validateField("city")}
                        className={`input ${errors.city ? "error-input" : ""}`}
                    />
                    {errors.city && <p className="error-text">{errors.city}</p>}
                </div>

                {/* <button type="submit" className="submit-btn">
          Complete Purchase
        </button> */}
            </form>
        </div>
    );
}
