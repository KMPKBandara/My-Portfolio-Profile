import { FaUniversity, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const items = [
    {
      icon: <FaUniversity className="text-white text-xl" />,
      title: "B.Sc (Hons) in Software Engineering",
      institute: "Sabaragamuwa University of Sri Lanka",
      duration: "2022 – Present",
    },
    {
      icon: <FaSchool className="text-white text-xl" />,
      title: "G.C.E. A/L & O/L",
      institute: "Laxapana Central College",
      duration: "2007 – 2020",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="space-y-10">
          {items.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow"
            >
              <div className="bg-blue-600 p-3 rounded-full">{edu.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {edu.institute}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {edu.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
