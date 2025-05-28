import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaMedium,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_s0brgjb", // ✅ Your EmailJS Service ID
        "template_oxkmhgm", // ✅ Your EmailJS Template ID (default one)
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "v5dQfTHJRpugSO4fV" // ✅ Your EmailJS Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-800 dark:text-white col-span-1">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <span>pramudithakavinda01@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            <span>+94 768001685</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>Hatton, Sri Lanka</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-600" />
            <a
              href="https://www.linkedin.com/in/pramuditha-bandara-897717251/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pramuditha Bandara
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-blue-600" />
            <a
              href="https://github.com/KMPKBandara"
              target="_blank"
              rel="noopener noreferrer"
            >
              KMPKBandara
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMedium className="text-blue-600" />
            <a
              href="https://medium.com/@pramudithakavinda01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pramuditha Bandara
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="max-w-2xl mx-auto text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Me
            </h2>
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-full"
                disabled={loading}
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
