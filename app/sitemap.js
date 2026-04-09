export const dynamic = 'force-static'

const base = 'https://gpamarthy.github.io'

export default function sitemap() {
  const pages = ['', '/experience', '/projects', '/about', '/contact']
  return pages.map(p => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }))
}
