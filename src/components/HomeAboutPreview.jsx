import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const textReveal = {
    initial: { opacity: 0, x: -60, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const visualReveal = {
    initial: { opacity: 0, x: 60, scale: 0.92, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
}

const aboutPreviewImage =
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'

function HomeAboutPreview() {
    return (
        <section className="home-about-preview">
            <div className="home-about-preview__shell">
                <motion.div className="home-about-preview__content" {...textReveal}>
                    <div className="home-about-preview__eyebrow">
                        <span className="home-about-preview__eyebrow-index">01</span>
                        <span className="home-about-preview__eyebrow-divider">//</span>
                        <span className="home-about-preview__eyebrow-label">WHO WE ARE</span>
                    </div>

                    <h2 className="home-about-preview__title">
                        The Bridge to
                        <br />
                        Stable AI-Led Operations
                    </h2>

                    <p className="home-about-preview__text">
                        IterDX is a strategic consultancy and product engineering house. We serve as a professional bridge to the AI era, guiding organizations and individuals from legacy systems to stabilized, high-performance digital operations.
                    </p>

                    <p className="home-about-preview__text">
                        We combine advisory thinking with execution-ready delivery across automation, product systems, reporting, and digital infrastructure so transformation becomes practical, measurable, and sustainable.
                    </p>

                    <Link to="/about" className="home-about-preview__cta">
                        Read more
                        <span aria-hidden="true">→</span>
                    </Link>
                </motion.div>

                <motion.div className="home-about-preview__visual" {...visualReveal}>
                    <div className="home-about-preview__image-wrap">
                        <span className="home-about-preview__image-orbit home-about-preview__image-orbit--one" />
                        <span className="home-about-preview__image-orbit home-about-preview__image-orbit--two" />
                        <div className="home-about-preview__image-frame">
                            <img
                                src={aboutPreviewImage}
                                alt="IterDX team collaboration"
                                className="home-about-preview__image"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HomeAboutPreview