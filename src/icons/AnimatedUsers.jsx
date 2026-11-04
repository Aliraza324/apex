import { useRef, useEffect } from 'react'
import { UsersIcon } from 'lucide-animated'

export const AnimatedUsers = ({ isParentHovered = false, size = 20, className = '', ...props }) => {
  const iconRef = useRef(null)

  useEffect(() => {
    if (isParentHovered) {
      iconRef.current?.startAnimation()
    } else {
      iconRef.current?.stopAnimation()
    }
  }, [isParentHovered])

  return (
    <UsersIcon
      ref={iconRef}
      animateOnHover={false}
      size={size}
      className={className}
      {...props}
    />
  )
}

