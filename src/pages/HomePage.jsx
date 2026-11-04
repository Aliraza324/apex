import { Hero } from '../components/hero/Hero'
import { BookingWidget } from '../components/booking/BookingWidget'
import { FeaturesStrip } from '../components/features/FeaturesStrip'
import { FleetSection } from '../components/fleet/FleetSection'
import { ServicesSection } from '../components/services/ServicesSection'
import { ProcessSection } from '../components/process/ProcessSection'
import { StatsSection } from '../components/stats/StatsSection'
import { AirportSection } from '../components/airports/AirportSection'
import { CorporateSection } from '../components/corporate/CorporateSection'
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection'
import { CtaBanner } from '../components/cta/CtaBanner'

export const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <BookingWidget />
      <FeaturesStrip />
      <FleetSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <AirportSection />
      <CorporateSection />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  )
}

