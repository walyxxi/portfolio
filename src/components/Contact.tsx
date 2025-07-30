import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail, MdWhatsapp } from "react-icons/md";

const Contact = () => {
  const NAME: string = "Waliyul Ardy";
  const USERNAME: string = "walyxxi";
  const WA_NUMBER: string = "6282236857567";
  const EMAIL: string = "waliyulardy@gmail.com";

  return (
    <div
      id="contact"
      className="relative h-screen flex flex-col justify-between"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full w-full flex flex-col gap-6 md:gap-10 p-6 md:p-12"
      >
        <div className="overflow-y-auto flex items-center flex-wrap gap-6 md:gap-12 scroll">
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
            <a
              href={`https://maps.app.goo.gl/q8aNwfHoVbwQYCzSA`}
              className="flex flex-row gap-3 items-center text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapLocation className="w-6 h-6" />
              <span>Lombok, Indonesia</span>
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              className="flex flex-row gap-3 items-center text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdWhatsapp className="w-6 h-6" />
              <span>+{WA_NUMBER}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex flex-row gap-3 items-center text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="w-6 h-6" />
              <span>{EMAIL}</span>
            </a>
            <a
              href={`https://linkedin.com/in/${USERNAME}`}
              className="flex flex-row gap-3 items-center text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
              <span>linkedin.com/in/{USERNAME}</span>
            </a>
            <a
              href={`https://github.com/${USERNAME}`}
              className="flex flex-row gap-3 items-center text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
              <span>github.com/{USERNAME}</span>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 w-full flex flex-col">
        <motion.div
          className="flex justify-end items-center p-6 md:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={() => {
              const target = document.getElementById("portfolio");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            className="opacity-50 hover:opacity-100 border-2 border-primary rounded-full px-3 py-6 hover:bg-primary hover:text-black transition-colors"
          >
            <ArrowUp className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </motion.div>
        <div className="h-10 md:h-12 w-full bg-primary" />
      </div>
    </div>
  );
};

export default Contact;
