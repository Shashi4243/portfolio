const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "C / C++", level: 70 },
  { name: "Python", level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-28">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-white mb-16">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden
                         rounded-2xl border border-slate-800
                         bg-slate-900/40 backdrop-blur-xl
                         p-8 transition-all duration-500
                         hover:-translate-y-2 hover:border-cyan-400/60"
            >
              {/* Accent gradient strip */}
              <div className="absolute top-0 left-0 h-full w-1
                              bg-gradient-to-b from-cyan-400 to-blue-500
                              opacity-0 group-hover:opacity-100 transition" />

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br
                              from-cyan-500/10 to-blue-500/10
                              opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg text-white font-medium">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full
                               bg-gradient-to-r from-cyan-400 to-blue-500
                               transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
