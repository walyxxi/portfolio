import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="relative overflow-hidden bg-primary">
      <motion.img
        src="/images/about-ilustration.png"
        alt="About Illustration"
        className="absolute bottom-0 right-0 w-100 md:w-115 lg:w-150 object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full flex flex-col lg:w-1/2 gap-6 md:gap-10 p-6 md:p-12 md:pt-6 mb-60 lg:mb-0"
      >
        <div className="h-full flex flex-wrap gap-4 md:gap-6 scroll">
          <p className="md:text-lg lg:text-xl">
            <b className="underline">Professional Summary</b>
            <br />
            I'm a Software Developer with 6+ years of experience in full-stack
            web, frontend and backend application development. Proficient in
            Javascript (React.js, Next.js, Node.js), Typescript, PHP, Python and
            building RESTful APIs with microservices architecture. Contributed
            to large-scale projects including the MyTelkomsel app. Possesses
            strong analytical and problem-solving skills.
          </p>
          <p className="md:text-lg lg:text-xl">
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
