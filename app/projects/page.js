import Terminal from '../../components/terminal'
import { projects } from '../../lib/projects'

export const metadata = {
  title: 'Projects',
  description: 'Security engineering projects: Sentinel Forge, Aegis, Domino, Malforge, and Huntkit.',
  alternates: { canonical: '/projects/' },
}

export default function Projects() {
  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <h1 className="h-lg max-w-xl animate-slide-up">Projects</h1>
      <p className="label animate-slide-up">Active Campaigns</p>
      <p className="text-muted text-sm mt-3 max-w-lg animate-slide-up font-mono uppercase tracking-widest">
        Automated offensive and defensive tooling designed to exploit gaps and harden infrastructure.
      </p>

      <div className="mt-16 space-y-32">
        {projects.map((project, index) => (
          <article key={project.id} id={project.id} className="scroll-mt-24 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-10">
              <h2 className="font-display text-4xl md:text-5xl text-white glow-accent">{project.title}</h2>
              <span className="text-accent text-sm font-mono border border-accent/30 px-2 py-0.5 bg-accent/5">{project.year}</span>
              <p className="text-subtle text-xs font-mono uppercase tracking-[0.2em] w-full mt-2">{project.tagline}</p>
            </div>

            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3 space-y-10">
                <div className="relative p-6 bg-surface/30 border border-accent/20 border-l-4 border-l-accent">
                  <h3 className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] mb-3">Mission Impact</h3>
                  <p className="text-zinc-100 text-lg font-medium leading-relaxed font-mono">
                    "{project.impact}"
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="h-md text-white font-mono uppercase tracking-widest text-sm border-b border-surface-bright pb-2">Analysis</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="h-md text-white font-mono uppercase tracking-widest text-sm border-b border-surface-bright pb-2">Technical Solution</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="h-md text-white font-mono uppercase tracking-widest text-sm border-b border-surface-bright pb-2">Key Tactics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {project.features.map(feature => (
                      <span key={feature} className="dash text-zinc-400">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="md:col-span-2">
                <div className="surface p-8 space-y-8 sticky top-24 glass-surface">
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map(m => (
                      <div key={m.label} className="text-center">
                        <p className="text-[9px] text-subtle uppercase tracking-widest font-mono mb-1">{m.label}</p>
                        <p className="text-xs font-bold text-accent font-mono glow-accent">{m.val}</p>
                      </div>
                    ))}
                  </div>
                  
                  <hr className="border-surface-bright/50" />
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] text-subtle uppercase tracking-[0.2em] mb-2 font-mono">System Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.split(', ').map(tech => (
                          <span key={tech} className="chip bg-transparent">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] text-subtle uppercase tracking-[0.2em] mb-1 font-mono">Core Focus</p>
                      <p className="text-sm text-zinc-300 font-mono italic">{project.focus}</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-subtle uppercase tracking-[0.2em] mb-1 font-mono">Operational Output</p>
                      <p className="text-sm text-zinc-300 font-mono">{project.output}</p>
                    </div>
                  </div>

                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-fill w-full justify-center">
                    Access Source
                  </a>
                </div>
              </aside>
            </div>

            <div className="mt-16 border-t-2 border-accent/20 pt-2">
               <Terminal prompt={project.terminal.prompt} lines={project.terminal.lines} speed={50} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
