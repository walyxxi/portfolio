import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { ReactNode, useEffect } from "react";
import WorkExperience from "./components/sections/Experience";
import { motion } from "framer-motion";
import { ArrowUp, XIcon } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

interface Section {
  id: number;
  label?: string;
  name: string;
  section: ReactNode;
}

function App() {
  const SECTIONS: Section[] = [
    { id: 1, label: "Home", name: "hero", section: <Hero /> },
    { id: 2, label: "About", name: "about", section: <About /> },
    {
      id: 3,
      label: "Work Experience",
      name: "experience",
      section: <WorkExperience />,
    },
    { id: 4, label: "Projects", name: "projects", section: <Projects /> },
    { id: 5, label: "Contact", name: "contact", section: <Contact /> },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup when unmounting
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <div className="relative font-montserrat bg-primary text-black">
      <motion.div
        className="absolute bottom-12 right-0 flex justify-end items-center p-6 md:p-12 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button
          onClick={() => {
            const target = document.getElementById("hero");
            target?.scrollIntoView({ behavior: "smooth" });
          }}
          className="border-2 border-primary rounded-full px-3 py-6 hover:bg-primary text-primary hover:text-black transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </motion.div>

      {/* Navigation Bar */}
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row fixed top-0 right-0 rounded-bl-3xl h-16 bg-primary items-center justify-between pl-8 pr-12 gap-6 lg:gap-8 z-50">
        {SECTIONS.map((section) => (
          <button
            onClick={() => {
              const target = document.getElementById(section.name);
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            key={section.name}
            className={`text-black lg:text-lg text-center first-letter:uppercase cursor-pointer`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      {/* Hamburger Icon triggers menu */}
      <motion.div
        className="md:hidden fixed top-4.5 right-6 z-50"
        initial={false}
        animate={
          menuOpen ? { opacity: 0, pointerEvents: "none" } : { opacity: 1 }
        }
      >
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <GiHamburgerMenu className="h-7 w-7 text-primary-light" />
        </button>
      </motion.div>
      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed top-0 right-0 w-full h-full bg-white/50 backdrop-blur-sm z-40 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
        initial={false}
        animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
      >
        <button
          className="flex justify-end w-full bg-black pr-6 py-4.5"
          onClick={() => setMenuOpen(false)}
          aria-label="Open menu"
        >
          <XIcon className="h-7 w-7 text-primary-light" />
        </button>
        <div className="flex flex-col items-end p-8">
          {SECTIONS.map((section) => (
            <button
              key={section.name}
              onClick={() => {
                setMenuOpen(false);
                const target = document.getElementById(section.name);
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-black text-2xl mb-6 first-letter:uppercase"
            >
              {section.label}
            </button>
          ))}
        </div>
      </motion.div>
      {SECTIONS.map((section) => (
        <div key={section.id} id={section.name}>
          <div
            className={`${
              (section.id === 1 || section.id === 5) && "hidden"
            } sticky h-16 top-0 w-full ${
              section.id % 2 === 0
                ? "bg-primary text-black"
                : "bg-black text-primary-light"
            } z-30 pt-2 font-semibold text-3xl md:6xl pl-6 md:pl-12`}
          >
            <div
              className={`h-1.5 w-18 mb-2 mt-1 ${
                section.id % 2 === 0 ? "bg-black" : "bg-primary-light"
              }`}
            />
            {section.label}
          </div>
          {section.section}
        </div>
      ))}
    </div>
  );
}

export default App;
