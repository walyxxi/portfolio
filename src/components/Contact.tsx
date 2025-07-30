import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Contact = () => {
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
        <h2 className="text-4xl md:text-6xl">Contact</h2>
        <div className="h-full overflow-y-auto flex flex-col gap-6 md:gap-10 scroll"></div>
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
