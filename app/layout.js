import './globals.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

export const metadata = {
  title: {
    default: 'Goutham Prasanth Pamarthy |Security Engineer',
    template: '%s |Goutham Prasanth Pamarthy',
  },
  description: 'Security engineer specializing in penetration testing, cloud security, and incident response. OSEP and CRTE certified.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Goutham Prasanth Pamarthy',
    title: 'Goutham Prasanth Pamarthy |Security Engineer',
    description: 'OSEP & CRTE certified security engineer. Penetration testing, cloud security, AV/EDR evasion, incident response. Builder of Domino and MalForge.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goutham Prasanth Pamarthy |Security Engineer',
    description: 'OSEP & CRTE certified. Pentesting, cloud security, and offensive tool development.',
  },
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
        <Nav />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
