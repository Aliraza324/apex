import { useRef, useEffect } from 'react'
import { PhoneCallIcon } from 'lucide-animated'

export const AnimatedPhone = ({ isParentHovered = false, size = 18, className = '', ...props }) => {
  const iconRef = useRef(null)

  useEffect(() => {
    if (isParentHovered) {
      iconRef.current?.startAnimation()
    } else {
      iconRef.current?.stopAnimation()
    }
  }, [isParentHovered])

  return (
    <PhoneCallIcon
      ref={iconRef}
      animateOnHover={false}
      size={size}
      className={className}
      {...props}
    />
  )
}

