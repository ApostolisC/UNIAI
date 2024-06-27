import React from 'react';
import Image from 'next/image';

const AboutUsBox = ({ image, bgcolor, title, content }: {image:any, bgcolor:any, title:any, content:any}) => {
    return (
        <div 
            className="relative mt-8 mx-auto w-11/12 sm:w-10/12 md:w-[70vw] p-6 sm:p-8 rounded-3xl text-xl leading-7"
            style={{ backgroundColor: bgcolor }}
        >
            <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Center the image in its container */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center md:justify-start">
                    <Image src={image} alt="Uniai logo" width={124} height={124} className="object-center" />
                </div>
                <div className="text-left p-5">
                    <h4 className="text-2xl font-bold mb-5 text-center md:text-left">{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsBox;
