import { Link } from 'react-router-dom'
import {
  contactDetails,
  socialLinks,
  footerServices,
  footerUsefulLinks,
  footerLegalLinks
} from '../../mockup/navigation'
import logoImg from '../../assets/logo.png'

export const Footer = () => {
  const renderSocialIcon = (id) => {
    if (id === 'facebook') {
      return (
        <svg className="w-4 h-4 fill-white text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    }
    if (id === 'twitter') {
      return (
        <svg className="w-3.5 h-3.5 fill-white text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
    if (id === 'instagram') {
      return (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    }
    if (id === 'linkedin') {
      return (
        <svg className="w-4 h-4 fill-white text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    }
    return null
  }

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
              {socialLinks.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 border border-white/20 hover:border-red-600 flex items-center justify-center text-white transition-all hover:scale-110"
                >
                  {renderSocialIcon(item.id)}
                </Link>
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
