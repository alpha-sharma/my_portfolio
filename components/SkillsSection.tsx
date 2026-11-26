import { Globe, Layers, Smartphone } from "lucide-react";
import { SKILL_CATEGORIES, type SkillCategory } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

function CategoryIcon({ icon }: { icon: SkillCategory["icon"] }) {
  const baseClass = "h-5 w-5 text-cyan-400";
  switch (icon) {
    case "smartphone":
      return <Smartphone className={baseClass} />;
    case "globe":
      return <Globe className={baseClass} />;
    case "layers":
      return <Layers className={baseClass} />;
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Tech Stack
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Skills &amp; Technologies
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
              Core tools and frameworks I use to ship reliable mobile applications and
              high-performance web platforms.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delayMs={index * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950">
                    <CategoryIcon icon={category.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">{category.subtitle}</p>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
