import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Cart = () => {
  // Dummy cart data (replace with real state later)
  const cartItems = [
    {
      id: 1,
      name: "Caffè Latte",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <motion.div
      className="min-h-screen p-8 max-w-5xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl font-bold mb-6 text-green-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <motion.div
          className="text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="mb-4 text-lg">Your cart is empty 🛒</p>
          <Link
            to="/menu"
            className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Browse Menu
          </Link>
        </motion.div>
      ) : (
        <motion.div variants={containerVariants}>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <motion.li
                key={item.id}
                className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-stone-700">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 font-medium">
                  Remove
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-8 text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/checkout"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Proceed to Checkout
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Cart;
