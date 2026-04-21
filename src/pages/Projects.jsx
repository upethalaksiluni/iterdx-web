import React from 'react'
import { motion } from 'framer-motion'
import projectBg from '../assets/projects-bg.jpeg'

const fadeLeft = {
    initial: { opacity: 0, x: -70, filter: 'blur(12px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const fadeRight = {
    initial: { opacity: 0, x: 70, scale: 0.95, filter: 'blur(12px)' },
    animate: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
}

const cardReveal = {
    initial: { opacity: 0, y: 28, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.25 }
}

const Projects = () => {
    return (
        <section className="projects-page">
            <div className="projects-hero">
                <div
                    className="projects-hero__bg"
                    style={{ backgroundImage: `url(${projectBg})` }}
                />
                <div className="projects-hero__overlay" />

                <div className="projects-hero__shell">
                    <motion.div
                        className="projects-hero__content"
                        initial={fadeLeft.initial}
                        animate={fadeLeft.animate}
                        transition={fadeLeft.transition}
                    >
                        <div className="projects-hero__brand">Featured Project</div>

                        <h1 className="projects-hero__title">
                            Disaster survivors
                            <br />
                            deserve a clear path
                            <br />
                            home.
                        </h1>

                        <p className="projects-hero__description">
                            Bright Harbor combines experienced disaster recovery advisors
                            with powerful technology, so survivors find more money, move
                            faster, and rebuild with confidence.
                        </p>

                        <a
                            href="#"
                            className="projects-hero__cta"
                            onClick={(event) => event.preventDefault()}
                        >
                            Book a Consultation
                        </a>
                    </motion.div>

                    <motion.div
                        className="projects-hero__device-wrap"
                        initial={fadeRight.initial}
                        animate={fadeRight.animate}
                        transition={fadeRight.transition}
                    >
                        <div className="projects-phone">
                            <div className="projects-phone__frame">
                                <div className="projects-phone__notch" />
                                <div className="projects-phone__screen">
                                    <div
                                        className="projects-phone__screen-bg"
                                        style={{ backgroundImage: `url(${projectBg})` }}
                                    />
                                    <div className="projects-phone__screen-overlay" />

                                    <div className="projects-phone__topbar">
                                        <div className="projects-phone__time">9:41</div>
                                        <div className="projects-phone__status">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>

                                    <motion.div
                                        className="projects-phone__card"
                                        initial={cardReveal.initial}
                                        animate={cardReveal.animate}
                                        transition={cardReveal.transition}
                                    >
                                        <div className="projects-phone__logo">BrightHarbor</div>

                                        <h2 className="projects-phone__title">
                                            Your path home
                                            <br />
                                            starts here.
                                        </h2>

                                        <p className="projects-phone__text">
                                            Bright Harbor empowers your recovery with expert guidance,
                                            situational clarity, comprehensive assessments of your
                                            funding opportunities and personalized support on your
                                            rebuild journey.
                                        </p>

                                        <div className="projects-phone__section-label">
                                            <span />
                                            <strong>How We Help</strong>
                                            <span />
                                        </div>

                                        <div className="projects-phone__feature">
                                            <div className="projects-phone__feature-icon">✧</div>
                                            <div>
                                                <h3>Understand your options</h3>
                                                <p>
                                                    Clear guidance on insurance, rebuilding,
                                                    and recovery decisions.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="projects-phone__feature">
                                            <div className="projects-phone__feature-icon">✧</div>
                                            <div>
                                                <h3>Move recovery forward</h3>
                                                <p>
                                                    Connect with trusted vendors and
                                                    create a path forward.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Projects