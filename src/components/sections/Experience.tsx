import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const experiences = [
  {
    company: "Delameta Bilano",
    location: "Jakarta, Indonesia",
    period: "Jul 2019 - Oct 2020",
    role: "Fullstack Developer",
    description: "",
    color: "bg-primary",
  },
  {
    company: "Platinumetrix Global Inovasi",
    location: "Jakarta, Indonesia",
    period: "Oct 2020 - Oct 2021",
    role: "Frontend Developer",
    description: "",
    color: "bg-primary",
  },
  {
    company: "Elektronik Distribusi Otomatisasi Terkemuka",
    location: "Bandung, Indonesia",
    period: "Oct 2022 - Jul 2023",
    role: "Frontend Developer",
    description: "",
    color: "bg-primary",
  },
  {
    company: "Phintraco Consulting",
    location: "Jakarta, Indonesia",
    period: "Nov 2023 - Jun 2025",
    role: "Senior Web Developer",
    description: "",
    color: "bg-primary",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function WorkExperience() {
  return (
    <div
      id="experience"
      className="relative h-screen overflow-hidden text-primary"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full w-full flex flex-col gap-10 p-6 md:p-12"
      >
        <h2 className="text-4xl md:text-6xl">Work Experience</h2>
        <div className="flex flex-row items-start lg:justify-center gap-10 lg:gap-20">
          {/* Left Side */}
          <div className="lg:flex lg:flex-col lg:mt-1 w-2/5 hidden">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn}
                className="h-auto lg:h-46 text-end"
              >
                <h3 className="lg:text-xl xl:text-2xl font-semibold">
                  {exp.company}
                </h3>
                <p className="mt-1 text-lg">{exp.location}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative ml-2 flex flex-col items-center">
            <div className="absolute top-0 bottom-0 w-px bg-dashed border-l-2 border-dashed" />
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: idx * 0.2, duration: 0.3 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div
                  className={`w-8 lg:w-10 h-8 lg:h-10 rounded-full border-2 border-black outline-2 outline-dashed ${exp.color}`}
                />
                {idx !== experiences.length - 1 && <div className="h-36" />}
              </motion.div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex flex-col lg:mt-1 w-full lg:w-2/5">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn}
                className="h-44 lg:h-46"
              >
                <h3 className="text-xl xl:text-2xl font-semibold">
                  {exp.role}
                </h3>
                <h3 className="lg:hidden text-lg">{exp.company}</h3>
                <p className="mt-1 text-sm lg:text-lg">{exp.period}</p>
                <p className="lg:hidden text-sm">{exp.location}</p>
              </motion.div>
            ))}
          </div>
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
                const target = document.getElementById("about");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-b-1 border-primary rounded-t-full px-3 py-3 hover:bg-primary hover:text-black transition-colors"
            >
              <ArrowUp className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => {
                const target = document.getElementById("projects");
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
}
