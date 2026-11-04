import { useState } from 'react'
import { featureStripItems } from '../../mockup/features'
import {
  AnimatedCar,
  AnimatedClock,
  AnimatedMapPin,
  AnimatedUser,
  AnimatedCreditCard
} from '../../icons'

export const FeaturesStrip = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const renderIcon = (iconName, isHovered) => {
    if (iconName === 'car') return <AnimatedCar isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'clock') return <AnimatedClock isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'mapPin') return <AnimatedMapPin isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'user') return <AnimatedUser isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'creditCard') return <AnimatedCreditCard isParentHovered={isHovered} size={22} className="text-red-600" />
    return null
  }

  return (
    <section className="pt-20 sm:pt-28 pb-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {featureStripItems.map((item) => {
            const isHovered = hoveredItem === item.id
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="flex items-center gap-3.5 group cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 group-hover:bg-red-100/80 flex items-center justify-center shrink-0 border border-red-100 transition-colors">
                  {renderIcon(item.iconName, isHovered)}
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors leading-snug">
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
