import { useEffect } from 'react'
import { companyInfo } from '../data/catalog'

export default function Seo({ title, description, keywords = [], image, canonicalUrl, noIndex = false }) {
  useEffect(() => {
    document.title = title

    const absoluteImage = image?.startsWith('http') ? image : `${companyInfo.siteUrl}${image || ''}`
    const resolvedCanonical = canonicalUrl || `${companyInfo.siteUrl}${window.location.pathname}`

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
    setMeta('meta[name="robots"]', { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: resolvedCanonical })
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: companyInfo.name })
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'ar_IQ' })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: absoluteImage })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: absoluteImage })

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = resolvedCanonical
  }, [title, description, keywords, image, canonicalUrl, noIndex])

  return null
}
