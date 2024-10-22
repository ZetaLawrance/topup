import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import mobileLegends from "./assets/mobilelegends.jpg"; 
import freeFire from "./assets/freefire.jpg"; 
import pubg from "./assets/pubg.jpg";
import valorant from "./assets/valorant.jpg";
import genshin from "./assets/genshin.jpg";
import codm from "./assets/codm.jpg";
import honorKings from "./assets/honor_kings.jpg";
import mole from "./assets/ml.jpg";
import epep from "./assets/ff.jpg";
import pubeg from "./assets/pubeg.jpg";
import palo from "./assets/palo.jpg";
import bengsin from "./assets/gi.jpg";
import cod from "./assets/cod.jpg";
import hok from "./assets/hok.jpg";
import hsr from "./assets/hsr.jpg";
import lol from "./assets/lol.jpg";
import aov from "./assets/aov.jpg";
import fcmobile from "./assets/easport.jpg";
import ark from "./assets/ark.jpg";
import banner from "./assets/banner.jpg";
import bannerDown from "./assets/banner_down.png";
import logo from "./assets/icon.png"; 

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      {/* Header Section */}
      <header className="bg-[#202020] bg-opacity-80 p-4 shadow-md sticky top-0 z-50 transition-all duration-500 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <nav className="space-x-6 text-gray-300 font-bold">
              <a href="#" className="hover:text-white">Beranda</a>
              <a href="#" className="hover:text-white">Cek Transaksi</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 w-full">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#333] text-white rounded-full pl-10 pr-10 py-2 w-full transition-all duration-500 focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="bg-[#ff3131] px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:bg-transparent border border-[#ff3131]">Daftar</button>
            <button className="bg-[#ff3131] px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:bg-transparent border border-[#ff3131]">Masuk</button>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="p-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-[#333] rounded-[2rem] shadow-lg overflow-hidden">
            <img
              src={bannerDown}
              alt="Promo Banner"
              className="w-full h-auto object-cover rounded-[2rem] md:h-[40rem]"
            />
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="p-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">🔥 Populer Sekarang!</h2>
          <p className="text-gray-400 mb-6">
            Berikut adalah beberapa game yang paling populer saat ini.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[mobileLegends, codm, genshin, honorKings, pubg, valorant].map((gameImage, index) => (
              <div key={index} className="flex bg-[#333] p-4 rounded-lg items-center space-x-4 shadow-md transition-transform duration-300 hover:scale-105">
                <img src={gameImage} alt="Game" className="w-16 h-16 rounded-lg" />
                <div>
                  <h3 className="font-semibold">{['Mobile Legends', 'Call Of Duty Mobile', 'Genshin Impact', 'Honor Of Kings', 'PUBG Mobile', 'Valorant'][index]}</h3>
                  <p className="text-gray-400">{['Moonton', 'Activision', 'Hoyoverse', 'Tencent Games', 'Tencent Games', 'Riot Games'][index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Games Section */}
      <section className="p-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">💎 Game Lainnya</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { src: mole, title: "Mobile Legends", developer: "Moonton" },
              { src: pubeg, title: "PUBG", developer: "Tencent Games" },
              { src: palo, title: "Valorant", developer: "Riot Games" },
              { src: bengsin, title: "Genshin Impact", developer: "Hoyoverse" },
              { src: cod, title: "Call Of Duty Mobile", developer: "Activision" },
              { src: hok, title: "Honor Of Kings", developer: "Tencent" },
              { src: epep, title: "Free Fire", developer: "Garena" },
              { src: hsr, title: "Honkai Star Rail", developer: "Hoyoverse" },
              { src: lol, title: "League Of Legends", developer: "Riot Games" },
              { src: aov, title: "Arena Of Valor", developer: "Tencent Games" },
              { src: fcmobile, title: "FC™ Mobile", developer: "EA Mobile" },
              { src: ark, title: "Arknights", developer: "Hypergryph" }
            ].map((game, index) => (
              <div key={index} className="relative group">
                <img src={game.src} alt={game.title} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity rounded-lg "></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <p className="text-lg font-semibold">{game.title}</p>
                  <p className="text-sm">{game.developer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="font-medium bg-[#ff3131] px-6 py-2 rounded-full hover:bg-[#ff3131]">
              Tampilkan Lainnya...
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1c1c] py-12 px-8 mt-1">
        <img
          src={bannerDown}
          alt="Banner"
          className="w-full h-96 object-cover rounded-xl mb-12 shadow-lg"
        />
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-24 mb-5 hover:scale-110 transition-transform" />
          </div>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed font-bold">
            Akira Store adalah tempat top up games yang aman, murah, dan terpercaya. Proses cepat 1-3 Detik. Open 24 jam. Payment terlengkap.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
              <FaInstagram className="text-[#ff3131] text-3xl" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
              <FaTiktok className="text-[#ff3131] text-3xl" />
            </a>
            <a href="mailto:info@ourastore.com" className="hover:scale-110 transition-transform">
              <FaEnvelope className="text-[#ff3131] text-3xl" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-white mb-4">Peta Situs</h4>
              <a href="#" className="hover:text-white transition-colors">Beranda</a>
              <a href="#" className="hover:text-white transition-colors">Cek Transaksi</a>
              <a href="#" className="hover:text-white transition-colors">Hubungi Kami</a>
              <a href="#" className="hover:text-white transition-colors">Ulasan</a>
            </div>
            <div className="flex flex-col items-center md:items-center">
              <h4 className="font-semibold text-white mb-4">Dukungan</h4>
              <a href="#" className="hover:text-white transition-colors">Whatsapp</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <h4 className="font-semibold text-white mb-4">Legalitas</h4>
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
          <hr className="border-t border-gray-700 my-8" />
          <div className="text-center text-gray-400">
            © 2024 Akira Store. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
