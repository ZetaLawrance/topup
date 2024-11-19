import React from "react";
import HeaderLayout from "../components/HeaderLayout";
import bannerDown from "../assets/banner_down.png";

const Genshin = () => {
  return (
    <>
      <HeaderLayout />

      {/* Banner Section */}
      <section className="bg-[#333]">
        <div className="max-w-screen-xxl mx-auto shadow-lg overflow-hidden">
          <img
            src={bannerDown}
            alt="Promo Banner"
            className="w-full h-auto object-cover md:h-[22rem]"
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="min-h-screen bg-[#1c1c1c] p-8 text-white">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Left Section: Description & Reviews */}
          <div className="md:col-span-4 space-y-6">
            {/* Description Panel */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Deskripsi dan cara melakukan transaksi</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-300 list-decimal list-inside">
                <li>Masukkan ID & server</li>
                <li>Pilih Nominal</li>
                <li>Masukkan jumlah</li>
                <li>Pilih Pembayaran</li>
                <li>Tulis Kode Promo (jika ada)</li>
                <li>Masukkan No WhatsApp</li>
                <li>Klik Order Now & lakukan Pembayaran</li>
                <li>GC otomatis masuk ke akun game</li>
              </ul>
            </div>

            {/* Reviews Panel */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Ulasan</h2>
              <div className="flex items-center mt-4">
                <span className="text-yellow-500 text-3xl font-bold">4.99</span>
                <span className="ml-2 text-gray-400">/ 5.0</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Pelanggan merasa puas dengan produk ini. Dari 4.95rb ulasan.</p>
              <div className="mt-4">
                {/* Individual reviews */}
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>628****257: "Puas banget topup disini"</li>
                  <li>628****679: "Proses cepat banget"</li>
                  <li>628****945: "Proses cepat banget"</li>
                  <li>628****584: "Harganya murah"</li>
                </ul>
                <button className="mt-4 text-blue-500">Lihat semua ulasan</button>
              </div>
            </div>
          </div>

          {/* Right Section: Transaction Form */}
          <div className="md:col-span-8 space-y-6">
            {/* Account Info Input */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">1. Masukkan Data Akun</h3>
              <div className="flex mt-2 space-x-4">
                <input
                  type="text"
                  placeholder="Masukkan UID"
                  className="w-full p-2 rounded bg-[#333] text-white border border-gray-600"
                />
                <select className="w-full p-2 rounded bg-[#333] text-white border border-gray-600">
                  <option>Pilih Server</option>
                  {/* Add server options here */}
                </select>
              </div>
            </div>

            {/* Nominal Selection */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">2. Pilih Nominal</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {/* Add Nominal options here */}
                <button className="p-3 bg-[#333] rounded-lg text-white text-center border border-gray-700 hover:bg-gray-700">
                  60 GC - Rp 12,326
                </button>
                <button className="p-3 bg-[#333] rounded-lg text-white text-center border border-gray-700 hover:bg-gray-700">
                  330 GC - Rp 62,861
                </button>
                {/* Repeat for other options */}
              </div>
            </div>

            {/* Quantity Input */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md flex items-center space-x-4">
              <h3 className="text-lg font-bold">3. Masukkan Jumlah Pembelian</h3>
              <div className="flex items-center space-x-2">
                <button className="bg-[#555] p-2 rounded text-white">-</button>
                <input
                  type="number"
                  className="w-16 p-2 rounded bg-[#333] text-white border border-gray-600"
                  defaultValue={1}
                />
                <button className="bg-[#555] p-2 rounded text-white">+</button>
              </div>
            </div>

            {/* Payment Selection */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">4. Pilih Pembayaran</h3>
              <div className="flex flex-col space-y-4 mt-4">
                <button className="p-3 bg-[#333] rounded-lg text-white text-left border border-gray-700 hover:bg-gray-700">
                  Akira Coin - Max Rp 0
                </button>
                <button className="p-3 bg-[#333] rounded-lg text-white text-left border border-gray-700 hover:bg-gray-700">
                  QRIS OVO DANA GOPAY SHOPEEPAY, DLL - Min Rp 10,000
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">5. Detail Kontak</h3>
              <input
                type="text"
                placeholder="Masukkan No WhatsApp"
                className="w-full p-2 mt-2 rounded bg-[#333] text-white border border-gray-600"
              />
            </div>

            {/* Promo Code */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">6. Kode Promo</h3>
              <div className="flex space-x-4 mt-2">
                <input
                  type="text"
                  placeholder="Masukkan Kode Promo"
                  className="w-full p-2 rounded bg-[#333] text-white border border-gray-600"
                />
                <button className="p-2 bg-[#555] rounded text-white">Gunakan</button>
              </div>
            </div>

            {/* Order Button */}
            <button className="w-full p-4 bg-[#b08968] rounded-lg text-white font-bold mt-6">
              Pesan Sekarang!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Genshin;
  