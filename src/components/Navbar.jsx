import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplet, Phone, ShoppingCart, Home, Info, Package, Factory, Leaf, Newspaper, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", icon: Home },
    { name: "About Us", icon: Info },
    { name: "Products", icon: Package },
    { name: "Process", icon: Factory },
    { name: "Sustainability", icon: Leaf },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full font-[Poppins] z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div
          className={`flex items-center space-x-2 ${
            scrolled ? "text-blue-600" : "text-white"
          }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Droplet className="w-8 h-8" />
          <span className="text-2xl font-bold">Sandaru Aqua Sky</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/ /g, "-")}`}
              className={`md:flex md:flex-col md:items-center xl:flex-row ${
                scrolled ? "text-gray-700" : "text-white"
              } hover:text-blue-500 transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-4 h-4 md:mb-1 xl:mb-0 xl:mr-1" />
              <span className="md:text-xs xl:text-[20px]">{item.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Contact & Order Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="tel:+94XXXXXXXXX"
            className={`flex items-center space-x-2 ${
              scrolled ? "text-blue-600" : "text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Call Us</span>
          </motion.a>
          <motion.a
            href="#order"
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Order Now</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50" // Added left-0 and z-50
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  // onClick={() => setIsOpen(false)}
                    onClick={() => setTimeout(() => setIsOpen(false), 900)}
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </motion.a>
              ))}
              <motion.div className="flex flex-col space-y-2 pt-4 border-t">
                <motion.a
                  href="tel:+94XXXXXXXXX"
                  className="flex items-center space-x-2 text-blue-600"
                  whileHover={{ x: 10 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </motion.a>
                <motion.a
                  href="#order"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => setTimeout(() => setIsOpen(false), 900)}
                  whileHover={{ scale: 1.02 }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Order Now</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;