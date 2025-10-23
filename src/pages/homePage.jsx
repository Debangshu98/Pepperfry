import React from "react";
// import "../styles/homePage.css";
import { Navbar } from "../components/navBar.jsx";

export const HomePage = () => {
  const imageBasePath = process.env.PUBLIC_URL ?? "";

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.3),_transparent_65%)]" />
      <div className="absolute top-20 right-[-6rem] h-72 w-72 rounded-full bg-indigo-500/40 blur-3xl md:h-96 md:w-96" />
      <div className="absolute bottom-[-4rem] left-[-6rem] h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl md:h-96 md:w-96" />

      <Navbar />

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-200/80">Pepperfry Studio</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Curate soulful interiors shaped for modern living
              </h1>
              <p className="mt-6 text-lg text-indigo-100/80 md:max-w-lg">
                Discover an evolving library of statement pieces, sustainably sourced materials, and bespoke styling guidance crafted by our interior design collective.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg transition hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-200/60"
                >
                  Explore collections
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Book consultation
                </button>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
                  <span className="text-3xl font-semibold text-white">2k+</span>
                  <p className="mt-2 text-sm text-indigo-100/80">Curated furniture and decor pieces</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
                  <span className="text-3xl font-semibold text-white">180</span>
                  <p className="mt-2 text-sm text-indigo-100/80">Designers collaborating worldwide</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
                  <span className="text-3xl font-semibold text-white">98%</span>
                  <p className="mt-2 text-sm text-indigo-100/80">Client satisfaction across projects</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <img
                  src={`${imageBasePath}/images/room-1336497_1280.jpg`}
                  alt="Curated living room"
                  className="h-72 w-full rounded-2xl object-cover"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-white">Nordic Retreat Suite</p>
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">New drop</span>
                  </div>
                  <p className="text-sm text-indigo-100/80">
                    Soft neutral palettes, tactile fabrics, and sculptural lighting layered to perfection by our lead stylists.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-indigo-100/70">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Sustainable
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      Climate adaptive
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-pink-400" />
                      Bespoke fabrics
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 right-6 w-64 rounded-2xl border border-indigo-400/30 bg-indigo-500/20 px-6 py-5 text-sm text-indigo-100 shadow-xl backdrop-blur">
                <p className="font-semibold text-white">Book a virtual styling session</p>
                <p className="mt-1 text-xs text-indigo-100/80">
                  Connect live with our design team and receive a personalised concept board in 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="bg-white/5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200/80">Design services</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">A boutique experience from concept to installation</h2>
              </div>
              <p className="max-w-md text-sm text-indigo-100/80">
                Every project begins with a tailored discovery session so we can translate your story into immersive spatial experiences.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-lg font-semibold">
                  01
                </div>
                <h3 className="text-xl font-semibold text-white">Spatial strategy</h3>
                <p className="mt-3 text-sm text-indigo-100/80">
                  Comprehensive mood mapping, zoning plans, and lighting direction for every room in your residence or studio.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-indigo-100/70">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Layout optimisation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Material palette guidance
                  </li>
                </ul>
              </article>
              <article className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-lg font-semibold">
                  02
                </div>
                <h3 className="text-xl font-semibold text-white">Curated sourcing</h3>
                <p className="mt-3 text-sm text-indigo-100/80">
                  Access exclusive furniture partners, artisan collaborations, and bespoke finishes delivered with impeccable craftsmanship.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-indigo-100/70">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Bespoke cabinetry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Ethical supply chain
                  </li>
                </ul>
              </article>
              <article className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-lg font-semibold">
                  03
                </div>
                <h3 className="text-xl font-semibold text-white">Styling & staging</h3>
                <p className="mt-3 text-sm text-indigo-100/80">
                  Final-layer styling, art curation, and sensory detailing that breathe personality into your finished space.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-indigo-100/70">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    On-site installation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Seasonal refresh programs
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              <img
                src={`${imageBasePath}/images/room.jpg`}
                alt="Living room inspiration"
                className="h-64 w-full rounded-3xl border border-white/10 object-cover shadow-xl sm:h-full"
              />
              <div className="grid gap-6">
                <img
                  src={`${imageBasePath}/images/dummy-6152641_1280.jpg`}
                  alt="Workspace inspiration"
                  className="h-48 w-full rounded-3xl border border-white/10 object-cover shadow-xl"
                />
                <img
                  src={`${imageBasePath}/images/room-1336497_1280.jpg`}
                  alt="Bedroom inspiration"
                  className="h-48 w-full rounded-3xl border border-white/10 object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200/80">Lookbook preview</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">Spaces that tell your story</h3>
                <p className="mt-4 text-sm text-indigo-100/80">
                  From sculptural lounges to calming studios, explore immersive environments curated by our creative directors. Every composition is designed to balance functionality with emotional resonance.
                </p>
              </div>
              <button
                type="button"
                className="mt-10 self-start rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-white/10"
              >
                View full lookbook
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white/5 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200/80">Client stories</p>
            <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-white md:text-3xl">
              “Pepperfry translated our abstract brief into a home that feels intentional at every turn. The team balanced practicality with artful detailing, making the design process a delight.”
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-4 text-indigo-100/80">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-lg font-semibold">LT</span>
              <div className="text-left">
                <p className="text-base font-semibold text-white">Leena Thakur</p>
                <p className="text-sm text-indigo-100/70">Founder, Lumen Atelier</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/15 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 text-center shadow-2xl md:p-16">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to shape your next interior narrative?</h2>
            <p className="mt-4 text-base text-indigo-50/90 md:text-lg">
              Share your vision with our stylists and receive a bespoke proposal curated around your lifestyle, timeline, and budget.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                className="rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                Start project brief
              </button>
              <button
                type="button"
                className="rounded-full border border-white/60 px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                Browse lookbook
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
