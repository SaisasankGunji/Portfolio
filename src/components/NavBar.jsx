import React, { useEffect } from "react";
import logo from "../assets/S_logo-2.jpg";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home">
            <div className="flex flex-row">
              <img src={logo} alt="logo" className="rounded-2xl size-[60px]" />
              <p className="font-mono my-auto ml-3 text-2xl font-bold text-white">
                SAI
                <span className="text-blue-500 ml-[5px]">SASANK</span>
              </p>
            </div>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((m) => !m)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors ease"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors ease"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors ease"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors ease"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
