import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap pt-32 pb-20 text-center animate-slide-up">
      <p className="label justify-center">System Error</p>
      <h1 className="h-xl glitch-text" data-text="404">404</h1>
      <p className="text-muted mt-8 font-mono uppercase tracking-[0.2em] text-sm">Nothing here. Maybe the route changed, maybe it never existed.</p>
      <div className="mt-12">
        <Link href="/" className="btn-fill">
          REBOOT TO CORE_SYSTEM
        </Link>
      </div>
    </div>
  )
}
