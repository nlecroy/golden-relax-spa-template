import { reviews } from '@/lib/data'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-5xl md:text-6xl text-forest text-center mb-3">
          What Clients Say
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 border-t-2 border-gold">
              <p className="text-gold text-lg mb-4 tracking-widest">★★★★★</p>
              <p className="text-stone text-sm leading-relaxed italic mb-8">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div>
                <p className="text-forest font-semibold text-sm">{review.author}</p>
                <p className="text-stone/50 text-xs mt-1">{review.timeframe} · Yelp</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
