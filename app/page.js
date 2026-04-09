import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="wrap pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="label">Security Engineer</p>
        <h1 className="h-xl max-w-3xl">
          Goutham Prasanth<br />Pamarthy
        </h1>
        <p className="body-lg max-w-2xl mt-6">
          I find the attack paths your scanner missed. OSEP and CRTE certified —
          both require passing live proctored attack labs, not a multiple-choice exam.
          I build offensive security tools, harden cloud infrastructure, and respond to incidents.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/projects" className="btn-fill">View my work</Link>
          <Link href="/contact" className="btn-line">Get in touch</Link>
        </div>
      </section>

      {/* numbers */}
      <div className="border-y border-surface-bright/50 bg-surface/30">
        <div className="wrap py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="relative pl-4 border-l-2 border-accent/40">
            <p className="num">20+</p>
            <p className="num-label">Penetration tests delivered</p>
          </div>
          <div className="relative pl-4 border-l-2 border-accent/40">
            <p className="num">40%</p>
            <p className="num-label">Critical vuln reduction</p>
          </div>
          <div className="relative pl-4 border-l-2 border-accent/40">
            <p className="num">6</p>
            <p className="num-label">Industry certifications</p>
          </div>
          <div className="relative pl-4 border-l-2 border-accent/40">
            <p className="num">50+</p>
            <p className="num-label">AWS assets audited</p>
          </div>
        </div>
      </div>

      {/* featured work */}
      <section className="wrap py-20 md:py-28">
        <p className="label">Selected Work</p>
        <h2 className="h-lg">
          Tools I built to solve problems<br className="hidden md:block" />
          I kept running into.
        </h2>

        <div className="mt-16 space-y-6">
          <Link href="/projects#domino" className="block group">
            <article className="surface p-8 md:p-12 border-l-2 border-l-accent/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-sm text-accent font-mono mb-2">01</p>
                  <h3 className="h-md text-xl mb-1">Domino</h3>
                  <p className="text-muted text-sm">AWS IAM Privilege Escalation Path Prover</p>
                  <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
                    Prowler tells you 200 individual misconfigs exist. Domino tells you which 5
                    chain into actual account compromise — and shows you the exact path to get there.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="chip">Python</span>
                    <span className="chip">networkx</span>
                    <span className="chip">boto3</span>
                    <span className="chip">IAM</span>
                  </div>
                </div>
                <span className="arrow shrink-0 mt-2">Read more</span>
              </div>
            </article>
          </Link>

          <Link href="/projects#malforge" className="block group">
            <article className="surface p-8 md:p-12 border-l-2 border-l-accent/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-sm text-accent font-mono mb-2">02</p>
                  <h3 className="h-md text-xl mb-1">MalForge</h3>
                  <p className="text-muted text-sm">Multi-Format Payload Generator with AV/EDR Evasion</p>
                  <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
                    9 output formats, stackable encryption, AMSI and ETW patching, sandbox detection.
                    Every build produces unique artifacts.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="chip">Python</span>
                    <span className="chip">C#</span>
                    <span className="chip">PowerShell</span>
                    <span className="chip">msfvenom</span>
                  </div>
                </div>
                <span className="arrow shrink-0 mt-2">Read more</span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* capabilities */}
      <section className="border-t border-surface-bright/50">
        <div className="wrap py-20 md:py-28">
          <p className="label">What I Bring</p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="surface p-6">
              <div className="w-8 h-8 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" fill="#ef4444" />
                  <line x1="12" y1="1" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="1" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="23" y2="12" />
                </svg>
              </div>
              <h3 className="h-md mb-3">Offensive Security</h3>
              <p className="text-muted leading-relaxed text-sm">
                Pentesting, AV/EDR evasion, Active Directory exploitation, C2 frameworks,
                payload development. I start with manual recon before running tools —
                the interesting vulnerabilities are in the gaps between scanner checks.
              </p>
            </div>
            <div className="surface p-6">
              <div className="w-8 h-8 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5">
                  <path d="M4 20V10a8 8 0 1 1 16 0v10" />
                  <path d="M2 20h20" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="h-md mb-3">Cloud & Infrastructure</h3>
              <p className="text-muted leading-relaxed text-sm">
                AWS IAM hardening, VPC segmentation, WAF configuration, GuardDuty, CloudTrail.
                I&rsquo;ve audited 50+ AWS assets and built tools that find the escalation paths
                scanners miss.
              </p>
            </div>
            <div className="surface p-6">
              <div className="w-8 h-8 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 8h10M7 12h6M7 16h8" />
                </svg>
              </div>
              <h3 className="h-md mb-3">Detection & Response</h3>
              <p className="text-muted leading-relaxed text-sm">
                Splunk and ELK correlation rules, memory forensics with Volatility, threat hunting,
                incident response. I&rsquo;ve handled a live cryptojacking incident from detection
                through eviction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="border-t border-surface-bright/50">
        <div className="wrap py-20 md:py-28 text-center">
          <h2 className="h-lg">Let&rsquo;s work together.</h2>
          <p className="body-lg mt-4 max-w-lg mx-auto">
            I&rsquo;m looking for security engineering roles where I can break things,
            build defenses, and ship tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="btn-fill">Get in touch</Link>
            <a href={`${process.env.BASE_PATH || ''}/resume.pdf`} download className="btn-line">Download resume</a>
          </div>
        </div>
      </section>
    </>
  )
}
