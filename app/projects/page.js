import Terminal from '../../components/terminal'

export const metadata = {
  title: 'Projects',
  description: 'Domino: AWS IAM privilege escalation path prover. MalForge: multi-format payload generator with AV/EDR evasion.',
}

const dominoLines = [
  '<span class="text-zinc-500">[*]</span> Loading IAM snapshot: prod-account.json',
  '<span class="text-zinc-500">[*]</span> Building principal-resource graph: 47 nodes, 183 edges',
  '<span class="text-zinc-500">[*]</span> Running tactic matching against 12 attack patterns...',
  '&nbsp;',
  '<span class="text-red-400">Path 1</span> | Severity: <span class="text-red-400 font-bold">CRITICAL</span> (score: 9.2)',
  '  dev-lambda-role',
  '    <span class="text-zinc-600">→</span> iam:PassRole <span class="text-zinc-600">→</span> prod-admin-role',
  '    <span class="text-zinc-600">→</span> lambda:UpdateFunctionCode <span class="text-zinc-600">→</span> data-exfil-lambda',
  '    <span class="text-zinc-600">→</span> sts:AssumeRole <span class="text-zinc-600">→</span> prod-admin-role',
  '  Tactics: PassRole+Lambda, Lambda code hijack',
  '&nbsp;',
  '<span class="text-yellow-500">Path 2</span> | Severity: <span class="text-yellow-500 font-bold">HIGH</span> (score: 7.8)',
  '  readonly-user',
  '    <span class="text-zinc-600">→</span> iam:CreatePolicyVersion <span class="text-zinc-600">→</span> self-escalation',
  '    <span class="text-zinc-600">→</span> iam:AttachUserPolicy <span class="text-zinc-600">→</span> AdministratorAccess',
  '  Tactics: IAM self-escalation, Policy version rollback',
  '&nbsp;',
  '<span class="text-green-500">[+]</span> Scan complete: 2 exploitable paths found across 47 principals',
]

const malforgeLines = [
  '<span class="text-red-400">[*]</span> Loading shellcode: shell.bin (510 bytes)',
  '<span class="text-red-400">[*]</span> Applying encryption chain: XOR → AES-256-CBC',
  '<span class="text-red-400">[*]</span> Generating decryption stub (auto-reversed)',
  '<span class="text-red-400">[*]</span> Patching AMSI: AmsiScanBuffer → NOP',
  '<span class="text-red-400">[*]</span> Patching ETW: EtwEventWrite → RET',
  '<span class="text-red-400">[*]</span> Memory: VirtualAlloc(RW) → VirtualProtect(RX)',
  '<span class="text-red-400">[*]</span> Randomizing namespace: Kx9mVpL2.Tn4wRjQ8',
  '<span class="text-green-500">[+]</span> Output: payload_a7f2c1.exe (48 KB)',
  '<span class="text-green-500">[+]</span> SHA256: 9e1d...f4a2 (unique per build)',
]

