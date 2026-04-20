'use client'

import { useState } from 'react'

const tactics = [
  {
    name: 'Reconnaissance', id: 'TA0043',
    techniques: [
      { id: 'T1595', name: 'Active Scanning', evidence: 'Nmap, Nessus, Nikto' },
      { id: 'T1589', name: 'Gather Victim Identity Info', evidence: 'OSINT, LinkedIn recon, email harvesting' },
    ],
  },
  {
    name: 'Initial Access', id: 'TA0001',
    techniques: [
      { id: 'T1566', name: 'Phishing', evidence: 'OSEP:macro payloads, HTA delivery' },
      { id: 'T1190', name: 'Exploit Public-Facing Application', evidence: '20+ web app/API pentests:IDOR, XSS, auth bypass' },
    ],
  },
  {
    name: 'Execution', id: 'TA0002',
    techniques: [
      { id: 'T1059.001', name: 'PowerShell', evidence: 'MalForge output, OSEP, post-exploitation' },
      { id: 'T1059.003', name: 'Windows Command Shell', evidence: 'Payload execution, lateral movement' },
      { id: 'T1047', name: 'WMI', evidence: 'OSEP:lateral movement via DCOM/WMI' },
      { id: 'T1204', name: 'User Execution', evidence: 'Phishing payload delivery chains' },
    ],
  },
  {
    name: 'Persistence', id: 'TA0003',
    techniques: [
      { id: 'T1053', name: 'Scheduled Task/Job', evidence: 'Cryptojacking IR:attacker used cron persistence' },
      { id: 'T1078', name: 'Valid Accounts', evidence: 'IAM abuse, AD credential compromise' },
      { id: 'T1547', name: 'Boot/Logon Autostart', evidence: 'OSEP persistence mechanisms' },
    ],
  },
  {
    name: 'Privilege Escalation', id: 'TA0004',
    techniques: [
      { id: 'T1134', name: 'Access Token Manipulation', evidence: 'OSEP:token impersonation' },
      { id: 'T1068', name: 'Exploitation for Privilege Escalation', evidence: 'Web app and infra pentests' },
      { id: 'T1558', name: 'Steal/Forge Kerberos Tickets', evidence: 'CRTE:Kerberoasting, Golden/Silver Ticket' },
      { id: 'T1484', name: 'Domain Policy Modification', evidence: 'CRTE:ADCS abuse (ESC1-8)' },
    ],
  },
  {
    name: 'Defense Evasion', id: 'TA0005',
    techniques: [
      { id: 'T1562', name: 'Impair Defenses', evidence: 'MalForge:AMSI/ETW patching at runtime' },
      { id: 'T1055', name: 'Process Injection', evidence: 'MalForge:process hollowing, OSEP injection variants' },
      { id: 'T1027', name: 'Obfuscated Files/Information', evidence: 'MalForge:stackable XOR/AES/RC4/Caesar encryption' },
      { id: 'T1036', name: 'Masquerading', evidence: 'Namespace/class randomization per build' },
      { id: 'T1218', name: 'System Binary Proxy Execution', evidence: 'MalForge:MSBuild, InstallUtil, rundll32, regsvr32' },
      { id: 'T1070', name: 'Indicator Removal', evidence: 'Log cleanup, anti-forensics awareness' },
    ],
  },
  {
    name: 'Credential Access', id: 'TA0006',
    techniques: [
      { id: 'T1003', name: 'OS Credential Dumping', evidence: 'Mimikatz, Impacket secretsdump, DCSync' },
      { id: 'T1558', name: 'Steal/Forge Kerberos Tickets', evidence: 'CRTE:Kerberoasting, AS-REP, delegation abuse' },
      { id: 'T1552', name: 'Unsecured Credentials', evidence: 'AWS IAM key auditing, LAPS, GPP passwords' },
      { id: 'T1649', name: 'Steal/Forge Auth Certificates', evidence: 'CRTE:Certipy, ADCS ESC1-8' },
    ],
  },
  {
    name: 'Discovery', id: 'TA0007',
    techniques: [
      { id: 'T1087', name: 'Account Discovery', evidence: 'BloodHound/SharpHound, AD enumeration' },
      { id: 'T1482', name: 'Domain Trust Discovery', evidence: 'CRTE:cross-forest trust mapping' },
      { id: 'T1046', name: 'Network Service Discovery', evidence: 'Nmap, service enumeration' },
      { id: 'T1069', name: 'Permission Groups Discovery', evidence: 'BloodHound, PowerView, IAM policy analysis' },
    ],
  },
  {
    name: 'Lateral Movement', id: 'TA0008',
    techniques: [
      { id: 'T1021', name: 'Remote Services', evidence: 'WinRM, PsExec, Evil-WinRM, RDP, SSH' },
      { id: 'T1550', name: 'Use Alternate Auth Material', evidence: 'Pass-the-Hash, Pass-the-Ticket, RBCD' },
      { id: 'T1570', name: 'Lateral Tool Transfer', evidence: 'Payload staging, C2 beacon deployment' },
    ],
  },
  {
    name: 'Command & Control', id: 'TA0011',
    techniques: [
      { id: 'T1071', name: 'Application Layer Protocol', evidence: 'Cobalt Strike, Sliver:HTTP/S, DNS' },
      { id: 'T1572', name: 'Protocol Tunneling', evidence: 'Ligolo-ng, Chisel, SSH dynamic forwarding' },
      { id: 'T1573', name: 'Encrypted Channel', evidence: 'C2 encrypted comms, TLS implants' },
    ],
  },
  {
    name: 'Exfiltration', id: 'TA0010',
    techniques: [
      { id: 'T1041', name: 'Exfiltration Over C2', evidence: 'Standard C2 data exfiltration' },
      { id: 'T1567', name: 'Exfiltration Over Web Service', evidence: 'Cloud exfiltration paths (S3, Lambda)' },
    ],
  },
  {
    name: 'Impact', id: 'TA0040',
    techniques: [
      { id: 'T1496', name: 'Resource Hijacking', evidence: 'Responded to live cryptojacking attack' },
    ],
  },
]

