import React, { useState } from 'react'
import './Contact.css'
import { FiArrowUpRight } from "react-icons/fi"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            access_key: import.meta.env.VITE_WEB3FORMS_KEY,

            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,

            from_name: "D Square Construction Website",
        }

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(data),
                }
            )

            const result = await response.json()

            if (result.success) {

                alert(
                    "Thank you! Your enquiry has been sent successfully."
                )

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                })

            } else {

                alert(
                    "Something went wrong. Please try again."
                )

            }

        } catch (error) {

            console.error("Web3Forms Error:", error)

            alert(
                "Unable to send your message. Please try again."
            )
        }
    }

    return (

        <div className="contact-page">

            {/* =========================================
                CONTACT HERO
            ========================================= */}

            <section className="contact-hero">

                <div className="contact-hero-overlay">

                    <p>CONTACT US</p>

                    <h1>
                        Let's Build <span>Together</span>
                    </h1>

                    <div className="hero-line"></div>

                    <p className="hero-description">
                        Have a construction project in mind? Let’s turn your
                        vision into a space built with quality, care, and
                        attention to every detail. Get in touch with our team
                        today and let’s discuss your project.
                    </p>

                </div>

            </section>


            {/* =========================================
                CONTACT AREA
            ========================================= */}

            <section className="contact-area">

                {/* =====================================
                    CONTACT DETAILS
                ===================================== */}

                <div className="contact-details">

                    <p className="section-label">
                        GET IN TOUCH
                    </p>

                    <h2>
                        Let's talk about your <span>project.</span>
                    </h2>

                    <p className="details-text">
                        From planning to completion, D Square Construction
                        is with you at every step. We focus on thoughtful
                        planning, quality materials, skilled workmanship,
                        and clear communication to deliver spaces that
                        are built to last.
                    </p>


                    {/* PHONE */}

                    <div className="detail-item">

                        <div className="detail-icon">
                            ☎️
                        </div>

                        <div>
                            <h4>Phone Number</h4>
                            <p>8017000065</p>
                        </div>

                    </div>


                    {/* EMAIL */}

                    <div className="detail-item">

                        <div className="detail-icon">
                            📩
                        </div>

                        <div>
                            <h4>Email Address</h4>
                            <p>dalneeraj23@gmail.com</p>
                        </div>

                    </div>


                    {/* LOCATION */}

                    <div className="detail-item">

                        <div className="detail-icon">
                            📍
                        </div>

                        <div>
                            <h4>Location</h4>
                            <p>H no - 2784 Sector -3 Rohtak 124001</p>
                        </div>

                    </div>

                </div>


                {/* =====================================
                    CONTACT FORM
                ===================================== */}

                <div className="contact-form">

                    <p className="form-label">
                        START A PROJECT
                    </p>

                    <h3>
                        Tell us what you need
                    </h3>


                    <form onSubmit={handleSubmit}>

                        {/* NAME + EMAIL */}

                        <div className="form-row">

                            <div className="form-group">

                                <label htmlFor="name">
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />

                            </div>

                        </div>


                        {/* PHONE + SUBJECT */}

                        <div className="form-row">

                            <div className="form-group">

                                <label htmlFor="phone">
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label htmlFor="subject">
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Subject"
                                />

                            </div>

                        </div>


                        {/* MESSAGE */}

                        <div className="form-group">

                            <label htmlFor="message">
                                Your Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                rows="6"
                                required
                            ></textarea>

                        </div>


                        {/* SUBMIT BUTTON */}

                        <button type="submit">

                            Send Enquiry

                            <span>
                                <FiArrowUpRight />
                            </span>

                        </button>

                    </form>

                </div>

            </section>


            {/* =========================================
                CTA SECTION
            ========================================= */}

            <section className="contact-cta">

                <div className="cta-content">

                    <p className="cta-label">
                        BUILD WITH CONFIDENCE
                    </p>

                    <h2>
                        Your project deserves
                        <span> the right team.</span>
                    </h2>

                    <p className="cta-description">
                        Let's create something strong, functional
                        and built to last for years.
                    </p>

                    <button type="button">
                        Start a Project
                        <FiArrowUpRight />
                    </button>

                </div>

            </section>

        </div>
    )
}

export default Contact