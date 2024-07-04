import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface EventProps {
  icon: string;
  title: string;
  text: string;
  date: string;
  location: string;
  position?: 'left' | 'right'; // Optional position prop, default is 'left'
}

const Event: React.FC<EventProps> = ({ icon, title, text, date, location, position = 'left' }) => {
  const isLeftPosition = position === 'left';

  return (
    <div className={`flex flex-col md:flex-row w-[85vw] md:w-[67vw] mx-auto mb-10 rounded-3xl shadow-lg overflow-hidden bg-[#FF8210]`}>

      {/* Image Section */}
      <div className={`md:w-1/2 w-full p-1 flex items-center ${isLeftPosition ? 'md:order-first' : 'md:order-last'}`}>
        <div className="relative p-4 bg-white md:border-[5px] w-40 md:w-80 mx-auto md:mx-0 mt-5 md:mt-0 border-white rounded-2xl overflow-hidden">
          <Image
            src={icon}
            alt={title}
            width={300}
            height={300}
            className="object-cover rounded"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="md:w-4/4 w-[85vw] px-8 my-8 md:my-16 flex flex-col justify-left text-center md:text-left bg-[#FF8210]">

        <h2 className="w-[60vw] mx-auto md:w-3/4 md:mx-0 text-2xl md:text-3xl font-bold mb-6">{title}</h2>
        <p className="w-[65vw] mx-auto md:w-3/4 md:mx-0 text-lg md:text-xl mt-4 mb-4 text-left">{text}</p>

        <div className="flex flex-col md:flex-row mb-4 mt-10 w-[75vw] md:w-3/4 md:mx-0">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-white text-2xl mr-2 mb-3 md:mb-0" />
          <p className="text-xl">{date}</p>
        </div>

        <div className="flex flex-col md:flex-row w-[75vw] md:w-3/4 md:mx-0">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-2xl mr-2 mb-3 md:mb-0" />
          <p className="text-xl">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
