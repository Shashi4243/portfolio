export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 pt-24 pb-28">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-white mb-14">
          Selected <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            ["Student Management System", "Manage student records and academic data", "React · JavaScript"],
            ["Mentor–Mentee App", "Mentor–mentee assignment platform", "React · JavaScript"],
            ["Portfolio Website", "Personal portfolio using React & Tailwind", "React · Tailwind"],
            ["Weather App", "Real-time weather using API", "JavaScript · API"],
          ].map(([title, desc, tech]) => (
            <div key={title} className="rounded-2xl border border-slate-800 p-8 bg-slate-900/50">
              <h3 className="text-xl text-white">{title}</h3>
              <p className="mt-4 text-slate-400">{desc}</p>
              <p className="mt-6 text-sm text-slate-300">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
