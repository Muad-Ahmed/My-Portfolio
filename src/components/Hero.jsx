import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-16 md:pt-20 md:pb-0 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-[#6D4AFF]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-400/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-[104px]  items-center">
        {/* Text Content */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D4AFF]/10 border border-[#6D4AFF]/20 text-[#6D4AFF] text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6D4AFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6D4AFF]"></span>
            </span>
            Available for New Projects
          </motion.div>

          <h1 className="text-4xl md:text-[65px] font-bold leading-[1.1] mb-5">
            Full-Stack Developer <br />
            <span className="text-gradient"> Laravel & React </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm{" "}
            <span className="text-slate-900 dark:text-white font-bold">
              Muad
            </span>
            , a Full-Stack Developer specializing in{" "}
            <span className="text-slate-900 dark:text-white">Laravel</span> &
            <span className="text-slate-900 dark:text-white"> React</span>{" "}
            creating modern web applications with a focus on performance, scalability, and clean design.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-slate-900/10 dark:shadow-none"
            >
              View My Projects
              <ArrowRight size={20} />
            </motion.a>

            <div className="flex items-center gap-2 ml-2">
              {[
                { icon: Github, href: "https://github.com/Muad-Ahmed" },
                { icon: Linkedin, href: "http://www.linkedin.com/in/muad-al-dhubaibi-5507023b6" },
                { icon: Mail, href: "mailto:muad8010@gmail.com" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(109, 74, 255, 0.1)",
                  }}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual Content / Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex lg:col-span-5 justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6D4AFF] to-[#8B6EFF] rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] animate-[blob_7s_infinite_alternate] opacity-20 blur-2xl" />

            {/* Image Container */}
            <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden p-3 group">
              <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium italic">
                  {/* Image Placeholder*/}
                  <img
                    src="/personal.jpg"
                    className="overflow-hidden scale-[1.1] origin-[center_7%]"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#6D4AFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Stats/Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 top-1/4 glass-card px-4 py-3 rounded-2xl shadow-2xl border-white/40 dark:border-slate-700/80"
              >
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">
                  Skills
                </div>
                <div className="text-lg font-bold">Project-Based</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-10 bottom-1/4 glass-card px-4 py-3 rounded-2xl shadow-2xl border-white/40 dark:border-slate-700/80"
              >
                <div className="text-[#6D4AFF] font-bold text-lg italic">
                  Full-Stack
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
