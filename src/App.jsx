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
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
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
