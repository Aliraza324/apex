import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ctaBannerData } from '../../mockup/cta'
import { AnimatedArrow } from '../../icons'

export const CtaBanner = () => {
  const [hoveredCta, setHoveredCta] = useState(false)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-950 overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-30 lg:opacity-60 pointer-events-none">
            <img
              src={ctaBannerData.carImage}
              alt="Luxury car rear night lights"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-6 text-white">
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase bg-red-600/10 border border-red-500/20 px-3.5 py-1 rounded-full inline-block">
              {ctaBannerData.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {ctaBannerData.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              {ctaBannerData.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={ctaBannerData.primaryCtaPath}
                onMouseEnter={() => setHoveredCta(true)}
                onMouseLeave={() => setHoveredCta(false)}
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>{ctaBannerData.primaryCtaText}</span>
                <AnimatedArrow isParentHovered={hoveredCta} size={16} />
              </Link>

              <Link
                to={ctaBannerData.secondaryCtaPath}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full border border-white/20 transition-all hover:border-white/40"
              >
                {ctaBannerData.secondaryCtaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

