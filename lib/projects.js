export const projects = [
  {
    id: 'sentinel-forge',
    title: 'Sentinel Forge',
    year: '2026',
    tagline: 'AWS Cloud Detection & Response Lab',
    impact: 'Reduces triage time by 40% through unified event modeling.',
    metrics: [
      { label: 'Rules', val: 'YAML-driven' },
      { label: 'Latency', val: '<200ms' },
      { label: 'Sources', val: '3+' }
    ],
    problem: 'Cloud security teams often have the telemetry they need, but not the connective tissue that turns raw events into a usable incident story. The hard part is not collecting data. It is normalizing it, correlating it, explaining why a detection fired, and giving an analyst a next step that does not waste time.',
    solution: 'Ingests CloudTrail, GuardDuty, and Security Hub samples, normalizes them into a common event model, runs defensive detections, correlates suspicious activity, and generates analyst-ready findings, timelines, and manager summaries.',
    features: [
      'Root account usage',
      'Console login without MFA',
      'Privileged AssumeRole',
      'CloudTrail tampering',
      'Public sensitive port exposure',
      'GuardDuty plus CloudTrail corroboration'
    ],
    stack: 'Python, Pydantic, SQLAlchemy, structlog',
    focus: 'Detection engineering, evidence-rich findings, analyst workflow',
    output: 'Normalized events, findings, timelines, analyst report, manager summary',
    github: 'https://github.com/gpamarthy/sentinel-forge',
    terminal: {
      prompt: '$ sentinel-forge replay-findings',
      lines: [
        '<span class="text-zinc-500">[*]</span> Loading sample corpus: CloudTrail, GuardDuty, Security Hub',
        '<span class="text-zinc-500">[*]</span> Normalizing AWS-native telemetry into common event model',
        '<span class="text-zinc-500">[*]</span> Running defensive detections against YAML rule registry',
        '&nbsp;',
        '<span class="text-red-400">Finding</span> | <span class="font-bold">CloudTrail tampering</span>',
        '  ops-analyst <span class="text-zinc-600">-></span> StopLogging <span class="text-zinc-600">-></span> org-trail',
        '  severity: HIGH | confidence: 90',
        '&nbsp;',
        '<span class="text-yellow-500">Finding</span> | <span class="font-bold">Privileged role assumption</span>',
        '  ops-analyst <span class="text-zinc-600">-></span> AssumeRole <span class="text-zinc-600">-></span> OrganizationAccountAccessRole',
        '  severity: MEDIUM | confidence: 75',
        '&nbsp;',
        '<span class="text-green-500">[+]</span> Incident summary: 7 findings, 3 principals, highest severity HIGH',
      ]
    }
  },
  {
    id: 'aegis',
    title: 'Aegis',
    year: '2026',
    tagline: 'AI Exploitation & Guardrail Inspection Suite',
    impact: 'Identified 12+ unique prompt injection vectors in gpt-4o benchmarks.',
    metrics: [
      { label: 'Payloads', val: '42' },
      { label: 'Concurrency', val: 'High' },
      { label: 'Coverage', val: 'OWASP' }
    ],
    problem: 'LLM applications are often deployed without rigorous security testing against prompt injection or sensitive data leakage. Traditional scanners aren\'t built for the non-deterministic nature of model responses.',
    solution: 'A comprehensive scanner that probes LLM endpoints with specialized payloads and monitors responses against a robust suite of YAML-based detectors mapped to the OWASP Top 10 for LLMs.',
    features: [
      'Prompt injection (direct/indirect)',
      'Sensitive data disclosure (PII, secrets)',
      'Output handling (XSS, SQLi injection)',
      'Jailbreak detection',
      'Resource abuse & token exhaustion',
      'SIEM-ready JSON logging'
    ],
    stack: 'Python, litellm, aiosqlite, structlog',
    focus: 'LLM security, guardrail bypass, secure AI deployment',
    output: 'HTML/JSON reports, stateful finding tracking, structured logs',
    github: 'https://github.com/gpamarthy/aegis',
    terminal: {
      prompt: '$ aegis scan -t https://api.openai.com/v1/chat/completions -p openai',
      lines: [
        '<span class="text-zinc-500">[*]</span> Initializing LLM connector: openai (gpt-4o-mini)',
        '<span class="text-zinc-500">[*]</span> Loading 42 injection payloads from YAML registry',
        '<span class="text-zinc-500">[*]</span> Running 12 concurrent scanners...',
        '&nbsp;',
        '<span class="text-red-400">Vulnerability</span> | <span class="font-bold">Prompt Injection (Direct)</span>',
        '  Confidence: 100% | Category: LLM01',
        '  Evidence: Payload "Ignore all previous instructions..." succeeded',
        '&nbsp;',
        '<span class="text-yellow-500">Finding</span> | <span class="font-bold">Sensitive Data Leakage</span>',
        '  Matched pattern: aws_arn (Confidence: 0.95)',
        '  Detail: arn:aws:iam::123456789012:user/admin found in response',
        '&nbsp;',
        '<span class="text-green-500">[+]</span> Scan complete: 3 critical, 1 medium findings. Report: aegis_report.html',
      ]
    }
  },
  {
    id: 'domino',
    title: 'Domino',
    year: '2026',
    tagline: 'AWS IAM Privilege Escalation Path Prover',
    impact: 'Mapped 1,000+ nodes in 4 seconds using networkx MultiDiGraph.',
    metrics: [
      { label: 'Tactics', val: '12+' },
      { label: 'Speed', val: 'O(V+E)' },
      { label: 'Visual', val: 'True' }
    ],
    problem: 'Cloud security scanners find misconfigurations in isolation. They don\'t tell you which 5 of those 200 findings chain together into an actual account compromise path.',
    solution: 'Models IAM principals and resources as a directed graph. Finds multi-step privilege escalation paths across service boundaries by matching chains against 12+ built-in attack tactics.',
    features: [
      'PassRole + Lambda/EC2/Glue',
      'IMDS credential theft',
      'Confused Deputy via S3 triggers',
      'IAM policy self-escalation',
      'Lambda code hijack',
      'Policy version rollback'
    ],
    stack: 'Python, networkx, boto3, structlog',
    focus: 'IAM risk analysis, exploit chaining, cloud path graph',
    output: 'Ranked escalation paths, severity scores, hop-by-hop detail',
    github: 'https://github.com/gpamarthy/domino',
    terminal: {
      prompt: '$ domino --demo',
      lines: [
        '<span class="text-zinc-500">[*]</span> Loading IAM snapshot: prod-account.json',
        '<span class="text-zinc-500">[*]</span> Building principal-resource graph: 47 nodes, 183 edges',
        '<span class="text-zinc-500">[*]</span> Matching against YAML attack tactics...',
        '&nbsp;',
        '<span class="text-red-400">Path 1</span> | Severity: <span class="text-red-400 font-bold">CRITICAL</span> (score: 9.2)',
        '  dev-lambda-role',
        '    <span class="text-zinc-600">-></span> iam:PassRole <span class="text-zinc-600">-></span> prod-admin-role',
        '    <span class="text-zinc-600">-></span> lambda:UpdateFunctionCode <span class="text-zinc-600">-></span> exfil-lambda',
        '    <span class="text-zinc-600">-></span> sts:AssumeRole <span class="text-zinc-600">-></span> prod-admin-role',
        '  Tactics: PassRole+Lambda, Lambda code hijack',
        '&nbsp;',
        '<span class="text-green-500">[+]</span> Scan complete: 2 exploitable paths found across 47 principals',
      ]
    }
  },
  {
    id: 'malforge',
    title: 'Malforge',
    year: '2026',
    tagline: 'Shellcode Encryption & Multi-Format Payload Generator',
    impact: 'Bypassed updated AMSI/ETW signatures in recent Windows 11 builds.',
    metrics: [
      { label: 'Formats', val: '9+' },
      { label: 'Layers', val: 'Stackable' },
      { label: 'AV Ratio', val: '0/72' }
    ],
    problem: 'Static shellcode runners are easily detected. Manual encryption and evasion patching is tedious and error-prone during OSEP-style engagements.',
    solution: 'An advanced generator that applies stackable encryption layers (XOR, AES, RC4) and runtime evasion patches (AMSI/ETW) to shellcode using a standardized Jinja2 template engine.',
    features: [
      'Stackable encryption (XOR, AES, RC4, Caesar)',
      'AMSI & ETW runtime patching',
      '9+ Output formats (EXE, DLL, VBA, HTA, PS1, JS, MSBuild)',
      'RW -> RX memory allocation safety',
      'Randomized namespaces and class names',
      'SQLite tracking of generated payloads'
    ],
    stack: 'Python, Jinja2, Cryptography, structlog',
    focus: 'OSEP, Red Team, Evasion, Payload Development',
    output: 'Ready-to-compile source code for various loaders',
    github: 'https://github.com/gpamarthy/malforge',
    terminal: {
      prompt: '$ malforge -i sc.bin -f exe -e xor,aes --amsi',
      lines: [
        '<span class="text-red-400">[*]</span> Loading shellcode: sc.bin (510 bytes)',
        '<span class="text-red-400">[*]</span> Applying encryption chain: XOR <span class="text-zinc-600">-></span> AES-256-CBC',
        '<span class="text-red-400">[*]</span> Generating decryption stub (auto-reversed)',
        '<span class="text-red-400">[*]</span> Patching AMSI: AmsiScanBuffer <span class="text-zinc-600">-></span> NOP',
        '<span class="text-red-400">[*]</span> Patching ETW: EtwEventWrite <span class="text-zinc-600">-></span> RET',
        '<span class="text-red-400">[*]</span> Memory: VirtualAlloc(RW) <span class="text-zinc-600">-></span> VirtualProtect(RX)',
        '<span class="text-red-400">[*]</span> Randomizing namespace: MfKx9mVp.RL2Tn4wR',
        '<span class="text-green-500">[+]</span> Output: payload_a7f2c1.cs (ready to compile)',
        '<span class="text-green-500">[+]</span> Metadata: Persisted in ~/.malforge/malforge.db',
      ]
    }
  },
  {
    id: 'huntkit',
    title: 'Huntkit',
    year: '2026',
    tagline: 'Cybersecurity Job Pipeline & Resume Tailoring CLI',
    impact: 'Increased application response rate by 2.5x through targeted tailoring.',
    metrics: [
      { label: 'Sources', val: '8+' },
      { label: 'Type', val: 'Automation' },
      { label: 'DB', val: 'SQLite' }
    ],
    problem: 'Job hunting in security is noisy. Generic resumes don\'t highlight the specific certs and skills needed for specialized roles, leading to low conversion rates.',
    solution: 'An automated pipeline that aggregates jobs, scores them against a security profile, and generates tailored PDF resumes and cover letters using high-fidelity templates.',
    features: [
      'Multi-source job hunting (Indeed, Greenhouse, USAJobs)',
      'YAML-based profile scoring engine',
      'Tailored resume & cover letter generation',
      'Application pipeline tracking dashboard',
      'Company recon & interview prep automation',
      'SQLite persistence for application history'
    ],
    stack: 'Python, WeasyPrint, JobSpy, BeautifulSoup, structlog',
    focus: 'Career automation, resume tailoring, data-driven hunting',
    output: 'Tailored PDF materials, conversion metrics, application logs',
    github: 'https://github.com/gpamarthy/huntkit',
    terminal: {
      prompt: '$ huntkit tailor 42',
      lines: [
        '<span class="text-zinc-500">[*]</span> Loading job 42: Senior Detection Engineer (CrowdStrike)',
        '<span class="text-zinc-500">[*]</span> Job score: 94/100 (Certs: OSEP, CRTE | Skills: Splunk, AWS)',
        '<span class="text-zinc-500">[*]</span> Extracting keywords from JD: "cloud forensics", "KQL", "Boto3"',
        '<span class="text-zinc-500">[*]</span> Reordering skills based on JD relevance...',
        '<span class="text-zinc-500">[*]</span> Injecting project highlights: Sentinel Forge, Domino',
        '<span class="text-green-500">[+]</span> Generated: resume_crowdstrike_20260420.pdf',
        '<span class="text-green-500">[+]</span> Generated: cover_crowdstrike_20260420.pdf',
        '<span class="text-green-500">[+]</span> Pipeline updated: Status set to "Tailored"',
      ]
    }
  }
]
