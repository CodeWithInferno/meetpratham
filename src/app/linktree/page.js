import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram, FaSnapchat, FaLinkedin } from 'react-icons/fa';

const LinkTree = () => {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/Deep Purple.jpg')"}}>
        <div className="mt-20">
          <div className="rounded-full border-2 border-black overflow-hidden w-28 h-28 mb-4">
            <Image
              src="/prathamdown.jpeg" // Replace with the path to your avatar image
              alt="Avatar"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className='text-center text-white font-semibold'>
            <h3>@Pratham_Disc</h3>
          </div>
          <div className='text-center text-pretty'>
            <p>This Is My Link Tree </p>
          </div>
        </div>
        <div className='flex items-center justify-center my-2 gap-2 mx-2'> {/* Flexbox container for icons */}
          <FaInstagram className='text-2xl text-black ' />
          <FaSnapchat className='text-2xl text-black' />
          <FaLinkedin className='text-2xl text-black' />
        </div>
        <div className='text-center border-2 px-48 py-2 rounded-lg border-white my-2 text-white font-semibold'>
          <button>
            <a href="https://www.instagram.com/pratham_disc/" target="_blank" rel="noreferrer">Instagram</a>
          </button>        
        </div>
        <div className='text-center border-2 px-48 py-2 rounded-lg border-white my-2 text-white font-semibold'>
          <button>
            <a href="https://www.instagram.com/pratham_disc/" target="_blank" rel="noreferrer">Instagram</a>
          </button>        
        </div>
        <div className='text-center border-2 px-48 py-2 rounded-lg border-white my-2 text-white font-semibold'>
          <button>
            <a href="https://www.instagram.com/pratham_disc/" target="_blank" rel="noreferrer">Instagram</a>
          </button>        
        </div>
      </div>
      <div className='bg-black text-white flex text-sm items-center justify-center bottom-0 sticky w-full mb-0 h-8'>
        <p className='text-center'>@pratham_disc | Meet Pratham</p>
      </div>
    </div>
  );
};

export default LinkTree;
