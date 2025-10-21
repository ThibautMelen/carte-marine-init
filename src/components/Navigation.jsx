import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Handle smooth scroll to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  // Handle active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'definition', 'carte-interactive', 'symboles', 'zones', 'apps', 'guides', 'communaute']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'carte-interactive', label: '🗺️ Carte' },
    { id: 'symboles', label: '⚓ Symboles' },
    { id: 'zones', label: '🌊 Zones' },
    { id: 'apps', label: '📱 Apps & Logiciels' },
    { id: 'guides', label: '📚 Guides' }
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-maritime-sky/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-title font-bold text-maritime-deep hover:text-maritime-azure transition-colors focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 rounded-lg"
            aria-label="Retour à l'accueil"
          >
            🗺️ Carte Marine
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 ${
                  activeSection === item.id
                    ? 'text-maritime-azure bg-maritime-azure/10'
                    : 'text-maritime-slate hover:text-maritime-deep hover:bg-maritime-sky/10'
                }`}
                aria-label={`Aller à la section ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => window.open('/downloads/guide-complet-cartes-marines.html', '_blank')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-maritime-coral text-white rounded-full hover:brightness-110 transition-all focus-visible:ring-2 focus-visible:ring-maritime-coral focus-visible:ring-offset-2"
              aria-label="Jouer au quiz interactif des symboles marins"
            >
              <Download className="w-4 h-4" />
              Quiz Interactif
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-maritime-deep hover:text-maritime-azure transition-colors focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 rounded-lg"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg rounded-lg mt-2 border border-maritime-sky/20">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors rounded-lg focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 ${
                    activeSection === item.id
                      ? 'text-maritime-azure bg-maritime-azure/10'
                      : 'text-maritime-slate hover:text-maritime-deep hover:bg-maritime-sky/10'
                  }`}
                  aria-label={`Aller à la section ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-maritime-sky/20">
                <button
                  onClick={() => window.open('/downloads/guide-complet-cartes-marines.html', '_blank')}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-maritime-coral text-white rounded-full hover:brightness-110 transition-all focus-visible:ring-2 focus-visible:ring-maritime-coral focus-visible:ring-offset-2"
                  aria-label="Jouer au quiz interactif des symboles marins"
                >
                  <Download className="w-4 h-4" />
                  Quiz Interactif
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
