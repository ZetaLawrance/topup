import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobileLegends from "../assets/mobilelegends.jpg";
import freeFire from "../assets/freefire.jpg";
import pubg from "../assets/pubg.jpg";
import valorant from "../assets/valorant.jpg";
import genshin from "../assets/genshin.jpg";
import codm from "../assets/codm.jpg";
import honorKings from "../assets/honor_kings.jpg";
import mole from "../assets/ml.jpg";
import epep from "../assets/ff.jpg";
import pubeg from "../assets/pubeg.jpg";
import palo from "../assets/palo.jpg";
import bengsin from "../assets/gi.jpg";
import cod from "../assets/cod.jpg";
import hok from "../assets/hok.jpg";
import hsr from "../assets/hsr.jpg";
import lol from "../assets/lol.jpg";
import aov from "../assets/aov.jpg";
import fcmobile from "../assets/easport.jpg";
import ark from "../assets/ark.jpg";
import bannerDown from "../assets/banner_down.png";
import logo from "../assets/icon.png";
import HeaderLayout from "../components/HeaderLayout";

const banners = [bannerDown, bannerDown, bannerDown];

const HomePage = () => {
  const navigate = useNavigate();

  const gameRoutes = {
    "Mobile Legends": "/mlbb",
    "Call Of Duty Mobile": "/codm",
    "Genshin Impact": "/genshin",
    "Honor Of Kings": "/hok",
    "PUBG Mobile": "/pubgm",
    Valorant: "/valorant",
  };

  const handleNavigation = (gameTitle) => {
    const route = gameRoutes[gameTitle];
    if (route) {
      navigate(route);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => {
      document.querySelectorAll(".slick-slide").forEach((slide) => {
        slide.classList.remove("scale-90", "opacity-75", "z-10");
      });

      setTimeout(() => {
        document
          .querySelector(`.slick-slide[data-index="${next - 1}"]`)
          ?.classList.add("scale-90", "opacity-75", "z-0");
        document
          .querySelector(`.slick-slide[data-index="${next + 1}"]`)
          ?.classList.add("scale-90", "opacity-75", "z-0");
      }, 0);
    },
    afterChange: (current) => {
      document.querySelectorAll(".slick-slide").forEach((slide) => {
        slide.classList.remove("scale-90", "opacity-75", "z-10");
      });

      document
        .querySelector(`.slick-slide[data-index="${current - 1}"]`)
        ?.classList.add("scale-90", "opacity-75", "z-0");
      document
        .querySelector(`.slick-slide[data-index="${current + 1}"]`)
        ?.classList.add("scale-90", "opacity-75", "z-0");
    },
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      <HeaderLayout />
      {/* Banner Section */}
      <section className="p-8">
        <div className="max-w-screen-xl mx-auto relative">
          <Slider {...settings}>
            {banners.map((banner, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#333] rounded-[2rem] shadow-lg overflow-hidden transform transition-transform duration-300">
                  <img
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-auto object-cover rounded-[2rem]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="p-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">🔥 Populer Sekarang!</h2>
          <p className="text-gray-400 mb-6">
            Berikut adalah beberapa game yang paling populer saat ini.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: mobileLegends, title: "Mobile Legends", dev: "Moonton" },
              { img: codm, title: "Call Of Duty Mobile", dev: "Activision" },
              { img: genshin, title: "Genshin Impact", dev: "Hoyoverse" },
              {
                img: honorKings,
                title: "Honor Of Kings",
                dev: "Tencent Games",
              },
              { img: pubg, title: "PUBG Mobile", dev: "Tencent Games" },
              { img: valorant, title: "Valorant", dev: "Riot Games" },
            ].map((game, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(game.title)}
                className="flex bg-[#333] p-4 rounded-lg items-center space-x-4 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{game.title}</h3>
                  <p className="text-gray-400">{game.dev}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Games Section */}
      <section className="p-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">💎 Daftar Game</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { src: mole, title: "Mobile Legends", developer: "Moonton" },
              { src: pubeg, title: "PUBG Mobile", developer: "Tencent Games" },
              { src: palo, title: "Valorant", developer: "Riot Games" },
              { src: bengsin, title: "Genshin Impact", developer: "Hoyoverse" },
              {
                src: cod,
                title: "Call Of Duty Mobile",
                developer: "Activision",
              },
              { src: hok, title: "Honor Of Kings", developer: "Tencent Games" },
              { src: epep, title: "Free Fire", developer: "Garena" },
              { src: hsr, title: "Honkai Star Rail", developer: "Hoyoverse" },
              { src: lol, title: "League Of Legends", developer: "Riot Games" },
              { src: aov, title: "Arena Of Valor", developer: "Tencent Games" },
              { src: fcmobile, title: "FC™ Mobile", developer: "EA Mobile" },
              { src: ark, title: "Arknights", developer: "Hypergryph" },
            ].map((game, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(game.title)}
                className="relative group cursor-pointer"
              >
                <img
                  src={game.src}
                  alt={game.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity rounded-lg"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <p className="text-lg font-semibold">{game.title}</p>
                  <p className="text-sm">{game.developer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1c1c] py-12 px-8 mt-1">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-24 mb-5 hover:scale-110 transition-transform"
            />
          </div>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed font-bold">
            Akira Store adalah tempat top up games yang aman, murah, dan
            terpercaya. Proses cepat 1-3 Detik. Open 24 jam. Payment terlengkap.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram className="text-[#ff3131] text-3xl" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTiktok className="text-[#ff3131] text-3xl" />
            </a>
            <a
              href="mailto:info@ourastore.com"
              className="hover:scale-110 transition-transform"
            >
              <FaEnvelope className="text-[#ff3131] text-3xl" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-white mb-4">Peta Situs</h4>
              <a href="#" className="hover:text-white transition-colors">
                Beranda
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cek Transaksi
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Hubungi Kami
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Ulasan
              </a>
            </div>
            <div className="flex flex-col items-center md:items-center">
              <h4 className="font-semibold text-white mb-4">Dukungan</h4>
              <a href="#" className="hover:text-white transition-colors">
                Whatsapp
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Email
              </a>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <h4 className="font-semibold text-white mb-4">Legalitas</h4>
              <a href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
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
