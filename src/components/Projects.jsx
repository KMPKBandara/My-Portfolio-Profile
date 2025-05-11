import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    title: "Meditech-Laboratory System",
    desc: "Scalable lab management platform with admin panel.",
    tech: "Next.js, Tailwind CSS, MongoDB",
    image: project1,
    link: "https://github.com/KMPKBandara/Meditech-Laboratory.git",
  },
  {
    title: "MediQ",
    desc: "Full-stack doctor appointment booking with Stripe integration.",
    tech: "MERN Stack",
    image: project2,
    link: "https://github.com/KMPKBandara/MediQ.git",
  },
  {
    title: "WaveTalk",
    desc: "Real-time chat platform for inclusive communication.",
    tech: "React, Firebase, Python",
    image: project3,
    link: "https://github.com/KMPKBandara/WaveTalk.git",
  },
  {
    title: "Beast Buddy",
    desc: "Animal rescue and veterinary communication platform.",
    tech: "PHP, MySQL, JS",
    image: project4,
    link: "https://github.com/HiruniWijerathna/Web-Mini-Project.git",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                {project.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
                Tech: {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <FaGithub /> View Code
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
