"use client";

import { useState } from "react";
import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { PROJECTS, type ProjectCategory } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

type FilterOption = "All" | ProjectCategory;

const FILTER_TABS: FilterOption[] = ["All", "Mobile", "Web"];

const BADGE_STYLES: Record<string, string> = {
  "Production App": "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  "Production Web": "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "Internal Portal": "border-slate-700 bg-slate-800/80 text-slate-300",
  "EdTech Suite": "border-sky-500/30 bg-sky-500/10 text-sky-300",
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Selected Work
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Featured Projects
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
                Production mobile apps, EdTech platforms, and internal web portals built
                with React Native, Next.js, and TypeScript.
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter projects by platform"
              className="inline-flex w-fit rounded-xl border border-slate-800 bg-slate-900 p-1"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(tab)}
                    className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 60}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      {project.category === "Mobile" ? (
                        <Smartphone className="h-3.5 w-3.5 text-cyan-400" />
                      ) : (
                        <Globe className="h-3.5 w-3.5 text-blue-400" />
                      )}
                      {project.category}
                    </span>

                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                        BADGE_STYLES[project.badge] ??
                        "border-slate-700 bg-slate-800 text-slate-300"
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-slate-950 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      Live
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
