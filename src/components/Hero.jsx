import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import cv from "../assets/Pramuditha_Bandara_CV.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col justify-center items-center text-center px-4">
      <motion.img
        src={profileImg}
        alt="Pramuditha Bandara"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-xl mb-6"
      />
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Pramuditha Bandara
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Software Engineering Undergraduate | Full Stack Developer
      </motion.p>
      <div className="flex space-x-4">
        <a
          href="https://linkedin.com/in/pramuditha-bandara-897717251"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Connect on LinkedIn
        </a>
        <a
          href={cv}
          download
          className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-6 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
