import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import servicesData from '../data/servicesData'

const contentVariants = {
    enterLeft: {
        opacity: 0,
        x: -36,
        filter: 'blur(6px)'
    },
    enterRight: {
        opacity: 0,
        x: 36,
        filter: 'blur(6px)'
    },
    center: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)'
    },
    exitLeft: {
        opacity: 0,
        x: -36,
        filter: 'blur(6px)'
    },
    exitRight: {
        opacity: 0,
        x: 36,
        filter: 'blur(6px)'
    }
}

const mediaVariants = {
    enterLeft: {
        opacity: 0,
        x: -42,
        scale: 0.985,
        filter: 'blur(6px)'
    },
    enterRight: {
        opacity: 0,
        x: 42,
        scale: 0.985,
        filter: 'blur(6px)'
    },
    center: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)'
    },
    exitLeft: {
        opacity: 0,
        x: -42,
        scale: 0.985,
        filter: 'blur(6px)'
    },
    exitRight: {
        opacity: 0,
        x: 42,
        scale: 0.985,
        filter: 'blur(6px)'
    }
}

const ServicesShowcase = ({
                              eyebrow = 'WHAT WE DO',
                              title = 'Services',
                              description = 'We provide automation, intelligence, protection, and product systems that help businesses operate with more speed, more confidence, and more room to scale.',
                              compact = false
                          }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const autoplayRef = useRef(null)
    const progressRef = useRef(null)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const currentSlide = useMemo(() => servicesData[currentIndex], [currentIndex])

    const clearTimers = useCallback(() => {
        if (autoplayRef.current) {
            window.clearInterval(autoplayRef.current)
            autoplayRef.current = null
        }

        if (progressRef.current) {
            window.clearInterval(progressRef.current)
            progressRef.current = null
        }
    }, [])

    const goToSlide = useCallback(
        (index) => {
            const normalizedIndex = (index + servicesData.length) % servicesData.length
            setDirection(normalizedIndex > currentIndex ? 1 : -1)
            setCurrentIndex(normalizedIndex)
            setProgress(0)
        },
        [currentIndex]
    )

    const goNext = useCallback(() => {
        setDirection(1)
        setCurrentIndex((previous) => (previous + 1) % servicesData.length)
        setProgress(0)
    }, [])

    const goPrev = useCallback(() => {
        setDirection(-1)
        setCurrentIndex((previous) => (previous - 1 + servicesData.length) % servicesData.length)
        setProgress(0)
    }, [])

    useEffect(() => {
        if (isPaused) {
            clearTimers()
            return
        }

        progressRef.current = window.setInterval(() => {
            setProgress((previous) => {
                const next = previous + 1
                return next >= 100 ? 100 : next
            })
        }, 50)

        autoplayRef.current = window.setInterval(() => {
            goNext()
        }, 5000)

        return () => clearTimers()
    }, [goNext, isPaused, clearTimers, currentIndex])

    useEffect(() => {
        return () => clearTimers()
    }, [clearTimers])

    const handleTouchStart = (event) => {
        touchStartX.current = event.targetTouches[0].clientX
        touchEndX.current = event.targetTouches[0].clientX
    }

    const handleTouchMove = (event) => {
        touchEndX.current = event.targetTouches[0].clientX
    }

    const handleTouchEnd = () => {
        const difference = touchStartX.current - touchEndX.current

        if (Math.abs(difference) > 50) {
            if (difference > 0) {
                goNext()
            } else {
                goPrev()
            }
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            setIsPaused(true)
            goPrev()
        }

        if (event.key === 'ArrowRight') {
            setIsPaused(true)
            goNext()
        }
    }

    return (
        <section className={`services-showcase ${compact ? 'services-showcase--compact' : ''}`}>
            <div className="page-shell">
                <div className="services-showcase__header">
                    <span className="services-showcase__eyebrow">{eyebrow}</span>
                    <h2 className="services-showcase__title">{title}</h2>
                    <p className="services-showcase__description">{description}</p>
                </div>

                <div
                    className="services-showcase__shell"
                    tabIndex={0}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                    onKeyDown={handleKeyDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="services-showcase__layout">
                        <div className="services-showcase__content">
                            <AnimatePresence mode="sync" initial={false}>
                                <motion.div
                                    key={currentSlide.slug}
                                    className="services-showcase__content-inner"
                                    variants={contentVariants}
                                    initial={direction > 0 ? 'enterRight' : 'enterLeft'}
                                    animate="center"
                                    exit={direction > 0 ? 'exitLeft' : 'exitRight'}
                                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="services-showcase__index">
                                        <span className="services-showcase__index-line" />
                                        <span className="services-showcase__index-text">
                                            {String(currentIndex + 1).padStart(2, '0')} / {String(servicesData.length).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="services-showcase__slide-title">{currentSlide.title}</h3>
                                    <p className="services-showcase__slide-subtitle">{currentSlide.subtitle}</p>
                                    <p className="services-showcase__slide-description">{currentSlide.detailDescription}</p>

                                    <div className="services-showcase__actions">
                                        <button
                                            type="button"
                                            className="services-showcase__arrow"
                                            onClick={goPrev}
                                            aria-label="Previous service"
                                        >
                                            <span aria-hidden="true">←</span>
                                        </button>

                                        <button
                                            type="button"
                                            className="services-showcase__arrow"
                                            onClick={goNext}
                                            aria-label="Next service"
                                        >
                                            <span aria-hidden="true">→</span>
                                        </button>
                                    </div>

                                    <Link to={`/services/${currentSlide.slug}`} className="services-showcase__cta">
                                        <span>Read more</span>
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="services-showcase__media">
                            <AnimatePresence mode="sync" initial={false}>
                                <motion.div
                                    key={currentSlide.slug}
                                    className="services-showcase__media-frame"
                                    variants={mediaVariants}
                                    initial={direction > 0 ? 'enterRight' : 'enterLeft'}
                                    animate="center"
                                    exit={direction > 0 ? 'exitLeft' : 'exitRight'}
                                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <span className="services-showcase__corner services-showcase__corner--top-left" />
                                    <span className="services-showcase__corner services-showcase__corner--bottom-right" />

                                    <div className="services-showcase__media-card">
                                        <img
                                            src={currentSlide.imageUrl}
                                            alt={currentSlide.title}
                                            className="services-showcase__image"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="services-showcase__tabs">
                        {servicesData.map((service, index) => (
                            <button
                                key={service.slug}
                                type="button"
                                className={`services-showcase__tab ${index === currentIndex ? 'is-active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to ${service.title}`}
                                aria-pressed={index === currentIndex}
                            >
                                <span className="services-showcase__tab-progress">
                                    <span
                                        className="services-showcase__tab-progress-fill"
                                        style={{
                                            width: index === currentIndex ? `${progress}%` : '0%'
                                        }}
                                    />
                                </span>

                                <span className="services-showcase__tab-title">{service.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesShowcase