import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-white text-green-900 p-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-4">☕ Thank You for Your Order!</h1>
      <p className="text-lg mb-6">
        Your Starbevs brew is on the way. We hope it makes your day as amazing
        as you are 💚
      </p>
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2738/2738891.png"
        alt="Thank you"
        className="w-32 h-32 mb-6"
        whileHover={{ scale: 1.1 }}
      />
      <Link
        to="/"
        className="bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition"
      >
        🔙 Back to Home
      </Link>
    </motion.div>
  );
};

export default Thanks;
