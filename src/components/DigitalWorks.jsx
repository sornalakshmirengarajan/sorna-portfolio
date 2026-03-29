import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { digitalWorks, comicPDF } from '../data/assets'

export default function DigitalWorks() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [lightbox, setLightbox] = useState(null)
  const [comicOpen, setComicOpen] = useState(false)

  return (
    <section id="digital" className="py-24 px-6 bg-peach" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Digital</p>
          <h2 className="section-title">Digital &amp; <span className="italic font-light">Motion</span></h2>
        </motion.div>

        {/* Digital works grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {digitalWorks.map((work, i) => (
            <motion.div
              key={work.id}
              className="relative rounded-2xl overflow-hidden bg-cream group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setLightbox(work)}
              style={{ cursor: 'auto' }}
            >
              {work.type === 'video' ? (
                <div className="relative aspect-[3/4] bg-espresso">
                  <video
                    src={work.src}
                    className="w-full h-full object-cover opacity-80"
                    muted
                    loop
                    playsInline
                    onMouseEnter={e => e.target.play()}
                    onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-peach/20 backdrop-blur flex items-center justify-center">
                      <span className="text-peach text-xl ml-1">▶</span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-espresso text-peach text-xs px-2 py-1 rounded-full font-mono tracking-widest">VIDEO</span>
                  </div>
                </div>
              ) : (
                <div className="aspect-square img-hover">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-mono text-xs text-peach tracking-widest uppercase">{work.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comic feature card */}
        <motion.div
          className="relative rounded-3xl bg-espresso overflow-hidden p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-peach/10 text-peach px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-4">
                <span>📖</span> Featured Comic
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-peach italic mb-3">
                Where's My Roar?
              </h3>
              <p className="font-body text-peach/60 text-sm leading-relaxed mb-6">
                A conceptual comic exploring themes of voice, identity, and expression
                through graphic narrative. An intimate piece of visual storytelling.
              </p>
              <button
                className="inline-flex items-center gap-2 bg-peach text-espresso px-6 py-3 rounded-full text-sm font-medium hover:bg-peach-light transition-all duration-300 hover:scale-105"
                onClick={() => setComicOpen(true)}
                style={{ cursor: 'auto' }}
              >
                <span>📄</span> Read the Comic
              </button>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-48 h-64 rounded-2xl border border-peach/10 overflow-hidden bg-peach/5">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-peach/30">
                  <div className="text-6xl mb-4">📚</div>
                  <div className="font-display text-xl italic">Comic</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Lightbox */}
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
            <motion.div
              className="max-w-4xl max-h-[90vh] flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ cursor: 'auto' }}
            >
              {lightbox.type === 'video' ? (
                <video src={lightbox.src} controls autoPlay className="max-h-[80vh] max-w-full rounded-xl" />
              ) : (
                <img src={lightbox.src} alt={lightbox.title} className="max-h-[80vh] max-w-full object-contain rounded-xl" />
              )}
              <p className="font-mono text-xs text-peach/50 tracking-widest uppercase mt-4">{lightbox.title}</p>
            </motion.div>
            <button
              className="absolute top-4 right-4 text-peach/60 hover:text-peach text-xl p-2"
              onClick={() => setLightbox(null)}
              style={{ cursor: 'auto' }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF Comic Lightbox */}
      <AnimatePresence>
        {comicOpen && (
          <motion.div
            className="lightbox-overlay flex-col gap-4 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ cursor: 'auto' }}
          >
            <div className="flex items-center justify-between w-full max-w-4xl mb-2">
              <h3 className="font-display text-xl italic text-peach">Where's My Roar?</h3>
              <div className="flex items-center gap-3">
                <a
                  href={comicPDF}
                  download="wheres-my-roar.pdf"
                  className="bg-peach/10 text-peach border border-peach/20 px-4 py-2 rounded-full text-xs font-mono hover:bg-peach/20 transition-colors"
                  style={{ cursor: 'auto' }}
                >
                  ↓ Download
                </a>
                <button
                  className="text-peach/60 hover:text-peach text-xl p-2"
                  onClick={() => setComicOpen(false)}
                  style={{ cursor: 'auto' }}
                >✕</button>
              </div>
            </div>
            <div className="w-full max-w-4xl flex-1 overflow-hidden rounded-2xl bg-cream">
              <iframe
                src={comicPDF + '#toolbar=1&navpanes=0'}
                className="w-full h-full"
                title="Where's My Roar Comic"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
