import React from 'react'
import { motion } from 'framer-motion'
import projectBg from '../assets/projects-bg.jpeg'
import PageSeo from '../components/PageSeo.jsx'

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
            <PageSeo
                title="Projects | IterDX Global"
                description="See how IterDX Global turns strategy into real-world digital products, launch systems, and customer-facing experiences."
                path="/projects"
            />

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
                            Digital products should
                            <br />
                            move people forward,
                            <br />
                            not slow them down.
                        </h1>

                        <p className="projects-hero__description">
                            IterDX Global builds product experiences that turn strategy into execution. From platform structure to interface delivery, our projects are designed to create clarity, trust, and measurable action.
                        </p>

                        <a
                            href="/contact"
                            className="projects-hero__cta"
                        >
                            Start a Project
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
                                            Recovery support,
                                            <br />
                                            simplified.
                                        </h2>

                                        <p className="projects-phone__text">
                                            A clear example of how thoughtful product design can turn a stressful, fragmented process into a guided digital journey with real-world utility.
                                        </p>

                                        <div className="projects-phone__section-label">
                                            <span />
                                            <strong>How It Helps</strong>
                                            <span />
                                        </div>

                                        <div className="projects-phone__feature">
                                            <div className="projects-phone__feature-icon">✧</div>
                                            <div>
                                                <h3>Clearer next steps</h3>
                                                <p>
                                                    Users understand their options faster and move through decisions with less friction.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="projects-phone__feature">
                                            <div className="projects-phone__feature-icon">✧</div>
                                            <div>
                                                <h3>Stronger execution flow</h3>
                                                <p>
                                                    Structured experiences improve trust, action rates, and operational consistency.
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