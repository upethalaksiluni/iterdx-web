import React, { useEffect, useMemo, useRef, useState } from 'react'

const teamMembers = [
    {
        id: 1,
        name: 'Chandrika',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        name: 'Nimal',
        role: 'Engineer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        name: 'Sarah',
        role: 'Designer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        name: 'Michael',
        role: 'Developer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 5,
        name: 'Akeel',
        role: 'Product Lead',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 6,
        name: 'Ishara',
        role: 'Operations',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 7,
        name: 'Ravin',
        role: 'Systems Analyst',
        image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 8,
        name: 'Tania',
        role: 'Growth Strategist',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 9,
        name: 'Dilan',
        role: 'Security Specialist',
        image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=600&q=80'
    }
]

function TeamCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const autoplayRef = useRef(null)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const positions = useMemo(() => {
        const count = teamMembers.length

        return teamMembers.map((member, index) => {
            let normalized = index - activeIndex

            if (normalized > Math.floor(count / 2)) normalized -= count
            if (normalized < -Math.floor(count / 2)) normalized += count

            return { member, normalized }
        })
    }, [activeIndex])

    useEffect(() => {
        autoplayRef.current = window.setInterval(() => {
            setActiveIndex((previous) => (previous + 1) % teamMembers.length)
        }, 2800)

        return () => {
            if (autoplayRef.current) {
                window.clearInterval(autoplayRef.current)
            }
        }
    }, [])

    const goNext = () => {
        setActiveIndex((previous) => (previous + 1) % teamMembers.length)
    }

    const goPrev = () => {
        setActiveIndex((previous) => (previous - 1 + teamMembers.length) % teamMembers.length)
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

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') goPrev()
        if (event.key === 'ArrowRight') goNext()
    }

    return (
        <section className="team-section" aria-label="IterDX team section">
            <div className="page-shell">
                <div className="team-section__header">
                    <span className="team-section__eyebrow">PEOPLE</span>
                    <h2 className="team-section__title">Team</h2>
                    <p className="team-section__description">
                        The IterDX team brings together strategy, engineering, design, operations, and delivery to build stable systems for the AI era.
                    </p>
                </div>

                <div
                    className="team-section__carousel"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="IterDX team members"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <button type="button" className="team-section__nav team-section__nav--prev" onClick={goPrev} aria-label="Previous team member">
                        ←
                    </button>

                    <div className="team-section__stage">
                        {positions.map(({ member, normalized }) => {
                            let positionClass = 'team-card'

                            if (normalized === 0) {
                                positionClass += ' team-card--center'
                            } else if (normalized === -1) {
                                positionClass += ' team-card--left'
                            } else if (normalized === 1) {
                                positionClass += ' team-card--right'
                            } else {
                                positionClass += ' team-card--hidden'
                            }

                            return (
                                <article key={member.id} className={positionClass} aria-hidden={Math.abs(normalized) > 1}>
                                    <div className="team-card__avatar-wrap">
                                        <img src={member.image} alt={member.name} className="team-card__avatar" />
                                    </div>
                                    <h3 className="team-card__name">{member.name}</h3>
                                    <p className="team-card__role">{member.role}</p>
                                </article>
                            )
                        })}
                    </div>

                    <button type="button" className="team-section__nav team-section__nav--next" onClick={goNext} aria-label="Next team member">
                        →
                    </button>
                </div>

                <div className="team-section__dots" aria-label="Team slide navigation">
                    {teamMembers.map((member, index) => (
                        <button
                            key={member.id}
                            type="button"
                            className={`team-section__dot${activeIndex === index ? ' active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to ${member.name}`}
                            aria-pressed={activeIndex === index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamCarousel