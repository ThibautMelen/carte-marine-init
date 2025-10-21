import { useState } from 'react'
import { Filter, Search, Star, Check, X, ExternalLink, Smartphone, Monitor, FileText } from 'lucide-react'
import AppReviewCard from '../ui/AppReviewCard'
import { APPS, APP_CATEGORIES, PLATFORM_FILTERS, FEATURE_FILTERS } from '../../data/apps'
import { openAppLink } from '../../utils/appLinks'

const AppsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizStep, setQuizStep] = useState(0)

  // Filter apps based on selected criteria
  const filteredApps = APPS.filter(app => {
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory
    const matchesPlatform = selectedPlatforms.length === 0 || 
      selectedPlatforms.some(platform => app.platforms.toLowerCase().includes(platform))
    const matchesFeature = selectedFeatures.length === 0 || 
      selectedFeatures.every(feature => app[feature] === true)
    const matchesSearch = searchQuery === '' || 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesPlatform && matchesFeature && matchesSearch
  })

  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    )
  }

  const handleFeatureToggle = (feature) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  const handleAppClick = (app) => {
    openAppLink(app)
  }

  const handleQuizAnswer = (answer) => {
    const newAnswers = { ...quizAnswers, [quizStep]: answer }
    setQuizAnswers(newAnswers)
    
    if (quizStep < 2) {
      setQuizStep(quizStep + 1)
    } else {
      // Calculate recommendation based on answers
      const recommendation = getRecommendation(newAnswers)
      console.log('Quiz completed, recommendation:', recommendation)
      setShowQuiz(false)
      setQuizStep(0)
      setQuizAnswers({})
    }
  }

  const getRecommendation = (answers) => {
    // Simple recommendation logic based on quiz answers
    const hasOffline = answers[0] === 'yes'
    const hasBudget = answers[1] === 'free'
    const isExperienced = answers[2] === 'yes'
    
    if (hasOffline && hasBudget && !isExperienced) {
      return APPS.find(app => app.id === 'cmap-embark')
    } else if (hasOffline && !hasBudget && isExperienced) {
      return APPS.find(app => app.id === 'navionics-plus')
    } else if (!hasOffline && hasBudget) {
      return APPS.find(app => app.id === 'openseamap')
    } else {
      return APPS.find(app => app.id === 'navionics-boating')
    }
  }

  const resetFilters = () => {
    setSelectedCategory('all')
    setSelectedPlatforms([])
    setSelectedFeatures([])
    setSearchQuery('')
  }

  const quizQuestions = [
    {
      question: "Avez-vous besoin d'un mode hors ligne ?",
      options: [
        { value: 'yes', label: 'Oui, je navigue loin des côtes' },
        { value: 'no', label: 'Non, j\'ai toujours internet' }
      ]
    },
    {
      question: "Quel est votre budget ?",
      options: [
        { value: 'free', label: 'Gratuit uniquement' },
        { value: 'paid', label: 'Je peux payer un abonnement' }
      ]
    },
    {
      question: "Votre niveau d'expérience ?",
      options: [
        { value: 'beginner', label: 'Débutant' },
        { value: 'yes', label: 'Expérimenté' }
      ]
    }
  ]

  return (
    <section id="apps" className="py-16 md:py-24 bg-maritime-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-title font-semibold text-maritime-deep mb-6 text-center">
          Les meilleures applications de cartes marines en 2025
        </h2>
        
        <p className="text-lg md:text-xl text-maritime-slate text-center mb-16 max-w-3xl mx-auto font-body">
          Comparateur complet des 12 meilleures apps de navigation. 
          Trouvez l'application parfaite pour votre profil de navigateur.
        </p>
        
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-maritime-slate w-5 h-5" />
                <input 
                  type="text"
                  placeholder="Rechercher une application..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-maritime-sky/30 focus:border-maritime-azure outline-none transition font-body"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="space-y-6">
              {/* Category Filters */}
              <div>
                <h3 className="text-sm font-semibold text-maritime-deep mb-3 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Catégorie
                </h3>
                <div className="flex flex-wrap gap-2">
                  {APP_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-sm transition focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 ${
                        selectedCategory === cat.id
                          ? 'bg-maritime-azure text-white'
                          : 'bg-gray-100 text-maritime-slate hover:bg-gray-200'
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Platform Filters */}
              <div>
                <h3 className="text-sm font-semibold text-maritime-deep mb-3">Plateforme</h3>
                <div className="flex flex-wrap gap-2">
                  {PLATFORM_FILTERS.map(platform => (
                    <button
                      key={platform.id}
                      onClick={() => handlePlatformToggle(platform.id)}
                      className={`px-4 py-2 rounded-full text-sm transition focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 ${
                        selectedPlatforms.includes(platform.id)
                          ? 'bg-maritime-azure text-white'
                          : 'bg-gray-100 text-maritime-slate hover:bg-gray-200'
                      }`}
                    >
                      {platform.icon} {platform.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Feature Filters */}
              <div>
                <h3 className="text-sm font-semibold text-maritime-deep mb-3">Fonctionnalités</h3>
                <div className="flex flex-wrap gap-2">
                  {FEATURE_FILTERS.map(feature => (
                    <button
                      key={feature.id}
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={`px-4 py-2 rounded-full text-sm transition focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 ${
                        selectedFeatures.includes(feature.id)
                          ? 'bg-maritime-azure text-white'
                          : 'bg-gray-100 text-maritime-slate hover:bg-gray-200'
                      }`}
                    >
                      {feature.icon} {feature.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Reset Filters */}
              <div className="text-center">
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 text-maritime-slate hover:text-maritime-azure transition"
                >
                  Effacer tous les filtres
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quiz Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-maritime-azure/10 to-maritime-marine/10 rounded-3xl p-8 md:p-12 border border-maritime-azure/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-4">
                🎯 Trouvez votre app parfaite
              </h3>
              <p className="text-lg text-maritime-slate font-body">
                Répondez à 3 questions et recevez une recommandation personnalisée
              </p>
            </div>
            
            {!showQuiz ? (
              <div className="text-center">
                <button
                  onClick={() => setShowQuiz(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-maritime-coral text-white rounded-full hover:brightness-110 transition-all transform hover:scale-105 shadow-lg focus-visible:ring-2 focus-visible:ring-maritime-coral focus-visible:ring-offset-2"
                >
                  <Star className="w-5 h-5" />
                  Commencer le quiz
                </button>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl p-8">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-maritime-slate">Question {quizStep + 1}/3</span>
                      <span className="text-maritime-slate">{Math.round(((quizStep + 1) / 3) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-maritime-azure rounded-full transition-all duration-300"
                        style={{ width: `${((quizStep + 1) / 3) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-title font-semibold text-maritime-deep mb-6">
                    {quizQuestions[quizStep].question}
                  </h4>
                  
                  <div className="space-y-3">
                    {quizQuestions[quizStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(option.value)}
                        className="w-full p-4 text-left rounded-xl border-2 border-gray-300 hover:border-maritime-azure hover:bg-maritime-azure/5 transition focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredApps.map((app) => (
            <AppReviewCard 
              key={app.id}
              app={app}
              onAppClick={handleAppClick}
            />
          ))}
        </div>
        
        {/* No results message */}
        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-maritime-slate mb-2">
              Aucune application trouvée
            </h3>
            <p className="text-maritime-slate mb-4">
              Essayez de modifier vos critères de recherche
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-maritime-azure text-white rounded-full hover:bg-maritime-marine transition"
            >
              Effacer les filtres
            </button>
          </div>
        )}
        
        {/* Detailed Review Sections */}
        <div className="space-y-16">
          {/* Free Apps */}
          <div>
            <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-8 text-center">
              🎁 Applications gratuites
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {APPS.filter(app => app.category === 'free').map((app) => (
                <AppReviewCard 
                  key={app.id}
                  app={app}
                  onAppClick={handleAppClick}
                />
              ))}
            </div>
          </div>
          
          {/* Premium Apps */}
          <div>
            <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-8 text-center">
              💎 Applications premium
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {APPS.filter(app => app.category === 'premium').map((app) => (
                <AppReviewCard 
                  key={app.id}
                  app={app}
                  onAppClick={handleAppClick}
                />
              ))}
            </div>
          </div>
          
          {/* PC Software */}
          <div>
            <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-8 text-center">
              💻 Logiciels PC
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {APPS.filter(app => app.category === 'pc').map((app) => (
                <AppReviewCard 
                  key={app.id}
                  app={app}
                  onAppClick={handleAppClick}
                />
              ))}
            </div>
          </div>
          
          {/* Paper Charts */}
          <div>
            <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-8 text-center">
              📄 Cartes papier
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {APPS.filter(app => app.category === 'paper').map((app) => (
                <AppReviewCard 
                  key={app.id}
                  app={app}
                  onAppClick={handleAppClick}
                />
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default AppsSection
