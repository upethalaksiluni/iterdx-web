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

                    <div className="iterdx-contact-preview__line iterdx-contact-preview__line--top" aria-hidden="true" />
                    <div className="iterdx-contact-preview__line iterdx-contact-preview__line--bottom" aria-hidden="true" />
                    <div className="iterdx-contact-preview__line iterdx-contact-preview__line--left" aria-hidden="true" />
                    <div className="iterdx-contact-preview__line iterdx-contact-preview__line--right" aria-hidden="true" />
                    <div className="iterdx-contact-preview__line iterdx-contact-preview__line--center" aria-hidden="true" />

                    <div className="iterdx-contact-preview__content">
                        <h2 className="iterdx-contact-preview__title">Ready to modernize your operations?</h2>
                        <p className="iterdx-contact-preview__description">
                            Start the conversation with IterDX Global and map out the fastest path to automation, visibility, and scalable digital execution.
                        </p>
                    </div>

                    <div className="iterdx-contact-preview__actions">
                        <a href="mailto:hello@iterdxglobal.com" className="iterdx-contact-preview__btn iterdx-contact-preview__btn--secondary">
                            <span>Email Sales</span>
                        </a>

                        <Link to="/contact" className="iterdx-contact-preview__btn iterdx-contact-preview__btn--primary">
                            <span>Book a Strategy Call</span>
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