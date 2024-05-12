

import React, { useState } from 'react';
import { FaInstagram, FaSnapchat, FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation/'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()



  return (
    <>
    <header className="relative flex flex-wrap items-center justify-between p-5 bg-transparent text-3xl font-semibold text-black h-28">
    <div className="lg:ml-48">Pratham</div>
      <div className="lg:hidden">
        <button className="text-black text-sm mt-10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" /> }
        </button>
      </div>
      <div className="hidden lg:flex space-x-4 text-2xl font-normal mr-48">
        <button type="button" onClick={() => router.push('/wallpapers')}  className="hover:underline text-sm">Wallpapers</button>
        <button type="button" onClick={() => router.push('/workingon')}  className="hover:underline text-sm">Projects</button>
        <button type="button" onClick={() => router.push('/dashboard')}  className="hover:underline text-sm">GitHub</button>
        <FaInstagram />
        <FaSnapchat />
        
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center space-y-4 mt-10 text-base font-normal">
            <button type="button" onClick={() => router.push('/wallpapers')}  className="hover:underline text-sm">Wallpapers</button>
            <button type="button" onClick={() => router.push('/workingon')}  className="hover:underline text-sm">Projects</button>
            <button type="button" onClick={() => router.push('/dashboard')}  className="hover:underline text-sm">Working on</button>
            <FaInstagram />
            <FaSnapchat />
          </div>
          <button className="absolute top-0 right-0 m-4 text-4xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>
      )}
    </header>
          <div className="border-b-2 border-gray-200 my-4 mx-10"></div>
</>
    
  );
};

export default Header;