import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // Make sure this points to your Firebase config

const auth = getAuth(app);

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in:", userCredential.user.uid);
      navigate("/"); // 🔥 Send to home or dashboard
    } catch (error) {
      console.error("Login failed:", error.message);
      navigate("/signup"); // Redirect to signup if login fails
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <motion.div
        className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-green-800"
          variants={itemVariants}
        >
          Login to StarBev's
        </motion.h2>

        <motion.form onSubmit={handleLogin} className="space-y-4">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 text-stone-950  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="you@example.com"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300    rounded-lg px-4 py-2 text-stone-950 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="••••••••"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
            variants={itemVariants}
          >
            Log In
          </motion.button>
        </motion.form>

        <motion.p
          className="mt-4 text-sm text-center text-gray-600"
          variants={itemVariants}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-700 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
