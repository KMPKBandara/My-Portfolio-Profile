/*import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaBriefcase,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import ieeeLogo from "../assets/ieee-logo.jpg";
import socsLogo from "../assets/socs-logo.jpg";
import rossliLogo from "../assets/Rossli.jpeg";
import careerForgeImage1 from "../assets/careerforge.jpeg";
import careerForgeImage2 from "../assets/careerforgeCertificate.jpeg";

const volunteeringExperiences = [
  {
    title: "IEEE Student Branch of SUSL",
    logo: ieeeLogo,
    children: [
      {
        role: "Active Member",
        duration: "2022 – Present",
      },
      {
        role: "Chairperson – CareerForge Phase 2 (2025)",
        duration: "2025",
        summary:
          "Led CareerForge Phase 2 to empower students through career guidance and networking.",
        fullDesc: `Event: Careerforge Phase 2
Role: Chairperson

Description:
Served as the Chairperson for Careerforge Phase 2, a flagship professional development program organized by the IEEE Student Branch of Sabaragamuwa University of Sri Lanka.

Led the planning and execution of the event, coordinated with team members and guest speakers, and ensured smooth event delivery. Focused on empowering students through career guidance, leadership development, and networking opportunities.

This experience strengthened my leadership, communication, and event management skills while fostering a collaborative and impactful environment for student growth.`,
        images: [careerForgeImage1, careerForgeImage2],
      },
    ],
  },
  {
    title: "Society of Computer Sciences - SUSL",
    logo: socsLogo,
    children: [
      {
        role: "Active Member",
        duration: "2022 – Present",
      },
    ],
  },
];

const workExperiences = [
  {
    title: "Rossli Holding Pvt Ltd",
    logo: rossliLogo,
    children: [
      {
        role: "Warehouse Operator",
        duration: "Jan 2021 – Dec 2021",
        location: "Laxapana, Central Province, Sri Lanka",
        type: "Full-time · On-site",
      },
    ],
  },
];

const ExperienceSection = ({ title, icon, experiences, isVolunteer }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            {icon}
            {title}
          </h2>
          {isVolunteer && (
            <a
              href="https://www.linkedin.com/in/pramuditha-bandara-897717251/details/volunteering-experiences/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
            >
              <FaExternalLinkAlt className="text-xs" />
              View More
            </a>
          )}
        </div>

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
              <div className="bg-white dark:bg-gray-900 p-3 rounded-full shadow-md">
                <img
                  src={exp.logo}
                  alt={exp.title}
                  className="w-20 h-20 object-contain rounded-full"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <ul className="space-y-4">
                  {exp.children.map((child, i) => {
                    const key = `${index}-${i}`;
                    return (
                      <li key={key}>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <span className="font-medium">{child.role}</span> —{" "}
                          <span className="text-xs">{child.duration}</span>
                        </p>
                        {child.location && (
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {child.location} | {child.type}
                          </p>
                        )}
                        {child.summary && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {child.summary}
                            </p>
                            <button
                              onClick={() => toggleExpand(key)}
                              className="mt-2 flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline transition"
                            >
                              {expanded[key] ? (
                                <>
                                  <FaChevronUp className="text-xs" />
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <FaChevronDown className="text-xs" />
                                  Read More
                                </>
                              )}
                            </button>
                          </div>
                        )}
                        {expanded[key] && (
                          <>
                            {child.fullDesc && (
                              <pre className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-wrap mt-2">
                                {child.fullDesc}
                              </pre>
                            )}
                            {child.images && (
                              <div className="flex flex-col md:flex-row gap-4 mt-3">
                                {child.images.map((img, idx) => (
                                  <img
                                    key={idx}
                                    src={img}
                                    alt={`CareerForge ${idx + 1}`}
                                    className="rounded-lg w-full md:w-1/2 shadow"
                                  />
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <>
      <ExperienceSection
        title="Volunteering Experience"
        icon={<FaHandsHelping />}
        experiences={volunteeringExperiences}
        isVolunteer={true}
      />
      <ExperienceSection
        title="Work Experience"
        icon={<FaBriefcase />}
        experiences={workExperiences}
      />
    </>
  );
};

export default Experience;
*/
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaBriefcase,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import ieeeLogo from "../assets/ieee-logo.jpg";
import socsLogo from "../assets/socs-logo.jpg";
import rossliLogo from "../assets/Rossli.jpeg";
import careerForgeImage1 from "../assets/careerforge.jpeg";
import careerForgeImage2 from "../assets/careerforgeCertificate.jpeg";

