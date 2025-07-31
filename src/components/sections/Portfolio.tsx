import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, Link } from "lucide-react";
import { useState } from "react";
import Modal from "../ui/Modal";

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
      desc: "Web Applications used by Danone which presents information about Mineral Water Products in Indonesia from Nielsen, Kantar, Ipsos BHT, and Internal Reports",
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

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>();

  const onModalClose = () => {
    setModalOpen(false);
  };

  const onModalOpen = (project: Project) => {
    setModalOpen(true);
    setSelectedProject(project);
  };

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
          <div className="h-auto overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6 pb-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                onClick={() => onModalOpen(project)}
                key={project.name + idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="h-auto bg-white/10 rounded-xl shadow-lg flex-1 flex-col justify-between cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-44 md:h-56 object-cover object-top rounded-t-xl"
                  loading="lazy"
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
        <div className="flex flex-col">
          <motion.div
            className="absolute bottom-12 right-0 flex justify-end items-center p-6 md:p-12"
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
          <div className="absolute bottom-0 right-0 h-10 md:h-12 w-full bg-primary" />
        </div>
      </div>

      {/* Portfolio Details */}
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <div className="flex md:flex-row flex-col-reverse">
          <div className="flex flex-col justify-between p-2 md:p-4 md:min-w-1/4">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                {selectedProject?.name}
              </h2>
              <p className="text-sm md:text-md text-gray-700">
                {selectedProject?.desc}
              </p>
            </div>
            <div className="text-white w-auto mt-2">
              {selectedProject?.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium rounded-full bg-green/50 px-2 py-1"
                >
                  <Link className="w-3 h-3" /> Visit
                </a>
              ) : (
                <span className="text-sm bg-orange px-2 py-1 rounded-full">
                  {selectedProject?.status === "inprogress" ? (
                    <i>Build In Progress</i>
                  ) : (
                    "Internal Use"
                  )}
                </span>
              )}
            </div>
          </div>
          <div>
            <img
              src={selectedProject?.image}
              className="rounded-t-xl md:rounded-r-xl md:rounded-t-none object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
