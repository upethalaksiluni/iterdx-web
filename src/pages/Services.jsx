import React from 'react'
import ServicesShowcase from '../components/ServicesShowcase.jsx'
import ContactPreview from '../components/ContactPreview.jsx'
import PageSeo from '../components/PageSeo.jsx'

const Services = () => {
    return (
        <>
            <PageSeo
                title="Services | IterDX Global"
                description="Explore IterDX Global services in automation, digital audits, cyber security, business intelligence, education platforms, and integrated transformation."
                path="/services"
            />
            <ServicesShowcase />
            <ContactPreview />
        </>
    )
}

export default Services