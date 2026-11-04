import { statsHeader, statsList } from '../../mockup/stats'
import { StatCard } from './StatCard'

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 border border-red-200 px-3.5 py-1 rounded-full inline-block">
            {statsHeader.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {statsHeader.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {statsHeader.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {statsList.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

