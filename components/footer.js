export default function Footer() {
  return (
    <footer className="border-t border-surface-bright/50 mt-32">
      <div className="wrap py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-sm text-subtle">
          Goutham Prasanth Pamarthy
        </p>
        <div className="flex gap-6 text-sm text-muted">
          <a href="https://www.linkedin.com/in/gpamarthy7" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/gpamarthy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:gppamarthy@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
