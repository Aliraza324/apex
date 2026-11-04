import { useRef, useEffect } from 'react'
import { CreditCardIcon } from 'lucide-animated'

export const AnimatedCreditCard = ({ isParentHovered = false, size = 20, className = '', ...props }) => {
  const iconRef = useRef(null)

  useEffect(() => {
    if (isParentHovered) {
      iconRef.current?.startAnimation()
    } else {
      iconRef.current?.stopAnimation()
    }
  }, [isParentHovered])

  return (
    <CreditCardIcon
      ref={iconRef}
      animateOnHover={false}
      size={size}
      className={className}
      {...props}
    />
  )
}

