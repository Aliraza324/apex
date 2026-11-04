import { useState } from 'react'
import { AnimatedCalendar, AnimatedCar, AnimatedCheck } from '../../icons'

export const ProcessStepCard = ({ step }) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderIcon = (iconName) => {
    if (iconName === 'calendar') return <AnimatedCalendar isParentHovered={isHovered} size={24} className="text-red-600" />
    if (iconName === 'car') return <AnimatedCar isParentHovered={isHovered} size={24} className="text-white" />
    if (iconName === 'check') return <AnimatedCheck isParentHovered={isHovered} size={24} className="text-red-600" />
    return null
  }

  const isCenter = step.iconName === 'car'

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex-1 flex flex-col items-center text-center relative group"
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110 ${
          isCenter
            ? 'bg-red-600 shadow-red-600/30'
            : 'bg-red-50 border border-red-100 shadow-red-500/10'
        }`}
      >
        {renderIcon(step.iconName)}
      </div>

      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
        {step.title}
      </h3>

      <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xs leading-relaxed">
        {step.description}
      </p>
    </div>
  )
}
