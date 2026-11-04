import { testimonialsHeader, testimonialsList } from '../../mockup/testimonials'
import { TestimonialCard } from './TestimonialCard'

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-rose-50/50 border-y border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-white border border-red-200 px-3.5 py-1 rounded-full inline-block">
            {testimonialsHeader.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {testimonialsHeader.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsList.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

