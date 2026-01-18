export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            A brief overview of who I am and how I approach development.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left Card */}
          <div
            className="group relative overflow-hidden rounded-3xl
                       bg-slate-900/40 backdrop-blur-xl
                       border border-slate-800
                       p-10 transition-all duration-500
                       hover:-translate-y-2 hover:border-cyan-400/60"
          >
            {/* glow */}
            <div className="absolute -top-32 -left-32 w-96 h-96
                            bg-cyan-500/10 rounded-full blur-3xl
                            opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10">
              <h3
                className="text-2xl font-medium text-white mb-6
                           transition group-hover:text-cyan-400"
              >
                My Background
              </h3>

              <p className="text-slate-400 leading-relaxed">
                I am an MCA student and a frontend developer fresher with a
                strong interest in building modern, scalable, and user-focused
                web applications. I enjoy transforming ideas into clean
                interfaces using React and contemporary UI practices.
              </p>

              <p className="mt-5 text-slate-400 leading-relaxed">
                I focus on writing structured code, understanding real-world
                application flow, and continuously improving through
                hands-on projects and learning.
              </p>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="grid gap-6">
            {[
              ["Education", "MCA (Master of Computer Applications)"],
              ["Role", "Frontend Developer (Fresher)"],
              ["Primary Stack", "React · JavaScript · Tailwind"],
              ["Approach", "Clean UI · Maintainable Code"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl
                           bg-slate-900/40 backdrop-blur-xl
                           border border-slate-800
                           p-6 transition-all duration-500
                           hover:-translate-y-1 hover:border-cyan-400/60"
              >
                {/* accent strip */}
                <div className="absolute top-0 left-0 h-full w-1
                                bg-gradient-to-b from-cyan-400 to-blue-500
                                opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    {title}
                  </p>
                  <p
                    className="mt-2 text-white font-medium
                               transition group-hover:text-cyan-400"
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
