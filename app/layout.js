import './globals.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

export const metadata = {
  title: {
    default: 'Goutham Prasanth Pamarthy | Security Engineer',
    template: '%s | Goutham Prasanth Pamarthy',
  },
  description: 'Security engineer focused on cloud detection and response, AWS security, incident response, and application security. Builder of Sentinel Forge and Domino.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Goutham Prasanth Pamarthy',
    title: 'Goutham Prasanth Pamarthy | Security Engineer',
    description: 'OSEP and CRTE certified security engineer focused on AWS defense, detection engineering, incident response, and application security.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Goutham Prasanth Pamarthy - Security Engineer' }],
  },
  twitter: {
    card: 'summary',
    title: 'Goutham Prasanth Pamarthy | Security Engineer',
    description: 'Cloud detection and response, AWS security, incident response, and application security.',
  },
  alternates: { canonical: '/' },
  metadataBase: new URL('https://gpamarthy.github.io'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('theme');if(t==='light')document.documentElement.setAttribute('data-theme','light')})()`,
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm">
          Skip to content
        </a>
        <Nav />
        <main id="main" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
