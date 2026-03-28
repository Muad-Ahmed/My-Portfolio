import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const secondaryProjects = [
  {
    name: "Todo App",
    tech: ["React", "Tailwind", "LocalStorage"],
    link: "#",
  },
  {
    name: "Chat App",
    tech: ["Node.js", "Socket.io", "Express"],
    link: "#",
  },
  {
    name: "Crypto Tracker",
    tech: ["React", "API", "Chart.js"],
    link: "#",
  },
  {
    name: "Portfolio Blog",
    tech: ["Next.js", "Markdown", "Tailwind"],
    link: "#",
  },
];

export default function ProjectsFrontEnd() {
  return (
    <section id="secondary-projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Other <span className="text-slate-500">Experiments</span></h2>
          <div className="h-1 w-20 bg-[#6D4AFF] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card group p-6 rounded-2xl flex flex-col justify-between hover:border-[#6D4AFF]/30 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 mb-6 group-hover:text-[#6D4AFF] group-hover:bg-[#6D4AFF]/10 transition-colors">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                className="flex items-center gap-2 text-sm font-bold text-[#6D4AFF] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Live <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
