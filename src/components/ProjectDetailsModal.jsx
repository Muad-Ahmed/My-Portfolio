import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, CheckCircle2, Server, Layout, MessageSquare, Shield, Globe, 
  Zap, Image, Users, Cloud, Search, Bot, Sparkles, ShoppingBag, 
  ThumbsUp, Lock, UserCheck, FolderOpen, MousePointer2 
} from "lucide-react";

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  // Use the provided placeholder details as defaults if not present
  const details = project?.details || {
    title: "Project Development Overview",
    stack: project?.tech?.join(" | ") || "Full-Stack Development",
    highlights: [
      "Custom software architecture designed for scalability.",
      "Frontend optimized for performance and user experience.",
      "Backend API development with robust security measures.",
      "Full deployment lifecycle management."
    ]
  };

  const getIcon = (type, index) => {
    const iconMap = {
      message: <MessageSquare size={18} />,
      media: <FolderOpen size={18} />,
      users: <Users size={18} />,
      shield: <Shield size={18} />,
      shopping: <ShoppingBag size={18} />,
      search: <Search size={18} />,
      bot: <Bot size={18} />,
      check: <CheckCircle2 size={18} />,
      thumb: <ThumbsUp size={18} />,
      lock: <UserCheck size={18} />,
      zap: <Zap size={18} />,
      cloud: <Cloud size={18} />
    };

    if (iconMap[type]) return iconMap[type];

    // Fallback logic
    const icons = [<MessageSquare size={18} />, <Layout size={18} />, <Server size={18} />, <Shield size={18} />, <Globe size={18} />];
    return icons[index % icons.length];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 scrollbar-hide"
          >
            {/* Header / Close Button */}
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-[#6D4AFF] hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content View */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col gap-1 mb-8">
                <div className="text-xs font-bold text-[#6D4AFF] uppercase tracking-[0.2em]">Project Insights</div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  {details.title}
                </h2>
                <div className="flex items-center gap-2 mt-5">
                  <span className="relative px-4 py-1.5 rounded-full [word-spacing:1rem] bg-[#6D4AFF] text-white text-sm font-bold uppercase tracking-widest  transition-all duration-300">
                    {details.stack}
                    <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"></span>
                  </span>
                </div>
              </div>

              <div className="grid gap-6">
                {(details.highlights || []).map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#6D4AFF]/10 flex items-center justify-center text-[#6D4AFF] group-hover:bg-[#6D4AFF] group-hover:text-white transition-all duration-300">
                      {getIcon(highlight.type, index)}
                    </div>
                    <div className="flex-1 text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed py-1">
                      {highlight.text || highlight}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-8 py-4 rounded-2xl bg-[#6D4AFF] text-white font-bold text-sm shadow-lg shadow-[#6D4AFF]/30 hover:shadow-[#6D4AFF]/40 transition-all duration-300 flex-1"
                >
                  Close Insights
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
