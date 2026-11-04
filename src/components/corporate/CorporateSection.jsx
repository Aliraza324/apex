import { useState } from 'react'
import { corporateData } from '../../mockup/corporate'
import {
  AnimatedCalendar,
  AnimatedBriefcase,
  AnimatedUser,
  AnimatedChart
} from '../../icons'

export const CorporateSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const renderIcon = (iconName, isHovered) => {
    if (iconName === 'calendar') return <AnimatedCalendar isParentHovered={isHovered} size={20} className="text-red-600" />
    if (iconName === 'briefcase') return <AnimatedBriefcase isParentHovered={isHovered} size={20} className="text-red-600" />
    if (iconName === 'user') return <AnimatedUser isParentHovered={isHovered} size={20} className="text-red-600" />
    if (iconName === 'chart') return <AnimatedChart isParentHovered={isHovered} size={20} className="text-red-600" />
    return null
  }

  return (
    <section id="corporate" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 border border-red-200 px-3.5 py-1 rounded-full inline-block">
              {corporateData.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {corporateData.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              {corporateData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {corporateData.features.map((feature) => {
                const isHovered = hoveredFeature === feature.id
                return (
                  <div
                    key={feature.id}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className="p-4 rounded-xl bg-white border border-gray-200/80 hover:border-red-500/40 hover:shadow-md transition-all group cursor-pointer space-y-2"
                  >
                    <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center border border-red-100 group-hover:bg-red-100/70 transition-colors">
                      {renderIcon(feature.iconName, isHovered)}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
              <img
                src={corporateData.executiveImage}
                alt="Executive business travel"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

