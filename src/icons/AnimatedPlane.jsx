import { useRef, useEffect } from 'react'
import { AirplaneIcon } from 'lucide-animated'

export const AnimatedPlane = ({ isParentHovered = false, size = 20, className = '', ...props }) => {
  const iconRef = useRef(null)

  useEffect(() => {
    if (isParentHovered) {
      iconRef.current?.startAnimation()
    } else {
      iconRef.current?.stopAnimation()
    }
  }, [isParentHovered])

  return (
    <AirplaneIcon
      ref={iconRef}
      animateOnHover={false}
      size={size}
      className={className}
      {...props}
    />
  )
}

