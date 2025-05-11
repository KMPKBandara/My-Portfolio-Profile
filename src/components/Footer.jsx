import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 text-center text-gray-600 dark:text-gray-400">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/KMPKBandara"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-black dark:hover:text-white" />
        </a>
        <a
          href="https://linkedin.com/in/pramuditha-bandara-897717251"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-blue-600" />
        </a>
        <a href="mailto:pramudithakavinda01@gmail.com">
          <FaEnvelope className="text-2xl hover:text-red-500" />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Pramuditha Bandara. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
