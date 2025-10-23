import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";

export const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [animatePanels, setAnimatePanels] = useState(false);
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("isLoggedIn") === "true" && navigate("/home");
    const timer = setTimeout(() => setAnimatePanels(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const onLoginClick = () => {
    setError("");
    if (handleLogin(username, password)) {
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.4),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.35),_transparent_65%)]" />
      <div
        className={`w-full max-w-5xl transition-transform duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              animatePanels ? "translate-x-0" : "-translate-x-8"
        }`}
      >
        <div className="grid md:grid-cols-[1.1fr_1fr] overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-2xl">
          <div
            className={`hidden md:flex flex-col justify-between bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 text-white transition-transform duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              animatePanels ? "translate-x-0" : "-translate-x-8"
            }`}
          >
            <div
              className={`transition-opacity duration-700 ease-out ${
                animatePanels ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70">Welcome back</p>
              <h2 className="text-4xl font-semibold leading-tight">Elevate your interior inspirations</h2>
              <p className="mt-6 text-base text-white/80">
                Sign in to manage curated collections, track moodboards, and deliver bespoke aesthetics for every client.
              </p>
            </div>
            <div
              className={`flex items-center gap-3 text-white/80 transition-opacity duration-700 ease-out ${
                animatePanels ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg font-semibold">PF</span>
              <div>
                <p className="font-semibold text-white">Pepperfry Collective</p>
                <p className="text-sm text-white/70">Designing beautiful experiences since 2014</p>
              </div>
            </div>
          </div>
          <div
            className={`bg-white/85 p-8 sm:p-10 transition-transform duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              animatePanels ? "translate-x-0" : "-translate-x-8"
            }`}
          >
            <div
              className={`mb-8 text-center md:text-left transition-opacity duration-600 ease-in-out ${
                animatePanels ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-semibold text-slate-900">Log in</h3>
              <p className="mt-2 text-sm text-slate-600">
                Enter your credentials to continue crafting unforgettable spaces.
              </p>
            </div>
            <div
              className={`space-y-6 transition-opacity duration-600 ease-in-out ${
                animatePanels ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <label htmlFor="username" className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Username
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a4 4 0 110 8 4 4 0 010-8z" />
                      <path d="M3 16a7 7 0 0114 0v1H3v-1z" />
                    </svg>
                  </span>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 py-3 pl-12 pr-4 text-slate-900 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Password
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 8a5 5 0 1110 0v2h1a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h1V8zm2 0v2h6V8a3 3 0 00-6 0z" />
                    </svg>
                  </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 py-3 pl-12 pr-12 text-slate-900 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-4 flex items-center text-slate-400 transition hover:text-indigo-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.875 12.742l2.448 2.448a1 1 0 01-1.414 1.414l-2.507-2.507a6.534 6.534 0 01-2.402.903l-.241.025A7 7 0 013 10a6.977 6.977 0 012.385-3.663L3.3 4.25A1 1 0 114.714 2.836l12.45 12.45a1 1 0 11-1.414 1.414l-1.875-1.875z" />
                        <path d="M8.182 7.049A1.99 1.99 0 008 8a2 2 0 102 2 1.99 1.99 0 00-.951-.182l-1-1z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 4c3.636 0 6.845 2.313 8 5.5C16.845 12.687 13.636 15 10 15s-6.845-2.313-8-5.5C3.155 6.313 6.364 4 10 4zm0 7a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {error && (
                <p
                  className={`rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition-all duration-500 ease-out ${
                    animatePanels ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
                  }`}
                >
                  {error}
                </p>
              )}
              <button
                onClick={onLoginClick}
                className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                Login
              </button>
              <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-600 md:flex-row">
                <span>Need an account?</span>
                <button
                  onClick={() => navigate("/signup")}
                  className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
