import { Link } from 'react-router-dom'
import {
  contactDetails,
  footerServices,
  footerUsefulLinks,
  footerLegalLinks
} from '../../mockup/navigation'
import logoImg from '../../assets/logo.png'

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="Apex Private Hire"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              A trusted UK private hire and airport transfer company, providing reliable, safe, and comfortable transportation for individuals and businesses.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((network) => (
                <button
                  key={network}
                  type="button"
                  aria-label={network}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 flex items-center justify-center text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {network[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-sm text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Useful Links
            </h4>
            <ul className="space-y-2.5">
              {footerUsefulLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-sm text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="space-y-1">
                <span className="block text-gray-500 font-semibold text-[11px] uppercase">
                  Phone
                </span>
                <Link
                  to={`tel:${contactDetails.phone}`}
                  className="text-white hover:text-red-400 font-medium transition-colors block"
                >
                  {contactDetails.displayPhone}
                </Link>
              </div>

              <div className="space-y-1">
                <span className="block text-gray-500 font-semibold text-[11px] uppercase">
                  Email
                </span>
                <Link
                  to={`mailto:${contactDetails.email}`}
                  className="text-gray-300 hover:text-red-400 transition-colors block break-all"
                >
                  {contactDetails.email}
                </Link>
              </div>

              <div className="space-y-1">
                <span className="block text-gray-500 font-semibold text-[11px] uppercase">
                  Location
                </span>
                <p className="text-gray-300">
                  {contactDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Apex Private Hire. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

