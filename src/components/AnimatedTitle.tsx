"use client"

import React from 'react'
import { useEffect, useState } from 'react'

interface AnimatedTitleProps {
  text: string
  className?: string
}

const AnimatedTitle = ({ text, className = "" }: AnimatedTitleProps) => {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <h1 className={`relative ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 transform ${
            mounted 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
          style={{ 
            transitionDelay: `${index * 50}ms`,
            color: index % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  )
}

export default AnimatedTitle 