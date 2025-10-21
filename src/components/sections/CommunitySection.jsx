import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, MessageCircle, MapPin, Calendar, Facebook, Instagram, Youtube, Twitter, Check, Star, Zap } from 'lucide-react'
import TestimonialCard from '../ui/TestimonialCard'
import { TESTIMONIALS, UGC_PHOTOS, COMMUNITY_STATS } from '../../data/testimonials'

const CommunitySection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubscribed, setIsSubscribed] = useState(false)

  const onSubmit = (data) => {
    // In a real app, this would submit to a backend
    console.log('Newsletter subscription:', data)
    setIsSubscribed(true)
    reset()
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000)
  }

  return (
    <section id="communaute" className="py-16 md:py-24 bg-maritime-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl md:text-5xl font-title font-bold text-center mb-6">
          Rejoignez {COMMUNITY_STATS.members.toLocaleString()}+ navigateurs passionnés
        </h2>
        
        <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto font-body">
          Recevez nos meilleurs conseils, découvrez de nouveaux spots et partagez 
          votre passion avec une communauté bienveillante.
        </p>
        
        {/* Newsletter Form (prominent) */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20">
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-maritime-coral" />
              <h3 className="text-2xl font-title font-semibold">Newsletter "Le Mouillage"</h3>
            </div>
            
            <p className="text-center text-white/80 mb-8 font-body">
              Chaque semaine : 1 astuce navigation + 1 spot secret + actualités maritimes
            </p>
            
            {isSubscribed ? (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-maritime-emerald/20 text-maritime-emerald rounded-full mb-4">
                  <Check className="w-5 h-5" />
                  Inscription réussie !
                </div>
                <p className="text-white/80 text-sm">
                  Merci ! Vous recevrez bientôt notre première newsletter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text"
                      placeholder="Prénom"
                      {...register('firstName', { required: 'Le prénom est requis' })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-maritime-coral transition font-body"
                    />
                    {errors.firstName && (
                      <p className="text-red-300 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <input 
                      type="email"
                      placeholder="Email"
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide'
                        }
                      })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-maritime-coral transition font-body"
                    />
                    {errors.email && (
                      <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                {/* Interest Selector */}
                <select 
                  {...register('interest')}
                  className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-maritime-coral transition font-body"
                >
                  <option value="">Votre profil de navigateur</option>
                  <option value="beginner">🌱 Débutant</option>
                  <option value="amateur">⛵ Amateur</option>
                  <option value="experienced">🏆 Confirmé</option>
                  <option value="professional">👨‍✈️ Professionnel</option>
                </select>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-5 bg-maritime-coral text-white text-lg font-semibold rounded-2xl hover:brightness-110 transform hover:scale-105 transition-all shadow-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  🚀 Rejoindre gratuitement
                </button>
                
                <p className="text-xs text-center text-white/60">
                  🔒 Vos données sont protégées. Désinscription en 1 clic. Conformité RGPD.
                </p>
              </form>
            )}
            
            {/* Trust indicators */}
            <div className="mt-8 flex justify-center items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Check className="w-5 h-5 text-maritime-emerald" />
                {COMMUNITY_STATS.members.toLocaleString()}+ inscrits
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Note 4.9/5
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-maritime-coral" />
                0 spam
              </span>
            </div>
          </div>
        </div>
        
        {/* Community Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* Discord/Forum */}
          <div className="text-center backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-maritime-azure rounded-2xl mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-title font-semibold mb-3">Forum Communauté</h3>
            <p className="text-white/80 mb-6 font-body">
              Posez vos questions, partagez vos expériences, trouvez des équipiers
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
            >
              Rejoindre le forum →
            </a>
          </div>
          
          {/* User Contributions */}
          <div className="text-center backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-maritime-coral rounded-2xl mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-title font-semibold mb-3">Contributeurs</h3>
            <p className="text-white/80 mb-6 font-body">
              Signalez erreurs, partagez vos découvertes, enrichissez les cartes
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
            >
              Contribuer →
            </a>
          </div>
          
          {/* Events/Webinars */}
          <div className="text-center backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-maritime-emerald rounded-2xl mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-title font-semibold mb-3">Webinaires Gratuits</h3>
            <p className="text-white/80 mb-6 font-body">
              Formations live mensuelles avec des experts de la navigation
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
            >
              Voir le calendrier →
            </a>
          </div>
        </div>
        
        {/* User-Generated Content Gallery */}
        <div className="mb-20">
          <h3 className="text-3xl font-title font-semibold text-center mb-12">
            📸 Vos plus belles navigations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {UGC_PHOTOS.map((photo) => (
              <div key={photo.id} className="relative group aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
                {/* Real image with fallback */}
                <img 
                  src={photo.url}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
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
                  <div className="text-white text-2xl opacity-70">
                    {photo.location === 'Bretagne' && '🏴󠁧󠁢󠁥󠁮󠁧󠁿'}
                    {photo.location === 'Méditerranée' && '🌊'}
                    {photo.location === 'Corse' && '🏝️'}
                    {photo.location === 'Atlantique' && '🌊'}
                    {photo.location === 'Manche' && '🌊'}
                    {photo.location === 'Polynésie' && '🏝️'}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-white">{photo.caption}</p>
                    <p className="text-xs text-white/80">par {photo.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/80 mb-4 font-body">Partagez vos photos avec #CarteMarineFr</p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
            >
              Voir toute la galerie →
            </a>
          </div>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-title font-semibold text-center mb-12">
            💬 Ce que disent nos utilisateurs
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
        
        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-title font-semibold mb-8">Suivez-nous</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
              aria-label="Suivre sur Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
              aria-label="Suivre sur Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
              aria-label="Suivre sur YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-deep"
              aria-label="Suivre sur Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
