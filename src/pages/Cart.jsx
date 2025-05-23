import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../components/CartContext"; // Update this path if needed

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
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-6 text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-xl font-bold text-green-800 mb-4">
              Total: ${total.toFixed(2)}
            </p>
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
