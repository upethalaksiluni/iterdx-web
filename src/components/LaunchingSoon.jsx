import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import yathrikayaLogo from '../assets/yathrikaya-logo.png'

const launchReveal = {
    initial: { opacity: 0, y: 40, filter: 'blur(14px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const LaunchingSoon = () => {
    const navigate = useNavigate()

    return (
        <section className="launch-section">
            <div className="launch-section__shell">
                <motion.div className="launch-card" {...launchReveal}>
                    <div className="launch-badge">
                        <span className="launch-badge__icon">✦</span>
                        <span>Upcoming Projects</span>
                    </div>

                    <h2 className="launch-title">Launching Soon</h2>

                    <div className="launch-logo-wrap">
                        <img src={yathrikayaLogo} alt="Yathrikaya" className="launch-logo" />
                    </div>

                    <p className="launch-description">
                        Be among the first to experience our next digital launch. Reserve your interest before the timer runs out.
                    </p>

                    <div className="launch-countdown" aria-label="Launch countdown preview">
                        <div className="launch-countdown__item">
                            <span className="launch-countdown__number">00</span>
                            <span className="launch-countdown__label">Hours</span>
                        </div>

                        <span className="launch-countdown__separator">:</span>

                        <div className="launch-countdown__item">
                            <span className="launch-countdown__number">00</span>
                            <span className="launch-countdown__label">Minutes</span>
                        </div>

                        <span className="launch-countdown__separator">:</span>

                        <div className="launch-countdown__item">
                            <span className="launch-countdown__number">00</span>
                            <span className="launch-countdown__label">Seconds</span>
                        </div>
                    </div>

                    <div className="launch-actions">
                        <button
                            type="button"
                            className="launch-button launch-button--primary"
                            onClick={() => navigate('/projects')}
                        >
                            View Projects
                            <span className="launch-button__arrow">→</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default LaunchingSoon