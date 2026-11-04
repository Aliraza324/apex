import { useRef, useEffect } from 'react'
import { ArrowRightIcon } from 'lucide-animated'

export const AnimatedArrow = ({ isParentHovered = false, size = 18, className = '', ...props }) => {
  const iconRef = useRef(null)

  useEffect(() => {
    if (isParentHovered) {
      iconRef.current?.startAnimation()
    } else {
      iconRef.current?.stopAnimation()
    }
  }, [isParentHovered])

  return (
    <ArrowRightIcon
      ref={iconRef}
      animateOnHover={false}
      size={size}
      className={className}
      {...props}
    />
  )
}

