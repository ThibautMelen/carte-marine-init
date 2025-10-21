import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ZoneCard = ({ zone, onZoneClick }) => {
  const handleClick = () => {
    if (onZoneClick) {
      onZoneClick(zone)
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Image with overlay gradient */}
      <div className="relative h-64 overflow-hidden">
        {/* Real image with fallback */}
        <motion.img
          src={zone.image}
          alt={zone.alt}
          width="1200"
          height="675"
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onError={(e) => {
            // Fallback to gradient if image fails to load
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        {/* Fallback gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-maritime-azure to-maritime-marine flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
          <div className="text-white text-6xl opacity-50">
            {zone.id === 'bretagne' && '🏴󠁧󠁢󠁥󠁮󠁧󠁿'}
            {zone.id === 'mediterranee' && '🌊'}
            {zone.id === 'atlantique' && '🌊'}
            {zone.id === 'manche' && '🌊'}
            {zone.id === 'corse' && '🏝️'}
            {zone.id === 'domtom' && '🏝️'}
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-maritime-deep/80 to-transparent" />
        
        {/* Stats overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-4 left-4 right-4 text-white"
        >
          <div className="flex justify-between text-sm">
            <span>🏢 {zone.stats.ports} ports</span>
            <span>⚓ {zone.stats.moorings} mouillages</span>
          </div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-title font-semibold text-maritime-deep mb-3 group-hover:text-maritime-azure transition">
          {zone.title}
        </h3>
        
        {/* Feature badge */}
        <div className="mb-4 px-3 py-2 bg-maritime-seafoam/30 rounded-lg text-sm text-maritime-marine">
          ✨ <strong>Particularité:</strong> {zone.stats.feature}
        </div>
        
        {/* Description */}
        <p className="text-maritime-slate text-sm mb-6 font-body leading-relaxed">
          {zone.description}
        </p>
        
        {/* CTA Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-maritime-azure text-white rounded-full hover:bg-maritime-marine transition group focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
          aria-label={`Explorer la zone ${zone.title}`}
        >
          Explorer cette zone
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ZoneCard
