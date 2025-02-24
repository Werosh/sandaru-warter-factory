import { motion } from "framer-motion";
import { Droplet, Sparkles, Shield, Leaf } from "lucide-react";

const HeroSection = () => {
  const features = [
    { icon: Droplet, text: "Premium Purification" },
    { icon: Shield, text: "Quality Certified" },
    { icon: Leaf, text: "Eco-Friendly" },
    { icon: Sparkles, text: "Mineral Enriched" }
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden font-[Poppins]">
      {/* Background with overlay gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/98 via-blue-800/65 to-blue-900/70" />

      {/* Floating particles effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-blue-200 text-xl mb-2 font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to
          </motion.h2>
          <motion.h1 
            className="text-white text-5xl md:text-6xl font-bold mb-4 tracking-tight font-[Roboto]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sandaru Aqua Sky
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-blue-400 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <motion.p 
            className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Where nature meets innovation in every crystal-clear drop. 
            Experience water perfected through advanced purification and 
            enriched with essential minerals for your wellbeing.
          </motion.p>

          {/* Features grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <feature.icon className="text-blue-300 mb-2" size={24} />
                <span className="text-white text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.a 
              href="#order" 
              className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.a>
            <motion.a 
              href="#learn-more" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;