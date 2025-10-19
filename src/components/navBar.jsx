import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/navBar.css";
import { useAuth } from "../pages/authContext";

export const Navbar = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };
  return (
    <nav className="flex items-center justify-center p-4 bg-gray-800 text-white">
  <div className="flex space-x-4 items-center">
    {/* Logo */}
    
    
    {/* Navigation Links */}
    <ul className="flex space-x-6">
      <li>
        <Link to="/home" className="hover:text-gray-300 transition duration-300">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-gray-300 transition duration-300">
          About
        </Link>
      </li>
      <li>
        <Link to="/services" className="hover:text-gray-300 transition duration-300">
          Services
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-gray-300 transition duration-300">
          Contact Us
        </Link>
      </li>
    </ul>
    <button className="ml-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
      onClick={onLogoutClick}>
      Logout
    </button>
  </div>
</nav>
  );
};
