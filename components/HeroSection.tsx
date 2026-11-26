import { ArrowRight, Download, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="animate-fade-up max-w-3xl">
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span>{PROFILE.statusBadge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.15]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {PROFILE.name}.
            </span>{" "}
            — {PROFILE.role}
          </h1>

          {/* Bio */}
          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            {PROFILE.bio}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-300"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>

            {/* TODO: Place your PDF in /public/Sharma_A_Resume.pdf and set resumeUrl to "/Sharma_A_Resume.pdf" in data/portfolio.ts */}
            <a
              href={PROFILE.resumeUrl}
              download="Sharma_A_Resume.pdf"
              title="Download Resume"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:border-slate-700 hover:text-white"
            >
              <Download className="h-4 w-4 text-cyan-400" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
