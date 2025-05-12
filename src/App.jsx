import React from "react";
import Navbar from "./components/Navbar";
import { FaHandshake, FaMedal } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const App = () => {
  const about_us = [
    {
      title: "ประสบการณ์",
      description: "ด้วยประสบการณ์มากกว่า 5 ปี เรามีความเชี่ยวชาญในการจัดการคลังสินค้าและการขนส่งที่มีประสิทธิภาพ",
      icon: <FaMedal />,
    },
    {
      title: "ความน่าเชื่อถือ",
      description: "เรามุ่งมั่นที่จะสร้างความไว้วางใจกับลูกค้าด้วยการให้บริการที่ตรงเวลาและมีคุณภาพ",
      icon: <FaHandshake />,
    },
    {
      title: "นวัตกรรม",
      description: "เรานำเทคโนโลยีและนวัตกรรมใหม่ๆ มาใช้ในการพัฒนาระบบการจัดการคลังสินค้าและการขนส่ง",
      icon: <GrTechnology />,
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Header ====================================================================================================================== */}
      <section className="bg-primary min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Daiki <span className="font-black text-secondary">Trading</span>
            </h1>
            <p className="text-lg text-white mb-6">
              การขนส่งและสถานที่เก็บสินค้า โดยให้บริการด้าน
              กิจกรรมที่เกี่ยวกับคลังสินค้าและการจัดเก็บสินค้าอื่นๆซึ่งมิได้จัดประเภทไว้ในที่อื่น
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">เริ่มกันเลย</button>
              <button className="px-6 py-3 border border-gray-300 text-white rounded-lg hover:bg-gray-100 hover:text-black">
                ติดต่อเรา
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-32 justify-center hidden md:block">
            <img src="./img/header.png" alt="Hero" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
      {/* Header ====================================================================================================================== */}

      {/* Service ====================================================================================================================== */}
      <section className="container mx-auto py-32 px-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black text-4xl">เกี่ยวกับ Daiki Trading</h1>
          <span className="block w-32 h-1 bg-secondary mx-auto mt-2 mb-5"></span>
          <p className="text-gray-600">
            บริษัท Daiki Trading เป็นผู้นำด้านการให้บริการคลังสินค้าและการขนส่งที่มีประสบการณ์และความเชี่ยวชาญ
          </p>
          <p className="text-gray-600">มุ่งมั่นที่จะมอบบริการที่มีคุณภาพสูงสุดให้กับลูกค้าของเรา</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {about_us.map((about, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-md border-l-2 border-secondary">
              <div className="text-4xl text-secondary mb-2 bg-secondary/40 inline-block p-3 rounded-full">{about.icon}</div>
              <h2 className="font-bold text-lg mb-2">{about.title}</h2>
              <p className="text-gray-600">{about.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Service ====================================================================================================================== */}

      <section className="container mx-auto py-32 px-4">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="w-full md:w-1/2 mt-5 justify-center ">
            <img src="./img/service.jpg" alt="บริการของ Daiki" className="w-full h-auto object-contain rounded-lg shadow-2xl" />
          </div>
          <div className="max-w-xl sm:pl-10">
            <div className="flex flex-col">
              <h1 className="text-black text-4xl">บริการของเรา</h1>
              <span className="block w-32 h-1 bg-secondary mt-2 mb-5"></span>
            </div>
            <p className="text-lg text-gray-700 mb-5">
              Daiki เป็นผู้ให้บริการ Fulfillment ครบวงจรสำหรับธุรกิจ E-commerce ที่ต้องการเติบโตอย่างมั่นคง
              เรามุ่งมั่นที่จะมอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าของคุณ
            </p>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
