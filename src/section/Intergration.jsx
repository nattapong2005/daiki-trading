import React from "react";

import { FaWarehouse, FaBoxOpen, FaTruckMoving } from "react-icons/fa";

const steps = [
  {
    title: "1. รับสินค้าเข้าคลัง",
    icon: <FaWarehouse className="text-secondary w-8 h-8" />,
    description: "ตรวจสอบสินค้าและลงข้อมูลเข้าสู่ระบบ พร้อมจัดเก็บในพื้นที่ที่เหมาะสม",
  },
  {
    title: "2. แพ็คสินค้า",
    icon: <FaBoxOpen className="text-secondary w-8 h-8" />,
    description: "หยิบสินค้าและแพ็คตามคำสั่งซื้ออย่างมีประสิทธิภาพ เตรียมพร้อมสำหรับจัดส่ง",
  },
  {
    title: "3. จัดส่งสินค้า",
    icon: <FaTruckMoving className="text-secondary w-8 h-8" />,
    description: "จัดส่งถึงลูกค้าอย่างรวดเร็ว พร้อมระบบติดตามสถานะสินค้าแบบเรียลไทม์",
  },
];
const Intergration = () => {
  return (
    <>
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-5">
            <h1 className="text-text-header text-4xl">การทำงานของเรา</h1>
            <span className="block w-32 h-1 bg-secondary mt-2 mb-5"></span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex-1 text-center">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-y-[-50%] translate-x-[50%] w-full h-0.5 bg-gray-300 z-0"></div>
                )}

                <div className="relative bg-white border border-gray-200 shadow-md rounded-lg p-6 z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary/40 rounded-full flex items-center justify-center mx-auto">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Intergration;
