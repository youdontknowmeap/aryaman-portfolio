import { projects } from '@/data/projectsData'

export default function sitemap() {
  return [
    { url: 'https://aryamanpage.com', lastModified: new Date() },
    ...projects.map(p => ({
      url: `https://aryamanpage.com/work/${p.slug}`,
      lastModified: new Date()
    }))
  ]
}
