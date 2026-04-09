export const metadata = {
  title: 'Experience',
  description: 'Work history: Head of Security Engineering at SportsExcitement, GTA at UMD, Security Engineer at Phoenix Global.',
}

export default function Experience() {
  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <h1 className="h-lg max-w-xl">Experience</h1>

      <div className="mt-12">
        {/* SportsExcitement */}
        <article className="py-12 first:pt-0 border-b border-surface-bright/50">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-6">
            <div>
              <h2 className="h-md text-lg">Head of Security Engineering</h2>
              <p className="text-muted text-sm mt-1">SportsExcitement &middot; Remote</p>
            </div>
            <p className="text-subtle text-sm font-mono shrink-0">Nov 2025 - Present</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 max-w-md">
            <div className="pl-3 border-l-2 border-accent/40">
              <p className="num text-2xl">20+</p>
              <p className="num-label text-xs">Pentests run</p>
            </div>
            <div className="pl-3 border-l-2 border-accent/40">
              <p className="num text-2xl">40%</p>
              <p className="num-label text-xs">Vuln reduction</p>
            </div>
            <div className="pl-3 border-l-2 border-accent/40">
              <p className="num text-2xl">100%</p>
              <p className="num-label text-xs">Uptime held</p>
            </div>
          </div>

          <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed max-w-2xl">
            <li className="dash">
              Conducted 20+ web app and API penetration tests. Every engagement started with
              mapping the attack surface manually before running tools, which uncovered IDOR, stored XSS,
              and auth bypass issues that automated scanners missed.
            </li>
            <li className="dash">
              VPS infrastructure hardening from scratch: IONOS Cloud Panel firewall rewrites,
              NAT Gateway for outbound-only VM exposure, SSH key auth, port lockdown, patching cadence.
            </li>
            <li className="dash">Cloudflare WAF with custom rules for scraping and DDoS patterns. Rate-limiting and Access for internal tooling.</li>
            <li className="dash">
              Responded to a live cryptojacking and data exfiltration attempt. Traced it through
              process trees, cron persistence, and outbound C2 traffic. Evicted the loader, closed
              the vector, built Splunk detections so the same technique wouldn&rsquo;t land again.
            </li>
            <li className="dash">
              Quarterly attack surface reviews with the CTO. Translated findings into business risk,
              co-designed segmentation changes that cut exposure by 30%. Wrote the company&rsquo;s first IR playbook.
            </li>
          </ul>
        </article>

        {/* UMD */}
        <article className="py-12 border-b border-surface-bright/50">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-6">
            <div>
              <h2 className="h-md text-lg">Graduate Teaching Assistant</h2>
              <p className="text-muted text-sm mt-1">University of Maryland, College Park</p>
            </div>
            <p className="text-subtle text-sm font-mono shrink-0">Aug 2024 - Jan 2025</p>
          </div>

          <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed max-w-2xl">
            <li className="dash">
              Weekly DFIR labs for 60+ grad students: Splunk log analysis, Volatility memory forensics,
              full-chain compromise reconstructions.
            </li>
            <li className="dash">
              Built Python scripts that auto-generated realistic artifact sets so students
              got varied evidence each week instead of the same canned scenario.
            </li>
          </ul>
        </article>

        {/* Phoenix Global */}
        <article className="py-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-6">
            <div>
              <h2 className="h-md text-lg">Security Engineer</h2>
              <p className="text-muted text-sm mt-1">Phoenix Global &middot; Hyderabad, India</p>
            </div>
            <p className="text-subtle text-sm font-mono shrink-0">Jun 2022 - Aug 2022</p>
          </div>

          <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed max-w-2xl">
            <li className="dash">
              25+ Splunk correlation rules. Started from raw log data, found the actual noise sources,
              wrote rules around real attacker behavior. False positives dropped 30%, Python
              triage automation saved the SOC ~15 hours/week.
            </li>
            <li className="dash">
              IAM audit across 50+ AWS assets: overprivileged roles, dormant keys, CloudTrail gaps.
              Co-authored the remediation guide, 35% cloud risk reduction.
            </li>
          </ul>
        </article>
      </div>
    </div>
  )
}
