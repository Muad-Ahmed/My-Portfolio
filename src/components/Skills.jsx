export default function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "Vite", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "GraphQL"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "Git", "CI/CD", "AWS", "Nginx"],
    },
    {
      category: "Tools & Others",
      skills: ["Figma", "VS Code", "Postman", "Jest", "ESLint"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((section) => (
            <div
              key={section.category}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#6D4AFF] text-white rounded-md text-sm hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}