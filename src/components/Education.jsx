import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="education" className="py-24 px-6 bg-peach" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Education</p>
            <h2 className="section-title mb-8">Where I'm <span className="italic font-light">Learning</span></h2>

            <div className="bg-cream rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-espresso flex items-center justify-center flex-shrink-0 text-peach text-lg">
                  🎓
                </div>
                <div>
                  <div className="font-mono text-xs text-espresso/40 uppercase tracking-widest mb-1">2022 — Present</div>
                  <h3 className="font-display text-xl text-espresso mb-1">Stella Maris College of Education</h3>
                  <p className="font-body text-sm text-espresso/60 mb-3">3rd Year · Visual Arts</p>
                  <div className="flex flex-wrap gap-2">
                    {['Painting', 'Drawing', 'Conceptual Art', 'Visual Studies'].map(t => (
                      <span key={t} className="text-xs px-3 py-1 bg-peach rounded-full font-mono text-espresso/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="section-label">Career Objective</p>
            <h2 className="section-title mb-8">What I'm <span className="italic font-light">Seeking</span></h2>

            <div className="bg-cream rounded-2xl p-6 mb-4 hover:shadow-md transition-shadow duration-300">
              <p className="font-body text-sm text-espresso/70 leading-relaxed">
                To gain hands-on experience through an internship where I can apply my
                visual arts foundation, develop practical skills, and contribute to
                creative projects in a professional setting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Open to', val: 'Internships' },
                { label: 'Also', val: 'Freelance' },
                { label: 'Field', val: 'Visual Arts' },
                { label: 'Mode', val: 'Hybrid / Remote' },
              ].map(({ label, val }) => (
                <div key={label} className="bg-cream rounded-xl p-4">
                  <div className="font-mono text-xs text-espresso/40 uppercase tracking-widest mb-1">{label}</div>
                  <div className="font-body text-sm font-medium text-espresso">{val}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
