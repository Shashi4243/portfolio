export default function About() {
  return (
    <section id="about" className="bg-slate-950 pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-semibold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mt-6 text-slate-400">
            I am an MCA student and frontend developer fresher who enjoys
            building clean, scalable and user-focused web applications.
          </p>

          <p className="mt-4 text-slate-400">
            My focus is on React, JavaScript and modern UI systems with
            maintainable code structure.
          </p>
        </div>

        <div className="border border-slate-800 rounded-2xl p-8 bg-slate-900/40">
          <ul className="space-y-4 text-slate-300">
            <li className="flex justify-between"><span>Degree</span><span>MCA (Pursuing)</span></li>
            <li className="flex justify-between"><span>Role</span><span>Frontend Developer</span></li>
            <li className="flex justify-between"><span>Experience</span><span>Fresher</span></li>
            <li className="flex justify-between"><span>Focus</span><span>React & UI</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
