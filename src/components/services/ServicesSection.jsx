import { useState } from 'react'
import { Link } from 'react-router-dom'
import { servicesHeader, servicesList } from '../../mockup/services'
import { ServiceCard } from './ServiceCard'
import { AnimatedArrow } from '../../icons'

export const ServicesSection = () => {
  const [hoveredHeaderLink, setHoveredHeaderLink] = useState(false)

  return (
    <section id="services" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase bg-red-500/10 border border-red-500/20 px-3.5 py-1 rounded-full inline-block">
              {servicesHeader.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {servicesHeader.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {servicesHeader.description}
            </p>
          </div>

          <Link
            to={servicesHeader.viewAllLink}
            onMouseEnter={() => setHoveredHeaderLink(true)}
            onMouseLeave={() => setHoveredHeaderLink(false)}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 shrink-0 self-start md:self-end transition-colors"
          >
            <span>{servicesHeader.viewAllText}</span>
            <AnimatedArrow isParentHovered={hoveredHeaderLink} size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

