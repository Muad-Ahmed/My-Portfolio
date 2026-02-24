export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          © 2026 <span className="text-[#6D4AFF]">Muath</span>. All rights
          reserved.
        </p>

        {/* Quick Links */}
        <div className="flex gap-6">
          <a
            href="#hero"
            className="text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.262.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.774.42-1.305.763-1.605-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.244 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.804 5.625-5.475 5.922.43.37.815 1.1.815 2.22 0 1.604-.015 2.896-.015 3.286 0 .322.216.698.825.58C20.565 21.795 24 17.296 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.762 2.24 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.338-.026-3.062-1.867-3.062-1.867 0-2.153 1.459-2.153 2.966v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.839-1.562 3.036 0 3.6 2 3.6 4.604v5.591z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.59 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.004-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
