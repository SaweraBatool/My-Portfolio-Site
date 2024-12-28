import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full pt-8 px-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Sawera</div>
        <ul className={`gap-10 lg:gap-16 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          <li className="menuLink cursor-pointer"><a href="#hero">Home</a></li>
          <li className="menuLink cursor-pointer"><a href="#about">About</a></li>
          <li className="menuLink cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="menuLink cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="menuLink cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
        <AiOutlineMenu
          className="md:hidden"
          size={30}
          onClick={() => setIsMenuOpen(!isMenuOpen)}  
        />
      </div>
    </div>
  );
};

export default Navbar;
