import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { photographs } from '../data/assets'

export default function Photography() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [lightbox, setLightbox] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? photographs : photographs.slice(0, 9)

  const prev = () => {
    const i = photographs.findIndex(p => p.id === lightbox.id)
    setLightbox(photographs[(i - 1 + photographs.length) % photographs.length])
  }
  const next = () => {
    const i = photographs.findIndex(p => p.id === lightbox.id)
    setLightbox(photographs[(i + 1) % photographs.length])
  }

  return (
    <section id="photography" className="py-24 px-6 bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Lens &amp; Light</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">Photo<span className="italic font-light">graphy</span></h2>
            <p className="font-mono text-xs text-espresso/40">{photographs.length} frames</p>
          </div>
        </motion.div>

        {/* Grid: 3 columns with varied row heights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {displayed.map((photo, i) => {
            // Make every 7th image span 2 columns for visual interest
            const wideClass = i % 7 === 0 ? 'col-span-2 sm:col-span-1' : ''
            return (
              <motion.div
                key={photo.id}
                className={`relative rounded-xl overflow-hidden img-hover group cursor-pointer ${wideClass}`}
                style={{ aspectRatio: i % 5 === 0 ? '4/5' : '3/4', cursor: 'auto' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                onClick={() => setLightbox(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/25 transition-all duration-300 flex items-end p-3">
                  <span className="font-mono text-xs text-peach opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
                    {photo.title}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {photographs.length > 9 && (
          <div className="text-center mt-10">
            <button
              className="btn-outline"
              onClick={() => setShowAll(!showAll)}
              style={{ cursor: 'auto' }}
            >
              {showAll ? 'Show Less ↑' : `Show All ${photographs.length} Photos ↓`}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ cursor: 'auto' }}
          >
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-peach/60 hover:text-peach text-4xl px-4 py-8 z-10"
              onClick={(e) => { e.stopPropagation(); prev() }}
              style={{ cursor: 'auto' }}
            >‹</button>
            <motion.div
              className="relative max-w-3xl max-h-[85vh] flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ cursor: 'auto' }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[80vh] max-w-full object-contain rounded-xl"
                loading="lazy"
              />
              <p className="font-mono text-xs text-peach/50 tracking-widest uppercase mt-4">
                {lightbox.title} · {photographs.findIndex(p => p.id === lightbox.id) + 1}/{photographs.length}
              </p>
            </motion.div>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-peach/60 hover:text-peach text-4xl px-4 py-8 z-10"
              onClick={(e) => { e.stopPropagation(); next() }}
              style={{ cursor: 'auto' }}
            >›</button>
            <button
              className="absolute top-4 right-4 text-peach/60 hover:text-peach text-xl p-2"
              onClick={() => setLightbox(null)}
              style={{ cursor: 'auto' }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
