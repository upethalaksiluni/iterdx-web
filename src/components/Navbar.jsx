import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import wordmark from '../assets/iterdx-global-wordmark.png'

const Navbar = () => {
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const tabs = useMemo(
        () => [
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' }
        ],
        []
    )

    const normalizedPath = location.pathname.replace(/\/+$/, '') || '/'

    const isTabActive = (path) => {
        if (path === '/') {
            return normalizedPath === '/'
        }
        return normalizedPath === path || normalizedPath.startsWith(`${path}/`)
    }

    const activeIndex = tabs.findIndex((tab) => isTabActive(tab.path))

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)')

        const updateMobileState = (event) => {
            const mobile = event.matches
            setIsMobile(mobile)

            if (!mobile) {
                setIsMobileMenuOpen(false)
            }
        }

        setIsMobile(mediaQuery.matches)

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', updateMobileState)
        } else {
            mediaQuery.addListener(updateMobileState)
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', updateMobileState)
            } else {
                mediaQuery.removeListener(updateMobileState)
            }
        }
    }, [])

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    return (
        <nav className={`navbar-wrapper ${isMobileMenuOpen ? 'is-mobile-open' : ''}`} aria-label="Primary navigation">
            <div className="logo-container">
                <Link to="/" className="brand-link" aria-label="IterDX Global home">
                    <img src={logo} alt="IterDX Global logo" className="logo-img" />
                    <img src={wordmark} alt="IterDX Global" className="brand-wordmark-img" />
                </Link>
            </div>

            <div className={`nav-pill-container ${isMobileMenuOpen ? 'is-open' : ''}`}>
                <div className="nav-pill">
                    {activeIndex !== -1 && (
                        <motion.div
                            className="active-pill-bg"
                            initial={false}
                            animate={
                                isMobile
                                    ? { x: 0, y: activeIndex * 40 }
                                    : { x: `calc(${activeIndex} * var(--pill-item-width))`, y: 0 }
                            }
                            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                    )}

                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.path}
                            className={`nav-item ${isTabActive(tab.path) ? 'is-active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span>{tab.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="inquiry-btn-container">
                <Link to="/contact" className="inquiry-btn">
                    Book a Strategy Call
                </Link>
            </div>

            <button
                type="button"
                className={`nav-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
                <span className="nav-toggle__line" />
                <span className="nav-toggle__line" />
                <span className="nav-toggle__line" />
            </button>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="nav-mobile-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar