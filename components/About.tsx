export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-heading text-5xl md:text-6xl text-forest mb-3">About Us</h2>
          <div className="w-16 h-px bg-gold mb-10" />
          <p className="text-stone leading-relaxed mb-6">
            Golden Relax is a wellness center in Asheville, NC offering a range of services aimed
            at promoting relaxation and rejuvenation.
          </p>
          <p className="text-stone leading-relaxed mb-6">
            With a focus on holistic healing and self-care, we provide a tranquil space for
            individuals seeking to unwind and restore balance in their lives.
          </p>
          <p className="text-stone leading-relaxed">
            Walk-ins are always welcome — no appointment necessary.
          </p>
        </div>
        <div className="bg-forest aspect-square flex flex-col items-center justify-center gap-6 p-12">
          <div className="w-px h-16 bg-gold/40" />
          <p className="font-heading text-4xl text-gold font-light tracking-widest text-center">
            Golden<br />Relax
          </p>
          <div className="w-px h-16 bg-gold/40" />
          <p className="text-cream/50 text-xs tracking-[0.3em] uppercase text-center">
            Asheville, NC
          </p>
        </div>
      </div>
    </section>
  )
}
