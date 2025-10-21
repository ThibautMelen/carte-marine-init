import { useState } from 'react'
import { Search, Clock, FileText } from 'lucide-react'
import GuideCard from '../ui/GuideCard'
import { GUIDES, GUIDE_CATEGORIES } from '../../data/guides'

const GuidesSection = ({ onGuideClick }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter guides based on search and category
  const filteredGuides = GUIDES.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredGuides = GUIDES.filter(guide => guide.featured)

  const handleGuideClick = (guide) => {
    if (onGuideClick) {
      onGuideClick(guide)
    }
  }

  const handleDownloadClick = (guide) => {
    // In a real app, this would trigger PDF download
    console.log('Download PDF:', guide.id)
  }

  return (
    <section id="guides" className="py-16 md:py-24 bg-maritime-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-title font-semibold text-maritime-deep mb-6 text-center">
          Apprenez la navigation avec nos guides pratiques gratuits
        </h2>
        
        <p className="text-lg md:text-xl text-maritime-slate text-center mb-12 max-w-3xl mx-auto font-body">
          Du débutant absolu au navigateur confirmé, nos guides couvrent tous les aspects 
          de la navigation maritime. 100% gratuits, PDF téléchargeables.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-maritime-slate w-5 h-5" />
            <input 
              type="text"
              placeholder="Rechercher un guide (ex: marées, météo, symboles...)"
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-maritime-sky/30 focus:border-maritime-azure outline-none transition font-body"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Rechercher un guide"
            />
          </div>
        </div>
        
        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {GUIDE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full transition focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 ${
                selectedCategory === cat.id
                  ? 'bg-maritime-azure text-white'
                  : 'bg-gray-100 text-maritime-slate hover:bg-gray-200'
              }`}
              aria-label={`Filtrer par catégorie ${cat.name}`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Interactive Map CTA */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-maritime-sky to-maritime-azure rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M10,10 L90,10 L90,90 L10,90 Z' fill='none' stroke='%230A2342' stroke-width='1'/%3E%3Cpath d='M20,20 L80,20 L80,80 L20,80 Z' fill='none' stroke='%232C5F7F' stroke-width='1'/%3E%3Cpath d='M30,30 L70,30 L70,70 L30,70 Z' fill='none' stroke='%234A90B8' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: '50px 50px',
                animation: 'float 20s linear infinite'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-pulse">🗺️</div>
              <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-deep mb-4">
                Prêt à explorer votre zone ?
              </h3>
              <p className="text-lg text-maritime-slate mb-6 max-w-2xl mx-auto">
                Utilisez notre carte interactive pour planifier votre prochaine navigation. 
                Découvrez les zones de navigation, calculez les distances et explorez les côtes françaises !
              </p>
              <button 
                onClick={() => {
                  // Animation du bouton
                  const button = event.target;
                  button.style.transform = 'scale(0.95)';
                  button.style.transition = 'all 0.3s ease';
                  
                  setTimeout(() => {
                    button.style.transform = 'scale(1)';
                  }, 300);
                  
                  // Scroll vers la carte interactive
                  const mapSection = document.getElementById('interactive-map');
                  if (mapSection) {
                    mapSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  } else {
                    // Si la section n'existe pas, rediriger vers la page d'accueil
                    window.location.href = '#interactive-map';
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-maritime-deep to-maritime-marine text-white rounded-xl font-semibold text-lg hover:from-maritime-marine hover:to-maritime-deep transition-all duration-300 focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl transform"
              >
                🧭 Ouvrir la carte interactive
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Marine Quiz Game */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-maritime-deep to-maritime-marine rounded-2xl p-8 text-white text-center relative overflow-hidden">
            {/* Animated background waves */}
            <div className="absolute inset-0 opacity-10">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-title font-semibold mb-4 animate-bounce">
                🎮 Testez vos connaissances marines !
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Découvrez notre quiz interactif sur les cartes marines avec des blagues de marin 
                et des mèmes hilarants ! Naviguez dans le savoir maritime ! ⚓
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    // Animation du bouton
                    const button = event.target;
                    button.style.transform = 'scale(0.95) rotate(2deg)';
                    button.style.transition = 'all 0.3s ease';
                    
                    setTimeout(() => {
                      button.style.transform = 'scale(1) rotate(0deg)';
                    }, 300);
                    
                    // Afficher une blague de marin
                    const jokes = [
                      "Pourquoi les marins n'ont-ils jamais froid ? Parce qu'ils ont toujours le vent dans le dos ! 🌊",
                      "Qu'est-ce qu'un marin dit quand il voit une belle femme ? 'Ahoy, belle !' ⚓",
                      "Pourquoi les poissons n'aiment-ils pas les cartes marines ? Parce qu'elles les font naviguer ! 🗺️",
                      "Qu'est-ce qui est pire qu'un requin ? Un requin avec une carte marine ! 🦈",
                      "Pourquoi les marins portent-ils des bottes ? Pour ne pas mouiller les pieds ! 👢",
                      "Qu'est-ce qu'un marin dit quand il est perdu ? 'Je suis en mer !' 🧭",
                      "Pourquoi les cartes marines sont-elles toujours mouillées ? Parce qu'elles sont dans l'eau ! 💧",
                      "Qu'est-ce qu'un marin préfère : une carte ou une boussole ? Une carte, parce qu'elle ne pointe pas toujours vers le nord ! 🧭",
                      "Pourquoi les marins n'utilisent-ils jamais de GPS ? Parce qu'ils préfèrent se perdre avec style ! 📱",
                      "Qu'est-ce qu'un marin dit quand il réussit un quiz ? 'J'ai le vent en poupe !' ⛵"
                    ];
                    
                    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                    
                    // Créer une popup avec la blague et un mème
                    const memes = [
                      "🏴‍☠️", "⚓", "🌊", "🚢", "🐙", "🦑", "🐠", "🐟", "🦈", "🐚"
                    ];
                    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
                    
                    const popup = document.createElement('div');
                    popup.innerHTML = `
                      <div style="
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: linear-gradient(135deg, #0A2342, #2C5F7F);
                        color: white;
                        padding: 30px;
                        border-radius: 20px;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                        z-index: 1000;
                        max-width: 400px;
                        text-align: center;
                        font-family: 'Montserrat', sans-serif;
                        animation: popupAppear 0.5s ease-out;
                        border: 3px solid #4A90B8;
                      ">
                        <div style="font-size: 4rem; margin-bottom: 15px; animation: wave 2s ease-in-out infinite;">${randomMeme}</div>
                        <h3 style="font-size: 1.2rem; margin-bottom: 15px; color: #7BC8E8;">Blague de Marin</h3>
                        <p style="font-size: 1rem; line-height: 1.4; margin-bottom: 20px;">${randomJoke}</p>
                        <button onclick="this.parentElement.parentElement.remove()" style="
                          background: #4A90B8;
                          color: white;
                          border: none;
                          padding: 12px 24px;
                          border-radius: 10px;
                          cursor: pointer;
                          font-weight: 600;
                          transition: all 0.3s ease;
                        " onmouseover="this.style.background='#7BC8E8'" onmouseout="this.style.background='#4A90B8'">
                          Haha ! 😂
                        </button>
                      </div>
                      <style>
                        @keyframes popupAppear {
                          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8) rotate(-10deg); }
                          100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
                        }
                        @keyframes wave {
                          0%, 100% { transform: rotate(0deg); }
                          25% { transform: rotate(-5deg); }
                          75% { transform: rotate(5deg); }
                        }
                      </style>
                    `;
                    
                    document.body.appendChild(popup);
                    
                    // Supprimer la popup après 6 secondes
                    setTimeout(() => {
                      if (popup.parentElement) {
                        popup.style.animation = 'popupAppear 0.3s ease-out reverse';
                        setTimeout(() => popup.remove(), 300);
                      }
                    }, 6000);
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-maritime-coral to-maritime-emerald text-white rounded-lg font-semibold hover:from-maritime-emerald hover:to-maritime-coral transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 hover:scale-105 active:scale-95 hover:rotate-1 transform"
                >
                  😄 Blague de Marin
                </button>
                
                <button 
                  onClick={() => {
                    // Animation du bouton
                    const button = event.target;
                    button.style.transform = 'scale(0.95) rotate(-2deg)';
                    button.style.transition = 'all 0.3s ease';
                    
                    setTimeout(() => {
                      button.style.transform = 'scale(1) rotate(0deg)';
                    }, 300);
                    
                    // Lancer le quiz interactif
                    const quizQuestions = [
                      {
                        question: "Que signifie ce symbole sur une carte marine ? ⚓",
                        options: ["Zone de mouillage", "Port", "Danger", "Phare"],
                        correct: 0,
                        explanation: "L'ancre indique une zone de mouillage autorisée !"
                      },
                      {
                        question: "Que représente ce symbole ? 🏮",
                        options: ["Bouée", "Phare", "Port", "Balise"],
                        correct: 1,
                        explanation: "C'est un phare, une aide fixe à la navigation !"
                      },
                      {
                        question: "Que signifie 🔵 sur une carte ?",
                        options: ["Danger", "Bouée", "Port", "Mouillage"],
                        correct: 1,
                        explanation: "Le cercle bleu représente une bouée flottante !"
                      },
                      {
                        question: "Que représente 🟡 ?",
                        options: ["Port", "Bouée cardinale", "Danger", "Mouillage"],
                        correct: 1,
                        explanation: "Jaune = Bouée cardinale indiquant la direction du danger !"
                      },
                      {
                        question: "Que signifie ⚠️ sur une carte marine ?",
                        options: ["Port", "Zone interdite", "Mouillage", "Phare"],
                        correct: 1,
                        explanation: "Attention ! Zone interdite à la navigation !"
                      }
                    ];
                    
                    let currentQuestion = 0;
                    let score = 0;
                    
                    const showQuestion = (questionIndex) => {
                      const question = quizQuestions[questionIndex];
                      const popup = document.createElement('div');
                      popup.innerHTML = `
                        <div style="
                          position: fixed;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          background: linear-gradient(135deg, #0A2342, #2C5F7F);
                          color: white;
                          padding: 30px;
                          border-radius: 20px;
                          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                          z-index: 1000;
                          max-width: 500px;
                          text-align: center;
                          font-family: 'Montserrat', sans-serif;
                          animation: popupAppear 0.5s ease-out;
                          border: 3px solid #4A90B8;
                        ">
                          <div style="font-size: 3rem; margin-bottom: 15px;">🧭</div>
                          <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: #7BC8E8;">
                            Question ${questionIndex + 1}/5
                          </h3>
                          <p style="font-size: 1.1rem; margin-bottom: 25px; line-height: 1.4;">
                            ${question.question}
                          </p>
                          <div style="display: grid; gap: 10px; margin-bottom: 20px;">
                            ${question.options.map((option, index) => `
                              <button onclick="handleAnswer(${index}, ${questionIndex})" style="
                                background: #4A90B8;
                                color: white;
                                border: none;
                                padding: 12px 20px;
                                border-radius: 10px;
                                cursor: pointer;
                                font-weight: 600;
                                transition: all 0.3s ease;
                                width: 100%;
                              " onmouseover="this.style.background='#7BC8E8'" onmouseout="this.style.background='#4A90B8'">
                                ${option}
                              </button>
                            `).join('')}
                          </div>
                          <div style="font-size: 0.9rem; color: #A8D8EA;">
                            Score: ${score}/5
                          </div>
                        </div>
                        <style>
                          @keyframes popupAppear {
                            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8) rotate(-5deg); }
                            100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
                          }
                        </style>
                      `;
                      
                      document.body.appendChild(popup);
                      
                      // Fonction pour gérer les réponses
                      window.handleAnswer = (selectedIndex, questionIndex) => {
                        const question = quizQuestions[questionIndex];
                        const isCorrect = selectedIndex === question.correct;
                        
                        if (isCorrect) {
                          score++;
                        }
                        
                        // Afficher la réponse
                        const answerPopup = document.createElement('div');
                        answerPopup.innerHTML = `
                          <div style="
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            background: linear-gradient(135deg, ${isCorrect ? '#2ECC71' : '#E74C3C'}, ${isCorrect ? '#27AE60' : '#C0392B'});
                            color: white;
                            padding: 30px;
                            border-radius: 20px;
                            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                            z-index: 1001;
                            max-width: 400px;
                            text-align: center;
                            font-family: 'Montserrat', sans-serif;
                            animation: popupAppear 0.5s ease-out;
                            border: 3px solid ${isCorrect ? '#27AE60' : '#C0392B'};
                          ">
                            <div style="font-size: 4rem; margin-bottom: 15px; animation: ${isCorrect ? 'bounce' : 'shake'} 1s ease-in-out;">
                              ${isCorrect ? '🎉' : '😅'}
                            </div>
                            <h3 style="font-size: 1.2rem; margin-bottom: 15px;">
                              ${isCorrect ? 'Bravo !' : 'Oups !'}
                            </h3>
                            <p style="font-size: 1rem; line-height: 1.4; margin-bottom: 20px;">
                              ${question.explanation}
                            </p>
                            <button onclick="this.parentElement.parentElement.remove(); nextQuestion();" style="
                              background: ${isCorrect ? '#27AE60' : '#C0392B'};
                              color: white;
                              border: none;
                              padding: 12px 24px;
                              border-radius: 10px;
                              cursor: pointer;
                              font-weight: 600;
                              transition: all 0.3s ease;
                            ">
                              ${questionIndex < 4 ? 'Question suivante' : 'Voir le résultat'}
                            </button>
                          </div>
                          <style>
                            @keyframes bounce {
                              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                              40% { transform: translateY(-10px); }
                              60% { transform: translateY(-5px); }
                            }
                            @keyframes shake {
                              0%, 100% { transform: translateX(0); }
                              25% { transform: translateX(-5px); }
                              75% { transform: translateX(5px); }
                            }
                          </style>
                        `;
                        
                        document.body.appendChild(answerPopup);
                        popup.remove();
                      };
                      
                      // Fonction pour passer à la question suivante
                      window.nextQuestion = () => {
                        answerPopup.remove();
                        if (currentQuestion < 4) {
                          currentQuestion++;
                          showQuestion(currentQuestion);
                        } else {
                          // Afficher le résultat final
                          const finalPopup = document.createElement('div');
                          const percentage = (score / 5) * 100;
                          const message = percentage >= 80 ? "Capitaine expert ! 🏆" : 
                                        percentage >= 60 ? "Bon marin ! ⚓" : 
                                        "Mousse en formation ! 🧭";
                          
                          finalPopup.innerHTML = `
                            <div style="
                              position: fixed;
                              top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);
                              background: linear-gradient(135deg, #0A2342, #2C5F7F);
                              color: white;
                              padding: 40px;
                              border-radius: 20px;
                              box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                              z-index: 1002;
                              max-width: 500px;
                              text-align: center;
                              font-family: 'Montserrat', sans-serif;
                              animation: popupAppear 0.5s ease-out;
                              border: 3px solid #4A90B8;
                            ">
                              <div style="font-size: 5rem; margin-bottom: 20px; animation: celebration 2s ease-in-out infinite;">🏆</div>
                              <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #7BC8E8;">
                                ${message}
                              </h3>
                              <p style="font-size: 1.2rem; margin-bottom: 20px;">
                                Score final : ${score}/5 (${percentage}%)
                              </p>
                              <p style="font-size: 1rem; margin-bottom: 25px; color: #A8D8EA;">
                                ${percentage >= 80 ? "Vous maîtrisez parfaitement les cartes marines !" :
                                  percentage >= 60 ? "Bonne connaissance des symboles maritimes !" :
                                  "Continuez à apprendre, la mer vous attend !"}
                              </p>
                              <button onclick="this.parentElement.parentElement.remove()" style="
                                background: #4A90B8;
                                color: white;
                                border: none;
                                padding: 15px 30px;
                                border-radius: 10px;
                                cursor: pointer;
                                font-weight: 600;
                                font-size: 1.1rem;
                                transition: all 0.3s ease;
                              " onmouseover="this.style.background='#7BC8E8'" onmouseout="this.style.background='#4A90B8'">
                                Rejouer ! 🎮
                              </button>
                            </div>
                            <style>
                              @keyframes celebration {
                                0%, 100% { transform: scale(1) rotate(0deg); }
                                25% { transform: scale(1.1) rotate(5deg); }
                                75% { transform: scale(1.1) rotate(-5deg); }
                              }
                            </style>
                          `;
                          
                          document.body.appendChild(finalPopup);
                        }
                      };
                    };
                    
                    showQuestion(0);
                  }}
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-maritime-deep transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 hover:scale-105 active:scale-95 hover:-rotate-1 transform"
                >
                  🧭 Quiz Maritime
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredGuides.map((guide) => (
            <GuideCard 
              key={guide.id}
              guide={guide}
              onGuideClick={handleGuideClick}
              onDownloadClick={handleDownloadClick}
            />
          ))}
        </div>
        
        {/* No results message */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-maritime-slate mb-2">
              Aucun guide trouvé
            </h3>
            <p className="text-maritime-slate">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
        

        {/* Most Popular Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-title font-semibold text-maritime-marine mb-8 text-center">
            🔥 Guides les plus consultés
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredGuides.map((guide) => (
              <div key={guide.id} className="bg-gradient-to-br from-maritime-azure/10 to-maritime-marine/10 rounded-2xl p-8 border border-maritime-azure/20">
                <div className="flex items-start gap-6">
                  {/* Thumbnail */}
                  <div className="w-24 h-24 bg-gradient-to-br from-maritime-sky to-maritime-azure rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-white text-3xl">📚</div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-maritime-azure text-white text-xs font-semibold rounded-full">
                        {guide.category}
                      </span>
                      <span className="px-3 py-1 bg-white/80 text-maritime-slate text-xs font-semibold rounded-full">
                        {guide.difficulty}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-title font-semibold text-maritime-deep mb-2">
                      {guide.title}
                    </h4>
                    
                    <p className="text-maritime-slate text-sm mb-4 font-body">
                      {guide.excerpt}
                    </p>
                    
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-maritime-slate mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {guide.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        PDF disponible
                      </span>
                      <span className="text-maritime-azure font-semibold">
                        {guide.views.toLocaleString()} vues
                      </span>
                    </div>
                    
                    {/* CTAs */}
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleGuideClick(guide)}
                        className="px-6 py-2 bg-maritime-azure text-white rounded-lg hover:bg-maritime-marine transition text-sm focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
                      >
                        Lire le guide
                      </button>
                      <button
                        onClick={() => window.open('/downloads/guide-complet-cartes-marines.html', '_blank')}
                        className="px-6 py-2 border border-maritime-azure text-maritime-azure rounded-lg hover:bg-maritime-azure hover:text-white transition text-sm focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
                      >
                        Telecharger le PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuidesSection
