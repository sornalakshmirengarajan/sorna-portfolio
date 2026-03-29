import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ArtGallery from './components/ArtGallery'
import DigitalWorks from './components/DigitalWorks'
import Photography from './components/Photography'
import Process from './components/Process'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SoundToggle from './components/SoundToggle'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [soundOn, setSoundOn] = useState(false)
  const clickSoundRef = useRef(null)
  const hoverSoundRef = useRef(null)

  useEffect(() => {
    // Preload done after 2.8s
    const t = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // Easter egg: Konami code
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let idx = 0
    const handler = (e) => {
      if (e.key === sequence[idx]) {
        idx++
        if (idx === sequence.length) {
          triggerEasterEgg()
          idx = 0
        }
      } else {
        idx = 0
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const triggerEasterEgg = () => {
    const el = document.createElement('div')
    el.style.cssText = `position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(73,31,0,0.97);color:#ffe2b5;font-family:'Playfair Display',serif;font-size:clamp(1.2rem,4vw,3rem);text-align:center;padding:2rem;`
    el.innerHTML = `<div><div style="font-size:4rem;margin-bottom:1rem">🎨</div><div style="font-style:italic;">"Art is not what you see, but what you make others see."</div><div style="margin-top:1rem;font-size:0.8rem;opacity:0.5;font-family:'DM Sans',sans-serif;">— Edgar Degas | You found a secret ✨</div></div>`
    el.onclick = () => document.body.removeChild(el)
    document.body.appendChild(el)
    setTimeout(() => { if (document.body.contains(el)) document.body.removeChild(el) }, 5000)
  }

  const playClick = () => {
    if (!soundOn) return
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.connect(g); g.connect(ctx.destination)
    osc.frequency.value = 880
    osc.type = 'sine'
    g.gain.setValueAtTime(0.08, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)
    osc.start(); osc.stop(ctx.currentTime + 0.15)
  }

  useEffect(() => {
    if (!soundOn) return
    const handler = () => playClick()
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [soundOn])

  return (
    <div className="grain min-h-screen bg-peach">
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* <Cursor /> */}
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <ArtGallery />
            <DigitalWorks />
            <Photography />
            <Process />
            <Education />
            <Contact />
          </main>
          <Footer />
          <SoundToggle soundOn={soundOn} setSoundOn={setSoundOn} />
        </>
      )}
    </div>
  )
}
