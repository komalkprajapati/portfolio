import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-orange-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Whether you have a question, want to collaborate or just want to say hi — my inbox is always open.
        </motion.p>

        <motion.form
          action="https://formspree.io/f/your-form-id" // replace this
          method="POST"
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="flex-1 p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>

          <motion.textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
