import Link from 'next/link'
import { projects } from '../lib/projects'

export default function Home() {
  const featured = projects.filter(p => ['sentinel-forge', 'aegis', 'domino'].includes(p.id))

  return (
    <>
      <section className="wrap pt-24 pb-20 md:pt-32 md:pb-28 animate-slide-up">
        <p className="label">Level 26 Security Operator</p>
        <h1 className="h-xl max-w-4xl text-white glow-accent">
          UF0
        </h1>
        <p className="text-accent font-mono uppercase tracking-[0.3em] mt-2 mb-8">System.Identity: Goutham Prasanth Pamarthy</p>
        
        <p className="body-lg max-w-3xl mt-6 font-mono leading-relaxed">
          I build cloud detection and response workflows that help teams understand what happened,
          why it matters, and what to do next. My work sits at the intersection of AWS security,
          incident response, and automated vulnerability research.
        </p>
        
        <div className="flex flex-wrap gap-6 mt-12">
          <Link href="/projects" className="btn-fill hover-glitch">Initialize Scan</Link>
          <Link href="/contact" className="btn-line">Establish Uplink</Link>
        </div>
      </section>

      <div className="border-y border-surface-bright/50 bg-surface/30 backdrop-blur-sm">
        <div className="wrap py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { val: '20+', label: 'Campaigns Delivered', border: 'border-accent/40' },
            { val: '40%', label: 'Risk Reduction', border: 'border-neon-blue/30' },
            { val: '6', label: 'Combat Certs', border: 'border-white/20' },
            { val: '50+', label: 'Assets Hardened', border: 'border-accent/40' },
          ].map((s, idx) => (
            <div key={s.val} className={`relative pl-6 border-l-4 ${s.border} animate-slide-up`} style={{ animationDelay: `${idx * 100}ms` }}>
              <p className="num glow-accent text-4xl">{s.val}</p>
              <p className="num-label font-mono tracking-tighter text-[10px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="wrap py-24 md:py-32">
        <p className="label">Operational Intelligence</p>
        <h2 className="h-lg text-white">
          Defensive frameworks built for<br className="hidden md:block" />
          the agentic future.
        </h2>

        <div className="mt-20 space-y-12">
          {featured.map((p, idx) => (
            <Link key={p.id} href={`/projects#${p.id}`} className="block group animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <article className={`p-10 md:p-14 border-l-4 transition-all duration-500 group-hover:pl-20 ${
                idx === 0 ? 'surface-hl border-l-accent group-hover:bg-surface-hl/80' : 'surface border-l-accent/40 group-hover:bg-surface-hl/30'
              }`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="h-md text-2xl text-white font-mono reveal-text uppercase tracking-widest">{p.title}</h3>
                      <span className="text-[9px] font-mono text-accent border border-accent/40 px-2 py-0.5 uppercase tracking-widest animate-pulse-soft bg-accent/5">Active</span>
                    </div>
                    
                    <p className="text-zinc-50 mt-8 text-base font-medium italic border-l-2 border-accent/30 pl-6 py-1 font-mono">
                      "{p.impact}"
                    </p>

                    <p className="text-zinc-400 mt-6 leading-relaxed text-sm font-mono">
                      {p.solution.split('.')[0]}. {p.solution.split('.')[1]}.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-10">
                      {p.stack.split(', ').slice(0, 4).map(tech => (
                        <span key={tech} className="chip bg-transparent border-surface-bright text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                    <span className="arrow translate-x-0 group-hover:translate-x-4 transition-transform duration-500 font-bold">ANALYSIS</span>
                    <div className="hidden md:flex flex-col items-end gap-2 mt-auto">
                      <p className="text-[9px] text-subtle font-mono uppercase tracking-[0.3em] mb-1">System Metrics</p>
                      <div className="flex gap-6">
                        {p.metrics.map(m => (
                          <div key={m.label} className="text-right">
                            <p className="text-xs font-bold text-accent font-mono glow-accent">{m.val}</p>
                            <p className="text-[8px] text-subtle font-mono uppercase tracking-widest">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/projects" className="btn-line group px-12 py-5 font-bold">
            VIEW FULL CAMPAIGN LOG
            <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">>></span>
          </Link>
        </div>
      </section>

      <section className="border-t border-surface-bright/30 bg-surface/10">
        <div className="wrap py-24 md:py-32 max-w-3xl">
          <p className="label">Uplink</p>
          <h2 className="h-lg text-white glow-accent italic">Ready for recruitment.</h2>
          <p className="text-muted mt-6 font-mono text-base leading-relaxed">
            Looking for security engineering roles where I can exploit infrastructure gaps,
            ship defensive automation, and neutralize threat actors before they land.
          </p>
          <div className="flex flex-wrap gap-6 mt-12">
            <Link href="/contact" className="btn-fill">Deploy Now</Link>
            <a href={`${process.env.BASE_PATH || ''}/resume.pdf`} download className="btn-line">Download Dossier</a>
          </div>
        </div>
      </section>
    </>
  )
}
