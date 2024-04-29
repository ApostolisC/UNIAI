import React from 'react';
import Image from 'next/image';

const ValuesBox = ( {image, title, content, extraStyle} : {image:any, title:any, content:any, extraStyle:any}) => {
    return(
        <div className={`relative overflow-hidden group mb-5 ${extraStyle}`}>
            <img src={image} alt="Image 2" className="w-[20vw] h-auto object-cover transition-transform duration-3000 transform group-hover:scale-100" />
            <div style={{ transitionDuration: '500ms' }} className="w-[20vw] transition h-auto absolute inset-0 bg-black bg-opacity-70 content-center items-center justify-center opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-2xl font-quicksand leading-6 ml-5 mb-1">{title}</h3>
                <p className="text-white font-quicksand text-base leading-6 ml-5">{content}</p>
            </div>
        </div>
    );
};

export default ValuesBox