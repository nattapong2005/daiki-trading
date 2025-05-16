import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-primary min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Daiki <span className="font-black text-secondary">Trading</span>
            </h1>
            <div className="flex flex-col text-sm sm:text-lg">
              <p className=" text-white">บริการด้านการจัดเก็บและขนส่งสินค้าที่มีคุณภาพ ปลอดภัย และตรงเวลา</p>
              <p className="text-white mb-6"> เพื่อตอบสนองความต้องการทางธุรกิจของคุณ</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                เริ่มกันเลย
              </button>
              <button className="px-6 py-3 border border-gray-300 text-white rounded-lg hover:bg-gray-100 hover:text-black transition-all duration-300 cursor-pointer">
                ติดต่อเรา
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-32 justify-center hidden md:block">
            <img src="./img/header.png" alt="Hero" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
