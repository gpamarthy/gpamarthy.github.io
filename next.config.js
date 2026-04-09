/** @type {import('next').NextConfig} */

// For gpamarthy.github.io (user site) or custom domain: leave basePath empty
// For gpamarthy.github.io/portfolio (project site): set basePath to '/portfolio'
const basePath = process.env.PAGES_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  env: { BASE_PATH: basePath },
}

module.exports = nextConfig
