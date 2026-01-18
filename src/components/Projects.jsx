const projects = [
  {
    title: "Student Management System",
    desc: "A scalable web application to manage student records, courses, and academic performance.",
    tech: "React · JavaScript · UI Architecture",
  },
  {
    title: "Mentor–Mentee Platform",
    desc: "A structured system for mentor–mentee assignment, communication, and tracking.",
    tech: "React · JavaScript · Component Design",
  },
  {
    title: "Personal Portfolio",
    desc: "Modern portfolio showcasing projects, skills, and contact workflow.",
    tech: "React · Tailwind · UX Design",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 pt-28 pb-32">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-white mb-16">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden
                         rounded-3xl border border-slate-800
                         bg-slate-900/50 backdrop-blur-xl
                         p-10 transition-all duration-500
                         hover:-translate-y-3 hover:border-cyan-400/70"
            >
              {/* Spotlight */}
              <div className="absolute -top-32 -right-32 w-96 h-96
                              bg-cyan-500/20 rounded-full blur-3xl
                              opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-6 text-slate-400 leading-relaxed">
                  {project.desc}
                </p>

                <p className="mt-8 text-sm tracking-wide text-cyan-400">
                  {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
