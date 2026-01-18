import emailjs from "emailjs-com";

export default function Query() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nze59kn",
      "template_ysj93zc",
      e.target,
      "UQ0me3FOAkdgLLPJA"
    )
    .then(() => {
      alert("Query sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send query. Try again.");
    });
  };

  return (
    <section id="query" className="bg-slate-950 py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Have a <span className="text-cyan-400">Query?</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Send your query directly to my email.
          </p>
        </div>

        <form
          onSubmit={sendEmail}
          className="grid gap-6 bg-slate-900/40 border border-slate-800 rounded-2xl p-8"
        >
          <input type="text" name="name" placeholder="Your Name" required
            className="px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white" />

          <input type="email" name="email" placeholder="Your Email" required
            className="px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white" />

          <textarea name="message" rows="5" placeholder="Your Message" required
            className="px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white" />

          <button
            type="submit"
            className="bg-cyan-500 text-slate-950 py-3 rounded-lg hover:bg-cyan-400"
          >
            Send Query
          </button>
        </form>
      </div>
    </section>
  );
}
