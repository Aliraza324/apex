import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedPlane, AnimatedBriefcase, AnimatedUser, AnimatedArrow } from '../../icons'

export const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderIcon = (iconName) => {
    if (iconName === 'plane') return <AnimatedPlane isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    if (iconName === 'briefcase') return <AnimatedBriefcase isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    if (iconName === 'user') return <AnimatedUser isParentHovered={isHovered} size={20} className="text-red-600 shrink-0" />
    return null
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group border border-gray-200"
    >
      <div className="w-full sm:w-44 md:w-48 lg:w-44 xl:w-52 h-44 sm:h-auto min-h-[175px] shrink-0 overflow-hidden bg-gray-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 min-w-0">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            {renderIcon(service.iconName)}
            <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors sm:whitespace-nowrap">
              {service.title}
            </h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="pt-2">
          <Link
            to={service.path}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <span>{service.linkText}</span>
            <AnimatedArrow isParentHovered={isHovered} size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
