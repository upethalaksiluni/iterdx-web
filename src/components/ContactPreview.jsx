import React from 'react'
import { Link } from 'react-router-dom'

function ContactPreview() {
    return (
        <section className="iterdx-contact-preview" aria-label="Contact call to action section">
            <div className="page-shell">
                <div className="iterdx-contact-preview__shell">
                    <span className="iterdx-contact-preview__corner iterdx-contact-preview__corner--top-left" aria-hidden="true">
                        +
                    </span>
                    <span className="iterdx-contact-preview__corner iterdx-contact-preview__corner--top-right" aria-hidden="true">
                        +
                    </span>
                    <span className="iterdx-contact-preview__corner iterdx-contact-preview__corner--bottom-left" aria-hidden="true">
                        +
                    </span>
                    <span className="iterdx-contact-preview__corner iterdx-contact-preview__corner--bottom-right" aria-hidden="true">
                        +
                    </span>

                    <div className="iterdx-contact-preview__line iterdx-contact-preview__line--left" aria-hidden="true" />
                    <div className="iterdx-contact-preview__line iterdx-contact-preview__line--right" aria-hidden="true" />
                    <div className="iterdx-contact-preview__line iterdx-contact-preview__line--center" aria-hidden="true" />

                    <div className="iterdx-contact-preview__content">
                        <h2 className="iterdx-contact-preview__title">Let your next move become your strongest digital advantage.</h2>
                        <p className="iterdx-contact-preview__description">
                            Talk with IterDX Global about automation, security, reporting, and scalable digital execution tailored to your business.
                        </p>
                    </div>

                    <div className="iterdx-contact-preview__actions">
                        <Link to="/contact" className="iterdx-contact-preview__btn">
                            <span>Contact Us</span>
                            <span className="iterdx-contact-preview__btn-icon" aria-hidden="true">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPreview