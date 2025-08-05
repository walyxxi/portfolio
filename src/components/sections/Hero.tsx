import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { RxArrowTopRight } from "react-icons/rx";

export default function HeroSection() {
  const WA_NUMBER: string = "6282236857567";

  return (
    <section
      id="hero"
      className="relative h-screen min-h-96 overflow-hidden text-primary pb-40 md:pb-56"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 bg-[url(/images/hero-bg.png)]"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between h-full">
        <div className="flex justify-between items-end md:items-center p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              {/* Logo Placeholder */}
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-20 h-20 md:w-30 md:h-30 rounded-full shadow-lg"
              />
            </div>
          </motion.div>

          <motion.h2
            className="text-sm md:text-base uppercase font-light tracking-widest text-gray-500"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <b className="font-extrabold text-lg">6+</b> Years of Experience
          </motion.h2>
        </div>

        <motion.div
          className="px-6 md:px-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl leading-tight font-bold">
            Waliyul Ardy
          </h1>
          <h3 className="text-2xl md:text-4xl leading-tight font-light mb-6">
            Software Developer
          </h3>
          <div className="flex md:flex-row gap-4">
            <a
              href="/CV_Waliyul Ardy.pdf"
              download
              className="flex items-center justify-center gap-1.5 text-center text-sm cursor-pointer w-40 md:w-44 rounded-full py-3 text-black bg-primary hover:bg-primary-dark hover:text-primary-light transition-colors duration-300"
            >
              <Download className="w-5 h-5" /> Download CV
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              className="flex items-center justify-center gap-1 text-center text-sm border-2 border-primary cursor-pointer w-40 md:w-44 rounded-full py-3 text-primary hover:bg-primary hover:text-black transition-colors duration-300"
            >
              Let's Connect <RxArrowTopRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
