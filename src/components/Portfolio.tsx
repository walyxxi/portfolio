import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

interface Project {
  name: string;
  desc?: string;
  link?: string;
  image: string;
  status: string;
}

const Portfolio = () => {
  const PROJECTS: Project[] = [
    {
      name: "Freshco",
      desc: "",
      link: "",
      image: "/images/portfolio/freshco.png",
      status: "inprogress",
    },
    {
      name: "Anihost",
      desc: "",
      link: "https://anihost.com",
      image: "/images/portfolio/anihost.png",
      status: "live",
    },
    {
      name: "eDOT",
      desc: "Web Profile of eDOT Company",
      link: "https://edot.id",
      image: "/images/portfolio/edot.png",
      status: "live",
    },
    {
      name: "eDOT Chat",
      desc: "Web Chat for eDOT",
      link: "https://chat.edot.id",
      image: "/images/portfolio/edot-chat.png",
      status: "live",
    },
    {
      name: "eDOT Wheel of Fortune",
      desc: "Web Chat for eDOT",
      link: "https://fortune-wheel.edot.id",
      image: "/images/portfolio/edot-wof.png",
      status: "live",
    },
    {
      name: "Danone DanBoard",
      desc: "Web Applications used by Danone which presents information about Bottled Water Products in Indonesia from Nielsen, Kantar, Ipsos BHT, and Internal Reports",
      link: "",
      image: "/images/portfolio/danone-danboard.png",
      status: "live",
    },
    {
      name: "Danone Forecast",
      desc: "Web Application using by Danone which presents information about Forecast Danone Product (Aqua and Vit) and Competotirs Product",
      link: "",
      image: "/images/portfolio/danone-forecast.png",
      status: "live",
    },
    {
      name: "Toll Information Center",
      desc: "",
      link: "",
      image: "/images/portfolio/tic.png",
      status: "live",
    },
  ];

  return (
    <>
      <div
        id="portfolio"
        className="relative h-screen flex flex-col justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-full w-full flex flex-col gap-6 md:gap-10 p-6 md:p-12"
        >
          <h2 className="text-4xl md:text-6xl">Portfolio</h2>
          <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-6 pb-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.name + idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-white/10 rounded-xl shadow-lg flex-1 flex-col justify-between cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-44 md:h-56 object-cover object-top rounded-t-xl"
                />
                <div className="flex flex-col justify-between flex-1 p-2 md:p-3">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="font-bold text-lg">{project.name}</h3>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline text-xs font-medium"
                      >
                        Visit
                      </a>
                    ) : (
                      <span className="text-xs">
                        {project.status === "inprogress" ? (
                          <i>Build In Progress</i>
                        ) : (
                          "Internal Use"
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="absolute bottom-0 w-full flex flex-col">
          <motion.div
            className="flex justify-end items-center p-6 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
          >
            <div className="flex flex-col opacity-50 hover:opacity-100 active:opacity-100">
              <button
                onClick={() => {
                  const target = document.getElementById("about");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 bg-black border-b-1 border-primary rounded-t-full px-3 py-3 hover:bg-primary hover:text-black transition-colors"
              >
                <ArrowUp className="w-4 h-4 md:w-6 md:h-6" />
              </button>
              <button
                onClick={() => {
                  const target = document.getElementById("contact");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 bg-black border-t-1 border-primary rounded-b-full px-3 py-3 hover:bg-primary hover:text-black transition-colors"
              >
                <ArrowDown className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </div>
          </motion.div>
          <div className="h-10 md:h-12 w-full bg-primary" />
        </div>
      </div>

      {/* Portfolio Details */}
    </>
  );
};

export default Portfolio;
