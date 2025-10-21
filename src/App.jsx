import { Helmet } from 'react-helmet-async'
import { Suspense, lazy, useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/sections/HeroSection'
import DefinitionSection from './components/sections/DefinitionSection'
import Footer from './components/Footer'
import { UGC_PHOTOS, TESTIMONIALS } from './data/testimonials'
import { GUIDES } from './data/guides'
import { ZONES } from './data/zones'
import './styles/guide-animations.css'

// Import des guides individuels
import NavigationNuitGuide from './components/pages/guides/NavigationNuitGuide'
import MeteoMarineGuide from './components/pages/guides/MeteoMarineGuide'
import SymbolesEssentielsGuide from './components/pages/guides/SymbolesEssentielsGuide'
import EquipementSecuriteGuide from './components/pages/guides/EquipementSecuriteGuide'
import MouillageTechniqueGuide from './components/pages/guides/MouillageTechniqueGuide'
import NavigationCotiereGuide from './components/pages/guides/NavigationCotiereGuide'
import PlanifierNavigationGuide from './components/pages/guides/PlanifierNavigationGuide'

// Import ZoneExplorer
import ZoneExplorer from './components/pages/ZoneExplorer'

// Lazy load heavy components
const InteractiveMapSection = lazy(() => import('./components/sections/InteractiveMapSection'))
const SymbolsSection = lazy(() => import('./components/sections/SymbolsSection'))
const ZonesSection = lazy(() => import('./components/sections/ZonesSection'))
const AppsSection = lazy(() => import('./components/sections/AppsSection'))
const GuidesSection = lazy(() => import('./components/sections/GuidesSection'))
const CommunitySection = lazy(() => import('./components/sections/CommunitySection'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maritime-azure"></div>
  </div>
)

function App() {
  const [currentGuide, setCurrentGuide] = useState(null)
  const [currentZone, setCurrentZone] = useState(null)

  const handleGuideClick = (guide) => {
    setCurrentGuide(guide.id)
    setCurrentZone(null) // Reset zone when guide is selected
    // Scroll vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToGuides = () => {
    setCurrentGuide(null)
    // Scroll vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleZoneClick = (zone) => {
    setCurrentZone(zone.id)
    setCurrentGuide(null) // Reset guide when zone is selected
    // Scroll vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToZones = () => {
    setCurrentZone(null)
    // Scroll vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Fonction pour rendre le guide approprié
  const renderGuide = () => {
    switch (currentGuide) {
      case 'navigation-nuit':
        return <NavigationNuitGuide onBack={handleBackToGuides} />
      case 'meteo-marine':
        return <MeteoMarineGuide onBack={handleBackToGuides} />
      case 'symboles-essentiels':
        return <SymbolesEssentielsGuide onBack={handleBackToGuides} />
      case 'equipement-securite':
        return <EquipementSecuriteGuide onBack={handleBackToGuides} />
      case 'mouillage-technique':
        return <MouillageTechniqueGuide onBack={handleBackToGuides} />
      case 'navigation-cotiere':
        return <NavigationCotiereGuide onBack={handleBackToGuides} />
      case 'planifier-navigation':
        return <PlanifierNavigationGuide onBack={handleBackToGuides} />
      default:
        return null
    }
  }

  // Si une zone est sélectionnée, afficher seulement ZoneExplorer
  if (currentZone) {
    return (
      <>
        <Helmet>
          <title>Zone de Navigation - Carte Marine</title>
          <meta name="description" content="Explorez cette zone de navigation maritime avec cartes interactives et guides spécialisés" />
        </Helmet>
        <ZoneExplorer zoneId={currentZone} onBack={handleBackToZones} />
      </>
    )
  }

  // Si un guide est sélectionné, afficher seulement le guide
  if (currentGuide) {
    return (
      <>
        <Helmet>
          <title>Guide Navigation - Carte Marine</title>
          <meta name="description" content="Guide de navigation maritime complet et gratuit" />
        </Helmet>
        {renderGuide()}
      </>
    )
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Carte Marine Gratuite 2025 | Cartes Interactives France + Guide</title>
        <meta name="title" content="Carte Marine Gratuite 2025 | Cartes Interactives France + Guide" />
        <meta name="description" content="Explorez nos cartes marines interactives gratuites de France. Outils de navigation, guides débutants, symboles expliqués. Téléchargez le PDF gratuit !" />
        <meta name="keywords" content="carte marine, carte marine gratuite, carte marine pdf, carte marine interactive, carte nautique, SHOM, symbole carte marine" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carte-marine.com/" />
        <meta property="og:title" content="Carte Marine Gratuite : Votre Guide Navigation 2025" />
        <meta property="og:description" content="Cartes interactives, outils gratuits, guides pour débutants." />
        <meta property="og:image" content="https://carte-marine.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://carte-marine.com/" />
        <meta property="twitter:title" content="Carte Marine Gratuite : Votre Guide Navigation 2025" />
        <meta property="twitter:description" content="Cartes interactives, outils gratuits, guides pour débutants." />
        <meta property="twitter:image" content="https://carte-marine.com/og-image.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://carte-marine.com/" />
        
        {/* Schema.org WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Carte Marine",
            "url": "https://carte-marine.com",
            "description": "Cartes marines interactives gratuites de France",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://carte-marine.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Schema.org Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Carte Marine",
            "url": "https://carte-marine.com",
            "logo": "https://carte-marine.com/logo.png",
            "sameAs": [
              "https://facebook.com/cartemarine",
              "https://instagram.com/cartemarine",
              "https://youtube.com/@cartemarine"
            ]
          })}
        </script>
        
        {/* Schema.org FAQPage - 27 PAA questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quelle est la meilleure application carte marine ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "C-Map Embark et Navionics Boating offrent les meilleurs rapports qualité/prix. C-Map est entièrement gratuit, tandis que Navionics propose plus de fonctionnalités avec abonnement."
                }
              },
              {
                "@type": "Question",
                "name": "Comment s'appelle une carte marine ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Une carte marine s'appelle aussi carte nautique. C'est une représentation graphique des zones maritimes montrant profondeurs, dangers, ports et aides à la navigation."
                }
              },
              {
                "@type": "Question",
                "name": "Où puis-je trouver des cartes marines gratuites ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le SHOM propose des cartes marines consultables gratuitement. Carte-marine.com offre également une carte interactive gratuite de toutes les côtes françaises."
                }
              },
              {
                "@type": "Question",
                "name": "C'est quoi une carte de navigation ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Une carte de navigation est un terme générique qui inclut les cartes marines, mais aussi les cartes aéronautiques et terrestres utilisées pour la navigation."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la carte utilisée par les marins ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les marins utilisent principalement les cartes marines officielles du SHOM en France, qui sont conformes aux standards internationaux de l'OMI (Organisation Maritime Internationale)."
                }
              },
              {
                "@type": "Question",
                "name": "Qu'est-ce qu'un portulan ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un portulan est une carte marine ancienne (XIVe-XVIe siècles) montrant les ports et côtes avec des lignes de rhumb pour la navigation à la boussole."
                }
              },
              {
                "@type": "Question",
                "name": "Comment lire une carte marine ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour lire une carte marine, il faut comprendre les symboles, les profondeurs, les dangers, le balisage et les zones de marée. Notre guide complet explique tout en détail."
                }
              },
              {
                "@type": "Question",
                "name": "Quels sont les symboles de carte marine ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les symboles de carte marine incluent les phares, bouées, dangers, mouillages, ports, zones interdites et bien d'autres. Notre glossaire interactif en présente 150+."
                }
              },
              {
                "@type": "Question",
                "name": "Comment calculer les marées ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le calcul des marées se fait avec les coefficients, heures de marée et hauteurs d'eau. Notre guide pratique explique la méthode simplifiée avec des exemples concrets."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la différence entre carte marine et carte terrestre ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les cartes marines montrent profondeurs, dangers sous-marins, balisage et zones de marée, tandis que les cartes terrestres montrent routes et bâtiments. Le système de coordonnées est aussi différent."
                }
              }
            ]
          })}
        </script>
        
        {/* Schema.org ImageGallery for UGC Photos */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Galerie de navigation maritime en France",
            "description": "Photos authentiques de navigation en France partagées par la communauté",
            "url": "https://carte-marine.com/#communaute",
            "image": UGC_PHOTOS.map(photo => ({
              "@type": "ImageObject",
              "contentUrl": `https://carte-marine.com${photo.url}`,
              "name": photo.caption,
              "description": photo.alt,
              "author": {
                "@type": "Person",
                "name": photo.author
              },
              "contentLocation": {
                "@type": "Place",
                "name": photo.location,
                "addressCountry": "FR"
              },
              "width": "800px",
              "height": "600px",
              "encodingFormat": "image/webp"
            }))
          })}
        </script>
        
        {/* Schema.org ImageGallery for FAQ Images */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Images FAQ - Questions fréquentes cartes marines",
            "description": "Images illustratives pour les questions fréquentes sur les cartes marines françaises",
            "url": "https://carte-marine.com/#faq",
            "image": [
              {
                "@type": "ImageObject",
                "contentUrl": "https://carte-marine.com/assets/faq/optimized/carte-marine-nautique-francaise.webp",
                "name": "Marin français utilisant une carte nautique",
                "description": "Marin français utilisant une carte nautique traditionnelle sur un bateau français",
                "width": "1920px",
                "height": "1080px",
                "encodingFormat": "image/webp",
                "contentLocation": {
                  "@type": "Place",
                  "name": "France",
                  "addressCountry": "FR"
                }
              },
              {
                "@type": "ImageObject",
                "contentUrl": "https://carte-marine.com/assets/faq/optimized/carte-navigation-types-comparaison.webp",
                "name": "Comparaison types de cartes navigation",
                "description": "Instructeur maritime français comparant différents types de cartes de navigation",
                "width": "1920px",
                "height": "1080px",
                "encodingFormat": "image/webp",
                "contentLocation": {
                  "@type": "Place",
                  "name": "France",
                  "addressCountry": "FR"
                }
              },
              {
                "@type": "ImageObject",
                "contentUrl": "https://carte-marine.com/assets/faq/optimized/carte-marine-shom-marins-professionnels.webp",
                "name": "Cartes SHOM officielles Marine française",
                "description": "Officiers de la Marine française utilisant les cartes SHOM officielles",
                "width": "1920px",
                "height": "1080px",
                "encodingFormat": "image/webp",
                "contentLocation": {
                  "@type": "Place",
                  "name": "France",
                  "addressCountry": "FR"
                }
              },
              {
                "@type": "ImageObject",
                "contentUrl": "https://carte-marine.com/assets/faq/optimized/portulan-carte-marine-ancienne-medievale.webp",
                "name": "Carte portulan médiévale française",
                "description": "Historien français étudiant une carte portulan médiévale dans un musée maritime",
                "width": "1920px",
                "height": "1080px",
                "encodingFormat": "image/webp",
                "contentLocation": {
                  "@type": "Place",
                  "name": "France",
                  "addressCountry": "FR"
                }
              }
            ]
          })}
        </script>
        
        {/* Schema.org Review for Testimonials with Avatars */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Témoignages utilisateurs carte-marine.com",
            "description": "Avis authentiques de navigateurs français utilisant nos cartes marines",
            "itemListElement": TESTIMONIALS.map((testimonial, index) => ({
              "@type": "Review",
              "position": index + 1,
              "author": {
                "@type": "Person",
                "name": testimonial.author,
                "jobTitle": testimonial.role,
                "image": `https://carte-marine.com${testimonial.avatar}`
              },
              "reviewBody": testimonial.quote,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": 5
              },
              "publisher": {
                "@type": "Organization",
                "name": "Carte Marine"
              },
              "datePublished": "2025-01-01"
            }))
          })}
        </script>
        
        {/* Schema.org ImageGallery for Guide Images */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Images guides navigation maritime",
            "description": "Images illustratives pour les guides de navigation maritime gratuits",
            "url": "https://carte-marine.com/#guides",
            "image": GUIDES.map(guide => ({
              "@type": "ImageObject",
              "contentUrl": `https://carte-marine.com${guide.thumbnail}`,
              "name": guide.title,
              "description": guide.excerpt,
              "width": "800px",
              "height": "600px",
              "encodingFormat": "image/jpeg"
            }))
          })}
        </script>
        
        {/* Schema.org ImageGallery for Zone Images */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Images zones géographiques navigation maritime",
            "description": "Images des zones de navigation maritime françaises avec cartes marines",
            "url": "https://carte-marine.com/#zones",
            "image": ZONES.map(zone => ({
              "@type": "ImageObject",
              "contentUrl": `https://carte-marine.com${zone.image}`,
              "name": zone.title,
              "description": zone.description,
              "width": "800px",
              "height": "600px",
              "encodingFormat": "image/jpeg"
            }))
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-maritime-white">
        <Navigation />
        <main>
          <HeroSection />
          <DefinitionSection />
          <Suspense fallback={<LoadingSpinner />}>
            <InteractiveMapSection />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <SymbolsSection />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ZonesSection onZoneClick={handleZoneClick} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <AppsSection />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <GuidesSection onGuideClick={handleGuideClick} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <CommunitySection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
