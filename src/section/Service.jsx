import React from "react";
import { FaClipboard, FaTruck, FaWarehouse } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const Service = () => {

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
      <section id="service" className="container mx-auto py-32 px-4">
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
                <div
                  key={index}
                  className="flex items-start bg-white shadow-sm p-5 rounded-lg border border-secondary hover:shadow-xl transition-all duration-500"
                >
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
    </>
  );
};

export default Service;
