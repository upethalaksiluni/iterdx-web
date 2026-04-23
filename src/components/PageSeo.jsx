import { useEffect } from 'react'

function PageSeo({
                     title,
                     description,
                     path = '/',
                     image = 'https://iterdxglobal.com/og-cover.jpg',
                     type = 'website'
                 }) {
    useEffect(() => {
        const baseUrl = 'https://iterdxglobal.com'
        const canonicalUrl = `${baseUrl}${path}`

        document.title = title

        const setMeta = (selector, attribute, value) => {
            let element = document.head.querySelector(selector)

            if (!element) {
                element = document.createElement('meta')
                element.setAttribute(attribute, selector.includes('property=') ? selector.match(/property="([^"]+)"/)?.[1] || '' : selector.match(/name="([^"]+)"/)?.[1] || '')
                document.head.appendChild(element)
            }

            element.setAttribute('content', value)
        }

        const setLink = (rel, href) => {
            let element = document.head.querySelector(`link[rel="${rel}"]`)

            if (!element) {
                element = document.createElement('link')
                element.setAttribute('rel', rel)
                document.head.appendChild(element)
            }

            element.setAttribute('href', href)
        }

        setMeta('meta[name="description"]', 'name', description)
        setMeta('meta[property="og:title"]', 'property', title)
        setMeta('meta[property="og:description"]', 'property', description)
        setMeta('meta[property="og:url"]', 'property', canonicalUrl)
        setMeta('meta[property="og:image"]', 'property', image)
        setMeta('meta[property="og:type"]', 'property', type)
        setMeta('meta[name="twitter:title"]', 'name', title)
        setMeta('meta[name="twitter:description"]', 'name', description)
        setMeta('meta[name="twitter:image"]', 'name', image)
        setLink('canonical', canonicalUrl)
    }, [title, description, path, image, type])

    return null
}

export default PageSeo