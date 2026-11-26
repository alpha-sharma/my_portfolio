import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharma A | React Native & Next.js Developer (Mobile & Web)",
  description:
    "Portfolio of Sharma A — React Native & Next.js Developer with 3+ years of experience shipping production EdTech mobile apps, CRM dashboards, and scalable TypeScript web platforms.",
  keywords: [
    "Sharma A",
    "Sharma.dev",
    "React Native Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Mobile and Web Developer",
    "EdTech",
  ],
  authors: [{ name: "Sharma A" }],
  openGraph: {
    title: "Sharma A | React Native & Next.js Developer",
    description:
      "3+ years of experience building fast, scalable cross-platform mobile apps with React Native and modern web platforms with Next.js & TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
