import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Anchor, Waves, Compass, Navigation, Calendar, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ZONES } from '../../data/zones'

const ZoneExplorer = ({ zoneId, onBack }) => {
  const [zone, setZone] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundZone = ZONES.find(z => z.id === zoneId)
      setZone(foundZone)
      setIsLoading(false)
    }, 500)
  }, [zoneId])

  const pageVariants = {
    initial: { opacity: 0, x: '100%' },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '-100%' }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.6
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  if (isLoading) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen bg-maritime-white flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-maritime-azure border-t-transparent rounded-full"
        />
      </motion.div>
    )
  }

  if (!zone) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen bg-maritime-white flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-2xl font-title text-maritime-deep mb-4">Zone non trouvée</h2>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-maritime-azure text-white rounded-full hover:bg-maritime-marine transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-maritime-white"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={zone.image}
          alt={zone.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maritime-deep/80 to-transparent" />
        
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-6 left-6"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-6 left-6 right-6 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-title font-bold mb-4">
            {zone.title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            {zone.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Stats Cards */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-maritime-sky/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-maritime-azure/10 rounded-lg">
                <MapPin className="w-6 h-6 text-maritime-azure" />
              </div>
              <h3 className="text-lg font-title font-semibold text-maritime-deep">Ports</h3>
            </div>
            <p className="text-3xl font-bold text-maritime-marine mb-2">{zone.stats.ports}</p>
            <p className="text-sm text-maritime-slate">Ports disponibles</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-maritime-sky/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-maritime-seafoam/20 rounded-lg">
                <Anchor className="w-6 h-6 text-maritime-seafoam" />
              </div>
              <h3 className="text-lg font-title font-semibold text-maritime-deep">Mouillages</h3>
            </div>
            <p className="text-3xl font-bold text-maritime-marine mb-2">{zone.stats.moorings}</p>
            <p className="text-sm text-maritime-slate">Mouillages abrités</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y旋转: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-maritime-sky/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-maritime-coral/20 rounded-lg">
                <Waves className="w-6 h-6 text-maritime-coral" />
              </div>
              <h3 className="text-lg font-title font-semibold text-maritime-deep">Particularité</h3>
            </div>
            <p className="text-lg font-semibold text-maritime-marine mb-2">{zone.stats.feature}</p>
            <p className="text-sm text-maritime-slate">Spécificité de la zone</p>
          </motion.div>
        </motion.div>

        {/* Detailed Information */}
        <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Navigation Tips */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-maritime-sky/10 to-maritime-azure/10 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-maritime-azure/20 rounded-xl">
                <Navigation className="w-8 h-8 text-maritime-azure" />
              </div>
              <h2 className="text-2xl font-title font-bold text-maritime-deep">Conseils de Navigation</h2>
            </div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-3"
              >
                <Compass className="w-5 h-5 text-maritime-azure mt-1" />
                <div>
                  <h4 className="font-semibold text-maritime-deep">Orientation</h4>
                  <p className="text-maritime-slate text-sm">Utilisez les amers côtiers pour vous orienter dans cette zone</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="flex gap-3"
              >
                <Calendar className="w-5 h-5 text-maritime-azure mt-1" />
                <div>
                  <h4 className="font-semibold text-maritime-deep">Meilleure période</h4>
                  <p className="text-maritime-slate text-sm">Avril à octobre pour des conditions optimales</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex gap-3"
              >
                <Users className="w-5 h-5 text-maritime-azure mt-1" />
                <div>
                  <h4 className="font-semibold text-maritime-deep">Niveau requis</h4>
                  <p className="text-maritime-slate text-sm">Navigation côtière recommandée</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-maritime-marine/10 to-maritime-deep/10 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-maritime-marine/20 rounded-xl">
                <MapPin className="w-8 h-8 text-maritime-marine" />
              </div>
              <h2 className="text-2xl font-title font-bold text-maritime-deep">Carte Interactive</h2>
            </div>
            
            <div className="aspect-video bg-gradient-to-br from-maritime-sky to-maritime-azure rounded-2xl flex items-center justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-white text-center"
              >
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-semibold">Carte interactive</p>
                <p className="text-sm opacity-80">Cliquez pour explorer</p>
              </motion.div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 bg-maritime-marine text-white rounded-xl font-semibold hover:bg-maritime-deep transition"
            >
              Ouvrir la carte complète
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-maritime-azure/10 to-maritime-marine/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-title font-bold text-maritime-deep mb-4">
            Prêt à explorer cette zone ?
          </h2>
          <p className="text-lg text-maritime-slate mb-8 max-w-2xl mx-auto">
            Découvrez tous les détails de navigation, les ports, mouillages et conseils pratiques pour cette région.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-maritime-azure text-white rounded-full font-semibold hover:bg-maritime-marine transition"
            >
              Télécharger la carte
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-maritime-azure rounded-full font-semibold border-2 border-maritime-azure hover:bg-maritime-azure hover:text-white transition"
            >
              Voir les guides
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ZoneExplorer
