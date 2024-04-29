import React from 'react';
import Image from 'next/image';

const AboutUsBox = ( {image, bgcolor, title, content} : {image:any, bgcolor:any, title:any, content:any}) => {
    return(
        <div className={`bg-[${bgcolor}] grid grid-cols-12 relative mt-[30px] ml-auto mr-auto w-[60vw] p-8 text-xl leading-7 rounded-3xl`}>
            <div className='self-center col-span-2'>
                <Image src={image} alt="Uniai logo" width="124" height="124"></Image>
            </div>
            <div className="self-center ml-[50px] text-xl col-span-10">
                <h4 className="text-2xl">{title}</h4>
                <br />
                <p>{content}</p>
            </div>
        </div>
    );
};

export default AboutUsBox