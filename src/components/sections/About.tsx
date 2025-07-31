import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const About = () => {
  return (
    <div
      id="about"
      className="relative h-screen flex flex-col justify-between bg-size-[auto_45%] md:bg-size-[auto_50%] bg-bottom-right bg-no-repeat bg-[url(/images/about-bg.png)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full flex flex-col xl:w-1/2 gap-6 md:gap-10 p-6 md:p-12 pb-40 md:pb-24"
      >
        <h2 className="text-4xl md:text-6xl">About</h2>
        <div className="h-full overflow-y-auto flex flex-col gap-6 md:gap-10 scroll">
          <p className="text-justify md:text-xl lg:text-2xl text-shadow-black text-shadow-lg">
            <b className="underline">Professional Summary</b>
            <br />
            I’m a passionate Software Developer with 6+ years of experience in
            full-stack web development, specializing in JavaScript, TypeScript,
            React.js, Next.js, and Node.js. I build scalable, user-friendly
            applications and have contributed to large-scale projects like the
            MyTelkomsel app, used by millions. I focus on performance, clean
            architecture, and solving real-world problems with practical
            solutions.
          </p>
          <p className="text-justify md:text-xl lg:text-2xl text-shadow-black text-shadow-lg">
            <b className="underline">Background</b>
            <br />
            After graduating from STMIK Bumigora Mataram (now Bumigora
            University) in 2017, I joined a 4-month Full-stack Developer
            Bootcamp at RUBICAMP in 2018. This kickstarted my career, and in
            2019 I began working as a Full-stack Developer at PT. Delameta
            Bilano.
          </p>
        </div>
      </motion.div>
      <div className="absolute bottom-0 w-full flex flex-col">
        <motion.div
          className="flex justify-end items-center p-6 md:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
        >
          <div className="flex flex-col opacity-50 hover:opacity-100">
            <button
              onClick={() => {
                const target = document.getElementById("hero");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-b-1 border-primary rounded-t-full px-3 py-3 hover:bg-primary hover:text-black transition-colors"
            >
              <ArrowUp className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => {
                const target = document.getElementById("portfolio");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-t-1 border-primary rounded-b-full px-3 py-3 hover:bg-primary hover:text-black transition-colors"
            >
              <ArrowDown className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </motion.div>
        <div className="h-10 md:h-12 w-full bg-primary" />
      </div>
    </div>
  );
};

export default About;
