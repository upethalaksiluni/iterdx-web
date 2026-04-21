import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import servicesData from '../data/servicesData'

const defaultItems = servicesData.map((service) => ({
    id: service.id,
    slug: service.slug,
    title: service.title,
    description: service.detailDescription,
    href: `/services/${service.slug}`,
    image: service.imageUrl
}))

function HomeServicesCarousel({
                                  title = 'Services',
                                  description = 'We design digital systems that improve execution, strengthen security, and create the operational clarity needed for modern growth.',
                                  items = defaultItems
                              }) {
    const totalSlides = items.length
    const autoplayRef = useRef(null)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    const [activeIndex, setActiveIndex] = useState(0)

    const positions = useMemo(() => {
        const count = items.length

        return items.map((item, index) => {
            let normalized = index - activeIndex

            if (normalized > Math.floor(count / 2)) normalized -= count
            if (normalized < -Math.floor(count / 2)) normalized += count

            return { item, index, normalized }
        })
    }, [items, activeIndex])

    useEffect(() => {
        if (totalSlides <= 1) return

        autoplayRef.current = window.setInterval(() => {
            setActiveIndex((previous) => (previous + 1) % totalSlides)
        }, 2600)

        return () => {
            if (autoplayRef.current) {
                window.clearInterval(autoplayRef.current)
            }
        }
    }, [totalSlides])

    const goNext = () => {
        setActiveIndex((previous) => (previous + 1) % totalSlides)
    }

    const goPrev = () => {
        setActiveIndex((previous) => (previous - 1 + totalSlides) % totalSlides)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            goPrev()
        }

        if (event.key === 'ArrowRight') {
            goNext()
        }
    }

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

    return (
        <section className="iterdx-services" aria-label="Services section">
            <div className="page-shell">
                <div className="iterdx-services__header">
                    <span className="iterdx-services__eyebrow">WHAT WE DO</span>
                    <h2 className="iterdx-services__title">{title}</h2>
                    <p className="iterdx-services__description">{description}</p>
                </div>

                <div
                    className="iterdx-services__carousel"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Services showcase"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="iterdx-services__stage">
                        {positions.map(({ item, normalized }) => {
                            const visible = Math.abs(normalized) <= 1

                            let positionClass = 'iterdx-services__slide'

                            if (normalized === 0) {
                                positionClass += ' iterdx-services__slide--center'
                            } else if (normalized === -1) {
                                positionClass += ' iterdx-services__slide--left'
                            } else if (normalized === 1) {
                                positionClass += ' iterdx-services__slide--right'
                            } else {
                                positionClass += ' iterdx-services__slide--hidden'
                            }

                            return (
                                <article
                                    key={item.id}
                                    className={positionClass}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={item.title}
                                    aria-hidden={!visible}
                                    style={{ zIndex: normalized === 0 ? 3 : 2 }}
                                >
                                    <Link to={item.href} className="iterdx-services__card">
                                        <div className="iterdx-services__image-wrap">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="iterdx-services__image"
                                            />
                                            <div className="iterdx-services__overlay" />
                                            <div className="iterdx-services__content">
                                                <h3 className="iterdx-services__card-title">{item.title}</h3>
                                                <p className="iterdx-services__card-description">{item.description}</p>
                                                <div className="iterdx-services__link">
                                                    <span>Read more</span>
                                                    <span className="iterdx-services__link-icon" aria-hidden="true">→</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            )
                        })}
                    </div>

                    <div className="iterdx-services__controls">
                        <button
                            type="button"
                            className="iterdx-services__arrow"
                            aria-label="Previous service"
                            onClick={goPrev}
                        >
                            <span aria-hidden="true">←</span>
                        </button>

                        <div className="iterdx-services__dots" aria-label="Service slide navigation">
                            {items.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`iterdx-services__dot${activeIndex === index ? ' active' : ''}`}
                                    aria-label={`Go to service ${index + 1}`}
                                    aria-pressed={activeIndex === index}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            className="iterdx-services__arrow"
                            aria-label="Next service"
                            onClick={goNext}
                        >
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServicesCarousel