export default function Query() {
  return (
    <section id="query" className="bg-slate-950 py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Have a <span className="text-cyan-400">Query?</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Feel free to reach out for internships, projects, or any questions.
          </p>
        </div>

        {/* NETLIFY FORM */}
        <form
          name="query"
          method="POST"
          data-netlify="true"
          className="grid gap-6 bg-slate-900/40 border border-slate-800 rounded-2xl p-8"
        >
          {/* REQUIRED hidden input */}
          <input type="hidden" name="form-name" value="query" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700
                           text-slate-200 placeholder-slate-500
                           focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700
                           text-slate-200 placeholder-slate-500
                           focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Your Query
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700
                         text-slate-200 placeholder-slate-500
                         focus:outline-none focus:border-cyan-400 resize-none"
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-cyan-500 text-slate-950 font-medium
                         hover:bg-cyan-400 transition"
            >
              Send Query
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
