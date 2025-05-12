import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const items = [
    {
      icon: <FaUniversity className="text-white text-xl sm:text-2xl" />,
      title: "B.Sc (Hons) in Software Engineering",
      institute: "Sabaragamuwa University of Sri Lanka",
      duration: "2022 – Present",
    },
    {
      icon: <FaSchool className="text-white text-xl sm:text-2xl" />,
      title: "G.C.E. Advanced Level and G.C.E. Ordinary Level",
      institute: "Laxapana Central College",
      duration: "2007 – 2020",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          <FaGraduationCap className="text-3xl sm:text-4xl text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-10">
          {items.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 sm:gap-6 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 p-4 sm:p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300"
            >
              <div className="bg-blue-600 p-3 sm:p-4 rounded-full">
                {edu.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.title}
                </h3>
                <p className="text-sm sm:text-md font-medium text-gray-800 dark:text-gray-200 mb-1">
                  {edu.institute}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
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
