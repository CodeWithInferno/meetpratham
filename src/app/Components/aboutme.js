import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='flex bg-gray-300 h-64 w-auto p-4'> 
      <div className='mr-4 mx-20 my-5'>
        <Image src="/prathamdown.jpeg" alt="Avatar" className='rounded-full' width={200} height={200} />
      </div>
      <div className='flex-grow my-10 mx-10'>
        <p>I am Pratham Patel (CodeWithInferno) And I And You Can Have A Look What Is My Life Like</p>
        <button className='bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Click me
        </button>
      </div>
    </div>
  );
};

export default AboutMe;