import { useState } from 'react'
import { Link } from 'react-router-dom'
import { airportSectionData } from '../../mockup/airports'
import { AnimatedPlane, AnimatedArrow } from '../../icons'
import airportImg from '../../assets/airport-terminal.jpg'

export const AirportSection = () => {
  const [hoveredCta, setHoveredCta] = useState(false)
  const [hoveredAirport, setHoveredAirport] = useState(null)

  return (
    <section id="airports" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute inset-0 z-0">
            <img
              src={airportImg}
              alt="Airport operations tower backdrop"
              className="w-full h-full object-cover object-center brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 sm:via-slate-950/70 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-white">
              <span className="text-xs font-bold tracking-widest text-red-600 uppercase block">
                {airportSectionData.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                {airportSectionData.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
                {airportSectionData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {airportSectionData.checklist.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-100">
                    <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  to={airportSectionData.ctaPath}
                  onMouseEnter={() => setHoveredCta(true)}
                  onMouseLeave={() => setHoveredCta(false)}
                  className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
                >
                  <span>{airportSectionData.ctaText}</span>
                  <AnimatedArrow isParentHovered={hoveredCta} size={15} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/60 space-y-4">
                <div className="flex items-center gap-2.5 text-gray-900 border-b border-gray-100 pb-3.5">
                  <AnimatedPlane isParentHovered={true} size={20} className="text-red-600" />
                  <h3 className="text-base sm:text-lg font-bold">
                    {airportSectionData.airportsBoxTitle}
                  </h3>
                </div>

                <div className="divide-y divide-gray-100">
                  {airportSectionData.airports.map((airport) => {
                    const isHovered = hoveredAirport === airport.code
                    return (
                      <Link
                        key={airport.code}
                        to={airport.path}
                        onMouseEnter={() => setHoveredAirport(airport.code)}
                        onMouseLeave={() => setHoveredAirport(null)}
                        className="flex items-center justify-between py-2.5 group/item transition-colors hover:text-red-600"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover/item:text-red-600">
                          {airport.name}{' '}
                          <span className="text-xs text-gray-400 font-normal">
                            ({airport.code})
                          </span>
                        </span>
                        <AnimatedArrow isParentHovered={isHovered} size={14} className="text-red-600" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
