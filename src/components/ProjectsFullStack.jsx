import React from "react";

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="break-inside-avoid bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center text-gray-500 dark:text-gray-300 font-semibold">
                Image
              </div>

              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>

                <span className="inline-block text-sm font-medium text-purple-600 dark:text-purple-400 mb-3">
                  {project.category}
                </span>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#6D4AFF] text-white text-sm font-medium rounded-md hover:bg-[#5b3ee6] transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
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