import { motion } from "framer-motion";
import { ShoppingCart, Plus, Award, Droplet, Factory, Users } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Mineral Water",
      tagline: "Pure Hydration, Natural Minerals",
      description: "Our flagship product, sourced from pristine Sri Lankan springs and enhanced with essential minerals.",
      sizes: ["500ml", "1L", "2L", "5L"],
      features: ["BPA-free bottles", "Tamper-proof seal", "Easy-grip design"],
      image: "https://knuckleswater.com/wp-content/uploads/2023/06/knuckles-water-bottels-pl-1.webp",
      category: "Consumer"
    },
    {
      id: 2,
      name: "Alkaline+ Water",
      tagline: "Balanced pH for Better Health",
      description: "Specially processed water with optimal pH levels, perfect for health-conscious individuals.",
      sizes: ["500ml", "1L", "2L"],
      features: ["pH 8.5-9.5", "Electrolyte enhanced", "Premium packaging"],
      image: "https://images.freshop.ncrcloud.com/00041303083499/b8c55212235af9b31b4c1838be2c3e0d_large.png",
      category: "Premium"
    },
    {
      id: 3,
      name: "Bulk Water Supply",
      tagline: "Large Scale Solutions",
      description: "Customized water solutions for businesses, events, and industrial needs.",
      sizes: ["20L", "1000L"],
      features: ["Dispensers available", "Regular delivery", "Quality guarantee"],
      image: "https://www.shutterstock.com/image-photo/skiathos-greece-062624-plastic-bottled-600nw-2493938399.jpg",
      category: "Business"
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
    <section id="products" className="py-20 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex items-center justify-center gap-2 mb-4">
            <Droplet className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Our Product Range</h1>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience pure hydration with our carefully crafted water products, 
            designed to meet every need from individual consumption to industrial scale.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-blue-600 font-medium mb-4">{product.tagline}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Available Sizes */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Available Sizes:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <Plus className="w-4 h-4 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <motion.a
                    href={`#order-${product.id}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Order Now
                  </motion.a>
                  <motion.button
                    className="flex items-center justify-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-2">
            <Award className="w-8 h-8 text-blue-600" />
            <h3 className="font-semibold">Quality Guaranteed</h3>
            <p className="text-gray-600">Every product meets strict quality standards</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Factory className="w-8 h-8 text-blue-600" />
            <h3 className="font-semibold">Modern Production</h3>
            <p className="text-gray-600">State-of-the-art facility and processes</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Users className="w-8 h-8 text-blue-600" />
            <h3 className="font-semibold">Customer Support</h3>
            <p className="text-gray-600">Dedicated team for all your needs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;