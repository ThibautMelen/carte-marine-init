import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-maritime-deep text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* About */}
          <div>
            <h4 className="text-xl font-title font-bold mb-4">Carte Marine</h4>
            <p className="text-white/70 text-sm mb-4 font-body">
              La ressource #1 des cartes marines interactives en France. 
              Outils gratuits, guides pédagogiques et communauté active.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
                aria-label="Suivre sur Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
                aria-label="Suivre sur Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
                aria-label="Suivre sur YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Outils */}
          <div>
            <h4 className="font-title font-semibold mb-4">Outils</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button 
                  onClick={() => scrollToSection('carte-interactive')}
                  className="hover:text-white transition text-left"
                >
                  Carte Interactive
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('symboles')}
                  className="hover:text-white transition text-left"
                >
                  Glossaire Symboles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('apps')}
                  className="hover:text-white transition text-left"
                >
                  Comparateur Apps
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Calculateur Marées
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Météo Marine
                </a>
              </li>
            </ul>
          </div>
          
          {/* Ressources */}
          <div>
            <h4 className="font-title font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button 
                  onClick={() => scrollToSection('guides')}
                  className="hover:text-white transition text-left"
                >
                  Guides & Tutoriels
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Téléchargements PDF
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('zones')}
                  className="hover:text-white transition text-left"
                >
                  Zones Géographiques
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Légal */}
          <div>
            <h4 className="font-title font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/mentions-legales" className="hover:text-white transition">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="/politique-confidentialite" className="hover:text-white transition">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="/cgu" className="hover:text-white transition">
                  CGU
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/partenaires" className="hover:text-white transition">
                  Partenaires
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 Carte-Marine.com - Tous droits réservés</p>
          <p>
            Fait avec ❤️ pour les navigateurs | 
            Données cartographiques © <a href="https://shom.fr" className="underline hover:text-white transition" target="_blank" rel="noopener noreferrer">SHOM</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
