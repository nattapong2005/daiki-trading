import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <section id="contact" className="container mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-text-header">ติดต่อเรา</h1>
          <span className="block w-32 h-1 bg-secondary mx-auto mt-2 mb-5"></span>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">เราพร้อมให้คำปรึกษาและบริการครบวงจรสำหรับธุรกิจ E-commerce ของคุณ</p>
        </div>

      <div className="flex justify-center items-center ">
          <div className="max-w-7xl ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="bg-white shadow-sm p-5 py-5 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <FaMapMarkerAlt className="text-4xl mt-3 mb-5 text-secondary" />
                <h2 className="text-xl mb-3">ที่อยู่</h2>
                <p>475/4-5 ถ.ทหารบก ตำบลบ่อพลับ อำเภอเมืองนครปฐม</p>
                <p>จังหวัดนครปฐม 73000</p>
              </div>
            </div>
            <div className="bg-white shadow-sm p-5 py-5 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <FaPhoneAlt className="text-4xl mt-3 mb-5 text-secondary" />
                <h2 className="text-xl mb-3">เบอร์โทรศัพท์</h2>
                <p>092-765-9777</p>
              </div>
            </div>
            <div className="bg-white shadow-sm p-5 py-5 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <IoMdMail className="text-4xl mt-3 mb-5 text-secondary" />
                <h2 className="text-xl mb-3">อีเมล</h2>
                <p>hr.likeshop@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">ส่งข้อความถึงเรา</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อ-นามสกุล <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="กรุณากรอกชื่อ-นามสกุลของคุณ"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  อีเมล <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  เบอร์โทรศัพท์ (ถ้ามี)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="08x-xxx-xxxx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  หัวข้อเรื่อง <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="เช่น สอบถามเกี่ยวกับบริการ..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  ข้อความ <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="รายละเอียดที่ต้องการสอบถาม..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-xl cursor-pointer shadow-sm text-base font-medium text-white bg-secondary hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out"
                >
                  {/* <Send size={20} className="mr-2" /> */}
                  ส่งข้อความ
                </button>
              </div>
            </form>
          </div>

          <div className="h-full shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.25874629665634!2d100.1130891071644!3d13.83483693073642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2ef0f9c2e435f%3A0x9401445fbf5567bf!2z4LiE4Lil4Lix4LiH4Liq4Li04LiZ4LiE4LmJ4Liy4LiB4Lil4Liy4LiHIOC4muC4o-C4tOC4qeC4seC4lyDguKHguKvguLLguJfguKPguLHguJ7guKLguYwg4Lif4Li14LiUIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sth!2sth!4v1747382874823!5m2!1sth!2sth"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
