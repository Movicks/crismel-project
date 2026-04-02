import TitleMix from "../shared/TitleMix"
export default function About() {
  return (
    <section id="about" className="py-5 md:py-16">
      <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#36e43e]/30 blur-3xl" />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="fade-up">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              <TitleMix text="We build reliable automation systems" baseClass="text-black" />
            </h2>
            <p className="mt-3 text-black/70">
              Our team integrates systems, orchestrates workflows, and delivers
              observability so your organization operates with speed and
              confidence. From CRM to ERP to bespoke data services, we bind it
              all together with clear SLAs and maintainability first.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-up fade-up-200">
            <div className="p-5 border border-black/10 rounded-2xl bg-white">
              <div className="text-[#031403] font-bold">Strategy</div>
              <p className="mt-1 text-sm text-black/70">
                Align automation initiatives to measurable outcomes.
              </p>
            </div>
            <div className="p-5 border border-black/10 rounded-2xl bg-white">
              <div className="text-[#031403] font-bold">Engineering</div>
              <p className="mt-1 text-sm text-black/70">
                Robust components, typed interfaces, and clear contracts.
              </p>
            </div>
            <div className="p-5 border border-black/10 rounded-2xl bg-white">
              <div className="text-[#031403] font-bold">Security</div>
              <p className="mt-1 text-sm text-black/70">
                Access control, secrets hygiene, and audit‑ready pipelines.
              </p>
            </div>
            <div className="p-5 border border-black/10 rounded-2xl bg-white">
              <div className="text-[#031403] font-bold">Support</div>
              <p className="mt-1 text-sm text-black/70">
                SLAs with dashboards, alerts, and on‑call assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
