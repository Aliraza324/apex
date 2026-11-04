import { fleetHeader, fleetVehicles } from '../../mockup/fleet'
import { FleetCard } from './FleetCard'

export const FleetSection = () => {
  return (
    <section id="fleet" className="py-20 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-xs font-bold tracking-widest text-red-600 uppercase block">
            {fleetHeader.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {fleetHeader.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            {fleetHeader.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetVehicles.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  )
}
