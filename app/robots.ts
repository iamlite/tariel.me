import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/, /assets/'
    },
    sitemap: 'https://tarieldavids.com/sitemap.xml'
  }
}
