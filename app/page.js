import Link from 'next/link'
import { projects } from '../lib/projects'

export default function Home() {
  const featured = projects.filter(p => ['sentinel-forge', 'aegis', 'domino'].includes(p.id))

  return (
    <>
      <section className="wrap pt-24 pb-20 md:pt-32 md:pb-28 animate-slide-up">
        <p className="label">Level 26 Security Operator</p>
        <h1 className="h-xl glitch-text" data-text="UF0">
          UF0
        </h1>
        <p className="text-accent font-mono uppercase tracking-[0.5em] mt-4 mb-10 text-xs md:text-sm animate-pulse-soft">System.Identity: Goutham Prasanth Pamarthy</p>
        
        <p className="body-lg max-w-3xl mt-6 font-mono leading-relaxed text-zinc-400">
          Building cloud detection and response workflows to neutralize threat actors. 
          Specializing in AWS security architecture and automated vulnerability research.
        </p>
        
        <div className="flex flex-wrap gap-8 mt-16">
          <Link href="/projects" className="btn-fill">Initialize Scan</Link>
          <Link href="/contact" className="btn-line">Establish Uplink</Link>
        </div>
      </section>

      <div className="border-y border-white/5 bg-surface/20 backdrop-blur-md relative overflow-hidden">
        {/* Decorative Grid Accent */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgb(var(--c-accent)) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="wrap py-20 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {[
            { val: '20+', label: 'Campaigns Delivered', border: 'border-accent/40' },
            { val: '40%', label: 'Risk Reduction', border: 'border-neon-blue/30' },
            { val: '6', label: 'Combat Certs', border: 'border-white/20' },
            { val: '50+', label: 'Assets Hardened', border: 'border-accent/40' },
          ].map((s, idx) => (
            <div key={s.val} className={`relative pl-8 border-l-4 ${s.border} animate-slide-up`} style={{ animationDelay: `${idx * 150}ms` }}>
              <p className="num glow-accent text-5xl italic">{s.val}</p>
              <p className="num-label font-mono tracking-widest text-[9px] mt-3 uppercase opacity-60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="wrap py-32 md:py-48">
        <p className="label">Operational Intelligence</p>
        <h2 className="h-lg text-white italic">
          Defensive frameworks built for<br className="hidden md:block" />
          the agentic future.
        </h2>

        <div className="mt-24 space-y-16">
          {featured.map((p, idx) => (
            <Link key={p.id} href={`/projects#${p.id}`} className="block group animate-slide-up" style={{ animationDelay: `${idx * 200}ms` }}>
              <article className={`p-12 md:p-16 border transition-all duration-700 group-hover:translate-x-4 ${
                idx === 0 ? 'surface border-accent/40 group-hover:bg-accent/5' : 'surface border-white/10 group-hover:border-accent/20 group-hover:bg-accent/5'
              }`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-5 mb-6">
                      <h3 className="h-md text-3xl text-white font-mono reveal-text uppercase tracking-widest">{p.title}</h3>
                      <span className="text-[10px] font-mono text-accent border border-accent/40 px-3 py-1 uppercase tracking-[0.2em] bg-accent/10 animate-pulse">ACTIVE_LOG</span>
                    </div>
                    
                    <p className="text-zinc-50 mt-10 text-lg font-medium italic border-l-4 border-accent pl-8 py-2 font-mono bg-white/5">
                      "{p.impact}"
                    </p>

                    <p className="text-zinc-400 mt-8 leading-relaxed text-base font-mono">
                      {p.solution.split('.')[0]}. {p.solution.split('.')[1]}.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-12">
                      {p.stack.split(', ').slice(0, 4).map(tech => (
                        <span key={tech} className="chip bg-transparent border-white/10 text-[10px]">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                    <span className="arrow translate-x-0 group-hover:translate-x-6 transition-transform duration-500 font-bold text-lg">ANALYSIS_REQ</span>
                    <div className="hidden md:flex flex-col items-end gap-3 mt-auto">
                      <p className="text-[10px] text-subtle font-mono uppercase tracking-[0.4em] mb-2 opacity-40">System Telemetry</p>
                      <div className="flex gap-10">
                        {p.metrics.map(m => (
                          <div key={m.label} className="text-right">
                            <p className="text-sm font-bold text-accent font-mono glow-accent italic">{m.val}</p>
                            <p className="text-[9px] text-subtle font-mono uppercase tracking-widest mt-1 opacity-60">{m.label}</p>
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

        <div className="mt-24 text-center">
          <Link href="/projects" className="btn-line px-16 py-6 font-bold group">
            DECRYPT FULL CAMPAIGN LOG
            <span className="inline-block transition-transform group-hover:translate-x-3 ml-4">&gt;&gt;&gt;</span>
          </Link>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-transparent to-accent/5">
        <div className="wrap py-32 md:py-48 max-w-4xl">
          <p className="label">Uplink Status</p>
          <h2 className="h-lg text-white glow-accent italic mb-10">Neural connection established.</h2>
          <p className="text-zinc-400 font-mono text-lg leading-loose max-w-2xl">
            Currently accepting high-fidelity security engineering missions. 
            Ready to exploit infrastructure gaps and neutralize threat actors.
          </p>
          <div className="flex flex-wrap gap-8 mt-16">
            <Link href="/contact" className="btn-fill px-12 py-5">Initiate Deployment</Link>
            <a href={`${process.env.BASE_PATH || ''}/resume.pdf`} download className="btn-line px-12 py-5">Exfiltrate Dossier</a>
          </div>
        </div>
      </section>
    </>
  )
}