export default function Projects() {
  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <h1 className="h-lg max-w-xl">Projects</h1>
      <p className="text-muted text-sm mt-3 max-w-lg">Tools I built to solve problems I kept running into.</p>

      {/* Domino - full case study with sidebar */}
      <article id="domino" className="mt-16 scroll-mt-24">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="font-display text-3xl md:text-4xl">Domino</h2>
          <span className="text-muted text-sm font-mono">2026</span>
        </div>
        <p className="text-accent text-sm mt-2 font-medium font-mono">AWS IAM Privilege Escalation Path Prover</p>

        <div className="grid md:grid-cols-5 gap-12 mt-10">
          <div className="md:col-span-3 space-y-8">
            <div>
              <h3 className="h-md mb-3">The problem</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Prowler and ScoutSuite flag 200 individual IAM misconfigurations. None of them
                tell you which findings chain together into an actual compromise path. You&rsquo;re left
                scrolling through a spreadsheet, guessing which misconfigs matter.
              </p>
            </div>
            <div>
              <h3 className="h-md mb-3">What Domino does</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Takes an IAM snapshot or pulls live credentials, models every principal and resource
                as a networkx MultiDiGraph, then finds all paths to admin targets. Matches chains
                against 12 built-in attack tactics, scoring each by tactic severity and hop difficulty.
              </p>
            </div>
            <div>
              <h3 className="h-md mb-3">Attack tactics covered</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-zinc-400">
                <span className="dash text-xs">PassRole + Lambda</span>
                <span className="dash text-xs">IMDS credential theft</span>
                <span className="dash text-xs">Confused Deputy via S3</span>
                <span className="dash text-xs">IAM self-escalation</span>
                <span className="dash text-xs">Lambda code hijack</span>
                <span className="dash text-xs">Cross-account assume</span>
                <span className="dash text-xs">STS session chaining</span>
                <span className="dash text-xs">Policy version rollback</span>
              </div>
            </div>
          </div>
          <aside className="md:col-span-2">
            <div className="surface p-6 space-y-5 sticky top-24">
              <div>
                <p className="text-xs text-subtle uppercase tracking-wider mb-1 font-mono">Stack</p>
                <p className="text-sm text-zinc-300">Python, networkx, boto3</p>
              </div>
              <div>
                <p className="text-xs text-subtle uppercase tracking-wider mb-1 font-mono">Input</p>
                <p className="text-sm text-zinc-300">IAM snapshot JSON or live AWS credentials</p>
              </div>
              <div>
                <p className="text-xs text-subtle uppercase tracking-wider mb-1 font-mono">Output</p>
                <p className="text-sm text-zinc-300">Ranked escalation paths with tactic labels, severity scores, hop-by-hop detail</p>
              </div>
              <a href="https://github.com/gpamarthy/domino" target="_blank" rel="noreferrer" className="arrow block pt-2">
                View on GitHub
              </a>
            </div>
          </aside>
        </div>

        <Terminal prompt="$ domino scan --profile prod --output table" lines={dominoLines} speed={70} />
      </article>

      <hr className="rule my-20" />

      {/* MalForge - full-width, no sidebar */}
      <article id="malforge" className="scroll-mt-24">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="font-display text-3xl md:text-4xl">MalForge</h2>
          <span className="text-muted text-sm font-mono">2025</span>
        </div>
        <p className="text-accent text-sm mt-2 font-medium font-mono">Multi-Format Payload Generator with AV/EDR Evasion</p>

        <div className="max-w-2xl mt-10 space-y-8">
          <p className="text-zinc-300 text-sm leading-relaxed">
            Takes raw shellcode or generates it via msfvenom, runs it through stackable
            encryption layers (XOR, AES-256-CBC, RC4, Caesar in any order, auto-reversed at
            runtime) and outputs across 9 formats. Each build produces unique artifacts.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="h-md mb-3">Evasion stack</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="dash">RW alloc, then RX flip. Never RWX</li>
                <li className="dash">Runtime AMSI and ETW patching</li>
                <li className="dash">Sandbox detection</li>
                <li className="dash">Namespace randomization per build</li>
              </ul>
            </div>
            <div>
              <h3 className="h-md mb-3">Details</h3>
              <p className="text-xs text-subtle uppercase tracking-wider mb-1 font-mono">Stack</p>
              <p className="text-sm text-zinc-300 mb-3">Python, C#, PowerShell</p>
              <p className="text-xs text-subtle uppercase tracking-wider mb-1 font-mono">Encryption</p>
              <p className="text-sm text-zinc-300 mb-3">XOR, AES-256-CBC, RC4, Caesar (stackable)</p>
              <a href="https://github.com/gpamarthy/malforge" target="_blank" rel="noreferrer" className="arrow block pt-1">
                View on GitHub
              </a>
            </div>
          </div>

          <div>
            <h3 className="h-md mb-3">Output formats</h3>
            <div className="flex flex-wrap gap-2">
              {['C# EXE', 'Process Hollowing', 'DLL', 'VBA Macro', 'HTA', 'PowerShell', 'JScript', 'MSBuild', 'InstallUtil'].map(f => (
                <span key={f} className="chip">{f}</span>
              ))}
            </div>
          </div>
        </div>

        <Terminal prompt="$ malforge --input shell.bin --encrypt xor,aes --format exe" lines={malforgeLines} speed={90} />
      </article>
    </div>
  )
}
