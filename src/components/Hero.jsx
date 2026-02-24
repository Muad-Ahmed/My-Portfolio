import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-10">
        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Full-Stack Developer 
          </h1>
          <p className="mt-2 text-2xl font-semibold text-gray-700 dark:text-gray-300">
            <span className="text-[#6D4AFF]">Muath</span>
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
          Laravel -react
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
            Building scalable web applications and delivering modern,
            user-friendly experiences.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-[#6D4AFF] text-white text-sm font-medium rounded-md hover:bg-[#5b3ee6] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
            {/* Placeholder image */}
          </div>
        </div>
      </div>
    </section>
  );
}
