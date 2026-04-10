import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="wrap pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="label">Security Engineer</p>
        <h1 className="h-xl max-w-4xl">
          Goutham Prasanth<br />Pamarthy
        </h1>
        <p className="body-lg max-w-3xl mt-6">
          I find the attack paths your scanner missed. OSEP and CRTE certified.
          Both require passing live proctored attack labs, not a multiple-choice exam.
          I build offensive security tools, harden cloud infrastructure, and respond to incidents.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/projects" className="btn-fill">View my work</Link>
          <Link href="/contact" className="btn-line">Get in touch</Link>
        </div>
      </section>

      <div className="border-y border-surface-bright/50 bg-surface/30">
        <div className="wrap py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: '20+', label: 'Penetration tests delivered', border: 'border-accent/40' },
            { val: '40%', label: 'Critical vuln reduction', border: 'border-accent/30' },
            { val: '6', label: 'Industry certifications', border: 'border-accent/50' },
            { val: '50+', label: 'AWS assets audited', border: 'border-accent/40' },
          ].map(s => (
            <div key={s.val} className={`relative pl-4 border-l-2 ${s.border}`}>
              <p className="num">{s.val}</p>
              <p className="num-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

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
                <div className="max-w-2xl">
                  <h3 className="h-md text-xl mb-1">Domino</h3>
                  <p className="text-muted text-sm">AWS IAM Privilege Escalation Path Prover</p>
                  <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
                    Prowler tells you 200 individual misconfigs exist. Domino tells you which 5
                    chain into actual account compromise, and shows you the exact path.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="chip">Python</span>
                    <span className="chip">networkx</span>
                    <span className="chip">boto3</span>
                  </div>
                </div>
                <span className="arrow shrink-0 mt-2">Read more</span>
              </div>
            </article>
          </Link>

          {/* different layout for secondary projects */}
          <Link href="/projects#malforge" className="block group">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 px-2 border-b border-surface-bright/50 hover:border-accent/20 transition-colors">
              <div className="md:w-48 shrink-0 flex items-center gap-3">
                <svg className="text-accent shrink-0" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v4M4 10l2.5 2M19.5 10L17 12"/>
                  <rect x="6" y="10" width="12" height="10" rx="2"/>
                  <path d="M10 15h4"/>
                </svg>
                <div>
                  <h3 className="h-md">MalForge</h3>
                  <p className="text-muted text-xs mt-0.5">2025</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm flex-1">
                Multi-format payload generator with AV/EDR evasion.
                9 output formats, stackable encryption, AMSI/ETW patching. Every build is unique.
              </p>
              <span className="arrow shrink-0">Details</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-t border-surface-bright/50">
        <div className="wrap py-20 md:py-28 max-w-2xl">
          <h2 className="h-lg">Let&rsquo;s work together.</h2>
          <p className="text-muted mt-4">
            Looking for security engineering roles where I can break things,
            build defenses, and ship tools. Remote or on-site.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-fill">Get in touch</Link>
            <a href={`${process.env.BASE_PATH || ''}/resume.pdf`} download className="btn-line">Download resume</a>
          </div>
        </div>
      </section>
    </>
  )
}
