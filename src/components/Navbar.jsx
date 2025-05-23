import { FaUserCircle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebase";

const Navbar = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully 👋");
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-green-800 text-white">
      {/* Logo */}
      <div>
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <span>StarBev's</span>
          <FaHome className="text-2xl" />
        </Link>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6">
        <Link to="/menu" className="hover:text-green-300">
          Menu
        </Link>
        <Link to="/gift" className="hover:text-green-300">
          Gift
        </Link>
        <Link to="/cart" className="hover:text-green-300">
          Cart
        </Link>

        {/* Conditionally render Login or User info + Logout */}
        {user ? (
          <>
            <div className="flex items-center space-x-2 font-semibold">
              <FaUserCircle className="text-2xl" />
              <span>{user.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="flex items-center space-x-2 hover:text-green-300 font-semibold"
          >
            <FaUserCircle className="text-2xl" />
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
