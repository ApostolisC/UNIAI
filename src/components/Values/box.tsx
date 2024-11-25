import React, { useState } from 'react';
import Image from 'next/image';

const ValuesBox = ({ image, title, content }: { image: any, title: any, content: any}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Adjusted dimensions for responsive images
    const imageWidth = 300; // Based on your image's aspect ratio
    const imageHeight = 180; // Based on your image's aspect ratio

    return (
        <div 
            className="relative overflow-hidden group mb-5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={image}
                alt="Image"
                width={imageWidth} // Use dynamic width
                height={imageHeight} // Use dynamic height
                className="w-full h-auto transition-transform duration-3000 transform group-hover:scale-100"
            />
            <div 
                className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-start transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
                <h3 className="text-white text-2xl font-quicksand leading-6 mb-1 mx-5">{title}</h3>
                <p className="text-white font-quicksand text-base leading-6 mx-5 mb-5">{content}</p>
            </div>
        </div>
    );
};

export default ValuesBox;