import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { ReactNode } from "react";

interface Section {
  id: number;
  name: string;
  section: ReactNode;
}

function App() {
  const SECTIONS: Section[] = [
    { id: 1, name: "hero", section: <Hero /> },
    { id: 2, name: "about", section: <About /> },
    { id: 3, name: "projects", section: <Projects /> },
    { id: 3, name: "coontact", section: <Contact /> },
  ];

  return (
    <div className="font-sans bg-black text-primary">
      {SECTIONS.map((item) => item.section)}
    </div>
  );
}

export default App;
