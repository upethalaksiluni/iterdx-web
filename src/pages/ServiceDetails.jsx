import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import servicesData from '../data/servicesData'
import ContactPreview from '../components/ContactPreview.jsx'
import PageSeo from '../components/PageSeo.jsx'

function ServiceDetails() {
    const { slug } = useParams()

    const service = useMemo(
        () => servicesData.find((item) => item.slug === slug),
        [slug]
    )

    const [currentFeature, setCurrentFeature] = useState(0)
    const [progress, setProgress] = useState(0)
    const autoPlayInterval = 4200

    useEffect(() => {
        setCurrentFeature(0)
        setProgress(0)
    }, [slug])

    useEffect(() => {
        if (!service) {
            return
        }

        const timer = window.setInterval(() => {
            setProgress((previous) => {
                const next = previous + 100 / (autoPlayInterval / 100)

                if (next >= 100) {
                    setCurrentFeature((previousFeature) => (previousFeature + 1) % service.steps.length)
                    return 0
                }

                return next
            })
        }, 100)

        return () => window.clearInterval(timer)
    }, [service])

    if (!service) {
        return (
            <section className="service-details-page" aria-label="Service not found">
                <PageSeo
                    title="Service Not Found | IterDX Global"
                    description="The requested service could not be found."
                    path="/services"
                />
                <div className="page-shell">
                    <div className="service-details-header">
                        <span className="service-details-eyebrow">Service details</span>
                        <h1 className="service-details-title">Service not found</h1>
                        <p className="service-details-description">
                            The service you are looking for does not exist.
                        </p>
                        <div className="service-details-back-wrap">
                            <Link to="/services" className="services-showcase__cta">
                                <span>Back to Services</span>
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <PageSeo
                title={`${service.title} | IterDX Global`}
                description={service.detailDescription}
                path={`/services/${service.slug}`}
            />

            <section className="service-details-page" aria-label="Service details page">
                <div className="page-shell">
                    <motion.div
                        className="service-details-header"
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="service-details-eyebrow">{service.subtitle}</span>
                        <h1 className="service-details-title">{service.title}</h1>
                        <p className="service-details-description">{service.detailDescription}</p>
                    </motion.div>

                    <div className="service-details-layout">
                        <motion.div
                            className="service-details-steps"
                            initial={{ opacity: 0, x: -60, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {service.steps.map((feature, index) => {
                                const isActive = index === currentFeature
                                const isCompleted = index < currentFeature

                                return (
                                    <button
                                        key={feature.step}
                                        type="button"
                                        className={`service-details-step${isActive ? ' active' : ''}`}
                                        onClick={() => {
                                            setCurrentFeature(index)
                                            setProgress(0)
                                        }}
                                        aria-pressed={isActive}
                                    >
                                        <div
                                            className={`service-details-step-indicator${
                                                isActive ? ' active' : isCompleted ? ' completed' : ''
                                            }`}
                                        >
                                            {isCompleted ? (
                                                <span className="service-details-step-icon">✓</span>
                                            ) : (
                                                <span className="service-details-step-number">{index + 1}</span>
                                            )}
                                        </div>

                                        <div className="service-details-step-copy">
                                            <div className="service-details-step-label">{feature.step}</div>
                                            <h2 className="service-details-step-title">{feature.title}</h2>
                                            <p className="service-details-step-text">{feature.content}</p>

                                            {isActive ? (
                                                <div className="service-details-progress">
                                                    <span
                                                        className="service-details-progress-bar"
                                                        style={{ width: `${progress}%` }}
                                                    />
                                                </div>
                                            ) : null}
                                        </div>
                                    </button>
                                )
                            })}
                        </motion.div>

                        <motion.div
                            className="service-details-media"
                            initial={{ opacity: 0, x: 60, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                        >
                            <div className="service-details-media-card">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="service-details-image"
                                />
                                <div className="service-details-image-overlay" />
                                <div className="service-details-media-content">
                                    <span className="service-details-media-step">
                                        {service.steps[currentFeature].step}
                                    </span>
                                    <h3 className="service-details-media-title">
                                        {service.steps[currentFeature].title}
                                    </h3>
                                    <p className="service-details-media-text">
                                        {service.steps[currentFeature].content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ContactPreview />
        </>
    )
}

export default ServiceDetails