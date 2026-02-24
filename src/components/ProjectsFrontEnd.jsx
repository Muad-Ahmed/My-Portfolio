import React from "react";

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
    <section
      id="secondary-projects"
      className="py-16 bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Other Projects
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {secondaryProjects.map((project, idx) => (
            <div
              key={idx}
              className="break-inside-avoid bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              {/* Small Image Placeholder */}
              <div className="bg-gray-200 dark:bg-gray-600 h-32 flex items-center justify-center text-gray-500 dark:text-gray-300 font-medium text-sm">
                Image
              </div>

              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center justify-center px-3 py-1 bg-[#6D4AFF] text-white text-xs font-medium rounded-md hover:bg-[#5b3ee6] transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
