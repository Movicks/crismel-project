'use client'
import { useState } from 'react'
import TitleMix from "../shared/TitleMix"

type State = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email and message.')
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email.')
      return
    }
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setState('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setState('error')
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact-form" className="pt-4 md:py-10 w-full max-w-4xl">
      <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10">
        <div className="max-w-2xl fade-up">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            <TitleMix text="Get in touch" baseClass="text-black" />
          </h2>
          <p className="mt-2 text-black/70">Tell us about your automation goals and we’ll reach out shortly.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-semibold text-black/80">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              className="h-11 px-3 border border-black/20 bg-white outline-none focus:border-[#031403]"
              placeholder="Jane Doe"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-semibold text-black/80">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="h-11 px-3 border border-black/20 bg-white outline-none focus:border-[#031403]"
              placeholder="jane@company.com"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <label htmlFor="company" className="text-sm font-semibold text-black/80">Company</label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={onChange}
              className="h-11 px-3 border border-black/20 bg-white outline-none focus:border-[#031403]"
              placeholder="Acme Inc."
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-semibold text-black/80">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              className="min-h-32 px-3 py-2 border border-black/20 bg-white outline-none focus:border-[#031403] resize-none"
              placeholder="What would you like to automate?"
            />
          </div>
          {error && <div className="md:col-span-2 text-sm text-red-600">{error}</div>}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="inline-flex items-center bg-[#031403] text-[#36e43e] px-5 py-3 font-semibold transition hover:opacity-90 active:opacity-80 disabled:opacity-50 rounded-none"
            >
              {state === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
            {state === 'success' && (
              <span className="ml-3 text-sm text-black/70">Thanks! We’ll be in touch.</span>
            )}
          </div>
        </form>
        <div className="mt-8 pt-6 border-t border-black/10">
          <div className="text-lg font-extrabold text-[#031403]">Also reach us</div>
          <ul className="mt-3 flex flex-wrap gap-3">
            <li>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 border border-black/20 text-[#031403] hover:bg-black/5 rounded-none">
                <span className="w-6 h-6 flex items-center justify-center bg-[#031403] text-[#36e43e] text-xs">X</span>
                <span>Twitter / X</span>
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 border border-black/20 text-[#031403] hover:bg-black/5 rounded-none">
                <span className="w-6 h-6 flex items-center justify-center bg-[#031403] text-[#36e43e] text-xs">in</span>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 border border-black/20 text-[#031403] hover:bg-black/5 rounded-none">
                <span className="w-6 h-6 flex items-center justify-center bg-[#031403] text-[#36e43e] text-xs">GH</span>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 border border-black/20 text-[#031403] hover:bg-black/5 rounded-none">
                <span className="w-6 h-6 flex items-center justify-center bg-[#031403] text-[#36e43e] text-xs">YT</span>
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 border border-black/20 text-[#031403] hover:bg-black/5 rounded-none">
                <span className="w-6 h-6 flex items-center justify-center bg-[#031403] text-[#36e43e] text-xs">IG</span>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
