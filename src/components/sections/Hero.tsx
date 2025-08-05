import { motion } from "framer-motion";
// import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden text-primary"
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
          <h3 className="text-2xl md:text-4xl leading-tight font-light">
            Software Developer
          </h3>
        </motion.div>
        <div />
      </div>
    </section>
  );
}
