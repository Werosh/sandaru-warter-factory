import { motion } from "framer-motion";
import { 
  Mountain, 
  Filter, 
  FlaskConical, 
  Package, 
  Truck, 
  Award, 
  Droplet,
  ShieldCheck 
} from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      icon: Mountain,
      title: "Natural Spring Sourcing",
      description: "Our water is sourced from pristine Sri Lankan springs, carefully selected for their mineral content and purity.",
      details: [
        "Regular source testing",
        "Protected catchment areas",
        "Sustainable extraction",
        "Natural mineral composition"
      ]
    },
    {
      icon: Filter,
      title: "Advanced Purification",
      description: "Multi-stage filtration process using cutting-edge technology to ensure the highest quality standards.",
      details: [
        "Sediment filtration",
        "Carbon filtration",
        "UV sterilization",
        "Reverse osmosis"
      ]
    },
    {
      icon: FlaskConical,
      title: "Quality Testing",
      description: "Rigorous testing at every stage to maintain consistent quality and meet international standards.",
      details: [
        "pH level monitoring",
        "Mineral content analysis",
        "Microbiological testing",
        "Daily quality checks"
      ]
    },
    {
      icon: Package,
      title: "Hygienic Bottling",
      description: "Automated bottling in our state-of-the-art facility using eco-friendly materials and processes.",
      details: [
        "Sterilized containers",
        "Automated filling",
        "Quality seal application",
        "Batch tracking system"
      ]
    },
    {
      icon: Truck,
      title: "Distribution Network",
      description: "Efficient delivery system ensuring our products reach customers in perfect condition.",
      details: [
        "Temperature controlled",
        "GPS tracked fleet",
        "Same-day delivery",
        "Quality preservation"
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="process" className="py-25 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex items-center justify-center gap-2 mb-4">
            <Droplet className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Our Production Process</h1>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience our commitment to quality through every step of our 
            advanced water processing and distribution system.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon Circle */}
              <motion.div 
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute w-1 bg-blue-200 h-32 top-24 left-1/2 transform -translate-x-1/2" />
                )}
              </motion.div>

              {/* Content */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{step.title}</h2>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg"
                    >
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-20 text-center bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Quality Assurance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our process meets and exceeds international quality standards, 
            ensuring you receive the purest, most refreshing water possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;