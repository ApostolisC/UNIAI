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
  const leftClass = isLeftPosition ? 'order-first' : 'order-last';

  return (
    <div className="flex w-[68vw] mx-auto my-20 rounded-3xl shadow-md text-white overflow-hidden">
      {/* Left part or Right part based on position */}
      <div className={`flex items-center justify-center w-2/5 p-8 ${backgroundColor} ${leftClass}`}>
        <div className="flex items-center space-x-4">
          {/* Conditionally render based on position */}
          {isLeftPosition ? (
            <>
              <h2 className="text-3xl font-bold text-center">{title}</h2>
              <Image src={smallerIconSource ?? icon} alt={title} width={smallerIconSource ? 100 : 126} height={smallerIconSource ? 100 : 126} className="flex-shrink-0" />
            </>
          ) : (
            <>
              <Image src={smallerIconSource ?? icon} alt={title} width={smallerIconSource ? 100 : 126} height={smallerIconSource ? 100 : 126} className="flex-shrink-0 mr-4" />
              <h2 className="text-3xl font-bold text-center">{title}</h2>
            </>
          )}
        </div>
      </div>

      {/* Right part or Left part based on position */}
      <div className="w-3/5 py-10 px-4 bg-white">
        <p className="text-xl text-black leading-9">{text}</p>
      </div>
    </div>
  );
};

export default Benefit;
