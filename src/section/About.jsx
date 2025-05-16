import React from "react";
import { FaHandshake, FaMedal } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
const About = () => {

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
    <>
      <section id="about" className="container mx-auto py-32 px-4">
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
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl p-6 rounded-md border-l-4 border-secondary duration-700 transition-all"
            >
              <div className="text-4xl text-secondary mb-2 bg-secondary/40 inline-block p-3 rounded-full">{about.icon}</div>
              <h2 className="font-bold text-lg mb-2 text-text-header">{about.title}</h2>
              <p className="text-gray-600">{about.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
