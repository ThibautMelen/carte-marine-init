import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Download, ChevronDown, ChevronUp, Check, Star, Zap } from 'lucide-react'
import SymbolCard from '../ui/SymbolCard'
import QuizComponent from '../ui/QuizComponent'
import { SYMBOLS, SYMBOL_CATEGORIES } from '../../data/symbols'

const SymbolsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizScore, setQuizScore] = useState(null)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  // Filter symbols by category
  const filteredSymbols = activeCategory === 'all' 
    ? SYMBOLS 
    : SYMBOLS.filter(symbol => symbol.category === activeCategory)

  const handleSymbolClick = (symbol) => {
    // In a real app, this might track analytics
    console.log('Symbol clicked:', symbol.name)
  }

  const handleQuizComplete = (score) => {
    setQuizScore(score)
    // In a real app, this might track quiz completion
    console.log('Quiz completed with score:', score)
  }

  const onLeadMagnetSubmit = (data) => {
    // In a real app, this would submit to a backend
    console.log('Lead magnet subscription:', data)
    setIsSubscribed(true)
    reset()
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000)
  }

  return (
    <section id="symboles" className="py-16 md:py-24 bg-maritime-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-title font-semibold text-maritime-deep mb-6 text-center">
          Déchiffrez les symboles des cartes marines en 10 minutes
        </h2>
        
        <p className="text-lg md:text-xl text-maritime-slate text-center mb-16 max-w-3xl mx-auto font-body">
          Phares, bouées, dangers, mouillages... Apprenez à lire les 150 symboles essentiels 
          des cartes marines officielles SHOM. Quiz interactif inclus !
        </p>
        
        {/* Category Accordion */}
        <div className="mb-12">
          <div className="space-y-4">
            {SYMBOL_CATEGORIES.map((category) => {
              const categorySymbols = SYMBOLS.filter(s => s.category === category)
              const isActive = activeCategory === category
              
              return (
                <div key={category} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setActiveCategory(isActive ? 'all' : category)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-maritime-sky/10 transition focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
                    aria-expanded={isActive}
                    aria-controls={`category-${category}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {category === 'Navigation' && '🧭'}
                        {category === 'Bathymétrie' && '📏'}
                        {category === 'Dangers' && '⚠️'}
                        {category === 'Zones' && '🏞️'}
                      </span>
                      <div>
                        <h3 className="text-lg font-title font-semibold text-maritime-deep">
                          {category}
                        </h3>
                        <p className="text-sm text-maritime-slate">
                          {categorySymbols.length} symboles
                        </p>
                      </div>
                    </div>
                    {isActive ? (
                      <ChevronUp className="w-5 h-5 text-maritime-azure" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-maritime-slate" />
                    )}
                  </button>
                  
                  {isActive && (
                    <div id={`category-${category}`} className="px-6 pb-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {categorySymbols.map((symbol) => (
                          <SymbolCard 
                            key={symbol.name}
                            symbol={symbol}
                            onSymbolClick={handleSymbolClick}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Quiz Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-maritime-azure/10 to-maritime-marine/10 rounded-3xl p-8 md:p-12 border border-maritime-azure/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-4">
                🧠 Testez vos connaissances
              </h3>
              <p className="text-lg text-maritime-slate font-body">
                Quiz de 10 questions sur les symboles essentiels. 
                Obtenez 8/10 et débloquez votre badge "Expert Symboles" !
              </p>
            </div>
            
            {!showQuiz ? (
              <div className="text-center">
                <button
                  onClick={() => setShowQuiz(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-maritime-coral text-white rounded-full hover:brightness-110 transition-all transform hover:scale-105 shadow-lg focus-visible:ring-2 focus-visible:ring-maritime-coral focus-visible:ring-offset-2"
                >
                  <Zap className="w-5 h-5" />
                  Commencer le quiz
                </button>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <QuizComponent onQuizComplete={handleQuizComplete} />
              </div>
            )}
          </div>
        </div>
        
        {/* Lead Magnet Form */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-maritime-azure to-maritime-marine rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-title font-bold mb-4">
                📥 Téléchargez le PDF complet
              </h3>
              <p className="text-lg text-white/90 font-body">
                150 symboles SHOM officiels avec explications détaillées. 
                Guide de référence pour tous les navigateurs.
              </p>
            </div>
            
            {isSubscribed ? (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-maritime-emerald/20 text-maritime-emerald rounded-full mb-4">
                  <Check className="w-5 h-5" />
                  Téléchargement en cours...
                </div>
                <p className="text-white/80 text-sm">
                  Vérifiez votre email pour le lien de téléchargement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onLeadMagnetSubmit)} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <input 
                    type="text"
                    placeholder="Prénom"
                    {...register('firstName', { required: 'Le prénom est requis' })}
                    className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition font-body"
                  />
                  {errors.firstName && (
                    <p className="text-red-200 text-sm">{errors.firstName.message}</p>
                  )}
                  
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
                    className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition font-body"
                  />
                  {errors.email && (
                    <p className="text-red-200 text-sm">{errors.email.message}</p>
                  )}
                  
                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-maritime-coral text-white text-lg font-semibold rounded-2xl hover:brightness-110 transform hover:scale-105 transition-all shadow-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-maritime-azure"
                  >
                    🚀 Télécharger gratuitement
                  </button>
                </div>
                
                <p className="text-xs text-center text-white/60 mt-4">
                  🔒 Vos données sont protégées. Conformité RGPD.
                </p>
              </form>
            )}
            
            {/* Trust badges */}
            <div className="mt-8 flex justify-center items-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-maritime-emerald" />
                150 symboles SHOM
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Guide officiel
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-maritime-coral" />
                Gratuit
              </span>
            </div>
          </div>
        </div>
        
        {/* All Symbols Grid (collapsed by default) */}
        <div className="text-center">
          <button
            onClick={() => setActiveCategory(activeCategory === 'all' ? 'Navigation' : 'all')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-maritime-sky/20 text-maritime-marine rounded-full hover:bg-maritime-sky/30 transition focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
          >
            {activeCategory === 'all' ? 'Masquer tous les symboles' : 'Voir tous les symboles'}
            {activeCategory === 'all' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
        
        {activeCategory === 'all' && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredSymbols.map((symbol) => (
              <SymbolCard 
                key={symbol.name}
                symbol={symbol}
                onSymbolClick={handleSymbolClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SymbolsSection
