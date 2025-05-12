"use client"

import React from 'react'
import { useEffect, useState } from 'react'

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const AnimatedCard = ({ children, delay = 0, className = "" }: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`
        transform transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02]
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default AnimatedCard 