'use client'
import TitleMix from "../shared/TitleMix"
const items = [
  {
    title: "Workflow Automation",
    desc: "Eliminate manual tasks with robust, event‑driven pipelines.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM9 14h6v6H9z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    desc: "Connect CRMs, ERPs, and data layers with clean interfaces.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Assistance",
    desc: "Embed intelligent agents to augment decision workflows.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10h8M7 14h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Observability",
    desc: "Dashboards and alerts for reliability and performance.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 12s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="solutions" className="pt-4 lg:pt-10">
      <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10 overflow-hidden relative">
        <div className="absolute top-24 -left-24 w-64 h-64 rounded-full bg-[#36e43e]/30 blur-3xl" />
        <div className="absolute -bottom-24 lg:-top-24 -right-24 w-64 h-64 rounded-full bg-[#36e43e]/30 blur-3xl" />
        <div className="max-w-3xl mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight fade-up">
            <TitleMix text="Automation that ships" baseClass="text-black" />
          </h2>
          <p className="mt-2 md:mt-3 text-black/70 fade-up fade-up-200">
            Modular solutions tailored to your stack. Secure, observable, and scalable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="group p-[1px] rounded-2xl bg-gradient-to-br from-[#36e43e] to-transparent transition lg:min-h-[13rem]"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` as unknown as string }}
            >
              <div
                className="rounded-2xl border border-black/10 p-5 bg-white shadow-sm hover:shadow-md fade-up h-full flex flex-col justify-between"
                onMouseMove={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  const r = el.getBoundingClientRect()
                  const x = e.clientX - r.left
                  const y = e.clientY - r.top
                  const rx = ((y / r.height) - 0.5) * -6
                  const ry = ((x / r.width) - 0.5) * 6
                  el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = ''
                }}
              >
                <div className="text-[#031403]">{it.icon}</div>
                <h3 className="mt-3 text-lg md:text-xl font-bold">{it.title}</h3>
                <p className="mt-1 text-sm md:text-base text-black/70">{it.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-[#031403] font-semibold">
                  Learn more
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
