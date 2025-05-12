"use client"

import React from 'react'

interface GradientTextProps {
  text: string
  className?: string
  gradient?: string
  animationSpeed?: number
}

const GradientText = ({ 
  text, 
  className = "", 
  gradient = "from-primary-500 via-accent-500 to-primary-600", 
  animationSpeed = 3
}: GradientTextProps) => {
  return (
    <span 
      className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient} animate-gradient ${className}`}
      style={{ 
        backgroundSize: `${text.length * 100}% 100%`,
        animationDuration: `${animationSpeed}s`
      }}
    >
      {text}
    </span>
  )
}

export default GradientText 