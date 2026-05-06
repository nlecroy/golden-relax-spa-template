export default function Hero() {
  return (
    <section className="min-h-screen bg-forest flex items-center justify-center text-center px-4 pt-20">
      <div className="max-w-2xl">
        <p className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-6">
          Asheville, North Carolina
        </p>
        <h1 className="font-heading text-7xl md:text-9xl text-gold font-light tracking-wide mb-6">
          Golden Relax
        </h1>
        <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
        <p className="text-cream/70 tracking-widest uppercase text-sm mb-10">
          Asheville&apos;s Sanctuary for Relaxation
        </p>
        <p className="text-cream/50 text-sm mb-1">3 S Tunnel Rd, Asheville, NC 28805</p>
        <a
          href="tel:8287676178"
          className="text-gold/70 hover:text-gold transition-colors text-sm block mb-12"
        >
          (828) 767-6178
        </a>
        <a
          href="#services"
          className="inline-block border border-gold/60 text-gold px-10 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-forest transition-colors"
        >
          View Services
        </a>
      </div>
    </section>
  )
}
