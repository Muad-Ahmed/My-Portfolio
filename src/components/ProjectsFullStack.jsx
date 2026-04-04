import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, Info } from "lucide-react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const projects = [
  {
    name: "Real-Time Messenger",
    image: "/messenger.png",
    category: "Full-Stack",
    tech: ["Laravel 12", "React", "WebSockets"],
    description: "A high-performance real-time messaging system with private and group chats.",
    githubLink: "https://github.com/Muad-Ahmed/Laravel-React-Real-Time-Messenger-App",
    liveLink: "https://messenger.muad.pro",
    details: {
      title: "Laravel-React Real-Time Messenger App",
      stack: "Laravel 12 | React | WebSockets",
      highlights: [
        { text: "Built a real-time messaging system supporting private and group chats via WebSockets (Laravel Reverb).", type: "message" },
        { text: "Managed media-rich message history (files, images, audio) with infinite scroll and efficient loading.", type: "media" },
        { text: "Designed group management with background jobs for high-volume deletion operations.", type: "users" },
        { text: "Developed role-based user management (admin, blocking, permissions).", type: "shield" },
        { text: "Deployment: VPS + CI/CD", type: "cloud" }
      ]
    }
  },
  {
    name: "Car Marketplace",
    image: "/cars.png",
    category: "Full-Stack",
    tech: ["Laravel", "Blade", "Pest"],
    description: "Full-featured marketplace for buyer/seller workflows with secure authorization.",
    githubLink: "https://github.com/Muad-Ahmed/full-stack-car-selling-project",
    liveLink: "https://cars.muad.pro",
    details: {
      title: "Full-Stack Car Marketplace Application",
      stack: "Laravel | Blade | Pest",
      highlights: [
        { text: "Built a full-featured marketplace for buyer/seller workflows with secure authorization (Gates & Policies).", type: "shopping" },
        { text: "Developed advanced search, filtering, optimized multi-image uploads, and personalized watchlist.", type: "search" },
        { text: "Integrated AI assistant, dashboard for sellers and users, and social login via OAuth (Google, Facebook).", type: "bot" },
        { text: "Ensured reliability through Feature and End-to-End testing using Pest PHP.", type: "check" },
        { text: "Deployment: VPS + CI/CD", type: "cloud" }
      ]
    }
  },
  {
    name: "Feature Voting Platform",
    image: "/vote.png",
    category: "Full-Stack",
    tech: ["Laravel 11", "React", "TypeScript", "Inertia v2"],
    description: "Full-stack voting platform with upvote/downvote mechanics and AI assistant.",
    githubLink: "https://github.com/Muad-Ahmed/feature-voting-platform",
    liveLink: "https://vote.muad.pro",
    details: {
      title: "SSR-Enabled Feature Voting Platform",
      stack: "Laravel 11 | React | TypeScript | Inertia v2",
      highlights: [
        { text: "Built a full-stack voting platform with upvote/downvote mechanics and comments system.", type: "thumb" },
        { text: "Implemented a three-tier role system (Admin, Commenter, User) using Spatie permissions.", type: "lock" },
        { text: "Integrated an AI-powered assistant for interactive support.", type: "bot" },
        { text: "Enabled full SSR for SEO optimization and faster initial rendering.", type: "zap" },
        { text: "Deployment: VPS + CI/CD", type: "cloud" }
      ]
    }
  },
];

export default function ProjectsFullStack() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-3xl text-[#6D4AFF] font-medium tracking-wide uppercase"
          >
            Full Stack <span className="  text-slate-500 dark:text-slate-400  text-base ml-1 italic">Solutions</span>
          </motion.p>
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
              className="glass-card group rounded-3xl overflow-hidden flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(109,74,255,0.15)] transition-all duration-500"
            >
              {/* Image Area */}
              <div className="relative h-[218px] overflow-hidden bg-slate-100 dark:bg-slate-900 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-black/5 dark:bg-transparent" />

                {/* Tech Badges Overlay */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {project.tech.map((t, i) => {
                    const isCarProject = project.name === "Car Marketplace";
                    const isMessengerProject = project.name === "Real-Time Messenger";
                    return (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-white text-[11px] font-black uppercase tracking-wider border border-white/20 transition-all duration-300
                           ${isCarProject
                            ? "bg-[#E9580C] md:ml-1.5 shadow-[0_0_15px_rgba(233,88,12,0.4)] [text-shadow:0_0_2px_rgba(255,255,255,0.5)]"
                            : isMessengerProject
                              // ? "bg-[#00b3ffe5] text-white  [text-shadow:0_0_2px_#00B2FF,0_0_2px_#002D40]"
                              ? "bg-[#6D4AFF] md:ml-1.5 shadow-[0_0_15px_rgba(109,74,255,0.4)] [text-shadow:0_0_2px_rgba(255,255,255,0.4)]"
                              : "bg-[#6D4AFF] shadow-[0_0_15px_rgba(109,74,255,0.4)] [text-shadow:0_0_2px_rgba(255,255,255,0.4)]"
                          }`}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <div className="text-base font-bold text-[#6D4AFF] uppercase tracking-widest mb-2">{project.category}</div>
                  {project.name === "Feature Voting Platform" && (
                    <span className="text-[#00B2FF] text-lg font-semibold mb-2 drop-shadow-[0_0_8px_rgba(0,178,255,0.4)] italic">
                      SSR-Enabled
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#6D4AFF] transition-colors">{project.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-2">
                  <button
                    onClick={() => openModal(project)}
                    className="w-full py-3 px-2 rounded-xl border border-[#6D4AFF]/30 backdrop-blur-md bg-[#6D4AFF]/10 hover:bg-[#6D4AFF] text-[#5a38e0] dark:text-[#b19fff] hover:text-white font-black text-sm tracking-wide [text-shadow:_0_1px_0_white/20] transition-all duration-300 flex items-center justify-center gap-2 mb-6"                  >
                    View Details <Info size={16} />
                  </button>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <a href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-[#6D4AFF]"
                      >
                        <Github size={23} />
                      </a>
                    </div>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#6e4affbd] text-white font-medium text-sm shadow-sm hover:brightness-110 transition-all duration-300"
                    >
                      Live Demo <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}
