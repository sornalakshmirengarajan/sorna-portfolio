import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [follower, setFollower] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  useEffect(() => {
    let raf
    const ease = () => {
      setFollower(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
      raf = requestAnimationFrame(ease)
    }
    raf = requestAnimationFrame(ease)
    return () => cancelAnimationFrame(raf)
  }, [pos])

  return (
    <>
      <div
        className="cursor"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${clicking ? 0.6 : 1})`,
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: follower.x,
          top: follower.y,
          transform: `translate(-50%, -50%) scale(${clicking ? 1.5 : 1})`,
        }}
      />
    </>
  )
}
