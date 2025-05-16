import React from "react";

const Vision = () => {
  return (
    <>
      <section id="vision" className="container mx-auto py-32 px-4">
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
    </>
  );
};

export default Vision;
