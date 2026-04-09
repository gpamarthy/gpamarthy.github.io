export const metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <h1 className="h-lg max-w-lg">Let&rsquo;s talk.</h1>
      <p className="text-muted text-sm mt-3 max-w-lg">
        Currently looking for security engineering roles — remote or on-site.
        Email is fastest.
      </p>

      <div className="mt-12 max-w-lg space-y-6">
        <a href="mailto:gppamarthy@gmail.com" className="block text-lg hover:text-accent transition-colors">
          gppamarthy@gmail.com
        </a>
        <a href="tel:+12404958089" className="block text-lg hover:text-accent transition-colors">
          (240) 495-8089
        </a>

        <div className="flex gap-6 text-sm text-muted pt-2">
          <a href="https://www.linkedin.com/in/gpamarthy7" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/gpamarthy" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href={`${process.env.BASE_PATH || ''}/resume.pdf`} download className="hover:text-accent transition-colors">Resume PDF</a>
        </div>
      </div>
    </div>
  )
}
