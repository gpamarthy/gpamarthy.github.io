import Link from 'next/link'

export const metadata = {
  title: 'About',
}

function Target() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" />
      <line x1="12" y1="1" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="23" />
      <line x1="1" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="23" y2="12" />
    </svg>
  )
}
function Key() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="10" r="5" /><circle cx="8" cy="10" r="1.5" fill="currentColor" />
      <path d="M13 10h9M18 10v4M22 10v4" />
    </svg>
  )
}
function Cloud() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 19a4 4 0 0 1-.98-7.88A5.5 5.5 0 0 1 16.5 8h.5a5 5 0 0 1 1 9.9" />
      <rect x="9" y="13" width="6" height="7" rx="1" /><path d="M12 15v3" />
    </svg>
  )
}
function Shield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l8 4v6c0 5.25-3.5 8.75-8 10-4.5-1.25-8-4.75-8-10V6l8-4z" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  )
}
function Router() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="12" cy="6" r="2" />
      <path d="M12 8v4M8 16l3-4M16 16l-3-4" />
    </svg>
  )
}
function Lock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  )
}

const certs = [
  { name: 'OSEP', note: '48-hour proctored attack lab. Not multiple choice.', Icon: Target, top: true },
  { name: 'CRTE', note: 'AD exploitation and lateral movement, live lab.', Icon: Key, top: true },
  { name: 'AWS Security Specialty', note: 'Cloud IR, infrastructure protection, IAM.', Icon: Cloud },
  { name: 'CompTIA Security+', note: 'Security foundations.', Icon: Shield },
  { name: 'CCNA', note: 'Routing, switching, network infra.', Icon: Router },
  { name: '(ISC)\u00B2 CC', note: 'Governance and risk.', Icon: Lock },
]

export default function About() {
  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <h1 className="h-lg max-w-xl">About</h1>

      <div className="max-w-2xl mt-10 space-y-5 text-zinc-300 text-sm leading-relaxed">
        <p>
          Security engineer based in College Park, MD. I studied cybersecurity at the University
          of Maryland (M.Eng., 2025) after completing my CS undergrad at GITAM in India.
        </p>
        <p>
          Between school and work, I&rsquo;ve been building offensive security tools, responding to
          real incidents, and hardening cloud infrastructure. At SportsExcitement I run pentests,
          manage WAF and firewall rules, and handled a live cryptojacking incident from detection
          through eviction. Before that, I taught DFIR labs at UMD and built SIEM correlation
          rules at Phoenix Global.
        </p>
        <p>
          My approach: map the attack surface manually first, then run tools. The interesting
          vulnerabilities, the ones that chain into actual compromise, live in the gaps
          between what scanners check.
        </p>
      </div>

      <hr className="rule" />

      {/* Certifications */}
      <section>
        <p className="label">Certifications</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {certs.map(c => (
            <div key={c.name} className={`${c.top ? 'surface-hl' : 'surface'} p-5 flex gap-4`}>
              <div className="cert-icon"><c.Icon /></div>
              <div className="min-w-0">
                <h3 className={`font-semibold text-sm ${c.top ? 'text-accent' : ''}`}>{c.name}</h3>
                <p className="text-subtle text-xs mt-1 leading-relaxed">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* Education.no cards, just text */}
      <section>
        <p className="label">Education</p>
        <div className="space-y-4 max-w-lg">
          <div>
            <h3 className="h-md text-base">M.Eng. in Cybersecurity</h3>
            <p className="text-muted text-sm">University of Maryland, College Park - May 2025</p>
          </div>
          <div>
            <h3 className="h-md text-base">B.Tech. in Computer Science</h3>
            <p className="text-muted text-sm">GITAM, India - Apr 2023</p>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* Skills.intentionally asymmetric */}
      <section>
        <p className="label">Technical Skills</p>

        {/* Offensive gets the most space.it's the strongest area */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3">Offensive Security & Red Team</h3>
          <p className="text-zinc-400 text-sm leading-loose max-w-2xl">
            Penetration testing, AV/EDR evasion, Active Directory exploitation
            (Kerberoasting, AS-REP Roasting, DCSync, Golden/Silver Ticket, RBCD,
            ADCS ESC1-8, Shadow Credentials), payload development,
            process injection (hollowing, early bird), AMSI/CLM/AppLocker bypass,
            direct/indirect syscalls, D/Invoke, LOLBin abuse, PPID spoofing
          </p>
          <p className="text-zinc-400 text-sm leading-loose max-w-2xl mt-3">
            <span className="text-subtle">Tooling:</span> Cobalt Strike, Sliver, Havoc, Burp Suite, Metasploit, BloodHound/SharpHound,
            Neo4j, Impacket, Mimikatz, Rubeus, Certipy, PowerView, Evil-WinRM,
            CrackMapExec, Responder, Nmap, Nessus, Donut, ScareCrow, ffuf,
            SQLMap, Nuclei, Ligolo-ng, Chisel, proxychains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <h3 className="text-sm font-semibold mb-2">Cloud Security</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              AWS (IAM, S3, EC2, Lambda, GuardDuty, CloudTrail, Security Hub, Config,
              Organizations, SCPs, VPC Flow Logs), Azure RBAC, IONOS Cloud,
              Cloudflare (WAF, DDoS, Access), Pacu, Prowler, ScoutSuite,
              enumerate-iam, Terraform, KMS, iptables
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Detection, DFIR & Forensics</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Splunk, ELK, SIEM correlation rules, Sigma/YARA rule authoring,
              Sysmon, Volatility, KAPE, Chainsaw, Hayabusa,
              Eric Zimmerman tools, FTK Imager, Wireshark, CyberChef
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Languages</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Python, C#/.NET, Bash, PowerShell, JavaScript, Ruby, Git, Docker
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Frameworks</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              MITRE ATT&CK, PTES, OWASP Top 10, NIST 800-53, PCI-DSS, HIPAA, GDPR, CMMC
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/attack-map" className="arrow">ATT&CK coverage map</Link>
        </div>
      </section>
    </div>
  )
}
