import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import PageSeo from '../components/PageSeo.jsx'

const contactVisual =
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80'

const fadeUp = {
    initial: { opacity: 0, y: 40, filter: 'blur(12px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const fadeLeft = {
    initial: { opacity: 0, x: -50, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const fadeRight = {
    initial: { opacity: 0, x: 50, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((previous) => ({
            ...previous,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const subject = encodeURIComponent(`New inquiry from ${formData.name || 'Website visitor'}`)
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )

        window.location.href = `mailto:hello@iterdxglobal.com?subject=${subject}&body=${body}`
    }

    return (
        <section className="contact-page">
            <PageSeo
                title="Contact IterDX Global | Book a Strategy Call"
                description="Get in touch with IterDX Global to discuss automation, digital transformation, cybersecurity, business intelligence, or product engineering."
                path="/contact"
            />

            <div className="contact-shell">
                <div className="contact-hero">
                    <motion.div className="contact-hero__content" {...fadeLeft}>
                        <div className="contact-hero__brand">
                            <img src={logo} alt="IterDX Global" className="contact-hero__brand-logo" />
                            <div>
                                <h2 className="contact-hero__brand-title">IterDX Global</h2>
                                <p className="contact-hero__brand-subtitle">Stabilize. Secure. Scale.</p>
                            </div>
                        </div>

                        <h1 className="contact-hero__title">Book the conversation that moves your business forward.</h1>

                        <span className="contact-hero__divider" />

                        <p className="contact-hero__description">
                            Whether you need workflow automation, stronger security, better reporting, or a clearer digital roadmap, we can help you define the next practical step.
                        </p>

                        <button
                            type="button"
                            className="contact-hero__cta"
                            onClick={() => {
                                const formSection = document.getElementById('contact-form-section')
                                if (formSection) {
                                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }
                            }}
                        >
                            START THE CONVERSATION
                        </button>

                        <div className="contact-hero__meta">
                            <a href="https://iterdxglobal.com" className="contact-hero__meta-item" target="_blank" rel="noopener noreferrer">
                                <span className="contact-hero__meta-icon">◉</span>
                                <span>iterdxglobal.com</span>
                            </a>
                            <a href="tel:+94700000000" className="contact-hero__meta-item">
                                <span className="contact-hero__meta-icon">◔</span>
                                <span>+94 70 000 0000</span>
                            </a>
                            <div className="contact-hero__meta-item">
                                <span className="contact-hero__meta-icon">⌖</span>
                                <span>Colombo, Sri Lanka</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="contact-hero__visual" {...fadeRight}>
                        <div className="contact-hero__visual-mask">
                            <img src={contactVisual} alt="IterDX Contact" className="contact-hero__image" />
                        </div>
                    </motion.div>
                </div>

                <div id="contact-form-section" className="contact-section">
                    <motion.div className="contact-section__info" {...fadeUp}>
                        <div className="contact-section__info-block">
                            <div className="contact-section__icon">☎</div>
                            <div>
                                <h3 className="contact-section__info-title">Call Us</h3>
                                <p className="contact-section__info-text">+94 70 000 0000</p>
                                <p className="contact-section__info-text">+94 11 000 0000</p>
                            </div>
                        </div>

                        <div className="contact-section__info-block">
                            <div className="contact-section__icon">⌖</div>
                            <div>
                                <h3 className="contact-section__info-title">Location</h3>
                                <p className="contact-section__info-text">IterDX Global, Colombo, Sri Lanka</p>
                            </div>
                        </div>

                        <div className="contact-section__info-block">
                            <div className="contact-section__icon">•</div>
                            <div>
                                <h3 className="contact-section__info-title">Business Hours</h3>
                                <p className="contact-section__info-text">Monday to Friday, 9.00 am to 6.00 pm</p>
                                <p className="contact-section__info-text">Saturday and Sunday closed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="contact-section__form-wrap" {...fadeUp}>
                        <h2 className="contact-section__form-title">Request a Strategy Call</h2>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-form__field">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact-form__field">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact-form__field">
                                <textarea
                                    rows="5"
                                    name="message"
                                    placeholder="Tell us what you need help with"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="contact-form__submit">
                                SEND INQUIRY
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact