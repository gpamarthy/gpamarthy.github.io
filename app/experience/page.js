export const metadata = {
  title: 'Experience',
  description: 'Work history: Head of Security Engineering at SportsExcitement, GTA at UMD, Security Engineer at Phoenix Global.',
  alternates: { canonical: '/experience/' },
}

export default function Experience() {
  return (
    <div className="wrap pt-20 pb-20 md:pt-32">
      <h1 className="h-lg max-w-xl animate-slide-up">Experience</h1>
      <p className="label animate-slide-up">Campaign History</p>

      <div className="mt-12 space-y-20">
        <article className="relative animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-8">
            <div>
              <h2 className="h-md text-white glow-accent">Head of Security Engineering</h2>
              <p className="text-accent text-sm mt-1 font-mono uppercase tracking-widest">SportsExcitement &middot; Remote</p>
            </div>
            <p className="text-subtle text-xs font-mono shrink-0 border border-surface-bright px-3 py-1 bg-surface/50">2025.11 - PRESENT</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10 max-w-2xl">
            <div className="p-4 bg-surface/30 border border-accent/20 border-l-4 border-l-accent">
              <p className="num text-3xl">20+</p>
              <p className="num-label text-[10px]">Pentests Delivered</p>
            </div>
            <div className="p-4 bg-surface/30 border border-neon-blue/20 border-l-4 border-l-neon-blue">
              <p className="num text-3xl text-neon-blue" style={{ textShadow: '0 0 20px rgb(var(--c-neon-blue) / 0.5)' }}>40%</p>
              <p className="num-label text-[10px]">Attack Surface Reduction</p>
            </div>
            <div className="p-4 bg-surface/30 border border-white/10 border-l-4 border-l-white/40">
              <p className="num text-3xl text-white">100%</p>
              <p className="num-label text-[10px]">Infrastructure Uptime</p>
            </div>
          </div>

          <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed max-w-4xl font-mono">
            <li className="dash">
              Orchestrated 20+ full-stack penetration tests, uncovering critical IDOR and auth bypass vectors that escaped automated CI/CD security gates.
            </li>
            <li className="dash">
              Architected zero-trust VPS infrastructure from bare metal, implementing hard-kernel configurations and outbound-only NAT gateways.
            </li>
            <li className="dash">
              Deployed advanced Cloudflare WAF behavioral rulesets, cutting automated scraping attempts and credential stuffing by 60%.
            </li>
            <li className="dash">
              Led incident response for a high-stakes cryptojacking attempt; traced C2 traffic to an exotic persistence mechanism and successfully evicted the threat actor within 4 hours.
            </li>
            <li className="dash">
              Authored the enterprise-wide Incident Response Playbook and co-designed network segmentation logic with the CTO to isolate high-risk assets.
            </li>
          </ul>
        </article>

        <article className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-8">
            <div>
              <h2 className="h-md text-white">Graduate Teaching Assistant</h2>
              <p className="text-accent text-sm mt-1 font-mono uppercase tracking-widest">University of Maryland</p>
            </div>
            <p className="text-subtle text-xs font-mono shrink-0 border border-surface-bright px-3 py-1 bg-surface/50">2024.08 - 2025.01</p>
          </div>

          <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed max-w-4xl font-mono">
            <li className="dash">
              Instructed 60+ graduate students in high-fidelity DFIR labs covering Volatility memory forensics and multi-stage lateral movement reconstruction.
            </li>
            <li className="dash">
              Engineered Python-based artifact generators to provide randomized, unique evidence sets for each student, preventing "answer-sharing" and ensuring deep technical comprehension.
            </li>
          </ul>
        </article>

        <article className="relative animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-8">
            <div>
              <h2 className="h-md text-white">Security Engineer</h2>
              <p className="text-accent text-sm mt-1 font-mono uppercase tracking-widest">Phoenix Global &middot; India</p>
            </div>
            <p className="text-subtle text-xs font-mono shrink-0 border border-surface-bright px-3 py-1 bg-surface/50">2022.06 - 2022.08</p>
          </div>

          <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed max-w-4xl font-mono">
            <li className="dash">
              Developed 25+ high-confidence Splunk correlation rules targeting TTPs observed in live production telemetry, reducing SOC noise by 30%.
            </li>
            <li className="dash">
              Conducted an AWS IAM deep-audit across 50+ enterprise accounts, resolving legacy over-privilege issues and closing critical CloudTrail logging gaps.
            </li>
          </ul>
        </article>
      </div>
    </div>
  )
}
