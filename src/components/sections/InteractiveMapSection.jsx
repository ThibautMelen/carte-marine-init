import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import { MapPin, Navigation, Ruler, Layers, ChevronDown, ChevronUp, RotateCcw, Compass } from 'lucide-react'
import { ZONES, ZONE_COORDINATES } from '../../data/zones'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in React Leaflet
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom hook for map instance
function MapController({ onMapReady }) {
  const map = useMap()
  
  useEffect(() => {
    if (onMapReady) {
      onMapReady(map)
    }
  }, [map, onMapReady])
  
  return null
}

// Distance calculation function
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3 // Earth's radius in meters
  const φ1 = lat1 * Math.PI/180
  const φ2 = lat2 * Math.PI/180
  const Δφ = (lat2-lat1) * Math.PI/180
  const Δλ = (lon2-lon1) * Math.PI/180

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

  return R * c // Distance in meters
}

const InteractiveMapSection = () => {
  const [distancePoints, setDistancePoints] = useState([])
  const [distance, setDistance] = useState(0)
  const [showPorts, setShowPorts] = useState(true)
  const [showDangers, setShowDangers] = useState(true)
  const [selectedZone, setSelectedZone] = useState('')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [userLocation, setUserLocation] = useState(null)
  const [mapInstance, setMapInstance] = useState(null)
  const [isGeolocating, setIsGeolocating] = useState(false)

  // Handle map click for distance calculation
  const handleMapClick = (e) => {
    const newPoint = [e.latlng.lat, e.latlng.lng]
    
    if (distancePoints.length < 2) {
      const newPoints = [...distancePoints, newPoint]
      setDistancePoints(newPoints)
      
      if (newPoints.length === 2) {
        const dist = calculateDistance(
          newPoints[0][0], newPoints[0][1],
          newPoints[1][0], newPoints[1][1]
        )
        setDistance(dist)
      }
    } else {
      // Reset and start new measurement
      setDistancePoints([newPoint])
      setDistance(0)
    }
  }

  // Reset distance measurement
  const resetDistance = () => {
    setDistancePoints([])
    setDistance(0)
  }

  // Handle zone selection
  const handleZoneSelect = (zoneId) => {
    setSelectedZone(zoneId)
    if (mapInstance && ZONE_COORDINATES[zoneId]) {
      mapInstance.flyTo(ZONE_COORDINATES[zoneId], 8)
    }
  }

  // Get user location
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert('La géolocalisation n\'est pas supportée par votre navigateur')
      return
    }

    setIsGeolocating(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setUserLocation([latitude, longitude])
        if (mapInstance) {
          mapInstance.flyTo([latitude, longitude], 12)
        }
        setIsGeolocating(false)
      },
      (error) => {
        console.error('Erreur de géolocalisation:', error)
        alert('Impossible d\'obtenir votre position')
        setIsGeolocating(false)
      }
    )
  }

  // Format distance for display
  const formatDistance = (meters) => {
    const nauticalMiles = meters / 1852
    const time5kn = (nauticalMiles / 5) * 60 // minutes
    const time15kn = (nauticalMiles / 15) * 60 // minutes
    
    return {
      nauticalMiles: nauticalMiles.toFixed(2),
      time5kn: Math.round(time5kn),
      time15kn: Math.round(time15kn)
    }
  }

  const distanceInfo = distance > 0 ? formatDistance(distance) : null

  return (
    <section id="carte-interactive" className="py-16 md:py-24 bg-maritime-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-title font-semibold text-maritime-deep mb-6 text-center">
          Carte marine interactive de France
        </h2>
        
        <p className="text-lg md:text-xl text-maritime-slate text-center mb-16 max-w-3xl mx-auto font-body">
          Explorez les côtes françaises avec notre carte interactive. 
          Calculez distances, découvrez ports et mouillages, planifiez vos navigations.
        </p>
        
        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '80vh' }}>
          {/* Floating Sidebar */}
          <div className={`absolute top-4 right-4 z-[1000] bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg border border-maritime-sky/20 transition-all duration-300 ${
            isSidebarCollapsed ? 'w-12' : 'w-80'
          }`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-maritime-sky/20">
              {!isSidebarCollapsed && (
                <h3 className="font-title font-semibold text-maritime-deep">Outils</h3>
              )}
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="p-2 hover:bg-maritime-sky/20 rounded-lg transition"
                aria-label={isSidebarCollapsed ? 'Ouvrir la barre latérale' : 'Fermer la barre latérale'}
              >
                {isSidebarCollapsed ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
              </button>
            </div>
            
            {!isSidebarCollapsed && (
              <div className="p-4 space-y-6">
                {/* Zone Selector */}
                <div>
                  <label className="block text-sm font-semibold text-maritime-deep mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Zone de navigation
                  </label>
                  <select
                    value={selectedZone}
                    onChange={(e) => handleZoneSelect(e.target.value)}
                    className="w-full p-3 rounded-lg border border-maritime-sky/30 focus:border-maritime-azure focus:outline-none transition"
                  >
                    <option value="">Sélectionner une zone</option>
                    {Object.entries(ZONE_COORDINATES).map(([zoneId, coords]) => {
                      const zone = ZONES.find(z => z.id === zoneId)
                      return (
                        <option key={zoneId} value={zoneId}>
                          {zone?.title || zoneId}
                        </option>
                      )
                    })}
                  </select>
                </div>
                
                {/* Layer Toggles */}
                <div>
                  <label className="block text-sm font-semibold text-maritime-deep mb-3">
                    <Layers className="w-4 h-4 inline mr-2" />
                    Couches
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={showPorts}
                        onChange={(e) => setShowPorts(e.target.checked)}
                        className="w-4 h-4 text-maritime-azure rounded focus:ring-maritime-azure"
                      />
                      <span className="text-sm text-maritime-slate">Ports et mouillages</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={showDangers}
                        onChange={(e) => setShowDangers(e.target.checked)}
                        className="w-4 h-4 text-maritime-azure rounded focus:ring-maritime-azure"
                      />
                      <span className="text-sm text-maritime-slate">Dangers et obstacles</span>
                    </label>
                  </div>
                </div>
                
                {/* Distance Calculator */}
                <div>
                  <label className="block text-sm font-semibold text-maritime-deep mb-3">
                    <Ruler className="w-4 h-4 inline mr-2" />
                    Calculateur de distance
                  </label>
                  <div className="space-y-3">
                    <p className="text-xs text-maritime-slate">
                      Cliquez sur la carte pour marquer 2 points
                    </p>
                    {distanceInfo && (
                      <div className="bg-maritime-sky/20 rounded-lg p-3">
                        <div className="text-sm font-semibold text-maritime-deep mb-2">
                          Distance: {distanceInfo.nauticalMiles} milles nautiques
                        </div>
                        <div className="text-xs text-maritime-slate space-y-1">
                          <div>⏱️ Temps à 5 nœuds: {distanceInfo.time5kn} min</div>
                          <div>⏱️ Temps à 15 nœuds: {distanceInfo.time15kn} min</div>
                        </div>
                      </div>
                    )}
                    <button
                      onClick={resetDistance}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-maritime-slate text-white rounded-lg hover:bg-maritime-deep transition text-sm"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset
                    </button>
                  </div>
                </div>
                
                {/* Geolocation */}
                <div>
                  <button
                    onClick={getUserLocation}
                    disabled={isGeolocating}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-maritime-azure text-white rounded-lg hover:bg-maritime-marine disabled:opacity-50 transition"
                  >
                    <Compass className="w-4 h-4" />
                    {isGeolocating ? 'Localisation...' : 'Ma position'}
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Map */}
          <MapContainer
            center={[46.603354, 1.888334]} // Center of France
            zoom={6}
            style={{ height: '100%', width: '100%' }}
            onClick={handleMapClick}
          >
            <MapController onMapReady={setMapInstance} />
            
            {/* OpenStreetMap Tiles */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Optional: OpenSeaMap overlay */}
            <TileLayer
              attribution='&copy; <a href="https://openseamap.org">OpenSeaMap</a> contributors'
              url="https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
              opacity={0.7}
            />
            
            {/* Zone Markers */}
            {ZONES.map((zone) => (
              <Marker key={zone.id} position={zone.coordinates}>
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold text-maritime-deep mb-2">{zone.title}</h3>
                    <p className="text-sm text-maritime-slate mb-3">{zone.description}</p>
                    <div className="flex gap-2 text-xs text-maritime-slate">
                      <span>🏢 {zone.stats.ports} ports</span>
                      <span>⚓ {zone.stats.moorings} mouillages</span>
                    </div>
                    <button
                      onClick={() => handleZoneSelect(zone.id)}
                      className="mt-3 w-full px-3 py-1 bg-maritime-azure text-white rounded text-xs hover:bg-maritime-marine transition"
                    >
                      Explorer cette zone
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
            
            {/* Distance Points */}
            {distancePoints.map((point, index) => (
              <Marker key={index} position={point}>
                <Popup>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-maritime-deep">
                      Point {index + 1}
                    </div>
                    <div className="text-sm text-maritime-slate">
                      {point[0].toFixed(4)}, {point[1].toFixed(4)}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
            
            {/* Distance Line */}
            {distancePoints.length === 2 && (
              <Polyline
                positions={distancePoints}
                color="#FF6F61"
                weight={3}
                opacity={0.8}
              />
            )}
            
            {/* User Location */}
            {userLocation && (
              <Marker position={userLocation}>
                <Popup>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-maritime-deep">
                      Votre position
                    </div>
                    <div className="text-sm text-maritime-slate">
                      {userLocation[0].toFixed(4)}, {userLocation[1].toFixed(4)}
                    </div>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
          
          {/* Legend (bottom-left) */}
          <div className="absolute bottom-4 left-4 z-[1000] bg-white/95 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-maritime-sky/20">
            <h4 className="font-semibold text-maritime-deep mb-2 text-sm">Légende</h4>
            <div className="space-y-1 text-xs text-maritime-slate">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-maritime-azure rounded-full"></div>
                <span>Zone de navigation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-maritime-coral rounded-full"></div>
                <span>Votre position</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-maritime-coral"></div>
                <span>Distance mesurée</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Noscript fallback */}
        <noscript>
          <div className="bg-maritime-sky/20 rounded-3xl p-12 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-2xl font-title font-semibold text-maritime-deep mb-4">
              Carte interactive non disponible
            </h3>
            <p className="text-maritime-slate mb-6">
              Veuillez activer JavaScript pour utiliser la carte interactive.
            </p>
            <a 
              href="#zones" 
              className="inline-block px-6 py-3 bg-maritime-azure text-white rounded-full hover:bg-maritime-marine transition"
            >
              Voir les zones de navigation
            </a>
          </div>
        </noscript>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-maritime-azure/10 to-maritime-marine/10 rounded-3xl p-8 md:p-12 border border-maritime-azure/20">
            <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-4">
              Prêt à planifier votre navigation ?
            </h3>
            <p className="text-lg text-maritime-slate mb-8 font-body">
              Utilisez nos guides et outils pour préparer votre prochaine sortie en mer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('guides')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-maritime-azure text-white rounded-full hover:bg-maritime-marine transition-all transform hover:scale-105 shadow-lg focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
              >
                <Navigation className="w-5 h-5" />
                Consulter les guides
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('symboles')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-maritime-azure text-maritime-azure rounded-full hover:bg-maritime-azure hover:text-white transition-all transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
              >
                <MapPin className="w-5 h-5" />
                Apprendre les symboles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveMapSection
