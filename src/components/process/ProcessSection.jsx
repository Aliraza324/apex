import { processHeader, processSteps } from '../../mockup/process'
import { ProcessStepCard } from './ProcessStepCard'

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 border border-red-200 px-3.5 py-1 rounded-full inline-block">
            {processHeader.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {processHeader.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {processHeader.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-6 relative">
          {processSteps.map((step, index) => (
            <div key={step.stepNumber} className="flex-1 flex items-center w-full">
              <ProcessStepCard step={step} />
              {index < processSteps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-4 text-gray-300">
                  <svg className="w-8 h-8 text-gray-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

