import Image from 'next/image';
import React from 'react';

const Languages = () => {
    return (
        <div>
        <div className='mx-10 my-10'>
            <h1 className='text-2xl font-bold'>Languages I Know</h1>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>So I Am Learning Many Languages And Have Mastered Many So Here Are Some Of My favorites</p>
         </div>
        <div className="grid grid-cols-4 gap-4 gap-x-0 mx-10 my-10">
            <div className="bg-white h-64 w-64 relative flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image src={"/java.png"} width={100} height={100} className="shadow-outside" />
            </div>
            <div className="bg-white h-64 w-64 relative flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image src={"/python.png"} width={100} height={100} className="shadow-outside" />
            </div>
            <div className="bg-white h-64 w-64 relative flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image src={"/react.png"} width={100} height={100} className="shadow-outside" />
            </div>
            <div className="bg-white h-64 w-64 relative flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image src={"/mongo.png"} width={100} height={100} className="shadow-outside" />
            </div>
            <div className="bg-white h-64 w-64 relative flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image src={"/docker.png"} width={100} height={100} className="shadow-outside" />
            </div>
            <div className="bg-white h-64 w-64 relative flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image src={"/c++.png"} width={100} height={100} className="shadow-outside" />
            </div>
            <div className="bg-white h-64 w-64 relative flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image src={"/sanity.png"} width={100} height={100} className="shadow-outside" />
            </div>
            <div className="bg-white h-64 w-64 relative flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image src={"/tailwind.png"} width={100} height={100} className="shadow-outside" />
            </div>
        </div>
        </div>
        
    );
};

export default Languages;