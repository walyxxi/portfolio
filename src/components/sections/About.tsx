import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="relative flex flex-col justify-between">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full flex flex-col xl:w-1/2 gap-6 md:gap-10 p-6 md:p-12"
      >
        <div className="h-full flex flex-wrap gap-4 md:gap-6 scroll">
          <p className="md:text-xl lg:text-2xl">
            <b className="underline">Professional Summary</b>
            <br />
            I'm a Software Developer with 6+ years of experience in full-stack
            web, frontend and backend application development. Proficient in
            Javascript (React.js, Next.js, Node.js), Typescript, PHP, Python and
            building RESTful APIs with microservices architecture. Contributed
            to large-scale projects including the MyTelkomsel app. Possesses
            strong analytical and problem-solving skills.
          </p>
          <p className="md:text-xl lg:text-2xl">
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
    </div>
  );
};

export default About;
