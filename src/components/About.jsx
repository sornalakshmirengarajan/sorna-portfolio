import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="py-24 px-6 bg-cream" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96">
              <div className="absolute inset-0 rounded-2xl overflow-hidden img-hover">
                <img
                  src="/assets/dog.jpeg"
                  alt="Sorna Lakshmi at work"
                  className="w-full h-full object-cover "
                  loading="lazy"
                />
              </div>
              {/* Overlapping art preview */}
              <div className="absolute -bottom-6 -right-6 w-32 h-36 rounded-xl overflow-hidden shadow-xl border-2 border-cream img-hover">
                <img
                  src="/assets/swan.jpeg"
                  alt="Art preview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Quote tag */}
              <div className="absolute -top-4 -right-4 bg-espresso text-peach px-4 py-2 rounded-xl text-xs font-mono tracking-wide shadow">
                #VisualArts
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title mb-6">
              Making ideas <br /><span className="italic font-light">visible</span>
            </h2>

            <p className="font-body text-espresso/70 text-sm leading-relaxed mb-4">
              I am a third-year Visual Arts student working across painting, drawing,
              and conceptual visual practices. My work emphasizes strong composition,
              color sensitivity, and visual storytelling.
            </p>
            <p className="font-body text-espresso/70 text-sm leading-relaxed mb-8">
              I am open to freelance commissions as well as internship opportunities
              where I can contribute creatively while learning in a professional environment.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🎓', label: 'Education', val: 'Stella Maris College' },
                { icon: '📍', label: 'Location', val: 'Chennai, India' },
                { icon: '🌐', label: 'Languages', val: 'English · Tamil' },
                { icon: '📸', label: 'Instagram', val: '@swan.offsets_' },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{icon}</span>
                  <div>
                    <div className="font-mono text-xs text-espresso/40 uppercase tracking-widest">{label}</div>
                    <div className="font-body text-sm text-espresso">{val}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/swan.offsets_/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              Follow on Instagram ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
