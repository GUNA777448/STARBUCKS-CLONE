import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

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

  // Google sign-in logic
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google login success:", result.user.uid);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error.message);
    }
  };

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

        <motion.div
          variants={itemVariants}
          className="mt-4 flex flex-col items-center"
        >
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 bg-white border text-stone-950 border-gray-300 rounded-lg px-4 py-2 shadow hover:bg-gray-100 transition mb-2"
            style={{ fontWeight: "bold" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="12" cy="12" r="12" fill="#fff" />
                <path
                  d="M21.6 12.227c0-.818-.073-1.604-.209-2.364H12v4.482h5.352a4.58 4.58 0 0 1-1.98 3.004v2.494h3.2c1.872-1.724 2.928-4.267 2.928-7.616z"
                  fill="#4285F4"
                />
                <path
                  d="M12 22c2.43 0 4.47-.805 5.96-2.188l-3.2-2.494c-.89.6-2.03.96-3.26.96-2.51 0-4.64-1.697-5.4-3.98H2.01v2.5A9.997 9.997 0 0 0 12 22z"
                  fill="#34A853"
                />
                <path
                  d="M6.6 14.298a5.996 5.996 0 0 1 0-3.596v-2.5H2.01a9.997 9.997 0 0 0 0 8.596l4.59-2.5z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 6.8c1.32 0 2.5.454 3.43 1.345l2.57-2.57C16.47 3.805 14.43 3 12 3A9.997 9.997 0 0 0 2.01 8.202l4.59 2.5C7.36 8.497 9.49 6.8 12 6.8z"
                  fill="#EA4335"
                />
              </g>
            </svg>
            Continue with Google
          </button>
        </motion.div>

        <motion.p
          className="mt-2 text-sm text-center text-gray-600"
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
