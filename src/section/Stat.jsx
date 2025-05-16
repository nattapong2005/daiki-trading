import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Stat = () => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
  return (
    <>
      <section ref={ref} className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">ทำไมต้องเลือกเรา</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="stats-item md:w-1/3 text-center p-6">
              <div className="text-5xl font-bold text-blue-800 mb-2">
                {inView ? <CountUp start={0} end={98} duration={2} suffix="%" /> : "0"}
              </div>
              <p className="text-xl text-primary">ความพึงพอใจของลูกค้า</p>
            </div>

            <div className="stats-item md:w-1/3 text-center p-6">
              <div className="text-5xl font-bold text-blue-800 mb-2">
                {inView ? <CountUp start={0} end={99} duration={2} suffix="%" /> : "0"}
              </div>
              <p className="text-xl text-primary">การจัดส่งตรงเวลา</p>
            </div>

            <div className="stats-item md:w-1/3 text-center p-6">
              <div className="text-5xl font-bold text-blue-800 mb-2">
                {inView ? <CountUp start={0} end={5} duration={2} suffix="+" /> : "0"}
              </div>
              <p className="text-xl text-primary">ประสบการณ์</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stat;
