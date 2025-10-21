import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { X, MapPin, Anchor, Waves, Compass, Navigation } from 'lucide-react'

const ZoneDetailModal = ({ 
  isOpen, 
  zone, 
  onClose, 
  fromPosition 
}) => {
  const modalRef = useRef(null)
  const contentRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (isOpen && zone) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Entrance animation
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
      
      gsap.fromTo(modalRef.current, 
        {
          scale: 0,
          opacity: 0,
          x: fromPosition ? fromPosition.x - window.innerWidth / 2 : 0,
          y: fromPosition ? fromPosition.y - window.innerHeight / 2 : 0
        },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        }
      )
      
      // Stagger content animation
      gsap.fromTo(contentRef.current?.children || [], 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out"
        }
      )
    } else {
      // Restore body scroll
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, zone, fromPosition])

  const handleClose = () => {
    if (modalRef.current && overlayRef.current) {
      // Exit animation
      gsap.to([modalRef.current, overlayRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onClose
      })
      
      gsap.to(modalRef.current, {
        scale: 0,
        duration: 0.3,
        ease: "power2.in"
      })
    } else {
      onClose()
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose()
    }
  }

  if (!isOpen || !zone) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="relative h-64 bg-gradient-to-br from-maritime-azure to-maritime-marine overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/30 rounded-full blur-md"></div>
          </div>
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Zone title */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-title font-bold text-white drop-shadow-lg mb-2">
              {zone.title}
            </h2>
            <p className="text-white/90 text-lg">
              {zone.stats.feature}
            </p>
          </div>
        </div>
        
        {/* Content */}
        <div ref={contentRef} className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-maritime-seafoam/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">🏢</div>
              <div className="text-2xl font-bold text-maritime-deep">{zone.stats.ports}</div>
              <div className="text-sm text-maritime-slate">Ports</div>
            </div>
            <div className="bg-maritime-azure/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">⚓</div>
              <div className="text-2xl font-bold text-maritime-deep">{zone.stats.moorings}</div>
              <div className="text-sm text-maritime-slate">Mouillages</div>
            </div>
            <div className="bg-maritime-coral/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">🌊</div>
              <div className="text-lg font-bold text-maritime-deep">Navigation</div>
              <div className="text-sm text-maritime-slate">Active</div>
            </div>
            <div className="bg-maritime-marine/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">🗺️</div>
              <div className="text-lg font-bold text-maritime-deep">Cartes</div>
              <div className="text-sm text-maritime-slate">Disponibles</div>
            </div>
          </div>
          
          {/* Description */}
          <div className="bg-gradient-to-r from-maritime-sky/5 to-maritime-azure/5 rounded-2xl p-6">
            <h3 className="text-xl font-title font-semibold text-maritime-deep mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-maritime-azure" />
              À propos de cette zone
            </h3>
            <p className="text-maritime-slate leading-relaxed">
              {zone.description}
            </p>
          </div>
          
          {/* Navigation Tips */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-maritime-azure/20 rounded-2xl p-6">
              <h4 className="text-lg font-title font-semibold text-maritime-deep mb-3 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-maritime-azure" />
                Conseils de navigation
              </h4>
              <ul className="space-y-2 text-maritime-slate">
                <li className="flex items-start gap-2">
                  <span className="text-maritime-azure mt-1">•</span>
                  <span>Vérifiez les conditions météo avant le départ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maritime-azure mt-1">•</span>
                  <span>Consultez les horaires de marées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maritime-azure mt-1">•</span>
                  <span>Prévoyez des mouillages de secours</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-maritime-marine/20 rounded-2xl p-6">
              <h4 className="text-lg font-title font-semibold text-maritime-deep mb-3 flex items-center gap-2">
                <Waves className="w-5 h-5 text-maritime-marine" />
                Particularités
              </h4>
              <div className="space-y-2 text-maritime-slate">
                <div className="flex items-center gap-2">
                  <span className="text-maritime-marine">🌊</span>
                  <span>Marées importantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-maritime-marine">⛅</span>
                  <span>Météo changeante</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-maritime-marine">🚢</span>
                  <span>Trafic maritime dense</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => {
                // Navigate to interactive map
                const element = document.getElementById('carte-interactive')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  handleClose()
                }
              }}
              className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-maritime-azure text-white rounded-full hover:bg-maritime-marine transition-all transform hover:scale-105 shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Ouvrir la carte interactive
            </button>
            
            <button
              onClick={handleClose}
              className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-maritime-azure text-maritime-azure rounded-full hover:bg-maritime-azure hover:text-white transition-all"
            >
              <Anchor className="w-5 h-5" />
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZoneDetailModal
