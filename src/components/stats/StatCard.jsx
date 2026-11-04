import { useState } from 'react'
import {
  AnimatedZap,
  AnimatedShield,
  AnimatedPlane,
  AnimatedCar,
  AnimatedLock,
  AnimatedCheck
} from '../../icons'

export const StatCard = ({ stat }) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderIcon = (iconName) => {
    if (iconName === 'zap') return <AnimatedZap isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    if (iconName === 'shield') return <AnimatedShield isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    if (iconName === 'plane') return <AnimatedPlane isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    if (iconName === 'car') return <AnimatedCar isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    if (iconName === 'lock') return <AnimatedLock isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    if (iconName === 'check') return <AnimatedCheck isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    return null
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3 group"
    >
      <div className="flex items-center gap-2">
        {renderIcon(stat.iconName)}
        <span className="text-base sm:text-lg font-black text-red-600 tracking-tight leading-tight">
          {stat.metric}
        </span>
      </div>

      <div className="space-y-1.5 pt-1">
        <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
          {stat.label}
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          {stat.description}
        </p>
      </div>
    </div>
  )
}
