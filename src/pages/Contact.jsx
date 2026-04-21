import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

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
    return (
        <section className="contact-page">
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

                        <h1 className="contact-hero__title">Transform Your Future in the AI Era.</h1>

                        <span className="contact-hero__divider" />

                        <p className="contact-hero__description">
                            Build stronger digital foundations with a team that understands execution, design quality, and scalable front-end delivery. From consultation to implementation, we help you move with clarity.
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
                            JOIN THE SHIFT
                        </button>

                        <div className="contact-hero__meta">
                            <div className="contact-hero__meta-item">
                                <span className="contact-hero__meta-icon">â—‰</span>
                                <span>iterdxglobal.com</span>
                            </div>
                            <div className="contact-hero__meta-item">
                                <span className="contact-hero__meta-icon">â—”</span>
                                <span>+94 70 000 0000</span>
                            </div>
                            <div className="contact-hero__meta-item">
                                <span className="contact-hero__meta-icon">â—Ž</span>
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
                            <div className="contact-section__icon">â˜Ž</div>
                            <div>
                                <h3 className="contact-section__info-title">Call Us</h3>
                                <p className="contact-section__info-text">+94 70 000 0000, +94 11 000 0000</p>
                            </div>
                        </div>

                        <div className="contact-section__info-block">
                            <div className="contact-section__icon">âŒ–</div>
                            <div>
                                <h3 className="contact-section__info-title">Location</h3>
                                <p className="contact-section__info-text">IterDX Global, Colombo, Sri Lanka</p>
                            </div>
                        </div>

                        <div className="contact-section__info-block">
                            <div className="contact-section__icon">â—·</div>
                            <div>
                                <h3 className="contact-section__info-title">Business Hours</h3>
                                <p className="contact-section__info-text">Mon - Fri 9.00 am - 6.00 pm</p>
                                <p className="contact-section__info-text">Sat - Sun Closed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="contact-section__form-wrap" {...fadeUp}>
                        <h2 className="contact-section__form-title">Contact Us</h2>

                        <form className="contact-form">
                            <div className="contact-form__field">
                                <input type="text" placeholder="Enter your Name" />
                            </div>

                            <div className="contact-form__field">
                                <input type="email" placeholder="Enter a valid email address" />
                            </div>

                            <div className="contact-form__field">
                                <textarea rows="5" placeholder="Enter your message" />
                            </div>

                            <button type="submit" className="contact-form__submit">
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact