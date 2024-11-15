import React from "react";
import HeaderLayout from "../components/HeaderLayout";
import bannerDown from "../assets/banner_down.png";

const Mlbb = () => {
  return (
    <>
      <HeaderLayout />

      <section className="">
        <div className="max-w-screen-xxl mx-auto">
          <div className="bg-[#333] shadow-lg overflow-hidden">
            <img
              src={bannerDown}
              alt="Promo Banner"
              className="w-full h-auto object-cover md:h-[22rem]"
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#1c1c1c] p-8">
        
      </section>
    </>
  );
};

export default Mlbb;
