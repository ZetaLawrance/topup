import React from "react";
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
  const whatsappLink = "https://wa.me/62895412974726";

  const handleRedirect = () => {
    window.open(whatsappLink, "_blank"); // Membuka link WhatsApp di tab baru
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
              { img: honorKings, title: "Honor Of Kings", dev: "Tencent Games" },
              { img: pubg, title: "PUBG Mobile", dev: "Tencent Games" },
              { img: valorant, title: "Valorant", dev: "Riot Games" },
            ].map((game, index) => (
              <div
                key={index}
                onClick={handleRedirect}
                className="flex bg-[#333] p-4 rounded-lg items-center space-x-4 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <img src={game.img} alt={game.title} className="w-16 h-16 rounded-lg" />
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
              { src: cod, title: "Call Of Duty Mobile", developer: "Activision" },
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
                onClick={handleRedirect}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={game.src}
                  alt={game.title}
                  className="w-full h-full object-cover rounded-xl group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3131]/70 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-white transform translate-y-6 group-hover:translate-y-0">
                  <p className="text-lg font-bold">{game.title}</p>
                  <p className="text-sm font-light text-gray-300">{game.developer}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ff3131] rounded-xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1c1c] py-12 px-8 mt-1">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default HomePage;
