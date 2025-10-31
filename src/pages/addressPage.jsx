import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Address = () => {
  const emptyForm = useMemo(
    () => ({
      fullName: "",
      phoneNumber: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      landmark: "",
      addressType: "Home",
    }),
    []
  );

  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: "del-9472",
      fullName: "Samaira Kapoor",
      phoneNumber: "+91 98765 44103",
      addressLine1: "1203 Aurum Residency",
      addressLine2: "Sector 59, Golf Course Extension",
      city: "Gurugram",
      state: "Haryana",
      postalCode: "122102",
      landmark: "Opp. Prive Market",
      addressType: "Home",
    },
    {
      id: "del-5128",
      fullName: "Raghav Balan",
      phoneNumber: "+91 99303 78119",
      addressLine1: "Villa 14, Solstice Row",
      addressLine2: "Anjuna Mapusa Road",
      city: "Goa",
      state: "Goa",
      postalCode: "403509",
      landmark: "Near Olive Grove",
      addressType: "Studio",
    },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.addressLine1 || !formData.city || !formData.state || !formData.postalCode) {
      setStatus("Please complete the highlighted fields.");
      return;
    }

    const payload = {
      ...formData,
      id: `del-${Math.floor(1000 + Math.random() * 9000)}`,
    };

    setSavedAddresses((previous) => [payload, ...previous]);
    setStatus("Address saved for deliveries.");
    setFormData(emptyForm);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.3),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.25),_transparent_65%)]" />
      <div className="absolute top-16 right-[-6rem] h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl md:h-96 md:w-96" />
      <div className="absolute bottom-[-4rem] left-[-6rem] h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl md:h-96 md:w-96" />

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
        <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200/80">Pepperfry Delivery</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Manage delivery addresses</h1>
            <p className="max-w-2xl text-sm text-indigo-100/80">
              Populate your delivery profile with detailed contact and location information. Address previews update live while you type,
              making it simple to double-check every detail before saving.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white/10"
          >
            Return Home
          </Link>
        </header>

        {status && (
          <div className="mt-10 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
            {status}
          </div>
        )}

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
                Full name
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
                Phone number
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
              Email (optional)
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
              />
            </label>

            <div className="grid gap-4">
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
                Address line 1
                <input
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  placeholder="Flat, house no., building"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
                Address line 2
                <input
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  placeholder="Area, street, sector"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
                City
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter the city"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
                State
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter the state"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
                  required
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
                Postal code
                <input
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter the pincode"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
                  required
                />
              </label>
              {/* <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
                Landmark (optional)
                <input
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Any Landmark"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/50 focus:border-white/40 focus:outline-none"
                />
              </label> */}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Home", value: "Home" },
                { label: "Office", value: "Office" },
                { label: "Studio", value: "Studio" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer flex-col gap-2 rounded-2xl border px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.35em] transition ${
                    formData.addressType === option.value ? "border-white bg-white/20 text-white" : "border-white/10 bg-white/5 text-indigo-200/80 hover:border-white/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="addressType"
                    value={option.value}
                    checked={formData.addressType === option.value}
                    onChange={handleChange}
                    className="hidden"
                  />
                  {option.label}
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-lg transition hover:shadow-xl"
            >
              Save address
            </button>
          </form>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200/80">Live preview</p>
              <div className="mt-6 space-y-2 text-sm text-indigo-100/80">
                <p className="text-lg font-semibold text-white">{formData.fullName || "Recipient name"}</p>
                <p>{formData.phoneNumber || "+91 —"}</p>
                <p>
                  {[formData.addressLine1, formData.addressLine2, formData.city, formData.state, formData.postalCode]
                    .filter(Boolean)
                    .join(", ") || "Delivery address will appear here"}
                </p>
                {formData.landmark && <p>Near {formData.landmark}</p>}
                <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
                  {formData.addressType}
                </span>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200/80">Saved deliveries</p>
              <div className="space-y-4">
                {savedAddresses.map((entry) => (
                  <article key={entry.id} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-indigo-100/80">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-semibold text-white">{entry.fullName}</span>
                      <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">{entry.addressType}</span>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-indigo-200/70">{entry.phoneNumber}</p>
                    <p className="mt-3">
                      {[entry.addressLine1, entry.addressLine2, entry.city, entry.state, entry.postalCode].filter(Boolean).join(", ")}
                    </p>
                    {entry.landmark && <p className="mt-2 text-indigo-100/60">Landmark: {entry.landmark}</p>}
                    <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-indigo-200/50">Ref. {entry.id}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Address;
