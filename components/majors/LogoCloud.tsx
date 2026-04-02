export default function LogoCloud() {
  const brands = ["Acme", "Globex", "Initech", "Umbrella", "Hooli", "Stark", "Wayne", "Wonka"];
  return (
    <section className="py-10 md:py-14">
      <div className="relative overflow-hidden rounded-md border border-black/10 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent" />
        <div className="px-4 md:px-8 py-6">
          <div className="overflow-hidden mask-edge">
            <div className="marquee gap-10 md:gap-14 px-2">
              {[...brands, ...brands].map((b, i) => (
                <div key={i} className="text-black/60 text-lg md:text-xl font-semibold whitespace-nowrap floaty">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
