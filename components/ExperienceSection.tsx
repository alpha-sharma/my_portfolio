import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Career Journey
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Experience Timeline
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
              3+ years of hands-on experience shipping production mobile and web
              applications.
            </p>
          </div>
        </Reveal>

        <div className="relative space-y-8 border-l border-slate-800 pl-6 sm:pl-8">
          {EXPERIENCES.map((exp, index) => (
            <Reveal key={exp.id} delayMs={index * 100}>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-cyan-500/40">
                {/* Timeline node */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[33px] top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:-left-[41px] ${
                    exp.current
                      ? "border-cyan-400 bg-cyan-500/30 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                      : "border-slate-600 bg-slate-950"
                  }`}
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400">
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.company}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${
                      exp.current
                        ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                        : "border-slate-700 bg-slate-950 text-slate-400"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
