import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const AnimatedTooltip = ({ 
  visible, 
  x, 
  y, 
  zone, 
  onClose 
}) => {
  const tooltipRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (visible && zone) {
      setIsVisible(true)
      updatePosition(x, y)
    } else {
      setIsVisible(false)
    }
  }, [visible, zone, x, y])

  const updatePosition = (newX, newY) => {
    if (!tooltipRef.current) return

    const tooltip = tooltipRef.current
    const rect = tooltip.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    // Calculate optimal position to keep tooltip in viewport
    let finalX = newX + 15
    let finalY = newY - 15
    
    // Adjust if tooltip would go off screen
    if (finalX + rect.width > viewportWidth) {
      finalX = newX - rect.width - 15
    }
    
    if (finalY - rect.height < 0) {
      finalY = newY + 15
    }
    
    setPosition({ x: finalX, y: finalY })
  }

  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      // Entrance animation
      gsap.fromTo(tooltipRef.current, 
        {
          scale: 0,
          opacity: 0,
          y: 20
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "back.out(1.7)"
        }
      )
    }
  }, [isVisible])

  if (!isVisible || !zone) return null

  return (
    <div
      ref={tooltipRef}
      className="fixed z-50 pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    >
      {/* Glassmorphism tooltip */}
      <div className="relative">
        {/* Backdrop blur container */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-4 shadow-2xl">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-maritime-azure/20 to-maritime-marine/20 rounded-2xl -z-10 blur-sm"></div>
          
          {/* Content */}
          <div className="space-y-3">
            {/* Zone title */}
            <h3 className="text-lg font-title font-semibold text-white drop-shadow-lg">
              {zone.title.split(':')[0]}
            </h3>
            
            {/* Stats */}
            <div className="flex gap-4 text-sm text-white/90">
              <div className="flex items-center gap-1">
                <span className="text-maritime-seafoam">🏢</span>
                <span>{zone.stats.ports} ports</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-maritime-seafoam">⚓</span>
                <span>{zone.stats.moorings} mouillages</span>
              </div>
            </div>
            
            {/* Feature highlight */}
            <div className="px-3 py-2 bg-maritime-azure/30 rounded-lg">
              <div className="text-sm text-white font-medium">
                ✨ {zone.stats.feature}
              </div>
            </div>
            
            {/* Click hint */}
            <div className="text-xs text-white/70 flex items-center gap-1">
              <span>👆</span>
              <span>Cliquez pour explorer</span>
            </div>
          </div>
        </div>
        
        {/* Arrow pointing to zone */}
        <div 
          className="absolute w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/20"
          style={{
            left: '50%',
            top: '100%',
            transform: 'translateX(-50%)'
          }}
        />
      </div>
    </div>
  )
}

export default AnimatedTooltip
