import { services } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-5xl md:text-6xl text-forest text-center mb-3">
          Our Services
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-stone/20 bg-white p-8 hover:border-gold transition-colors group"
            >
              <h3 className="font-heading text-2xl text-forest mb-3 group-hover:text-gold transition-colors">
                {service.name}
              </h3>
              <p className="text-stone text-sm leading-relaxed">{service.description}</p>
              {service.price && (
                <p className="text-gold font-semibold mt-4 text-sm">{service.price}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
