// src/pages/About.js
import { motion } from "framer-motion";
import { FaLeaf, FaWater, FaMountain } from "react-icons/fa";

const About = () => {
  return (
    <div id="about-us" className="container mx-auto px-6 py-30 font-[Poppins]">
      {/* <motion.h1 
        className="text-5xl font-bold text-center mb-12 text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Sandaru Aqua Sky
      </motion.h1> */}
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <FaWater className="text-blue-500 text-3xl mr-3" />
            <h2 className="text-3xl font-semibold text-blue-800">Our Story</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Sandaru Aqua Sky Private Limited was founded in 2018 with a vision to provide the purest water sourced from pristine mountain springs. Our journey began with a commitment to purity and wellness, evolving into a trusted name that combines advanced filtration technology with nature's perfection.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            What sets us apart is our unique mineral balance – carefully preserved to maintain the natural goodness while ensuring absolute purity. Every drop of Sandaru Aqua Sky water carries the essence of untouched nature.
          </p>
        </motion.div>
        
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <FaMountain className="text-blue-500 text-3xl mr-3" />
            <h2 className="text-3xl font-semibold text-blue-800">Our Source</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our water begins its journey in the pristine highlands, filtering naturally through layers of mineral-rich rock. This natural filtration process enriches our water with essential minerals while removing impurities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            At our state-of-the-art facility, we carefully capture this gift of nature and enhance its purity through our 9-stage advanced filtration system, preserving the natural mineral balance that makes Sandaru Aqua Sky water truly exceptional.
          </p>
        </motion.div>
      </div>
      
      <motion.div
        className="bg-blue-50 p-8 rounded-lg shadow-md mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <FaLeaf className="text-green-500 text-3xl mr-3" />
          <h2 className="text-3xl font-semibold text-blue-800">Our Commitment to Sustainability</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          At Sandaru Aqua Sky, we believe pure water and environmental responsibility go hand in hand. Our eco-conscious approach includes:
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
            <span>100% recyclable packaging made with reduced plastic content</span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
            <span>Solar-powered production facility reducing our carbon footprint</span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
            <span>Water conservation programs that protect our natural springs</span>
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
            <span>Community watershed protection initiatives</span>
          </li>
        </ul>
      </motion.div>
      
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Experience the Difference</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Every bottle of Sandaru Aqua Sky water represents our dedication to quality, purity, and harmony with nature. 
          We invite you to taste the difference that comes from water in its most perfect form.
        </p>
      </motion.div>
    </div>
  );
};

export default About;