import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/navBar.css";
import { useAuth } from "../pages/authContext";

export const Navbar = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("page-transition-active");
    const timeout = setTimeout(() => {
      document.body.classList.remove("page-transition-active");
    }, 400);
    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("page-transition-active");
    };
  }, [location.pathname]);

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
        <Link to="/products" className="hover:text-gray-300 transition duration-300">
          Products
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-gray-300 transition duration-300">
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="/myCart" className="hover:text-gray-300 transition duration-300">
          MyCart
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
