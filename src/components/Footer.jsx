import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Wave animation for the water effect
  const waveVariants = {
    animate: {
      x: [0, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <footer className="relative overflow-hidden mt-16 font-[Poppins]">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-20"
          variants={waveVariants}
          animate="animate"
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#EBF5FF"
            ></path>
          </svg>
        </motion.div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 pt-24 pb-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-light text-blue-600 mb-4">Sandaru Aqua Sky</h3>
            <p className="text-gray-600 text-sm mb-4">
              Pure water, sourced from nature, <br />
              delivered with care.
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} Sandaru Aqua Sky Private Limited.<br />
              All rights reserved.
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-light text-blue-600 mb-4">Contact Us</h3>
            <p className="text-gray-600 text-sm mb-2">
              info@sandaruaquasky.com
            </p>
            <p className="text-gray-600 text-sm mb-2">
              +94 11 2345 678
            </p>
            <p className="text-gray-600 text-sm">
              123 Pure Springs Road,<br />
              Colombo, Sri Lanka
            </p>
          </motion.div>

          {/* Social and newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-light text-blue-700 mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {[FaInstagram, FaFacebook, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </div>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email for newsletter"
                  className="px-3 py-2 text-sm bg-blue-50 border border-blue-100 flex-1 rounded-l outline-none focus:ring-1 focus:ring-blue-200"
                />
                <motion.button
                  type="submit"
                  className="bg-blue-900 text-white px-3 py-2 text-sm rounded-r"
                  whileHover={{ backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 pt-6 border-t border-blue-100">
          <motion.div 
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {["Home", "About", "Products", "Process", "Sustainability", "Contact", "Privacy Policy"].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                className="hover:text-blue-500 transition-colors"
                whileHover={{ x: 2 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;