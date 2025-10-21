import { useState, useEffect, useRef } from 'react'
import { ChevronDown, HelpCircle, Map, Compass, Anchor, Waves, Sparkles, Star, Zap, Eye, Heart, BookOpen, Navigation } from 'lucide-react'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const faqData = [
    {
      question: "Comment s'appelle une carte marine ?",
      answer: "Une carte marine s'appelle aussi carte nautique. C'est une représentation graphique des zones maritimes montrant profondeurs, dangers, ports et aides à la navigation.",
      icon: Map,
      image: "/assets/faq/optimized/carte-marine-nautique-francaise.webp",
      alt: "Marin français utilisant une carte nautique traditionnelle sur un bateau français",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600",
      category: "Définition",
      difficulty: "Débutant",
      timeToRead: "2 min"
    },
    {
      question: "C'est quoi une carte de navigation ?",
      answer: "Une carte de navigation est un terme générique qui inclut les cartes marines, mais aussi les cartes aéronautiques et terrestres utilisées pour la navigation.",
      icon: Compass,
      image: "/assets/faq/optimized/carte-navigation-types-comparaison.webp",
      alt: "Instructeur maritime français comparant différents types de cartes de navigation",
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-emerald-50",
      accentColor: "text-emerald-600",
      category: "Types",
      difficulty: "Intermédiaire",
      timeToRead: "3 min"
    },
    {
      question: "Quelle est la carte utilisée par les marins ?",
      answer: "Les marins utilisent principalement les cartes marines officielles du SHOM en France, qui sont conformes aux standards internationaux de l'OMI (Organisation Maritime Internationale).",
      icon: Anchor,
      image: "/assets/faq/optimized/carte-marine-shom-marins-professionnels.webp",
      alt: "Officiers de la Marine française utilisant les cartes SHOM officielles",
      color: "from-purple-500 to-indigo-400",
      bgColor: "bg-purple-50",
      accentColor: "text-purple-600",
      category: "Professionnel",
      difficulty: "Avancé",
      timeToRead: "4 min"
    },
    {
      question: "Qu'est-ce qu'un portulan ?",
      answer: "Un portulan est une carte marine ancienne (XIVe-XVIe siècles) montrant les ports et côtes avec des lignes de rhumb pour la navigation à la boussole.",
      icon: Waves,
      image: "/assets/faq/optimized/portulan-carte-marine-ancienne-medievale.webp",
      alt: "Historien français étudiant une carte portulan médiévale dans un musée maritime",
      color: "from-amber-500 to-orange-400",
      bgColor: "bg-amber-50",
      accentColor: "text-amber-600",
      category: "Historique",
      difficulty: "Expert",
      timeToRead: "5 min"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-maritime-white via-blue-50 to-cyan-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-maritime-azure/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-maritime-azure/10 text-maritime-azure px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Questions Fréquentes
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tout savoir sur les 
            <span className="text-maritime-azure relative">
              {" "}cartes marines
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-maritime-azure to-cyan-400 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les réponses aux questions les plus courantes sur la navigation et les cartes marines
          </p>
        </div>

        {/* Important Notice */}
        <div className={`bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-lg mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">!</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important</h3>
              <p className="text-amber-700">
                En navigation hauturière (au-delà de 6 milles des côtes), les cartes papier sont obligatoires à bord. 
                Les applications numériques ne peuvent servir que d'aide à la navigation.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Grid - Version Améliorée avec Images Complètes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {faqData.map((faq, index) => {
            const Icon = faq.icon
            const isActive = activeIndex === index
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-maritime-azure hover:to-cyan-400 transform hover:-translate-y-3 hover:scale-105 min-h-[600px] flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${faq.bgColor} hover:bg-white`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${faq.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-maritime-azure/30 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400/50 rounded-full animate-ping delay-700"></div>
                </div>

                {/* Image Section - Hauteur Optimisée pour Images Complètes */}
                <div className="relative h-96 overflow-hidden flex-shrink-0">
                  {/* Main Image with Better Aspect Ratio - object-contain pour éviter les coupures */}
                  <img
                    src={faq.image}
                    alt={faq.alt}
                    loading="lazy"
                    className="w-full h-full object-contain object-center bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback with Enhanced Animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-maritime-azure/20 to-cyan-400/20 hidden items-center justify-center">
                    <div className="w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                      <Icon className="w-12 h-12 text-maritime-azure" />
                    </div>
                  </div>
                  
                  {/* Dynamic Overlay with Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  
                  {/* Enhanced Animated Icon */}
                  <div className={`absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 ${faq.accentColor} shadow-lg`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  {/* Multiple Sparkle Effects */}
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
                  </div>
                  
                  {/* Enhanced Question Badge with More Info */}
                  <div className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold text-gray-800">Question {index + 1}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">{faq.timeToRead}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${faq.color} text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105`}>
                    {faq.category}
                  </div>
                  
                  {/* Difficulty Indicator */}
                  <div className={`absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 ${faq.accentColor}`}>
                    {faq.difficulty}
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="p-6 relative flex-1 flex flex-col">
                  {/* Interactive Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left group-hover:text-maritime-azure transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold text-gray-900 group-hover:${faq.accentColor} transition-all duration-300 transform group-hover:translate-x-2 leading-tight`}>
                          {faq.question}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-500">{faq.timeToRead}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-500">{faq.difficulty}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Zap className={`w-5 h-5 ${faq.accentColor} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                        <ChevronDown 
                          className={`w-6 h-6 text-gray-400 transition-all duration-500 transform ${
                            isActive ? 'rotate-180 scale-110 text-maritime-azure' : 'group-hover:scale-110'
                          }`} 
                        />
                      </div>
                    </div>
                  </button>

                  {/* Enhanced Animated Answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t-2 border-gradient-to-r from-maritime-azure to-cyan-400">
                      <div className={`p-5 rounded-xl ${faq.bgColor} transition-all duration-500 shadow-inner`}>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${faq.color} flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed font-medium text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Interactive Elements */}
                  <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-maritime-azure rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500 font-medium">Cliquez pour en savoir plus</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-red-400 animate-pulse" />
                        <span className="text-xs text-gray-400">Utile</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-maritime-azure rounded-full animate-bounce delay-200"></div>
                      <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
                    </div>
                  </div>
                  
                  {/* Progress Bar for Reading */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className={`bg-gradient-to-r ${faq.color} h-1 rounded-full transition-all duration-1000 ${isActive ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Bottom CTA with Interactive Elements */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-maritime-azure/5 to-cyan-400/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-maritime-azure/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Navigation className="w-6 h-6 text-maritime-azure animate-pulse" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Vous avez d'autres questions ?
                </h3>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
              </div>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Consultez notre guide complet ou explorez nos cartes interactives pour approfondir vos connaissances en navigation maritime
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-maritime-azure to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-maritime-azure/90 hover:to-cyan-400/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Guide Complet
                    <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>
                
                <button className="group relative bg-white text-maritime-azure border-2 border-maritime-azure px-8 py-4 rounded-xl font-semibold hover:bg-maritime-azure hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-maritime-azure/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <Map className="w-5 h-5" />
                    Cartes Interactives
                    <Star className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>
              </div>
              
              {/* Additional Info */}
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>4 questions disponibles</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Guide mis à jour</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Images haute qualité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
