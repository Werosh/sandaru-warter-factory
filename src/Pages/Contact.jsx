import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Truck, Phone, Mail, MapPin, Calendar } from "lucide-react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    quantity: "",
    size: "",
    deliveryDate: "",
    deliveryTime: "morning",
    paymentMethod: "cash",
    notes: ""
  });

  const products = [
    { id: "premium", name: "Premium Mineral Water" },
    { id: "alkaline", name: "Alkaline+ Water" },
    { id: "bulk", name: "Bulk Water Supply" }
  ];

  const sizes = {
    premium: ["500ml", "1L", "2L", "5L"],
    alkaline: ["500ml", "1L", "2L"],
    bulk: ["20L", "1000L"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset size when product changes
      ...(name === 'product' && { size: '' })
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    // Add your order submission logic here
  };

  return (
    <div id="order" className="py-26  min-h-screen font-[Poppins]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShoppingCart className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Place Your Order</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to place your order. Our team will process it
            and contact you for confirmation.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Delivery Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
                Order Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Product *</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Select Product</option>
                    {products.map(product => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Size *</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                    disabled={!formData.product}
                  >
                    <option value="">Select Size</option>
                    {formData.product && sizes[formData.product].map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Quantity *</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Payment Method *</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="cash">Cash on Delivery</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="card">Card Payment</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-600" />
                Delivery Preferences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Time *</label>
                  <select
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                    rows="3"
                    placeholder="Any special instructions for delivery?"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="w-5 h-5" />
                Place Order
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderForm;