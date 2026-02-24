import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contact Me
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
          Feel free to reach out for collaborations, projects, or just a friendly hello!
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
            required
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#6D4AFF] text-white font-medium rounded-md hover:bg-[#5b3ee6] transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Send Message
          </button>

          <div className="flex justify-center gap-6 mt-4">
            <a
              href="mailto:example@email.com"
              className="text-gray-700 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-[#6D4AFF] transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}