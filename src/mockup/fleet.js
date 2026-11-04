import standardImg from '../assets/fleet-standard.jpg'
import executiveImg from '../assets/fleet-executive.jpg'
import xlImg from '../assets/fleet-xl.jpg'
import accessibleImg from '../assets/fleet-accessible.jpg'

export const fleetHeader = {
  badge: 'OUR FLEET',
  title: 'Maintained to Impeccable Standards',
  description: 'From everyday journeys to executive travel, our modern fleet is maintained, cleaned, and safety-checked to the highest standards.'
}

export const fleetVehicles = [
  {
    id: 'standard-saloon',
    name: 'Standard Saloon',
    image: standardImg,
    passengers: 'Up to 4',
    luggage: '2 Cases',
    description: 'A comfortable and cost-effective choice for everyday travel, airport transfers, and local journeys.',
    ctaText: 'Book Now',
    link: '/#book'
  },
  {
    id: 'executive-saloon',
    name: 'Executive Saloon',
    image: executiveImg,
    passengers: 'Up to 4',
    luggage: '2 Cases',
    description: 'A premium saloon with extra comfort and style, ideal for business travel and important meetings.',
    ctaText: 'Book Now',
    link: '/#book'
  },
  {
    id: 'xl-mpv-group',
    name: 'XL / MPV Group',
    image: xlImg,
    passengers: 'Up to 7',
    luggage: '4 Cases',
    description: 'Perfect for families, groups, or additional luggage, with spacious and comfortable seating.',
    ctaText: 'Book Now',
    link: '/#book'
  },
  {
    id: 'accessible-wheelchair',
    name: 'Accessible (Wheelchair)',
    image: accessibleImg,
    passengers: 'Up to 4',
    luggage: '2 Cases',
    description: 'Fully accessible vehicles with wheelchair access, ensuring a safe and comfortable journey for all passengers.',
    ctaText: 'Book Now',
    link: '/#book'
  }
]
