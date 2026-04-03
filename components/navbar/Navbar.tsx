'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const NAV_SECTIONS = ['top', 'about', 'solutions', 'process', 'contact'] as const

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState<string>('top')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const computeActive = () => {
      if (window.scrollY < 50) {
        setActive('top')
        return
      }
      const vh = window.innerHeight || 1
      let bestId: typeof NAV_SECTIONS[number] = NAV_SECTIONS[0]
      let bestScore = -Infinity
      NAV_SECTIONS.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        const r = el.getBoundingClientRect()
        const visibleHeight = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0))
        const ratio = visibleHeight / Math.max(r.height, 1)
        const centerDistance = Math.abs((r.top + r.height / 2) - vh / 2)
        const score = ratio - centerDistance / vh
        if (score > bestScore) {
          bestScore = score
          bestId = id
        }
      })
      setActive(bestId)
    }

    const onScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 10)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0)
      computeActive()
    }

    const onResize = () => computeActive()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    // initial compute after mount
    computeActive()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const linkClass = (id: string) =>
    `relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 ${
      active === id
        ? 'text-[#36e43e]'
        : 'text-white/80 hover:text-white'
    }`

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-1">
      <div
        className={`mx-auto max-w-4xl xl:min-w-6xl px-4 py-3 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#031403]/80 shadow-lg rounded-2xl mt-2'
            : 'mt-2'
        }`}
      >
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-white font-extrabold text-xl tracking-wide">
            Crismel
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-2 relative">
            {NAV_SECTIONS.map(id => (
              <li key={id} className="relative">
                <a
                    href={id === "top" ? "#top" : `#${id}`}
                    className={linkClass(id)}
                    onClick={() => setActive(id)}
                >
                    {id === "top" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>

                {/* Animated underline */}
                {active === id && (
                  <span className="absolute left-2 right-2 -bottom-1 h-[2px] bg-[#36e43e] rounded-full duration-300 transition-all" />
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="relative overflow-hidden px-5 py-2 bg-[#36e43e] text-black font-semibold group"
            >
              <span className="relative z-10">Get Demo</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Progress Bar */}
        <div className="mt-2 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div
            className="h-full bg-[#36e43e] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 z-[100] h-[100vh] w-[80%] max-w-sm bg-[#031403] flex flex-col justify-between border-l border-white/10 p-6 transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-white font-bold text-lg">Menu</span>
            <button onClick={() => setMobileOpen(false)} className='w-8 h-8 flex items-center justify-center border-2 border-[#36e43e] text-black '>
              <X className="text-white" />
            </button>
          </div>

          <ul className="space-y-4 w-full h-full">
            {NAV_SECTIONS.map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-lg px-3 py-2 transition ${
                    active === id
                      ? 'bg-[#36e43e] text-black'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {id === 'top' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button className='w-full'>
            <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mb-8 text-center bg-[#36e43e] text-black px-4 py-3 font-semibold"
            >
            Get Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
