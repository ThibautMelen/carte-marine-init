import { Star, ExternalLink } from 'lucide-react'

const AppReviewCard = ({ app, onAppClick }) => {
  const handleClick = () => {
    if (onAppClick) {
      onAppClick(app)
    }
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      )
    }

    return stars
  }

  const getPriceColor = (price) => {
    if (price === 'Gratuit') return 'bg-green-100 text-green-700'
    if (price.includes('€')) return 'bg-orange-100 text-orange-700'
    return 'bg-red-100 text-red-700'
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
      {/* App header */}
      <div className="flex items-center gap-4 mb-4">
        {/* App logo */}
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={app.logo} 
            alt={`Logo ${app.name}`}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-maritime-azure to-maritime-marine rounded-lg flex items-center justify-center text-white font-bold text-lg hidden">
            {app.name.charAt(0)}
          </div>
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-title font-semibold text-maritime-deep mb-1">
            {app.name}
          </h4>
          <p className="text-sm text-maritime-slate">{app.tagline}</p>
        </div>
      </div>

      {/* Price and rating */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriceColor(app.price)}`}>
          {app.price}
        </span>
        
        <div className="flex items-center gap-1">
          {renderStars(app.rating)}
          <span className="text-sm text-maritime-slate ml-2">{app.rating}</span>
        </div>
      </div>

      {/* Pros and cons */}
      <div className="mb-4">
        <div className="mb-3">
          <h5 className="text-sm font-semibold text-maritime-emerald mb-2">✅ Avantages</h5>
          <ul className="text-xs text-maritime-slate space-y-1">
            {app.pros.slice(0, 3).map((pro, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-maritime-emerald">•</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="text-sm font-semibold text-maritime-coral mb-2">❌ Inconvénients</h5>
          <ul className="text-xs text-maritime-slate space-y-1">
            {app.cons.slice(0, 2).map((con, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-maritime-coral">•</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Verdict */}
      <div className="mb-4 p-3 bg-maritime-sky/10 rounded-lg">
        <p className="text-sm text-maritime-deep font-medium">
          <strong>Verdict :</strong> {app.verdict}
        </p>
      </div>

      {/* CTA Button */}
      <button 
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-maritime-coral text-white rounded-lg hover:brightness-110 transition focus-visible:ring-2 focus-visible:ring-maritime-coral focus-visible:ring-offset-2"
        aria-label={`Voir l'application ${app.name}`}
      >
        Voir l'app
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  )
}

export default AppReviewCard
