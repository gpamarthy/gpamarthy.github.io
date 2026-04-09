export const metadata = {
  title: 'Experience',
}

export default function Experience() {
  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <p className="label">Experience</p>
      <h1 className="h-lg max-w-xl">Where I&rsquo;ve worked and what I shipped.</h1>

      <div className="mt-16">
        {/* SportsExcitement */}
        <article className="py-12 first:pt-0 border-b border-surface-bright/50">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-6">
            <div>
              <h2 className="h-md text-lg">Head of Security Engineering</h2>
              <p className="text-muted text-sm mt-1">SportsExcitement &middot; Remote</p>
            </div>
            <p className="text-subtle text-sm font-mono shrink-0">Nov 2025 &mdash; Present</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
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
              mapping the attack surface manually before running tools — uncovered IDOR, stored XSS,
              and auth bypass issues that automated scanners missed.
            </li>
            <li className="dash">
              Secured VPS infrastructure from scratch: rewrote firewall rules in IONOS Cloud Panel,
              configured NAT Gateway for outbound-only VM exposure, enforced SSH key auth, closed
              unused ports, set up patching cadence.
            </li>
            <li className="dash">
              Set up Cloudflare WAF with custom firewall rules targeting active scraping and DDoS
              patterns. Configured rate-limiting and Cloudflare Access to lock internal tooling
              behind identity verification.
            </li>
            <li className="dash">
              Responded to a live cryptojacking and data exfiltration attempt — traced the attack
              through process trees, cron persistence, and outbound C2 traffic. Evicted the loader,
              closed the initial access vector, built Splunk detections to prevent recurrence.
            </li>
            <li className="dash">
              Ran quarterly attack surface reviews with the CTO, translated technical findings into
              business risk. Co-designed network segmentation changes that cut overall exposure by 30%.
              Authored the company&rsquo;s first incident response playbook.
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
            <p className="text-subtle text-sm font-mono shrink-0">Aug 2024 &mdash; Jan 2025</p>
          </div>

          <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed max-w-2xl">
            <li className="dash">
              Ran DFIR labs weekly for 60+ graduate students covering Splunk log analysis,
              Volatility memory forensics, and full-chain compromise reconstructions.
            </li>
            <li className="dash">
              Built Python scripts that auto-generated realistic artifact sets for investigations,
              so students worked on varied evidence rather than the same canned scenario each week.
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
            <p className="text-subtle text-sm font-mono shrink-0">Jun 2022 &mdash; Aug 2022</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
            <div className="pl-3 border-l-2 border-accent/40">
              <p className="num text-2xl">25+</p>
              <p className="num-label text-xs">Splunk rules</p>
            </div>
            <div className="pl-3 border-l-2 border-accent/40">
              <p className="num text-2xl">30%</p>
              <p className="num-label text-xs">FP reduction</p>
            </div>
            <div className="pl-3 border-l-2 border-accent/40">
              <p className="num text-2xl">15h</p>
              <p className="num-label text-xs">Saved weekly</p>
            </div>
          </div>

          <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed max-w-2xl">
            <li className="dash">
              Built 25+ Splunk correlation rules by starting with raw log data, identifying actual
              noise sources, then writing rules around real attacker behavior — false positives
              dropped 30% and Python triage automation saved the SOC around 15 hours per week.
            </li>
            <li className="dash">
              Audited IAM policies and security configurations across 50+ AWS assets — flagged
              overprivileged roles, dormant access keys, and gaps in CloudTrail coverage.
              Co-authored the remediation guide that reduced cloud risk exposure by 35%.
            </li>
          </ul>
        </article>
      </div>
    </div>
  )
}
