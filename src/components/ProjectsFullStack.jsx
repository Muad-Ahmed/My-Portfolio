import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    name: "Portfolio Website",
    category: "Frontend",
    tech: ["React", "Tailwind", "Vite"],
    description: "A responsive personal portfolio website showcasing my work.",
    link: "#",
  },
  {
    name: "E-commerce API",
    category: "Backend",
    tech: ["Node.js", "Express", "MongoDB"],
    description: "RESTful API for an online store with authentication and CRUD.",
    link: "#",
  },
  {
    name: "Blog Platform",
    category: "Full-Stack",
    tech: ["React", "Node.js", "PostgreSQL"],
    description: "Full-stack blog platform with user authentication and commenting.",
    link: "#",
  },
];

export default function ProjectsFullStack() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D4AFF]/10 border border-[#6D4AFF]/20 text-[#6D4AFF] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Layers size={14} />
            Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group rounded-3xl overflow-hidden flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                <div className="flex flex-col items-center gap-2 opacity-50">
                  <Layers size={40} />
                  <span className="text-sm font-medium">Project Preview</span>
                </div>
                {/* Tech Badges Overlay */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-[10px] font-bold border border-white/20 dark:border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-bold text-[#6D4AFF] uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#6D4AFF] transition-colors">{project.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <a href="#" className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-[#6D4AFF]">
                      <Github size={20} />
                    </a>
                  </div>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#6D4AFF]"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
