import { useState, useRef, useEffect } from 'react'
import { MapPin, Anchor, Waves } from 'lucide-react'
import ZoneCard from '../ui/ZoneCard'
import { ZONES } from '../../data/zones'

const ZonesSection = ({ onZoneClick }) => {
  const [hoveredZone, setHoveredZone] = useState(null)
  const [selectedZone, setSelectedZone] = useState(null)
  const sectionRef = useRef(null)

  const handleZoneHover = (zoneId) => {
    setHoveredZone(zoneId)
  }

  const handleZoneClick = (zone) => {
    setSelectedZone(zone)
    // Scroll to the corresponding card
    const cardElement = document.getElementById(`zone-card-${zone.id}`)
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleCardClick = (zone) => {
    if (onZoneClick) {
      onZoneClick(zone)
    }
  }

  return (
    <section ref={sectionRef} id="zones" className="py-16 md:py-24 bg-maritime-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-title font-semibold text-maritime-deep mb-6 text-center">
          Cartes marines par région : trouvez votre zone de navigation
        </h2>
        
        <p className="text-lg md:text-xl text-maritime-slate text-center mb-16 max-w-3xl mx-auto font-body">
          Chaque région de France a ses spécificités : marées, météo, ports, dangers. 
          Découvrez les particularités de votre zone de navigation préférée.
        </p>
        
        {/* Interactive France SVG Map */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-maritime-sky/20 to-maritime-azure/20 rounded-3xl p-8">
              
              {/* Simplified France SVG Map */}
              <svg 
                viewBox="0 0 800 600" 
                className="w-full h-auto max-h-96"
                aria-label="Carte interactive de la France avec les zones de navigation"
              >
                {/* Background */}
                <rect width="800" height="600" fill="url(#oceanGradient)" rx="20" />
                
                {/* France outline (simplified) */}
                <path 
                  d="M 100 200 L 200 150 L 300 180 L 400 160 L 500 200 L 600 180 L 700 200 L 750 250 L 700 350 L 650 400 L 600 450 L 500 480 L 400 470 L 300 450 L 200 400 L 150 350 L 100 300 Z" 
                  fill="url(#landGradient)" 
                  stroke="#2C5F7F" 
                  strokeWidth="2"
                />
                
                {/* Zone regions (clickable) */}
                {/* Bretagne */}
                <circle 
                  cx="150" 
                  cy="250" 
                  r="40" 
                  fill={hoveredZone === 'bretagne' ? '#FF6F61' : '#4A90B8'}
                  fillOpacity={hoveredZone === 'bretagne' ? 0.8 : 0.6}
                  className="cursor-pointer transition-all hover:scale-110"
                  onClick={() => handleZoneClick(ZONES[0])}
                  onMouseEnter={() => handleZoneHover('bretagne')}
                  onMouseLeave={() => handleZoneHover(null)}
                  aria-label="Zone Bretagne"
                />
                <text x="150" y="255" textAnchor="middle" className="text-sm font-semibold fill-white pointer-events-none">
                  Bretagne
                </text>
                
                {/* Méditerranée */}
                <circle 
                  cx="500" 
                  cy="350" 
                  r="40" 
                  fill={hoveredZone === 'mediterranee' ? '#FF6F61' : '#4A90B8'}
                  fillOpacity={hoveredZone === 'mediterranee' ? 0.8 : 0.6}
                  className="cursor-pointer transition-all hover:scale-110"
                  onClick={() => handleZoneClick(ZONES[1])}
                  onMouseEnter={() => handleZoneHover('mediterranee')}
                  onMouseLeave={() => handleZoneHover(null)}
                  aria-label="Zone Méditerranée"
                />
                <text x="500" y="355" textAnchor="middle" className="text-sm font-semibold fill-white pointer-events-none">
                  Méditerranée
                </text>
                
                {/* Atlantique */}
                <circle 
                  cx="300" 
                  cy="300" 
                  r="35" 
                  fill={hoveredZone === 'atlantique' ? '#FF6F61' : '#4A90B8'}
                  fillOpacity={hoveredZone === 'atlantique' ? 0.8 : 0.6}
                  className="cursor-pointer transition-all hover:scale-110"
                  onClick={() => handleZoneClick(ZONES[2])}
                  onMouseEnter={() => handleZoneHover('atlantique')}
                  onMouseLeave={() => handleZoneHover(null)}
                  aria-label="Zone Atlantique"
                />
                <text x="300" y="305" textAnchor="middle" className="text-sm font-semibold fill-white pointer-events-none">
                  Atlantique
                </text>
                
                {/* Manche */}
                <circle 
                  cx="250" 
                  cy="200" 
                  r="30" 
                  fill={hoveredZone === 'manche' ? '#FF6F61' : '#4A90B8'}
                  fillOpacity={hoveredZone === 'manche' ? 0.8 : 0.6}
                  className="cursor-pointer transition-all hover:scale-110"
                  onClick={() => handleZoneClick(ZONES[3])}
                  onMouseEnter={() => handleZoneHover('manche')}
                  onMouseLeave={() => handleZoneHover(null)}
                  aria-label="Zone Manche"
                />
                <text x="250" y="205" textAnchor="middle" className="text-sm font-semibold fill-white pointer-events-none">
                  Manche
                </text>
                
                {/* Corse */}
                <circle 
                  cx="600" 
                  cy="400" 
                  r="25" 
                  fill={hoveredZone === 'corse' ? '#FF6F61' : '#4A90B8'}
                  fillOpacity={hoveredZone === 'corse' ? 0.8 : 0.6}
                  className="cursor-pointer transition-all hover:scale-110"
                  onClick={() => handleZoneClick(ZONES[4])}
                  onMouseEnter={() => handleZoneHover('corse')}
                  onMouseLeave={() => handleZoneHover(null)}
                  aria-label="Zone Corse"
                />
                <text x="600" y="405" textAnchor="middle" className="text-sm font-semibold fill-white pointer-events-none">
                  Corse
                </text>
                
                {/* DOM-TOM */}
                <circle 
                  cx="100" 
                  cy="500" 
                  r="30" 
                  fill={hoveredZone === 'domtom' ? '#FF6F61' : '#4A90B8'}
                  fillOpacity={hoveredZone === 'domtom' ? 0.8 : 0.6}
                  className="cursor-pointer transition-all hover:scale-110"
                  onClick={() => handleZoneClick(ZONES[5])}
                  onMouseEnter={() => handleZoneHover('domtom')}
                  onMouseLeave={() => handleZoneHover(null)}
                  aria-label="Zone DOM-TOM"
                />
                <text x="100" y="505" textAnchor="middle" className="text-sm font-semibold fill-white pointer-events-none">
                  DOM-TOM
                </text>
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A8D8EA" />
                    <stop offset="100%" stopColor="#4A90B8" />
                  </linearGradient>
                  <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8D5C4" />
                    <stop offset="100%" stopColor="#6B7C8C" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Legend */}
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-maritime-slate">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-maritime-azure rounded-full"></div>
                  <span>Zone de navigation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-maritime-coral rounded-full"></div>
                  <span>Zone sélectionnée</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-4 h-4 text-maritime-azure" />
                  <span>Cliquez pour explorer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Zone Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ZONES.map((zone) => (
            <div 
              key={zone.id} 
              id={`zone-card-${zone.id}`}
              className={`transition-all duration-300 ${
                selectedZone?.id === zone.id ? 'scale-105 shadow-2xl' : ''
              }`}
            >
              <ZoneCard 
                zone={zone} 
                onZoneClick={handleCardClick}
              />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-maritime-azure/10 to-maritime-marine/10 rounded-3xl p-8 md:p-12 border border-maritime-azure/20">
            <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-4">
              Prêt à explorer votre zone ?
            </h3>
            <p className="text-lg text-maritime-slate mb-8 font-body">
              Utilisez notre carte interactive pour planifier votre prochaine navigation
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('carte-interactive')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-maritime-azure text-white rounded-full hover:bg-maritime-marine transition-all transform hover:scale-105 shadow-lg focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
            >
              <MapPin className="w-5 h-5" />
              Ouvrir la carte interactive
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZonesSection
