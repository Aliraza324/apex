import { statsHeader, statsList } from '../../mockup/stats'
import { StatCard } from './StatCard'

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-xs font-bold tracking-widest text-red-600 uppercase block">
            {statsHeader.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {statsHeader.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            {statsHeader.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {statsList.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
