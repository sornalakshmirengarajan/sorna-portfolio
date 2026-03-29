import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-espresso flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      {/* Animated monogram */}
      <motion.div
        className="loader-logo mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#ffe2b5" strokeWidth="1" strokeDasharray="240" strokeDashoffset="240">
            <animate attributeName="strokeDashoffset" from="240" to="0" dur="2s" fill="freeze" />
          </circle>
          <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle"
            fontFamily="Playfair Display, serif" fontSize="32" fontWeight="600" fill="#ffe2b5">
            S
          </text>
        </svg>
      </motion.div>

      <motion.p
        className="font-mono text-peach/60 text-xs tracking-[0.4em] uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Loading Portfolio
      </motion.p>

      {/* Progress bar */}
      <div className="mt-8 w-40 h-px bg-peach/10 overflow-hidden rounded">
        <motion.div
          className="h-full bg-peach/50"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
