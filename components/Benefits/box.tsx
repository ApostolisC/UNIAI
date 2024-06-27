import React from 'react';
import Image from 'next/image';

interface BenefitProps {
  icon: string; // URL to the icon image
  title: string;
  text: string;
  position?: 'left' | 'right'; // Optional position prop, default is 'left'
  backgroundColor?: string; // Optional background color for the icon and title area
  smallerIconSource?: string; // Optional smaller icon source
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, text, position = 'left', backgroundColor = 'bg-gray-100', smallerIconSource }) => {
  const isLeftPosition = position === 'left';

  return (
    <div className="flex flex-col md:flex-row w-[90vw] md:w-[68vw] mx-auto my-20 rounded-3xl shadow-md overflow-hidden">
      {/* Top part on mobile, Left/Right part on desktop */}
      <div className={`flex flex-col md:flex-row items-center justify-center md:w-2/5 w-full p-8 ${backgroundColor} ${isLeftPosition ? 'md:order-first' : 'md:order-last'}`}>
        {isLeftPosition ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-4 md:mb-0">{title}</h2>
            <Image src={smallerIconSource ?? icon} alt={title} width={smallerIconSource ? 100 : 126} height={smallerIconSource ? 100 : 126} className="flex-shrink-0" />
          </>
        ) : (
          <>
            <Image src={smallerIconSource ?? icon} alt={title} width={smallerIconSource ? 100 : 126} height={smallerIconSource ? 100 : 126} className="flex-shrink-0 mb-4 md:mb-0 md:mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">{title}</h2>
          </>
        )}
      </div>

      {/* Bottom part on mobile, Right/Left part on desktop */}
      <div className="md:w-3/5 w-full py-10 px-4 bg-white">
        <p className="text-lg md:text-xl text-black leading-7 md:leading-9">{text}</p>
      </div>
    </div>
  );
};

export default Benefit;
