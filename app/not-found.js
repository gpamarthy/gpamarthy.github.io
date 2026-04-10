import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap pt-32 pb-20 text-center">
      <p className="label justify-center">404</p>
      <h1 className="h-lg">Page not found.</h1>
      <p className="text-muted mt-4">Nothing here. Maybe the route changed, maybe it never existed.</p>
      <Link href="/" className="btn-fill inline-flex mt-8">Back to home</Link>
    </div>
  )
}
