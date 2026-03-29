import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // mailto fallback (no backend needed for Vercel)
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sornalakshmirengarajan@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-cream" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Let's <span className="italic font-light">Connect</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="font-body text-sm text-espresso/70 leading-relaxed">
              Available for internships, freelance commissions, and creative collaborations.
              Reach out — I'd love to talk about your project.
            </p>

            {[
              { icon: '📱', label: 'Phone', val: '+91 9150475793', href: 'tel:+919150475793' },
              { icon: '✉️', label: 'Email', val: 'sornalakshmirengarajan@gmail.com', href: 'mailto:sornalakshmirengarajan@gmail.com' },
              { icon: '📸', label: 'Instagram', val: '@swan.offsets_', href: 'https://www.instagram.com/swan.offsets_/' },
            ].map(({ icon, label, val, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ cursor: 'auto' }}
              >
                <div className="w-10 h-10 rounded-full bg-espresso/5 group-hover:bg-espresso group-hover:text-peach flex items-center justify-center text-base transition-all duration-300">
                  {icon}
                </div>
                <div>
                  <div className="font-mono text-xs text-espresso/40 uppercase tracking-widest">{label}</div>
                  <div className="font-body text-sm text-espresso group-hover:translate-x-1 transition-transform duration-200">{val}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-display text-xl text-espresso mb-2">Message Sent!</h3>
                <p className="font-body text-sm text-espresso/60">Your email client will open. Thank you for reaching out!</p>
              </div>
            ) : (
              <>
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'e.g. Priya Sharma' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="font-mono text-xs text-espresso/50 uppercase tracking-widest block mb-1.5" htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[id]}
                      onChange={e => setForm(p => ({ ...p, [id]: e.target.value }))}
                      className="w-full bg-peach border border-espresso/15 rounded-xl px-4 py-3 font-body text-sm text-espresso placeholder-espresso/30 focus:outline-none focus:border-espresso/50 transition-colors"
                      style={{ cursor: 'auto' }}
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-xs text-espresso/50 uppercase tracking-widest block mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-peach border border-espresso/15 rounded-xl px-4 py-3 font-body text-sm text-espresso placeholder-espresso/30 focus:outline-none focus:border-espresso/50 transition-colors resize-none"
                    style={{ cursor: 'auto' }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  style={{ cursor: 'auto' }}
                >
                  Send Message ↗
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
