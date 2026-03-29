import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const words = ['Painter.', 'Designer.', 'Storyteller.', 'Visual Artist.']

export default function Hero() {
  const wordRef = useRef(null)
  const idxRef = useRef(0)

  useEffect(() => {
    const el = wordRef.current
    if (!el) return
    let timeout
    const cycle = () => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px)'
      timeout = setTimeout(() => {
        idxRef.current = (idxRef.current + 1) % words.length
        el.textContent = words[idxRef.current]
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 400)
    }
    el.textContent = words[0]
    const interval = setInterval(cycle, 2400)
    return () => { clearInterval(interval); clearTimeout(timeout) }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background graphic circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-espresso/10" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-espresso/10" />
        <div className="absolute bottom-16 -left-24 w-80 h-80 rounded-full bg-peach-dark/20" />
        <div className="absolute top-1/3 left-8 w-2 h-2 rounded-full bg-espresso/30 animate-float" />
        <div className="absolute top-2/3 right-12 w-1.5 h-1.5 rounded-full bg-espresso/20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-espresso/20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.p
              className="section-label mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Visual Arts Portfolio
            </motion.p>

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl text-espresso font-semibold leading-[1.1] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Sorna <br />
              <span className="italic font-light">Lakshmi</span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <span className="font-mono text-sm text-espresso/50">I am a</span>
              <span
                ref={wordRef}
                className="font-display text-lg italic text-espresso"
                style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
              />
            </motion.div>

            <motion.p
              className="font-body text-sm text-espresso/60 leading-relaxed max-w-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              Third-year Visual Arts student at Stella Maris, working across painting,
              drawing, and conceptual visual practices.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <a href="#art" className="btn-primary">View Works</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-10 pt-8 border-t border-espresso/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[['27+', 'Artworks'], ['3+', 'Years Study'], ['2023', 'Since'],].map(([num, lab]) => (
                <div key={lab}>
                  <div className="font-display text-2xl text-espresso">{num}</div>
                  <div className="font-mono text-xs text-espresso/40 uppercase tracking-widest">{lab}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-[2rem] border border-espresso/15 rotate-3" />
              <div className="absolute -inset-6 rounded-[2.5rem] border border-espresso/8 -rotate-2" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[1.75rem] overflow-hidden bg-peach-dark shadow-2xl">
                <img
                  src="/assets/profile.jpeg"
                  alt="Sorna Lakshmi"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-espresso text-peach rounded-2xl px-4 py-3 shadow-lg">
                <div className="font-mono text-xs tracking-widest opacity-60">AVAILABLE FOR</div>
                <div className="font-display text-sm italic">Internships</div>
              </div>
            </div>
          </motion.div>
          <br></br>
        </div>
      </div>
    </section>
  )
}
