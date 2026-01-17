export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-white mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["Frontend", "HTML, CSS, JavaScript, React"],
            ["Programming", "C, C++, Python"],
            ["Tools", "Git, GitHub, VS Code"],
            ["Core", "DSA, Debugging, Problem Solving"],
          ].map(([title, desc]) => (
            <div key={title} className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-white font-medium mb-2">{title}</h3>
              <p className="text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
