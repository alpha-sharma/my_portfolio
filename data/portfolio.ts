export type ProjectCategory = "Mobile" | "Web";

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: "smartphone" | "globe" | "layers";
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  badge: "Production App" | "Production Web" | "Internal Portal" | "EdTech Suite";
  description: string;
  tech: string[];
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  type: "Degree" | "Certification";
}

export const PROFILE = {
  name: "Sharma A",
  brandLogo: "Sharma A",
  role: "React Native & Next.js Developer",
  roleSubtitle: "Mobile & Web",
  experienceYears: "3.5 Years",
  statusBadge: "Open to Opportunities • 3.5 Years Experience",
  headline: "Hi, I'm Sharma A. — React Native & Next.js Developer",
  bio: "Experienced in building fast, scalable cross-platform mobile apps (Android & iOS) with React Native and modern web platforms with Next.js & TypeScript. Skilled in shipping production EdTech apps, healthcare/enterprise mobile solutions, CRM dashboards, and complex assessment engines.",
  // Place your PDF at e:\my portfolio\public\Sharma_A_Resume.pdf
  resumeUrl: "/Sharma_A_Resume.pdf",
  contact: {
    email: "mailto:sharma969361@gmail.com",
    emailDisplay: "sharma969361@gmail.com",
    // TODO: Update with your real GitHub URL
    github: "https://github.com/your-github-username",
    linkedin: "https://www.linkedin.com/in/sharma-a-1326a92a2/",
  },
} as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "mobile",
    title: "Mobile",
    subtitle: "Cross-platform Android & iOS apps",
    icon: "smartphone",
    skills: [
      "React Native CLI",
      "Expo CLI",
      "Custom Java Native Modules",
      "Android Native Bridging",
      "Android Studio",
      "Xcode",
      "React Navigation",
      "RNFS (Offline Storage)",
      "Firebase Push Notifications",
      "Release APK Builds",
    ],
  },
  {
    id: "web",
    title: "Web",
    subtitle: "Modern, fast & responsive interfaces",
    icon: "globe",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Responsive Design",
    ],
  },
  {
    id: "state-tools",
    title: "State & Tools",
    subtitle: "Architecture, APIs & delivery",
    icon: "layers",
    skills: [
      "Redux Toolkit",
      "Recoil",
      "REST APIs",
      "Axios",
      "SignalR",
      "Git & CI/CD",
      "JIRA",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  // --- Current Company Mobile Apps (Satnpaper / Zuperscore) ---
  {
    id: "zuperscore-exam-app",
    title: "Zuperscore – Online Exam Conduct & Management",
    category: "Mobile",
    badge: "Production App",
    description:
      "Cross-platform Android & iOS tablet app for conducting online exams with offline-only exam sessions (RNFS), test result processing, KaTeX math rendering, calculator integration, and real-time monitoring of student internet connectivity, session time, and app state.",
    tech: ["React Native", "TypeScript", "RNFS", "Redux Toolkit", "REST APIs"],
  },
  {
    id: "conduct-book-app",
    title: "Conduct Book – Online Exam Conduct & Management",
    category: "Mobile",
    badge: "Production App",
    description:
      "Cross-platform tablet app for Zuperscore (Android & iOS) featuring push notifications, home & class assignment modules, Recoil + Redux Toolkit state management, and stage-level dashboard optimization for students with booked classes and appointments.",
    tech: ["React Native", "TypeScript", "Recoil", "Redux Toolkit", "Firebase"],
  },

  // --- Previous Company Mobile Apps (Dart Innovations and Technologies) ---
  {
    id: "vetnvet-app",
    title: "VetNvet – Veterinary Practice Management System",
    category: "Mobile",
    badge: "Production App",
    description:
      "Cross-platform Android & iOS app for veterinary clinics to streamline pet management, appointment scheduling, and prescription handling, with multi-clinic REST API sync and QR scanner support for quick record access.",
    tech: ["React Native", "TypeScript", "REST APIs", "QR Scanner"],
  },
  {
    id: "axon-patient-portal",
    title: "Axon Patient Portal – Mobile App for Doctors",
    category: "Mobile",
    badge: "Production App",
    description:
      "Android & iOS portal enabling doctors to access patient scan reports instantly, featuring Firebase push notifications for real-time alerts and Expo local authentication for security compliance.",
    tech: ["React Native", "Expo", "Firebase", "Local Auth"],
  },
  {
    id: "livechat-app",
    title: "LiveChat – Real-time Agent-Client Communication",
    category: "Mobile",
    badge: "Production App",
    description:
      "Real-time mobile chat application built with SignalR for seamless agent-to-client customer interactions, integrated with a .NET REST API backend.",
    tech: ["React Native", "SignalR", "REST APIs", ".NET Backend"],
  },
  {
    id: "employee-portal-app",
    title: "Employee Portal – Role-Based Access & Management",
    category: "Mobile",
    badge: "Production App",
    description:
      "React Native employee management app for handling designations, departments, branches, and employee roles with Redux Toolkit state management, role-based authentication, and dynamic dashboards.",
    tech: ["React Native", "Redux Toolkit", "Role-Based Auth", "REST APIs"],
  },

  // --- Web Apps (awaiting any additional web app updates) ---
  {
    id: "prep-decode",
    title: "Prep Decode — GMAT Prep Platform",
    category: "Web",
    badge: "Production Web",
    description:
      "Interactive GMAT test-preparation web platform with practice modules, timed mock tests, and detailed score breakdowns.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "zupians-crm",
    title: "Zupians CRM",
    category: "Web",
    badge: "Internal Portal",
    description:
      "Full-featured CRM frontend dashboard built for managing leads, student pipelines, follow-ups, and team workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "zuperscore-test-prep-suite",
    title: "Zuperscore Test Prep Suite (AP, ACT, Blue & Purple)",
    category: "Web",
    badge: "EdTech Suite",
    description:
      "Frontend architecture and feature development across multiple standardized test-prep web portals with reusable component libraries.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Axios"],
  },
  {
    id: "xelled-pivector",
    title: "Xelled & Pivector Web Apps",
    category: "Web",
    badge: "Production Web",
    description:
      "Scalable, high-performance web applications developed with modern TypeScript frontend patterns and clean UI/UX.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "satnpaper-zuperscore",
    role: "React Native & Next.js Developer",
    company: "Satnpaper (Zuperscore)",
    period: "June 2025 – Present",
    current: true,
    highlights: [
      "Built the Zuperscore & Conduct Book cross-platform tablet apps (Android & iOS) for online exam conduct, offline exam sessions (RNFS), home/class assignments, push notifications, and real-time student monitoring.",
      "Implemented hybrid state management with Recoil and Redux Toolkit, custom Java Native Modules for Android bridging, stage-level dashboard optimization, and exam integrity tracking (connectivity, session time, and app state).",
      "Architected and delivered frontend features across multiple Next.js web portals including Prep Decode, Zupians CRM, Xelled, Pivector, and the Zuperscore Test Prep Suite.",
    ],
  },
  {
    id: "dart-innovations",
    role: "React Native Developer",
    company: "Dart Innovations and Technologies",
    period: "2023 – 2025",
    current: false,
    highlights: [
      "Shipped 4 production React Native mobile apps across healthcare, veterinary, enterprise HR, and real-time support domains (VetNvet, Axon Patient Portal, LiveChat, and Employee Portal).",
      "Implemented Firebase push notifications, Expo local authentication, SignalR real-time messaging, QR code scanning, and role-based access dashboards.",
      "Optimized state management using Redux Toolkit and integrated REST APIs across multi-clinic and .NET backend systems.",
    ],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "be-cse",
    title: "B.E. Computer Science & Engineering",
    institution: "NPR College of Engineering & Technology",
    period: "2021",
    type: "Degree",
  },
  {
    id: "qspiders-java",
    title: "Java Full Stack Development",
    institution: "QSpiders",
    period: "Sep 2022 – Mar 2023",
    type: "Certification",
  },
];
