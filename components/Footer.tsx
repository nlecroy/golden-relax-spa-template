import { businessInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream py-14 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
        <div className="text-center md:text-left">
          <p className="font-heading text-gold text-2xl mb-2 font-light">Golden Relax</p>
          <p className="text-cream/50 text-xs mb-1">{businessInfo.address}</p>
          <a
            href={businessInfo.phoneHref}
            className="text-cream/50 hover:text-gold transition-colors text-xs"
          >
            {businessInfo.phone}
          </a>
        </div>
        <div className="text-center md:text-right">
          <a
            href={businessInfo.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/50 hover:text-gold transition-colors text-xs block mb-3"
          >
            Facebook
          </a>
          <p className="text-cream/30 text-xs">© 2026 Golden Relax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
