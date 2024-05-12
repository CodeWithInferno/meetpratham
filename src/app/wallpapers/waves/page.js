// page.js
'use client';
import { useState, useEffect, Suspense } from 'react';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Fade } from 'react-awesome-reveal';
import dynamic from 'next/dynamic';

const ImageWithLoading = dynamic(() => import('../../Components/ImageWithLoading'));

const client = sanityClient({
  projectId: '1igdvz19',
  dataset: 'production',
  useCdn: false, // Enable if you want to use the CDN
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageData = await client.fetch('*[_type == "images" && category == "Alien"]{title, "imageUrl": mainImage.asset->url}');
        setImages(imageData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='bg-white text-black min-h-screen h-full bg-no-repeat'>
      <Header />

      <div className="flex flex-col items-left ml-4 mt-4 space-y-1">
        {images.map((image, index) => (
          <Fade key={index}>
            <div className="relative w-9/12 h-1/12">
              <Suspense fallback={<div className="bg-gray-200 w-9/12 h-1/12"></div>}>
                <ImageWithLoading src={image.imageUrl} alt={image.title} />
              </Suspense>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition duration-100">
                <p className="text-black text-lg absolute top-0 right-0 m-2 font-bold">{image.title}</p>
              </div>
              <button class="relative inline-flex mt-5  items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </button>
            </div>
          </Fade>
        ))}
      </div>

      <Footer/>
    </div>
  );
}