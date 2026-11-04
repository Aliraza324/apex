import airplaneImg from '../assets/service-airplane.jpg'
import departuresImg from '../assets/service-departures.jpg'
import corporateImg from '../assets/service-corporate.jpg'
import chauffeurImg from '../assets/service-chauffeur.jpg'

export const servicesHeader = {
  badge: 'OUR SERVICES',
  title: 'Specialist Private Hire & Transport Services',
  description: 'Tailored transport solutions for personal, business, and exclusive travel needs across the UK and beyond.',
  viewAllText: 'View All Services',
  viewAllLink: '/services'
}

export const servicesList = [
  {
    id: 'local-long-distance',
    title: 'Local & Long-Distance Private Hire',
    image: airplaneImg,
    iconName: 'plane',
    description: 'Door-to-door, on-time transfers across the UK for individuals, families, and businesses.',
    linkText: 'Learn More',
    path: '/services'
  },
  {
    id: 'airport-pickup-dropoff',
    title: 'Airport Pickup & Drop-Offs',
    image: departuresImg,
    iconName: 'plane',
    description: 'Have a flight? We provide reliable, on-time airport transfers to and from all major UK airports.',
    linkText: 'Learn More',
    path: '/airports'
  },
  {
    id: 'corporate-business-travel',
    title: 'Corporate & Business Travel',
    image: corporateImg,
    iconName: 'briefcase',
    description: 'Dedicated transport for corporate clients, including meetings, events, and business trips.',
    linkText: 'Learn More',
    path: '/corporate'
  },
  {
    id: 'chauffeur-bespoke',
    title: 'Chauffeur & Bespoke Bookings',
    image: chauffeurImg,
    iconName: 'user',
    description: 'A premium chauffeur experience for special events, VIP travel, and customized journeys.',
    linkText: 'Learn More',
    path: '/services'
  }
]
