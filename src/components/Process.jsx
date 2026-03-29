import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Understand',
    desc: 'I begin by understanding the idea and mood of the artwork — what emotion or concept needs to be communicated.',
    icon: '💭',
  },
  {
    num: '02',
    title: 'Sketch',
    desc: 'Initial sketches help me explore composition and form, working through multiple iterations before committing.',
    icon: '✏️',
  },
  {
    num: '03',
    title: 'Refine',
    desc: 'The final piece is developed by refining details, balance, and color to clearly express the concept.',
    icon: '🎨',
  },
]

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="process" className="py-24 px-6 bg-espresso" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-peach/40 mb-3">My Process</p>
          <h2 className="font-display text-4xl md:text-5xl text-peach font-semibold leading-tight">
            How I <span className="italic font-light">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-peach/10 z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              <div className="relative z-10 bg-peach/5 border border-peach/10 rounded-2xl p-6 hover:bg-peach/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full border border-peach/20 flex items-center justify-center mb-4 text-xl">
                  {step.icon}
                </div>
                <div className="font-mono text-xs text-peach/30 tracking-widest mb-2">Step {step.num}</div>
                <h3 className="font-display text-xl text-peach mb-3">{step.title}</h3>
                <p className="font-body text-sm text-peach/60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          className="text-center mt-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="font-display text-xl italic text-peach/60 leading-relaxed">
            "Art is not what you see, but what you make others see."
          </p>
          <footer className="font-mono text-xs text-peach/30 mt-3 tracking-widest">— Edgar Degas</footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
