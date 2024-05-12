// 'use client';
// import React from 'react';
// import { Typewriter, Cursor } from 'react-simple-typewriter';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
// import Image from 'next/image'; // Import the Image component

// function Me() {
//   return (
//     <div className='bg-white text-black min-h-screen h-full bg-no-repeat'>
//       <Header />
//       <div>
//         <div className="hero-banner">
//             <div style={{ position: 'relative', height: '70vh' }}>
//             <Image src="/A.png" alt="Image 1" layout="fill" objectFit="cover" />
//           </div>
//           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//           <h1 className="text-white text-6xl">
//             <Typewriter
//               words={['Hello I Am Pratham Patel', 'I Am A FullStack Developer', 'Sanity Master!']}
//               loop={true}
//               cursor
//               cursorStyle='|'
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </h1>
//         </div>
//       </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Me;
























'use client';
import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Image from 'next/image'; // Import the Image component
import Marquee from 'react-marquee-slider';

function Me() {
  return (
    <div className='bg-white text-black min-h-screen h-full bg-no-repeat'>
      <Header />
      <div>
        <div className="hero-banner">
            <div style={{ position: 'relative', height: '70vh' }}>
            <Image src="/A.png" alt="Image 1" layout="fill" objectFit="cover" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-6xl">
            <Typewriter
              words={['Hello I Am Pratham Patel', 'I Am A FullStack Developer', 'Sanity Master!']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
      </div>
      </div>
      <div className="bg-gray-200 p-4 mb-1 mt-1 text-black text-2xl overflow-hidden h-16 flex items-center">
      <Marquee velocity={25}>
        {[<div  style={{ whiteSpace: 'nowrap' }}>This is your scrolling text. You can add as many items as you want. They will scroll continuously.</div>]}
      </Marquee>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default Me;