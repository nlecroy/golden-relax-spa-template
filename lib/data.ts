export const services = [
  {
    id: 'chair',
    name: 'Chair Massage',
    description: 'A quick and effective upper-body massage targeting neck, shoulders, and back. Perfect for stress relief on the go.',
    price: null as string | null,
  },
  {
    id: 'foot',
    name: 'Foot Massage',
    description: 'A therapeutic foot massage that relieves tension and promotes circulation throughout the body.',
    price: null as string | null,
  },
  {
    id: 'body',
    name: 'Body Massage',
    description: 'A full-body massage to release muscle tension, improve circulation, and restore deep relaxation.',
    price: null as string | null,
  },
  {
    id: 'foot-spa',
    name: 'Foot Spa',
    description: 'A luxurious foot soak and massage treatment that rejuvenates tired feet and soothes the senses.',
    price: null as string | null,
  },
]

export const hours = [
  { days: 'Monday – Wednesday', time: '11am – 7pm' },
  { days: 'Thursday', time: '11am – 8pm' },
  { days: 'Friday – Saturday', time: '10am – 8pm' },
  { days: 'Sunday', time: '12pm – 6pm' },
]

export const reviews = [
  {
    id: 1,
    quote:
      'When I am dying in pain, I come in for a chair massage and leave feeling so much better. So thankful to have them!!!',
    author: 'Priscilla W.',
    timeframe: '1 week ago',
  },
  {
    id: 2,
    quote:
      "Love this place. When I want a massage, I don't want to have to go through the trouble of making an appointment. I've never had to wait long for service.",
    author: 'Amy H.',
    timeframe: '2 years ago',
  },
  {
    id: 3,
    quote: "I'm obsessed with this place!!! I added the foot spa this time and it was Amazing!",
    author: 'Amber B.',
    timeframe: '1 year ago',
  },
]

export const businessInfo = {
  name: 'Golden Relax',
  address: '3 S Tunnel Rd, Asheville, NC 28805',
  phone: '(828) 767-6178',
  phoneHref: 'tel:8287676178',
  /**
   * Get the embed URL from: maps.google.com → search "Golden Relax Asheville" → Share → Embed a map → copy the src URL
   */
  mapsEmbedUrl: 'https://maps.google.com/maps?q=3+S+Tunnel+Rd+Asheville+NC+28805&t=&z=15&ie=UTF8&iwloc=&output=embed',
  /**
   * Get the Facebook page URL from the business Facebook page and replace this placeholder.
   */
  facebookUrl: 'REPLACE_WITH_FACEBOOK_PAGE_URL',
}
