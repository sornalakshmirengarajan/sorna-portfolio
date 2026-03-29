import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skills = [
  { icon: '✏️', name: 'Drawing & Sketching', level: 90 },
  { icon: '🎨', name: 'Oil Painting', level: 85 },
  { icon: '🖌️', name: 'Acrylic / Mixed Media', level: 80 },
  { icon: '📐', name: 'Visual Composition', level: 88 },
  { icon: '🖥️', name: 'Adobe Illustrator', level: 55 },
  { icon: '📷', name: 'Photography', level: 72 },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="skills" className="py-24 px-6 bg-peach" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & <span className="italic font-light">Tools</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="bg-cream rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-body text-sm font-medium text-espresso">{skill.name}</span>
              </div>
              {/* Progress bar */}
              <div className="h-1 bg-espresso/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-espresso rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: i * 0.08 + 0.3, duration: 0.8, ease: 'easeOut' }}
                />
              </div>
              <div className="mt-1 text-right font-mono text-xs text-espresso/30">{skill.level}%</div>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-16 overflow-hidden relative">
          <div className="marquee-wrapper py-4 border-t border-b border-espresso/10">
            <div className="marquee-inner">
              {['Painting', 'Drawing', 'Composition', 'Illustration', 'Photography', 'Color Theory', 'Visual Storytelling', 'Conceptual Art', 'Adobe Illustrator',
                'Painting', 'Drawing', 'Composition', 'Illustration', 'Photography', 'Color Theory', 'Visual Storytelling', 'Conceptual Art', 'Adobe Illustrator',
              ].map((t, i) => (
                <span key={i} className="inline-flex items-center mx-6 font-mono text-xs text-espresso/40 uppercase tracking-widest">
                  <span className="mr-6">{t}</span>
                  <span className="text-espresso/20">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
