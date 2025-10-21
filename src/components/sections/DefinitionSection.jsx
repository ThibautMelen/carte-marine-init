import { useState } from 'react'

const DefinitionSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  return (
    <section id="definition" className="py-16 md:py-24 bg-maritime-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-title font-semibold text-maritime-deep mb-12 text-center">
          Carte marine ou carte nautique : votre guide de navigation indispensable
        </h2>
        
        {/* Bento Grid: 2 columns desktop, 1 mobile */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-title font-semibold text-maritime-marine mb-4">
                Définition et histoire (300 ans d'évolution)
              </h3>
              <p className="font-body text-maritime-slate leading-relaxed">
                Une carte marine (ou carte nautique) est une représentation graphique des zones maritimes 
                montrant les profondeurs, les dangers, les ports et les aides à la navigation. 
                Depuis les premiers portulans du XIVe siècle jusqu'aux cartes numériques modernes, 
                l'évolution des cartes marines reflète l'histoire de la navigation. Les cartes officielles 
                françaises sont publiées par le SHOM (Service Hydrographique et Océanographique de la Marine) 
                et constituent la référence pour tous les navigateurs.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-title font-semibold text-maritime-marine mb-4">
                Utilisation pratique en navigation
              </h3>
              <p className="font-body text-maritime-slate leading-relaxed">
                Les cartes marines sont essentielles pour planifier une route, identifier les dangers, 
                calculer les distances et suivre sa position. Elles contiennent des informations cruciales 
                comme les profondeurs, les courants, les marées, les phares et les bouées. 
                En navigation hauturière, elles sont obligatoires à bord selon la réglementation maritime.
              </p>
            </div>
          </div>
          
          {/* Right: Interactive Slider */}
          <div className="relative">
            <div className="bg-gradient-to-br from-maritime-azure/5 to-cyan-400/5 rounded-3xl p-8 border border-maritime-azure/10">
              <h3 className="text-xl font-semibold text-maritime-deep mb-6 text-center">
                Évolution des techniques de navigation
              </h3>
              
              {/* Slider Container */}
              <div className="relative mb-8">
                <div className="flex justify-between text-sm text-maritime-slate mb-2">
                  <span>Navigation traditionnelle</span>
                  <span>Navigation moderne</span>
                </div>
                
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gradient-to-r from-maritime-azure to-cyan-400 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #0ea5e9 0%, #06b6d4 ${sliderPosition}%, #e5e7eb ${sliderPosition}%, #e5e7eb 100%)`
                    }}
                  />
                  
                  {/* Slider Thumb */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-4 border-maritime-azure rounded-full shadow-lg cursor-pointer"
                    style={{ left: `calc(${sliderPosition}% - 12px)` }}
                  ></div>
                </div>
              </div>
              
              {/* Dynamic Content */}
              <div className="text-center">
                {sliderPosition < 30 ? (
                  <div className="space-y-4">
                    <div className="text-4xl">🧭</div>
                    <h4 className="text-lg font-semibold text-maritime-deep">Navigation traditionnelle</h4>
                    <p className="text-maritime-slate text-sm">
                      Boussole, sextant, chronomètre et cartes papier. 
                      Techniques utilisées depuis des siècles par les marins.
                    </p>
                  </div>
                ) : sliderPosition < 70 ? (
                  <div className="space-y-4">
                    <div className="text-4xl">📡</div>
                    <h4 className="text-lg font-semibold text-maritime-deep">Navigation électronique</h4>
                    <p className="text-maritime-slate text-sm">
                      GPS, radar, sondeur et cartes électroniques. 
                      Révolution des années 1980-2000.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-4xl">💻</div>
                    <h4 className="text-lg font-semibold text-maritime-deep">Navigation moderne</h4>
                    <p className="text-maritime-slate text-sm">
                      AIS, cartes vectorielles, systèmes intégrés et IA. 
                      L'avenir de la navigation maritime.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* "Did you know?" callout boxes */}
        <div className="mt-12 space-y-6">
          <div className="bg-maritime-seafoam/20 p-6 rounded-2xl border-l-4 border-maritime-azure">
            <p className="font-body text-maritime-deep">
              💡 <strong>Le saviez-vous ?</strong> Les cartes SHOM sont mises à jour chaque semaine avec les dernières informations de navigation. 
              Plus de 2000 corrections sont apportées chaque année pour garantir la sécurité des navigateurs.
            </p>
          </div>
          
          <div className="bg-maritime-coral/10 p-6 rounded-2xl border-l-4 border-maritime-coral">
            <p className="font-body text-maritime-deep">
              ⚠️ <strong>Important :</strong> En navigation hauturière (au-delà de 6 milles des côtes), 
              les cartes papier sont obligatoires à bord. Les applications numériques ne peuvent servir que d'aide à la navigation.
            </p>
          </div>
        </div>
        
        {/* FAQ Section - Design Moderne et Interactif */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-maritime-azure/10 to-cyan-400/10 text-maritime-azure px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-maritime-azure/20">
              <span className="w-2 h-2 bg-maritime-azure rounded-full animate-pulse"></span>
              Questions Fréquentes
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tout savoir sur les 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-maritime-azure to-cyan-400">
                {" "}cartes marines
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les réponses aux questions les plus courantes sur la navigation maritime
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* FAQ Card 1 - Carte Nautique */}
            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-maritime-azure hover:to-cyan-400 transform hover:-translate-y-4 hover:scale-105">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-maritime-azure via-cyan-400 to-maritime-azure opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 left-4 w-3 h-3 bg-maritime-azure/30 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-500"></div>
              </div>

              <div className="relative z-10">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src="/assets/faq/optimized/carte-marine-nautique-francaise.webp"
                    alt="Marin français utilisant une carte nautique traditionnelle sur un bateau français"
                    loading="lazy"
                    className="w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-maritime-azure/20 to-cyan-400/20 hidden items-center justify-center">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-4xl">🗺️</span>
                    </div>
                  </div>
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-maritime-azure to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                    Définition
                  </div>
                  
                  {/* Question Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-maritime-azure font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
                    1
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-maritime-azure transition-colors duration-300">
                    Comment s'appelle une carte marine ?
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Une carte marine s'appelle aussi carte nautique. C'est une représentation graphique des zones maritimes 
                    montrant profondeurs, dangers, ports et aides à la navigation.
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-maritime-azure rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 font-medium">Cliquez pour en savoir plus</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-maritime-azure rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Card 2 - Carte Navigation */}
            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-emerald-500 hover:to-teal-400 transform hover:-translate-y-4 hover:scale-105">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 left-4 w-3 h-3 bg-emerald-500/30 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-teal-400/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-green-400/30 rounded-full animate-bounce delay-500"></div>
              </div>

              <div className="relative z-10">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src="/assets/faq/optimized/carte-navigation-types-comparaison.webp"
                    alt="Instructeur maritime français comparant différents types de cartes de navigation"
                    loading="lazy"
                    className="w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-400/20 hidden items-center justify-center">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-4xl">🧭</span>
                    </div>
                  </div>
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                    Types
                  </div>
                  
                  {/* Question Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-emerald-600 font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
                    2
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    C'est quoi une carte de navigation ?
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Une carte de navigation est un terme générique qui inclut les cartes marines, 
                    mais aussi les cartes aéronautiques et terrestres utilisées pour la navigation.
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 font-medium">Cliquez pour en savoir plus</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Card 3 - Cartes SHOM */}
            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-purple-500 hover:to-indigo-400 transform hover:-translate-y-4 hover:scale-105">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 left-4 w-3 h-3 bg-purple-500/30 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-indigo-400/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-violet-400/30 rounded-full animate-bounce delay-500"></div>
              </div>

              <div className="relative z-10">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src="/assets/faq/optimized/carte-marine-shom-marins-professionnels.webp"
                    alt="Officiers de la Marine française utilisant les cartes SHOM officielles"
                    loading="lazy"
                    className="w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-400/20 hidden items-center justify-center">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-4xl">⚓</span>
                    </div>
                  </div>
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-indigo-400 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                    Professionnel
                  </div>
                  
                  {/* Question Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-600 font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
                    3
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Quelle est la carte utilisée par les marins ?
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Les marins utilisent principalement les cartes marines officielles du SHOM en France, 
                    qui sont conformes aux standards internationaux de l'OMI (Organisation Maritime Internationale).
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 font-medium">Cliquez pour en savoir plus</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-violet-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Card 4 - Portulan */}
            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-amber-500 hover:to-orange-400 transform hover:-translate-y-4 hover:scale-105">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 left-4 w-3 h-3 bg-amber-500/30 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-orange-400/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce delay-500"></div>
              </div>

              <div className="relative z-10">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src="/assets/faq/optimized/portulan-carte-marine-ancienne-medievale.webp"
                    alt="Historien français étudiant une carte portulan médiévale dans un musée maritime"
                    loading="lazy"
                    className="w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-400/20 hidden items-center justify-center">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-4xl">🌊</span>
                    </div>
                  </div>
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                    Historique
                  </div>
                  
                  {/* Question Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-600 font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
                    4
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    Qu'est-ce qu'un portulan ?
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Un portulan est une carte marine ancienne (XIVe-XVIe siècles) montrant les ports et côtes 
                    avec des lignes de rhumb pour la navigation à la boussole.
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 font-medium">Cliquez pour en savoir plus</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DefinitionSection