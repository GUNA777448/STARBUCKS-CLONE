import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-green-800 text-white">
      {/* Logo and other nav stuff */}
      <div>
        <Link to="/" className="text-2xl font-bold flex ">
          StarBev's <FaHome className="text-2xl " />
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
        {/* Login button with profile icon */}
        <Link
          to="/login"
          className="flex items-center space-x-2 hover:text-green-300 font-semibold"
        >
          <FaUserCircle className="text-2xl" />
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