// Export or use these directly
export { ieeeLogo, socsLogo, rossliLogo, careerForgeImage1, careerForgeImage2 };

const volunteeringExperiences = [
  {
    title: "IEEE Student Branch of SUSL",
    logo: ieeeLogo,
    children: [
      {
        role: "Active Member",
        duration: "2022 – Present",
      },
      {
        role: "Chairperson – CareerForge Phase 2 (2025)",
        duration: "2025",
        summary:
          "Led CareerForge Phase 2 to empower students through career guidance and networking.",
        fullDesc: `Event: Careerforge Phase 2
Role: Chairperson

Description:
Served as the Chairperson for Careerforge Phase 2, a flagship professional development program organized by the IEEE Student Branch of Sabaragamuwa University of Sri Lanka.

Led the planning and execution of the event, coordinated with team members and guest speakers, and ensured smooth event delivery. Focused on empowering students through career guidance, leadership development, and networking opportunities.

This experience strengthened my leadership, communication, and event management skills while fostering a collaborative and impactful environment for student growth.`,
        images: [careerForgeImage1, careerForgeImage2],
      },
    ],
  },
  {
    title: "Society of Computer Sciences - SUSL",
    logo: socsLogo,
    children: [
      {
        role: "Active Member",
        duration: "2022 – Present",
      },
    ],
  },
];

const workExperiences = [
  {
    title: "Rossli Holding Pvt Ltd",
    logo: rossliLogo,
    children: [
      {
        role: "Warehouse Operator",
        duration: "Jan 2021 – Dec 2021",
        location: "Laxapana, Central Province, Sri Lanka",
        type: "Full-time · On-site",
      },
    ],
  },
];

const ExperienceCard = ({ experience, index, expanded, toggleExpand }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <img
                src={experience.logo}
                alt={`${experience.title} logo`}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <header className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                {experience.title}
              </h3>
            </header>

            <div className="space-y-6">
              {experience.children.map((child, childIndex) => {
                const expandKey = `${index}-${childIndex}`;
                const isExpanded = expanded[expandKey];

                return (
                  <div
                    key={childIndex}
                    className="border-l-2 border-gray-100 dark:border-gray-800 pl-4"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">
                          {child.role}
                        </h4>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                          {child.duration}
                        </span>
                      </div>

                      {child.location && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {child.location} • {child.type}
                        </p>
                      )}

                      {child.summary && (
                        <div className="space-y-3">
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {child.summary}
                          </p>

                          <button
                            onClick={() => toggleExpand(expandKey)}
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                            aria-expanded={isExpanded}
                          >
                            {isExpanded ? (
                              <>
                                <FaChevronUp className="w-3 h-3" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <FaChevronDown className="w-3 h-3" />
                                Read More
                              </>
                            )}
                          </button>
                        </div>
                      )}

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 pt-4"
                        >
                          {child.fullDesc && (
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed font-sans">
                                {child.fullDesc}
                              </pre>
                            </div>
                          )}

                          {child.images && child.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {child.images.map((image, imageIndex) => (
                                <div
                                  key={imageIndex}
                                  className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                                >
                                  <img
                                    src={image}
                                    alt={`CareerForge Phase 2 - Image ${
                                      imageIndex + 1
                                    }`}
                                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ExperienceSection = ({ title, icon, experiences, isVolunteer }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <span className="text-gray-700 dark:text-gray-300">{icon}</span>
            {title}
          </h2>

          {isVolunteer && (
            <a
              href="https://www.linkedin.com/in/pramuditha-bandara-897717251/details/volunteering-experiences/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-gray-400"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              View More
            </a>
          )}
        </header>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              expanded={expanded}
              toggleExpand={toggleExpand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ExperienceSection
        title="Volunteering Experience"
        icon={<FaHandsHelping />}
        experiences={volunteeringExperiences}
        isVolunteer={true}
      />
      <ExperienceSection
        title="Work Experience"
        icon={<FaBriefcase />}
        experiences={workExperiences}
      />
    </div>
  );
};

export default Experience;
