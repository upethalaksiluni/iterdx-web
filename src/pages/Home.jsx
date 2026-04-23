import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HomeServicesCarousel from '../components/HomeServicesCarousel.jsx'
import HomeAboutPreview from '../components/HomeAboutPreview.jsx'
import ContactPreview from '../components/ContactPreview.jsx'
import LaunchingSoon from '../components/LaunchingSoon.jsx'
import PageSeo from '../components/PageSeo.jsx'

const Home = () => {
    return (
        <>
            <PageSeo
                title="IterDX Global | AI Transformation, Automation, Security & Digital Systems"
                description="IterDX Global helps businesses streamline operations, automate workflows, strengthen security, and build scalable digital systems for the AI era."
                path="/"
            />

            <section id="home" className="hero-section">
                <div className="hero-section__inner">
                    <motion.p
                        className="hero-kicker"
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2 }}
                    >
                        AI TRANSFORMATION. AUTOMATION. SECURITY. DIGITAL SYSTEMS.
                    </motion.p>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        <span className="hero-title__line">Stabilize operations.</span>
                        <span className="hero-title__line">Scale with smarter systems.</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtext"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        IterDX Global helps organizations replace fragmented workflows and manual bottlenecks with automation, visibility, security, and execution-ready digital infrastructure.
                    </motion.p>

                    <motion.div
                        className="launch-actions"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link to="/contact" className="launch-button launch-button--primary">
                            Book a Strategy Call
                            <span className="launch-button__arrow">→</span>
                        </Link>

                        <Link to="/services" className="launch-button launch-button--secondary">
                            Explore Services
                            <span className="launch-button__icon">→</span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <HomeAboutPreview />
            <HomeServicesCarousel />
            <LaunchingSoon />
            <ContactPreview />
        </>
    )
}

export default Home