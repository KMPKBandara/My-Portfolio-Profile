import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaSearch,
  FaCertificate,
  FaGithub,
} from "react-icons/fa";
import {
  SiPostman,
  SiCoursera,
  SiSololearn,
  SiGooglechrome,
} from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";

const certifications = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    issueDate: "Feb 2025",
    skills: ["Postman API"],
    icon: <SiPostman className="text-orange-500" />,
  },
  {
    title: "Python Programming",
    issuer: "University of Moratuwa",
    issueDate: "Jul 2024",
    skills: ["Python (Programming Language)"],
    icon: <FaPython className="text-yellow-400" />,
  },
  {
    title: "Version Control",
    issuer: "Coursera",
    issueDate: "May 2024",
    skills: ["Version Control"],
    icon: <SiCoursera className="text-blue-600" />,
  },
  {
    title: "Programming with JavaScript",
    issuer: "Coursera",
    issueDate: "Apr 2024",
    skills: ["JavaScript"],
    icon: <FaJsSquare className="text-yellow-500" />,
  },
  {
    title: "Designing User Interfaces and Experiences (UI/UX)",
    issuer: "Coursera",
    issueDate: "Oct 2023",
    skills: ["Figma", "User Interface Design"],
    icon: <FaFigma className="text-pink-500" />,
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Coursera",
    issueDate: "Oct 2023",
    skills: ["CSS", "HTML", "Responsive Web Design"],
    icon: <FaHtml5 className="text-orange-600" />,
  },
  {
    title: "Introduction to Java",
    issuer: "Sololearn",
    issueDate: "Oct 2023",
    skills: ["Java"],
    icon: <FaJava className="text-red-600" />,
  },
  {
    title: "Diploma in English",
    issuer: "British Way English Academy",
    issueDate: "Dec 2021",
    skills: ["English"],
    icon: <GiGraduateCap className="text-green-700" />,
  },
  {
    title: "The Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    issueDate: "Sep 2021",
    skills: ["Digital Marketing", "SEO", "SEM"],
    icon: <SiGooglechrome className="text-blue-500" />,
  },
];

export default function LicensesCertifications() {
  return (
    <section
      className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
      id="certifications"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white flex items-center justify-center gap-3">
        <FaCertificate className="text-indigo-600" /> Licenses & Certifications
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl">{cert.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Issued {cert.issueDate}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold">Skills:</span>{" "}
              {cert.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://www.linkedin.com/in/pramuditha-bandara-897717251/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        >
          <FaGithub className="text-lg" /> More Certifications
        </a>
      </div>
    </section>
  );
}
