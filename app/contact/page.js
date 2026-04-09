export const metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <p className="label">Contact</p>
      <h1 className="h-lg max-w-lg">Let&rsquo;s talk.</h1>
      <p className="body-lg max-w-lg mt-4">
        Currently looking for security engineering roles — remote or on-site.
        Email is the fastest way to reach me.
      </p>

      <div className="grid md:grid-cols-5 gap-12 mt-16">
        <div className="md:col-span-3 space-y-8">
          <div>
            <p className="text-xs text-subtle uppercase tracking-wider mb-2">Email</p>
            <a href="mailto:gppamarthy@gmail.com" className="text-lg hover:text-accent transition-colors">
              gppamarthy@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs text-subtle uppercase tracking-wider mb-2">Phone</p>
            <a href="tel:+12404958089" className="text-lg hover:text-accent transition-colors">
              (240) 495-8089
            </a>
          </div>
          <div>
            <p className="text-xs text-subtle uppercase tracking-wider mb-2">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/gpamarthy7"
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:text-accent transition-colors"
            >
              linkedin.com/in/gpamarthy7
            </a>
          </div>
          <div>
            <p className="text-xs text-subtle uppercase tracking-wider mb-2">GitHub</p>
            <a
              href="https://github.com/gpamarthy"
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:text-accent transition-colors"
            >
              github.com/gpamarthy
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-surface border border-surface-bright rounded-sm p-6">
            <h3 className="font-semibold text-sm mb-3">Resume</h3>
            <p className="text-muted text-sm mb-5">
              One page. Everything that matters.
            </p>
            <a href={`${process.env.BASE_PATH || ''}/resume.pdf`} download className="btn-fill text-sm">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  )
}
