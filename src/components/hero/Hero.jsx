import { useState } from 'react'
import { Link } from 'react-router-dom'
import { heroContent } from '../../mockup/hero'
import { HeroBadges } from './HeroBadges'
import { AnimatedArrow } from '../../icons'
import heroImg from '../../assets/hero-backdrop.jpg'

export const Hero = () => {
  const [hoveredCta, setHoveredCta] = useState(false)

  return (
    <section className="relative min-h-[660px] lg:min-h-[740px] flex items-center justify-start bg-slate-950 overflow-hidden pb-32 sm:pb-44 lg:pb-52">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury airport transfer backdrop"
          className="w-full h-full object-cover object-right lg:object-center opacity-50 brightness-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-12 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            {heroContent.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] break-words">
            {heroContent.titlePrefix}{' '}
            <br />
            {heroContent.titleMid}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              {heroContent.titleHighlight}
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-xl">
            {heroContent.description}
          </p>

          <HeroBadges />

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to={heroContent.primaryCtaPath}
              onMouseEnter={() => setHoveredCta(true)}
              onMouseLeave={() => setHoveredCta(false)}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>{heroContent.primaryCtaText}</span>
              <AnimatedArrow isParentHovered={hoveredCta} size={18} />
            </Link>

            <Link
              to={heroContent.secondaryCtaPath}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full border border-white/20 transition-all hover:border-white/40"
            >
              {heroContent.secondaryCtaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
