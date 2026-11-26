"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 text-lg font-bold tracking-tight text-white transition-colors"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {PROFILE.brandLogo}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-cyan-500/20 transition-all hover:brightness-110"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300 transition-colors hover:border-slate-700 hover:text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 px-4 pb-5 pt-3 backdrop-blur-md md:hidden">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
