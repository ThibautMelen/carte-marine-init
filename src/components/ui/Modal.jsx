import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement
      
      // Focus the modal
      modalRef.current?.focus()
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Handle escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
        
        // Return focus to the previously focused element
        if (previousActiveElement.current) {
          previousActiveElement.current.focus()
        }
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal content */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-maritime-sky/20">
          {title && (
            <h3 id="modal-title" className="text-2xl font-title font-semibold text-maritime-deep">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="p-2 text-maritime-slate hover:text-maritime-deep hover:bg-maritime-sky/10 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-maritime-azure focus-visible:ring-offset-2"
            aria-label="Fermer le modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
