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
    if (iconName === 'zap') return <AnimatedZap isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'shield') return <AnimatedShield isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'plane') return <AnimatedPlane isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'car') return <AnimatedCar isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'lock') return <AnimatedLock isParentHovered={isHovered} size={22} className="text-red-600" />
    if (iconName === 'check') return <AnimatedCheck isParentHovered={isHovered} size={22} className="text-red-600" />
    return null
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white p-5 rounded-2xl border border-gray-200/70 hover:border-red-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-3 group"
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center border border-red-100 group-hover:bg-red-100/60 transition-colors">
          {renderIcon(stat.iconName)}
        </div>
        <span className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors">
          {stat.metric}
        </span>
      </div>

      <div className="space-y-1">
        <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
          {stat.label}
        </h4>
        <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
          {stat.description}
        </p>
      </div>
    </div>
  )
}

