/*import React from "react";
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
          I'm a Software Engineering undergraduate at Sabaragamuwa University of
          Sri Lanka with a strong passion for building real-world software
          solutions. I specialize in full-stack web development, writing clean,
          scalable code with a focus on modern design, user experience, and
          accessibility. I’ve contributed to several dynamic web platforms,
          handling both frontend and backend development. I’m a fast learner,
          team player, and proactive problem solver, always eager to take on new
          challenges and grow technically and professionally.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
*/
import React, { useState, useEffect } from "react";
import aboutbg from "../assets/about/bg.jpg";

const About = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "I'm passionate about building real-world software solutions, specializing in full-stack web development. I write clean, scalable code with a strong focus on modern design, user experience, and accessibility. I've contributed to several dynamic web platforms, handling both frontend and backend development. I'm a fast learner, team player, and proactive problem solver, always eager to take on new challenges and grow technically and professionally.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutbg}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Optional dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 mb-4 tracking-tight">
              Who Am I?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-black/30 rounded-3xl border border-gray-700/30 shadow-2xl p-8 md:p-12 mx-auto max-w-3xl">
            <div className="relative">
              <p className="text-gray-200 text-xl md:text-2xl leading-relaxed font-medium text-left">
                {displayedText}
                <span
                  className={`inline-block w-0.5 h-6 bg-blue-400 ml-1 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                ></span>
              </p>
            </div>

            {/* Animated bouncing dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
