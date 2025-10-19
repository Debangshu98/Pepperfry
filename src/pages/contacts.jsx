import React from "react";
import { Navbar } from "../components/navBar.jsx";

export default function Contacts() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.3),_transparent_65%)]" />
      <div className="absolute top-16 right-[-5rem] h-72 w-72 rounded-full bg-indigo-500/40 blur-3xl md:h-96 md:w-96" />
      <div className="absolute bottom-[-4rem] left-[-5rem] h-72 w-72 rounded-full bg-pink-500/30 blur-3xl md:h-96 md:w-96" />

      <Navbar />

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200/80">
                  Let’s collaborate
                </p>
                <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                  We’d love to craft your next interior story
                </h1>
                <p className="text-lg text-indigo-100/80 md:max-w-md">
                  Reach out for tailored furnishing proposals, styling consultations, or to partner with our design collective. Our team will respond within one business day.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v2z" />
                      <path d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" />
                      <path d="M3 6l9 6 9-6" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold text-white">Email</h2>
                  <p className="mt-2 text-sm text-indigo-100/80">hello@pepperfrycollective.com</p>
                  <p className="text-sm text-indigo-100/60">We reply within 24 hours</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2a9 9 0 00-9 9c0 7 9 11 9 11s9-4 9-11a9 9 0 00-9-9z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-semibold text-white">Studio</h2>
                  <p className="mt-2 text-sm text-indigo-100/80">33 Residency Avenue, Bandra West, Mumbai</p>
                  <p className="text-sm text-indigo-100/60">Visit by appointment only</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:col-span-2">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-white">Phone</h2>
                      <p className="mt-2 text-sm text-indigo-100/80">+91 022 7788 9900</p>
                    </div>
                    <div className="space-y-1 text-sm text-indigo-100/70">
                      <p>Mon – Fri: 10:00 – 19:00 IST</p>
                      <p>Sat: 11:00 – 16:00 IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-8 text-center md:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200/80">
                    Send a message
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Tell us about your project
                  </h3>
                  <p className="mt-2 text-sm text-indigo-100/70">
                    Share a few details and our consultants will curate a personalised response.
                  </p>
                </div>
                <form className="space-y-5">
                  <div>
                    <label
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80"
                      htmlFor="contact-name"
                    >
                      Full name
                    </label>
                    <input
                      className="w-full rounded-2xl border border-white/30 bg-white/90 py-3 px-4 text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-200/60"
                      id="contact-name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80"
                        htmlFor="contact-email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full rounded-2xl border border-white/30 bg-white/90 py-3 px-4 text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-200/60"
                        id="contact-email"
                        type="email"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80"
                        htmlFor="contact-phone"
                      >
                        Phone
                      </label>
                      <input
                        className="w-full rounded-2xl border border-white/30 bg-white/90 py-3 px-4 text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-200/60"
                        id="contact-phone"
                        type="tel"
                        placeholder="(+91) 98765 43210"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80"
                      htmlFor="contact-service"
                    >
                      Service interest
                    </label>
                    <select
                      id="contact-service"
                      className="w-full rounded-2xl border border-white/30 bg-white/90 py-3 px-4 text-slate-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-200/60"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose an option
                      </option>
                      <option>Residential makeover</option>
                      <option>Commercial styling</option>
                      <option>Custom furniture & sourcing</option>
                      <option>Consultation only</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80"
                      htmlFor="contact-message"
                    >
                      Project details
                    </label>
                    <textarea
                      className="h-32 w-full resize-none rounded-2xl border border-white/30 bg-white/90 py-3 px-4 text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-200/60"
                      id="contact-message"
                      placeholder="Share your timeline, style preferences, and any references."
                    ></textarea>
                  </div>
                  <button
                    className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-200/60"
                    type="submit"
                  >
                    Submit enquiry
                  </button>
                  <p className="text-center text-xs text-indigo-100/60">
                    By submitting, you consent to being contacted by our design consultants.
                  </p>
                </form>
              </div>
              <div className="absolute -bottom-10 left-1/2 w-72 -translate-x-1/2 rounded-3xl border border-white/10 bg-white/10 px-6 py-5 text-sm text-indigo-100/80 shadow-xl backdrop-blur">
                <p className="text-white">Prefer a quick call?</p>
                <p className="text-xs text-indigo-100/70">
                  Schedule a 15-minute discovery session and receive a curated style board within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/5 py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6 text-center md:text-left">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200/80">
                  Visit our experience lounges
                </p>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Explore curated vignettes across our flagship studios
                </h2>
                <p className="text-sm text-indigo-100/80">
                  Immerse yourself in tactile material palettes, bespoke furniture pieces, and lighting compositions designed by our creative directors.
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm text-indigo-100/80">
                    <p className="text-base font-semibold text-white">Mumbai</p>
                    <p>Bandra West · By appointment</p>
                    <p className="mt-1 text-xs text-indigo-100/60">Private consultations, bespoke sourcing</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm text-indigo-100/80">
                    <p className="text-base font-semibold text-white">Bengaluru</p>
                    <p>Indiranagar · Walk-ins welcome</p>
                    <p className="mt-1 text-xs text-indigo-100/60">Interactive styling pods, material library</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200/80">
                  Concierge support
                </p>
                <p className="mt-3 text-lg text-white">
                  Need immediate assistance? Chat live with a stylist between 10:00 and 19:00 IST or drop us a note anytime.
                </p>
                <button
                  type="button"
                  className="mt-6 rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Start live chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
