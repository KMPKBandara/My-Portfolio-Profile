import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-white"
        >
          Pramuditha Bandara
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg text-gray-700 dark:text-gray-300 font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl text-gray-800 dark:text-white"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-800 dark:text-white"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 text-lg text-gray-800 dark:text-gray-200 font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={toggleMenu}
                className="block hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
