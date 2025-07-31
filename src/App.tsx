import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
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
    { id: 3, name: "portfolio", section: <Portfolio /> },
    { id: 3, name: "About", section: <Contact /> },
  ];

  return (
    <div className="font-sans bg-black text-primary">
      {SECTIONS.map((item) => item.section)}
    </div>
  );
}

export default App;
