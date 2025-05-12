import {
  FaGithub,
  FaFlask,
  FaStethoscope,
  FaComments,
  FaPaw,
  FaCodeBranch,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import project1 from "../assets/MediTech.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/WaveTalk.png";
import project4 from "../assets/BeastBuddy.jpg";

const projects = [
  {
    title: "Meditech-Laboratory System",
    icon: <FaFlask className="inline mr-2 text-blue-500" />,
    desc: "Scalable lab management platform with admin panel.",
    longDesc:
      "Meditech streamlines lab operations with multi-branch coordination, patient test tracking, online report downloads, and real-time lab updates. Designed to enhance efficiency and accuracy in diagnostic workflows.",
    tech: "Next.js, Tailwind CSS, MongoDB",
    image: project1,
    link: "https://github.com/KMPKBandara/Meditech-Laboratory.git",
  },
  {
    title: "MediQ",
    icon: <FaStethoscope className="inline mr-2 text-green-600" />,
    desc: "Full-stack doctor appointment booking with Stripe integration.",
    longDesc:
      "MediQ enables users to schedule medical appointments, securely pay online with Stripe, and receive timely notifications. The admin interface manages doctor schedules, patient records, and appointments effectively.",
    tech: "MERN Stack",
    image: project2,
    link: "https://github.com/KMPKBandara/MediQ.git",
  },
  {
    title: "WaveTalk",
    icon: <FaComments className="inline mr-2 text-purple-500" />,
    desc: "Real-time chat platform for inclusive communication.",
    longDesc:
      "WaveTalk supports barrier-free communication using real-time chat, Firebase backend, and hand sign recognition via a Python ML model. Ideal for inclusive, accessible communication across communities.",
    tech: "React, Firebase, Python",
    image: project3,
    link: "https://github.com/KMPKBandara/WaveTalk.git",
  },
  {
    title: "Beast Buddy",
    icon: <FaPaw className="inline mr-2 text-red-500" />,
    desc: "Animal rescue and veterinary communication platform.",
    longDesc:
      "Beast Buddy connects rescuers, veterinarians, and volunteers to report animal distress, coordinate rescue efforts, and share health-related updates. Supports animal welfare NGOs with effective digital tools.",
    tech: "PHP, MySQL, HTML, CSS, JavaScript",
    image: project4,
    link: "https://github.com/HiruniWijerathna/Web-Mini-Project.git",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Main Section Title with Icon */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 flex items-center justify-center gap-3">
          <FaCodeBranch className="text-indigo-500" />
          Projects
        </h2>

        {/* Responsive Project Grid (3 columns on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                {project.icon}
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                {project.desc}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                {project.longDesc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
                <span className="font-semibold">Tech Stack:</span>{" "}
                {project.tech}
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

        {/* View More Projects Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-800 dark:text-gray-200 text-sm mb-4">
            Want to see more of my work?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/KMPKBandara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm hover:underline"
            >
              <FaGithub /> GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/pramuditha-bandara-897717251/details/projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm hover:underline"
            >
              <FaLinkedin /> LinkedIn Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
