import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedUser, AnimatedArrow } from '../../icons'

export const FleetCard = ({ vehicle }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      <div className="w-full h-44 sm:h-48 overflow-hidden bg-gray-100">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
            {vehicle.name}
          </h3>

          <div className="flex items-center gap-4 text-xs font-semibold text-gray-700">
            <span className="flex items-center gap-1.5">
              <AnimatedUser isParentHovered={isHovered} size={15} className="text-red-600" />
              <span>{vehicle.passengers}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-red-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>{vehicle.luggage}</span>
            </span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        <div className="pt-4 flex justify-center">
          <Link
            to={vehicle.link}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <span>{vehicle.ctaText}</span>
            <AnimatedArrow isParentHovered={isHovered} size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
