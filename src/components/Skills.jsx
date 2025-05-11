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
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { MdGroups } from "react-icons/md";

const techSkills = [
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-500" />, name: "React.js" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
  { icon: <FaLaravel className="text-red-600" />, name: "Laravel" },
  { icon: <FaPhp className="text-indigo-500" />, name: "PHP" },
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git & GitHub" },
];

const softSkills = [
  "Teamwork",
  "Problem Solving",
  "Communication",
  "Time Management",
  "Quick Learning",
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-xl shadow hover:scale-105 transition transform duration-300"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-3 rounded-xl shadow text-gray-700 dark:text-gray-200"
              >
                <MdGroups className="text-xl text-blue-600" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
