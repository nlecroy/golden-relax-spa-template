import { hours, businessInfo } from '@/lib/data'

export default function Location() {
  return (
    <section id="location" className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-5xl md:text-6xl text-forest text-center mb-3">Find Us</h2>
        <div className="w-16 h-px bg-gold mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="w-full aspect-video bg-cream">
            <iframe
              src={businessInfo.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Golden Relax location map"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl text-forest mb-6">Hours & Contact</h3>
            <table className="w-full text-sm mb-8">
              <tbody>
                {hours.map((row) => (
                  <tr key={row.days} className="border-b border-stone/10">
                    <td className="py-3 text-stone pr-4">{row.days}</td>
                    <td className="py-3 text-forest font-semibold text-right">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-stone text-sm mb-3">{businessInfo.address}</p>
            <a
              href={businessInfo.phoneHref}
              className="text-gold hover:text-yellow-600 transition-colors font-semibold text-sm"
            >
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
