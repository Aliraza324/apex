import { useRef, useEffect } from 'react'
import { ZapIcon } from 'lucide-animated'

export const AnimatedZap = ({ isParentHovered = false, size = 20, className = '', ...props }) => {
  const iconRef = useRef(null)

  useEffect(() => {
    if (isParentHovered) {
      iconRef.current?.startAnimation()
    } else {
      iconRef.current?.stopAnimation()
    }
  }, [isParentHovered])

  return (
    <ZapIcon
      ref={iconRef}
      animateOnHover={false}
      size={size}
      className={className}
      {...props}
    />
  )
}

