import { useRef, useEffect } from 'react'
import { ClockIcon } from 'lucide-animated'

export const AnimatedClock = ({ isParentHovered = false, size = 20, className = '', ...props }) => {
  const iconRef = useRef(null)

  useEffect(() => {
    if (isParentHovered) {
      iconRef.current?.startAnimation()
    } else {
      iconRef.current?.stopAnimation()
    }
  }, [isParentHovered])

  return (
    <ClockIcon
      ref={iconRef}
      animateOnHover={false}
      size={size}
      className={className}
      {...props}
    />
  )
}

