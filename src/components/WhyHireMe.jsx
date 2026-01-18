export default function WhyHireMe() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl font-semibold text-white">
            Why <span className="text-cyan-400">Hire Me</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            What makes me a strong candidate as a fresher frontend developer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Clean Code",
              desc: "I focus on readable, structured, and maintainable code rather than quick hacks.",
            },
            {
              title: "UI + Logic Balance",
              desc: "I understand both user experience and frontend logic, not just design.",
            },
            {
              title: "Production Mindset",
              desc: "Even as a fresher, I build projects with real-world usage and scalability in mind.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden
                         rounded-2xl border border-slate-800
                         bg-slate-900/40 backdrop-blur-xl
                         p-8 transition-all duration-500
                         hover:-translate-y-2 hover:border-cyan-400/60"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br
                              from-cyan-500/10 to-blue-500/10
                              opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4
                               transition group-hover:text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
