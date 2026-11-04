import { useState, useEffect } from 'react'
import logoImg from '../../assets/logo.png'

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsFading(true)
          setTimeout(() => {
            document.body.style.overflow = 'auto'
            onComplete?.()
          }, 400)
          return 100
        }
        const increment = Math.floor(Math.random() * 12) + 8
        return Math.min(prev + increment, 100)
      })
    }, 60)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = 'auto'
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
        isFading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center space-y-7">
        <div className="relative">
          <div className="absolute -inset-4 bg-red-600/20 rounded-full blur-xl animate-pulse" />
          <img
            src={logoImg}
            alt="Apex Private Hire"
            className="relative h-14 sm:h-16 w-auto object-contain animate-fade-in"
          />
        </div>

        <div className="w-56 sm:w-64 space-y-3">
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-rose-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(220,38,38,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
            <span>Loading Experience</span>
            <span className="text-red-500 font-mono">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

