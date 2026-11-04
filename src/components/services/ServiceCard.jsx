import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedPlane, AnimatedBriefcase, AnimatedUser, AnimatedArrow } from '../../icons'

export const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderIcon = (iconName) => {
    if (iconName === 'plane') return <AnimatedPlane isParentHovered={isHovered} size={18} className="text-red-500" />
    if (iconName === 'briefcase') return <AnimatedBriefcase isParentHovered={isHovered} size={18} className="text-red-500" />
    if (iconName === 'user') return <AnimatedUser isParentHovered={isHovered} size={18} className="text-red-500" />
    return null
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-slate-900/90 rounded-2xl border border-white/10 hover:border-red-500/50 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 group transition-all duration-300"
    >
      <div className="w-full sm:w-44 h-36 sm:h-auto rounded-xl overflow-hidden shrink-0 bg-slate-800">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {renderIcon(service.iconName)}
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
              {service.title}
            </h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div>
          <Link
            to={service.path}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-400 transition-colors"
          >
            <span>{service.linkText}</span>
            <AnimatedArrow isParentHovered={isHovered} size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}

