import { useEffect, useRef, useState } from 'react'
import { ChevronDown, MapPin, Compass, Anchor, Waves } from 'lucide-react'
import { gsap } from 'gsap'

const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const particlesRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  // Animation d'entrée avec GSAP
  useEffect(() => {
    if (!isLoaded) return

    const tl = gsap.timeline()
    
    // Animation du titre avec effet de typewriter
    tl.fromTo(titleRef.current, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9,
        filter: 'blur(10px)'
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power3.out"
      }
    )
    
    // Animation du sous-titre avec délai
    tl.fromTo(subtitleRef.current,
      { 
        opacity: 0, 
        y: 30,
        filter: 'blur(5px)'
      },
      { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.6"
    )
    
    // Animation des boutons CTA
    tl.fromTo(ctaRef.current,
      { 
        opacity: 0, 
        y: 20,
        scale: 0.95
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      },
      "-=0.4"
    )

    // Animation des particules
    gsap.fromTo('.particle',
      { 
        opacity: 0, 
        scale: 0,
        rotation: 0
      },
      { 
        opacity: 1, 
        scale: 1,
        rotation: 360,
        duration: 2,
        stagger: 0.1,
        ease: "elastic.out(1, 0.3)"
      },
      "-=1"
    )

  }, [isLoaded])

  // Effet de parallaxe au mouvement de la souris
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animation des particules flottantes
  useEffect(() => {
    if (!particlesRef.current) return

    const particles = particlesRef.current.querySelectorAll('.particle')
    
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      })
    })
  }, [])

  // Déclencher l'animation au chargement
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative h-screen overflow-hidden bg-gradient-to-br from-maritime-deep via-maritime-marine to-maritime-azure"
    >
      {/* Background avec effet de parallaxe */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-maritime-deep via-maritime-marine to-maritime-azure"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`
        }}
      />
      
      {/* Motifs géométriques animés */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-20 w-32 h-32 border-2 border-white/30 rounded-full animate-spin"
          style={{ animationDuration: '20s' }}
        />
        <div 
          className="absolute top-40 right-32 w-24 h-24 border-2 border-maritime-coral/40 rounded-full animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-maritime-azure/50 rounded-full animate-bounce"
          style={{ animationDuration: '4s' }}
        />
      </div>

      {/* Particules flottantes */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Vagues animées en arrière-plan */}
      <div className="absolute bottom-0 w-full">
        <svg 
          className="w-full h-32 text-maritime-azure/20" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,8.19,156.40,25.66C197.41,88.27,239,113.32,300,109.17c61.39-4.15,120.61-40.29,182.20-40.29,61.39,0,120.81,36.15,182.20,40.29,60.99,3.85,102.59-20.90,143.60-37.47C688.00,54.49,743.21,38.45,800,46.29V0Z" 
            fill="currentColor"
            className="animate-pulse"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="currentColor"
            className="opacity-50"
          />
        </svg>
      </div>
      
      {/* Contenu principal avec glassmorphism */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div 
          className="text-center max-w-5xl backdrop-blur-xl bg-white/10 p-8 md:p-12 lg:p-16 rounded-3xl border border-white/20 shadow-2xl"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            boxShadow: `0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
          }}
        >
          {/* Titre principal avec effet de texte avancé */}
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-title font-bold text-white mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #a8d8ea 50%, #4a90b8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(168, 216, 234, 0.5)',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
            }}
          >
            Carte Marine Gratuite
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-maritime-coral">
              Explorez, Planifiez, Naviguez
            </span>
          </h1>
          
          {/* Sous-titre avec animation de frappe */}
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-body mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Découvrez les meilleures cartes marines interactives de France, 
            apprenez à les lire et planifiez votre prochaine navigation 
            avec nos outils gratuits et professionnels.
          </p>
          
          {/* Boutons CTA avec animations avancées */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button 
              onClick={() => scrollToSection('carte-interactive')}
              className="group relative px-8 py-4 bg-gradient-to-r from-maritime-azure to-maritime-marine text-white rounded-full hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent font-semibold overflow-hidden"
              aria-label="Explorer la carte interactive"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Explorer la carte interactive
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-maritime-marine to-maritime-azure opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => window.open('/downloads/guide-complet-cartes-marines.html', '_blank')}
              className="group relative px-8 py-4 bg-gradient-to-r from-maritime-coral to-orange-500 text-white rounded-full hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent font-semibold overflow-hidden"
              aria-label="Jouer au quiz interactif des symboles marins"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Quiz Interactif
                <Anchor className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-maritime-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
          
          {/* Indicateurs de confiance avec animations */}
          <div className="mt-8 text-white/80 text-sm space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-2xl group-hover:scale-110 transition-transform">⭐</span>
                <span className="font-semibold">2 300 navigateurs nous font confiance</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-2xl group-hover:scale-110 transition-transform">📊</span>
                <span className="font-semibold">Données officielles SHOM</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-2xl group-hover:scale-110 transition-transform">🎁</span>
                <span className="font-semibold">100% gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Flèche de scroll avec animation améliorée */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('definition')}
          className="group text-white hover:text-maritime-coral transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full p-3 hover:bg-white/10"
          aria-label="Aller à la section suivante"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity">
              Découvrir
            </span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  )
}

export default HeroSection