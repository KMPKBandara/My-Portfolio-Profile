import { FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";

const publications = [
  {
    title:
      "The Web’s Evolution: From Static Pages to Intelligent, Decentralized Networks",
    platform: "Medium",
    date: "Feb 13, 2025",
    link: "https://medium.com/@pramudithakavinda01/the-webs-evolution-from-static-pages-to-intelligent-decentralized-networks-6f5a5807badd",
    summary:
      "This article explores the internet's evolution from Web 1.0 to Web 3.0, covering changes in user interaction, data ownership, and digital communication. It introduces the Semantic Web and anticipates Web 4.0 advancements including AI integration and immersive virtual experiences.",
  },
  {
    title:
      "Unlocking the Power of APIs: A Guide to the Digital Backbone of Modern Software",
    platform: "Medium",
    date: "Feb 9, 2025",
    link: "https://medium.com/@pramudithakavinda01/unlocking-the-power-of-apis-a-guide-to-the-digital-backbone-of-modern-software-05b8b6091ebf",
    summary:
      "This guide simplifies APIs for all readers, explaining how they connect software through real-world analogies. It explores REST, GraphQL, and more, and highlights APIs' role in innovation, efficiency, and scalability.",
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-16 px-6 md:px-12 lg:px-20 bg-white dark:bg-gray-900"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaMedium className="text-black dark:text-white text-2xl" />
        Publications
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {pub.platform} · {pub.date}
              </p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {pub.summary}
            </p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline transition"
            >
              Show publication ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
