import { motion } from "framer-motion";
import { 
  Leaf, 
  Recycle, 
GlassWater, 
  TreePine, 
  Sun, 
  Globe, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

const Sustainability = () => {
  const initiatives = [
    {
      icon: Recycle,
      title: "Eco-Friendly Packaging",
      description: "Our commitment to reducing environmental impact through innovative packaging solutions.",
      details: [
        "100% recyclable bottles",
        "Reduced plastic content",
        "Biodegradable labels",
        "Minimal packaging waste"
      ]
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      description: "Powering our production facility with clean energy to minimize our carbon footprint.",
      details: [
        "Solar-powered facility",
        "Energy-efficient equipment",
        "Smart grid integration",
        "Carbon offset program"
      ]
    },
    {
      icon: GlassWater,
      title: "Water Conservation",
      description: "Implementing responsible water management practices to protect this precious resource.",
      details: [
        "Spring protection programs",
        "Efficient production processes",
        "Wastewater treatment",
        "Sustainable extraction rates"
      ]
    },
    {
      icon: TreePine,
      title: "Reforestation Projects",
      description: "Actively participating in restoring forest ecosystems to protect water sources.",
      details: [
        "Native species planting",
        "Watershed protection",
        "Habitat restoration",
        "Community tree planting"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Community Partnerships",
      description: "Working with local communities to promote environmental education and conservation.",
      details: [
        "School education programs",
        "Beach & river clean-ups",
        "Water access initiatives",
        "Environmental workshops"
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
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
    <section id="sustainability" className="py-20 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-800">Our Sustainability Commitment</h1>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At Sandaru Aqua Sky, we believe that pure water and environmental responsibility go hand in hand. 
            Our eco-conscious approach ensures a sustainable future for our planet and communities.
          </p>
        </motion.div>

        {/* Main Vision */}
        <motion.div
          className="bg-blue-50 p-8 rounded-xl shadow-md mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <Globe className="w-32 h-32 text-green-600" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision for a Sustainable Future</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We envision a world where pure, natural water is accessible to all while preserving the 
                environment for future generations. Our sustainable practices are integral to every aspect 
                of our business, from sourcing to production to distribution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By choosing Sandaru Aqua Sky, you're not just selecting premium water – you're supporting 
                a company committed to making a positive impact on the planet and communities we serve.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sustainability Initiatives */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Our Sustainability Initiatives</h2>
        
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {initiatives.map((initiative, index) => (
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
                <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center">
                  <initiative.icon className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{initiative.title}</h2>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {initiative.details.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-green-50 p-3 rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sustainability Goals */}
        <motion.div 
          className="mt-20 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Our 2030 Sustainability Goals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-green-50 p-6 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">100% Sustainable</h3>
              </div>
              <p className="text-gray-600">Achieve 100% sustainable packaging across all product lines</p>
            </motion.div>
            
            <motion.div 
              className="bg-green-50 p-6 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Carbon Neutral</h3>
              </div>
              <p className="text-gray-600">Become a carbon neutral operation through renewable energy and offsets</p>
            </motion.div>
            
            <motion.div 
              className="bg-green-50 p-6 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Plant 1M Trees</h3>
              </div>
              <p className="text-gray-600">Plant one million trees to protect watersheds and biodiversity</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Sustainability Journey</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Every bottle of Sandaru Aqua Sky water contributes to our environmental initiatives. 
            Together, we can make a difference for our planet, one drop at a time.
          </p>
          {/* <motion.button
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Leaf className="w-5 h-5" />
            Learn More About Our Impact
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;