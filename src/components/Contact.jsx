import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle with EmailJS or backend here
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Contact Me
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
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
          >
            <FaPaperPlane /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
