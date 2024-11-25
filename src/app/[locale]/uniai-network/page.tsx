'use client'

import '@/styles/globals.css';
import Image from 'next/image';
import PersonCard from '../../components/PersonCard/PersonCard';
import people from '../../data/mentorsData'; // Ensure you import the people data
import { useEffect, useState } from 'react';

const UniAINetwork = () => {
  // Define the colors you want to alternate between
  const borderColors = ['#9202D8', '#FF8210']; // Purple and Yellow

  // Define the sponsor images and their links
  const sponsors = [
    { name: 'Higgs', image: '/sponsors/logo-HIGGS1.png', link: 'https://higgs3.org/' },
    { name: 'Koutalidis', image: '/sponsors/Koutalidis-logo-1.png', link: 'https://www.koutalidis.gr/' },
    { name: 'ACEin', image: '/sponsors/ACEin_logo_auebfree-1.png', link: 'https://acein.aueb.gr/en/' },
    { name: 'Uniperfect', image: '/sponsors/Uniperfect.png', link: 'https://www.uniperfect.gr/' },
    { name: 'TumAI', image: '/sponsors/tumai-student-initiative-logo-2.png', link: 'https://www.tum-ai.com/' },
  ];

  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    // Check if the window width is below a certain breakpoint (e.g., 640px for phones)
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 1024);
    };

    // Initial check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full bg-gray-200 rounded-b-full py-[4vh] mb-10 bg-gradient-to-l from-[#9202D8] to-[#FF7D07]">
        {/* Left Column (Image) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image src="/lol-removebg-preview.png" alt="Logo" width={250} height={200} className="max-w-full h-auto rounded-lg" />
        </div>

        {/* Right Column (Heading) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center">UniAI.net</h2>
        </div>
      </div>

      <div className="p-6 w-[70vw] mx-auto text-left">
        <p className="mt-4 text-wrap text-[22px] text-left">The purpose of UniAI is to connect people and ideas to promote innovation and improve human life. This cannot be achieved without partnering with people and organisations that share our vision. It is those who make up UniAI.net.</p>
      </div>

      <div className="mt-14">
        <h1 className="text-[56px] font-bold text-center">
          <span>Meet</span> <span>our</span> <span className="text-[#FF8210]">Contributors</span> <span>and</span> <span>our</span> <span className="text-[#FF8210]">Mentors</span>
        </h1>
      </div>

      {/* Grid of People */}
      <div className={`p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full ${isPhone ? 'sm:w-full lg:w-full' : 'sm:w-[100vw] lg:w-[70vw]'} ${isPhone ? 'mx-0' : 'mx-[15vw]'}`}>
          {people.map((person, index) => (
            <PersonCard 
              key={index} 
              person={person}
              borderColor={borderColors[index % borderColors.length]} // Alternates between the defined colors
            />
          ))}
        </div>

      {/* Sponsors Section */}
      <div className="mt-14 mb-48 bg-gradient-to-l from-[#9202D8] to-[#FF8210] pt-10 pb-20 pl-10 pr-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {sponsors.map((sponsor, index) => (
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer" key={index} className="flex justify-center items-center">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={250} // Set a consistent width
                height={250} // Set a consistent height
                className="sponsor-logo"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniAINetwork;
