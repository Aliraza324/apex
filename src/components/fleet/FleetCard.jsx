import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedUser, AnimatedArrow } from '../../icons'

export const FleetCard = ({ vehicle }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl border border-gray-200/80 hover:border-red-500/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
    >
      <div className="h-48 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
            {vehicle.name}
          </h3>

          <div className="flex items-center gap-4 text-xs font-semibold text-gray-600 pt-1">
            <span className="inline-flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md">
              <AnimatedUser isParentHovered={isHovered} size={14} className="text-red-600" />
              {vehicle.passengers}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md">
              <svg className="w-3.5 h-3.5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              {vehicle.luggage}
            </span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed pt-2">
            {vehicle.description}
          </p>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <Link
            to={vehicle.link}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <span>{vehicle.ctaText}</span>
            <AnimatedArrow isParentHovered={isHovered} size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}

