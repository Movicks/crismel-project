import TitleMix from "../shared/TitleMix"
const steps = [
  {
    title: "Discovery",
    desc: "We map goals, systems, and constraints.",
  },
  {
    title: "Design",
    desc: "We outline integrations, flows, and SLAs.",
  },
  {
    title: "Build",
    desc: "We implement, test, and instrument.",
  },
  {
    title: "Scale",
    desc: "We deploy, monitor, and iterate.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 md:py-16">
      <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10">
        <div className="max-w-3xl mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight fade-up">
            <TitleMix text="Proven delivery process" baseClass="text-black" />
          </h2>
          <p className="mt-2 md:mt-3 text-black/70 fade-up fade-up-200">
            A lightweight approach that de-risks complexity and delivers value fast.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-black/10 p-6 bg-white transition hover:shadow-md fade-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` as unknown as string }}
            >
              <div className="w-9 h-9 rounded-full bg-[#031403] text-[#36e43e] flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h3 className="mt-3 text-lg md:text-xl font-bold">{s.title}</h3>
              <p className="mt-1 text-sm md:text-base text-black/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
