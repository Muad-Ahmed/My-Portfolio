import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsFullStack from "./components/ProjectsFullStack";
import ProjectsFrontEnd from "./components/ProjectsFrontEnd";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useLayoutEffect } from "react";

function App() {
  // Dark mode state
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const savedTheme = localStorage.getItem("theme");
    // Default to dark (true) unless explicitly saved as "light"
    return savedTheme !== "light";
  });

  // Sync <html> class before paint to prevent flash
  useLayoutEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <Hero />
      <h1>Testing 3</h1>
      <ProjectsFullStack />
      <ProjectsFrontEnd />
      <Skills />
      {/* <About/> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
