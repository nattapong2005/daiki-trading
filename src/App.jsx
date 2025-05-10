import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <section className="bg-primary min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Daiki <span className="font-black text-secondary">Trading</span></h1>
            <p className="text-lg text-white mb-6">
              การขนส่งและสถานที่เก็บสินค้า โดยให้บริการด้าน กิจกรรมที่เกี่ยวกับคลังสินค้าและการจัดเก็บสินค้าอื่นๆซึ่งมิได้จัดประเภทไว้ในที่อื่น
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">เริ่มกันเลย</button>
              <button className="px-6 py-3 border border-gray-300 text-white rounded-lg hover:bg-gray-100 hover:text-black">ติดต่อเรา</button>
            </div>
          </div>

          {/* Right Image - Hidden on mobile */}
          <div className="w-full md:w-1/2 mt-32 justify-center hidden md:block">
            <img src="./img/header.png" alt="Hero" className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain" />
          </div>
        </div>
      </section>


      <section className="container mx-auto py-32">
        <h1 className="text-black">Test</h1>
      </section>
    </div>
  );
};

export default App;
