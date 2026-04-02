"use client";
import { useState, useRef, type FormEvent } from "react";
import { Phone, MapPin, Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(708) 490 9665",
    href: "tel:+17084909665",
  },
  {
    icon: Mail,
    label: "Email",
    value: "premierdeckandporch@gmail.com",
    href: "mailto:premierdeckandporch@gmail.com",
  },
  {
    icon: MapPin,
    label: "Area",
    value: "Serving the Northwest Suburbs of Chicago and surrounding areas",
    href: null,
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      service: data.get("service") as string,
      message: data.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("sent");
      formRef.current?.reset();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: info */}
        <div>
          <span className="text-brand-brown-light font-semibold uppercase tracking-widest text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
            Contact Us
          </h2>
          <p className="text-slate-400 mt-5 text-lg leading-relaxed">
            Fill out the form and one of our decking specialists will reach out
            within one business day — no pressure, no obligation.
          </p>

          <div className="mt-10 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-brown/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-brown-light" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white font-semibold hover:text-brand-brown-light transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white font-semibold">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <h3 className="text-2xl font-extrabold text-slate-900">
                Message Sent!
              </h3>
              <p className="text-slate-500">
                Thank you! We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Full Name <span className="text-brand-brown">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-brown transition"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Phone Number <span className="text-brand-brown">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(708) 490-9665"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-brown transition"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-brown transition bg-white"
                >
                  <option value="">Select a service&hellip;</option>
                  <option value="custom-deck">Custom Deck Construction</option>
                  <option value="porch">Porch Design &amp; Build</option>
                  <option value="replacement">Deck Replacement &amp; Rebuild</option>
                  <option value="repair">Deck Repair &amp; Restoration</option>
                  <option value="composite">Composite &amp; Wood Deck Installation</option>
                  <option value="maintenance">Deck Maintenance &amp; Protection</option>
                  <option value="stairs">Stairs &amp; Multi-Level Decks</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a little about your project&hellip;"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-brown transition resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-brown hover:bg-brand-brown-dark disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Sending&hellip;</>
                ) : (
                  "Get a Free Quote →"
                )}
              </button>

              <p className="text-center text-slate-400 text-xs">
                No spam. We&apos;ll only contact you about your project.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
