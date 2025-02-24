import { motion } from "framer-motion";
import { 
  Droplet, 
  Leaf, 
  ShieldCheck, 
  Award, 
  Recycle, 
  Mountain,
  HeartPulse,
  Factory
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Droplet,
      title: "Advanced Purification",
      description: "Multi-stage filtration system ensuring crystal-clear purity in every drop",
      color: "bg-blue-50"
    },
    {
      icon: Mountain,
      title: "Natural Spring Source",
      description: "Sourced from pristine Sri Lankan springs, rich in natural minerals",
      color: "bg-green-50"
    },
    {
      icon: ShieldCheck,
      title: "Quality Certified",
      description: "Exceeds international quality standards with regular testing",
      color: "bg-purple-50"
    },
    {
      icon: HeartPulse,
      title: "Mineral Enhanced",
      description: "Perfectly balanced mineral content for optimal health benefits",
      color: "bg-red-50"
    },
    {
      icon: Factory,
      title: "Modern Facility",
      description: "State-of-the-art production facility with automated systems",
      color: "bg-yellow-50"
    },
    {
      icon: Recycle,
      title: "Eco-Conscious",
      description: "Sustainable packaging and responsible environmental practices",
      color: "bg-emerald-50"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 font-[Poppins] ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Award className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Sandaru Aqua Sky?</h2>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the perfect blend of nature's purity and modern technology
            in every bottle we produce.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`p-6 rounded-xl ${feature.color} hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Learn More About Our Process
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;