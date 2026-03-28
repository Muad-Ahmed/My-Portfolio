import { motion } from "framer-motion";
import { Monitor, Server, Cpu, Hammer } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      icon: <Monitor size={20} />,
      skills: ["React", "Tailwind CSS", "Vite", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      icon: <Server size={20} />,
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "GraphQL"],
    },
    {
      category: "DevOps",
      icon: <Cpu size={20} />,
      skills: ["Docker", "Git", "CI/CD", "AWS", "Nginx"],
    },
    {
      category: "Tools & Others",
      icon: <Hammer size={20} />,
      skills: ["Figma", "VS Code", "Postman", "Jest", "ESLint"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-[#6D4AFF]">Proficiency</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#6D4AFF] to-[#8B6EFF] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-[#6D4AFF]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 text-[#6D4AFF]">
                <div className="p-2 rounded-xl bg-[#6D4AFF]/10">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {section.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 text-xs font-semibold hover:bg-[#6D4AFF] hover:text-white hover:border-[#6D4AFF] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}