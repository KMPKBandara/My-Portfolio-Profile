import { FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "IEEE Student Branch of SUSL",
    icon: <FaUsers className="text-white text-xl" />,
    children: [
      {
        role: "Active Member",
        duration: "2022 – Present",
      },
      {
        role: "Chairperson – CareerForge Phase 2",
        duration: "2022",
      },
    ],
  },
  {
    title: "Society of Computer Sciences - SUSL",
    icon: <FaChalkboardTeacher className="text-white text-xl" />,
    children: [
      {
        role: "Active Member",
        duration: "2022 – Present",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-700 p-6 rounded-xl shadow"
            >
              <div className="bg-blue-600 rounded-full p-3">{exp.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <ul className="space-y-2">
                  {exp.children.map((child, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 text-sm"
                    >
                      <span className="font-medium">{child.role}</span> —{" "}
                      <span className="text-xs">{child.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
