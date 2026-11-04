import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, contactDetails } from '../../mockup/navigation'
import { AnimatedPhone } from '../../icons'
import logoImg from '../../assets/logo.png'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredPhone, setHoveredPhone] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40 w-full bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
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
                    <div className="w-56 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2 px-1">
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
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
            aria-label="Open Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src={logoImg}
                  alt="Apex Private Hire"
                  className="h-9 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-200 hover:text-red-500 py-3 border-b border-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <span className="text-xs text-gray-500 font-normal">
                      ({item.dropdown.length} items)
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 pb-4 space-y-4 border-t border-white/10">
            <div className="flex items-center gap-2.5 text-gray-300 text-sm font-semibold">
              <AnimatedPhone isParentHovered={true} className="text-red-500" />
              <Link
                to={`tel:${contactDetails.phone}`}
                className="hover:text-white transition-colors"
              >
                {contactDetails.displayPhone}
              </Link>
            </div>

            <Link
              to="/#book"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-red-600/30 transition-all"
            >
              Book a Ride
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
