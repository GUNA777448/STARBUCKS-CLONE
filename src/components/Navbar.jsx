import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-green-700">Starbucks</div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <a href="#" className="hover:text-green-700">
            Rewards
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-700">
            Gift Cards
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="text-sm text-green-700 hover:underline">
          Sign In
        </button>
        <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 text-sm">
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
