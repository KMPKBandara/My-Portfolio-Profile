/*import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaMedium } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import cv from "../assets/Pramuditha_Bandara_CV.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-10 bg-gray-50 dark:bg-gray-800 flex flex-col justify-start items-center text-center px-4">
      <motion.img
        src={profileImg}
        alt="Pramuditha Bandara"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-600 shadow-xl mb-6"
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 mt-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Pramuditha Bandara
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Software Engineering Undergraduate | Full Stack Developer
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <a
          href="https://github.com/KMPKBandara"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-700 text-white px-5 py-2.5 rounded hover:bg-gray-600 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400 transition text-base"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/pramuditha-bandara-897717251"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded hover:bg-blue-700 transition text-base"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>

        <a
          href="https://medium.com/@pramudithakavinda01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded hover:bg-gray-800 transition text-base"
        >
          <FaMedium className="text-lg" />
          Medium
        </a>

        <a
          href={cv}
          download
          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-5 py-2.5 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition text-base"
        >
          <FaDownload className="text-lg" />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
*/
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaMedium } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.jpg";
import cv from "../assets/Pramuditha_Bandara_CV.pdf";
import Bg from "../assets/Hero/background.jpg";
import { useEffect, useRef, useState } from "react"; // Import useState and useRef

const Hero = () => {
  const heroRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Get the navbar element (you might need to adjust this selector)
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero" // Good practice to have an ID for navigation
      style={{ paddingTop: `${navbarHeight}px` }} // Apply dynamic padding
      className="relative min-h-screen pb-10 bg-gray-50 dark:bg-gray-900 flex flex-col justify-start items-center text-center px-4 overflow-hidden"
    >
      {/* Rest of your Hero content */}
      <div className="absolute inset-0 z-0">
        <img src={Bg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <motion.img
        src={profileImg}
        alt="Pramuditha Bandara"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-600 shadow-xl mb-6 z-10"
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-3 mt-2 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Pramuditha Bandara
      </motion.h1>

      <motion.div
        className="text-xl md:text-3xl text-gray-100 mb-8 max-w-2xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "Aspiring Software Engineer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mt-2 z-10">
        <a
          href="https://github.com/KMPKBandara"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-700 text-white px-5 py-2.5 rounded hover:bg-gray-600 transition text-base"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/pramuditha-bandara-897717251"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded hover:bg-blue-700 transition text-base"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>

        <a
          href="https://medium.com/@pramudithakavinda01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded hover:bg-gray-800 transition text-base"
        >
          <FaMedium className="text-lg" />
          Medium
        </a>

        <a
          href={cv}
          download
          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-5 py-2.5 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition text-base"
        >
          <FaDownload className="text-lg" />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
