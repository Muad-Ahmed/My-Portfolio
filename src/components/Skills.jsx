import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Zap,
  CreditCard,
  Bot,
  Layers,
  Palette,
  Database,
  ShieldCheck,
  Repeat,
  CheckCircle,
  Hammer,
} from "lucide-react";

export default function Skills() {
  const skillsData = [
    // ── Tier 1: Full-Stack Core ─────────────────────────────────────────────
    {
      category: "Frontend — React",
      icon: <Monitor size={20} />,
      span: "lg:col-span-5 md:col-span-6 row-span-1",
      highlight: "Interactive UIs & modern React patterns",
      skills: [
        "React",
        "Next.js 15",
        "TypeScript",
        "JavaScript (ES6+)",
      ],
    },
    {
      category: "Backend — Laravel",
      icon: <Server size={20} />,
      span: "lg:col-span-7 md:col-span-6 row-span-1",
      highlight: "Robust backend systems & API development",
      skills: [
        "Laravel 12",
        "PHP",
        "REST APIs",
        "Inertia.js v2",
        "Blade",
      ],
    },

    // ── Tier 2: Infrastructure ──────────────────────────────────────────────
    {
      category: "Databases",
      icon: <Database size={20} />,
      span: "lg:col-span-5 md:col-span-3 row-span-1",
      highlight: "Efficient data modeling & query performance",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Redis",
        "Eloquent ORM",
        "DB Indexing",
        "Query Optimization",
      ],
    },
    {
      category: "Authentication & Security",
      icon: <ShieldCheck size={20} />,
      span: "lg:col-span-3 md:col-span-3 row-span-1",
      highlight: "Secure access control & role management",
      skills: ["Laravel Auth", "Laravel Socialite", "Spatie Permissions", "OAuth 2.0"],
    },

    {
      category: "State Management",
      icon: <Layers size={20} />,
      span: "lg:col-span-2   md:col-span-3 row-span-1",
      highlight: "Predictable state flow",
      skills: ["Redux Toolkit", "Context API"],
    },

    // ── Tier 3: Supporting Stack ────────────────────────────────────────────
    {
      category: "Realtime",
      icon: <Zap size={20} />,
      span: "lg:col-span-2 md:col-span-3",
      highlight: "Event-driven realtime",
      skills: ["WebSockets", "Laravel Reverb"],
    },
    {
      category: "UI & Styling",
      icon: <Palette size={20} />,
      span: "lg:col-span-4 md:col-span-3",
      skills: ["Tailwind CSS", "Material UI", "daisyUI", "Headless UI"],
    },
    {
      category: "Background Jobs",
      icon: <Repeat size={20} />,
      span: "lg:col-span-2 md:col-span-3",
      skills: ["Laravel Jobs", "Laravel Queues"],
    },
    {
      category: "Testing",
      icon: <CheckCircle size={20} />,
      span: "lg:col-span-2 md:col-span-3",
      skills: ["Pest PHP", "Feature Tests", "E2E"],
    },
    {
      category: "AI Integration",
      icon: <Bot size={20} />,
      span: "lg:col-span-2 md:col-span-3",
      skills: ["AI Assistants Integration"],
    },
    {
      category: "Payments",
      icon: <CreditCard size={20} />,
      span: "lg:col-span-2 md:col-span-3",
      skills: ["Stripe"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tech <span className="text-[#6D4AFF]">Stack</span>
          </motion.h2>

          <p className="text-slate-500 max-w-xl mb-6">
            Technologies I use to build scalable, high-performance applications
          </p>

          <div className="h-1.5 w-24 bg-gradient-to-r from-[#6D4AFF] to-[#8B6EFF] rounded-full" />
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          {skillsData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`glass-card p-6 rounded-3xl hover:border-[#6D4AFF]/20 transition-all duration-300 ${section.span}`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 text-[#6D4AFF]">
                <div className="p-2 rounded-xl bg-[#6D4AFF]/10">
                  {section.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {section.category}
                </h3>
              </div>

              {/* Optional Highlight */}
              {section.highlight && (
                <p className="text-xs text-slate-400 mb-4">
                  {section.highlight}
                </p>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {section.skills.slice(0, 6).map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-3 py-1.5 rounded-lg bg-[#6D4AFF] text-white text-xs font-bold shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}

                {/* Overflow Indicator */}
                {section.skills.length > 6 && (
                  <span className="text-xs text-slate-400">
                    +{section.skills.length - 6} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}