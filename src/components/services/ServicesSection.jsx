import { useState } from 'react'
import { Link } from 'react-router-dom'
import { servicesHeader, servicesList } from '../../mockup/services'
import { ServiceCard } from './ServiceCard'
import { AnimatedArrow } from '../../icons'

export const ServicesSection = () => {
  const [hoveredHeaderLink, setHoveredHeaderLink] = useState(false)

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0F17] rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold tracking-widest text-red-600 uppercase block">
                {servicesHeader.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight whitespace-nowrap">
                {servicesHeader.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
                {servicesHeader.description}
              </p>
            </div>

            <Link
              to={servicesHeader.viewAllLink}
              onMouseEnter={() => setHoveredHeaderLink(true)}
              onMouseLeave={() => setHoveredHeaderLink(false)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-500 hover:text-red-400 shrink-0 self-start md:self-end pb-1 transition-colors"
            >
              <span>{servicesHeader.viewAllText}</span>
              <AnimatedArrow isParentHovered={hoveredHeaderLink} size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {servicesList.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
