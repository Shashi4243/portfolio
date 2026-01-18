import { useState } from "react";

export default function Query() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const text = `New Portfolio Query:%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

    const phone = "919608662487"; // +91 without +
    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section id="query" className="bg-slate-950 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Have a <span className="text-cyan-400">Query?</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Send your query directly on WhatsApp.
          </p>
        </div>

        <form
          onSubmit={sendWhatsApp}
          className="grid gap-6 bg-slate-900/40 border border-slate-800 rounded-2xl p-8"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 text-slate-950 py-3 rounded-lg hover:bg-cyan-400"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
