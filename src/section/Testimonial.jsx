import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "สมชาย บุญเจริญ",
      quote: "ใช้บริการมาได้สักพักแล้วครับ ของถึงไว แพ็คดี ไม่เคยมีปัญหาเลย ชอบมากๆ",
    },
    {
      name: "อรอนงค์ ศรีสุข",
      quote: "ทีมงานน่ารักมาก บริการรวดเร็ว มีอะไรถามก็ตอบไว ดูแลดีเหมือนญาติกันเลยค่ะ",
    },
    {
      name: "ปรีชา มีทรัพย์",
      quote: "ตั้งแต่ใช้คลังนี้ จัดส่งของง่ายขึ้นเยอะ ไม่ต้องมานั่งแพ็คเองให้เหนื่อย ชีวิตดีขึ้นมากครับ",
    },
    {
      name: "สายฝน ใบบุญ",
      quote: "ตอนแรกก็ลังเล แต่พอลองใช้แล้วติดใจเลยค่ะ ประทับใจตั้งแต่วันแรก",
    },
    {
      name: "ธนา รัตนโชติ",
      quote: "ประหยัดเวลาได้เยอะมาก ผมมีเวลาทำอย่างอื่นเพิ่มขึ้นเยอะเลย ขอบคุณครับ",
    },
    {
      name: "นภัสสร ชื่นจิต",
      quote: "แพ็คของดี ไม่เคยเจอเคลมเลย ของไม่บุบไม่พัง ลูกค้าก็แฮปปี้ เราก็แฮปปี้ค่ะ",
    },
    {
      name: "เกรียงศักดิ์ มณีทอง",
      quote: "ราคาก็โอเค บริการดี มีระบบให้เช็คสถานะตลอด ไม่ต้องมานั่งห่วงเหมือนเมื่อก่อน",
    },
    {
      name: "กนกวรรณ ทองประเสริฐ",
      quote: "พูดตรงๆ คือประทับใจมากค่ะ ไม่ต้องมานั่งทำเองทุกขั้นตอน เหมือนมีทีมหลังบ้านมาช่วย",
    },
    {
      name: "อภิชาติ สุขใจ",
      quote: "ใช้บริการแล้วรู้สึกว่าธุรกิจเราดูมืออาชีพขึ้นอีกระดับ ส่งของไว ลูกค้าชอบ เราก็ดีใจ",
    },
    {
      name: "รัตนา มีทรัพย์",
      quote: "ถ้าใครกำลังหา fulfillment ดีๆ แนะนำที่นี่เลยค่ะ ของถึงไว บริการเป็นกันเองมากๆ",
    },
  ];

  return (
    <>
      <section className="container mx-auto py-32">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-text-header text-4xl">รีวิวจากลูกค้า</h1>
          <span className="block w-32 h-1 bg-secondary mt-2 mb-5"></span>
        </div>
        <Slider className="w-full" {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="p-3" key={index}>
              <div className="flex flex-col gap-4 p-7 shadow-lg mx-4 rounded-xl bg-white">
                <div className="flex justify-start items-center gap-5">
                  <div>
                    <img src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar" width={50} />
                  </div>
                  <p className="text-xl">{testimonial.name}</p>
                </div>

                <div className="py-6">
                  <p>{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Testimonial;
