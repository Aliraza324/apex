export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Airport Transfers', path: '/services#airport-transfers' },
      { label: 'Corporate Travel', path: '/services#corporate' },
      { label: 'Chauffeur Services', path: '/services#chauffeur' },
      { label: 'Accessible Vehicles', path: '/services#accessible' }
    ]
  },
  {
    label: 'Airports',
    path: '/airports',
    dropdown: [
      { label: 'Heathrow (LHR)', path: '/airports/lhr' },
      { label: 'Gatwick (LGW)', path: '/airports/lgw' },
      { label: 'Stansted (STN)', path: '/airports/stn' },
      { label: 'Luton (LTN)', path: '/airports/ltn' },
      { label: 'Manchester (MAN)', path: '/airports/man' },
      { label: 'Birmingham (BHX)', path: '/airports/bhx' }
    ]
  },
  { label: 'Corporate', path: '/corporate' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
]

export const contactDetails = {
  phone: '+44 20 8123 4567',
  displayPhone: '+44 20 8123 4567',
  email: 'bookings@apexprivatehire.co.uk',
  address: 'London, United Kingdom',
  operatingHours: '24/7 UK Dispatch'
}

export const footerServices = [
  { label: 'Private Hire', path: '/services' },
  { label: 'Airport Transfers', path: '/airports' },
  { label: 'Corporate Travel', path: '/corporate' },
  { label: 'Chauffeur Services', path: '/services' },
  { label: 'Accessible Transport', path: '/services' }
]

export const footerUsefulLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Fleet', path: '/#fleet' },
  { label: 'Airports We Cover', path: '/#airports' },
  { label: 'Corporate Accounts', path: '/corporate' },
  { label: 'Contact', path: '/contact' }
]

export const footerLegalLinks = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Accessibility', path: '/accessibility' }
]

