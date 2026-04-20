'use client'

import { useState } from 'react'

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className="ml-auto text-[10px] font-mono uppercase tracking-widest text-subtle hover:text-accent transition-colors"
      aria-label="Copy to clipboard"
    >
      {copied ? 'Copied!' : '[Copy]'}
    </button>
  )
}
