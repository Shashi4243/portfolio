export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center pt-20 overflow-hidden">

      {/* background gradients */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
                      bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px]
                      bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* badge */}
          <div className="inline-flex items-center gap-3
                          px-4 py-2 rounded-full
                          bg-slate-900/60 backdrop-blur
                          border border-slate-800
                          text-sm text-slate-300 mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            MCA Student · Frontend Developer
          </div>

          {/* main heading */}
          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text
                             bg-gradient-to-r from-cyan-400 to-blue-500">
              Shashi Gupta
            </span>
          </h1>

          {/* sub heading */}
          <p className="mt-8 max-w-xl text-lg text-slate-400 leading-relaxed">
            I build modern, clean, and scalable frontend applications
            with a strong focus on UI quality and maintainable code.
          </p>

          {/* buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2
                         px-7 py-3 rounded-lg
                         bg-cyan-500 text-slate-950 font-medium
                         hover:bg-cyan-400 transition"
            >
              View Projects
              <span className="transition group-hover:translate-x-1">→</span>
            </a>

            <a
              href="/Shashi-Gupta-Resume.pdf"
              download
              className="px-7 py-3 rounded-lg
                         border border-slate-700
                         text-slate-200
                         hover:border-cyan-400 hover:text-cyan-400
                         transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* glow ring */}
          <div className="absolute w-72 h-72 rounded-full
                          bg-gradient-to-tr from-cyan-400 to-blue-500
                          blur-2xl opacity-30" />

          <div className="relative rounded-full p-1
                          bg-gradient-to-tr from-cyan-400 to-blue-500">
            <img
              src="/profile.jpg"
              alt="Shashi Gupta"
              className="w-64 h-64 rounded-full object-cover
                         bg-slate-900"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
