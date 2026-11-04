import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, contactDetails } from '../../mockup/navigation'
import { AnimatedPhone } from '../../icons'
import logoImg from '../../assets/logo.png'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredPhone, setHoveredPhone] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Apex Private Hire"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <div key={item.label} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors flex items-center gap-1 ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {item.label}
                {item.dropdown && (
                  <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </NavLink>

              {item.dropdown && (
                <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                  <div className="w-56 bg-slate-900 border border-white/10 rounded-xl shadow-2xl py-2 px-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div
            onMouseEnter={() => setHoveredPhone(true)}
            onMouseLeave={() => setHoveredPhone(false)}
            className="flex items-center gap-2 text-white text-sm font-semibold cursor-pointer"
          >
            <AnimatedPhone isParentHovered={hoveredPhone} className="text-red-500" />
            <Link to={`tel:${contactDetails.phone}`} className="text-white hover:text-red-400 transition-colors">
              {contactDetails.displayPhone}
            </Link>
          </div>

          <Link
            to="/#book"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Book a Ride
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-white text-base py-2 font-medium"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <Link
              to={`tel:${contactDetails.phone}`}
              className="text-gray-200 text-sm font-semibold"
            >
              {contactDetails.displayPhone}
            </Link>
            <Link
              to="/#book"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center bg-red-600 text-white font-semibold py-2.5 rounded-full"
            >
              Book a Ride
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

