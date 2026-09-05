import { useEffect } from 'react'

export default function Seo({ title, description, keywords = [], image, canonicalUrl }) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector)

      if (!element) {
        element = document.createElement('meta')
        document.head.appendChild(element)
      }

      Object.entries(attributes).forEach(([key, value]) => {
        if (value) {
          element.setAttribute(key, value)
        }
      })
    }

    setMeta('meta[name="description"]', { name: 'description', content: description })
    setMeta('meta[name="keywords"]', { name: 'keywords', content: keywords.join(', ') })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    if (canonicalUrl) {
      let canonical = document.head.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = canonicalUrl
    }
  }, [title, description, keywords, image, canonicalUrl])

  return null
}
