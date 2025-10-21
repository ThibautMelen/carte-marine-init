import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-4 h-4 ${
            i < rating 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'text-gray-300'
          }`} 
        />
      )
    }
    return stars
  }

  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition">
      {/* User info */}
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar with fallback */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={testimonial.avatar}
            alt={testimonial.alt}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Fallback gradient background */}
          <div className="w-full h-full bg-gradient-to-br from-maritime-azure to-maritime-marine flex items-center justify-center text-white font-semibold absolute inset-0" style={{display: 'none'}}>
            {testimonial.author.charAt(0)}
          </div>
        </div>
        
        <div>
          <div className="font-semibold text-white">{testimonial.author}</div>
          <div className="text-sm text-white/60">{testimonial.role}</div>
          {testimonial.location && (
            <div className="text-xs text-white/50">📍 {testimonial.location}</div>
          )}
        </div>
      </div>
      
      {/* Quote */}
      <p className="text-white/80 italic mb-4 font-body leading-relaxed">
        "{testimonial.quote}"
      </p>
      
      {/* Rating */}
      <div className="flex gap-1">
        {renderStars(testimonial.rating)}
      </div>
    </div>
  )
}

export default TestimonialCard
