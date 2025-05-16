import React from 'react'

const Footer = () => {
  return (
  <>
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-secondary">Daiki Trading</h3>
                        <p className="text-gray-300">บริการด้านการจัดเก็บและขนส่งสินค้าที่มีคุณภาพ </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-secondary">บริการของเรา</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-secondary transition">การจัดเก็บสินค้า</a></li>
                            <li><a href="#" className="hover:text-secondary transition">การขนส่งสินค้า</a></li>
                            <li><a href="#" className="hover:text-secondary transition">การบรรจุและแพ็คสินค้า</a></li>
                            <li><a href="#" className="hover:text-secondary transition">การจัดการสินค้าคงคลัง</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-secondary">เกี่ยวกับเรา</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-secondary transition">หน้าหลัก</a></li>
                            <li><a href="#about" className="hover:text-secondary transition">เกี่ยวกับเรา</a></li>
                            <li><a href="#service" className="hover:text-secondary transition">บริการของเรา</a></li>
                            <li><a href="#apply" className="hover:text-secondary transition">ร่วมงานกับเรา</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-secondary">ติดต่อเรา</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>3/3 หมู่ที่ 3 ตำบลสามควายเผือก อำเภอเมืองนครปฐม จ.นครปฐม 73000</li>
                            <li>โทร: 092-765-9777</li>
                            <li>อีเมล: hr.likeshop@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Daiki Trading. สงวนลิขสิทธิ์ทั้งหมด</p>
                </div>
            </div>
        </footer>
  </>
  )
}

export default Footer
