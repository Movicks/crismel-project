'use client'
import { useEffect, useRef, useState } from "react"

const data = [
  { label: "Integrations", end: 200, suffix: "+" },
  { label: "Uptime", end: 99.9, suffix: "%" },
  { label: "Speed", end: 10, suffix: "x" },
  { label: "Coverage", end: 24, suffix: "/7" },
]

export default function Stats() {
  const [vals, setVals] = useState(data.map(() => 0))
  const started = useRef(false)
  useEffect(() => {
    const el = document.getElementById('stats')
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const duration = 1200
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration)
            const next = data.map((d) =>
              Number((d.end * p).toFixed(d.end % 1 !== 0 ? 1 : 0))
            )
            setVals(next)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section id="stats" className="py-2 w-full">
      <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((d, i) => (
            <div key={i} className="text-center fade-up" style={{ animationDelay: `${i * 0.1 + 0.1}s` as unknown as string }}>
              <div className="text-3xl md:text-5xl font-extrabold text-[#031403]">
                {vals[i]}{d.suffix}
              </div>
              <div className="mt-1 text-black/70">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
