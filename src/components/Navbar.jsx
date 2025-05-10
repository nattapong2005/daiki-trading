import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", text: "หน้าหลัก" },
    { path: "/about", text: "เกี่ยวกับ" },
    { path: "/apply", text: "ร่วมงานกับเรา" },
    // { path: "/contact", text: "ติดต่อเรา" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute w-full top-0 left-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex flex-col py-1.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center text-2xl font-black space-x-2" href="/">
          <img className="w-[100px] sm:w-[150px]" src="./img/logo.png" alt="Logo" />
        </div>
        <button className="absolute right-5 mt-1 cursor-pointer text-xl sm:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          <div className="relative w-6 h-5">
            <span
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ${isOpen ? "rotate-45 top-2" : "top-0"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-black top-2 transition-all duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ${isOpen ? "-rotate-45 top-2" : "top-4"}`}
            ></span>
          </div>
        </button>

        <nav
          className={`
            sm:block sm:py-0
            overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-64 opacity-100 p-5" : "max-h-0 opacity-0 sm:opacity-100 sm:max-h-full"}
          `}
        >
          <ul className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-5 sm:items-center">
            {navItems.map((nav, index) => (
              <li key={index} className="group relative w-max">
                <a
                  href={nav.path}
                  className="flex items-center gap-2 transition-colors duration-200 group-hover:text-primary relative px-2 py-1 rounded-md overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative z-10">{nav.text}</div>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-secondary transition-all duration-500 group-hover:w-full"></span>
                </a>
                {/* <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#db0e2b] group-hover:w-full duration-200 delay-100"></span> */}
              </li> 
            ))}
          </ul>
        </nav>
        <div className={`
  
            overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-64 opacity-100 p-5 " : "max-h-0 opacity-0 sm:opacity-100 sm:max-h-full py-2"}
          `}>
    
            <div>
              <a className="bg-primary hover:bg-secondary px-4 py-2 text-white rounded-full" href="">ติดต่อเรา</a>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
