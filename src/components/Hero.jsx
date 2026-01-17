export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 pt-16 pb-24">

      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <div className="mb-6 flex items-center gap-3 text-xs tracking-widest text-cyan-400 uppercase">
            <span className="w-10 h-px bg-cyan-400/60" />
            MCA Student · Frontend Developer
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            Shashi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Gupta
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-400">
            MCA fresher with a strong focus on frontend engineering and
            modern UI development using React and JavaScript.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-cyan-500 text-slate-950 rounded-lg font-medium hover:bg-cyan-400 transition"
            >
              View Projects
            </a>
            <a
  href="/Shashi-Gupta-Resume.pdf"
  download
  className="px-7 py-3 border border-slate-600 rounded-lg
             text-slate-200 font-medium
             hover:border-cyan-400 hover:text-cyan-400
             transition"
>
  Download Resume
</a>

          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-xl opacity-30" />
          <img
            src="/profile.jpg"
            alt="Shashi Gupta"
            className="relative w-64 h-64 rounded-full object-cover border-4 border-slate-800"
          />
        </div>
      </div>
    </section>
  );
}
