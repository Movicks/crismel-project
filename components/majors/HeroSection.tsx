

export default function HeroSection() {
    return (
        <div id="top" className="h-[30rem] md:h-[35rem] lg:h-[100vh] xl:h-[100vh] bg-black border-1 border-black/30 overflow-hidden relative">
            <section className="relative h-full backdrop-blur bg-[#031403]/80 overflow-hidden ">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src="/video/automate_1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="pointer-events-none absolute -top-32 -left-20 blob" />
                <div className="pointer-events-none absolute -bottom-40 -right-32 blob" />
                <div className="pointer-events-none absolute inset-0 gradient-animate" />
                <div className="relative z-10 h-full px-4 md:px-8 flex items-center justify-center">
                    <div className="text-white max-w-3xl fade-up mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            Automate Workflows. Accelerate Growth.
                        </h1>
                        <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                            We design, deploy, and maintain end‑to‑end automation that scales with your business.
                        </p>
                        <div className="mt-6 flex flex-col md:flex-row flex-wrap gap-3 justify-center">
                            <a href="#solutions" className="inline-flex items-center justify-center rounded-none bg-[#36e43e] text-black px-4 py-2 font-semibold transition hover:scale-[1.02] active:scale-95">
                                Explore Solutions
                            </a>
                            <a href="#contact" className="inline-flex min-w-[11rem] items-center justify-center rounded-none bg-white/25 backdrop-blur px-4 py-2 text-white border border-white/20 transition hover:bg-white/20 hover:scale-[1.02] active:scale-95">
                                Get a Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="absolute left-1 right-1 md:left-4 md:right-4 top-0 md:top-4 backdrop-blur bg-[#031403]/80 rounded-3xl">
                <div className="w-full flex-1" />
            </section>
        </div>
    )
}
