'use client'

import CopyButton from '../../components/copy-button'

export default function Contact() {
  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <h1 className="h-lg max-w-lg">Let&rsquo;s talk.</h1>
      <p className="text-muted text-sm mt-3 max-w-lg">
        Currently looking for security engineering roles - remote or on-site.
        Email is fastest.
      </p>

      <div className="mt-12 max-w-lg space-y-6">
        <div className="flex items-center gap-6 group">
          <a href="mailto:gppamarthy@gmail.com" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
            <svg className="text-subtle group-hover:text-accent shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/>
            </svg>
            gppamarthy@gmail.com
          </a>
          <CopyButton text="gppamarthy@gmail.com" />
        </div>

        <div className="flex items-center gap-6 group">
          <a href="tel:+12404958089" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
            <svg width="18" height="18" stroke="currentColor" viewBox="0 0 24 24" className="text-subtle group-hover:text-accent shrink-0" fill="none" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.74-1.25a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z"/>
            </svg>
            (240) 495-8089
          </a>
          <CopyButton text="+12404958089" />
        </div>

        <div className="flex gap-6 text-sm text-muted pt-4">
          <a href="https://www.linkedin.com/in/gpamarthy7" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/gpamarthy" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href={`${process.env.BASE_PATH || ''}/resume.pdf`} download className="hover:text-accent transition-colors">Resume PDF</a>
        </div>
      </div>
    </div>
  )
}
