import { useState, useEffect } from 'react'
import { ArrowLeft, Clock, FileText, Share2, BookOpen, CheckCircle, AlertTriangle, Info } from 'lucide-react'

const GuidePage = ({ guide, onBack }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    // Scroll vers le haut de la page à l'ouverture du guide
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleBack = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onBack) onBack()
    }, 300)
  }

  const scrollToSection = (index) => {
    setCurrentSection(index)
    const element = document.getElementById(`section-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-maritime-white via-maritime-sky/5 to-maritime-azure/10 transition-all duration-500 guide-page-enter ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Header avec animation d'entrée */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-maritime-sky/20 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-maritime-slate hover:text-maritime-azure transition-colors group guide-back"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Retour aux guides</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-maritime-slate hover:text-maritime-azure hover:bg-maritime-azure/10 rounded-lg transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section avec animation */}
      <div className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Badges */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-maritime-azure text-white text-sm font-semibold rounded-full guide-badge">
                {guide.category}
              </span>
              <span className="px-4 py-2 bg-white/80 text-maritime-slate text-sm font-semibold rounded-full border border-maritime-sky/30 guide-badge">
                {guide.difficulty}
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl font-title font-bold text-maritime-deep mb-6 leading-tight">
              {guide.title}
            </h1>

            {/* Meta informations */}
            <div className="flex items-center gap-6 text-maritime-slate mb-8">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {guide.readTime}
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Guide complet
              </span>
              <span className="text-maritime-azure font-semibold">
                {guide.views.toLocaleString()} vues
              </span>
            </div>

            {/* Description */}
            <p className="text-xl text-maritime-slate leading-relaxed mb-8 font-body">
              {guide.excerpt}
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-maritime-azure text-white rounded-xl hover:bg-maritime-marine transition-all transform hover:scale-105 shadow-lg hover:shadow-xl guide-button">
                <BookOpen className="w-5 h-5 inline mr-2 guide-icon" />
                Commencer la lecture
              </button>
            </div>
          </div>
        </div>

        {/* Image de couverture avec animation */}
        <div className={`relative h-96 overflow-hidden transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}>
          <img
            src={guide.thumbnail}
            alt={guide.alt}
            className="w-full h-full object-cover guide-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* Table des matières avec animation */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-maritime-sky/20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-title font-semibold text-maritime-deep mb-6">
            Table des matières
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {guide.sections?.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`p-4 text-left rounded-lg border transition-all ${
                  currentSection === index
                    ? 'border-maritime-azure bg-maritime-azure/10 text-maritime-azure'
                    : 'border-maritime-sky/30 hover:border-maritime-azure/50 hover:bg-maritime-azure/5'
                }`}
              >
                <h3 className="font-semibold text-maritime-deep mb-1">
                  {section.title}
                </h3>
                <p className="text-sm text-maritime-slate">
                  {section.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu principal avec animations par section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {guide.sections?.map((section, index) => (
          <div
            key={index}
            id={`section-${index}`}
            className={`mb-16 transition-all duration-500 guide-section ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${400 + index * 100}ms` }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* En-tête de section */}
              <div className="bg-gradient-to-r from-maritime-azure to-maritime-marine p-6">
                <h2 className="text-2xl font-title font-bold text-white mb-2">
                  {section.title}
                </h2>
                <p className="text-maritime-sky/90">
                  {section.description}
                </p>
              </div>

              {/* Contenu de section */}
              <div className="p-8">
                {section.content?.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`mb-6 p-6 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md guide-interactive ${
                      item.type === 'tip'
                        ? 'border-l-green-500 bg-green-50'
                        : item.type === 'warning'
                        ? 'border-l-yellow-500 bg-yellow-50'
                        : item.type === 'info'
                        ? 'border-l-blue-500 bg-blue-50'
                        : 'border-l-maritime-azure bg-maritime-sky/5'
                    }`}
                  >
                    {item.type && (
                      <div className="flex items-center gap-2 mb-3">
                        {item.type === 'tip' && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {item.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                        {item.type === 'info' && <Info className="w-5 h-5 text-blue-600" />}
                        <span className="font-semibold text-maritime-deep">
                          {item.type === 'tip' && '💡 Conseil pratique'}
                          {item.type === 'warning' && '⚠️ Attention'}
                          {item.type === 'info' && 'ℹ️ Information'}
                        </span>
                      </div>
                    )}
                    
                    <div className="prose prose-lg max-w-none guide-content">
                      {item.text && <p className="text-maritime-slate leading-relaxed guide-text">{item.text}</p>}
                      {item.list && (
                        <ul className="list-disc list-inside space-y-2 text-maritime-slate">
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex} className="guide-list-item">{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer de la page */}
      <div className="bg-gradient-to-r from-maritime-azure to-maritime-marine text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-title font-bold mb-4">
            Guide terminé ! 🎉
          </h3>
          <p className="text-maritime-sky/90 mb-8">
            Vous avez maintenant toutes les connaissances nécessaires sur ce sujet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleBack}
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-maritime-azure transition-all guide-button"
            >
              Découvrir d'autres guides
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuidePage