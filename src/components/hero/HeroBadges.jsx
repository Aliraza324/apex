import { useState } from 'react'
import { heroContent } from '../../mockup/hero'
import { AnimatedShield, AnimatedClock, AnimatedSparkle } from '../../icons'

export const HeroBadges = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null)

  const renderIcon = (iconName, isHovered) => {
    if (iconName === 'shield') return <AnimatedShield isParentHovered={isHovered} size={18} className="text-red-500" />
    if (iconName === 'clock') return <AnimatedClock isParentHovered={isHovered} size={18} className="text-red-500" />
    if (iconName === 'sparkle') return <AnimatedSparkle isParentHovered={isHovered} size={18} className="text-red-500" />
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      {heroContent.trustPills.map((pill) => (
        <div
          key={pill.id}
          onMouseEnter={() => setHoveredBadge(pill.id)}
          onMouseLeave={() => setHoveredBadge(null)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-sm text-xs font-medium text-gray-200 transition-all hover:border-red-500/40"
        >
          {renderIcon(pill.iconName, hoveredBadge === pill.id)}
          <span>{pill.label}</span>
        </div>
      ))}
    </div>
  )
}

