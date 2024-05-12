import React from 'react';
import Image from 'next/image';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function wallpapers() {
    return(
        <div className='bg-white text-black min-h-screen h-full' >
            <Header />
            <section className="flex flex-col items-center justify-center">
                <h2 className="text-center font-bold text-4xl mb-4">Alien Landscape</h2>
                <div className="flex flex-row items-center justify-center bg-white rounded-lg p-4 mb-4">
                    <div className="flex flex-col mr-4">
                        <p className="text-2xl text-right">Fourth wallpaper pack is a variation on the</p>
                        <p className="text-2xl text-right">popular topological wallpapers! Two slightly</p>
                        <p className="text-2xl text-right">different designs in multiple colors and crisp</p>
                        <p className="text-2xl text-right mb-4">5k resolution!</p>
                        <button className="bg-transparent text-black font-bold py-2 px-4 rounded border border-black float-right">Button</button>
                    </div>
                    <Image src="/A - Cyan.png" className='rounded-lg' alt="Alien Landscape" width={300} height={300} />
                </div>
                <h2 className="text-center font-bold text-4xl mb-4">Alien Landscape</h2>
                <div className="flex flex-row-reverse items-center justify-center bg-white rounded-lg p-4 mb-4">
                    <div className="flex flex-col ml-4">
                        <p className="text-2xl text-left">Fourth wallpaper pack is a variation on the</p>
                        <p className="text-2xl text-left">popular topological wallpapers! Two slightly</p>
                        <p className="text-2xl text-left">different designs in multiple colors and crisp</p>
                        <p className="text-2xl text-left mb-4">5k resolution!</p>
                        <button className="bg-transparent text-black font-bold py-2 px-4 rounded border border-black float-left">Button</button>
                    </div>
                    <Image src="/A - Cyan.png" className='rounded-lg' alt="Alien Landscape" width={300} height={300} />
                </div>
                <h2 className="text-center font-bold text-4xl mb-4">Alien Landscape</h2>
                <div className="flex flex-row items-center justify-center bg-white rounded-lg p-4 mb-4">
                    <div className="flex flex-col mr-4">
                        <p className="text-2xl text-right">Fourth wallpaper pack is a variation on the</p>
                        <p className="text-2xl text-right">popular topological wallpapers! Two slightly</p>
                        <p className="text-2xl text-right">different designs in multiple colors and crisp</p>
                        <p className="text-2xl text-right mb-4">5k resolution!</p>
                        <button className="bg-transparent text-black font-bold py-2 px-4 rounded border border-black float-right">Button</button>
                    </div>
                    <Image src="/A - Cyan.png" className='rounded-lg' alt="Alien Landscape" width={300} height={300} />
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default wallpapers;