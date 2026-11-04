import { useState } from 'react'
import { bookingTabs, passengerOptions, vehicleTypeOptions } from '../../mockup/booking'
import {
  AnimatedCar,
  AnimatedSearch,
  AnimatedCalendar,
  AnimatedClock,
  AnimatedUser,
  AnimatedArrow
} from '../../icons'

export const BookingWidget = () => {
  const [activeTab, setActiveTab] = useState('book')
  const [hoveredSubmit, setHoveredSubmit] = useState(false)
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [vehicleType, setVehicleType] = useState('standard')

  return (
    <div id="book" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-100 bg-gray-50/70">
          {bookingTabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-4 sm:px-6 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-inner'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                }`}
              >
                {tab.id === 'book' && (
                  <AnimatedCar isParentHovered={isActive} size={18} />
                )}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Pick-up Location <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <AnimatedSearch size={18} className="absolute left-3.5 text-gray-400" />
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Enter pickup address or airport"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 hover:bg-gray-100/70 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm text-gray-900 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Drop-off Location <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <AnimatedSearch size={18} className="absolute left-3.5 text-gray-400" />
                <input
                  type="text"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="Enter destination address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 hover:bg-gray-100/70 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm text-gray-900 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Pick-up Date <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <AnimatedCalendar size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-gray-50 hover:bg-gray-100/70 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 text-sm text-gray-900 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Pick-up Time <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <AnimatedClock size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-gray-50 hover:bg-gray-100/70 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 text-sm text-gray-900 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Passengers
              </label>
              <div className="relative flex items-center">
                <AnimatedUser size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-gray-50 hover:bg-gray-100/70 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 text-sm text-gray-900 outline-none appearance-none transition-all cursor-pointer"
                >
                  {passengerOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Vehicle Type
              </label>
              <div className="relative flex items-center">
                <AnimatedCar size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-gray-50 hover:bg-gray-100/70 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 text-sm text-gray-900 outline-none appearance-none transition-all cursor-pointer"
                >
                  {vehicleTypeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <button
                type="button"
                onMouseEnter={() => setHoveredSubmit(true)}
                onMouseLeave={() => setHoveredSubmit(false)}
                className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get Instant Price</span>
                <AnimatedArrow isParentHovered={hoveredSubmit} size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

