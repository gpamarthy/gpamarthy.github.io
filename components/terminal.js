'use client'

import { useState, useEffect, useRef } from 'react'

export default function Terminal({ prompt, lines, speed = 80 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let i = 0
        const t = setInterval(() => {
          i++
          setCount(i)
          if (i >= lines.length) clearInterval(t)
        }, speed)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [lines.length, speed])

  return (
    <div ref={ref} className="code-block mt-10">
      <p className="font-mono text-xs text-zinc-500 mb-4">{prompt}</p>
      <div className="text-xs font-mono leading-relaxed whitespace-pre">
        {lines.slice(0, count).map((line, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
        {count > 0 && count < lines.length && (
          <span className="text-red-500 animate-pulse">_</span>
        )}
      </div>
    </div>
  )
}
