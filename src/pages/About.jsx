import React from 'react'
import { motion } from 'framer-motion'
import aboutVisionImage from '../assets/about-vision.avif'
import TeamCarousel from '../components/TeamCarousel'
import PageSeo from '../components/PageSeo.jsx'

const heroReveal = {
    initial: { opacity: 0, y: 28, filter: 'blur(12px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const leftReveal = {
    initial: { opacity: 0, x: -70, y: 12, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const rightReveal = {
    initial: { opacity: 0, x: 70, y: 12, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const imageLeft = {
    initial: { opacity: 0, x: -90, scale: 0.95, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
}

const imageRight = {
    initial: { opacity: 0, x: 90, scale: 0.95, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
}

const aboutMiddleImage =
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'

const aboutBottomImage =
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'

const About = () => {
    return (
        <section className="about-page">
            <PageSeo
                title="About IterDX Global | Strategy, Systems & AI-Era Execution"
                description="Learn how IterDX Global helps businesses navigate digital transformation through automation, security, product engineering, and implementation-ready systems."
                path="/about"
            />

            <div className="about-hero">
                <div className="about-hero__shell">
                    <motion.div className="about-hero__inner" {...heroReveal}>
                        <div className="about-hero__line" />
                        <div className="about-hero__content">
                            <div className="about-hero__copy">
                                <span className="about-hero__eyebrow">IDENTITY</span>
                                <h1 className="about-hero__title">
                                    IterDX Global is a strategic bridge to the AI era.
                                    We help businesses turn legacy workflows into
                                    stable, scalable, high-performance digital operations.
                                </h1>
                            </div>

                            <div className="about-hero__visual" aria-hidden="true">
                                <img src={aboutVisionImage} alt="" className="about-hero__visual-image" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="about-block middle">
                <div className="about-shell">
                    <div className="about-grid about-grid--content-image about-grid--top-aligned">
                        <motion.div className="about-copy wide" {...leftReveal}>
                            <h2 className="about-heading">Why businesses work with IterDX</h2>
                            <p className="about-paragraph">
                                Many organizations know change is necessary, but they do not need abstract advice. They need a clear path, a stable system, and a partner who can move from strategy into implementation.
                            </p>
                            <p className="about-paragraph">
                                IterDX simplifies digital transformation into structured, practical action across automation, security, reporting, product systems, and operational design.
                            </p>
                        </motion.div>

                        <motion.div className="about-image-box middle about-image-box--top" {...imageRight}>
                            <img src={aboutMiddleImage} alt="IterDX consulting session" className="about-image" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="about-block bottom">
                <div className="about-shell">
                    <div className="about-grid about-grid--image-content about-grid--top-aligned">
                        <motion.div className="about-image-box bottom about-image-box--top" {...imageLeft}>
                            <img src={aboutBottomImage} alt="IterDX engineering collaboration" className="about-image" />
                        </motion.div>

                        <motion.div className="about-copy" {...rightReveal}>
                            <h2 className="about-heading">From strategy to implementation</h2>
                            <p className="about-paragraph">
                                We combine consultancy thinking with hands-on product execution. That means we do not stop at recommendations. We design, refine, and implement the systems that improve how work gets done.
                            </p>
                            <p className="about-paragraph">
                                From front-end experience to digital infrastructure, our work is built around resilience, operational clarity, and sustainable growth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <TeamCarousel />
        </section>
    )
}

export default About