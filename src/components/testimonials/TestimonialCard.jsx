import { useState } from 'react'

export const TestimonialCard = ({ testimonial }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-red-100 hover:border-red-400/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 text-red-600 fill-red-600 transition-transform duration-200 ${
                isHovered ? 'scale-110' : ''
              }`}
              viewBox="0 0 24 24"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        <p className="text-sm text-gray-700 leading-relaxed italic">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover border border-red-200 shrink-0"
        />
        <div>
          <h4 className="text-sm font-bold text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-500 font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )
}

