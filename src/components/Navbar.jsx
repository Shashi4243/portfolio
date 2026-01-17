export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="text-white font-semibold">
          SHASHI GUPTA<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-slate-300 hover:text-cyan-400">About</a>
          <a href="#skills" className="text-slate-300 hover:text-cyan-400">Skills</a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400">Contact</a>
          <a
            href="/Shashi-Gupta-Resume.pdf"
            className="px-4 py-2 border border-slate-700 rounded-md
                       hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Resume
          </a>
          <a href="#query" className="text-slate-300 hover:text-cyan-400 transition">
  Query
</a>
        </div>
      </nav>
    </header>
  );
}
