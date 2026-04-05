import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, ShoppingBag, LayoutDashboard, Code2, Rocket, Info } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiNextdotjs
} from "react-icons/si";

const TechIcons = {
  React: <SiReact size={16} className="inline-block mr-1.5 fill-[#61DAFB]" />,
  JS: <SiJavascript size={16} className="inline-block mr-1.5 fill-[#F7DF1E] rounded-sm" />,
  NextJS: <SiNextdotjs size={16} className="inline-block mr-1.5 fill-white bg-black rounded-full p-[1px]" />
};

const frontendProjects = [
  {
    name: "E-commerce Website\nReact JS",
    image: "/react-js.png",
    description: "Modern React-based shopping platform with high-performance UI and secure payments.",
    details: [
      "REST API integration • Stripe payments",
      "Cart (Context API + localStorage)",
      "Responsive UI • swiper.js"
    ],
    github: "https://github.com/Muad-Ahmed/ecommerce-react-js",
    live: "https://ecommerce-vanilla-js.vercel.app",
    icon: <ShoppingBag size={20} />,
    techIcon: TechIcons.React
  },
  {
    name: "Admin Dashboard\nReact JS",
    image: "/dashboard.png",
    description: "Enterprise-grade dashboard featuring advanced analytics and data visualization.",
    details: [
      "Data visualization (Nivo) • Advanced tables (MUI Data Grid) • Calendar (FullCalendar)",
      "Routing (React Router) • Form handling (React Hook Form)"
    ],
    github: "https://github.com/Muad-Ahmed/React-Admin-Dashboard",
    live: "https://react-admin-dashboard-1y6c.vercel.app",
    icon: <LayoutDashboard size={20} />,
    techIcon: TechIcons.React
  },
  {
    name: "E-commerce Website\nVanilla JS",
    image: "/vanilla-js.png",
    description: "Fast-loading marketplace built with optimized vanilla JavaScript architecture.",
    details: [
      "Pure JS architecture • Stripe integration",
      "Cart (localStorage) • Responsive design • Swiper.js"
    ],
    github: "https://github.com/Muad-Ahmed/ecommerce-vanilla-js",
    live: "https://ecommerce-vanilla-js.vercel.app",
    icon: <Code2 size={20} />,
    techIcon: TechIcons.JS
  },
  {
    name: "E-commerce Website\nNext JS",
    image: "/next-js.png",
    description: "Next-gen storefront leveraging SSR and modern authentication for a premium experience.",
    details: [
      "TypeScript • SSR • REST API",
      "Authentication (Clerk) • State management (Redux)",
      "Tailwind , Shadcn UI"
    ],
    github: "https://github.com/Muad-Ahmed/ecommerce-next-js",
    live: "https://ecommerce-next-js-inky.vercel.app",
    icon: <Rocket size={20} />,
    techIcon: TechIcons.NextJS
  },
];

export default function ProjectsFrontEnd() {
  return (
    <section id="frontend-projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start mb-16"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D4AFF]/10 border border-[#6D4AFF]/20 text-[#6D4AFF] text-xs font-bold uppercase tracking-widest mb-4">
            <Monitor size={14} />
            Frontend Showcase
          </div>
          <h2 className="text-4xl font-bold">
            Frontend <span className="text-gradient">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 125 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-[#6D4AFF] rounded-full mt-2"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {frontendProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  window.open(project.live, "_blank");
                }
              }}
              className="group relative h-[280px] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl hover:border-[#6D4AFF]/50 transition-all duration-500 lg:cursor-pointer cursor-default"
            >
              {/* Blurred Background Image */}
              <div
                className="absolute  inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/20 backdrop-blur-[0px] group-hover:backdrop-blur-md transition-all duration-500" />
              </div>

              {/* Content Area (Always Visible) */}
              <motion.div
                className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col items-start gap-3 transition-transform duration-500 ease-out group-hover:translate-y-[-125px]"
              >
                <div className="flex items-start gap-3 w-full">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mt-1">
                    {React.cloneElement(project.icon, { size: 18 })}
                  </div>

                  {/* Title (Animate to be next to icon on hover) */}
                  <motion.h3
                    layout
                    className="text-lg font-bold text-white leading-tight opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-pre-line drop-shadow-lg"
                  >
                    {project.name.split('\n')[0]}
                    <div className="flex items-center gap-1 mt-1">
                      <span className="flex items-center drop-shadow-[0_0_8px_rgba(109,74,255,0.4)]">
                        {project.techIcon}
                      </span>
                      <span className="text-gradient text-lg">
                        {project.name.split('\n')[1]}
                      </span>
                    </div>
                  </motion.h3>
                </div>

                {/* Initial Title (Visible when not hovered) */}
                <motion.h3
                  className="text-lg font-bold text-white leading-snug group-hover:opacity-0 transition-opacity duration-300 whitespace-pre-line drop-shadow-xl"
                >
                  {project.name.split('\n')[0]}
                  <div className="flex items-center gap-1 mt-1">
                    <span className="flex items-center drop-shadow-[0_0_10px_rgba(109,74,255,0.4)]">
                      {project.techIcon}
                    </span>
                    <span className="text-[#6D4AFF] text-lg">
                      {project.name.split('\n')[1]}
                    </span>
                  </div>
                </motion.h3>

                {/* Mobile-Only Action Guide (Under Name) */}
                <div className="md:hidden mt-3 flex items-center gap-2 group-hover:opacity-0 transition-all duration-300">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#6D4AFF]/30 backdrop-blur-md border border-[#6D4AFF]/30 text-white font-bold text-[10px] uppercase tracking-wider">
                    Details <Info size={12} className="text-[#6D4AFF]" />
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#6D4AFF]/40 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] uppercase tracking-wider hover:bg-[#6D4AFF]/40 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Info Card (Visible on Hover) */}
              <div className="absolute inset-x-0 bottom-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="p-5 rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
                  <div className="flex flex-col gap-2 mb-4">
                    {project.details.map((detail, dIdx) => {
                      const highlightedDetail = detail.split(/(typescript|ssr|stripe integration|stripe payments)/gi).map((part, i) =>
                        /^(typescript|ssr|stripe integration|stripe payments)$/i.test(part) ? (
                          <span key={i} className="text-[#6D4AFF] font-bold">
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      );
                      return (
                        <p key={dIdx} className="text-[14px] font-medium leading-tight text-slate-600 dark:text-slate-400 border-l-2 border-[#6D4AFF]/30 pl-3">
                          {highlightedDetail}
                        </p>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#6D4AFF] transition-all duration-300"
                        title="Github"
                      >
                        <Github size={19} />
                      </a>
                    </div>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6D4AFF] text-white font-bold text-[11px] uppercase tracking-wider shadow-[0_0_15px_rgba(109,74,255,0.4)] hover:shadow-[0_0_25px_rgba(109,74,255,0.6)] transition-all duration-300"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
