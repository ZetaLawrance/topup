import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHistory, FaSearch } from 'react-icons/fa';
import logo from '../assets/icon.png'; 

const HeaderLayout = () => {
  return (
    <header className="bg-[#202020] bg-opacity-80 p-4 shadow-md sticky top-0 z-50 transition-all duration-500 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-5" />
          <nav className=" flex space-x-6 text-gray-300 font-bold">
            <Link to="/" className="flex items-center hover:text-white">
              <FaHome className="mr-2" />
              Beranda
            </Link>
            <Link to="/cek-transaksi" className="flex items-center hover:text-white">
              <FaHistory className="mr-2" />
              Cek Transaksi
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="relative" style={{ width: '47rem' }}>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#333] text-white rounded-full pl-10 pr-10 py-2 w-full transition-all duration-500 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Link to="/topup/register" className="bg-[#ff3131] px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:bg-transparent border border-[#ff3131]">
            Daftar
          </Link>
          <Link to="/topup/login" className="bg-[#ff3131] px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:bg-transparent border border-[#ff3131]">
            Masuk
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
