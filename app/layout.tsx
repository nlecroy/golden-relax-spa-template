import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Golden Relax | Massage & Wellness in Asheville, NC',
  description:
    'Golden Relax offers chair massage, foot massage, body massage, and foot spa services in Asheville, NC. Walk-ins welcome. Call (828) 767-6178.',
  openGraph: {
    title: 'Golden Relax | Massage & Wellness in Asheville, NC',
    description:
      'Golden Relax offers chair massage, foot massage, body massage, and foot spa services in Asheville, NC. Walk-ins welcome. Call (828) 767-6178.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Golden Relax',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3 S Tunnel Rd',
    addressLocality: 'Asheville',
    addressRegion: 'NC',
    postalCode: '28805',
    addressCountry: 'US',
  },
  telephone: '+18287676178',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
      opens: '11:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Thursday',
      opens: '11:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
