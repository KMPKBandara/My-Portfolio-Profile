import React from "react";

const About = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I’m a Software Engineering undergraduate at Sabaragamuwa University of
          Sri Lanka, passionate about crafting real-world, impactful solutions.
          I specialize in full-stack web development using technologies like
          JavaScript, React, Next.js, Laravel, Firebase, and MongoDB.
          <br />
          <br />
          My projects span healthcare, accessibility, and animal welfare —
          including platforms like Meditech Laboratory, WaveTalk, MediQ, and
          Beast Buddy. I'm a quick learner, collaborative team player, and
          always excited to grow through innovative and meaningful tech.
        </p>
      </div>
    </section>
  );
};

export default About;
