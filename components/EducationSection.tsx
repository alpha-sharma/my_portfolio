import { Award, GraduationCap } from "lucide-react";
import { EDUCATION_ITEMS } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Background
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Education &amp; Certification
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {EDUCATION_ITEMS.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 90}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-cyan-500/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-cyan-400">
                  {item.type === "Degree" ? (
                    <GraduationCap className="h-5 w-5" />
                  ) : (
                    <Award className="h-5 w-5" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-400">{item.period}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-cyan-400">
                    {item.institution}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
