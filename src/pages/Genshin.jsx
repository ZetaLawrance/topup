import React, { useState } from "react";
import HeaderLayout from "../components/HeaderLayout";
import bannerDown from "../assets/banner_down.png"; // Ganti dengan banner Anda

const Genshin = () => {
  const [formData, setFormData] = useState({
    uid: "",
    server: "",
    nominal: "",
    quantity: 1,
    payment: "",
    whatsapp: "",
    promoCode: "",
  });

  // Update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const { uid, server, nominal, quantity, payment, whatsapp, promoCode } = formData;
    const message = `Halo, saya ingin melakukan pembelian:
- UID: ${uid}
- Server: ${server}
- Nominal: ${nominal}
- Jumlah: ${quantity}
- Pembayaran: ${payment}
- No WhatsApp: ${whatsapp}
- Kode Promo: ${promoCode || "Tidak ada"}
    
Tolong bantu prosesnya. Terima kasih!`;

    const waLink = `https://wa.me/62895412974726?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

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
          {/* Left Section */}
          <div className="md:col-span-4 space-y-6">
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
          </div>

          {/* Right Section */}
          <div className="md:col-span-8 space-y-6">
            {/* Account Info Input */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">1. Masukkan Data Akun</h3>
              <div className="flex mt-2 space-x-4">
                <input
                  type="text"
                  name="uid"
                  placeholder="Masukkan UID"
                  value={formData.uid}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-[#333] text-white border border-gray-600"
                />
                <select
                  name="server"
                  value={formData.server}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-[#333] text-white border border-gray-600"
                >
                  <option value="">Pilih Server</option>
                  <option value="Asia">Asia</option>
                  <option value="America">America</option>
                  <option value="Europe">Europe</option>
                  <option value="TW/HK/MO">TW/HK/MO</option>
                </select>
              </div>
            </div>

            {/* Nominal Selection */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">2. Pilih Nominal</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <button
                  className={`p-3 rounded-lg text-white text-center border ${
                    formData.nominal === "60 GC - Rp 12,326" ? "bg-gray-700" : "bg-[#333]"
                  }`}
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      nominal: "60 GC - Rp 12,326",
                    }))
                  }
                >
                  60 GC - Rp 12,326
                </button>
                <button
                  className={`p-3 rounded-lg text-white text-center border ${
                    formData.nominal === "330 GC - Rp 62,861" ? "bg-gray-700" : "bg-[#333]"
                  }`}
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      nominal: "330 GC - Rp 62,861",
                    }))
                  }
                >
                  330 GC - Rp 62,861
                </button>
              </div>
            </div>

            {/* Payment and Contact Section */}
            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">4. Pilih Pembayaran</h3>
              <div className="flex flex-col space-y-4 mt-4">
                <button
                  className={`p-3 rounded-lg text-left ${
                    formData.payment === "Akira Coin - Max Rp 0" ? "bg-gray-700" : "bg-[#333]"
                  }`}
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      payment: "Akira Coin - Max Rp 0",
                    }))
                  }
                >
                  Akira Coin - Max Rp 0
                </button>
                <button
                  className={`p-3 rounded-lg text-left ${
                    formData.payment === "QRIS OVO DANA GOPAY SHOPEEPAY, DLL - Min Rp 10,000"
                      ? "bg-gray-700"
                      : "bg-[#333]"
                  }`}
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      payment: "QRIS OVO DANA GOPAY SHOPEEPAY, DLL - Min Rp 10,000",
                    }))
                  }
                >
                  QRIS OVO DANA GOPAY SHOPEEPAY, DLL - Min Rp 10,000
                </button>
              </div>
            </div>

            <div className="bg-[#2e2e2e] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">5. Detail Kontak</h3>
              <input
                type="text"
                name="whatsapp"
                placeholder="Masukkan No WhatsApp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full p-2 mt-2 rounded bg-[#333] text-white border border-gray-600"
              />
            </div>

            <button
              className="w-full p-4 bg-[#b08968] rounded-lg text-white font-bold mt-6"
              onClick={handleSubmit}
            >
              Pesan Sekarang!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Genshin;
