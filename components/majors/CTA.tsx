import Link from "next/link";
export default function CTA() {
  return (
    <section id="contact" className="py-4 w-full">
      <div className="rounded-xl border border-black/10 p-8 md:p-12 bg-gradient-to-br from-[#091b12] to-[#091b12] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#36e43e]/10 blur-2xl" />
        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white fade-up">
            Ready to automate your operations
          </h2>
          <p className="mt-2 md:mt-3 text-white/80 max-w-2xl fade-up fade-up-200">
            Book a demo to see how we can streamline your workflows and scale outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#" className="inline-flex items-center rounded-none bg-[#36e43e] text-black px-4 py-2 font-semibold transition hover:scale-[1.02] active:scale-95">
              Book a demo
            </Link>
            <Link href="#" className="inline-flex items-center rounded-none bg-white/10 backdrop-blur px-4 py-2 text-white border border-white/20 transition hover:bg-white/20 hover:scale-[1.02] active:scale-95">
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
