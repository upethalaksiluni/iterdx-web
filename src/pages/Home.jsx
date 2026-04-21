import React from 'react'
import { motion } from 'framer-motion'
import HomeServicesCarousel from '../components/HomeServicesCarousel.jsx'
import HomeAboutPreview from '../components/HomeAboutPreview.jsx'
import ContactPreview from '../components/ContactPreview.jsx'
import LaunchingSoon from '../components/LaunchingSoon.jsx'

const Home = () => {
    return (
        <>
            <section id="home" className="hero-section">
                <div className="hero-section__inner">
                    <motion.p
                        className="hero-kicker"
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2 }}
                    >
                        STRATEGIC CONSULTANCY. PRODUCT ENGINEERING.
                    </motion.p>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        <span className="hero-title__line">The Professional Bridge to</span>
                        <span className="hero-title__line">the AI Era</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtext"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        IterDX is a strategic consultancy and product engineering house guiding organizations and individuals from legacy systems to stabilized, high-performance digital operations.
                    </motion.p>
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