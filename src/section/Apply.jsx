import React from "react";

const Apply = () => {
  return (
    <>
      <section id="apply" className="container mx-auto px-5 py-32">
        <div data-aos="fade-up" data-aos-delay="50" className="flex justify-center items-center ">
          <div className="bg-white shadow-xl rounded-lg p-8 max-w-5xl w-full border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              {/* <LucideIcons.Briefcase className="h-8 w-8 text-secborder-secondary" /> */}
              <h1 className="text-xl sm:text-3xl text-text-header">แบบฟอร์มสมัครงาน</h1>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-secondary to-secondary/30 rounded-full mb-8"></div>

            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* ชื่อ-นามสกุล (ไทย) */}
                <div className="mb-4">
                  <label htmlFor="thaiName" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    {/* <LucideIcons.User className="h-5 w-5 text-secborder-secondary" /> */}
                    ชื่อ-นามสกุล (ไทย)
                  </label>
                  <input
                    type="text"
                    id="thaiName"
                    className="border-b-2 border-secondary p-3 w-full rounded-sm focus:border-secondary focus:outline-none transition-colors"
                    placeholder="กรอกชื่อ-นามสกุล ไทย"
                    required
                  />
                </div>

                {/* เพศ */}
                <div className="mb-4">
                  <label htmlFor="gender" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    {/* <LucideIcons.User className="h-5 w-5 text-secborder-secondary" /> */}
                    เพศ
                  </label>
                  <select
                    id="gender"
                    className="border-b-2 border-secondary p-3 w-full rounded-sm focus:border-secondary focus:outline-none transition-colors bg-white"
                    required
                  >
                    <option value="" selected>
                      เลือกเพศ
                    </option>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                    <option value="other">อื่นๆ</option>
                  </select>
                </div>

                {/* เบอร์โทร */}
                <div className="mb-4">
                  <label htmlFor="phone" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    {/* <LucideIcons.Phone className="h-5 w-5 text-secborder-secondary" /> */}
                    เบอร์โทร
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="border-b-2 border-secondary p-3 w-full rounded-sm focus:border-secondary focus:outline-none transition-colors"
                    placeholder="กรอกเบอร์โทร"
                    required
                  />
                </div>
                {/* อีเมล */}
                <div className="mb-4">
                  <label htmlFor="email" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    {/* <LucideIcons.Mail className="h-5 w-5 text-secborder-secondary" /> */}
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-b-2 border-secondary p-3 w-full rounded-sm focus:border-secondary focus:outline-none transition-colors"
                    placeholder="กรอกอีเมล"
                    required
                  />
                </div>
                {/* ตำแหน่งที่สนใจ */}
                <div className="mb-4">
                  <label htmlFor="position" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    {/* <LucideIcons.Briefcase className="h-5 w-5 text-secborder-secondary" /> */}
                    ตำแหน่งที่สนใจ
                  </label>
                  <select
                    id="gender"
                    className="border-b-2 border-secondary p-3 w-full rounded-sm focus:border-secondary focus:outline-none transition-colors bg-white"
                    required
                  >
                    <option value="" selected>
                      เลือกตำแหน่ง
                    </option>
                    <option value="IA">ตรวจสอบภายใน IA</option>
                    <option value="ผู้ช่วยผู้บริหาร">ผู้ช่วยผู้บริหาร</option>
                    <option value="เลขา">เลขา</option>
                    <option value="ไลฟ์สด">ไลฟ์สด</option>
                    <option value="การตลาด">การตลาด</option>
                    <option value="Sale Admin">Sale Admin</option>
                    <option value="Graphic">Graphic</option>
                    <option value="Content">Content</option>
                    <option value="ลูกค้าสัมพันธ์">ลูกค้าสัมพันธ์</option>
                    <option value="ประสานงาน">ประสานงาน</option>
                    <option value="จัดซื้อ">จัดซื้อ</option>
                    <option value="บัญชี">บัญชี</option>
                    <option value="บุคคล">บุคคล</option>
                    <option value="IT">IT</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>

                {/* เงินเดือนที่ต้องการ */}
                <div className="mb-4">
                  <label htmlFor="salary" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    {/* <LucideIcons.DollarSign className="h-5 w-5 text-secborder-secondary" /> */}
                    เงินเดือนที่ต้องการ
                  </label>
                  <input
                    type="text"
                    id="salary"
                    className="border-b-2 border-secondary p-3 w-full rounded-sm focus:border-secondary focus:outline-none transition-colors"
                    placeholder="กรอกจำนวนเงินเดือน"
                    required
                  />
                </div>

                {/* ไฟล์เรซูเม่ */}
                <div className="mb-4 sm:col-span-2 relative">
                  <label htmlFor="resume" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    {/* <LucideIcons.FileText className="h-5 w-5 text-secborder-secondary" /> */}
                    ไฟล์เรซูเม่
                  </label>
                  <div className="flex items-center relative">
                    <input
                      type="file"
                      id="resume"
                      className="border-b-2 border-secondary p-3 w-full rounded-sm focus:border-secondary focus:outline-none transition-colors pr-10 cursor-pointer"
                      required
                    />
                    {/* <LucideIcons.File className="text-secborder-secondary absolute right-3" size={30} /> */}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-secondary to-secondary/40 text-white font-semibold w-full py-3 rounded-lg hover:to-secondary transition duration-300 cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  {/* <LucideIcons.Briefcase className="h-5 w-5" /> */}
                  สมัครตอนนี้
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-sm mt-4">ข้อมูลของท่านจะถูกเก็บเป็นความลับตามนโยบายความเป็นส่วนตัวของบริษัท</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply;
