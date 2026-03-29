export default function Footer() {
  return (
    <footer className="bg-espresso py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-peach text-lg">
          Sorna<span className="font-light italic"> Lakshmi</span>
        </div>
        <p className="font-mono text-xs text-peach/30 tracking-widest text-center">
          © 2025 Sorna Lakshmi · Visual Arts Portfolio
        </p>
        <a
          href="https://www.instagram.com/swan.offsets_/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-peach/40 hover:text-peach transition-colors tracking-widest"
          style={{ cursor: 'auto' }}
        >
          @swan.offsets_ ↗
        </a>
      </div>
    </footer>
  )
}
