import { useState } from 'react'
import { passengerOptions, vehicleTypeOptions } from '../../mockup/booking'
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
    <div id="book" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-36 lg:-mt-44">
      <div className="relative bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] border border-gray-100 pt-12 sm:pt-14 p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-max max-w-[95%]">
          <div className="flex items-center p-1.5 bg-white rounded-2xl border border-gray-200/90 shadow-xl">
            <button
              type="button"
              onClick={() => setActiveTab('book')}
              className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'book'
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-600/30'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <AnimatedCar isParentHovered={activeTab === 'book'} size={18} />
              <span>Book a Ride</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('quote')}
              className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'quote'
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-600/30'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span>Get a Quote</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('manage')}
              className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'manage'
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-600/30'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <AnimatedCalendar isParentHovered={activeTab === 'manage'} size={16} className={activeTab === 'manage' ? 'text-white' : 'text-gray-500'} />
              <span>Manage Booking</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-900 tracking-tight">
              Pick-up Location <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <AnimatedSearch size={18} className="absolute left-4 text-gray-400" />
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter pickup address or airport"
                className="w-full pl-11 pr-10 py-3.5 bg-gray-50/90 hover:bg-gray-100/80 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-xs sm:text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 font-medium"
              />
              <svg className="w-4 h-4 text-gray-400 absolute right-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-900 tracking-tight">
              Drop-off Location <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <AnimatedSearch size={18} className="absolute left-4 text-gray-400" />
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Enter destination address"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50/90 hover:bg-gray-100/80 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-xs sm:text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-900 tracking-tight">
              Pick-up Date <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <AnimatedCalendar size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full pl-11 pr-3 py-3.5 bg-gray-50/90 hover:bg-gray-100/80 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 text-xs sm:text-sm text-gray-900 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-900 tracking-tight">
              Pick-up Time <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <AnimatedClock size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full pl-11 pr-3 py-3.5 bg-gray-50/90 hover:bg-gray-100/80 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 text-xs sm:text-sm text-gray-900 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-900 tracking-tight">
              Passengers
            </label>
            <div className="relative flex items-center">
              <AnimatedUser size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full pl-11 pr-8 py-3.5 bg-gray-50/90 hover:bg-gray-100/80 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 text-xs sm:text-sm text-gray-900 outline-none appearance-none transition-all font-medium cursor-pointer"
              >
                {passengerOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg className="w-4 h-4 text-gray-400 absolute right-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-900 tracking-tight">
              Vehicle Type
            </label>
            <div className="relative flex items-center">
              <AnimatedCar size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full pl-11 pr-8 py-3.5 bg-gray-50/90 hover:bg-gray-100/80 focus:bg-white rounded-xl border border-gray-200 focus:border-red-500 text-xs sm:text-sm text-gray-900 outline-none appearance-none transition-all font-medium cursor-pointer"
              >
                {vehicleTypeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg className="w-4 h-4 text-gray-400 absolute right-3.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div>
            <button
              type="button"
              onMouseEnter={() => setHoveredSubmit(true)}
              onMouseLeave={() => setHoveredSubmit(false)}
              className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Get Instant Price</span>
              <AnimatedArrow isParentHovered={hoveredSubmit} size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
