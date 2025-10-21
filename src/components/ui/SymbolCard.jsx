import { useState } from 'react'
import Modal from './Modal'

const SymbolCard = ({ symbol, onSymbolClick }) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
    if (onSymbolClick) {
      onSymbolClick(symbol)
    }
  }

  return (
    <>
      <div 
        onClick={handleClick}
        className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
        tabIndex={0}
        role="button"
        aria-label={`Voir les détails du symbole ${symbol.name}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClick()
          }
        }}
      >
        {/* Symbol icon */}
        <div className="text-5xl mb-2 text-center">{symbol.icon}</div>
        
        {/* Symbol name */}
        <p className="text-xs text-center font-semibold text-maritime-deep group-hover:text-maritime-azure transition-colors">
          {symbol.name}
        </p>
        
        {/* Category badge */}
        <div className="absolute top-2 right-2 px-2 py-1 bg-maritime-sky/20 text-maritime-marine text-xs rounded-full">
          {symbol.category}
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-maritime-deep text-white text-xs rounded-lg whitespace-nowrap z-10">
          {symbol.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-maritime-deep"></div>
        </div>
      </div>
      
      {/* Modal with full explanation */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        title={symbol.name}
      >
        <div className="text-center">
          {/* Large symbol */}
          <div className="text-8xl mb-6">{symbol.icon}</div>
          
          {/* Description */}
          <p className="text-lg text-maritime-slate mb-6 font-body">
            {symbol.description}
          </p>
          
          {/* Category */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-maritime-sky/20 text-maritime-marine rounded-full">
            <span className="text-sm font-medium">Catégorie:</span>
            <span className="text-sm font-semibold">{symbol.category}</span>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SymbolCard
