import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg">
            I am a Full-Stack Developer with a passion for building clean,
            efficient, and scalable web applications. My expertise spans modern
            frontend frameworks, backend technologies, and database management.
            I thrive on solving challenging problems and creating intuitive user
            experiences.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg">
            Always eager to learn new technologies and improve my craft, I enjoy
            collaborating in dynamic teams and contributing to projects that
            make a real impact.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
            {/* Placeholder for profile image or illustration */}
          </div>
        </div>
      </div>
    </section>
  );
}