function heat(n) {
  if (n >= 5) return 'bg-accent/25 border-accent/40'
  if (n >= 3) return 'bg-accent/15 border-accent/30'
  return 'bg-accent/8 border-accent/20'
}

export default function AttackMap() {
  const [expanded, setExpanded] = useState([])
  const total = tactics.reduce((s, t) => s + t.techniques.length, 0)

  function toggle(id) {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter(x => x !== id))
    } else {
      setExpanded([...expanded, id])
    }
  }

  return (
    <div className="wrap pt-24 pb-20 md:pt-32">
      <h1 className="h-lg">ATT&CK Coverage</h1>
      <div className="flex flex-wrap items-center gap-6 mt-12">
        <div className="flex gap-4">
          <button
            onClick={() => setExpanded(tactics.map(t => t.id))}
            className="text-[10px] font-mono uppercase tracking-widest text-accent hover:underline"
          >
            Expand All
          </button>
          <button
            onClick={() => setExpanded([])}
            className="text-[10px] font-mono uppercase tracking-widest text-muted hover:text-white"
          >
            Collapse All
          </button>
        </div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-subtle ml-auto">
          {total} techniques across {tactics.length} tactics
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6">
        {tactics.map(tactic => {
          const open = expanded.includes(tactic.id)
          return (
            <div key={tactic.id}>
              <button
                onClick={() => toggle(tactic.id)}
                className={`w-full text-left p-4 rounded border transition-all ${heat(tactic.techniques.length)} ${
                  open ? 'ring-1 ring-accent/50' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs text-muted">{tactic.id}</p>
                    <h3 className="font-semibold text-sm mt-0.5">{tactic.name}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-accent font-bold">{tactic.techniques.length}</span>
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      className={`text-muted transition-transform ${open ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </button>
              {open && (
                <div className="mt-1 p-4 bg-surface rounded border border-surface-bright space-y-3">
                  {tactic.techniques.map(tech => (
                    <div key={tech.id} className="text-sm">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-accent shrink-0">{tech.id}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <p className="text-muted text-xs mt-1 ml-[3.5rem]">{tech.evidence}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-6 text-xs text-muted">
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-accent/8 border border-accent/20"></span> 1-2</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-accent/15 border border-accent/30"></span> 3-4</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-accent/25 border border-accent/40"></span> 5+</span>
        <span className="text-subtle ml-auto">MITRE ATT&CK v15</span>
      </div>
    </div>
  )
}
