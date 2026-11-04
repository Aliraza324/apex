import { useState } from 'react'
import { Link } from 'react-router-dom'
import { airportSectionData } from '../../mockup/airports'
import { AnimatedPlane, AnimatedArrow } from '../../icons'

export const AirportSection = () => {
  const [hoveredCta, setHoveredCta] = useState(false)
  const [hoveredAirport, setHoveredAirport] = useState(null)

  return (
    <section id="airports" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-xs font-bold text-red-500 uppercase tracking-widest">
              {airportSectionData.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {airportSectionData.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              {airportSectionData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {airportSectionData.checklist.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to={airportSectionData.ctaPath}
                onMouseEnter={() => setHoveredCta(true)}
                onMouseLeave={() => setHoveredCta(false)}
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>{airportSectionData.ctaText}</span>
                <AnimatedArrow isParentHovered={hoveredCta} size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img
              src={airportSectionData.towerImage}
              alt="Airport operations tower"
              className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/80 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2.5 text-white border-b border-white/15 pb-4">
                <AnimatedPlane isParentHovered={true} size={22} className="text-red-500" />
                <h3 className="text-lg font-bold">
                  {airportSectionData.airportsBoxTitle}
                </h3>
              </div>

              <div className="space-y-2">
                {airportSectionData.airports.map((airport) => {
                  const isHovered = hoveredAirport === airport.code
                  return (
                    <Link
                      key={airport.code}
                      to={airport.path}
                      onMouseEnter={() => setHoveredAirport(airport.code)}
                      onMouseLeave={() => setHoveredAirport(null)}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-red-500/50 transition-all group/item"
                    >
                      <span className="text-sm font-semibold text-gray-200 group-hover/item:text-white">
                        {airport.name}{' '}
                        <span className="text-xs text-red-400 font-normal">
                          ({airport.code})
                        </span>
                      </span>
                      <AnimatedArrow isParentHovered={isHovered} size={14} className="text-red-500" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

