import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { RxArrowTopRight } from "react-icons/rx";

const Contact = () => {
  const NAME: string = "Waliyul Ardy";
  const USERNAME: string = "walyxxi";
  const WA_NUMBER: string = "6282236857567";
  const EMAIL: string = "waliyulardy@gmail.com";

  const SECTIONS = [
    { id: 1, label: "Home", name: "hero" },
    { id: 2, label: "About", name: "about" },
    {
      id: 3,
      label: "Work Experience",
      name: "experience",
    },
    { id: 4, label: "Projects", name: "projects" },
    { id: 5, name: "contact" },
  ];

  return (
    <div
      id="contact"
      className="relative flex flex-col justify-between md:rounded-t-4xl bg-black text-primary"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full w-full flex flex-col gap-6 md:gap-10 p-6 md:p-12"
      >
        <div className="flex flex-wrap gap-6 md:gap-12 scroll">
          <div className="flex w-full md:w-auto flex-col items-center justify-center text-lg">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-40 h-40 rounded-full shadow-lg"
            />
            <span className="mt-2 font-bold">{NAME}</span>
            <span className="-mt-1 text-sm font-extralight">
              Software Developer
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold">Let's Connect!</span>
            <span className="font-extralight">
              Feel free to reach out for collaborations, job opportunities, or
              just a friendly chat!
            </span>
            <span className="font-extralight">
              I look forward to hearing from you!
            </span>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              className="flex items-center justify-center gap-1 text-center text-sm cursor-pointer w-40 md:w-40 rounded-full py-3 text-black bg-primary hover:bg-primary-dark hover:text-primary-light transition-colors duration-300"
            >
              Let's Connect <RxArrowTopRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold">Navigations</span>
            {SECTIONS.map((section) => (
              <button
                key={section.id + section.name}
                onClick={() => {
                  const target = document.getElementById(section.name);
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${
                  section.id === 5 && "hidden"
                } text-start first-letter:uppercase cursor-pointer`}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold">Contact</span>
            <a
              href={`https://maps.app.goo.gl/q8aNwfHoVbwQYCzSA`}
              className="flex flex-row gap-3 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapLocation className="w-6 h-6" />
              <span>Lombok, Indonesia</span>
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              className="flex flex-row gap-3 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdWhatsapp className="w-6 h-6" />
              <span>+{WA_NUMBER}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex flex-row gap-3 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="w-6 h-6" />
              <span>{EMAIL}</span>
            </a>
            <a
              href={`https://linkedin.com/in/${USERNAME}`}
              className="flex flex-row gap-3 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
              <span>linkedin.com/in/{USERNAME}</span>
            </a>
            <a
              href={`https://github.com/${USERNAME}`}
              className="flex flex-row gap-3 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
              <span>github.com/{USERNAME}</span>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="text-center w-full bg-primary text-black">
        Copyright© 2025 Waliyul Ardy. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
