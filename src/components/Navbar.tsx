import React from "react";
import { BsBell, BsGear, BsSunFill, BsMoonFill } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <nav className="bg-white flex items-center justify-between py-5 px-10 absolute top-0 w-full shadow-lg z-10">
      <div className="text-5xl cursor-pointer">LOGO</div>
      <div className="flex items-center gap-4">
        <div className="border-2 rounded-full flex justify-center items-center w-12 h-12 relative cursor-pointer">
          <BsBell />
          <span className="h-5 w-5 flex justify-center  text-white bg-blue-600 rounded-full absolute -top-1 -right-1">
            2
          </span>
        </div>
        <div className="border-2 rounded-full flex justify-center items-center w-12 h-12 cursor-pointer">
          <BsGear />
        </div>
        <div className="border-2 rounded-full flex justify-center items-center w-12 h-12 cursor-pointer">
          <AiOutlinePoweroff />
        </div>

        <button
          type="button"
          className="bg-gray-400 cursor-pointer h-12 w-6 rounded-full flex flex-col justify-between items-center text-sm py-1 text-gray-700 relative"
          onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
        >
          <BsSunFill />
          <BsMoonFill />
          <span
            className="absolute h-5 w-5 bg-white rounded-full shadow-2xl transition-all"
            style={{ top: isDarkMode ? "26px" : "2px" }}
          ></span>
        </button>
      </div>
    </nav>
  );
}
