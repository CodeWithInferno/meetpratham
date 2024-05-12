'use client';


import React, { useState } from 'react';
import { FaInstagram, FaSnapchat, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex flex-wrap items-center justify-between p-5 bg-transparent text-3xl font-semibold text-black h-16">
      <div className="lg:ml-48">Pratham</div>
      <div className="lg:hidden">
        <button className="text-black text-sm mt-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" /> }
        </button>
      </div>
      <div className="hidden lg:flex space-x-4 text-2xl font-normal mr-48">
        <button className="hover:underline text-sm">Wallpapers</button>
        <button className="hover:underline text-sm">Projects</button>
        <button className="hover:underline text-sm">GitHub</button>
        <FaInstagram />
        <FaSnapchat />
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center space-y-4 mt-10 text-base font-normal">
            <button className="hover:underline text-sm">Wallpapers</button>
            <button className="hover:underline text-sm">Projects</button>
            <button className="hover:underline text-sm">Working on</button>
            <FaInstagram />
            <FaSnapchat />
          </div>
          <button className="absolute top-0 right-0 m-4 text-4xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;