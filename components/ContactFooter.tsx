"use client";

import { useState } from "react";
import { Check, Copy, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contact.emailDisplay);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
    PROFILE.contact.emailDisplay
  )}`;

  return (
    <>
      <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 text-center sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              />

              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Get In Touch
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s Connect
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                I&apos;m currently open to new React Native &amp; Next.js opportunities.
                Whether you have a role, project, or just want to say hello, feel free
                to reach out.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>

                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition-all hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-300"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-cyan-300"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">
                        Copied {PROFILE.contact.emailDisplay}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{PROFILE.contact.emailDisplay}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-slate-800/80 py-8">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm text-slate-400">
            © 2026 {PROFILE.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
