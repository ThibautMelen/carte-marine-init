import { Clock, FileText, Download } from 'lucide-react'

const GuideCard = ({ guide, onGuideClick, onDownloadClick }) => {
  const handleGuideClick = () => {
    if (onGuideClick) {
      onGuideClick(guide)
    }
  }

  const handleDownloadClick = (e) => {
    e.stopPropagation()
    if (onDownloadClick) {
      onDownloadClick(guide)
    }
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        {/* Real image with fallback */}
        <img
          src={guide.thumbnail}
          alt={guide.alt}
          width="800"
          height="600"
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        {/* Fallback gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-maritime-sky to-maritime-azure flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
          <div className="text-white text-4xl opacity-70">
            📚
          </div>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-maritime-azure text-white text-xs font-semibold rounded-full">
          {guide.category}
        </div>
        
        {/* Difficulty badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-xs font-semibold rounded-full">
          {guide.difficulty}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-title font-semibold text-maritime-deep mb-2 group-hover:text-maritime-azure transition line-clamp-2">
          {guide.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-sm text-maritime-slate mb-4 line-clamp-2 font-body">
          {guide.excerpt}
        </p>
        
        {/* Meta info */}
        <div className="flex items-center justify-between text-xs text-maritime-slate mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {guide.readTime}
          </span>
          <span className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            PDF disponible
          </span>
        </div>
        
        {/* CTAs */}
        <div className="flex gap-2">
          <button 
            onClick={handleGuideClick}
            className="flex-1 text-center px-4 py-2 bg-maritime-azure text-white rounded-lg hover:bg-maritime-marine transition text-sm focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
            aria-label={`Lire le guide ${guide.title}`}
          >
            Lire le guide
          </button>
          <button 
            onClick={() => window.open('/downloads/guide-complet-cartes-marines.html', '_blank')}
            className="px-4 py-2 border border-maritime-azure text-maritime-azure rounded-lg hover:bg-maritime-azure hover:text-white transition text-sm focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
            aria-label={`Jouer au quiz interactif ${guide.title}`}
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GuideCard
