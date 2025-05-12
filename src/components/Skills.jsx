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
import { MdGroups, MdWork } from "react-icons/md"; // Added icons for sections
import { motion } from "framer-motion";

const techSkills = [
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaPython className="text-blue-400" />, name: "Python" },
  { icon: <FaJava className="text-red-500" />, name: "Java" },
  { icon: <SiC className="text-blue-600" />, name: "C" },
  { icon: <FaReact className="text-blue-500" />, name: "React.js" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
  { icon: <FaLaravel className="text-red-600" />, name: "Laravel" },
  { icon: <FaPhp className="text-indigo-500" />, name: "PHP" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git & GitHub" },
];

const softSkills = [
  { icon: <MdGroups className="text-blue-600" />, name: "Teamwork" },
  { icon: <MdGroups className="text-blue-600" />, name: "Problem Solving" },
  { icon: <MdGroups className="text-blue-600" />, name: "Communication" },
  { icon: <MdGroups className="text-blue-600" />, name: "Time Management" },
  { icon: <MdGroups className="text-blue-600" />, name: "Quick Learning" },
  { icon: <MdGroups className="text-blue-600" />, name: "Adaptability" },
  { icon: <MdGroups className="text-blue-600" />, name: "Attention to Detail" },
  { icon: <MdGroups className="text-blue-600" />, name: "Critical Thinking" },
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 flex justify-center items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MdWork className="text-blue-600" /> {/* Icon before Skills */}
          Skills
        </motion.h2>

        {/* Technical Skills Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <FaDatabase className="text-blue-500" />{" "}
            {/* Icon before Technical Skills */}
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {techSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-xl shadow transition transform duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900 group cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <MdGroups className="text-blue-600" />{" "}
            {/* Icon before Soft Skills */}
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-3 rounded-xl shadow text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {skill.icon}
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
