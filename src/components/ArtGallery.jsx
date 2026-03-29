import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { artWorks } from '../data/assets'

export default function ArtGallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [lightbox, setLightbox] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? artWorks : artWorks.slice(0, 12)

  const prev = () => {
    const i = artWorks.findIndex(w => w.id === lightbox.id)
    setLightbox(artWorks[(i - 1 + artWorks.length) % artWorks.length])
  }
  const next = () => {
    const i = artWorks.findIndex(w => w.id === lightbox.id)
    setLightbox(artWorks[(i + 1) % artWorks.length])
  }

  return (
    <section id="art" className="py-24 px-6 bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Works</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">Paintings &amp; <span className="italic font-light">Drawings</span></h2>
            <p className="font-mono text-xs text-espresso/40">{artWorks.length} artworks</p>
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {displayed.map((work, i) => (
            <motion.div
              key={work.id}
              className="break-inside-avoid img-hover rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              onClick={() => setLightbox(work)}
              style={{ cursor: 'auto' }}
            >
              <div className="relative group">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-auto block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-all duration-300 flex items-end p-3">
                  <span className="font-mono text-xs text-peach opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest uppercase">
                    {work.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more/less */}
        {artWorks.length > 12 && (
          <div className="text-center mt-10">
            <button
              className="btn-outline"
              onClick={() => setShowAll(!showAll)}
              style={{ cursor: 'auto' }}
            >
              {showAll ? 'Show Less ↑' : `View All ${artWorks.length} Works ↓`}
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
              <p className="font-mono text-xs text-peach/50 tracking-widest uppercase mt-4">{lightbox.title}</p>
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
