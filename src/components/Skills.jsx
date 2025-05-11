import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaravel,
  FaPhp,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiPostman,
  SiC,
} from "react-icons/si";
import { MdGroups } from "react-icons/md";
import { motion } from "framer-motion";

const techSkills = [
  // Programming Languages
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaPython className="text-blue-400" />, name: "Python" },
  { icon: <FaJava className="text-red-500" />, name: "Java" },
  { icon: <SiC className="text-blue-600" />, name: "C" },

  // Frontend
  { icon: <FaReact className="text-blue-500" />, name: "React.js" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },

  // Backend & Tools
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
  { icon: <FaLaravel className="text-red-600" />, name: "Laravel" },
  { icon: <FaPhp className="text-indigo-500" />, name: "PHP" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git & GitHub" },
];

const softSkills = [
  "Teamwork",
  "Problem Solving",
  "Communication",
  "Time Management",
  "Quick Learning",
  "Adaptability",
  "Attention to Detail",
  "Critical Thinking",
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {techSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-xl shadow hover:scale-105 transition transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-3 rounded-xl shadow text-gray-700 dark:text-gray-200"
                whileHover={{ scale: 1.05 }}
              >
                <MdGroups className="text-xl text-blue-600" />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
