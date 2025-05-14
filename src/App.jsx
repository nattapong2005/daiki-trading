import React from "react";
import Navbar from "./components/Navbar";
import { FaClipboard, FaHandshake, FaMedal, FaTruck, FaWarehouse } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { GoPackage } from "react-icons/go";
import Footer from "./components/Footer";

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

  const services = [
    {
      title: "การจัดเก็บสินค้า",
      description: "บริการจัดเก็บสินค้าในคลังที่มีความปลอดภัยและทันสมัย",
      icon: <FaWarehouse />,
    },
    {
      title: "การขนส่งสินค้า",
      description: "บริการขนส่งสินค้าที่รวดเร็ว ปลอดภัย และตรงเวลา",
      icon: <FaTruck />,
    },
    {
      title: "การบรรจุและแพ็คสินค้า",
      description: "บริการจัดการสินค้าคงคลังที่มีประสิทธิภาพ",
      icon: <GoPackage />,
    },
    {
      title: "การจัดการสินค้าคงคลัง",
      description: "บริการจัดการสินค้าคงคลังที่มีประสิทธิภาพ",
      icon: <FaClipboard />,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Header ====================================================================================================================== */}
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
              <button className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer">เริ่มกันเลย</button>
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
      {/* Header ====================================================================================================================== */}

      {/* Service ====================================================================================================================== */}
      <section className="container mx-auto py-32 px-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-text-header text-4xl">เกี่ยวกับ Daiki Trading</h1>
          <span className="block w-32 h-1 bg-secondary mx-auto mt-2 mb-5"></span>
          <p className="text-gray-600">
            บริษัท Daiki Trading เป็นผู้นำด้านการให้บริการคลังสินค้าและการขนส่งที่มีประสบการณ์และความเชี่ยวชาญ
          </p>
          <p className="text-gray-600">มุ่งมั่นที่จะมอบบริการที่มีคุณภาพสูงสุดให้กับลูกค้าของเรา</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {about_us.map((about, index) => (
            <div key={index} className="bg-white shadow-lg hover:shadow-2xl p-6 rounded-md border-l-4 border-secondary duration-700 transition-all">
              <div className="text-4xl text-secondary mb-2 bg-secondary/40 inline-block p-3 rounded-full">{about.icon}</div>
              <h2 className="font-bold text-lg mb-2 text-text-header">{about.title}</h2>
              <p className="text-gray-600">{about.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Service ====================================================================================================================== */}

      {/* About Us ====================================================================================================================== */}
      <section className="container mx-auto py-32 px-4">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="w-full md:w-1/2 mt-5 justify-center ">
            <img src="./img/service.jpg" alt="บริการของ Daiki" className="w-full h-auto object-contain rounded-lg shadow-2xl" />
          </div>
          <div className="max-w-xl 2xl:max-w-2xl sm:pl-10 ">
            <div className="flex flex-col">
              <h1 className="text-text-header text-4xl">บริการของเรา</h1>
              <span className="block w-32 h-1 bg-secondary mt-2 mb-5"></span>
            </div>
            <p className="text-lg text-gray-700 mb-5">
              Daiki เป็นผู้ให้บริการ Fulfillment ครบวงจรสำหรับธุรกิจ E-commerce ที่ต้องการเติบโตอย่างมั่นคง
              เรามุ่งมั่นที่จะมอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าของคุณ
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <div key={index} className="flex items-start bg-white shadow-sm p-5 rounded-lg border border-secondary hover:shadow-xl transition-all duration-500">
                  <div className="inline-block bg-secondary/40 mr-4 p-3 rounded-full text-4xl text-secondary">{service.icon}</div>
                  <div>
                    <h2 className="text-md font-bold mb-2 text-secondary/60">{service.title}</h2>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About Us ====================================================================================================================== */}

      {/* Vision ====================================================================================================================== */}
      <section className="container mx-auto py-32 px-4">
        <div className="flex flex-wrap flex-row-reverse items-center justify-between gap-10">
          <div className="w-full md:w-1/2 mt-5 justify-center">
            <img src="./img/vision.jpg" alt="บริการของ Daiki" className="w-full h-auto object-contain rounded-lg shadow-2xl" />
          </div>
          <div className="max-w-xl sm:pl-10">
            <div className="flex flex-col">
              <h1 className="text-text-header text-4xl">วิสัยทัศน์องค์กร</h1>
              <span className="block w-32 h-1 bg-secondary mt-2 mb-5"></span>
            </div>
            <p className="text-lg text-gray-700 mb-5">
              Daiki เป็นผู้ให้บริการ Fulfillment ครบวงจรสำหรับธุรกิจ E-commerce ที่ต้องการเติบโตอย่างมั่นคง
              เรามุ่งมั่นที่จะมอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าของคุณ
            </p>
            <p className="text-lg text-gray-700 mb-5">
              เราทำงานภายใต้แนวคิด “Move Fast & Break Things” กล้าล้มเหลวหลายครั้งเพื่อเติบโต 10 เท่า มุ่งสู่การเป็นที่ 1 ในทุกด้าน
              โดยยึดลูกค้าเป็นที่หนึ่ง พนักงานคือหัวใจ และผู้ถือหุ้นตามมา เราเปิดกว้างสำหรับทุกคน ไม่จำกัดประสบการณ์ แค่มีความรับผิดชอบ
              สู้งาน และรักการเรียนรู้
            </p>
          </div>
        </div>
      </section>

      {/* About Us ====================================================================================================================== */}

















      <Footer/>
    </>
  );
};

export default App;
