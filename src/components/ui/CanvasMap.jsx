import { useEffect, useRef, useState, useCallback } from 'react'
import CanvasDrawer from '../../utils/canvasDrawing.js'
import MapAnimations from '../../utils/mapAnimations.js'
import AnimatedTooltip from './AnimatedTooltip'
import { ZONES } from '../../data/zones'

const CanvasMap = ({ 
  onZoneClick, 
  selectedZone, 
  className = "" 
}) => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const drawerRef = useRef(null)
  const animationsRef = useRef(null)
  const animationIdRef = useRef(null)
  
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [hoveredZone, setHoveredZone] = useState(null)
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, zone: null })
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 })
  const [isDragging, setIsDragging] = useState(false)
  const [lastTouch, setLastTouch] = useState(null)
  
  // Zone positions on canvas (relative to canvas center)
  const zonePositions = {
    bretagne: { x: 150, y: 250, radius: 40 },
    mediterranee: { x: 500, y: 350, radius: 40 },
    atlantique: { x: 300, y: 300, radius: 35 },
    manche: { x: 250, y: 200, radius: 30 },
    corse: { x: 600, y: 400, radius: 25 },
    domtom: { x: 100, y: 500, radius: 30 }
  }

  // Initialize canvas and animations
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const container = containerRef.current
    
    // Set canvas size
    const updateDimensions = () => {
      const rect = container.getBoundingClientRect()
      const width = Math.min(800, rect.width)
      const height = Math.min(600, width * 0.75)
      
      canvas.width = width
      canvas.height = height
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      setDimensions({ width, height })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Initialize drawer and animations
    drawerRef.current = new CanvasDrawer(canvas, ctx)
    animationsRef.current = new MapAnimations()
    animationsRef.current.initParticles(width, height, 30)

    // Start animation loop
    let lastTime = 0
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      // Clear canvas
      drawerRef.current.clearCanvas(currentTime)
      
      // Draw waves
      drawerRef.current.drawWaves(currentTime)
      
      // Draw France outline
      drawerRef.current.drawFranceOutline()
      
      // Update and draw particles
      animationsRef.current.updateParticles(width, height, deltaTime)
      animationsRef.current.updateWaves(deltaTime)
      drawerRef.current.drawParticles(animationsRef.current.particles)
      
      // Draw zone markers
      Object.entries(zonePositions).forEach(([zoneId, pos]) => {
        const zone = ZONES.find(z => z.id === zoneId)
        const isHovered = hoveredZone === zoneId
        const isSelected = selectedZone?.id === zoneId
        
        drawerRef.current.drawZoneMarker(
          pos.x, pos.y, pos.radius, isHovered, isSelected, currentTime
        )
        drawerRef.current.drawZoneLabel(
          pos.x, pos.y, zone?.title.split(':')[0] || zoneId, isHovered
        )
      })
      
      // Draw compass rose
      drawerRef.current.drawCompassRose(width - 60, height - 60, 30)
      
      // Draw zoom controls
      drawerRef.current.drawZoomControls(transform.scale, 3, 0.5)
      
      animationIdRef.current = requestAnimationFrame(animate)
    }
    
    animationIdRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', updateDimensions)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      animationsRef.current?.cleanup()
    }
  }, [hoveredZone, selectedZone, transform.scale])

  // Mouse events
  const handleMouseMove = useCallback((e) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Check for zone hover
    let foundZone = null
    Object.entries(zonePositions).forEach(([zoneId, pos]) => {
      if (drawerRef.current?.isPointInCircle(x, y, pos.x, pos.y, pos.radius)) {
        foundZone = { id: zoneId, ...ZONES.find(z => z.id === zoneId) }
      }
    })
    
    if (foundZone && foundZone.id !== hoveredZone) {
      setHoveredZone(foundZone.id)
      setTooltip({
        visible: true,
        x: e.clientX,
        y: e.clientY,
        zone: foundZone
      })
    } else if (!foundZone && hoveredZone) {
      setHoveredZone(null)
      setTooltip({ visible: false, x: 0, y: 0, zone: null })
    } else if (foundZone) {
      setTooltip(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }))
    }
  }, [hoveredZone])

  const handleMouseLeave = useCallback(() => {
    setHoveredZone(null)
    setTooltip({ visible: false, x: 0, y: 0, zone: null })
  }, [])

  const handleClick = useCallback((e) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Check for zone click
    Object.entries(zonePositions).forEach(([zoneId, pos]) => {
      if (drawerRef.current?.isPointInCircle(x, y, pos.x, pos.y, pos.radius)) {
        const zone = ZONES.find(z => z.id === zoneId)
        if (zone && onZoneClick) {
          onZoneClick(zone, { x: e.clientX, y: e.clientY })
        }
      }
    })
  }, [onZoneClick])

  // Touch events
  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    const touch = e.touches[0]
    setLastTouch({ x: touch.clientX, y: touch.clientY })
    setIsDragging(true)
  }, [])

  const handleTouchMove = useCallback((e) => {
    e.preventDefault()
    if (!isDragging || !lastTouch) return

    const touch = e.touches[0]
    const deltaX = touch.clientX - lastTouch.x
    const deltaY = touch.clientY - lastTouch.y

    setTransform(prev => ({
      ...prev,
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }))

    setLastTouch({ x: touch.clientX, y: touch.clientY })
  }, [isDragging, lastTouch])

  const handleTouchEnd = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
    setLastTouch(null)
  }, [])

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setTransform(prev => ({
      ...prev,
      scale: Math.min(prev.scale * 1.2, 3)
    }))
  }, [])

  const handleZoomOut = useCallback(() => {
    setTransform(prev => ({
      ...prev,
      scale: Math.max(prev.scale / 1.2, 0.5)
    }))
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Canvas container */}
      <div 
        ref={containerRef}
        className="relative bg-gradient-to-br from-maritime-sky/20 to-maritime-azure/20 rounded-3xl p-8 overflow-hidden"
        style={{ minHeight: '400px' }}
      >
        <canvas
          ref={canvasRef}
          className="cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        />
        
        {/* Zoom controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center text-maritime-deep hover:bg-white transition-colors"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center text-maritime-deep hover:bg-white transition-colors"
          >
            −
          </button>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 text-sm text-maritime-slate">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="w-3 h-3 bg-maritime-azure rounded-full"></div>
            <span>Zone de navigation</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="w-3 h-3 bg-maritime-coral rounded-full"></div>
            <span>Zone sélectionnée</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2">
            <span className="text-maritime-azure">👆</span>
            <span>Cliquez pour explorer</span>
          </div>
        </div>
      </div>
      
      {/* Animated tooltip */}
      <AnimatedTooltip
        visible={tooltip.visible}
        x={tooltip.x}
        y={tooltip.y}
        zone={tooltip.zone}
        onClose={() => setTooltip({ visible: false, x: 0, y: 0, zone: null })}
      />
    </div>
  )
}

export default CanvasMap
