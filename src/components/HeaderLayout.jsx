import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHistory, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/icon.png";

const HeaderLayout = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#202020] bg-opacity-80 p-4 shadow-md sticky top-0 z-50 transition-all duration-500 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo dan Navigasi */}
        <div className="flex items-center justify-between w-full sm:w-auto space-x-4">
          <img src={logo} alt="Logo" className="w-12 h-12" />

          {/* Navbar untuk Desktop */}
          <nav className="hidden sm:flex space-x-6 text-gray-300 font-bold">
            <Link to="/" className="flex items-center hover:text-white">
              <FaHome className="mr-2" />
              Beranda
            </Link>
            <Link
              to="/cek-transaksi"
              className="flex items-center hover:text-white"
            >
              <FaHistory className="mr-2" />
              Cek Transaksi
            </Link>
          </nav>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Pencarian */}
        <div className="flex items-center w-full sm:w-auto mt-4 sm:mt-0">
          <div
            className={`relative flex items-center transition-all duration-500 ${
              isSearchActive ? "w-full sm:w-96" : "w-40 sm:w-36"
            }`}
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-[#333] text-white rounded-full pl-10 pr-4 py-2 w-full transition-all duration-500 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`sm:hidden fixed inset-0 bg-[#202020] bg-opacity-90 transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } h-screen`} 
        style={{ zIndex: 999 }}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-semibold">
          </div>
          <button onClick={toggleMobileMenu} className="text-2xl text-white">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6">
          <Link
            to="/"
            className="text-xl text-white hover:text-[#ff3131]"
            onClick={toggleMobileMenu}
          >
            Beranda
          </Link>
          <Link
            to="/cek-transaksi"
            className="text-xl text-white hover:text-[#ff3131]"
            onClick={toggleMobileMenu}
          >
            Cek Transaksi
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLayout;
