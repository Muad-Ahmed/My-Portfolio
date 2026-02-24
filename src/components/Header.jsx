import { useState } from "react";

export default function Header({ toggleDarkMode, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Name */}
          <a
            href="#"
            className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            <span className="text-[#6D4AFF]">M</span>uath
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
            >
              Contact
            </a>

            {/* CTA Button */}
            <a
              href="/cv.pdf"
              className="ml-4 inline-flex items-center px-4 py-2 bg-[#6D4AFF] text-white text-sm font-medium rounded-md hover:bg-[#5b3ee6] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Download CV
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="ml-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3c0 .34.02.67.05 1A7 7 0 0021 12.79z"
                  />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3c0 .34.02.67.05 1A7 7 0 0021 12.79z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <a
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-700 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#6D4AFF] text-white text-sm font-medium rounded-md hover:bg-[#5b3ee6] transition-all duration-200 shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
