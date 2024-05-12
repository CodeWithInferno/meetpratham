'use client';
import { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

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
    <div key={index} className="relative w-9/12 h-1/12">
      <img src={image.imageUrl} alt={image.title} className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition duration-100">
      <p className="text-black text-lg absolute top-0 right-0 m-2 font-bold">{image.title}</p>
      </div>
      
    </div>
  ))}

</div>

    <Footer/>
  </div>
);
}
