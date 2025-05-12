import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who Am I?
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I’m a passionate Software Engineering undergraduate at
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {" "}
            Sabaragamuwa University of Sri Lanka
          </span>
          , focused on building meaningful and scalable software solutions. My
          expertise lies in full-stack web development using technologies such
          as{" "}
          <span className="font-medium">
            JavaScript, React, Next.js, Laravel, Firebase
          </span>
          , and <span className="font-medium">MongoDB</span>.
          <br />
          <br />
          I’ve led and contributed to impactful projects across healthcare,
          accessibility, and animal welfare — including{" "}
          <span className="italic">Meditech Laboratory, WaveTalk, MediQ</span>,
          and <span className="italic">Beast Buddy</span>. With a strong
          foundation in clean coding, problem solving, and cross-functional
          collaboration, I’m constantly seeking opportunities to innovate, grow,
          and make a positive difference through tech.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
