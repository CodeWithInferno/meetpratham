'use client';
import React from 'react';
import Head from 'next/head';
import Header from '../Components/Header';
import imageUrlBuilder from '@sanity/image-url';
import Footer from '../Components/Footer';
import { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';

const Page = () => {
    const [images, setImages] = useState([]);

    const client = sanityClient({
        projectId: '1igdvz19',
        dataset: 'production',
        useCdn: false,
    });

    const builder = imageUrlBuilder(client);

    function urlFor(source) {
      return builder.image(source);
    }

    useEffect(() => {
        const fetchImages = async () => {
          try {
            const imageData = await client.fetch('*[_type == "work"]{title, "imageUrl": image.asset->url, gitLink}');
            setImages(imageData);
          } catch (error) {
            console.error('Error fetching images:', error);
          }
        };
      
        fetchImages();
    }, []);

    const isValidUrl = (string) => {
        try {
          new URL(string);
          return true;
        } catch (_) {
          return false;  
        }
    };

    return (
        <div className='bg-white text-black min-h-screen h-1/2 bg-no-repeat'>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 rounded-full h-1/6 gap-4 ml-20  mb-10 mt-10">
                {images.map((image, index) => {
                    console.log(isValidUrl(image.gitLink));
                    return (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full h-64" src={image.imageUrl} alt={image.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{image.title}</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {isValidUrl(image.gitLink) && (
                                    <a href={image.gitLink} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full">
                                            View on GitHub
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}

export default Page;