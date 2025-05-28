import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl py-2"
            : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#hero"
              className={`font-bold text-blue-600 dark:text-white hover:scale-105 transition-all duration-300 ${
                scrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
              }`}
            >
              Pramuditha Bandara
            </a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative px-3 py-2 text-sm xl:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop partial menu for medium screens */}
            <ul className="hidden md:flex lg:hidden items-center space-x-1">
              {links.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Action buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative p-2 sm:p-2.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Toggle dark mode"
              >
                <div className="relative">
                  {darkMode ? (
                    <FaSun className="text-lg sm:text-xl" />
                  ) : (
                    <FaMoon className="text-lg sm:text-xl" />
                  )}
                </div>
              </button>

              <button
                onClick={toggleMenu}
                className="md:lg:hidden p-2 sm:p-2.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <span
                    className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute top-2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute top-4 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
            <ul className="px-4 py-2 space-y-1">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="block px-4 py-3 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
